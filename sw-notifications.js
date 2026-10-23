// Imported by the generated service worker (vite.config.ts → workbox.importScripts). Tapping a kitchen notification
// focuses the open kitchen tab, or opens one.
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const target = (event.notification.data && event.notification.data.url) || self.registration.scope + 'kuhinja'
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      const open = list.find((c) => c.url.includes('/kuhinja'))
      if (open) return open.focus()
      return self.clients.openWindow(target)
    }),
  )
})
