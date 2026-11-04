import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGuidance } from '../../context/GuidanceContext';
import { useLanguage } from '../../context/LanguageContext';
import { TOUR_STEPS, TourStep } from './tourSteps';
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Compass,
} from 'lucide-react';

interface ElementRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const TourOverlay: React.FC = () => {
  const {
    isTourActive,
    currentTourStep,
    nextTourStep,
    prevTourStep,
    skipTour,
    finishTour,
  } = useGuidance();

  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [targetRect, setTargetRect] = useState<ElementRect | null>(null);
  const [placementDirection, setPlacementDirection] = useState<'above' | 'below' | 'centered' | 'docked-bottom-right'>('below');
  const [arrowLeftOffset, setArrowLeftOffset] = useState<number>(24);
  const [cardPosition, setCardPosition] = useState<React.CSSProperties>({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const step: TourStep | undefined = TOUR_STEPS[currentTourStep];
  const isFirstStep = currentTourStep === 0;
  const isLastStep = currentTourStep === TOUR_STEPS.length - 1;

  // 1. Auto-navigate to the step's route when tour step changes
  useEffect(() => {
    if (!isTourActive || !step) return;

    if (step.route && location.pathname !== step.route) {
      navigate(step.route);
    }
  }, [isTourActive, currentTourStep, step?.route, location.pathname, navigate]);

  // 2. Measure and position relative to target element with intelligent non-blocking placement
  const updatePosition = useCallback(() => {
    if (!step || !isTourActive) return;

    const el = document.querySelector(step.targetSelector);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setTargetRect({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const cardWidth = Math.min(460, windowWidth - 28);
        const estimatedCardHeight = 360;

        const isLargeElement = rect.height > 250 || rect.width > 620;
        const wantsBottomRight = step.placement === 'bottom-right';

        // CASE A: Large content (like the 35-district map or destination cards grid)
        // Dock neatly at bottom-right so the user can clearly see and interact with the content!
        if ((wantsBottomRight || isLargeElement) && windowWidth >= 768) {
          setPlacementDirection('docked-bottom-right');
          setCardPosition({
            position: 'fixed',
            bottom: '24px',
            right: '28px',
            width: `${cardWidth}px`,
            zIndex: 99999,
            transform: 'none',
          });
          return;
        }

        // CASE B: Mobile viewports (< 768px)
        if (windowWidth < 768) {
          setPlacementDirection('docked-bottom-right');
          setCardPosition({
            position: 'fixed',
            bottom: '12px',
            left: '12px',
            right: '12px',
            maxWidth: 'calc(100vw - 24px)',
            zIndex: 99999,
            transform: 'none',
          });
          return;
        }

        // CASE C: Compact elements (Search bar, header, filter buttons)
        const targetCenterX = rect.left + rect.width / 2;
        const left = Math.max(16, Math.min(targetCenterX - cardWidth / 2, windowWidth - cardWidth - 16));
        const arrowOffset = Math.max(28, Math.min(targetCenterX - left, cardWidth - 28));
        setArrowLeftOffset(arrowOffset);

        let top = rect.bottom + 22;
        let direction: 'above' | 'below' | 'centered' | 'docked-bottom-right' = 'below';

        if (top + estimatedCardHeight > windowHeight && rect.top > estimatedCardHeight + 20) {
          top = Math.max(16, rect.top - estimatedCardHeight - 22);
          direction = 'above';
        }

        setPlacementDirection(direction);
        setCardPosition({
          position: 'fixed',
          top: `${Math.max(16, Math.min(top, windowHeight - estimatedCardHeight - 16))}px`,
          left: `${left}px`,
          width: `${cardWidth}px`,
          zIndex: 99999,
          transform: 'none',
        });
        return;
      }
    }

    // Fallback: center in viewport if target not in view
    setTargetRect(null);
    setPlacementDirection('centered');
    setCardPosition({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: `${Math.min(460, window.innerWidth - 32)}px`,
      zIndex: 99999,
    });
  }, [step, isTourActive]);

  // 3. Smoothly scroll target into view when navigating or changing steps
  useEffect(() => {
    if (!isTourActive || !step) return;

    let retries = 0;
    const maxRetries = 8;

    const locateAndSmoothScroll = () => {
      const el = document.querySelector(step.targetSelector);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          // Smooth scroll to the target element
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(updatePosition, 350);
          return;
        }
      }

      if (retries < maxRetries) {
        retries++;
        setTimeout(locateAndSmoothScroll, 120);
      } else {
        updatePosition();
      }
    };

    const timer = setTimeout(locateAndSmoothScroll, 100);
    return () => clearTimeout(timer);
  }, [isTourActive, currentTourStep, location.pathname, step?.targetSelector, updatePosition]);

