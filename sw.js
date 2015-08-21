self.onmessage = function(e) {
  if (e.data == 'page-got-controller') {
    clients.matchAll().then(function(clients) {
      clients.forEach(function(c) {
        c.postMessage('alrighty-from-sw');
      });
    });
  }
};
