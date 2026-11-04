import React from 'react';

/**
 * PageLoader Component
 * Elegant loading fallback shown during dynamic route chunk fetching
 */
export const PageLoader: React.FC<{ message?: string }> = ({
  message = 'Loading section...',
}) => {
  return (
    <div className="page-loading-wrapper" role="status" aria-live="polite">
      <div className="page-loading-card">
        <div className="page-loading-spinner-wrap">
          <div className="page-loading-gamusa-ring" />
          <span className="page-loading-pulse-dot" />
        </div>
        <div className="page-loading-text">
          <span className="page-loading-title">AXOM ONE</span>
          <span className="page-loading-sub">{message}</span>
        </div>
      </div>
    </div>
  );
};
