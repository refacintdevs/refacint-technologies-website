// Refacint Technologies — service worker
// Upgrade CACHE_VERSION on each release to invalidate old caches.
const CACHE_VERSION = "refacint-v2";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const PRECACHE_URLS = [
  "/",
  "/offline",
  "/images/logo.webp",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !k.startsWith(CACHE_VERSION)).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Skip admin + API routes entirely
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) return;

  // Navigation: network-first, fall back to cache, then offline page
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() =>
          caches.match(request).then((r) => r || caches.match("/offline"))
        )
    );
    return;
  }

  // Assets: cache-first, background update
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

// =========================================================================
// PUSH NOTIFICATIONS
// =========================================================================
self.addEventListener("push", (event) => {
  let data = { title: "Refacint", body: "New post available", url: "/blog" };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch {}

  const title = data.title;
  const options = {
    body: data.body,
    icon: data.icon || "/icons/icon-192x192.png",
    badge: "/icons/icon-96x96.png",
    tag: "refacint-post",
    renotify: true,
    data: { url: data.url || "/" },
    vibrate: [100, 50, 100],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clients) => {
      for (const client of clients) {
        if (client.url.endsWith(url) && "focus" in client) return client.focus();
      }
      return self.clients.openWindow(url);
    })
  );
});

