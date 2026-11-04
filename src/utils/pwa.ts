/**
 * PWA Service Worker Registration & Installation Helper
 */

let deferredInstallPrompt: any = null;
const installListeners = new Set<(canInstall: boolean) => void>();

export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        console.log('[AXOM ONE PWA] Service Worker registered successfully with scope:', reg.scope);
      })
      .catch((err) => {
        console.warn('[AXOM ONE PWA] Service Worker registration failed:', err);
      });
  });

  // Capture beforeinstallprompt for in-app install button
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    installListeners.forEach((listener) => listener(true));
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    installListeners.forEach((listener) => listener(false));
    console.log('[AXOM ONE PWA] App installed successfully');
  });
}

/**
 * Triggers the native PWA install prompt dialog
 */
export async function promptPwaInstall(): Promise<boolean> {
  if (!deferredInstallPrompt) {
    // If on iOS Safari, let caller know to show manual guide
    return false;
  }

  deferredInstallPrompt.prompt();
  const choiceResult = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installListeners.forEach((listener) => listener(false));
  return choiceResult.outcome === 'accepted';
}

/**
 * Subscribe to installability changes
 */
export function onInstallableChange(callback: (canInstall: boolean) => void): () => void {
  callback(Boolean(deferredInstallPrompt));
  installListeners.add(callback);
  return () => {
    installListeners.delete(callback);
  };
}
