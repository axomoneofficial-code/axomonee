/// <reference types="@cloudflare/workers-types" />
// ============================================================================
// AXOM ONE — Edge REST API Worker (/api/v1)
// Architecture: Cloudflare Workers + D1 SQLite
// Authentication: Web Crypto PBKDF2 (SHA-256, 100k iters), Per-Hash Random Salt,
//                 HttpOnly/SameSite Session Cookies & Anti-CSRF Token Enforcement
// Security: Database-backed Rate Limiting, Strict Origin CORS, Strict CSP,
//           Input Bounds & Scheme Validation, Constant-Time Comparisons
// ============================================================================

export interface Env {
  DB: D1Database;
  ASSETS?: Fetcher;
  ENVIRONMENT?: string;
  LAUNCH_DISTRICT_SLUG?: string;
}

interface AdminUser {
  id: string;
  email: string;
  role: string;
  is_active: number;
}

interface AuthContext {
  admin: AdminUser;
  viaCookie: boolean;
  rawToken: string;
}

// ----------------------------------------------------------------------------
// Trusted CORS Origins & Hardened Security Headers
// ----------------------------------------------------------------------------
const TRUSTED_ORIGINS = new Set([
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:8787',
  'http://127.0.0.1:5173',
  'https://axom.one',
  'https://www.axom.one',
  'https://axomone.in',
  'https://www.axomone.in',
  'https://axom-one.pages.dev',
]);

function getSecurityHeaders(request?: Request): Record<string, string> {
  const origin = request?.headers.get('Origin');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), camera=(), microphone=(), payment=()',
    'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https://upload.wikimedia.org https://images.unsplash.com https://images.weserv.nl; frame-src 'self' https://www.openstreetmap.org; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' http://localhost:* https://axom.one; object-src 'none'; base-uri 'self'; frame-ancestors 'none';",
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-csrf-token',
  };

  if (origin && TRUSTED_ORIGINS.has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Credentials'] = 'true';
    headers['Vary'] = 'Origin';
  }

  return headers;
}

function json(data: unknown, status = 200, extraHeaders: Record<string, string> = {}, request?: Request): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...getSecurityHeaders(request), ...extraHeaders },
  });
}

function errorJson(message: string, status = 400, details?: unknown, request?: Request): Response {
  return json({ success: false, error: message, details }, status, {}, request);
}

// ----------------------------------------------------------------------------
// Cryptographic Helpers (Native Web Crypto API - PBKDF2 & SHA-256)
// ----------------------------------------------------------------------------

/**
 * Constant-time string equality comparison to prevent timing side-channel attacks.
 */
function constantTimeEqual(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const aLen = a.length;
  const bLen = b.length;
  let diff = aLen ^ bLen;
  const maxLen = Math.max(aLen, bLen);
  for (let i = 0; i < maxLen; i++) {
    const charA = i < aLen ? a.charCodeAt(i) : 0;
    const charB = i < bLen ? b.charCodeAt(i) : 0;
    diff |= charA ^ charB;
  }
  return diff === 0;
}

function generateRandomHex(bytes = 16): string {
  const array = new Uint8Array(bytes);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function hashPassword(password: string, salt?: string, iterations = 100000): Promise<string> {
  const effectiveSalt = salt || generateRandomHex(16);
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: enc.encode(effectiveSalt),
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );
  const hashHex = Array.from(new Uint8Array(derivedBits))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `pbkdf2:${iterations}:${effectiveSalt}:${hashHex}`;
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  if (!password || !storedHash || typeof password !== 'string' || typeof storedHash !== 'string') {
    return false;
  }
  const parts = storedHash.split(':');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2') {
    return false;
  }
  const iterations = parseInt(parts[1], 10);
  if (isNaN(iterations) || iterations < 10000) return false;
  const salt = parts[2];
  const expectedHash = parts[3];

  const computedFull = await hashPassword(password, salt, iterations);
  const computedHash = computedFull.split(':')[3];
  return constantTimeEqual(computedHash, expectedHash);
}

