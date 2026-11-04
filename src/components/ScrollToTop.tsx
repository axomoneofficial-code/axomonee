import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * ScrollToTop Component
 * Ensures every page navigation opens immediately at the very top (upper part)
 * of the page rather than retaining the previous scroll position (down side).
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    // 1. Disable browser's automatic scroll restoration on SPA navigation
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. If navigating with an anchor hash (#section-id), scroll smoothly to target
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // 3. Immediately jump to the top of the page (0, 0) before browser paint
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });

    // Redundant fallbacks for legacy browsers and mobile webviews
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname, search, hash]);

  return null;
};
