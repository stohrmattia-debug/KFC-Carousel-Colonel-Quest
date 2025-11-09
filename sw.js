const CACHE_NAME = "colonelquest-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./KFC.html",
  "./favicon.jpg",
  "./favicon.ico",
  "./20150529153448_1_0_ad828d7/css/critical.css",
  "./20150529153448_1_0_ad828d7/js/libs/modernizr-2.5.3.min.js",
  "./20150529153448_1_0_ad828d7/js/libs/jquery-1.7.2.min.js",
  "./20150529153448_1_0_ad828d7/js/plugins.js",
  "./20150529153448_1_0_ad828d7/js/script.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE_NAME).map(x => caches.delete(x))))
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
