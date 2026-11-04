/**
 * AXOM ONE — Public Asset URL Resolver
 * 
 * Automatically resolves asset paths with the correct base URL.
 * Works seamlessly across:
 * - GitHub Pages subfolder: https://<username>.github.io/<repo-name>/ -> /<repo-name>/images/...
 * - Custom Domains: https://axomone.in/ -> /images/...
 * - Local Development: http://localhost:5173/ -> /images/...
 * - External media URLs: https://... -> preserved as-is
 */
export function getAssetUrl(url?: string | null): string {
  if (!url) return '';
  const trimmed = url.trim();

  // Return external links, data URIs, or blob URIs as-is
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:')
  ) {
    return trimmed;
  }

  // Derive base URL from Vite build environment or runtime window location
  let base = import.meta.env.BASE_URL || '/';

  // If Vite's base was left as relative './', resolve dynamically from window location on github.io
  if (base === './' || !base) {
    if (typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')) {
      const parts = window.location.pathname.split('/').filter(Boolean);
      if (parts.length > 0) {
        base = `/${parts[0]}/`;
      } else {
        base = '/';
      }
    } else {
      base = '/';
    }
  }

  // Ensure base ends with a single slash
  if (!base.endsWith('/')) {
    base += '/';
  }

  // Strip leading slash from path to prevent overriding base path
  const cleanPath = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
  return `${base}${cleanPath}`;
}
