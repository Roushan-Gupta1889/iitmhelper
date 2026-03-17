// ══════════════════════════════════════════════════════
//  IITM Helper — Service Worker  v1.0
//  Strategy:
//    • HTML pages   → Network-first (fresh content)
//    • Assets/CSS/JS → Cache-first  (fast loads)
//    • Fonts         → Stale-while-revalidate
//    • Offline nav   → /offline.html fallback
// ══════════════════════════════════════════════════════

const CACHE_NAME   = 'iitm-helper-v1';
const FONT_CACHE   = 'iitm-fonts-v1';
const OFFLINE_URL  = '/offline.html';

// Pages & assets to pre-cache on install
const PRE_CACHE = [
  '/',
  '/offline.html',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/css/themes.css',
  '/css/footer-modern.css',
  '/css/studyplus-widget.css',
  '/css/studyplus-yt.css',
  '/css/term-banner.css',
  '/css/chatbot-widget.css',
  '/js/theme-switcher.js',
  '/js/term-banner.js',
  '/js/studyplus-widget.js',
  '/assets/favicon.ico',
  '/pages/gpa-calculator.html',
  '/pages/course-selection.html',
  '/pages/studyplus-yt.html',
  '/pages/ai-assistant.html',
  '/pages/diploma-pathways.html',
  '/pages/news.html',
  '/pages/study-plus.html',
];

// ── Install: pre-cache shell ──────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRE_CACHE))
      .then(() => self.skipWaiting())  // activate immediately
  );
});

// ── Activate: clean old caches ───────────────────────
self.addEventListener('activate', event => {
  const keepCaches = [CACHE_NAME, FONT_CACHE];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => !keepCaches.includes(key))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())  // take control immediately
  );
});

// ── Fetch: routing strategies ────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin + Google Fonts
  const isGoogleFont = url.hostname === 'fonts.googleapis.com'
                    || url.hostname === 'fonts.gstatic.com';
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin && !isGoogleFont) return;

  // ── Google Fonts: stale-while-revalidate ─
  if (isGoogleFont) {
    event.respondWith(staleWhileRevalidate(request, FONT_CACHE));
    return;
  }

  // ── HTML navigation: network-first ───────
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  // ── Static assets: cache-first ───────────
  const isStatic = /\.(css|js|png|jpg|jpeg|svg|ico|webp|woff2?|ttf)$/.test(url.pathname);
  if (isStatic) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Default: network only
  // (skips API calls, analytics, etc.)
});

// ══ Strategy helpers ═════════════════════════════════

/** Network-first; fall back to cache, then offline.html */
async function networkFirst(request) {
  try {
    const networkRes = await fetch(request);
    // Cache a fresh copy
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkRes.clone());
    return networkRes;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Return the offline page for navigation failures
    return caches.match(OFFLINE_URL);
  }
}

/** Cache-first; fetch and update if missing */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const networkRes = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkRes.clone());
    return networkRes;
  } catch {
    // Nothing we can do for missing static assets
    return new Response('', { status: 503 });
  }
}

/** Stale-while-revalidate (good for fonts) */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then(res => {
    cache.put(request, res.clone());
    return res;
  }).catch(() => null);
  return cached || networkPromise;
}