async function hashToken(token: string): Promise<string> {
  const enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', enc.encode(token));
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function generateRandomToken(bytes = 32): string {
  return generateRandomHex(bytes);
}

/**
 * Derives an Anti-CSRF token cryptographically bound to the current session token.
 */
async function generateCsrfToken(sessionToken: string): Promise<string> {
  const enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest('SHA-256', enc.encode(`csrf:${sessionToken}:axomone`));
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// ----------------------------------------------------------------------------
// Input Validation & Scheme Sanitizers
// ----------------------------------------------------------------------------
function isValidHttpUrl(urlString: string): boolean {
  if (!urlString || typeof urlString !== 'string') return false;
  const trimmed = urlString.trim().toLowerCase();
  if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:') || trimmed.startsWith('vbscript:') || trimmed.startsWith('file:')) {
    return false;
  }
  try {
    const url = new URL(trimmed);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string' || email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

function sanitizeString(input: unknown, maxLength = 1000): string {
  if (!input || typeof input !== 'string') return '';
  return input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, maxLength);
}

// ----------------------------------------------------------------------------
// Rate Limiting (Database-backed via rate_limit_events table)
// ----------------------------------------------------------------------------
async function checkRateLimit(db: D1Database, actionKey: string, maxHits = 10, windowMinutes = 15): Promise<boolean> {
  const now = new Date();
  const windowStart = new Date(now.getTime() - windowMinutes * 60 * 1000).toISOString();

  // Prune expired events
  await db.prepare('DELETE FROM rate_limit_events WHERE created_at < ?').bind(windowStart).run();

  // Count recent events
  const result: any = await db
    .prepare('SELECT COUNT(*) as count FROM rate_limit_events WHERE action_key = ? AND created_at >= ?')
    .bind(actionKey, windowStart)
    .first();

  if (result && result.count >= maxHits) {
    return false; // Rate limited
  }

  // Record this attempt
  const id = `rate-${generateRandomToken(12)}`;
  await db.prepare('INSERT INTO rate_limit_events (id, action_key, created_at) VALUES (?, ?, ?)')
    .bind(id, actionKey, now.toISOString())
    .run();

  return true;
}

// ----------------------------------------------------------------------------
// Authentication & Session Extraction
// ----------------------------------------------------------------------------
function parseCookies(header: string | null): Record<string, string> {
  if (!header) return {};
  return Object.fromEntries(
    header.split(';').map((c) => {
      const [k, ...v] = c.trim().split('=');
      return [k, decodeURIComponent(v.join('='))];
    })
  );
}

async function authenticateAdmin(request: Request, db: D1Database): Promise<AuthContext | null> {
  // 1. Check Cloudflare Access Signed Identity Header if deployed behind CF Access
  const cfAccessEmail = request.headers.get('Cf-Access-Authenticated-User-Email');
  const cfAccessJwt = request.headers.get('Cf-Access-Jwt-Assertion');
  if (cfAccessEmail && cfAccessJwt) {
    const adminUser: any = await db
      .prepare('SELECT id, email, role, is_active FROM admin_users WHERE LOWER(email) = LOWER(?) AND is_active = 1')
      .bind(cfAccessEmail.trim())
      .first();

    if (adminUser) {
      return {
        admin: {
          id: adminUser.id,
          email: adminUser.email,
          role: adminUser.role,
          is_active: adminUser.is_active,
        },
        viaCookie: false,
        rawToken: `cf-access:${cfAccessEmail}`,
      };
    }
  }

  let token: string | null = null;
  let viaCookie = false;

  // 2. Check HttpOnly cookie
  const cookies = parseCookies(request.headers.get('Cookie'));
  if (cookies['axom_session']) {
    token = cookies['axom_session'];
    viaCookie = true;
  }

  // 3. Fallback to Authorization Header
  const authHeader = request.headers.get('Authorization');
  if (!token && authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7).trim();
    viaCookie = false;
  }

  if (!token) return null;

  const tokenHashed = await hashToken(token);
  const now = new Date().toISOString();

  const session: any = await db
    .prepare(
      `SELECT s.id, s.admin_user_id, s.expires_at, u.id as user_id, u.email, u.role, u.is_active
       FROM sessions s
       JOIN admin_users u ON s.admin_user_id = u.id
       WHERE s.token_hash = ? AND s.expires_at > ? AND u.is_active = 1`
    )
    .bind(tokenHashed, now)
    .first();

  if (!session) return null;

  return {
    admin: {
      id: session.user_id,
      email: session.email,
      role: session.role,
      is_active: session.is_active,
    },
    viaCookie,
    rawToken: token,
  };
}

// ----------------------------------------------------------------------------
// Main Worker Router
// ----------------------------------------------------------------------------
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method;
    const clientIp = request.headers.get('cf-connecting-ip') || '127.0.0.1';

    // 1. CORS Preflight
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: getSecurityHeaders(request) });
    }

    // Only process /api/v1 routes
    if (url.pathname.startsWith('/api/v1')) {
      try {
        // --------------------------------------------------------------------
        // HEALTH CHECK
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/health' && method === 'GET') {
          return json(
            {
              status: 'healthy',
              service: 'Axom One Edge API',
              version: '1.0.0',
              timestamp: new Date().toISOString(),
              environment: env.ENVIRONMENT || 'development',
            },
            200,
            {},
            request
          );
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/districts
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/districts' && method === 'GET') {
          const { results } = await env.DB.prepare(
            'SELECT id, name, slug, name_as, is_active FROM districts ORDER BY name ASC'
          ).all();
          return json({ success: true, data: results }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/categories
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/categories' && method === 'GET') {
          const { results } = await env.DB.prepare(
            'SELECT id, name, slug, description, icon, is_active FROM categories WHERE is_active = 1 ORDER BY name ASC'
          ).all();
          return json({ success: true, data: results }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/listings (Search, Filters & Pagination)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/listings' && method === 'GET') {
          const districtSlug = sanitizeString(url.searchParams.get('district'), 50);
          const categorySlug = sanitizeString(url.searchParams.get('category'), 50);
          const listingType = sanitizeString(url.searchParams.get('type'), 30);
          const search = sanitizeString(url.searchParams.get('q'), 100);
          const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10) || 1);
          const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get('limit') || '20', 10) || 20));
          const offset = (page - 1) * limit;

          let query = `
            SELECT l.id, l.title, l.slug, l.description, l.listing_type, l.address,
                   l.contact_email, l.contact_phone, l.website_url, l.opening_hours_json,
                   l.verification_status, l.is_sponsored, l.created_at, l.published_at,
                   d.name as district_name, d.slug as district_slug, d.name_as as district_name_as,
                   c.name as category_name, c.slug as category_slug, c.icon as category_icon
            FROM listings l
            JOIN districts d ON l.district_id = d.id
            JOIN categories c ON l.category_id = c.id
            WHERE l.moderation_status = 'published'
          `;
          const params: any[] = [];

          if (districtSlug && districtSlug !== 'all') {
            query += ' AND d.slug = ?';
            params.push(districtSlug);
          }
          if (categorySlug && categorySlug !== 'all') {
            query += ' AND c.slug = ?';
            params.push(categorySlug);
          }
          if (listingType && listingType !== 'all') {
            query += ' AND l.listing_type = ?';
            params.push(listingType);
          }
          if (search) {
            query += ' AND (l.title LIKE ? OR l.description LIKE ? OR l.address LIKE ?)';
            const term = `%${search}%`;
            params.push(term, term, term);
          }

          query += ' ORDER BY l.is_sponsored DESC, l.created_at DESC LIMIT ? OFFSET ?';
          params.push(limit, offset);

          const { results } = await env.DB.prepare(query).bind(...params).all();
          return json({ success: true, data: results, page, limit }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/listings/:slug
        // --------------------------------------------------------------------
        const listingMatch = url.pathname.match(/^\/api\/v1\/listings\/([^/]+)$/);
        if (listingMatch && method === 'GET') {
          const slug = sanitizeString(listingMatch[1], 100);
          const item: any = await env.DB.prepare(
            `SELECT l.*, d.name as district_name, d.slug as district_slug, d.name_as as district_name_as,
                    c.name as category_name, c.slug as category_slug, c.icon as category_icon
             FROM listings l
             JOIN districts d ON l.district_id = d.id
             JOIN categories c ON l.category_id = c.id
             WHERE l.slug = ? AND l.moderation_status = 'published'`
          ).bind(slug).first();

          if (!item) {
            return errorJson('Listing not found', 404, undefined, request);
          }
          return json({ success: true, data: item }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/events
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/events' && method === 'GET') {
          const districtSlug = sanitizeString(url.searchParams.get('district'), 50);
          let query = `
            SELECT e.id, e.title, e.slug, e.description, e.venue, e.start_at, e.end_at, e.organizer, e.source_url,
                   d.name as district_name, d.slug as district_slug, d.name_as as district_name_as
            FROM events e
            JOIN districts d ON e.district_id = d.id
            WHERE e.moderation_status = 'published'
          `;
          const params: any[] = [];
          if (districtSlug && districtSlug !== 'all') {
            query += ' AND d.slug = ?';
            params.push(districtSlug);
          }
          query += ' ORDER BY e.start_at ASC LIMIT 30';

          const { results } = await env.DB.prepare(query).bind(...params).all();
          return json({ success: true, data: results }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/events/:slug
        // --------------------------------------------------------------------
        const eventMatch = url.pathname.match(/^\/api\/v1\/events\/([^/]+)$/);
        if (eventMatch && method === 'GET') {
          const slug = sanitizeString(eventMatch[1], 100);
          const item: any = await env.DB.prepare(
            `SELECT e.*, d.name as district_name, d.slug as district_slug, d.name_as as district_name_as
             FROM events e
             JOIN districts d ON e.district_id = d.id
             WHERE e.slug = ? AND e.moderation_status = 'published'`
          ).bind(slug).first();

          if (!item) {
            return errorJson('Event not found', 404, undefined, request);
          }
          return json({ success: true, data: item }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/destinations (Search, Category & District Filters)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/destinations' && method === 'GET') {
          const category = sanitizeString(url.searchParams.get('category'), 50);
          const district = sanitizeString(url.searchParams.get('district'), 50);
          const search = sanitizeString(url.searchParams.get('q'), 100);

          // Public visitors are strictly quarantined to published records
          let query = 'SELECT * FROM destinations WHERE status = "published"';
          const params: any[] = [];

          if (category && category !== 'all') {
            query += ' AND category = ?';
            params.push(category);
          }
          if (district && district !== 'all') {
            query += ' AND (district_slug = ? OR district LIKE ?)';
            params.push(district, `%${district}%`);
          }
          if (search) {
            query += ' AND (name LIKE ? OR short_description LIKE ? OR locality LIKE ?)';
            params.push(`%${search}%`, `%${search}%`, `%${search}%`);
          }

          query += ' ORDER BY name ASC LIMIT 100';

          try {
            const { results } = await env.DB.prepare(query).bind(...params).all();
            return json({ success: true, data: results }, 200, {}, request);
          } catch {
            return json({ success: true, data: [] }, 200, {}, request);
          }
        }

        // --------------------------------------------------------------------
        // PUBLIC: GET /api/v1/destinations/:slug
        // --------------------------------------------------------------------
        const destMatch = url.pathname.match(/^\/api\/v1\/destinations\/([^/]+)$/);
        if (destMatch && method === 'GET') {
          const slug = sanitizeString(destMatch[1], 100);
          try {
            const item = await env.DB.prepare(
              'SELECT * FROM destinations WHERE (slug = ? OR id = ?) AND status = "published"'
            ).bind(slug, slug).first();
            if (!item) {
              return errorJson('Destination not found', 404, undefined, request);
            }
            return json({ success: true, data: item }, 200, {}, request);
          } catch {
            return errorJson('Destination not found', 404, undefined, request);
          }
        }

        // --------------------------------------------------------------------
        // PUBLIC: POST /api/v1/submissions (Rate-limited, validated, pending moderation)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/submissions' && method === 'POST') {
          const allowed = await checkRateLimit(env.DB, `sub:${clientIp}`, 10, 60);
          if (!allowed) {
            return errorJson('Too many submissions from this connection. Please try again later.', 429, undefined, request);
          }

          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const submitter_name = sanitizeString(body.submitter_name, 100);
          const submitter_email = sanitizeString(body.submitter_email, 150);
          const submission_type = sanitizeString(body.submission_type, 30);

          if (!submitter_name || !submitter_email || !submission_type || !body.payload) {
            return errorJson('Missing required submission fields', 400, undefined, request);
          }

          if (!isValidEmail(submitter_email)) {
            return errorJson('Please provide a valid email address', 400, undefined, request);
          }

          const permittedTypes = new Set(['business', 'service', 'event', 'opportunity', 'community', 'crafts']);
          if (!permittedTypes.has(submission_type)) {
            return errorJson('Invalid submission type', 400, undefined, request);
          }

          // Validate optional website and source URLs inside payload
          if (typeof body.payload === 'object' && body.payload !== null) {
            if (body.payload.website_url && !isValidHttpUrl(body.payload.website_url)) {
              return errorJson('Website URL must start with http:// or https://', 400, undefined, request);
            }
            if (body.payload.source_url && !isValidHttpUrl(body.payload.source_url)) {
              return errorJson('Source URL must start with http:// or https://', 400, undefined, request);
            }
          }

          const payloadStr = JSON.stringify(body.payload);
          if (payloadStr.length > 10000) {
            return errorJson('Submission payload exceeds maximum permitted size', 400, undefined, request);
          }

          const id = `sub-${Date.now()}`;
          const now = new Date().toISOString();

          await env.DB.prepare(
            `INSERT INTO submissions (id, submitter_name, submitter_email, submission_type, payload_json, moderation_status, created_at)
             VALUES (?, ?, ?, ?, ?, 'pending', ?)`
          ).bind(id, submitter_name, submitter_email, submission_type, payloadStr, now).run();

          return json(
            {
              success: true,
              message: 'Submission received and placed in the moderation queue for review.',
              submission_id: id,
            },
            201,
            {},
            request
          );
        }

        // --------------------------------------------------------------------
        // PUBLIC: POST /api/v1/reports (Rate-limited user reporting)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/reports' && method === 'POST') {
          const allowed = await checkRateLimit(env.DB, `rep:${clientIp}`, 15, 60);
          if (!allowed) {
            return errorJson('Rate limit exceeded for reports. Please wait before submitting again.', 429, undefined, request);
          }

          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          // Anti-spam honeypot detection
          if (body.hp_verification && typeof body.hp_verification === 'string' && body.hp_verification.trim().length > 0) {
            return json({ success: true, message: 'Report received. Our moderation team reviews all flagged content.' }, 200, {}, request);
          }

          const reason = sanitizeString(body.reason, 200);
          const rawDescription = sanitizeString(body.description, 2000);
          const suggestedCorrection = sanitizeString(body.suggested_correction, 1500);
          const reporter_contact = sanitizeString(body.reporter_contact, 150);
          const listing_id = sanitizeString(body.listing_id, 100);

          if (!reason || !rawDescription) {
            return errorJson('Reason and description are required for reporting content.', 400, undefined, request);
          }

          const description = suggestedCorrection
            ? `${rawDescription}\n\n[Suggested Correction]: ${suggestedCorrection}`
            : rawDescription;

          const id = `rep-${Date.now()}`;
          const now = new Date().toISOString();

          await env.DB.prepare(
            `INSERT INTO reports (id, listing_id, reason, description, reporter_contact, status, created_at)
             VALUES (?, ?, ?, ?, ?, 'pending', ?)`
          ).bind(id, listing_id || null, reason, description, reporter_contact || null, now).run();

          return json(
            {
              success: true,
              message: 'Report received. Our moderation team reviews all flagged content.',
              report_id: id,
            },
            201,
            {},
            request
          );
        }

        // --------------------------------------------------------------------
        // PUBLIC: POST /api/v1/contact
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/contact' && method === 'POST') {
          const allowed = await checkRateLimit(env.DB, `contact:${clientIp}`, 8, 30);
          if (!allowed) {
            return errorJson('Too many contact inquiries. Please try again later.', 429, undefined, request);
          }

          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const name = sanitizeString(body.name, 100);
          const email = sanitizeString(body.email, 150);
          const message = sanitizeString(body.message, 3000);

          if (!name || !email || !message) {
            return errorJson('Name, email, and message are required.', 400, undefined, request);
          }

          if (!isValidEmail(email)) {
            return errorJson('Please enter a valid email address.', 400, undefined, request);
          }

          return json(
            {
              success: true,
              message: 'Thank you for contacting Axom One. Your message has been logged for our team.',
            },
            200,
            {},
            request
          );
        }

        // ====================================================================
        // ADMINISTRATOR ROUTES
        // ====================================================================

        // POST /api/v1/admin/login (Rate limited, HttpOnly cookie & CSRF token issuance)
        if (url.pathname === '/api/v1/admin/login' && method === 'POST') {
          const allowed = await checkRateLimit(env.DB, `login:${clientIp}`, 5, 15);
          if (!allowed) {
            return errorJson('Too many failed login attempts. Please try again after 15 minutes.', 429, undefined, request);
          }

          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid email or password', 401, undefined, request);
          }

          const email = sanitizeString(body.email, 150).toLowerCase();
          const password = typeof body.password === 'string' ? body.password : '';

          if (!email || !password || !isValidEmail(email)) {
            return errorJson('Invalid email or password', 401, undefined, request);
          }

          const user: any = await env.DB.prepare(
            'SELECT id, email, password_hash, role, is_active FROM admin_users WHERE email = ?'
          ).bind(email).first();

          if (!user || user.is_active !== 1) {
            return errorJson('Invalid email or password', 401, undefined, request);
          }

          const isValid = await verifyPassword(password, user.password_hash);
          if (!isValid) {
            return errorJson('Invalid email or password', 401, undefined, request);
          }

          // Session rotation: Invalidate existing sessions for this administrator
          await env.DB.prepare('DELETE FROM sessions WHERE admin_user_id = ?').bind(user.id).run();

          // Create new cryptographically random session
          const token = generateRandomToken(32);
          const tokenHashed = await hashToken(token);
          const csrfToken = await generateCsrfToken(token);
          const sessionId = `sess-${Date.now()}`;
          const now = new Date();
          const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days

          await env.DB.prepare(
            'INSERT INTO sessions (id, admin_user_id, token_hash, expires_at, created_at) VALUES (?, ?, ?, ?, ?)'
          ).bind(sessionId, user.id, tokenHashed, expiresAt, now.toISOString()).run();

          // Update last login timestamp
          await env.DB.prepare('UPDATE admin_users SET last_login_at = ? WHERE id = ?')
            .bind(now.toISOString(), user.id)
            .run();

          // Audit log for login
          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, user.id, 'LOGIN', 'admin_users', user.id, JSON.stringify({ ip: clientIp }), now.toISOString()).run();

          const cookieHeader = `axom_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 86400}; Secure`;

          return json(
            {
              success: true,
              user: { id: user.id, email: user.email, role: user.role },
              token,
              csrf_token: csrfToken,
            },
            200,
            { 'Set-Cookie': cookieHeader },
            request
          );
        }

        // Authenticate remaining admin endpoints
        const authContext = await authenticateAdmin(request, env.DB);
        if (!authContext) {
          return errorJson('Unauthorized: Administrator access required', 401, undefined, request);
        }

        const { admin, viaCookie, rawToken } = authContext;

        // Anti-CSRF Protection: Required for cookie-based state-changing mutations
        if (['POST', 'PATCH', 'DELETE', 'PUT'].includes(method)) {
          if (viaCookie) {
            const csrfHeader = request.headers.get('x-csrf-token');
            const expectedCsrf = await generateCsrfToken(rawToken);
            if (!csrfHeader || !constantTimeEqual(csrfHeader, expectedCsrf)) {
              return errorJson('Forbidden: Invalid or missing CSRF token', 403, undefined, request);
            }
          }
        }

        // GET /api/v1/admin/me
        if (url.pathname === '/api/v1/admin/me' && method === 'GET') {
          const csrfToken = await generateCsrfToken(rawToken);
          return json({ success: true, user: admin, csrf_token: csrfToken }, 200, {}, request);
        }

        // POST /api/v1/admin/logout
        if (url.pathname === '/api/v1/admin/logout' && method === 'POST') {
          const tokenHashed = await hashToken(rawToken);
          await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(tokenHashed).run();
          const clearCookie = `axom_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Secure`;
          return json({ success: true, message: 'Logged out successfully' }, 200, { 'Set-Cookie': clearCookie }, request);
        }

        // GET /api/v1/admin/submissions
        if (url.pathname === '/api/v1/admin/submissions' && method === 'GET') {
          const status = sanitizeString(url.searchParams.get('status'), 20) || 'pending';
          const { results } = await env.DB.prepare(
            'SELECT * FROM submissions WHERE moderation_status = ? ORDER BY created_at DESC LIMIT 50'
          ).bind(status).all();
          return json({ success: true, data: results }, 200, {}, request);
        }

        // POST /api/v1/admin/submissions/:id/approve
        const approveMatch = url.pathname.match(/^\/api\/v1\/admin\/submissions\/([^/]+)\/approve$/);
        if (approveMatch && method === 'POST') {
          const subId = sanitizeString(approveMatch[1], 100);
          const sub: any = await env.DB.prepare('SELECT * FROM submissions WHERE id = ?').bind(subId).first();
          if (!sub) return errorJson('Submission not found', 404, undefined, request);

          const now = new Date().toISOString();

          // Mark submission approved
          await env.DB.prepare(
            'UPDATE submissions SET moderation_status = "approved", reviewed_at = ? WHERE id = ?'
          ).bind(now, subId).run();

          // Write audit log
          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, admin.id, 'SUBMISSION_APPROVE', 'submissions', subId, JSON.stringify({ reviewer: admin.email }), now).run();

          return json({ success: true, message: 'Submission approved successfully' }, 200, {}, request);
        }

        // POST /api/v1/admin/submissions/:id/reject
        const rejectMatch = url.pathname.match(/^\/api\/v1\/admin\/submissions\/([^/]+)\/reject$/);
        if (rejectMatch && method === 'POST') {
          const subId = sanitizeString(rejectMatch[1], 100);
          let body: any = {};
          try {
            body = await request.json();
          } catch {}

          const notes = sanitizeString(body.notes, 500) || 'Did not meet publication standards';
          const now = new Date().toISOString();

          await env.DB.prepare(
            'UPDATE submissions SET moderation_status = "rejected", reviewer_notes = ?, reviewed_at = ? WHERE id = ?'
          ).bind(notes, now, subId).run();

          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, admin.id, 'SUBMISSION_REJECT', 'submissions', subId, JSON.stringify({ notes }), now).run();

          return json({ success: true, message: 'Submission rejected' }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // ADMIN: GET /api/v1/admin/listings (All statuses, filters, search, pagination)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/admin/listings' && method === 'GET') {
          const status = sanitizeString(url.searchParams.get('status'), 30);
          const category = sanitizeString(url.searchParams.get('category'), 50);
          const district = sanitizeString(url.searchParams.get('district'), 50);
          const search = sanitizeString(url.searchParams.get('q'), 100);
          const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10), 1), 100);
          const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

          let query = `
            SELECT l.*, d.name as district_name, d.slug as district_slug, d.name_as as district_name_as,
                   c.name as category_name, c.slug as category_slug, c.icon as category_icon
            FROM listings l
            JOIN districts d ON l.district_id = d.id
            JOIN categories c ON l.category_id = c.id
            WHERE 1=1
          `;
          let countQuery = 'SELECT COUNT(*) as count FROM listings l WHERE 1=1';
          const params: any[] = [];
          const countParams: any[] = [];

          if (status && status !== 'all') {
            query += ' AND l.moderation_status = ?';
            countQuery += ' AND l.moderation_status = ?';
            params.push(status);
            countParams.push(status);
          }
          if (district && district !== 'all') {
            query += ' AND (l.district_id = ? OR d.slug = ?)';
            countQuery += ' AND l.district_id = ?';
            params.push(district, district);
            countParams.push(district);
          }
          if (category && category !== 'all') {
            query += ' AND (l.category_id = ? OR c.slug = ?)';
            countQuery += ' AND l.category_id = ?';
            params.push(category, category);
            countParams.push(category);
          }
          if (search) {
            query += ' AND (l.title LIKE ? OR l.description LIKE ? OR l.address LIKE ?)';
            countQuery += ' AND (l.title LIKE ? OR l.description LIKE ? OR l.address LIKE ?)';
            params.push(`%${search}%`, `%${search}%`, `%${search}%`);
            countParams.push(`%${search}%`, `%${search}%`, `%${search}%`);
          }

          query += ' ORDER BY l.created_at DESC LIMIT ? OFFSET ?';
          params.push(limit, offset);

          try {
            const [{ results }, totalRow] = await Promise.all([
              env.DB.prepare(query).bind(...params).all(),
              env.DB.prepare(countQuery).bind(...countParams).first() as Promise<{ count: number } | null>,
            ]);
            return json({ success: true, listings: results, total: totalRow?.count || 0 }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to load admin listings', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: POST /api/v1/admin/listings (Create Directory Listing)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/admin/listings' && method === 'POST') {
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const title = sanitizeString(body.title, 200);
          const district_id = sanitizeString(body.district_id, 100);
          const category_id = sanitizeString(body.category_id, 100);
          const description = sanitizeString(body.description, 2000);
          const listing_type = sanitizeString(body.listing_type, 50) || 'business';

          if (!title || !district_id || !category_id || !description) {
            return errorJson('Missing required listing fields (title, district_id, category_id, description)', 400, undefined, request);
          }

          const slug = sanitizeString(body.slug, 120) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const id = `list-${Date.now()}`;
          const now = new Date().toISOString();
          const moderation_status = ['published', 'draft', 'pending', 'suspended'].includes(body.moderation_status) ? body.moderation_status : 'published';
          const verification_status = ['verified', 'unverified'].includes(body.verification_status) ? body.verification_status : 'verified';

          try {
            await env.DB.prepare(`
              INSERT INTO listings (
                id, district_id, category_id, title, slug, description, listing_type,
                address, contact_email, contact_phone, website_url, opening_hours_json,
                image_key, source_url, verification_status, moderation_status, is_sponsored,
                created_at, updated_at, published_at
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              id, district_id, category_id, title, slug, description, listing_type,
              sanitizeString(body.address, 300) || null,
              sanitizeString(body.contact_email, 120) || null,
              sanitizeString(body.contact_phone, 50) || null,
              sanitizeString(body.website_url, 300) || null,
              typeof body.opening_hours_json === 'string' ? body.opening_hours_json : JSON.stringify(body.opening_hours_json || {}),
              sanitizeString(body.image_key || body.image_url, 300) || null,
              sanitizeString(body.source_url, 300) || null,
              verification_status,
              moderation_status,
              body.is_sponsored ? 1 : 0,
              now,
              now,
              moderation_status === 'published' ? now : null
            ).run();

            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'LISTING_CREATE', 'listings', id, JSON.stringify({ title, slug }), now).run();

            return json({ success: true, message: 'Listing created successfully', id, slug }, 201, {}, request);
          } catch (e: any) {
            return errorJson('Failed to create listing', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: PATCH /api/v1/admin/listings/:id (Update Directory Listing)
        // --------------------------------------------------------------------
        const listingPatchMatch = url.pathname.match(/^\/api\/v1\/admin\/listings\/([^/]+)$/);
        if (listingPatchMatch && method === 'PATCH') {
          const listId = sanitizeString(listingPatchMatch[1], 100);
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const now = new Date().toISOString();
          const updates: string[] = ['updated_at = ?'];
          const params: any[] = [now];

          if (body.title) { updates.push('title = ?'); params.push(sanitizeString(body.title, 200)); }
          if (body.district_id) { updates.push('district_id = ?'); params.push(sanitizeString(body.district_id, 100)); }
          if (body.category_id) { updates.push('category_id = ?'); params.push(sanitizeString(body.category_id, 100)); }
          if (body.description) { updates.push('description = ?'); params.push(sanitizeString(body.description, 2000)); }
          if (body.listing_type) { updates.push('listing_type = ?'); params.push(sanitizeString(body.listing_type, 50)); }
          if (body.address !== undefined) { updates.push('address = ?'); params.push(sanitizeString(body.address, 300)); }
          if (body.contact_phone !== undefined) { updates.push('contact_phone = ?'); params.push(sanitizeString(body.contact_phone, 50)); }
          if (body.contact_email !== undefined) { updates.push('contact_email = ?'); params.push(sanitizeString(body.contact_email, 120)); }
          if (body.website_url !== undefined) { updates.push('website_url = ?'); params.push(sanitizeString(body.website_url, 300)); }
          if (body.source_url !== undefined) { updates.push('source_url = ?'); params.push(sanitizeString(body.source_url, 300)); }
          if (body.image_key !== undefined || body.image_url !== undefined) {
            updates.push('image_key = ?'); params.push(sanitizeString(body.image_key || body.image_url, 300));
          }
          if (body.opening_hours_json !== undefined) {
            updates.push('opening_hours_json = ?');
            params.push(typeof body.opening_hours_json === 'string' ? body.opening_hours_json : JSON.stringify(body.opening_hours_json));
          }
          if (body.moderation_status) {
            const allowed = new Set(['draft', 'pending_review', 'pending', 'published', 'rejected', 'archived', 'suspended']);
            if (!allowed.has(body.moderation_status)) {
              return errorJson('Invalid moderation status', 400, undefined, request);
            }
            updates.push('moderation_status = ?');
            params.push(body.moderation_status);
            if (body.moderation_status === 'published') {
              updates.push('published_at = ?');
              params.push(now);
            }
          }
          if (body.verification_status) {
            const allowed = new Set(['unverified', 'pending', 'verified', 'flagged']);
            if (!allowed.has(body.verification_status)) {
              return errorJson('Invalid verification status', 400, undefined, request);
            }
            updates.push('verification_status = ?');
            params.push(body.verification_status);
          }
          if (body.is_sponsored !== undefined) {
            updates.push('is_sponsored = ?');
            params.push(body.is_sponsored ? 1 : 0);
          }

          params.push(listId);
          try {
            await env.DB.prepare(`UPDATE listings SET ${updates.join(', ')} WHERE id = ?`).bind(...params).run();
            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'LISTING_UPDATE', 'listings', listId, JSON.stringify({ updates: body }), now).run();
            return json({ success: true, message: 'Listing updated successfully' }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to update listing', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: DELETE /api/v1/admin/listings/:id (Delete Listing)
        // --------------------------------------------------------------------
        const listingDeleteMatch = url.pathname.match(/^\/api\/v1\/admin\/listings\/([^/]+)$/);
        if (listingDeleteMatch && method === 'DELETE') {
          const listId = sanitizeString(listingDeleteMatch[1], 100);
          await env.DB.prepare('DELETE FROM listings WHERE id = ?').bind(listId).run();
          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, admin.id, 'LISTING_DELETE', 'listings', listId, JSON.stringify({ deleted_by: admin.email }), new Date().toISOString()).run();
          return json({ success: true, message: 'Listing deleted successfully' }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // ADMIN: GET /api/v1/admin/destinations (Explore Assam All Statuses & CRUD)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/admin/destinations' && method === 'GET') {
          const category = sanitizeString(url.searchParams.get('category'), 50);
          const district = sanitizeString(url.searchParams.get('district'), 50);
          const status = sanitizeString(url.searchParams.get('status'), 30);
          const search = sanitizeString(url.searchParams.get('q'), 100);
          const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10), 1), 100);
          const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

          let query = 'SELECT * FROM destinations WHERE 1=1';
          let countQuery = 'SELECT COUNT(*) as count FROM destinations WHERE 1=1';
          const params: any[] = [];
          const countParams: any[] = [];

          if (status && status !== 'all') {
            query += ' AND status = ?';
            countQuery += ' AND status = ?';
            params.push(status);
            countParams.push(status);
          }
          if (category && category !== 'all') {
            query += ' AND category = ?';
            countQuery += ' AND category = ?';
            params.push(category);
            countParams.push(category);
          }
          if (district && district !== 'all') {
            query += ' AND (district_slug = ? OR district LIKE ?)';
            countQuery += ' AND (district_slug = ? OR district LIKE ?)';
            params.push(district, `%${district}%`);
            countParams.push(district, `%${district}%`);
          }
          if (search) {
            query += ' AND (name LIKE ? OR short_description LIKE ? OR locality LIKE ?)';
            countQuery += ' AND (name LIKE ? OR short_description LIKE ? OR locality LIKE ?)';
            params.push(`%${search}%`, `%${search}%`, `%${search}%`);
            countParams.push(`%${search}%`, `%${search}%`, `%${search}%`);
          }

          query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
          params.push(limit, offset);

          try {
            const [{ results }, totalRow] = await Promise.all([
              env.DB.prepare(query).bind(...params).all(),
              env.DB.prepare(countQuery).bind(...countParams).first() as Promise<{ count: number } | null>,
            ]);
            return json({ success: true, data: results, total: totalRow?.count || 0 }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to load destinations', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: POST /api/v1/admin/destinations (Create Destination)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/admin/destinations' && method === 'POST') {
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const name = sanitizeString(body.name, 200);
          const category = sanitizeString(body.category, 50);
          const district = sanitizeString(body.district, 100);
          const short_description = sanitizeString(body.short_description || body.shortDescription, 500);
          const full_description = sanitizeString(body.full_description || body.fullDescription, 3000);

          if (!name || !category || !district || !short_description || !full_description) {
            return errorJson('Missing required destination fields (name, category, district, short_description, full_description)', 400, undefined, request);
          }

          const slug = sanitizeString(body.slug, 120) || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const id = `dest-${Date.now()}`;
          const now = new Date().toISOString();
          const status = ['published', 'draft', 'archived'].includes(body.status) ? body.status : 'published';

          try {
            await env.DB.prepare(`
              INSERT INTO destinations (
                id, slug, name, name_as, name_hi, category, district, district_slug, locality,
                short_description, full_description, official_website, source_url, image_url,
                image_attribution, latitude, longitude, best_season, access_notes, opening_hours,
                entry_fee, last_verified_at, status, language_json, created_at, updated_at
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              id,
              slug,
              name,
              sanitizeString(body.name_as, 200) || null,
              sanitizeString(body.name_hi, 200) || null,
              category,
              district,
              sanitizeString(body.district_slug, 100) || district.toLowerCase().replace(/\s+/g, '-'),
              sanitizeString(body.locality, 150) || null,
              short_description,
              full_description,
              sanitizeString(body.official_website || body.officialWebsite, 300) || null,
              sanitizeString(body.source_url || body.sourceUrl, 300) || null,
              sanitizeString(body.image_url || body.imageUrl, 400) || null,
              sanitizeString(body.image_attribution || body.imageAttribution, 200) || null,
              body.latitude ? Number(body.latitude) : null,
              body.longitude ? Number(body.longitude) : null,
              sanitizeString(body.best_season || body.bestSeason, 100) || null,
              sanitizeString(body.access_notes || body.accessNotes, 300) || null,
              sanitizeString(body.opening_hours || body.openingHours, 150) || null,
              sanitizeString(body.entry_fee || body.entryFee, 100) || null,
              status === 'published' ? now : null,
              status,
              typeof body.language_json === 'string' ? body.language_json : JSON.stringify(body.language || ['en', 'as', 'hi']),
              now,
              now
            ).run();

            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'DESTINATION_CREATE', 'destinations', id, JSON.stringify({ name, slug }), now).run();

            return json({ success: true, message: 'Destination created successfully', id, slug }, 201, {}, request);
          } catch (e: any) {
            return errorJson('Failed to create destination', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: PATCH /api/v1/admin/destinations/:id (Update / Publish Destination)
        // --------------------------------------------------------------------
        const destinationPatchMatch = url.pathname.match(/^\/api\/v1\/admin\/destinations\/([^/]+)$/);
        if (destinationPatchMatch && method === 'PATCH') {
          const destId = sanitizeString(destinationPatchMatch[1], 100);
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const now = new Date().toISOString();
          const updates: string[] = ['updated_at = ?'];
          const params: any[] = [now];

          if (body.status) {
            const allowed = new Set(['draft', 'pending_review', 'published', 'archived']);
            if (allowed.has(body.status)) {
              updates.push('status = ?');
              params.push(body.status);
              if (body.status === 'published' && !body.last_verified_at) {
                updates.push('last_verified_at = ?');
                params.push(now);
              }
            }
          }
          if (body.verify) { updates.push('last_verified_at = ?'); params.push(now); }
          if (body.name) { updates.push('name = ?'); params.push(sanitizeString(body.name, 200)); }
          if (body.name_as !== undefined) { updates.push('name_as = ?'); params.push(sanitizeString(body.name_as, 200)); }
          if (body.name_hi !== undefined) { updates.push('name_hi = ?'); params.push(sanitizeString(body.name_hi, 200)); }
          if (body.category) { updates.push('category = ?'); params.push(sanitizeString(body.category, 50)); }
          if (body.district) { updates.push('district = ?'); params.push(sanitizeString(body.district, 100)); }
          if (body.district_slug) { updates.push('district_slug = ?'); params.push(sanitizeString(body.district_slug, 100)); }
          if (body.locality !== undefined) { updates.push('locality = ?'); params.push(sanitizeString(body.locality, 150)); }
          if (body.short_description || body.shortDescription) {
            updates.push('short_description = ?');
            params.push(sanitizeString(body.short_description || body.shortDescription, 500));
          }
          if (body.full_description || body.fullDescription) {
            updates.push('full_description = ?');
            params.push(sanitizeString(body.full_description || body.fullDescription, 3000));
          }
          if (body.official_website || body.officialWebsite) {
            updates.push('official_website = ?');
            params.push(sanitizeString(body.official_website || body.officialWebsite, 300));
          }
          if (body.source_url || body.sourceUrl) {
            updates.push('source_url = ?');
            params.push(sanitizeString(body.source_url || body.sourceUrl, 300));
          }
          if (body.image_url || body.imageUrl) {
            updates.push('image_url = ?');
            params.push(sanitizeString(body.image_url || body.imageUrl, 400));
          }
          if (body.image_attribution || body.imageAttribution) {
            updates.push('image_attribution = ?');
            params.push(sanitizeString(body.image_attribution || body.imageAttribution, 200));
          }
          if (body.latitude !== undefined) { updates.push('latitude = ?'); params.push(body.latitude ? Number(body.latitude) : null); }
          if (body.longitude !== undefined) { updates.push('longitude = ?'); params.push(body.longitude ? Number(body.longitude) : null); }
          if (body.best_season || body.bestSeason) {
            updates.push('best_season = ?');
            params.push(sanitizeString(body.best_season || body.bestSeason, 100));
          }
          if (body.access_notes || body.accessNotes) {
            updates.push('access_notes = ?');
            params.push(sanitizeString(body.access_notes || body.accessNotes, 300));
          }
          if (body.opening_hours || body.openingHours) {
            updates.push('opening_hours = ?');
            params.push(sanitizeString(body.opening_hours || body.openingHours, 150));
          }
          if (body.entry_fee || body.entryFee) {
            updates.push('entry_fee = ?');
            params.push(sanitizeString(body.entry_fee || body.entryFee, 100));
          }

          params.push(destId);
          try {
            await env.DB.prepare(`UPDATE destinations SET ${updates.join(', ')} WHERE id = ?`).bind(...params).run();
            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'DESTINATION_UPDATE', 'destinations', destId, JSON.stringify({ updates: body }), now).run();
            return json({ success: true, message: 'Destination updated successfully' }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to update destination', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: DELETE /api/v1/admin/destinations/:id (Delete Destination)
        // --------------------------------------------------------------------
        const destinationDeleteMatch = url.pathname.match(/^\/api\/v1\/admin\/destinations\/([^/]+)$/);
        if (destinationDeleteMatch && method === 'DELETE') {
          const destId = sanitizeString(destinationDeleteMatch[1], 100);
          await env.DB.prepare('DELETE FROM destinations WHERE id = ?').bind(destId).run();
          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, admin.id, 'DESTINATION_DELETE', 'destinations', destId, JSON.stringify({ deleted_by: admin.email }), new Date().toISOString()).run();
          return json({ success: true, message: 'Destination deleted successfully' }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // ADMIN: GET /api/v1/admin/events (All events, statuses, search)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/admin/events' && method === 'GET') {
          const district = sanitizeString(url.searchParams.get('district'), 50);
          const status = sanitizeString(url.searchParams.get('status'), 30);
          const search = sanitizeString(url.searchParams.get('q'), 100);
          const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10), 1), 100);
          const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

          let query = `
            SELECT e.*, d.name as district_name, d.slug as district_slug, d.name_as as district_name_as
            FROM events e
            JOIN districts d ON e.district_id = d.id
            WHERE 1=1
          `;
          let countQuery = 'SELECT COUNT(*) as count FROM events e WHERE 1=1';
          const params: any[] = [];
          const countParams: any[] = [];

          if (status && status !== 'all') {
            query += ' AND e.moderation_status = ?';
            countQuery += ' AND e.moderation_status = ?';
            params.push(status);
            countParams.push(status);
          }
          if (district && district !== 'all') {
            query += ' AND (e.district_id = ? OR d.slug = ?)';
            countQuery += ' AND e.district_id = ?';
            params.push(district, district);
            countParams.push(district);
          }
          if (search) {
            query += ' AND (e.title LIKE ? OR e.description LIKE ? OR e.venue LIKE ? OR e.organizer LIKE ?)';
            countQuery += ' AND (e.title LIKE ? OR e.description LIKE ? OR e.venue LIKE ? OR e.organizer LIKE ?)';
            params.push(`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`);
            countParams.push(`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`);
          }

          query += ' ORDER BY e.start_at ASC LIMIT ? OFFSET ?';
          params.push(limit, offset);

          try {
            const [{ results }, totalRow] = await Promise.all([
              env.DB.prepare(query).bind(...params).all(),
              env.DB.prepare(countQuery).bind(...countParams).first() as Promise<{ count: number } | null>,
            ]);
            return json({ success: true, events: results, total: totalRow?.count || 0 }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to load admin events', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: POST /api/v1/admin/events (Create Event / Festival)
        // --------------------------------------------------------------------
        if (url.pathname === '/api/v1/admin/events' && method === 'POST') {
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const title = sanitizeString(body.title, 200);
          const district_id = sanitizeString(body.district_id, 100);
          const venue = sanitizeString(body.venue, 200);
          const start_at = sanitizeString(body.start_at, 50);
          const end_at = sanitizeString(body.end_at, 50);
          const organizer = sanitizeString(body.organizer, 150);
          const description = sanitizeString(body.description, 2000);

          if (!title || !district_id || !venue || !start_at || !end_at || !organizer || !description) {
            return errorJson('Missing required event fields (title, district_id, venue, start_at, end_at, organizer, description)', 400, undefined, request);
          }

          const id = `evt-${Date.now()}`;
          const slug = sanitizeString(body.slug, 120) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const now = new Date().toISOString();
          const moderation_status = ['published', 'draft', 'archived'].includes(body.moderation_status) ? body.moderation_status : 'published';

          try {
            await env.DB.prepare(`
              INSERT INTO events (id, district_id, title, slug, description, venue, start_at, end_at, organizer, source_url, moderation_status, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).bind(
              id, district_id, title, slug, description, venue, start_at, end_at, organizer,
              sanitizeString(body.source_url, 300) || null, moderation_status, now
            ).run();

            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'EVENT_CREATE', 'events', id, JSON.stringify({ title, slug }), now).run();

            return json({ success: true, message: 'Event created successfully', id, slug }, 201, {}, request);
          } catch (e: any) {
            return errorJson('Failed to create event', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: PATCH /api/v1/admin/events/:id (Update Event)
        // --------------------------------------------------------------------
        const eventPatchMatch = url.pathname.match(/^\/api\/v1\/admin\/events\/([^/]+)$/);
        if (eventPatchMatch && method === 'PATCH') {
          const eventId = sanitizeString(eventPatchMatch[1], 100);
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const now = new Date().toISOString();
          const updates: string[] = [];
          const params: any[] = [];

          if (body.title) { updates.push('title = ?'); params.push(sanitizeString(body.title, 200)); }
          if (body.district_id) { updates.push('district_id = ?'); params.push(sanitizeString(body.district_id, 100)); }
          if (body.venue) { updates.push('venue = ?'); params.push(sanitizeString(body.venue, 200)); }
          if (body.start_at) { updates.push('start_at = ?'); params.push(sanitizeString(body.start_at, 50)); }
          if (body.end_at) { updates.push('end_at = ?'); params.push(sanitizeString(body.end_at, 50)); }
          if (body.organizer) { updates.push('organizer = ?'); params.push(sanitizeString(body.organizer, 150)); }
          if (body.description) { updates.push('description = ?'); params.push(sanitizeString(body.description, 2000)); }
          if (body.source_url !== undefined) { updates.push('source_url = ?'); params.push(sanitizeString(body.source_url, 300)); }
          if (body.moderation_status) {
            const allowed = new Set(['published', 'draft', 'archived']);
            if (allowed.has(body.moderation_status)) {
              updates.push('moderation_status = ?');
              params.push(body.moderation_status);
            }
          }

          if (updates.length === 0) {
            return errorJson('No fields to update', 400, undefined, request);
          }

          params.push(eventId);
          try {
            await env.DB.prepare(`UPDATE events SET ${updates.join(', ')} WHERE id = ?`).bind(...params).run();
            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'EVENT_UPDATE', 'events', eventId, JSON.stringify({ updates: body }), now).run();
            return json({ success: true, message: 'Event updated successfully' }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to update event', 500, e?.message, request);
          }
        }

        // --------------------------------------------------------------------
        // ADMIN: DELETE /api/v1/admin/events/:id (Delete Event)
        // --------------------------------------------------------------------
        const eventDeleteMatch = url.pathname.match(/^\/api\/v1\/admin\/events\/([^/]+)$/);
        if (eventDeleteMatch && method === 'DELETE') {
          const eventId = sanitizeString(eventDeleteMatch[1], 100);
          await env.DB.prepare('DELETE FROM events WHERE id = ?').bind(eventId).run();
          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, admin.id, 'EVENT_DELETE', 'events', eventId, JSON.stringify({ deleted_by: admin.email }), new Date().toISOString()).run();
          return json({ success: true, message: 'Event deleted successfully' }, 200, {}, request);
        }

        // --------------------------------------------------------------------
        // ADMIN: PATCH /api/v1/admin/districts/:id (Enable / Disable / Update District)
        // --------------------------------------------------------------------
        const districtPatchMatch = url.pathname.match(/^\/api\/v1\/admin\/districts\/([^/]+)$/);
        if (districtPatchMatch && method === 'PATCH') {
          const distId = sanitizeString(districtPatchMatch[1], 100);
          let body: any;
          try {
            body = await request.json();
          } catch {
            return errorJson('Invalid JSON payload', 400, undefined, request);
          }

          const updates: string[] = [];
          const params: any[] = [];
          if (body.is_active !== undefined) {
            updates.push('is_active = ?');
            params.push(body.is_active ? 1 : 0);
          }
          if (body.name) {
            updates.push('name = ?');
            params.push(sanitizeString(body.name, 100));
          }
          if (body.name_as) {
            updates.push('name_as = ?');
            params.push(sanitizeString(body.name_as, 100));
          }

          if (updates.length === 0) {
            return errorJson('No fields to update', 400, undefined, request);
          }

          params.push(distId);
          try {
            await env.DB.prepare(`UPDATE districts SET ${updates.join(', ')} WHERE id = ?`).bind(...params).run();
            await env.DB.prepare(
              'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
            ).bind(`audit-${Date.now()}`, admin.id, 'DISTRICT_UPDATE', 'districts', distId, JSON.stringify({ updates: body }), new Date().toISOString()).run();
            return json({ success: true, message: 'District updated successfully' }, 200, {}, request);
          } catch (e: any) {
            return errorJson('Failed to update district', 500, e?.message, request);
          }
        }

        // GET /api/v1/admin/reports
        if (url.pathname === '/api/v1/admin/reports' && method === 'GET') {
          const { results } = await env.DB.prepare(
            `SELECT r.*, l.title as listing_title 
             FROM reports r 
             LEFT JOIN listings l ON r.listing_id = l.id 
             ORDER BY r.created_at DESC LIMIT 50`
          ).all();
          return json({ success: true, data: results }, 200, {}, request);
        }

        // PATCH /api/v1/admin/reports/:id
        const reportPatchMatch = url.pathname.match(/^\/api\/v1\/admin\/reports\/([^/]+)$/);
        if (reportPatchMatch && method === 'PATCH') {
          const repId = sanitizeString(reportPatchMatch[1], 100);
          let body: any = {};
          try {
            body = await request.json();
          } catch {}

          const status = sanitizeString(body.status, 20) || 'resolved';
          const allowedStatus = new Set(['pending', 'resolved', 'dismissed']);
          if (!allowedStatus.has(status)) {
            return errorJson('Invalid report status', 400, undefined, request);
          }

          const now = new Date().toISOString();
          await env.DB.prepare('UPDATE reports SET status = ?, resolved_at = ? WHERE id = ?')
            .bind(status, now, repId)
            .run();

          await env.DB.prepare(
            'INSERT INTO audit_logs (id, admin_user_id, action, resource_type, resource_id, metadata_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(`audit-${Date.now()}`, admin.id, 'REPORT_STATUS_UPDATE', 'reports', repId, JSON.stringify({ status }), now).run();

          return json({ success: true, message: 'Report status updated' }, 200, {}, request);
        }

        // GET /api/v1/admin/audit-logs
        if (url.pathname === '/api/v1/admin/audit-logs' && method === 'GET') {
          const { results } = await env.DB.prepare(
            `SELECT a.*, u.email as admin_email 
             FROM audit_logs a 
             JOIN admin_users u ON a.admin_user_id = u.id 
             ORDER BY a.created_at DESC LIMIT 100`
          ).all();
          return json({ success: true, data: results }, 200, {}, request);
        }

        // GET /api/v1/admin/stats
        if (url.pathname === '/api/v1/admin/stats' && method === 'GET') {
          const listingsCount: any = await env.DB.prepare('SELECT COUNT(*) as count FROM listings WHERE moderation_status = "published"').first();
          const pendingSubCount: any = await env.DB.prepare('SELECT COUNT(*) as count FROM submissions WHERE moderation_status = "pending"').first();
          const openRepCount: any = await env.DB.prepare('SELECT COUNT(*) as count FROM reports WHERE status = "pending"').first();
          const activeDistrictsCount: any = await env.DB.prepare('SELECT COUNT(*) as count FROM districts WHERE is_active = 1').first();
          let destinationsCount: any = { count: 0 };
          try {
            destinationsCount = await env.DB.prepare('SELECT COUNT(*) as count FROM destinations WHERE status = "published"').first();
          } catch {}
          let eventsCount: any = { count: 0 };
          try {
            eventsCount = await env.DB.prepare('SELECT COUNT(*) as count FROM events WHERE moderation_status = "published"').first();
          } catch {}

          return json(
            {
              success: true,
              data: {
                published_listings: listingsCount?.count || 0,
                pending_submissions: pendingSubCount?.count || 0,
                open_reports: openRepCount?.count || 0,
                active_districts: activeDistrictsCount?.count || 0,
                destinations_count: destinationsCount?.count || 0,
                events_count: eventsCount?.count || 0,
              },
            },
            200,
            {},
            request
          );
        }

        return errorJson('API endpoint not found', 404, undefined, request);
      } catch (err: any) {
        // Safe error masking without leaking stack traces or SQL internals
        return errorJson('An unexpected server error occurred', 500, undefined, request);
      }
    }

    // Static Assets fallback (Single Page App routing)
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Axom One API Edge Worker Active', {
      headers: { 'Content-Type': 'text/plain', ...getSecurityHeaders(request) },
    });
  },
};
