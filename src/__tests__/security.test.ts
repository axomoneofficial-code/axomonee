import { describe, it, expect } from 'vitest';
import {
  sanitizeExternalUrl,
  getSafeHostname,
  sanitizeInput,
  isValidEmail,
  constantTimeEqual,
} from '../utils/security';
import { hashPassword, verifyPassword } from '../../worker/index';
import seedData from '../data/assam-directory.seed.json';
import tourismDestinations from '../data/tourism-destinations.json';

describe('AXOM ONE Security Hardening — URL Sanitization & XSS Defense', () => {
  it('strictly rejects dangerous and pseudo-protocol URIs', () => {
    const dangerousUrls = [
      'javascript:alert("XSS")',
      'JAVASCRIPT:alert(document.cookie)',
      'javascript:/*--></title></style></textarea>*/<script>alert(1)</script>',
      'data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
      'vbscript:msgbox("hello")',
      'file:///etc/passwd',
      'blob:https://example.com/uuid',
      '  javascript:alert(1)  ',
      'jav\u0000ascript:alert(1)',
    ];

    dangerousUrls.forEach((url) => {
      const sanitized = sanitizeExternalUrl(url);
      expect(sanitized).toBe('');
    });
  });

  it('permits valid HTTP and HTTPS URLs', () => {
    const safeUrls = [
      'https://highereducation.assam.gov.in',
      'http://kaziranga.assam.gov.in',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/Mask.jpg',
      'https://assam.gov.in/directory/kamrup-metro',
      '/explore?district=kamrup-metropolitan',
    ];

    safeUrls.forEach((url) => {
      const sanitized = sanitizeExternalUrl(url);
      expect(sanitized).toBeTruthy();
      expect(sanitized.startsWith('http://') || sanitized.startsWith('https://') || sanitized.startsWith('/')).toBe(true);
    });
  });

  it('handles null, undefined, empty and invalid values without throwing exceptions', () => {
    expect(sanitizeExternalUrl(null)).toBe('');
    expect(sanitizeExternalUrl(undefined)).toBe('');
    expect(sanitizeExternalUrl('')).toBe('');
    expect(sanitizeExternalUrl('   ')).toBe('');
    expect(sanitizeExternalUrl('not a valid url at all :// ')).toBe('');
  });

  it('safely extracts hostname without crashing on malformed URLs', () => {
    expect(getSafeHostname('https://www.gauhati.ac.in/departments', 'Fallback')).toBe('gauhati.ac.in');
    expect(getSafeHostname('https://tezpur.nic.in', 'Fallback')).toBe('tezpur.nic.in');
    expect(getSafeHostname('not-a-valid-url:::80', 'Default Fallback')).toBe('Default Fallback');
    expect(getSafeHostname(null, 'Default Fallback')).toBe('Default Fallback');
    expect(getSafeHostname(undefined, 'Default Fallback')).toBe('Default Fallback');
  });
});

describe('AXOM ONE Security Hardening — Text Input Bounds & Email Validation', () => {
  it('strips non-printable control characters and enforces length limits', () => {
    const inputWithControls = 'Hello\u0000\u0007 World\u001F!';
    const cleaned = sanitizeInput(inputWithControls, 50);
    expect(cleaned).toBe('Hello World!');

    const longText = 'A'.repeat(500);
    const truncated = sanitizeInput(longText, 50);
    expect(truncated.length).toBe(50);
  });

  it('validates email addresses strictly', () => {
    expect(isValidEmail('admin@axomone.local')).toBe(true);
    expect(isValidEmail('citizen.assam@gov.in')).toBe(true);
    expect(isValidEmail('user+tag@domain.co.in')).toBe(true);

    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('missing@domain')).toBe(false);
    expect(isValidEmail('@nodomain.com')).toBe(false);
    expect(isValidEmail('spaces in@email.com')).toBe(false);
    expect(isValidEmail('a'.repeat(260) + '@domain.com')).toBe(false);
  });
});

describe('AXOM ONE Security Hardening — Constant-Time Cryptography & PBKDF2 Password Security', () => {
  it('executes constant-time comparison accurately', () => {
    expect(constantTimeEqual('secrettoken123', 'secrettoken123')).toBe(true);
    expect(constantTimeEqual('secrettoken123', 'secrettoken124')).toBe(false);
    expect(constantTimeEqual('short', 'longerstring')).toBe(false);
    expect(constantTimeEqual('', '')).toBe(true);
  });

  it('generates unique salts and hashes for every password generation', async () => {
    const hash1 = await hashPassword('AxomOne2026!Admin');
    const hash2 = await hashPassword('AxomOne2026!Admin');

    expect(hash1).not.toBe(hash2); // Different random salts!
    expect(hash1.startsWith('pbkdf2:100000:')).toBe(true);
    expect(hash2.startsWith('pbkdf2:100000:')).toBe(true);

    // Both must verify correctly against the same password
    const verify1 = await verifyPassword('AxomOne2026!Admin', hash1);
    const verify2 = await verifyPassword('AxomOne2026!Admin', hash2);
    expect(verify1).toBe(true);
    expect(verify2).toBe(true);
  });

  it('rejects incorrect passwords and tampered hashes without backdoor fallback', async () => {
    const validHash = await hashPassword('AxomOne2026!Admin');

    const wrongPassword = await verifyPassword('WrongPassword123!', validHash);
    expect(wrongPassword).toBe(false);

    // Tampered hash content
    const tamperedHash = validHash.slice(0, -4) + 'ffff';
    const tamperedVerify = await verifyPassword('AxomOne2026!Admin', tamperedHash);
    expect(tamperedVerify).toBe(false);

    // Malformed hash format
    expect(await verifyPassword('AxomOne2026!Admin', 'invalid_format')).toBe(false);
    expect(await verifyPassword('AxomOne2026!Admin', '')).toBe(false);
  });
});

describe('AXOM ONE Security Hardening — Starter Pack & Tourism Data Integrity', () => {
  it('ensures all starter directory records have sanitized and safe official URLs', () => {
    seedData.records.forEach((record: any) => {
      if (record.sourceUrl) {
        const sanitized = sanitizeExternalUrl(record.sourceUrl);
        expect(sanitized).toBeTruthy();
        expect(sanitized.startsWith('http://') || sanitized.startsWith('https://')).toBe(true);
      }
      if (record.website) {
        const sanitized = sanitizeExternalUrl(record.website);
        expect(sanitized).toBeTruthy();
        expect(sanitized.startsWith('http://') || sanitized.startsWith('https://')).toBe(true);
      }
    });
  });

  it('ensures all 20 Assam tourism destinations link only to safe government / academic sources', () => {
    tourismDestinations.forEach((dest: any) => {
      const sanitized = sanitizeExternalUrl(dest.official_source);
      expect(sanitized).toBeTruthy();
      expect(sanitized.startsWith('http://') || sanitized.startsWith('https://')).toBe(true);
      expect(sanitized.includes('javascript:')).toBe(false);
    });
  });
});