  // Handle window resize and scroll events
  useEffect(() => {
    if (!isTourActive) return;

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    const timer = setTimeout(() => {
      updatePosition();
      nextBtnRef.current?.focus();
    }, 150);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
      clearTimeout(timer);
    };
  }, [isTourActive, currentTourStep, updatePosition]);

  // Keyboard navigation: Escape closes, ArrowLeft prev, ArrowRight/Enter next
  useEffect(() => {
    if (!isTourActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        skipTour();
      } else if (e.key === 'ArrowRight') {
        if (!isLastStep) {
          e.preventDefault();
          nextTourStep();
        }
      } else if (e.key === 'ArrowLeft') {
        if (!isFirstStep) {
          e.preventDefault();
          prevTourStep();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTourActive, isFirstStep, isLastStep, nextTourStep, prevTourStep, skipTour]);

  if (!isTourActive || !step) return null;

  const isAssamese = language === 'as';
  const progressPercent = Math.round(((currentTourStep + 1) / TOUR_STEPS.length) * 100);
  const isTargetOnDifferentPage = step.route && step.route !== '/' && location.pathname !== step.route;

  const handleNavigateToStepPage = () => {
    navigate(step.route);
    setTimeout(updatePosition, 300);
  };

  // Clamped spotlight cutout calculations ensuring backdrop dimming is ALWAYS visible
  const spotlightPad = 8;
  const spotlightX = targetRect ? Math.max(8, targetRect.left - spotlightPad) : 0;
  const spotlightY = targetRect ? Math.max(8, targetRect.top - spotlightPad) : 0;
  const spotlightW = targetRect ? Math.min(window.innerWidth - spotlightX - 8, targetRect.width + spotlightPad * 2) : 0;
  const spotlightH = targetRect ? Math.min(window.innerHeight - spotlightY - 8, targetRect.height + spotlightPad * 2) : 0;

  return (
    <div className="tour-backdrop" role="presentation" onClick={skipTour}>
      {/* SVG Spotlight Cutout Overlay */}
      {targetRect && (
        <svg
          className="tour-spotlight-svg"
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 99990,
          }}
        >
          <defs>
            <mask id="tour-spotlight-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect
                x={spotlightX}
                y={spotlightY}
                width={spotlightW}
                height={spotlightH}
                rx={14}
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="rgba(15, 23, 42, 0.68)"
            mask="url(#tour-spotlight-mask)"
          />
        </svg>
      )}

      {/* Target Element Pulsing Glow Ring & Corner Beacons */}
      {targetRect && (
        <div
          className="tour-highlight-pulse-ring"
          style={{
            position: 'fixed',
            top: `${spotlightY}px`,
            left: `${spotlightX}px`,
            width: `${spotlightW}px`,
            height: `${spotlightH}px`,
            borderRadius: '14px',
            pointerEvents: 'none',
            zIndex: 99995,
          }}
        >
          <div className="tour-beacon-dot top-left" />
          <div className="tour-beacon-dot top-right" />
          <div className="tour-beacon-dot bottom-left" />
          <div className="tour-beacon-dot bottom-right" />
        </div>
      )}

      {/* Floating Radar Beacon over Target on Docked Steps */}
      {targetRect && placementDirection === 'docked-bottom-right' && (
        <div
          className="tour-target-beacon"
          style={{
            position: 'fixed',
            top: `${Math.max(16, spotlightY + 14)}px`,
            left: `${Math.max(20, spotlightX + 24)}px`,
            zIndex: 99996,
            pointerEvents: 'none',
          }}
        >
          <div className="tour-beacon-sonar" />
          <div className="tour-beacon-badge">
            <Sparkles size={14} className="text-amber-300" />
            <span>{isAssamese ? 'সক্ৰিয় অংশ অন্বেষণ কৰক' : 'Active Section • Explore Here'}</span>
          </div>
        </div>
      )}

      {/* Guided Tour Floating Card */}
      <div
        key={`tour-step-${currentTourStep}`}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-step-title"
        aria-describedby="tour-step-desc"
        className="tour-card tour-card-animated"
        style={cardPosition}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Directional Pointer Arrow for Standard Placements */}
        {targetRect && placementDirection !== 'centered' && placementDirection !== 'docked-bottom-right' && (
          <div
            className={`tour-pointer-arrow ${placementDirection}`}
            style={{ left: `${arrowLeftOffset}px` }}
          >
            <div className="tour-pointer-arrow-tip" />
          </div>
        )}

        {/* Docked Indicator Pill when Card is Docked at Corner */}
        {placementDirection === 'docked-bottom-right' && (
          <div className="tour-docked-indicator-strip">
            <span className="tour-docked-pulse-dot" />
            <Compass size={13} className="text-red-600" />
            <span>
              {isAssamese
                ? 'মুক্ত মানচিত্ৰ আৰু স্থানসমূহ ক্লিক কৰি অন্বেষণ কৰক'
                : 'Content is fully interactive • Click elements to explore'}
            </span>
          </div>
        )}

        {/* Gamusa Jacquard Top Border with Shimmer Animation */}
        <div className="gamusa-top-woven-strip gamusa-shimmer-bar" style={{ height: '7px' }} />

        {/* Card Header */}
        <div className="tour-card-header">
          <div className="tour-step-badge">
            <Sparkles size={13} className="text-red-600" />
            <span>{step.badge}</span>
          </div>

          <button
            type="button"
            onClick={skipTour}
            className="tour-close-btn"
            aria-label="Skip website tour"
            title="Skip tour (Esc)"
          >
            <X size={16} />
          </button>
        </div>

        {/* Animated Progress Bar */}
        <div className="tour-progress-track">
          <div
            className="tour-progress-bar"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Card Body */}
        <div className="tour-card-body">
          <h3 id="tour-step-title" className="tour-step-title">
            {step.title}
          </h3>

          {step.title_as && (
            <div className="tour-step-title-as">
              {step.title_as}
            </div>
          )}

          {/* DEDICATED "WHAT THIS PART IS USED FOR" SECTION */}
          <div className="tour-used-for-box">
            <div className="tour-used-for-header">
              <span className="tour-used-for-icon">🎯</span>
              <span className="tour-used-for-label">
                {isAssamese ? 'কি কামত ব্যৱহাৰ হয়:' : 'What this part is used for:'}
              </span>
            </div>
            <p className="tour-used-for-desc">
              {isAssamese && step.used_for_as ? step.used_for_as : step.used_for}
            </p>
          </div>

          <p id="tour-step-desc" className="tour-step-desc">
            {isAssamese && step.description_as ? step.description_as : step.description}
          </p>

          {/* Highlights List */}
          {step.highlights && step.highlights.length > 0 && (
            <ul className="tour-highlights-list">
              {step.highlights.map((highlight, idx) => (
                <li key={idx}>
                  <CheckCircle size={14} className="tour-check-icon" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Quick jump to page if user is on different route */}
          {isTargetOnDifferentPage && (
            <div className="tour-route-jump-box">
              <span className="tour-route-jump-text">
                Navigating to <strong>{step.route}</strong>
              </span>
              <button
                type="button"
                onClick={handleNavigateToStepPage}
                className="tour-route-jump-btn"
              >
                <span>Go to Page</span>
                <ExternalLink size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="tour-card-footer">
          <button
            type="button"
            onClick={skipTour}
            className="tour-btn-skip"
          >
            Skip Tour
          </button>

          <div className="tour-btn-nav-group">
            <button
              type="button"
              onClick={prevTourStep}
              disabled={isFirstStep}
              className="tour-btn-prev"
              title="Previous step (Left Arrow)"
            >
              <ChevronLeft size={16} />
              <span>Back</span>
            </button>

            {isLastStep ? (
              <button
                ref={nextBtnRef}
                type="button"
                onClick={finishTour}
                className="tour-btn-finish"
                title="Finish website tour"
              >
                <CheckCircle size={16} />
                <span>Finish Guide</span>
              </button>
            ) : (
              <button
                ref={nextBtnRef}
                type="button"
                onClick={nextTourStep}
                className="tour-btn-next"
                title="Next step (Right Arrow)"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
