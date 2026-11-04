// ============================================================================
// AXOM ONE — Application Security Utilities
// Provides strictly validated URL sanitization, XSS defense, and string bounds
// ============================================================================

const ALLOWED_PROTOCOLS = new Set(['http:', 'https:']);

/**
 * Sanitizes external URLs to prevent javascript:, data:, and other malicious URI scheme vectors.
 * Strictly requires http: or https: protocols.
 */
export function sanitizeExternalUrl(url?: string | null): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  // Prevent javascript: pseudo-protocols with control characters or mixed casing
  // e.g. "java\0script:", "javascript :", "data:text/html"
  const normalized = trimmed.replace(/[\u0000-\u001F\u007F-\u009F\s]/g, '').toLowerCase();
  if (
    normalized.startsWith('javascript:') ||
    normalized.startsWith('data:') ||
    normalized.startsWith('vbscript:') ||
    normalized.startsWith('file:')
  ) {
    return '';
  }

  try {
    const parsed = new URL(trimmed);
    if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
      return '';
    }
    return parsed.href;
  } catch {
    // If it's a relative path starting with / or ./, allowed for internal links
    if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
      return trimmed;
    }
    return '';
  }
}

/**
 * Safely extracts hostname for UI display without throwing unhandled exceptions on invalid inputs.
 */
