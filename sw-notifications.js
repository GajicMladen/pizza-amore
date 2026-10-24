// Imported by the generated service worker (vite.config.ts → workbox.importScripts). Three jobs:
//  - `fetch` for kitchen navigations (/kuhinja…): network first, offline → the precached kuhinja.html. Workbox's navigateFallback
//    (index.html, the customer shell) is denylisted for these paths, because kuhinja.html carries the kitchen manifest iOS needs.
//  - `push`: a Web Push message from the Cloud Function `kitchenPush` (data-only payload { title, body, tag, url }) → show it,
//    unless a kitchen tab is on screen (that tab rings and shows its own notification; a focused window also exempts us
//    from Chrome's "site updated in the background" placeholder). The tag per order collapses duplicates.
//  - `notificationclick`: focus the open kitchen tab, or open one.
const kitchenUrl = () => self.registration.scope + 'kuhinja'

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.mode !== 'navigate') return
  const scopePath = new URL(self.registration.scope).pathname
  if (!new URL(req.url).pathname.startsWith(scopePath + 'kuhinja')) return
  event.respondWith(
    fetch(req).catch(async () => (await caches.match(scopePath + 'kuhinja.html', { ignoreSearch: true })) || Response.error()),
  )
})

self.addEventListener('push', (event) => {
  let payload = {}
  try {
    payload = event.data ? event.data.json() : {}
  } catch {
    payload = { data: { body: event.data ? event.data.text() : '' } }
  }
  // FCM wraps the message: data-only arrives as { data }, a notification message as { notification }
  const d = payload.data || payload.notification || payload
  const title = d.title || 'Nova narudžbina'
  const url = d.url && d.url.startsWith(self.registration.scope) ? d.url : kitchenUrl()
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      const onScreen = list.some((c) => c.url.includes('/kuhinja') && c.visibilityState === 'visible')
      if (onScreen) return undefined
      return self.registration.showNotification(title, {
        body: d.body || '',
        tag: d.tag || 'kitchen-order',
        renotify: true,
        requireInteraction: true,
        icon: self.registration.scope + 'icon-512.png',
        badge: self.registration.scope + 'icon-512.png',
        vibrate: [300, 120, 300, 120, 600],
        data: { url },
      })
    }),
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const target = (event.notification.data && event.notification.data.url) || kitchenUrl()
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      const open = list.find((c) => c.url.includes('/kuhinja'))
      if (open) return open.focus()
      return self.clients.openWindow(target)
    }),
  )
})
