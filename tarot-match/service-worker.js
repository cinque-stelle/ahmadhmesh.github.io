const CACHE_NAME = 'tarot-match-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './icons/icon.png',
  './images/bg3.jpg',
  './images/cardbg.jpg',
  './images/fool.jpg',
  './images/hermit.jpg',
  './images/priestess.jpg',
  './images/magician.jpg',
  './images/lovers.jpg',
  './images/star.jpg',
  './images/sun.jpg',
  './images/moon.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});