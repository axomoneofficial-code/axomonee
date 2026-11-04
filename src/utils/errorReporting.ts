/**
 * AXOM ONE — Privacy-Conscious Error Reporting Utility
 *
 * Captures operational errors and render crashes while strictly ensuring:
 * 1. Zero personal data (PII) collection: Emails, phone numbers, tokens, and query credentials are automatically redacted.
 * 2. In-memory circular buffer (capped at 20 entries) to prevent memory leaks or permanent storage leaks.
 * 3. Safe diagnostic export for testing and debugging without external telemetry overhead.
 */

export type ErrorCategory = 'network' | 'render' | 'storage' | 'script' | 'unhandled';

export interface ErrorReport {
  id: string;
  timestamp: string;
  category: ErrorCategory;
  message: string;
  sanitizedStack?: string;
  path: string;
}

const MAX_ERROR_BUFFER_SIZE = 20;
const errorBuffer: ErrorReport[] = [];

// Regular expressions for sensitive PII detection
const EMAIL_REGEX = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g;
const PHONE_REGEX = /(\+91[\-\s]?)?[6-9]\d{9}|\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/g;
const BEARER_TOKEN_REGEX = /Bearer\s+[A-Za-z0-9\-_.~+/]+=*/gi;
const QUERY_SECRET_REGEX = /([?&](?:password|token|api[_-]?key|secret|auth)=)[^&\s]+/gi;

/**
 * Strips emails, phone numbers, auth bearer tokens, and credentials from error strings.
 */
export function sanitizeErrorMessage(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(EMAIL_REGEX, '[REDACTED_EMAIL]')
    .replace(PHONE_REGEX, '[REDACTED_PHONE]')
    .replace(BEARER_TOKEN_REGEX, 'Bearer [REDACTED_TOKEN]')
    .replace(QUERY_SECRET_REGEX, '$1[REDACTED_SECRET]');
}

/**
 * Records an error in the privacy-safe diagnostic buffer.
 */
export function reportError(
  error: unknown,
  context?: { category?: ErrorCategory; componentStack?: string }
): ErrorReport {
  const category = context?.category || 'script';
  let rawMessage = 'Unknown error';
  let rawStack: string | undefined;

  if (error instanceof Error) {
    rawMessage = error.message;
    rawStack = error.stack;
  } else if (typeof error === 'string') {
    rawMessage = error;
  } else if (error && typeof error === 'object' && 'message' in error) {
    rawMessage = String((error as { message: unknown }).message);
  }

  const cleanMessage = sanitizeErrorMessage(rawMessage);
  const cleanStack = rawStack ? sanitizeErrorMessage(rawStack) : undefined;
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const report: ErrorReport = {
    id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    category,
    message: cleanMessage,
    sanitizedStack: cleanStack,
    path: currentPath,
  };

  // Add to circular buffer
  errorBuffer.push(report);
  if (errorBuffer.length > MAX_ERROR_BUFFER_SIZE) {
    errorBuffer.shift();
  }

  // Safe console notification for development
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.warn(`[AXOM ONE Error:${category}]`, cleanMessage);
  }

  return report;
}

/**
 * Returns a copy of recent sanitized error reports.
 */
export function getRecentErrors(): ErrorReport[] {
  return [...errorBuffer];
}

/**
 * Clears the in-memory error buffer (useful for test isolation).
 */
export function clearErrorReportBuffer(): void {
  errorBuffer.length = 0;
}

/**
 * Initializes global browser error listeners for unhandled rejections and script failures.
 * Returns an unbind function for clean teardown.
 */
export function initGlobalErrorHandlers(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalError = (event: ErrorEvent) => {
    reportError(event.error || event.message, { category: 'unhandled' });
  };

  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    reportError(event.reason || 'Unhandled Promise rejection', { category: 'unhandled' });
  };

  window.addEventListener('error', handleGlobalError);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);

  return () => {
    window.removeEventListener('error', handleGlobalError);
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
  };
}
