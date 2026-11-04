import { describe, it, expect, beforeEach } from 'vitest';
import {
  sanitizeErrorMessage,
  reportError,
  getRecentErrors,
  clearErrorReportBuffer,
} from '../utils/errorReporting';

describe('Privacy-Conscious Error Reporting', () => {
  beforeEach(() => {
    clearErrorReportBuffer();
  });

  it('redacts email addresses from error messages', () => {
    const raw = 'Failed to connect for user bhaskar.deka@example.gov.in on server';
    const clean = sanitizeErrorMessage(raw);
    expect(clean).not.toContain('bhaskar.deka@example.gov.in');
    expect(clean).toContain('[REDACTED_EMAIL]');
  });

  it('redacts phone numbers from error messages', () => {
    const raw = 'SMS delivery to +91 9864012345 failed with status timeout';
    const clean = sanitizeErrorMessage(raw);
    expect(clean).not.toContain('9864012345');
    expect(clean).toContain('[REDACTED_PHONE]');
  });

  it('redacts Bearer tokens and sensitive query secrets', () => {
    const raw = 'GET /api/v1/auth?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 with Bearer eyJhbGciOiJIUzI1Ni';
    const clean = sanitizeErrorMessage(raw);
    expect(clean).not.toContain('Bearer eyJhbGciOiJIUzI1Ni');
    expect(clean).toContain('Bearer [REDACTED_TOKEN]');
    expect(clean).toContain('token=[REDACTED_SECRET]');
  });

  it('records errors in an in-memory buffer capped at 20 entries', () => {
    for (let i = 0; i < 25; i++) {
      reportError(new Error(`Test error #${i}`), { category: 'script' });
    }

    const recent = getRecentErrors();
    expect(recent.length).toBe(20);
    // Oldest 5 entries should have been evicted
    expect(recent[0].message).toBe('Test error #5');
    expect(recent[19].message).toBe('Test error #24');
  });

  it('correctly handles non-Error objects and strings', () => {
    reportError('Simple string rejection', { category: 'unhandled' });
    reportError({ message: 'Custom object error' }, { category: 'network' });

    const recent = getRecentErrors();
    expect(recent.length).toBe(2);
    expect(recent[0].message).toBe('Simple string rejection');
    expect(recent[0].category).toBe('unhandled');
    expect(recent[1].message).toBe('Custom object error');
    expect(recent[1].category).toBe('network');
  });
});
