import { getAssetUrl } from '../utils/assetHelper';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { INSTAGRAM_CONFIG } from '../config/socialConfig';
import { ExternalLink, Heart, MessageCircle, Users, CheckCircle } from 'lucide-react';

interface InstagramPostPreview {
  id: string;
  image: string;
  caption: string;
  caption_as: string;
  likes: string;
  comments: string;
  location: string;
}

const FEATURED_POSTS: InstagramPostPreview[] = [
  {
    id: 'post-1',
    image: '/images/destinations/kaziranga.jpg',
    caption: 'Rhino in the golden sunrise grass of Kaziranga 🦏🌾',
    caption_as: 'কাজিৰঙাৰ সোণালী পুৱাত এশিঙীয়া গঁড়ৰ মনোৰম দৃশ্য 🦏🌾',
    likes: '1,420',
    comments: '88',
    location: 'Kaziranga National Park',
  },
  {
    id: 'post-2',
    image: '/images/destinations/majuli.jpg',
    caption: 'Majuli river island: Living Vaishnavite heritage & masks 🎭🏝️',
    caption_as: 'মাজুলীৰ ঐতিহ্যমণ্ডিত মুখা শিল্প আৰু সত্ৰীয়া সংস্কৃতি 🎭🏝️',
    likes: '1,890',
    comments: '124',
    location: 'Majuli River Island',
  },
  {
    id: 'post-3',
    image: '/images/destinations/rang-ghar.jpg',
    caption: '600-year-old royal amphitheatre of the Ahom monarchs 🏛️✨',
    caption_as: 'আহোম স্বৰ্গদেউসকলৰ ঐতিহাসিক ৰংঘৰ আৰু গৌৰৱময় ইতিহাস 🏛️✨',
    likes: '2,130',
    comments: '142',
    location: 'Sivasagar, Assam',
  },
  {
    id: 'post-4',
    image: '/images/destinations/tea-country.jpg',
    caption: 'Lush evergreen morning mist across Assam tea gardens 🍵🍃',
    caption_as: 'অসমৰ চিৰসেউজ চাহ বাগিচাৰ সেউজীয়া নিসৰ্গ 🍵🍃',
    likes: '1,650',
    comments: '95',
    location: 'Jorhat Tea Capital',
  },
];

export const InstagramShowcase: React.FC = () => {
  const { language } = useLanguage();
  const [showFullBio, setShowFullBio] = React.useState(false);
  const isAssamese = language === 'as';

  return (
    <section className="instagram-showcase-section" aria-label="Official Instagram Community">
      <div className="instagram-showcase-card">
        {/* Header Profile Bar */}
        <div className="instagram-profile-header">
          <div className="instagram-profile-left">
            {/* Instagram Gradient Ring Avatar */}
            <a
              href={INSTAGRAM_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-avatar-ring"
              title="Open @axomone_official on Instagram"
            >
              <div className="instagram-avatar-inner">
                <img
                  src={getAssetUrl("/images/axom-nav-emblem.png")}
                  alt="AXOM ONE Instagram Profile"
                  className="instagram-avatar-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="instagram-avatar-fallback">AO</span>
              </div>
            </a>

            <div className="instagram-profile-meta">
              <div className="instagram-handle-row">
                <a
                  href={INSTAGRAM_CONFIG.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-handle-link"
                >
                  <span className="instagram-handle-text">{INSTAGRAM_CONFIG.handle}</span>
                  <CheckCircle size={15} className="instagram-verified-badge" />
                </a>
                <span className="instagram-brand-pill">Official Page</span>
              </div>

              <div className="instagram-stats-row">
                <div className="instagram-stat-chip">
                  <strong className="instagram-stat-number">{INSTAGRAM_CONFIG.followerCount}</strong>
                  <span className="instagram-stat-label">
                    {isAssamese ? INSTAGRAM_CONFIG.label_as : INSTAGRAM_CONFIG.label}
                  </span>
                </div>
                <span className="instagram-stat-dot">•</span>
                <div className="instagram-stat-chip">
                  <strong className="instagram-stat-number">{INSTAGRAM_CONFIG.postsCount}</strong>
                  <span className="instagram-stat-label">
                    {isAssamese ? 'পোষ্ট' : 'Posts'}
                  </span>
                </div>
              </div>

              <p className="instagram-bio-text" style={{ whiteSpace: 'pre-line' }}>
                {isAssamese ? INSTAGRAM_CONFIG.bio_as : INSTAGRAM_CONFIG.bio}
              </p>

              <button
                type="button"
                onClick={() => setShowFullBio(!showFullBio)}
                className="instagram-toggle-story-btn"
                style={{
                  alignSelf: 'flex-start',
                  marginTop: '0.4rem',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#DC2626',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <span>{showFullBio ? (isAssamese ? '▲ চমু আভাস' : '▲ Show Less') : (isAssamese ? '▼ সম্পূৰ্ণ ১৫০ শব্দৰ পৰিচয় চাওক' : '▼ Read Full 150-Word Bio')}</span>
              </button>

              {showFullBio && (
                <div
                  style={{
                    marginTop: '0.65rem',
                    padding: '0.85rem 1rem',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    lineHeight: '1.6',
                    color: '#334155',
                    maxWidth: '560px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B' }}>
                      {isAssamese ? 'অসমীয়া আনুষ্ঠানিক পৰিচয়' : 'Official Platform Story'}
                    </span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, background: '#EFF6FF', color: '#1D4ED8', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                      150 Words
                    </span>
                  </div>
                  <p style={{ margin: 0 }}>
                    {isAssamese ? INSTAGRAM_CONFIG.fullBio150Words_as : INSTAGRAM_CONFIG.fullBio150Words}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="instagram-profile-right">
            <a
              href={INSTAGRAM_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-follow-btn"
              title="Follow @axomone_official on Instagram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="instagram-btn-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>{isAssamese ? 'ইনষ্টাগ্ৰামত ফ’ল’ কৰক' : 'Follow on Instagram'}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* 4-Photo Feed Grid Preview */}
        <div className="instagram-feed-grid">
          {FEATURED_POSTS.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-feed-tile"
              title={post.caption}
            >
              <img
                src={getAssetUrl(post.image)}
                alt={post.caption}
                className="instagram-tile-img"
                loading="lazy"
              />
              <div className="instagram-tile-overlay">
                <div className="instagram-tile-stats">
                  <span className="flex items-center gap-1 font-bold text-xs text-white">
                    <Heart size={14} fill="#FFFFFF" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-xs text-white">
                    <MessageCircle size={14} fill="#FFFFFF" />
                    {post.comments}
                  </span>
                </div>
                <div className="instagram-tile-caption truncate text-xs text-white mt-1">
                  {isAssamese ? post.caption_as : post.caption}
                </div>
                <div className="instagram-tile-loc text-[10px] text-amber-200 mt-0.5">
                  📍 {post.location}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner Footnote */}
        <div className="instagram-footer-bar">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Users size={14} className="text-red-600" />
            <span>
              {isAssamese
                ? 'আমাৰ অসমৰ জীৱন্ত সংস্কৃতি, পৰ্যটন আৰু দৈনন্দিন কাহিনী প্ৰতিদিনে ইনষ্টাগ্ৰামত উপভোগ কৰক।'
                : 'Join 12,500+ Assamese diaspora & explorers on our official daily Instagram channel.'}
            </span>
          </div>
          <a
            href={INSTAGRAM_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-view-all-link"
          >
            <span>{isAssamese ? 'সম্পূৰ্ণ প্ৰফাইল চাওক' : 'View @axomone_official'}</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};
