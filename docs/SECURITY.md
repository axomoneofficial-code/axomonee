# AXOM ONE — Security & Cryptographic Standards

## 1. Authentication Architecture

- **Algorithm**: PBKDF2 using SHA-256 with 100,000 iterations and per-user cryptographic salts via the native Web Crypto API (`crypto.subtle`).
- **Session Tokens**: 256-bit entropy generated via `crypto.getRandomValues()`. Only SHA-256 digests (`token_hash`) are persisted to the database.
- **Cookies**: Transmitted with `HttpOnly; SameSite=Lax; Path=/; Secure; Max-Age=604800` (7 days).
- **Protection Against Credential Stuffing**:
  - Generic authentication errors (`Invalid credentials`) to prevent username enumeration.
  - Rate limiting enforced on `POST /api/v1/admin/login` allowing a maximum of 5 attempts per 15 minutes per IP address.

---

## 2. Server-Side Protection & Injection Resistance

- **Parameterized SQL**: Every database query uses prepared statement binding (`env.DB.prepare(...).bind(...)`). Concatenation of raw user strings into SQL queries is strictly prohibited across the codebase.
- **XSS & Scheme Sanitization**:
  - React JSX escapes interpolated strings by default.
  - URL inputs are validated to enforce safe schemes (`http://`, `https://`) and explicitly reject `javascript:`, `data:`, or `vbscript:` schemes.
- **Honeypot Anti-Bot Field**: The public submission form features an invisible honeypot field. Automated spam bots filling this input trigger immediate, silent rejection.

---

## 3. HTTP Security Headers

Every response issued by the Cloudflare Worker API attaches the following security headers:

```http
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://localhost:* https:; frame-ancestors 'none';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=(), microphone=()
```

---

## 4. Rate Limiting Limits Matrix

| Endpoint | Action Key | Max Hits | Rolling Window |
| :--- | :--- | :--- | :--- |
| `POST /api/v1/admin/login` | `login:{ip}` | 5 attempts | 15 minutes |
| `POST /api/v1/submissions` | `sub:{ip}` | 10 submissions | 60 minutes |
| `POST /api/v1/reports` | `rep:{ip}` | 15 reports | 60 minutes |
| `POST /api/v1/contact` | `contact:{ip}` | 8 inquiries | 30 minutes |
