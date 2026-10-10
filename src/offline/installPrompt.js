// Chrome fires `beforeinstallprompt` once, early in the page load, long before
// anyone opens Settings. This module is imported (through OfflineSettings) when
// the app starts, so it catches the event and keeps it until the parent taps
// "Install". Holding it here is the one piece of module state the add-on needs.

let deferredPrompt = null;
const listeners = new Set();

function notify() {
  listeners.forEach((listener) => listener());
}

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (event) => {
    // Stop Chrome's own install banner so a child can't tap it mid-game;
    // installing is offered only from the parental Settings.
    event.preventDefault();
    deferredPrompt = event;
    notify();
  });
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notify();
  });
}

export function subscribeInstallPrompt(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getInstallPrompt() {
  return deferredPrompt;
}

export async function showInstallPrompt() {
  if (!deferredPrompt) {
    throw new Error('showInstallPrompt called before the browser offered an install prompt');
  }
  const prompt = deferredPrompt;
  // A prompt can be shown only once; Chrome fires a fresh event if it is dismissed.
  deferredPrompt = null;
  notify();
  await prompt.prompt();
  return (await prompt.userChoice).outcome;
}
