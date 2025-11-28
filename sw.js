const CACHE_NAME = 'wellness-app-v1.2';
const START_URL = 'https://jhaeyzh-a11y.github.io/quezon-nhs-wellness/';

// Update all fetch events to handle the new domain
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