export function getSafeHostname(url?: string | null, fallback = 'Official Portal'): string {
  if (!url || typeof url !== 'string') return fallback;
  try {
    const parsed = new URL(url.trim());
    return parsed.hostname.replace(/^www\./, '') || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Sanitizes text inputs by stripping non-printable control characters and enforcing max length.
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (!input || typeof input !== 'string') return '';
  // Strip control characters except newline (\n) and carriage return (\r)
  const cleaned = input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  return cleaned.trim().slice(0, maxLength);
}

/**
 * Validates standard email address formats.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string' || email.length > 254) return false;
  // RFC 5322 compliant pragmatic regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

/**
 * Constant-time string equality check to prevent timing side-channel attacks.
 */
export function constantTimeEqual(a: string, b: string): boolean {
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

export const VALID_BEAUTY_CATEGORIES = new Set([
  'tea-tourism',
  'river-experiences',
  'hills-waterfalls',
  'wildlife-birdwatching',
  'heritage-historic',
  'handloom-crafts',
  'festivals-cultural',
  'culinary-experiences',
  'botanical-green',
  'district-travel-guides',
]);

export const VALID_DESTINATION_STATUSES = new Set([
  'draft',
  'pending_review',
  'published',
  'archived',
]);

export const VALID_ASSAM_DISTRICT_SLUGS = new Set([
  'bajali',
  'baksa',
  'barpeta',
  'biswanath',
  'bongaigaon',
  'cachar',
  'charaideo',
  'chirang',
  'darrang',
  'dhemaji',
  'dhubri',
  'dibrugarh',
  'dima-hasao',
  'goalpara',
  'golaghat',
  'hailakandi',
  'hojai',
  'jorhat',
  'kamrup-metropolitan',
  'kamrup-rural',
  'karbi-anglong',
  'karimganj',
  'kokrajhar',
  'lakhimpur',
  'majuli',
  'morigaon',
  'nagaon',
  'nalbari',
  'sivasagar',
  'sonitpur',
  'south-salmara-mankachar',
  'tamulpur',
  'tinsukia',
  'udalguri',
  'west-karbi-anglong',
]);

export const VALID_SUPPORTED_LANGUAGES = new Set(['en', 'as', 'hi', 'brx']);

export interface DestinationValidationOptions {
  existingRecords?: Array<{ id: string; slug?: string }>;
  requireAllLanguages?: boolean;
}

export interface DestinationValidationResult {
  valid: boolean;
  errors: string[];
}

export interface DestinationCollectionValidationResult {
  valid: boolean;
  total: number;
  validCount: number;
  invalidCount: number;
  errors: Record<string, string[]>;
}

/**
 * Validates a BeautyDestination record against strict schema rules.
 * Enforces geographic bounds, URL integrity, required fields, category/district allowlists,
 * and natural multilingual translation completeness.
 */
export function validateDestinationRecord(
  record: any,
  options?: DestinationValidationOptions
): DestinationValidationResult {
  const errors: string[] = [];

  if (!record || typeof record !== 'object') {
    return { valid: false, errors: ['Record must be a valid JSON object'] };
  }

  // 1. Identity & uniqueness check
  if (!record.id || typeof record.id !== 'string' || !record.id.trim()) {
    errors.push('Destination id is required');
  } else if (options?.existingRecords) {
    const duplicateId = options.existingRecords.some(
      (r) => r !== record && r.id === record.id
    );
    if (duplicateId) {
      errors.push(`Duplicate destination id "${record.id}" already exists`);
    }
  }

  if (record.slug !== undefined && record.slug !== null) {
    if (typeof record.slug !== 'string' || !record.slug.trim()) {
      errors.push('Destination slug must be a non-empty string');
    } else if (options?.existingRecords) {
      const duplicateSlug = options.existingRecords.some(
        (r) => r !== record && r.slug === record.slug
      );
      if (duplicateSlug) {
        errors.push(`Duplicate destination slug "${record.slug}" already exists`);
      }
    }
  }

  // 2. Primary Title
  if (!record.name || typeof record.name !== 'string' || !record.name.trim()) {
    errors.push('Destination name is required');
  }

  // 3. Category verification
  if (!record.category || !VALID_BEAUTY_CATEGORIES.has(record.category)) {
    errors.push(`Invalid category "${record.category}". Must be one of the 10 approved categories.`);
  }

  // 4. Status verification
  if (!record.status || !VALID_DESTINATION_STATUSES.has(record.status)) {
    errors.push(`Invalid status "${record.status}". Must be draft, pending_review, published, or archived.`);
  }

  // 5. District reference validation
  if (record.district_slug && !VALID_ASSAM_DISTRICT_SLUGS.has(record.district_slug)) {
    errors.push(`Invalid district_slug "${record.district_slug}". Must match an official Assam district.`);
  }
  if (record.district && (typeof record.district !== 'string' || !record.district.trim())) {
    errors.push('district must be a non-empty string');
  }

  // 6. Descriptions
  if (!record.shortDescription && !record.tagline) {
    errors.push('shortDescription is required');
  }
  if (!record.fullDescription && !record.description) {
    errors.push('fullDescription is required');
  }

  // 7. Geographic coordinates validation (Assam GPS boundary: Lat 24.0° - 28.5°, Lon 89.5° - 96.5°)
  if (record.latitude !== null && record.latitude !== undefined) {
    const lat = Number(record.latitude);
    if (isNaN(lat) || lat < 24.0 || lat > 28.5) {
      errors.push(`Latitude ${record.latitude} is outside valid Assam boundaries (24.0 - 28.5)`);
    }
  }
  if (record.longitude !== null && record.longitude !== undefined) {
    const lon = Number(record.longitude);
    if (isNaN(lon) || lon < 89.5 || lon > 96.5) {
      errors.push(`Longitude ${record.longitude} is outside valid Assam boundaries (89.5 - 96.5)`);
    }
  }

  // 8. URL integrity
  if (record.sourceUrl && !sanitizeExternalUrl(record.sourceUrl)) {
    errors.push(`Invalid or unsafe sourceUrl "${record.sourceUrl}"`);
  }
  if (record.officialWebsite && !sanitizeExternalUrl(record.officialWebsite)) {
    errors.push(`Invalid or unsafe officialWebsite "${record.officialWebsite}"`);
  }

  // 9. Media & image validation
  const imageField = record.imageUrl || record.image;
  if (imageField) {
    if (
      typeof imageField !== 'string' ||
      (!imageField.startsWith('/images/') && !imageField.startsWith('http://') && !imageField.startsWith('https://'))
    ) {
      errors.push(`Invalid image path "${imageField}". Must begin with /images/ or be an HTTP/HTTPS URL.`);
    }
  }

  // 10. Supported language codes and required translations
  if (record.language !== undefined && record.language !== null) {
    if (!Array.isArray(record.language) || record.language.length === 0) {
      errors.push('language must be a non-empty array of supported language codes');
    } else {
      for (const langCode of record.language) {
        if (!VALID_SUPPORTED_LANGUAGES.has(langCode)) {
          errors.push(`Unsupported language code "${langCode}". Supported: en, as, hi, brx.`);
        }
      }
    }
  }

  // Check required multilingual translations
  const targetLangs: string[] = options?.requireAllLanguages
    ? ['en', 'as', 'hi']
    : Array.isArray(record.language)
    ? record.language
    : [];

  if (targetLangs.includes('as')) {
    if (!record.name_as || typeof record.name_as !== 'string' || !record.name_as.trim()) {
      errors.push('Missing required Assamese translation: name_as');
    }
    if (!record.shortDescription_as && !record.tagline_as) {
      errors.push('Missing required Assamese description: shortDescription_as');
    }
    if (!record.fullDescription_as && !record.description_as) {
      errors.push('Missing required Assamese description: fullDescription_as');
    }
    if (record.highlights && (!Array.isArray(record.highlights_as) || record.highlights_as.length === 0)) {
      errors.push('Missing required Assamese highlights: highlights_as');
    }
  }

  if (targetLangs.includes('hi')) {
    if (!record.name_hi || typeof record.name_hi !== 'string' || !record.name_hi.trim()) {
      errors.push('Missing required Hindi translation: name_hi');
    }
    if (!record.shortDescription_hi && !record.tagline_hi) {
      errors.push('Missing required Hindi description: shortDescription_hi');
    }
    if (!record.fullDescription_hi && !record.description_hi) {
      errors.push('Missing required Hindi description: fullDescription_hi');
    }
    if (record.highlights && (!Array.isArray(record.highlights_hi) || record.highlights_hi.length === 0)) {
      errors.push('Missing required Hindi highlights: highlights_hi');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates an entire collection of destination records, checking each record individually
 * and verifying uniqueness across the full dataset.
 */
export function validateDestinationCollection(
  records: any[]
): DestinationCollectionValidationResult {
  if (!Array.isArray(records)) {
    return {
      valid: false,
      total: 0,
      validCount: 0,
      invalidCount: 0,
      errors: { root: ['Destination collection must be an array'] },
    };
  }

  const errors: Record<string, string[]> = {};
  let validCount = 0;
  let invalidCount = 0;

  for (let i = 0; i < records.length; i++) {
    const item = records[i];
    const key = (item && item.id) ? item.id : `index_${i}`;
    const res = validateDestinationRecord(item, { existingRecords: records });
    if (!res.valid) {
      errors[key] = res.errors;
      invalidCount++;
    } else {
      validCount++;
    }
  }

  return {
    valid: invalidCount === 0,
    total: records.length,
    validCount,
    invalidCount,
    errors,
  };
}
