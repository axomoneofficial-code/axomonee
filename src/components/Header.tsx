import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe,
  Menu,
  X,
  ChevronDown,
  Check,
  Store,
  Wrench,
  Calendar,
  GraduationCap,
  Users,
  Compass,
  Info,
  Sparkles,
  PhoneCall,
  MapPin,
  Layers,
  Search,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGuidance } from '../context/GuidanceContext';
import { GlobalSearchModal } from './GlobalSearchModal';

const HEADER_I18N = {
  en: {
    shopsDesc: 'Local verified shops & stores',
    servicesDesc: 'Essential civic & trade services',
    eventsDesc: 'Festivals & cultural calendar',
    jobsDesc: 'Jobs, internships & schemes',
    exploreDesc: 'Explore all listings with filters',
    communityDesc: 'Public notices & community updates',
    submitTitle: 'Post / Suggest Listing',
    submitDesc: 'Contribute to AXOM ONE',
    aboutDesc: 'Mission & platform details',
    contactTitle: 'Contact & Feedback',
    contactDesc: 'Get in touch with editorial desk',
    quickSearchTitle: 'Quick Search (Ctrl + K)',
    searchPrompt: 'Search Assam...',
    searchMobilePrompt: 'Search Assam (districts, tourism, services)...',
    searchAria: 'Search',
    mainDiscovery: 'Main Discovery',
    submitListing: 'Submit Listing',
    contact: 'Contact',
  },
  as: {
    shopsDesc: 'স্থানীয় দোকান আৰু প্ৰতিষ্ঠান',
    servicesDesc: 'প্ৰয়োজনীয় নাগৰিক সেৱাসমূহ',
    eventsDesc: 'সাংস্কৃতিক আৰু সম্প্ৰদায় অনুষ্ঠান',
    jobsDesc: 'কৰ্মসংস্থান আৰু শিক্ষাবৃত্তি',
    exploreDesc: 'সকলো পঞ্জীয়ন অন্বেষণ কৰক',
    communityDesc: 'ৰাজহুৱা ঘোষণা আৰু চৰ্চা',
    submitTitle: 'ভুক্তি যোগ কৰক',
    submitDesc: 'আপোনাৰ ব্যৱসায় বা অনুষ্ঠান অন্তৰ্ভুক্ত কৰক',
    aboutDesc: 'মঞ্চৰ উদ্দেশ্য আৰু নীতি',
    contactTitle: 'যোগাযোগ',
    contactDesc: 'প্ৰশ্ন বা সহায়ৰ বাবে',
    quickSearchTitle: 'দ্ৰুত সন্ধান (Ctrl + K)',
    searchPrompt: 'অসম সন্ধান...',
    searchMobilePrompt: 'অসম সন্ধান কৰক (জিলা, পৰ্যটন, সেৱা)...',
    searchAria: 'সন্ধান',
    mainDiscovery: 'প্ৰধান অন্বেষণ',
    submitListing: 'ভুক্তি যোগ কৰক',
    contact: 'যোগাযোগ',
  },
  hi: {
    shopsDesc: 'स्थानीय सत्यापित दुकानें एवं प्रतिष्ठान',
    servicesDesc: 'आवश्यक नागरिक एवं व्यापारिक सेवाएं',
    eventsDesc: 'त्योहार एवं सांस्कृतिक कैलेंडर',
    jobsDesc: 'रोजगार, इंटर्नशिप एवं सरकारी योजनाएं',
    exploreDesc: 'फ़िल्टर के साथ सभी सूचियां देखें',
    communityDesc: 'सार्वजनिक सूचनाएं एवं समुदाय चर्चा',
    submitTitle: 'सूची जोड़ें / सुझाव दें',
    submitDesc: 'अपनी दुकान या संस्थान पंजीकृत करें',
    aboutDesc: 'उद्देश्य एवं मंच का विवरण',
    contactTitle: 'संपर्क एवं प्रतिक्रिया',
    contactDesc: 'संपादकीय टीम से संपर्क करें',
    quickSearchTitle: 'त्वरित खोज (Ctrl + K)',
    searchPrompt: 'असम में खोजें...',
    searchMobilePrompt: 'असम खोजें (जिले, पर्यटन, नागरिक सेवाएं)...',
    searchAria: 'खोजें',
    mainDiscovery: 'मुख्य अन्वेषण',
    submitListing: 'सूची जोड़ें',
    contact: 'संपर्क',
  },
  brx: {
    shopsDesc: 'स्थानीय थि खालामजानाय दुकानफोर',
    servicesDesc: 'गोनांथार रायजोआरि सिबिथायफोर',
    eventsDesc: 'हारिमुआरि आरो समाजारि हाबाफारिफोर',
    jobsDesc: 'चाख्रि, सोलोंथाय आरो सोरखारि आंसनफोर',
    exploreDesc: 'गासैबो फारिफोरखौ नागिरना दिहुन',
    communityDesc: 'रायजोआरि फोसावनाय आरो सावरायनाय',
    submitTitle: 'फारि दाजाब / सुबां होनाय',
    submitDesc: 'गावनि दुकान एबा फरायसालि दाजाब',
    aboutDesc: 'थांखि आरो मञ्चनि विवरण',
    contactTitle: 'योगাযোগ आरो फिनजाव',
    contactDesc: 'सामलायगिरिजों फोनांजाब',
    quickSearchTitle: 'थाब नागिर (Ctrl + K)',
    searchPrompt: 'आसामाव नागिर...',
    searchMobilePrompt: 'आसाम नागिर (जिल्ला, दावबायनाय, सिबिथाय)...',
    searchAria: 'नागिर',
    mainDiscovery: 'गाहाय नागिरनाय',
    submitListing: 'फारि दाजाब',
    contact: 'योगাযোগ',
  },
};

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const servicesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const moreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const { language, setLanguage, t, languages } = useLanguage();
  const { restartTour } = useGuidance();
  const ht = HEADER_I18N[language] || HEADER_I18N.en;

  const isActive = (path: string) => location.pathname === path;

  const isServicesActive = [
    '/businesses',
    '/services',
    '/explore',
    '/events',
    '/opportunities',
  ].some((p) => location.pathname.startsWith(p));

  const isMoreActive = ['/community', '/submit', '/about', '/contact'].some((p) =>
    location.pathname.startsWith(p)
  );

  // Smooth hover handlers with grace delay to avoid jerky unhover
  const handleServicesEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 120);
  };

  const handleMoreEnter = () => {
    if (moreTimerRef.current) clearTimeout(moreTimerRef.current);
    setMoreDropdownOpen(true);
  };

  const handleMoreLeave = () => {
    moreTimerRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 120);
  };

  // Close all menus on route change
  useEffect(() => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    if (moreTimerRef.current) clearTimeout(moreTimerRef.current);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMoreDropdownOpen(false);
    setLangDropdownOpen(false);
  }, [location.pathname]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
      if (moreTimerRef.current) clearTimeout(moreTimerRef.current);
    };
  }, []);

  // Track scroll position for header polish
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langRef.current && !langRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(target)) {
        setMoreDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Global Shortcut listener (Ctrl + K / Cmd + K / '/')
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl + K or Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
        return;
      }

      // Check for '/' when not in an active input field
      if (
        e.key === '/' &&
        !searchModalOpen &&
        !(
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          (e.target as HTMLElement)?.isContentEditable
        )
      ) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };

    const handleOpenSearchEvent = () => setSearchModalOpen(true);

    window.addEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener('open-global-search', handleOpenSearchEvent);

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('open-global-search', handleOpenSearchEvent);
    };
  }, [searchModalOpen]);

  const activeLangOption = languages.find((l) => l.code === language) || languages[0];

  return (
    <>
      {/* Top Authentic Gamusa Jacquard Woven Ribbon */}
      <div className="gamusa-top-woven-strip" />

      <header
        className={`site-header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}
        data-tour="site-header"
      >
        <div className="gamusa-header-flank left" title="অসমৰ ফুলাম গামোচা (Phulam Gamusa)" />

        <div className="header-inner">
          {/* Brand Logo - Official Visual Identity */}
          <Link to="/" className="brand-group" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/images/axom-nav-emblem.png"
              alt="AXOM ONE Brand Emblem"
              className="brand-logo-img"
              width={74}
              height={42}
            />
            <div className="brand-names">
              <div className="brand-title-row">
                <span className="brand-axom">AXOM</span>
                <span className="brand-one">ONE</span>
              </div>
              <span className="brand-tagline">Discover Local • Connect Assam.</span>
            </div>
          </Link>

          {/* Center Nav Links - Managed & Responsive */}
          <nav className="nav-center-links" aria-label="Main Navigation">
            {/* 1. Home */}
            <Link to="/" className={`nav-link-item ${isActive('/') ? 'active' : ''}`}>
              {t.nav.home}
            </Link>

            {/* 2. Explore Assam / Tourism */}
            <Link
              to="/tourism"
              data-tour="nav-tourism"
              className={`nav-link-item ${isActive('/tourism') ? 'active' : ''}`}
            >
              {t.nav.tourism}
            </Link>

            {/* 3. 35 Districts */}
            <Link
              to="/districts"
              data-tour="nav-districts"
              className={`nav-link-item ${
                location.pathname.startsWith('/districts') ? 'active' : ''
              }`}
            >
              {t.nav.districts}
            </Link>

            {/* 4. Directory & Knowledge */}
            <Link
              to="/directory"
              data-tour="nav-directory"
              className={`nav-link-item ${isActive('/directory') ? 'active' : ''}`}
            >
              {t.nav.directory}
            </Link>

            {/* 5. Services & Local Marketplace Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              ref={servicesRef}
              data-tour="nav-services"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger ${isServicesActive ? 'active' : ''}`}
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>{t.nav.servicesMenu}</span>
                <ChevronDown
                  size={14}
                  className={`dropdown-chevron ${servicesDropdownOpen ? 'open' : ''}`}
                />
              </button>

              <div
                className={`nav-dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}
                aria-hidden={!servicesDropdownOpen}
              >
                <Link
                  to="/businesses"
                  className={`nav-dropdown-item ${isActive('/businesses') ? 'active' : ''}`}
                >
                  <div className="nav-dropdown-icon-box">
                    <Store size={16} />
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t.nav.businesses}</div>
                    <div className="nav-dropdown-desc">
                      {ht.shopsDesc}
                    </div>
                  </div>
                </Link>

                <Link
                  to="/services"
                  className={`nav-dropdown-item ${isActive('/services') ? 'active' : ''}`}
                >
                  <div className="nav-dropdown-icon-box">
                    <Wrench size={16} />
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t.nav.services}</div>
                    <div className="nav-dropdown-desc">
                      {ht.servicesDesc}
                    </div>
                  </div>
                </Link>

                <Link
                  to="/events"
                  data-tour="nav-events"
                  className={`nav-dropdown-item ${isActive('/events') ? 'active' : ''}`}
                >
                  <div className="nav-dropdown-icon-box">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t.nav.events}</div>
                    <div className="nav-dropdown-desc">
                      {ht.eventsDesc}
                    </div>
                  </div>
                </Link>

                <Link
                  to="/opportunities"
                  className={`nav-dropdown-item ${isActive('/opportunities') ? 'active' : ''}`}
                >
                  <div className="nav-dropdown-icon-box">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t.nav.opportunities}</div>
                    <div className="nav-dropdown-desc">
                      {ht.jobsDesc}
                    </div>
                  </div>
                </Link>

                <div className="nav-dropdown-divider" />

                <Link
                  to="/explore"
                  className={`nav-dropdown-item ${isActive('/explore') ? 'active' : ''}`}
                >
                  <div className="nav-dropdown-icon-box highlight">
                    <Compass size={16} />
                  </div>
                  <div>
                    <div className="nav-dropdown-title font-bold text-red-600">
                      {t.nav.explore}
                    </div>
                    <div className="nav-dropdown-desc">
                      {ht.exploreDesc}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* 6. More Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              ref={moreRef}
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <button
                type="button"
                className={`nav-dropdown-trigger ${isMoreActive ? 'active' : ''}`}
                onClick={() => setMoreDropdownOpen((prev) => !prev)}
                aria-expanded={moreDropdownOpen}
              >
                <span>{t.nav.moreMenu}</span>
                <ChevronDown
                  size={14}
                  className={`dropdown-chevron ${moreDropdownOpen ? 'open' : ''}`}
                />
              </button>

              <div
                className={`nav-dropdown-menu ${moreDropdownOpen ? 'open' : ''}`}
                aria-hidden={!moreDropdownOpen}
              >
                  <Link
                    to="/community"
                    className={`nav-dropdown-item ${isActive('/community') ? 'active' : ''}`}
                  >
                    <div className="nav-dropdown-icon-box">
                      <Users size={16} />
                    </div>
                    <div>
                      <div className="nav-dropdown-title">{t.nav.community}</div>
                      <div className="nav-dropdown-desc">
                        {ht.communityDesc}
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/submit"
                    data-tour="nav-submit"
                    className={`nav-dropdown-item ${isActive('/submit') ? 'active' : ''}`}
                  >
                    <div className="nav-dropdown-icon-box highlight">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div className="nav-dropdown-title font-bold text-red-600">
                        {ht.submitTitle}
                      </div>
                      <div className="nav-dropdown-desc">
                        {ht.submitDesc}
                      </div>
                    </div>
                  </Link>

                  <div className="nav-dropdown-divider" />

                  <Link
                    to="/help"
                    className={`nav-dropdown-item ${isActive('/help') ? 'active' : ''}`}
                  >
                    <div className="nav-dropdown-icon-box">
                      <HelpCircle size={16} />
                    </div>
                    <div>
                      <div className="nav-dropdown-title font-bold text-emerald-800">
                        Help Centre (সহায় কেন্দ্ৰ)
                      </div>
                      <div className="nav-dropdown-desc">
                        Guide, FAQs & navigation tips
                      </div>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setMoreDropdownOpen(false);
                      restartTour();
                    }}
                    className="nav-dropdown-item text-left w-full"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <div className="nav-dropdown-icon-box highlight">
                      <Compass size={16} />
                    </div>
                    <div>
                      <div className="nav-dropdown-title font-bold text-red-600">
                        Restart Website Tour
                      </div>
                      <div className="nav-dropdown-desc">
                        Step-by-step interactive walkthrough
                      </div>
                    </div>
                  </button>

                  <div className="nav-dropdown-divider" />

                  <Link
                    to="/about"
                    className={`nav-dropdown-item ${isActive('/about') ? 'active' : ''}`}
                  >
                    <div className="nav-dropdown-icon-box">
                      <Info size={16} />
                    </div>
                    <div>
                      <div className="nav-dropdown-title">{t.nav.about}</div>
                      <div className="nav-dropdown-desc">
                        {ht.aboutDesc}
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/contact"
                    className={`nav-dropdown-item ${isActive('/contact') ? 'active' : ''}`}
                  >
                    <div className="nav-dropdown-icon-box">
                      <PhoneCall size={16} />
                    </div>
                    <div>
                      <div className="nav-dropdown-title">
                        {ht.contactTitle}
                      </div>
                      <div className="nav-dropdown-desc">
                        {ht.contactDesc}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
          </nav>

          {/* Right Header Controls */}
          <div className="header-right-controls">
            {/* Global Quick Search Button (Desktop) */}
            <button
              type="button"
              className="header-quick-search-btn"
              onClick={() => setSearchModalOpen(true)}
              title={ht.quickSearchTitle}
              aria-label="Open Global Search"
            >
              <Search size={14} className="header-search-icon" />
              <span className="header-search-text">
                {ht.searchPrompt}
              </span>
              <kbd className="header-search-kbd">
                <span>Ctrl</span> K
              </kbd>
            </button>

            {/* Global Quick Search Icon (Mobile) */}
            <button
              type="button"
              className="header-mobile-search-btn"
              onClick={() => setSearchModalOpen(true)}
              title={ht.searchAria}
              aria-label="Open Global Search"
            >
              <Search size={18} />
            </button>

            {/* Help Quick Link */}
            <Link
              to="/help"
              className="header-help-btn"
              title="Help Centre & Guide"
              aria-label="Open Help Centre"
            >
              <HelpCircle size={15} className="header-help-icon" />
              <span>Help</span>
            </Link>

            {/* Interactive Language Selector Pill */}
            <div
              className="lang-dropdown-wrapper"
              ref={langRef}
              data-tour="header-lang-picker"
            >
              <button
                type="button"
                className="lang-pill"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                title={t.nav.selectLanguage}
                aria-expanded={langDropdownOpen}
              >
                <Globe size={15} color="#4B5563" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  {activeLangOption.label}
                </span>
                <ChevronDown
                  size={14}
                  color="#6B7280"
                  className={`dropdown-chevron ${langDropdownOpen ? 'open' : ''}`}
                />
              </button>

              <div
                className={`lang-dropdown-menu ${langDropdownOpen ? 'open' : ''}`}
                aria-hidden={!langDropdownOpen}
              >
                <div className="lang-dropdown-header">{t.nav.selectLanguage}</div>
                {languages.map((opt) => {
                  const isSelected = opt.code === language;
                  return (
                    <button
                      key={opt.code}
                      type="button"
                      className={`lang-option-item ${isSelected ? 'active' : ''}`}
                      onClick={() => {
                        setLanguage(opt.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <div className="lang-option-text">
                        <span className="lang-native-name">{opt.label}</span>
                        <span className="lang-sublabel">{opt.sublabel}</span>
                      </div>
                      {isSelected && <Check size={16} className="text-red-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="gamusa-header-flank right" title="অসমৰ ফুলাম গামোচা (Phulam Gamusa)" />

        {/* Mobile Menu Dropdown - Grouped & Clean */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            {/* Authentic Woven Gamusa Ribbon inside Mobile Menu */}
            <div
              className="gamusa-top-woven-strip"
              style={{
                height: '14px',
                backgroundSize: 'auto 14px',
                marginBottom: '0.75rem',
                borderRadius: '4px',
              }}
            />

            {/* Mobile Language Switcher Row */}
            <div className="mobile-lang-row">
              {languages.map((opt) => (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLanguage(opt.code)}
                  className={`mobile-lang-chip ${language === opt.code ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Quick Search Shortcut inside Mobile Drawer */}
            <button
              type="button"
              className="mobile-drawer-search-bar"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
            >
              <div className="flex items-center gap-2">
                <Search size={16} color="#DC2626" />
                <span className="font-semibold text-gray-700">
{ht.searchMobilePrompt}
                </span>
              </div>
              <kbd className="mobile-search-kbd">Ctrl K</kbd>
            </button>

            {/* Mobile Section 1: Main Pillars */}
            <div className="mobile-menu-section-label">
              {ht.mainDiscovery}
            </div>
            <div className="mobile-links-group">
              <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <Compass size={16} color="#DC2626" />
                <span>{t.nav.home}</span>
              </Link>
              <Link
                to="/tourism"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles size={16} color="#059669" />
                <span>{t.nav.tourism}</span>
              </Link>
              <Link
                to="/districts"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin size={16} color="#DC2626" />
                <span>{t.nav.districts}</span>
              </Link>
              <Link
                to="/directory"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Layers size={16} color="#2563EB" />
                <span>{t.nav.directory}</span>
              </Link>
            </div>

            {/* Mobile Section 2: Services & Marketplace */}
            <div className="mobile-menu-section-label mt-2">
              {t.nav.servicesMenu}
            </div>
            <div className="mobile-links-group">
              <Link
                to="/businesses"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Store size={16} color="#4B5563" />
                <span>{t.nav.businesses}</span>
              </Link>
              <Link
                to="/services"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Wrench size={16} color="#4B5563" />
                <span>{t.nav.services}</span>
              </Link>
              <Link
                to="/events"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar size={16} color="#4B5563" />
                <span>{t.nav.events}</span>
              </Link>
              <Link
                to="/opportunities"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <GraduationCap size={16} color="#4B5563" />
                <span>{t.nav.opportunities}</span>
              </Link>
              <Link
                to="/explore"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Compass size={16} color="#DC2626" />
                <span>{t.nav.explore}</span>
              </Link>
            </div>

            {/* Mobile Section 3: Community & Desk */}
            <div className="mobile-menu-section-label mt-2">
              {t.nav.moreMenu}
            </div>
            <div className="mobile-links-group">
              <Link
                to="/community"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users size={16} color="#4B5563" />
                <span>{t.nav.community}</span>
              </Link>
              <Link
                to="/submit"
                className="mobile-nav-link"
                style={{ color: '#DC2626', fontWeight: 700 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles size={16} color="#DC2626" />
                <span>{ht.submitListing}</span>
              </Link>
              <Link
                to="/about"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info size={16} color="#4B5563" />
                <span>{t.nav.about}</span>
              </Link>
              <Link
                to="/contact"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PhoneCall size={16} color="#4B5563" />
                <span>{ht.contact}</span>
              </Link>
              <Link
                to="/help"
                className="mobile-nav-link"
                style={{ color: '#0D3B2E', fontWeight: 700 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <HelpCircle size={16} color="#0D3B2E" />
                <span>Help Centre (সহায় কেন্দ্ৰ)</span>
              </Link>
              <button
                type="button"
                className="mobile-nav-link text-left w-full"
                style={{ background: 'none', border: 'none', color: '#DC2626', fontWeight: 700, cursor: 'pointer', textAlign: 'left' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  restartTour();
                }}
              >
                <Compass size={16} color="#DC2626" />
                <span>Take Website Tour</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal (Ctrl + K) */}
      {searchModalOpen && (
        <GlobalSearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      )}
    </>
  );
};
