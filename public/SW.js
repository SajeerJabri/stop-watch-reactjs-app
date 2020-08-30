console.log('public Service worker')
const appVersion = "stopWatch.0";
const cacheFiles = [
    './static/media/clock.9f408107.png',
    './index.html',
    './static/js/0.chunk.js',
    './static/js/bundle.js',
    './static/js/main.chunk.js',
    './'
]


// ====================== adding file in cache ===============================

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(appVersion)
    .then(cache => {
      console.log('inserting file into cache')
      return cache.addAll(cacheFiles);
    })
  );
});

// ==================== fetch file =======================

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
    })
  );
}); 



