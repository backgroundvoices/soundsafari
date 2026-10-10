import React from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { showInstallPrompt } from './installPrompt';
import { applyUpdate, useOfflineStatus } from './useOfflineStatus';
import './warmFontCache';

function savedStatusText({ isSupported, isSaved, isOnline, waitingWorker }) {
  if (!isSupported) return "This browser can't save SoundSafari. Open it in Chrome to play without internet.";
  if (waitingWorker) return 'A new version of SoundSafari is downloaded. Tap Update to use it.';
  if (!isSaved) return 'Saving SoundSafari on this device… keep the internet on for a moment.';
  if (!isOnline) return "✅ You're offline. Everything is saved on this device, keep playing!";
  return '✅ Saved on this device. SoundSafari works without internet.';
}

function installStatusText({ isInstalled, installPrompt }) {
  if (isInstalled) return '✅ Installed. Open SoundSafari from its home-screen icon.';
  if (installPrompt) return 'Add a SoundSafari icon to the home screen for one-tap play.';
  return 'To add an icon: open the Chrome menu (⋮) and tap "Add to Home screen" or "Install app".';
}

/** "Play Without Internet" section of the Settings modal, provided by the offline add-on. */
export function OfflineSettings() {
  const status = useOfflineStatus();

  return (
    <>
      <hr className="settings-divider" />

      <div className="setting-row">
        <div className="setting-label">
          <span>Play Without Internet</span>
          <small>{savedStatusText(status)}</small>
        </div>
        {status.waitingWorker && (
          <button className="btn-secondary" onClick={() => applyUpdate(status.waitingWorker)}>
            <RefreshCw className="icon-md" />
            <span>Update</span>
          </button>
        )}
      </div>

      {status.isSupported && (
        <div className="setting-row">
          <div className="setting-label">
            <span>Install on This Device</span>
            <small>{installStatusText(status)}</small>
          </div>
          {status.installPrompt && !status.isInstalled && (
            <button className="btn-primary" onClick={showInstallPrompt}>
              <Download className="icon-md" />
              <span>Install App</span>
            </button>
          )}
        </div>
      )}
    </>
  );
}
