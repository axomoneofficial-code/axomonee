import { getAssetUrl } from '../utils/assetHelper';
import React from 'react';
import { Link } from 'react-router-dom';
import { District, Category } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import {
  Compass,
  MapPin,
  ArrowRight,
  Store,
  Wrench,
  Utensils,
  Mountain,
  GraduationCap,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface HomePageProps {
  districts: District[];
  categories: Category[];
  selectedDistrict: string;
  onDistrictChange: (districtSlug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  districts,
  selectedDistrict,
  onDistrictChange: _onDistrictChange,
}) => {
  const { t, language } = useLanguage();

  // 5 Featured authentic district items with high-resolution verified local photography
  const featuredCards = [
    {
      id: 'feat-1',
      title: 'The Brahmaputra Cafe',
      categoryTag: 'Restaurant',
      subtitle: 'Riverfront Dining • Kamrup (Metro)',
      location: 'Guwahati',
      isOpen: true,
      image: '/images/featured/brahmaputra-cafe.jpg',
      slug: 'the-brahmaputra-cafe',
    },
    {
      id: 'feat-2',
      title: 'M/S Auto Care',
      categoryTag: 'Service',
      subtitle: 'Car Repair & Service • Kamrup (Metro)',
      location: 'Guwahati',
      isOpen: true,
      image: '/images/featured/auto-care.jpg',
      slug: 'ms-auto-care',
    },
    {
      id: 'feat-3',
      title: 'Assam Handloom Centre',
      categoryTag: 'Handicraft',
      subtitle: 'Muga Silk Weaving • Kamrup',
      location: 'Guwahati / Sualkuchi',
      isOpen: true,
      image: '/images/featured/handloom-sualkuchi.jpg',
      slug: 'sualkuchi-silk-weavers-cooperative',
    },
    {
      id: 'feat-4',
      title: 'Umananda Temple',
      categoryTag: 'Tourist Place',
      subtitle: 'Peacock Island • Kamrup (Metro)',
      location: 'Guwahati',
      isOpen: true,
      image: '/images/featured/umananda-island.jpg',
      slug: 'umananda',
      link: '/destinations/umananda',
    },
    {
      id: 'feat-5',
      title: 'IIT Guwahati',
      categoryTag: 'Education',
      subtitle: 'Institute of National Importance • Kamrup',
      location: 'North Guwahati',
      isOpen: true,
      image: '/images/featured/iit-campus.jpg',
      slug: 'iit-guwahati',
      link: '/businesses/iit-guwahati',
    },
  ];

  return (
    <div>
      <SEO
        title="AXOMONE – Explore Assam, Culture, Places & Local Services"
        description="Discover Assam with AXOMONE. Explore districts, heritage sites, temples, universities, local businesses, Assamese culture, tourism and useful local resources."
        canonicalPath="/"
        keywords="Assam, Assam districts, Assam tourism, Kaziranga, Majuli, Kamakhya, Assam universities, Assamese culture, AXOMONE"
      />
      {/* ====================================================================
          1. Scenic Hero Section (Matches Reference Image)
         ==================================================================== */}
      <section className="scenic-hero">
        <div className="hero-landscape-bg" />

        {/* Living Assamese Gamusa Breeze & Sunlight Ripple */}
        <div className="hero-gamusa-wind-anim" title="অসমৰ ফুলাম গামোচা (Authentic Assamese Phulam Gamusa)" />

        {/* Top-Right Cultural Identity Tag (Matches Reference Mockup) */}
        <div className="hero-proud-badge" title={t.hero.proudBadge}>
          <div className="hero-proud-birds">
            <svg width="68" height="28" viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16C9 11 14 12 18 16C22 12 27 11 31 16" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M38 10C42 6 46 7 49 10C53 7 57 6 60 10" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M22 6C24 4 27 4.5 29 6C31 4.5 34 4 36 6" stroke="#1E293B" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={`hero-proud-script lang-${language}`}>{t.hero.proudBadge}</div>
        </div>

        <div className="hero-content-center">
          <div className={`hero-welcome-script lang-${language}`}>{t.hero.welcome}</div>
          <h1 className="hero-main-title">
            <span className="hero-title-axom">AXOM </span>
            <span className="hero-title-one">ONE</span>
          </h1>

          <div className={`hero-subtitle-en lang-${language}`}>{t.hero.subtitleEn}</div>
          <div className={`hero-subtitle-as lang-${language}`}>{t.hero.subtitleAs}</div>

          {/* Pristine Cultural Action Row (Clean Hero - Zero Search Bar) */}
          <div className="hero-clean-cta-row">
            <Link to="/tourism" className="hero-cta-btn primary" title="Explore Assam's Beauty & Heritage">
              <Compass size={18} />
              <span>{language === 'as' ? 'অসম ভ্ৰমণ' : language === 'hi' ? 'असम दर्शन' : 'Explore Assam'}</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/districts" className="hero-cta-btn secondary" title="Explore 35 Administrative Districts">
              <MapPin size={18} color="#DC2626" />
              <span>{language === 'as' ? '৩৫ খন জিলা' : language === 'hi' ? '३५ जिले' : '35 Districts'}</span>
            </Link>
            <Link to="/directory" className="hero-cta-btn secondary" title="Assam Knowledge & Directory Hub">
              <BookOpen size={18} color="#059669" />
              <span>{language === 'as' ? 'পঞ্জীকা আৰু জ্ঞানকোষ' : language === 'hi' ? 'डायरेक्टरी' : 'Directory'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Horizontal 7-Category Pill Bar (Matches Reference Image)
         ==================================================================== */}
      <section className="categories-bar-section">
        <div className="categories-bar-grid">
          {/* 1. Local Business */}
          <Link to="/businesses" className="category-pill-card">
            <div className="category-pill-icon">
              <Store size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.localBusinessTitle}</span>
              <span className="category-pill-subtitle">{t.categories.localBusinessSub}</span>
            </div>
          </Link>

          {/* 2. Services */}
          <Link to="/services" className="category-pill-card">
            <div className="category-pill-icon">
              <Wrench size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.servicesTitle}</span>
              <span className="category-pill-subtitle">{t.categories.servicesSub}</span>
            </div>
          </Link>

          {/* 3. Food & Restaurants */}
          <Link to="/explore?category=businesses&q=cafe" className="category-pill-card">
            <div className="category-pill-icon">
              <Utensils size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.foodTitle}</span>
              <span className="category-pill-subtitle">{t.categories.foodSub}</span>
            </div>
          </Link>

          {/* 4. Tourism */}
          <Link to="/tourism" className="category-pill-card">
            <div className="category-pill-icon">
              <Mountain size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.tourismTitle}</span>
              <span className="category-pill-subtitle">{t.categories.tourismSub}</span>
            </div>
          </Link>

          {/* 5. Opportunities */}
          <Link to="/opportunities" className="category-pill-card">
            <div className="category-pill-icon">
              <GraduationCap size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.opportunitiesTitle}</span>
              <span className="category-pill-subtitle">{t.categories.opportunitiesSub}</span>
            </div>
          </Link>

          {/* 6. Events */}
          <Link to="/events" className="category-pill-card">
            <div className="category-pill-icon">
              <Calendar size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.eventsTitle}</span>
              <span className="category-pill-subtitle">{t.categories.eventsSub}</span>
            </div>
          </Link>

          {/* 7. Community */}
          <Link to="/community" className="category-pill-card">
            <div className="category-pill-icon">
              <Users size={18} />
            </div>
            <div className="category-pill-text">
              <span className="category-pill-title">{t.categories.communityTitle}</span>
              <span className="category-pill-subtitle">{t.categories.communitySub}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ====================================================================
          3. Featured in Our District (5 Cards, Matches Reference Image)
         ==================================================================== */}
      <section className="featured-district-section">
        <div className="featured-header-row">
          <div>
            <div className="featured-title-box">
              <span style={{ fontSize: '1.25rem', color: '#059669' }}>🌱</span>
              <h2 className="featured-title-main">{t.featured.title}</h2>
            </div>
            <div className="featured-subtitle-text">{t.featured.subtitle}</div>
          </div>

          <div className="featured-controls-right">
            <Link
              to={`/districts/${selectedDistrict !== 'all' ? selectedDistrict : 'kamrup-metropolitan'}`}
              className="district-badge-selector"
              title="Explore District Portal"
            >
              <MapPin size={13} color="#DC2626" />
              <span>
                {districts.find((d) => d.slug === selectedDistrict)?.name || 'Kamrup (Metro)'}
              </span>
              <ArrowRight size={13} />
            </Link>

            <Link to="/explore" className="view-all-link">
              <span>{t.featured.viewAll}</span>
              <ArrowRight size={13} />
            </Link>

            <div className="carousel-nav-arrows">
              <button className="arrow-btn" aria-label="Previous">
                <ChevronLeft size={16} />
              </button>
              <button className="arrow-btn" aria-label="Next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Card Grid */}
        <div className="district-cards-grid">
          {featuredCards.map((item) => (
            <Link key={item.id} to={item.link || `/businesses/${item.slug}`} className="district-item-card">
              <div className="district-card-media">
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="district-card-img"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.failed) {
                      target.dataset.failed = 'true';
                      // Use unique category fallback so no two cards ever show the same image
                      if (item.categoryTag === 'Restaurant') target.src = getAssetUrl('/images/destinations/assamese-heritage-culinary-trail.jpg');
                      else if (item.categoryTag === 'Handicraft') target.src = getAssetUrl('/images/destinations/sualkuchi.jpg');
                      else if (item.categoryTag === 'Tourist Place') target.src = getAssetUrl('/images/destinations/umananda.jpg');
                      else if (item.categoryTag === 'Education') target.src = getAssetUrl('/images/featured/iit-admin.jpg');
                      else target.src = getAssetUrl('/images/destinations/kamakhya.jpg');
                    }
                  }}
                />
                <span className="district-card-tag">{item.categoryTag}</span>
              </div>

              <div className="district-card-content">
                <div>
                  <h3 className="district-card-title">{item.title}</h3>
                  <div className="district-card-cat">{item.subtitle}</div>
                </div>

                <div className="district-card-footer">
                  <div className="card-loc-text">
                    <MapPin size={12} color="#DC2626" />
                    <span>{item.location}</span>
                  </div>

                  <span className="card-open-pill">
                    <span>•</span> {item.isOpen ? t.featured.openNow : t.featured.closed}
                  </span>

                  <div className="card-circle-arrow">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====================================================================
          4. Three Feature Promo Banners (Matches Reference Image)
         ==================================================================== */}
      <section className="promo-banners-section">
        <div className="promo-banners-grid">
          {/* Banner 1: Explore Assam's Beauty (Dark Forest Green) */}
          <div className="promo-banner-card banner-green">
            <div>
              <h3 className="banner-title" style={{ whiteSpace: 'pre-line' }}>{t.promos.exploreBeautyTitle}</h3>
              <p className="banner-desc">
                {t.promos.exploreBeautyDesc}
              </p>
            </div>
            <Link to="/tourism" className="banner-btn-pill btn-pill-green">
              <span>{t.promos.exploreBeautyBtn}</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Banner 2: Build Your Future (Warm Cream / Ivory) */}
          <div className="promo-banner-card banner-cream">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#B45309', marginBottom: '0.5rem' }}>
                <Sparkles size={20} />
              </div>
              <h3 className="banner-title" style={{ color: '#1F2937', whiteSpace: 'pre-line' }}>{t.promos.buildFutureTitle}</h3>
              <p className="banner-desc" style={{ color: '#4B5563' }}>
                {t.promos.buildFutureDesc}
              </p>
            </div>
            <Link to="/opportunities" className="banner-btn-pill btn-pill-cream">
              <span>{t.promos.buildFutureBtn}</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Banner 3: Share with Your Community (Vibrant Gamusa Red) */}
          <div className="promo-banner-card banner-red">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <Users size={22} />
              </div>
              <h3 className="banner-title" style={{ whiteSpace: 'pre-line' }}>{t.promos.shareCommunityTitle}</h3>
              <p className="banner-desc">
                {t.promos.shareCommunityDesc}
              </p>
            </div>
            <Link to="/submit" className="banner-btn-pill btn-pill-red">
              <span>{t.promos.shareCommunityBtn}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};
