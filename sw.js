const CACHE_NAME = 'wellness-app-v1';
const urlsToCache = [
  '/quezon-nhs-wellness/',
  '/quezon-nhs-wellness/index.html',
  '/quezon-nhs-wellness/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
