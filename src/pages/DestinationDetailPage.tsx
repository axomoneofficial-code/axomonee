import { getAssetUrl } from '../utils/assetHelper';
import React, { useState, useEffect, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { sanitizeExternalUrl } from '../utils/security';
import { DestinationImage } from '../components/DestinationImage';
import { LiveWeatherSafariAlert } from '../components/LiveWeatherSafariAlert';
import { AssamesePronounceButton } from '../components/AssamesePronounceButton';
import { CommunityBookingModal } from '../components/CommunityBookingModal';
import { getDestinationOperationalStatus } from '../utils/weatherSafariService';
import {
  findDestinationBySlug,
  getTourismDestinations,
  getDistrictTransitInfo,
  getDestinationGallery,
  DestinationSlide,
} from '../utils/tourismData';
import {
  getLocalizedDestinationDescription,
  getLocalizedDestinationTagline,
  getLocalizedDestinationHighlights,
  getLocalizedDestinationName,
  getLocalizedDestinationSeason,
  getLocalizedDestinationEntry,
  getLocalizedDestinationHours,
} from '../utils/localizedContent';
import {
  Compass,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Plane,
  Ticket,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  AlertTriangle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Train,
  Car,
  PhoneCall,
  Navigation,
  Copy,
  Maximize2,
  X,
  Building2,
  CheckCircle2,
  Info,
  Home,
  Camera,
  Heart,
} from 'lucide-react';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const [copied, setCopied] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalType, setBookingModalType] = useState<'homestay' | 'artisan'>('homestay');
  const [searchFallbackQuery, setSearchFallbackQuery] = useState('');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // 1. Robust multi-tier destination resolution (never blocked by stale localStorage)
  const destination = useMemo(() => {
    return findDestinationBySlug(slug);
  }, [slug]);

  // All destinations for recommendations and related places
  const allDestinations = useMemo(() => {
    return getTourismDestinations();
  }, []);

  // Related places in the same district or category
  const relatedPlaces = useMemo(() => {
    if (!destination) return [];
    return allDestinations
      .filter(
        (d) =>
          d.id !== destination.id &&
          d.status === 'published' &&
          (d.district_slug === destination.district_slug ||
            d.category === destination.category ||
            d.district === destination.district)
      )
      .slice(0, 3);
  }, [allDestinations, destination]);

  // Filtered recommendations if destination was not found
  const fallbackRecommendations = useMemo(() => {
    if (destination) return [];
    if (!searchFallbackQuery.trim()) {
      // Return top 4 iconic places
      return allDestinations.slice(0, 4);
    }
    const q = searchFallbackQuery.toLowerCase();
    return allDestinations
      .filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.district.toLowerCase().includes(q) ||
          (d.name_as && d.name_as.includes(q))
      )
      .slice(0, 6);
  }, [destination, searchFallbackQuery, allDestinations]);

  // District transit information
  const transitInfo = useMemo(() => {
    if (!destination) return null;
    return getDistrictTransitInfo(destination.district_slug || destination.district);
  }, [destination]);

  // Curated multi-picture gallery for the destination (authentic photographs)
  const gallerySlides: DestinationSlide[] = useMemo(() => {
    if (!destination) return [];
    return getDestinationGallery(destination, allDestinations);
  }, [destination, allDestinations]);

  // Reset active slide index when destination changes
  useEffect(() => {
    setActiveSlideIndex(0);
  }, [destination?.id, destination?.slug]);

  // Dynamic SEO Structured Data (JSON-LD) & Document Metadata
  useEffect(() => {
    if (!destination) return;
    const locName = getLocalizedDestinationName(destination, language);
    const prevTitle = document.title;
    document.title = `${locName} — AXOM ONE | অসম এক মঞ্চ`;

    const scriptId = 'destination-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: destination.name,
      alternateName: [destination.name_as, destination.name_hi].filter(Boolean),
      description: destination.shortDescription || destination.fullDescription,
      url: `https://axomoneofficial-code.github.io/axomonee/destinations/${destination.slug}`,
      image: destination.imageUrl ? `https://axomoneofficial-code.github.io/axomonee${destination.imageUrl}` : undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: destination.locality,
        addressRegion: destination.district,
        addressCountry: 'IN',
      },
      ...(destination.latitude && destination.longitude
        ? {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: destination.latitude,
              longitude: destination.longitude,
            },
          }
        : {}),
    };
    script.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = prevTitle;
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [destination, language]);

  // Keyboard navigation for carousel & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gallerySlides.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gallerySlides.length]);

  const currentSlide: DestinationSlide = gallerySlides[activeSlideIndex] || {
    url: destination?.imageUrl || destination?.image || '',
    caption: destination?.name || '',
    attribution: destination?.imageAttribution,
  };

  const handlePrevSlide = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1));
  };

  const handleNextSlide = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setActiveSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
  };

  // Mobile Touch Swipe Gesture state & listeners for photo slider
  const touchStartRef = React.useRef<{ x: number; y: number; time: number } | null>(null);
  const isSwipingRef = React.useRef<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (gallerySlides.length <= 1) return;
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
    isSwipingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || gallerySlides.length <= 1) return;
    const touch = e.touches[0];
    const diffX = Math.abs(touch.clientX - touchStartRef.current.x);
    const diffY = Math.abs(touch.clientY - touchStartRef.current.y);

    // If predominantly horizontal movement > 10px, mark as swipe in progress
    if (diffX > 10 && diffX > diffY) {
      isSwipingRef.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || gallerySlides.length <= 1) return;
    const touch = e.changedTouches[0];
    const deltaX = touchStartRef.current.x - touch.clientX;
    const deltaY = touchStartRef.current.y - touch.clientY;

    // Minimum swipe threshold: 38px horizontal distance and primarily horizontal angle
    if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      if (deltaX > 0) {
        // Swiped Left -> Navigate to next photo
        handleNextSlide(e);
      } else {
        // Swiped Right -> Navigate to previous photo
        handlePrevSlide(e);
      }
    }

    // Reset touch coordinates and swiping lock shortly after
    setTimeout(() => {
      isSwipingRef.current = false;
      touchStartRef.current = null;
    }, 80);
  };

  // Safe handler that opens fullscreen viewer ONLY on direct tap, not after a swipe
  const handleHeroPhotoClick = () => {
    if (!isSwipingRef.current) {
      setLightboxOpen(true);
    }
  };

  // Lightbox touch swipe gesture handlers
  const lightboxTouchStartRef = React.useRef<{ x: number; y: number } | null>(null);

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    if (gallerySlides.length <= 1) return;
    const touch = e.touches[0];
    lightboxTouchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    if (!lightboxTouchStartRef.current || gallerySlides.length <= 1) return;
    const touch = e.changedTouches[0];
    const deltaX = lightboxTouchStartRef.current.x - touch.clientX;
    const deltaY = lightboxTouchStartRef.current.y - touch.clientY;

    if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      if (deltaX > 0) {
        handleNextSlide(e);
      } else {
        handlePrevSlide(e);
      }
    }
    lightboxTouchStartRef.current = null;
  };

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  // Operational Status for Header & Live Alert
  const headerStatus = useMemo(() => {
    return destination ? getDestinationOperationalStatus(destination) : null;
  }, [destination]);

  // Handle Share button
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${destination?.name} — AXOM ONE`,
          text: destination?.shortDescription || destination?.name,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Handle Copy GPS Coordinates
  const handleCopyCoords = () => {
    if (!destination || destination.latitude === null || destination.longitude === null) return;
    const coordsStr = `${destination.latitude.toFixed(5)}, ${destination.longitude.toFixed(5)}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(coordsStr);
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2500);
    }
  };

  // Smooth scroll to map section
  const scrollToMap = () => {
    const el = document.getElementById('dest-interactive-map-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // =========================================================================
  // NOT FOUND VIEW — Comprehensive, Helpful & Searchable
  // =========================================================================
  if (!destination) {
    return (
      <div className="dest-notfound-container">
        <div className="dest-notfound-card" style={{ maxWidth: '680px' }}>
          <div className="gamusa-top-woven-strip" style={{ height: '14px', borderRadius: '4px' }} />
          <div className="p-8 text-center">
            <div className="dest-notfound-icon-wrap">
              <Compass size={40} color="#DC2626" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 mt-4">
              {language === 'as' ? 'স্থান বিচাৰি পোৱা নগ’ল' : 'Destination Not Found'}
            </h1>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto text-sm leading-relaxed">
              {language === 'as'
                ? 'অনুগ্ৰহ কৰি সঠিক নাম লিখি তলত বিচাৰক বা অসমৰ ঐতিহ্যমণ্ডিত স্থানসমূহৰ তালিকা অন্বেষণ কৰক।'
                : 'The destination link may have changed or is filed under an updated regional slug. Search by name or district below to explore verified destinations.'}
            </p>

            {/* In-page instant search box */}
            <div className="mt-5 max-w-md mx-auto">
              <input
                type="text"
                placeholder={
                  language === 'as'
                    ? 'স্থান বা জিলাৰ নাম লিখক (যেনে: বৰপেটা, শিৱসাগৰ, কাজিৰঙা)...'
                    : 'Search destinations (e.g. Barpeta, Sivasagar, Kaziranga)...'
                }
                value={searchFallbackQuery}
                onChange={(e) => setSearchFallbackQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 shadow-sm"
              />
            </div>

            {/* Recommendations Grid */}
            <div className="mt-6 text-left">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                {language === 'as' ? 'জনপ্ৰিয় পৰ্যটন স্থানসমূহ' : 'Popular Destinations in Assam'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fallbackRecommendations.map((rec) => (
                  <Link
                    key={rec.id}
                    to={`/destinations/${rec.slug}`}
                    className="flex items-center gap-3 p-2.5 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-xl transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                      <DestinationImage
                        src={rec.imageUrl || rec.image || ''}
                        alt={rec.name}
                        className="w-full h-full object-cover"
                        category={rec.category}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm text-gray-900 group-hover:text-red-700 truncate">
                        {rec.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {rec.locality || rec.district}
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400 group-hover:text-red-600 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <ArrowLeft size={16} />
                <span>{language === 'as' ? 'উভতি যাওক' : 'Go Back'}</span>
              </button>
              <Link
                to="/tourism"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Compass size={16} />
                <span>{language === 'as' ? 'সকলো পৰ্যটন স্থান' : 'Browse All Destinations'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DESTINATION DETAILS FOUND
  // =========================================================================
  const isVerified = destination.status === 'published';
  const hasGps =
    destination.latitude !== null &&
    destination.longitude !== null &&
    !isNaN(destination.latitude) &&
    !isNaN(destination.longitude);

  const googleMapsDirectionsUrl = hasGps
    ? `https://www.google.com/maps/dir/?api=1&destination=${destination.latitude},${destination.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${destination.name}, ${destination.locality || destination.district}, Assam`
      )}`;

  const osmUrl = hasGps
    ? `https://www.openstreetmap.org/?mlat=${destination.latitude}&mlon=${destination.longitude}#map=15/${destination.latitude}/${destination.longitude}`
    : `https://www.openstreetmap.org/search?query=${encodeURIComponent(
        `${destination.name} Assam`
      )}`;

  const appleMapsUrl = hasGps
    ? `https://maps.apple.com/?daddr=${destination.latitude},${destination.longitude}`
    : `https://maps.apple.com/?q=${encodeURIComponent(
        `${destination.name} Assam`
      )}`;

  const googleImageSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${destination.name} ${destination.locality || destination.district || ''} Assam real pictures tourism`
  )}`;

  return (
    <div className="dest-detail-page-wrapper">
      {destination && (
        <SEO
          title={`${destination.name}${destination.name_as ? ` (${destination.name_as})` : ''} – Assam Tourism &amp; Heritage Guide`}
          description={destination.shortDescription || destination.description || destination.tagline || 'Explore verified heritage and tourism sanctuaries in Assam.'}
          canonicalPath={`/destinations/${destination.slug}`}
          image={destination.imageUrl || destination.image}
          keywords={`${destination.name}, ${destination.name_as || ''}, Assam tourism, ${destination.locality || ''}, ${destination.district || ''}`}
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Tourism & Heritage', path: '/tourism' },
            { name: destination.name, path: `/destinations/${destination.slug}` },
          ]}
        />
      )}
      {/* Lightbox Modal with Slides Carousel Navigation */}
      {lightboxOpen && (
        <div
          className="dest-lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="dest-lightbox-modal-box"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleLightboxTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="dest-lightbox-close-btn"
              title="Close image viewer (Esc)"
            >
              <X size={22} />
            </button>

            {gallerySlides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="dest-lightbox-nav-btn prev"
                  title="Previous photograph"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="dest-lightbox-nav-btn next"
                  title="Next photograph"
                  aria-label="Next slide"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <div className="dest-lightbox-img-container">
              <img
                src={getAssetUrl(currentSlide.url)}
                alt={currentSlide.caption || destination.name}
                className="dest-lightbox-img"
              />
            </div>

            <div className="dest-lightbox-bottom-bar">
              <div className="dest-lightbox-caption">
                <strong>{currentSlide.caption}</strong>
                {currentSlide.attribution && (
                  <span className="dest-lightbox-attr"> • {currentSlide.attribution}</span>
                )}
              </div>
              {gallerySlides.length > 1 && (
                <div className="dest-lightbox-counter">
                  {activeSlideIndex + 1} / {gallerySlides.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 1. Box-Type Breadcrumb Navigation Bar */}
      <div className="dest-breadcrumb-bar">
        <div className="dest-container">
          <div className="dest-breadcrumbs-box">
            <nav className="dest-breadcrumbs-trail" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb-link" title="Home">
                <Home size={14} color="#64748B" />
                <span>{t.nav.home}</span>
              </Link>
              <ChevronRight size={13} className="breadcrumb-sep" />
              <Link to="/tourism" className="breadcrumb-link">
                {t.nav.tourism}
              </Link>
              {destination.district_slug && (
                <>
                  <ChevronRight size={13} className="breadcrumb-sep" />
                  <Link to={`/districts/${destination.district_slug}`} className="breadcrumb-link">
                    {destination.district}
                  </Link>
                </>
              )}
              <ChevronRight size={13} className="breadcrumb-sep" />
              <span className="breadcrumb-current-chip">{destination.name}</span>
            </nav>

            <Link to="/tourism" className="breadcrumb-back-link">
              <ArrowLeft size={13} />
              <span>{language === 'as' ? 'পৰ্যটন সূচী' : 'All Destinations'}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="dest-container py-4">
        {/* 2. Quarantine Warning if Not Verified */}
        {!isVerified && (
          <div className="dest-quarantine-banner">
            <div className="banner-icon">
              <AlertTriangle size={22} color="#D97706" />
            </div>
            <div className="banner-text">
              <div className="font-bold text-amber-900">
                {language === 'as'
                  ? 'ভ্ৰমণকাৰীৰ সহায়ক টোকা'
                  : 'Community Travel Note'}
              </div>
              <p className="text-xs text-amber-800 mt-1">
                {language === 'as'
                  ? 'এই স্থানৰ তথ্য ৰাইজৰ পৰা পোৱা আৰু আমাৰ দলে পৰীক্ষা কৰি আছে। ভ্ৰমণৰ পূৰ্বে স্থানীয় খবৰ বা জিলা পৰ্টেল এবাৰ চাই লওক।'
                  : 'This place was suggested by fellow travelers and is currently being verified by our team. Feel free to check local guides or official portals before planning your trip.'}
              </p>
            </div>
          </div>
        )}

        {/* 3. Hero Header Card */}
        <div className="dest-header-card">
          <div className="gamusa-top-woven-strip" style={{ height: '18px' }} />

          <div className="dest-header-content">
            <div className="dest-header-top-row">
              <div className="dest-badges-group">
                <span className="dest-category-pill">
                  {destination.category ? destination.category.replace(/-/g, ' ') : 'Heritage Spot'}
                </span>
                {destination.badge && (
                  <span className="dest-badge-highlight">
                    <Sparkles size={14} />
                    <span>{destination.badge}</span>
                  </span>
                )}
                {headerStatus && (
                  <span className={`dest-op-status-pill ${headerStatus.isOpen ? 'open' : 'pause'}`}>
                    <span className={`dest-op-dot ${headerStatus.isOpen ? 'green' : 'amber'}`} />
                    <span>
                      {language === 'as'
                        ? headerStatus.badgeLabelAs
                        : language === 'hi'
                        ? headerStatus.badgeLabelHi
                        : language === 'brx'
                        ? headerStatus.badgeLabelBrx
                        : headerStatus.badgeLabel}
                    </span>
                  </span>
                )}
                {isVerified ? (
                  <span className="dest-verified-pill">
                    <ShieldCheck size={14} />
                    <span>
                      {language === 'as' ? 'প্ৰমাণিত ঐতিহ্য স্থান' : 'Assam Verified Heritage'}
                    </span>
                  </span>
                ) : (
                  <span className="dest-unverified-pill">
                    <AlertTriangle size={14} />
                    <span>{language === 'as' ? 'পৰীক্ষা চলি আছে' : 'Community Suggestion'}</span>
                  </span>
                )}
              </div>

              {/* Action Buttons Header */}
              <div className="dest-actions-group">
                {/* Share Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  className="dest-share-btn"
                  title="Share this destination"
                >
                  {copied ? (
                    <>
                      <Check size={15} color="#059669" />
                      <span style={{ color: '#047857', fontWeight: 800 }}>
                        {language === 'as' ? 'নকল কৰা হ’ল!' : 'Link Copied!'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Share2 size={15} />
                      <span>{language === 'as' ? 'ভাগ-বাটোৱাৰা' : 'Share'}</span>
                    </>
                  )}
                </button>

                {/* Real Pictures on Google Images Button */}
                <a
                  href={googleImageSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dest-photos-btn"
                  title="Search real photos on Google Images"
                >
                  <Camera size={14} className="text-rose-600" />
                  <span>{language === 'as' ? 'সকলো ছবি চাওক' : 'See All Pictures'}</span>
                  <ExternalLink size={12} />
                </a>

                {/* Direct Google Maps Directions Header Button */}
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dest-directions-btn"
                  title="Navigate with Google Maps"
                >
                  <Navigation size={14} />
                  <span>{language === 'as' ? 'দিকনিৰ্ণয়' : 'Directions'}</span>
                </a>

                {/* Direct Community Homestay / Artisan Booking Button */}
                <button
                  type="button"
                  onClick={() => {
                    setBookingModalType('homestay');
                    setBookingModalOpen(true);
                  }}
                  className="dest-community-inquiry-btn"
                  title="Connect directly with certified community homestays and weavers"
                >
                  <Heart size={14} color="#DC2626" />
                  <span>{language === 'as' ? 'থলুৱা হোমষ্টে’ / শিপিনী' : 'Book Homestay / Artisans'}</span>
                </button>
              </div>
            </div>

            <h1 className="dest-main-title">
              {getLocalizedDestinationName(destination, language)}
            </h1>
            {language === 'as' ? (
              <div className="dest-title-assamese">
                <span>{destination.name}</span>
                <AssamesePronounceButton
                  text={destination.name_as || destination.name}
                  englishTitle={destination.name}
                  size="md"
                />
              </div>
            ) : destination.name_as ? (
              <div className="dest-title-assamese">
                <span>{destination.name_as}</span>
                <AssamesePronounceButton
                  text={destination.name_as}
                  englishTitle={destination.name}
                  size="md"
                />
              </div>
            ) : null}
            {language !== 'hi' && destination.name_hi && destination.name_hi.trim() !== destination.name.trim() && (
              <div className="dest-title-hindi">{destination.name_hi}</div>
            )}
            {getLocalizedDestinationTagline(destination, language) && (
              <p className="dest-hero-tagline text-sm text-gray-600 font-medium italic mt-1 mb-2">
                &ldquo;{getLocalizedDestinationTagline(destination, language)}&rdquo;
              </p>
            )}

            <div className="dest-location-row">
              <div className="dest-location-chip">
                <MapPin size={16} color="#DC2626" />
                <span>
                  {destination.locality ? `${destination.locality}, ` : ''}
                  {destination.district_slug ? (
                    <Link
                      to={`/districts/${destination.district_slug}`}
                      className="dest-district-link"
                    >
                      {destination.district}
                    </Link>
                  ) : (
                    destination.district
                  )}
                  , Assam
                </span>
              </div>

              {hasGps && (
                <button
                  type="button"
                  onClick={scrollToMap}
                  className="dest-gps-badge"
                  title="Click to view exact location on Map"
                >
                  <span className="dest-gps-radar-dot" />
                  <span>📍 {destination.latitude?.toFixed(4)}°N, {destination.longitude?.toFixed(4)}°E</span>
                </button>
              )}
            </div>

            {/* Real-Time Live Weather & Safari Season Operational Alerts */}
            <LiveWeatherSafariAlert destination={destination} language={language} />

            {/* Quick Facts Responsive Grid */}
            <div className="dest-quick-facts-grid">
              <div className="dest-quick-fact-card season">
                <div className="dest-fact-icon-wrap amber">
                  <Calendar size={18} />
                </div>
                <div className="dest-fact-text-wrap">
                  <span className="dest-fact-label">{language === 'as' ? 'ভ্ৰমণৰ উত্তম সময়' : language === 'hi' ? 'भ्रमण का सर्वोत्तम समय' : 'Best Season to Visit'}</span>
                  <span className="dest-fact-value">{getLocalizedDestinationSeason(destination, language)}</span>
                </div>
              </div>

              <div className="dest-quick-fact-card permit">
                <div className="dest-fact-icon-wrap emerald">
                  <Ticket size={18} />
                </div>
                <div className="dest-fact-text-wrap">
                  <span className="dest-fact-label">{language === 'as' ? 'প্ৰৱেশ মাছুল আৰু অনুমতি' : language === 'hi' ? 'प्रवेश शुल्क एवं अनुमति' : 'Entry & Safari Permits'}</span>
                  <span className="dest-fact-value">{getLocalizedDestinationEntry(destination, language)}</span>
                </div>
              </div>

              {(destination.openingHours || destination.openingHours_as) && (
                <div className="dest-quick-fact-card hours">
                  <div className="dest-fact-icon-wrap blue">
                    <Clock size={18} />
                  </div>
                  <div className="dest-fact-text-wrap">
                    <span className="dest-fact-label">{language === 'as' ? 'দৰ্শনৰ সময়সূচী' : language === 'hi' ? 'दर्शन का समय' : 'Visiting Hours'}</span>
                    <span className="dest-fact-value">{getLocalizedDestinationHours(destination, language)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Multi-Picture Interactive Gallery Slider */}
          <div className="dest-gallery-slider-wrap">
            <div
              className="dest-hero-photo-wrap"
              onClick={handleHeroPhotoClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <DestinationImage
                key={currentSlide.url}
                src={currentSlide.url}
                alt={currentSlide.caption || destination.name}
                className="dest-hero-photo animate-fadeIn"
                category={destination.category}
                attribution={currentSlide.attribution}
                showAttribution={false}
              />

              {/* Slider Top Bar: Counter Badge & Fullscreen Expand */}
              <div className="dest-slider-top-bar" onClick={(e) => e.stopPropagation()}>
                <span className="dest-slide-counter-badge">
                  <Camera size={13} />
                  <span>
                    {gallerySlides.length > 1
                      ? `Photo ${activeSlideIndex + 1} of ${gallerySlides.length} Available`
                      : '1 Photo Available'}
                  </span>
                  {gallerySlides.length > 1 && (
                    <span className="dest-slide-swipe-hint"> • Swipe ↔</span>
                  )}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={googleImageSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dest-photo-google-btn"
                    title={`See all photos of ${destination.name} on Google Images`}
                  >
                    <Camera size={13} />
                    <span>See All Pictures ↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="dest-photo-zoom-btn"
                    title="Expand to fullscreen viewer"
                  >
                    <Maximize2 size={13} />
                    <span>{language === 'as' ? 'ডাঙৰকৈ চাওক' : 'Fullscreen'}</span>
                  </button>
                </div>
              </div>

              {/* Prev / Next Slide Arrows */}
              {gallerySlides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="dest-slider-nav-btn prev"
                    title="Previous photograph"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="dest-slider-nav-btn next"
                    title="Next photograph"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Bottom Gradient Overlay: Caption, Dots & Attribution */}
              <div className="dest-slider-bottom-overlay">
                <div className="dest-slider-caption-wrap">
                  <div className="dest-slider-caption-text">{currentSlide.caption}</div>
                  {currentSlide.attribution && (
                    <div className="dest-slider-attr-text">{currentSlide.attribution}</div>
                  )}
                </div>

                {/* Dot Indicators & Photo Count */}
                {gallerySlides.length > 1 && (
                  <div className="dest-slider-dots-and-count">
                    <span className="dest-slider-count-tag">
                      Photo {activeSlideIndex + 1} of {gallerySlides.length}
                    </span>
                    <div
                      className="dest-slider-dots-row"
                      onClick={(e) => e.stopPropagation()}
                      role="tablist"
                      aria-label="Photo slides indicator"
                    >
                      {gallerySlides.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          role="tab"
                          aria-selected={dotIdx === activeSlideIndex}
                          onClick={() => setActiveSlideIndex(dotIdx)}
                          className={`dest-slider-dot ${dotIdx === activeSlideIndex ? 'active' : ''}`}
                          title={`Go to photo ${dotIdx + 1} of ${gallerySlides.length}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Thumbnail Strip Row with Verified Gallery Header */}
            {gallerySlides.length > 1 && (
              <div className="dest-thumbnail-strip-wrap">
                <div className="dest-thumbnail-strip-header">
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-red-600" />
                    <span className="dest-thumbnail-strip-title">
                      {language === 'as'
                        ? `গেলেৰী: ${gallerySlides.length} খন আলোকচিত্ৰ উপলব্ধ`
                        : `Verified Photo Gallery • ${gallerySlides.length} Photos Available`}
                    </span>
                  </div>
                  <span className="dest-thumbnail-strip-hint">
                    {language === 'as' ? 'ছবি চাবলৈ ক্লিক কৰক' : 'Click any photo to view'}
                  </span>
                </div>
                <div className="dest-thumbnail-strip-row" aria-label="Photo thumbnails">
                  {gallerySlides.map((slide, thumbIdx) => (
                    <button
                      key={thumbIdx}
                      type="button"
                      onClick={() => setActiveSlideIndex(thumbIdx)}
                      className={`dest-thumbnail-card ${thumbIdx === activeSlideIndex ? 'active' : ''}`}
                      title={`${slide.caption} (Photo ${thumbIdx + 1} of ${gallerySlides.length})`}
                    >
                      <img
                        src={getAssetUrl(slide.url)}
                        alt={slide.caption}
                        className="dest-thumbnail-img"
                        loading="lazy"
                      />
                      <span className="dest-thumbnail-index-pill">{thumbIdx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Two-Column Layout */}
        <div className="dest-two-col-layout mt-6">
          {/* Left Column: Cultural Narrative, Highlights, Etiquette & Map */}
          <div className="dest-main-column">
            {/* Historical Narrative */}
            <div className="dest-narrative-card">
              <h2 className="dest-section-title">
                {language === 'as' ? 'ঐতিহাসিক আৰু সাংস্কৃতিক তাৎপৰ্য্য' : (language === 'hi' ? 'ऐतिहासिक एवं सांस्कृतिक महत्व' : 'Cultural Heritage & History')}
              </h2>
              <div className="dest-narrative-text space-y-4">
                <p className="leading-relaxed">
                  {getLocalizedDestinationDescription(destination, language)}
                </p>
              </div>

              {/* Highlights */}
              {getLocalizedDestinationHighlights(destination, language).length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Sparkles size={18} color="#DC2626" />
                    <span>{t.tourism.highlightsTitle || (language === 'as' ? 'বিশেষ আকৰ্ষণ' : 'Key Highlights & Sacred Attributes')}</span>
                  </h3>
                  <div className="dest-highlights-grid">
                    {getLocalizedDestinationHighlights(destination, language).map((highlight, idx) => (
                      <div key={idx} className="dest-highlight-item">
                        <CheckCircle2 size={16} className="dest-highlight-icon" />
                        <span className="dest-highlight-text">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsible Tourism & Etiquette Guidelines */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Info size={18} color="#059669" />
                  <span>
                    {language === 'as' ? 'দৰ্শনাৰ্থীৰ বাবে নীতি-নিয়ম আৰু পৰম্পৰা' : 'Visitor Guidelines & Cultural Etiquette'}
                  </span>
                </h3>
                <div className="dest-guidelines-box">
                  <div className="dest-guidelines-item">
                    <span className="dest-guidelines-bullet">•</span>
                    <span>
                      <strong>{language === 'as' ? 'পোছাক আৰু পৱিত্ৰতা:' : 'Sacred Dress Code:'}</strong>{' '}
                      {language === 'as'
                        ? 'সত্ৰ আৰু দেৱালয়ত প্ৰৱেশৰ সময়ত মাৰ্জিত পোছাক পৰিধান কৰক। ভৰিৰ পাদুকা বাহিৰত খুলি প্ৰৱেশ কৰক।'
                        : 'Wear modest attire when visiting holy Sattras, Devalayas, and Thans. Footwear must be removed at the gateway.'}
                    </span>
                  </div>
                  <div className="dest-guidelines-item">
                    <span className="dest-guidelines-bullet">•</span>
                    <span>
                      <strong>{language === 'as' ? 'প্লাষ্টিক মুক্ত অঞ্চল:' : 'Zero-Plastic Sanctuary:'}</strong>{' '}
                      {language === 'as'
                        ? 'নৈৰ পাৰ, পুখুৰী আৰু সংৰক্ষিত বনাঞ্চলত প্লাষ্টিক পেলোৱা নিষিদ্ধ। অসমৰ প্ৰাকৃতিক সৌন্দৰ্য অক্ষুণ্ণ ৰাখক।'
                        : 'Single-use plastics are strictly prohibited across Assam riverbanks, sacred ponds, and wildlife buffers.'}
                    </span>
                  </div>
                  <div className="dest-guidelines-item">
                    <span className="dest-guidelines-bullet">•</span>
                    <span>
                      <strong>{language === 'as' ? 'ফটোগ্ৰাফী নীতি:' : 'Photography Etiquette:'}</strong>{' '}
                      {language === 'as'
                        ? 'মন্দিৰৰ গৰ্ভগৃহ আৰু সত্ৰৰ মণিকূটত কেমেৰা ব্যৱহাৰৰ পূৰ্বে কৰ্তৃপক্ষৰ অনুমতি লওক।'
                        : 'Seek courteous permission before photographing sanctum sanctorum or traditional monastic rituals.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* GPS Location & Map Box (Functional & Interactive) */}
            <div id="dest-interactive-map-section" className="dest-map-card scroll-mt-24">
              <div className="dest-map-header-row">
                <h2 className="dest-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                  <MapPin size={22} color="#DC2626" />
                  <span>
                    {language === 'as' ? 'ভৌগোলিক স্থানাংক আৰু মানচিত্ৰ' : 'Interactive Map & Turn-by-Turn Navigation'}
                  </span>
                </h2>

                {/* Direct Google Maps & OSM Actions */}
                <div className="dest-map-nav-triggers">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dest-nav-btn google"
                  >
                    <Navigation size={13} />
                    <span>Google Maps</span>
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href={osmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dest-nav-btn secondary"
                  >
                    <span>OpenStreetMap</span>
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dest-nav-btn secondary"
                  >
                    <span>Apple Maps</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {hasGps ? (
                <div>
                  <div className="dest-map-coords-badge">
                    <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                      <span className="text-red-600">📍</span>
                      GPS: {destination.latitude?.toFixed(4)}° N, {destination.longitude?.toFixed(4)}° E
                    </span>

                    <button
                      type="button"
                      onClick={handleCopyCoords}
                      className="dest-share-btn"
                      style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                      title="Copy coordinates"
                    >
                      {copiedCoords ? (
                        <>
                          <Check size={13} color="#059669" />
                          <span style={{ color: '#047857', fontWeight: 800 }}>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy GPS</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Interactive OpenStreetMap Frame */}
                  <div className="dest-osm-frame-wrap">
                    <iframe
                      title={`OpenStreetMap for ${destination.name}`}
                      width="100%"
                      height="380"
                      style={{ border: 0 }}
                      loading="lazy"
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${(
                        destination.longitude! - 0.04
                      ).toFixed(4)}%2C${(destination.latitude! - 0.03).toFixed(4)}%2C${(
                        destination.longitude! + 0.04
                      ).toFixed(4)}%2C${(destination.latitude! + 0.03).toFixed(
                        4
                      )}&layer=mapnik&marker=${destination.latitude}%2C${destination.longitude}`}
                    />
                  </div>
                  <div className="mt-2 text-xs text-gray-500 text-right">
                    © OpenStreetMap contributors • Open Database License (ODbL)
                  </div>
                </div>
              ) : (
                <div className="dest-unverified-map-notice">
                  <AlertTriangle size={24} color="#D97706" />
                  <div className="text-sm font-semibold text-gray-900 mt-2">
                    {language === 'as'
                      ? 'স্থানৰ সঠিক ঠিকনা পৰীক্ষা কৰা হৈছে'
                      : 'Location Mapping in Progress'}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 max-w-md">
                    {language === 'as'
                      ? 'আপুনি ওপৰৰ গুগ্ল মেপ্সৰ জৰিয়তে জিলা সদৰৰ পৰা সুচল পথ পৰীক্ষা কৰিব পাৰে।'
                      : 'You can use the Google Maps button above to check driving directions from the district headquarters.'}
                  </p>
                </div>
              )}
            </div>

            {/* Official Tourist Helpline & Emergency Contacts */}
            <div className="dest-emergency-box">
              <div className="dest-emergency-header">
                <PhoneCall size={18} color="#DC2626" />
                <span>
                  {language === 'as' ? 'অসম পৰ্যটন আৰু জৰুৰীকালীন সাহাৰ্য্য' : 'Assam Tourism Helplines & Emergency Assistance'}
                </span>
              </div>
              <div className="dest-helplines-grid">
                <a href="tel:1363" className="dest-helpline-card" title="Call National Tourist Helpline">
                  <div className="dest-helpline-label">Tourist Helpline</div>
                  <div className="dest-helpline-number">1363</div>
                  <div className="dest-helpline-sub">24x7 Toll-Free</div>
                </a>
                <a href="tel:+913612633654" className="dest-helpline-card" title="Call ATDC Directorate">
                  <div className="dest-helpline-label">ATDC Guwahati</div>
                  <div className="dest-helpline-number" style={{ fontSize: '0.825rem' }}>+91 361 2633654</div>
                  <div className="dest-helpline-sub">Directorate Office</div>
                </a>
                <a href="tel:112" className="dest-helpline-card" title="Call Police Assistance">
                  <div className="dest-helpline-label">Police Assistance</div>
                  <div className="dest-helpline-number" style={{ color: '#2563EB' }}>112</div>
                  <div className="dest-helpline-sub">All Assam Districts</div>
                </a>
                <a href="tel:108" className="dest-helpline-card" title="Call Ambulance Emergency">
                  <div className="dest-helpline-label">Medical Emergency</div>
                  <div className="dest-helpline-number" style={{ color: '#059669' }}>108</div>
                  <div className="dest-helpline-sub">24x7 Ambulance</div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visitor Logistics, Transit & Sidebar */}
          <div className="dest-sidebar-column">
            {/* Quick Facts Card */}
            <div className="dest-logistics-card">
              <h3 className="dest-sidebar-title">
                {language === 'as' ? 'দৰ্শনাৰ্থীৰ বাবে তথ্য' : language === 'hi' ? 'दर्शकों के लिए आवश्यक जानकारी' : 'Visitor Quick Facts'}
              </h3>

              <div className="space-y-4 text-sm">
                {/* Best Season */}
                <div className="logistics-item">
                  <div className="logistics-icon">
                    <Calendar size={18} color="#059669" />
                  </div>
                  <div>
                    <div className="logistics-label">{language === 'as' ? 'ভ্ৰমণৰ উত্তম সময়' : language === 'hi' ? 'भ्रमण का सर्वोत्तम समय' : 'Best Season'}</div>
                    <div className="logistics-val">
                      {getLocalizedDestinationSeason(destination, language)}
                    </div>
                  </div>
                </div>

                {/* Entry Fee & Permits */}
                <div className="logistics-item">
                  <div className="logistics-icon">
                    <Ticket size={18} color="#D97706" />
                  </div>
                  <div>
                    <div className="logistics-label">{language === 'as' ? 'প্ৰৱেশ মাছুল আৰু অনুমতি' : language === 'hi' ? 'प्रवेश शुल्क एवं परमिट' : 'Entry Fee & Permits'}</div>
                    <div className="logistics-val">
                      {getLocalizedDestinationEntry(destination, language)}
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="logistics-item">
                  <div className="logistics-icon">
                    <Clock size={18} color="#7C3AED" />
                  </div>
                  <div>
                    <div className="logistics-label">{language === 'as' ? 'সময়সূচী' : language === 'hi' ? 'कार्य समय' : 'Operating Hours'}</div>
                    <div className="logistics-val">{getLocalizedDestinationHours(destination, language)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Reach & Connectivity */}
            <div className="dest-logistics-card mt-5">
              <h3 className="dest-sidebar-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Navigation size={18} color="#DC2626" />
                <span>{language === 'as' ? 'যাতায়াত আৰু পথ নিৰ্দেশনা' : language === 'hi' ? 'कैसे पहुंचे एवं मार्ग दर्शन' : 'How to Reach'}</span>
              </h3>

              <div className="dest-transit-grid">
                {/* Nearest Airport */}
                <div className="dest-transit-card">
                  <div className="dest-transit-icon-wrap airport">
                    <Plane size={18} />
                  </div>
                  <div className="dest-transit-info-wrap">
                    <span className="dest-transit-label">Nearest Airport</span>
                    <span className="dest-transit-main">
                      {transitInfo?.nearestAirport || 'LGBI Airport Guwahati (GAU)'}
                    </span>
                    <span className="dest-transit-sub">
                      Approx {transitInfo?.distanceAirport || '35 - 70 km'}
                    </span>
                  </div>
                </div>

                {/* Nearest Railway Station */}
                <div className="dest-transit-card">
                  <div className="dest-transit-icon-wrap rail">
                    <Train size={18} />
                  </div>
                  <div className="dest-transit-info-wrap">
                    <span className="dest-transit-label">Nearest Railway Station</span>
                    <span className="dest-transit-main">
                      {destination.nearest_transit || transitInfo?.nearestRailway || 'Guwahati / Rangiya Junction'}
                    </span>
                    <span className="dest-transit-sub">
                      {transitInfo?.railwayJunction}
                    </span>
                  </div>
                </div>

                {/* Road Connectivity */}
                <div className="dest-transit-card">
                  <div className="dest-transit-icon-wrap road">
                    <Car size={18} />
                  </div>
                  <div className="dest-transit-info-wrap">
                    <span className="dest-transit-label">Highway & Road Connectivity</span>
                    <span className="dest-transit-main">
                      {transitInfo?.roadHighway || 'NH-27 / State Highways'}
                    </span>
                    <span className="dest-transit-sub">
                      {transitInfo?.busTerminal || 'Regular ASTC & Private bus services'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Where to Stay Card */}
            <div className="dest-logistics-card mt-5">
              <h3 className="dest-sidebar-title flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Building2 size={16} color="#059669" />
                  <span>{language === 'as' ? 'থকা-মেলাৰ ব্যৱস্থা' : 'Where to Stay'}</span>
                </span>
                <span style={{ fontSize: '0.65rem', background: '#ECFDF5', color: '#047857', fontWeight: 800, padding: '0.15rem 0.5rem', borderRadius: '9999px', border: '1px solid #A7F3D0' }}>
                  Zero Commission
                </span>
              </h3>
              <div className="text-xs text-gray-700 space-y-2 leading-relaxed">
                <p>
                  <strong>Prashanti Tourist Lodge:</strong> Official government tourist lodges managed by Assam Tourism Development Corporation (ATDC) in major hubs.
                </p>
                <p>
                  <strong>Community Eco-Homestays:</strong> Certified local homestays offering authentic Assamese hospitality, ethnic meals, and indigenous village tours.
                </p>
              </div>

              {/* Direct Booking Action Buttons */}
              <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    setBookingModalType('homestay');
                    setBookingModalOpen(true);
                  }}
                  style={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    background: '#059669',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0.55rem 0.85rem',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(5, 150, 105, 0.25)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Home size={13} />
                  <span>{language === 'as' ? 'থলুৱা হোমষ্টে’ৰ পোনপটীয়া সংযোগ' : 'Inquire Community Homestay'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBookingModalType('artisan');
                    setBookingModalOpen(true);
                  }}
                  style={{
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    background: '#FEF2F2',
                    color: '#DC2626',
                    border: '1px solid #FECACA',
                    borderRadius: '10px',
                    padding: '0.55rem 0.85rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Sparkles size={13} color="#DC2626" />
                  <span>{language === 'as' ? 'স্থানীয় শিপিনী সমবায়ৰ সংযোগ' : 'Connect with Local Artisans'}</span>
                </button>
              </div>
            </div>

            {/* Official References & Sources */}
            <div className="dest-logistics-card mt-5">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                {language === 'as' ? 'চৰকাৰী আৰু বিশ্বাসযোগ্য উৎস' : 'Official References & Citations'}
              </div>

              {destination.officialWebsite && (
                <a
                  href={sanitizeExternalUrl(destination.officialWebsite)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dest-official-link-btn"
                >
                  <span>{language === 'as' ? 'চৰকাৰী পৰ্টেললৈ যাওক' : 'Visit Official Portal'}</span>
                  <ExternalLink size={14} />
                </a>
              )}

              {destination.sourceUrl && (
                <a
                  href={sanitizeExternalUrl(destination.sourceUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dest-source-ref-link"
                >
                  <ShieldCheck size={14} color="#059669" />
                  <span>{language === 'as' ? 'প্ৰমাণিত তথ্যসূত্ৰ পৰীক্ষা' : 'Verified Source Citation'}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>

            {/* Related Places in the Same District */}
            {relatedPlaces.length > 0 && (
              <div className="dest-related-card mt-5">
                <h3 className="dest-sidebar-title">
                  {language === 'as' ? 'জিলাৰ অন্যান্য পৰ্যটন স্থান' : `More in ${destination.district}`}
                </h3>
                <div className="space-y-3 mt-3">
                  {relatedPlaces.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/destinations/${rel.slug}`}
                      className="dest-related-item-row"
                    >
                      <div className="related-thumb-wrap">
                        <DestinationImage
                          src={rel.imageUrl || rel.image || ''}
                          alt={rel.name}
                          className="related-thumb-img"
                          category={rel.category}
                        />
                      </div>
                      <div className="related-text-wrap">
                        <div className="related-name font-bold text-sm text-gray-900 hover:text-red-600 transition-colors">
                          {rel.name}
                        </div>
                        <div className="related-sub text-xs text-gray-500">
                          {rel.locality || rel.district}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5. Bottom Functional Banner: Explore District & Return */}
        <div className="dest-cta-banner">
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FECACA' }}>
              {language === 'as' ? 'সম্পূৰ্ণ জিলা পৰিক্ৰমা' : 'Explore Comprehensive District Portal'}
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, margin: '0.35rem 0', color: '#FFFFFF' }}>
              {destination.district} ({destination.name_as || destination.district})
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#FEE2E2', margin: '0.35rem 0 0 0', maxWidth: '38rem', lineHeight: 1.5 }}>
              {language === 'as'
                ? `${destination.district} জিলাৰ সকলো পৰ্যটন স্থান, উচ্চ শিক্ষানুষ্ঠান, পলিটেকনিক, আৰু প্ৰশাসনিক তথ্য একেখন পৃষ্ঠাত চাওক।`
                : `Discover all verified attractions, colleges, polytechnics, ITIs, and public directory listings across ${destination.district}.`}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', flexShrink: 0 }}>
            {destination.district_slug && (
              <Link
                to={`/districts/${destination.district_slug}`}
                className="dest-cta-btn-white"
              >
                <span>{language === 'as' ? 'জিলাৰ তথ্য চাওক' : `Explore ${destination.district}`}</span>
                <ChevronRight size={16} />
              </Link>
            )}
            <Link
              to="/tourism"
              className="dest-cta-btn-outline"
            >
              <Compass size={16} />
              <span>{language === 'as' ? 'সকলো স্থান' : 'All Destinations'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Community Homestay & Artisan Inquiry Modal */}
      {destination && (
        <CommunityBookingModal
          destinationName={destination.name}
          destinationNameAs={destination.name_as}
          district={destination.district}
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultType={bookingModalType}
        />
      )}
    </div>
  );
};