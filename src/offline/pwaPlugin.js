// Offline add-on: builds the web app manifest and the service worker that
// saves SoundSafari on the device. Everything offline-related lives in
// src/offline/ and public/offline/; the app itself only mounts
// <OfflineSettings /> in the Settings modal and adds this plugin in
// vite.config.js.
//
// To remove the add-on from devices that already installed it, deploy once
// with `selfDestroying: true` below (it replaces the worker with one that
// unregisters itself and clears its caches), then delete the add-on.
import { VitePWA } from 'vite-plugin-pwa';

export function offlinePlugin() {
  return VitePWA({
    // A new version waits until the parent taps "Update" in Settings, so a
    // child is never interrupted by a reload in the middle of an activity.
    registerType: 'prompt',
    injectRegister: 'script-defer',
    selfDestroying: false,
    manifest: {
      name: 'SoundSafari - Pre-K Audio & Reading Academy',
      short_name: 'SoundSafari',
      description: 'Phonics, words, sentences and rhymes for pre-K kids. Works without internet once installed.',
      theme_color: '#fbbf24',
      background_color: '#fde68a',
      display: 'standalone',
      orientation: 'any',
      icons: [
        { src: 'offline/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'offline/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: 'offline/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,webp}'],
      cleanupOutdatedCaches: true,
      // Take control of the page on first install so the fonts it loads can
      // be saved straight away (see warmFontCache.js).
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
          handler: 'StaleWhileRevalidate',
          options: { cacheName: 'offline-google-fonts-css' },
        },
        {
          urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
          handler: 'CacheFirst',
          options: {
            cacheName: 'offline-google-fonts-files',
            cacheableResponse: { statuses: [0, 200] },
            expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
          },
        },
      ],
    },
  });
}
