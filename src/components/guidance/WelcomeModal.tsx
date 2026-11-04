import React, { useEffect, useRef } from 'react';
import { useGuidance } from '../../context/GuidanceContext';
import {
  Compass,
  X,
  MapPin,
  Landmark,
  Calendar,
  Users,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const WelcomeModal: React.FC = () => {
  const { isWelcomeOpen, closeWelcome, startTour } = useGuidance();
  const dialogRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key & focus primary button on open
  useEffect(() => {
    if (!isWelcomeOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeWelcome(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => {
      primaryButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isWelcomeOpen, closeWelcome]);

  if (!isWelcomeOpen) return null;


  return (
    <div
      className="guidance-modal-backdrop"
      role="presentation"
      onClick={() => closeWelcome(true)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-title"
        aria-describedby="welcome-modal-desc"
        className="guidance-welcome-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Woven Gamusa Jacquard Strip */}
        <div className="gamusa-top-woven-strip" style={{ height: '10px' }} />

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={() => closeWelcome(true)}
          className="guidance-modal-close-btn"
          aria-label="Close welcome guide"
          title="Close guide (Esc)"
        >
          <X size={20} />
        </button>

        {/* Content Container */}
        <div className="guidance-welcome-body">
          {/* Brand Header */}
          <div className="guidance-welcome-header">
            <div className="guidance-brand-badge">
              <img
                src="/images/axom-nav-emblem.png"
                alt="AXOM ONE Emblem"
                className="guidance-brand-emblem"
              />
              <div>
                <div className="guidance-brand-title">AXOM ONE</div>
                <div className="guidance-brand-slogan">Discover Local. Connect Assam.</div>
              </div>
            </div>

            <div className="guidance-assamese-tagline">
              আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম
            </div>

            <h2 id="welcome-modal-title" className="guidance-welcome-heading">
              Welcome to AXOM ONE
            </h2>

            <p id="welcome-modal-desc" className="guidance-welcome-subheading">
              Discover Assam, explore local places, and connect with your community.
            </p>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="guidance-features-grid">
            <div className="guidance-feature-item">
              <div className="guidance-feature-icon red">
                <MapPin size={20} />
              </div>
              <div className="guidance-feature-text">
                <h4>35 Administrative Districts</h4>
                <p>Interactive contiguous SVG map, facts, district headquarters, and regional attractions.</p>
              </div>
            </div>

            <div className="guidance-feature-item">
              <div className="guidance-feature-icon green">
                <Landmark size={20} />
              </div>
              <div className="guidance-feature-text">
                <h4>Explore Verified Assam</h4>
                <p>Curated directory of universities, colleges, historic schools, sacred temples, and Satras.</p>
              </div>
            </div>

            <div className="guidance-feature-item">
              <div className="guidance-feature-icon gold">
                <Calendar size={20} />
              </div>
              <div className="guidance-feature-text">
                <h4>Cultural Events & Festivals</h4>
                <p>Raas Mahotsavs, Rongali Bihu celebrations, barter fairs, dates, and turn-by-turn directions.</p>
              </div>
            </div>

            <div className="guidance-feature-item">
              <div className="guidance-feature-icon blue">
                <Users size={20} />
              </div>
              <div className="guidance-feature-text">
                <h4>Community & Moderation</h4>
                <p>Suggest places, register local businesses, or request corrections with editorial verification.</p>
              </div>
            </div>
          </div>

          {/* Privacy & Storage Transparency Note */}
          <div className="guidance-privacy-strip">
            <ShieldCheck size={16} className="shrink-0 text-emerald-600" />
            <span>
              100% Private: No login required, zero tracking, and your tour preferences are saved only in your browser.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="guidance-welcome-actions">
            <button
              ref={primaryButtonRef}
              type="button"
              onClick={() => startTour(0)}
              className="guidance-btn-primary"
            >
              <Compass size={18} />
              <span>Take Quick Website Tour</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => closeWelcome(true)}
              className="guidance-btn-secondary"
            >
              <span>Start Exploring</span>
            </button>

            <button
              type="button"
              onClick={() => closeWelcome(true)}
              className="guidance-btn-skip"
            >
              <span>Skip Guide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
