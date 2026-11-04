import React, { useState, useEffect } from 'react';
import { Download, WifiOff, X, PhoneCall, Check, Share, PlusSquare } from 'lucide-react';
import { onInstallableChange, promptPwaInstall } from '../utils/pwa';
import { useLanguage } from '../context/LanguageContext';

export const PWAInstallBanner: React.FC = () => {
  const { language } = useLanguage();
  const [canInstall, setCanInstall] = useState(false);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);
  const [dismissed, setDismissed] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // Check if running in standalone PWA mode already
  const isStandalone =
    typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true);

  // Listen for installability
  useEffect(() => {
    const unsubscribe = onInstallableChange((installable) => {
      setCanInstall(installable);
    });
    return unsubscribe;
  }, []);

  // Listen for online / offline network events
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Detect iOS Safari
  const isIos =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !(window as any).MSStream;

  const handleInstallClick = async () => {
    if (canInstall) {
      const installed = await promptPwaInstall();
      if (installed) {
        setDismissed(true);
      }
    } else if (isIos) {
      setShowIosGuide(true);
    }
  };

  // Don't show if already installed in standalone mode
  if (isStandalone && !isOffline) {
    return null;
  }

  return (
    <>
      {/* 1. Offline Mode Indicator (Displays in remote areas when cellular signal drops) */}
      {isOffline && (
        <div className="pwa-offline-bar">
          <div className="pwa-offline-inner">
            <div className="pwa-offline-left">
              <WifiOff size={15} color="#DC2626" />
              <span>
                {language === 'as'
                  ? 'অফলাইন মোড: ইন্টাৰনেট নাই। সংৰক্ষিত পৰ্যটন আৰু জিলা তথ্য উপলব্ধ।'
                  : 'Offline Mode: No Internet. Saved destinations & permits remain viewable.'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowEmergencyModal(true)}
              className="pwa-offline-helpline-btn"
            >
              <PhoneCall size={13} />
              <span>{language === 'as' ? 'জরুৰী হেল্পলাইন' : 'Emergency Numbers'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating In-App Install Pill (Discreet, dismissible, authentic) */}
      {!isStandalone && !dismissed && (canInstall || isIos) && (
        <div className="pwa-install-pill-wrap">
          <div className="pwa-install-pill">
            <div className="pwa-install-icon">🦏</div>
            <div className="pwa-install-text" onClick={handleInstallClick}>
              <strong>{language === 'as' ? 'AXOM ONE এপ ইনষ্টল কৰক' : 'Install AXOM ONE App'}</strong>
              <small>{language === 'as' ? 'অফলাইন পৰ্যটন আৰু দ্ৰুত তথ্য' : 'Fast offline access & emergency guide'}</small>
            </div>
            <button
              type="button"
              onClick={handleInstallClick}
              className="pwa-install-action-btn"
              title="Install Web App"
            >
              <Download size={14} />
              <span>{language === 'as' ? 'ইনষ্টল' : 'Install'}</span>
            </button>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="pwa-install-close-btn"
              title="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* 3. iOS Safari Add to Home Screen Modal Guide */}
      {showIosGuide && (
        <div className="pwa-modal-overlay" onClick={() => setShowIosGuide(false)}>
          <div className="pwa-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pwa-modal-header">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.5rem' }}>🦏</span>
                <h3 className="font-bold text-gray-900 text-base">Install AXOM ONE on iPhone</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowIosGuide(false)}
                className="pwa-modal-close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="pwa-modal-body">
              <p className="text-sm text-gray-600 mb-4">
                To install AXOM ONE as a native app on your iPhone or iPad:
              </p>
              <ol className="pwa-ios-steps">
                <li>
                  <Share size={16} color="#2563EB" />
                  <span>Tap the <strong>Share</strong> icon in the Safari bottom toolbar.</span>
                </li>
                <li>
                  <PlusSquare size={16} color="#059669" />
                  <span>Scroll down and select <strong>Add to Home Screen</strong>.</span>
                </li>
                <li>
                  <Check size={16} color="#DC2626" />
                  <span>Tap <strong>Add</strong> in the top-right corner.</span>
                </li>
              </ol>
            </div>
            <div className="pwa-modal-footer">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setShowIosGuide(false)}
                style={{ width: '100%', padding: '0.65rem' }}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Offline Emergency Helplines Modal */}
      {showEmergencyModal && (
        <div className="pwa-modal-overlay" onClick={() => setShowEmergencyModal(false)}>
          <div className="pwa-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="pwa-modal-header">
              <div className="flex items-center gap-2">
                <PhoneCall size={18} color="#DC2626" />
                <h3 className="font-bold text-gray-900 text-base">Assam Emergency Helplines</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowEmergencyModal(false)}
                className="pwa-modal-close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="pwa-modal-body space-y-2">
              <div className="pwa-emergency-item">
                <div>
                  <div className="font-bold text-gray-900 text-sm">Assam Police Emergency</div>
                  <div className="text-xs text-gray-500">24/7 Central Response</div>
                </div>
                <a href="tel:112" className="pwa-call-pill">Call 112</a>
              </div>

              <div className="pwa-emergency-item">
                <div>
                  <div className="font-bold text-gray-900 text-sm">Medical Ambulance Services</div>
                  <div className="text-xs text-gray-500">Government Emergency Care</div>
                </div>
                <a href="tel:108" className="pwa-call-pill">Call 108</a>
              </div>

              <div className="pwa-emergency-item">
                <div>
                  <div className="font-bold text-gray-900 text-sm">Assam Forest & Wildlife Rescue</div>
                  <div className="text-xs text-gray-500">Kaziranga, Manas & National Parks</div>
                </div>
                <a href="tel:18003453867" className="pwa-call-pill">1800-345-3867</a>
              </div>

              <div className="pwa-emergency-item">
                <div>
                  <div className="font-bold text-gray-900 text-sm">Assam Tourism Assistance Desk</div>
                  <div className="text-xs text-gray-500">Visitor & Traveler Helpline</div>
                </div>
                <a href="tel:18003453888" className="pwa-call-pill">1800-345-3888</a>
              </div>

              <div className="pwa-emergency-item">
                <div>
                  <div className="font-bold text-gray-900 text-sm">Disaster Management (ASDMA)</div>
                  <div className="text-xs text-gray-500">Floods & Natural Emergencies</div>
                </div>
                <a href="tel:1070" className="pwa-call-pill">Call 1070</a>
              </div>
            </div>
            <div className="pwa-modal-footer">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowEmergencyModal(false)}
                style={{ width: '100%', padding: '0.65rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
