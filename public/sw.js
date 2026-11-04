// ============================================================================
// AXOM ONE — PWA Service Worker (v1.1)
// Caches core app shell, fonts, local images, and enables full offline access
// for remote wildlife reserves (Kaziranga, Manas) and hill districts.
// ============================================================================

const CACHE_NAME = 'axom-one-v1.1';
const STATIC_CACHE = 'axom-one-static-v1.1';
const DYNAMIC_CACHE = 'axom-one-dynamic-v1.1';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './images/gamusa-pattern.png',
  './images/gamusa-top-strip.png',
];

// Offline Fallback HTML for brand-new uncached pages
const OFFLINE_FALLBACK_HTML = `<!doctype html>
<html lang="as">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AXOM ONE — Offline Mode (অফলাইন মোড)</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #FAF6EE;
      color: #0F172A;
      margin: 0;
      padding: 2rem 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 90vh;
      text-align: center;
    }
    .card {
      background: #FFFFFF;
      border-radius: 20px;
      padding: 2.25rem 1.75rem;
      max-width: 480px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      border: 1px solid #E2E8F0;
    }
    .badge {
      display: inline-block;
      background: #FEF2F2;
      color: #DC2626;
      font-weight: 800;
      font-size: 0.8rem;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      border: 1px solid #FECACA;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 900;
      color: #991B1B;
      margin: 0 0 0.5rem 0;
    }
    p {
      color: #475569;
      font-size: 0.9rem;
      line-height: 1.5;
      margin: 0 0 1.5rem 0;
    }
    .helpline-box {
      background: #F8FAFC;
      border: 1px solid #CBD5E1;
      border-radius: 12px;
      padding: 1rem;
      text-align: left;
      margin-bottom: 1.5rem;
    }
    .helpline-item {
      display: flex;
      justify-content: space-between;
      padding: 0.45rem 0;
      border-bottom: 1px solid #E2E8F0;
      font-size: 0.85rem;
    }
    .helpline-item:last-child {
      border-bottom: none;
    }
    .helpline-item a {
      color: #DC2626;
      font-weight: 700;
      text-decoration: none;
    }
    .btn {
      display: inline-block;
      background: #DC2626;
      color: #FFFFFF;
      font-weight: 700;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      text-decoration: none;
      cursor: pointer;
      border: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">📶 Offline / সংযোগ নাই</span>
    <h1>AXOM ONE — Offline Guide</h1>
    <p>You appear to be offline in a remote area without cellular connectivity. Previously visited pages and destination guides remain saved in your app cache.</p>

    <div class="helpline-box">
      <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 0.5rem; color: #0F172A;">Assam Emergency Helpline (চৰকাৰী হেল্পলাইন):</div>
      <div class="helpline-item"><span>Assam Police:</span> <a href="tel:112">112</a></div>
      <div class="helpline-item"><span>Medical Emergency:</span> <a href="tel:108">108</a></div>
      <div class="helpline-item"><span>Forest & Wildlife Rescue:</span> <a href="tel:18003453867">1800-345-3867</a></div>
      <div class="helpline-item"><span>Assam Tourism Desk:</span> <a href="tel:18003453888">1800-345-3888</a></div>
      <div class="helpline-item"><span>Disaster Control (ASDMA):</span> <a href="tel:1070">1070</a></div>
    </div>

    <button class="btn" onclick="window.history.back()">Go to Cached Pages</button>
  </div>
</body>
</html>`;

// 1. Install Event: Cache app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean up legacy caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Intelligent Offline Strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip non-GET requests and browser extensions
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) return;

  // Strategy A: Navigation requests (HTML pages)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Clone and cache the latest page for future offline browsing
          const resClone = res.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(async () => {
          // Try matched cache
          const cached = await caches.match(req);
          if (cached) return cached;

          // Try root shell cache (SPA routing)
          const rootCached = await caches.match('/index.html');
          if (rootCached) return rootCached;

          // Fallback to offline page with emergency numbers
          return new Response(OFFLINE_FALLBACK_HTML, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
          });
        })
    );
    return;
  }

  // Strategy B: Static assets, Images, and Fonts (Cache-first with dynamic caching)
  const isStaticAsset =
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com');

  if (isStaticAsset) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((networkRes) => {
            if (networkRes.status === 200) {
              const resClone = networkRes.clone();
              caches.open(DYNAMIC_CACHE).then((cache) => cache.put(req, resClone));
            }
            return networkRes;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // Strategy C: Other requests (Network-first with cached fallback)
  event.respondWith(
    fetch(req)
      .then((networkRes) => {
        if (networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(req, resClone));
        }
        return networkRes;
      })
      .catch(() => caches.match(req))
  );
});
