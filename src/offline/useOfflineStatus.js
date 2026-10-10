import { useEffect, useState, useSyncExternalStore } from 'react';
import { getInstallPrompt, subscribeInstallPrompt } from './installPrompt';

function subscribeOnline(listener) {
  window.addEventListener('online', listener);
  window.addEventListener('offline', listener);
  return () => {
    window.removeEventListener('online', listener);
    window.removeEventListener('offline', listener);
  };
}

function subscribeDisplayMode(listener) {
  const query = window.matchMedia('(display-mode: standalone)');
  query.addEventListener('change', listener);
  return () => query.removeEventListener('change', listener);
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches;
}

/**
 * Live state of the offline add-on.
 * - isSupported: the browser can run a service worker at all.
 * - isSaved: the service worker is active, which means every app file has been
 *   downloaded (Workbox finishes saving before the worker activates).
 * - waitingWorker: a newer version that is downloaded and waiting for "Update".
 * - installPrompt: Chrome's saved install prompt, or null when not offered.
 * - isInstalled: running from the home-screen icon.
 */
export function useOfflineStatus() {
  const isSupported = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  const [isSaved, setIsSaved] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const isOnline = useSyncExternalStore(subscribeOnline, () => navigator.onLine);
  const isInstalled = useSyncExternalStore(subscribeDisplayMode, isStandalone);
  const installPrompt = useSyncExternalStore(subscribeInstallPrompt, getInstallPrompt);

  useEffect(() => {
    if (!isSupported) return undefined;
    let registration = null;
    let cancelled = false;

    const trackInstalling = () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener('statechange', () => {
        // "installed" while another worker controls the page means an update is waiting.
        if (!cancelled && worker.state === 'installed' && navigator.serviceWorker.controller) {
          setWaitingWorker(worker);
        }
      });
    };

    navigator.serviceWorker.ready.then((readyRegistration) => {
      if (cancelled) return;
      registration = readyRegistration;
      setIsSaved(true);
      setWaitingWorker(registration.waiting);
      registration.addEventListener('updatefound', trackInstalling);
      trackInstalling();
    });

    return () => {
      cancelled = true;
      registration?.removeEventListener('updatefound', trackInstalling);
    };
  }, [isSupported]);

  return { isSupported, isSaved, isOnline, isInstalled, installPrompt, waitingWorker };
}

export function applyUpdate(waitingWorker) {
  navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload(), { once: true });
  // Workbox's generated worker listens for this message and activates itself.
  waitingWorker.postMessage({ type: 'SKIP_WAITING' });
}
