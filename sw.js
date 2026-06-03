const CACHE_NAME = 'sios-stare-triad-v1';
const CORE = ['/', '/index.html', '/manifest.json', '/icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(request).catch(() => new Response(JSON.stringify({
      system: 'SIOS / STARE / STAR-E GPT',
      status: 'SIMULATED_BACKEND',
      truth_label: 'DEMO_RUNTIME',
      route: url.pathname,
      message: 'Render backend is unreachable, so the service worker returned a safe local fallback.',
      compliance_language: 'Designed for review, not pretending approval.'
    }), { headers: { 'content-type': 'application/json' } })));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    return response;
  }).catch(() => caches.match('/index.html'))));
});
