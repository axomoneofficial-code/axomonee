import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { initGlobalErrorHandlers } from './utils/errorReporting';
import './styles.css';
import { registerServiceWorker } from './utils/pwa';

// Initialize privacy-conscious error telemetry and PWA Service Worker
initGlobalErrorHandlers();
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
