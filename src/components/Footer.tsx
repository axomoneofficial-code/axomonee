import { getAssetUrl } from '../utils/assetHelper';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGuidance } from '../context/GuidanceContext';
import { INSTAGRAM_CONFIG } from '../config/socialConfig';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t, language } = useLanguage();
  const { restartTour } = useGuidance();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="site-footer-reference">
      <div className="footer-top-container">
        {/* Col 1: Logo & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img
              src={getAssetUrl("/images/axom-nav-emblem.png")}
              alt="AXOM ONE Logo"
              width={34}
              height={34}
              style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', flexShrink: 0 }}
            />
            <div className="footer-logo-title" style={{ marginBottom: 0 }}>
              <span>AXOM</span> <span>ONE</span>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '1rem' }}>
            {t.footer.tagline}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.5, maxWidth: '280px' }}>
            {t.footer.mission}
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="footer-col-title">{t.footer.quickLinks}</h4>
          <ul className="footer-link-list">
            <li><Link to="/">{t.nav.home}</Link></li>
            <li><Link to="/directory">{t.nav.directory}</Link></li>
            <li><Link to="/explore">{t.nav.explore}</Link></li>
            <li><Link to="/services">{t.nav.services}</Link></li>
            <li><Link to="/businesses">{t.nav.businesses}</Link></li>
          </ul>
        </div>

        {/* Col 3: More */}
        <div>
          <h4 className="footer-col-title">{t.footer.more}</h4>
          <ul className="footer-link-list">
            <li><Link to="/events">{t.nav.events}</Link></li>
            <li><Link to="/tourism">{t.nav.tourism}</Link></li>
            <li><Link to="/directory">{t.nav.directory}</Link></li>
            <li><Link to="/community">{t.nav.community}</Link></li>
          </ul>
        </div>

        {/* Col 4: Legal & Help */}
        <div>
          <h4 className="footer-col-title">Help & Support</h4>
          <ul className="footer-link-list">
            <li>
              <Link to="/help" style={{ fontWeight: 700, color: '#C81D25' }}>
                Help Centre (সহায় কেন্দ্ৰ)
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={restartTour}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: 'inherit',
                  font: 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                Restart Website Tour
              </button>
            </li>
            <li><Link to="/privacy">{t.footer.privacy}</Link></li>
            <li><Link to="/terms">{t.footer.terms}</Link></li>
            <li><Link to="/contact">{t.footer.contact}</Link></li>
            <li><Link to="/about">{t.footer.aboutUs}</Link></li>
          </ul>
        </div>

        {/* Col 5: Stay Connected & Newsletter */}
        <div className="footer-connect-col">
          <h4 className="footer-col-title">{t.footer.stayConnected}</h4>
          
          {/* Row 1: Social Platform Links */}
          <div className="social-icons-row">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={INSTAGRAM_CONFIG.url} target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#08281F"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="X / Twitter">
              <span style={{ fontWeight: 800, fontSize: '12px' }}>𝕏</span>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-circle-link" aria-label="Telegram">
              <Send size={13} />
            </a>
          </div>

          {/* Row 2: Official Instagram Community Badge with Follower Count */}
          <a
            href={INSTAGRAM_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-instagram-badge"
            title="Follow @axomone_official on Instagram"
          >
            <div className="footer-instagram-badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div className="footer-instagram-badge-text">
              <div className="footer-instagram-handle">{INSTAGRAM_CONFIG.handle}</div>
            </div>
            <span className="footer-instagram-follow-pill">
              {language === 'as' ? 'ফ’ল’ কৰক' : 'Follow'}
            </span>
          </a>

          {/* Row 3: Newsletter Subscription Section */}
          <div className="footer-newsletter-wrap">
            <div className="footer-newsletter-label">
              <Mail size={12} />
              <span>{language === 'as' ? 'নিয়মীয়া বাতৰি লাভ কৰক' : 'Weekly Regional Digest'}</span>
            </div>
            <form className="footer-subscribe-box" onSubmit={handleSubscribe}>
              <div className="subscribe-icon-wrap">
                <Mail size={14} color="#9CA3AF" />
              </div>
              <input
                type="email"
                className="subscribe-input"
                placeholder={subscribed ? t.footer.subscribedMsg : t.footer.subscribePlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                required
              />
              <button type="submit" className="subscribe-btn" disabled={subscribed}>
                {subscribed ? '✓ Done' : t.footer.subscribeBtn}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom-bar">
        <div>&copy; {new Date().getFullYear()} AXOM ONE. {t.footer.rightsReserved}</div>
        <div>
          {t.footer.madeWithLove}
        </div>
      </div>
    </footer>
  );
};
