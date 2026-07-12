// PAO Trainer service worker — ontvangt push-meldingen en opent de app bij een tik.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch (_err) {}
  e.waitUntil(self.registration.showNotification(data.title || 'PAO Trainer', {
    body: data.body || '',
    icon: 'icon.png',
    badge: 'icon.png',
    data: { url: data.url || './' },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
    for (const w of wins) {
      if (w.url.includes('pao-trainer') && 'focus' in w) { w.navigate(url); return w.focus(); }
    }
    return self.clients.openWindow(url);
  }));
});
