self.addEventListener("message", function(e) {
  if (e.data == 'page-got-controller') {
    clients.matchAll().then(function(clients) {
      clients.forEach(function(c) {
        c.postMessage('alrighty-from-sw');
      });
    });
  }
});

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("shell-v1").then(function(cache) {
      return cache.add("/test/index.html");
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
