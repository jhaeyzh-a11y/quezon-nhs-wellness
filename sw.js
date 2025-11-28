const CACHE_NAME = 'qnhs-wellness-v1';
const urlsToCache = [
  '/quezon-nhs-wellness/',
  '/quezon-nhs-wellness/index.html',
  '/quezon-nhs-wellness/manifest.json',
  '/quezon-nhs-wellness/icon-192.png',
  '/quezon-nhs-wellness/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
