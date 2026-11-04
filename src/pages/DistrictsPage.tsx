import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { District } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Search,
  Compass,
  ArrowRight,
  GraduationCap,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import districtsData from '../data/districts.json';
import tourismDestinations from '../data/tourism-destinations.json';
import directoryData from '../data/assam-directory.seed.json';
import { AssamDistrictMap } from '../components/AssamDistrictMap';
import { AssamesePronounceButton } from '../components/AssamesePronounceButton';

interface DistrictCardItem extends District {
  headquarters: string;
  division: string;
  attractionCount: number;
  institutionCount: number;
}

const DIVISION_FILTER_VALUES = [
  'all',
  'Upper Assam',
  'Lower Assam',
  'Lower Assam (BTR)',
  'North Assam',
  'Central Assam',
  'Central Assam / Hills',
  'Barak Valley',
];

export const DistrictsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const dt = t.districts;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pillRowRef = useRef<HTMLDivElement>(null);

  const getDivisionLabel = (val: string): string => {
    switch (val) {
      case 'all':
        return dt.allRegions;
      case 'Upper Assam':
        return dt.upperAssam;
      case 'Lower Assam':
        return dt.lowerAssam;
      case 'Lower Assam (BTR)':
        return dt.bodoland;
      case 'North Assam':
        return dt.northAssam;
      case 'Central Assam':
        return dt.centralAssam;
      case 'Central Assam / Hills':
        return dt.hillsKarbi;
      case 'Barak Valley':
        return dt.barakValley;
      default:
        return val;
    }
  };

  const scrollPills = (direction: 'left' | 'right') => {
    if (pillRowRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      pillRowRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Shortcut listener for '/' key to smoothly focus the search box
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        !(
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          (e.target as HTMLElement)?.isContentEditable
        )
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute counts for each district
  const enrichedDistricts: DistrictCardItem[] = useMemo(() => {
    return (districtsData as any[]).map((d) => {
      const slug = d.slug.toLowerCase();
      const name = d.name.toLowerCase();

      const attractionCount = (tourismDestinations as any[]).filter((dest) => {
        const destSlug = (dest.district_slug || '').toLowerCase();
        const destDistrict = (dest.district || '').toLowerCase();
        return (
          destSlug === slug ||
          destDistrict === name ||
          destDistrict.includes(name) ||
          (destSlug !== '' && destSlug.includes(slug))
        );
      }).length;

      const institutionCount = (directoryData.records as any[]).filter((item) => {
        const itemSlug = (item.district_slug || '').toLowerCase();
        const itemDist = (item.district || '').toLowerCase();
        return (
          item.category === 'education' &&
          (itemSlug === slug || itemDist === name || itemDist.includes(name) || itemDist.includes(slug))
        );
      }).length;

      return {
        ...d,
        attractionCount,
        institutionCount,
      };
    });
  }, []);

  // Filtered districts
  const filteredDistricts = useMemo(() => {
    return enrichedDistricts.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.name_as.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.headquarters.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDivision =
        selectedDivision === 'all' || d.division === selectedDivision;

      return matchesSearch && matchesDivision;
    });
  }, [enrichedDistricts, searchTerm, selectedDivision]);

  return (
    <div className="districts-page-wrapper">
      {/* 1. Hero Showcase Box */}
      <section className="districts-hero-section">
        <div className="districts-container">
          <div className="districts-hero-card">
            {/* Authentic Gamusa Jacquard Top Ribbon */}
            <div className="districts-hero-gamusa-ribbon" />

            <div className="districts-hero-inner">
              {/* Illuminated Badge */}
              <div className="districts-hero-pill">
                <Sparkles size={13} className="text-amber-300" />
                <span>{dt.heroBadge}</span>
              </div>

              {/* Title & Bilingual Subtitle */}
              <h1 className="districts-hero-title">
                {dt.heroTitle}
              </h1>
              <div className="districts-hero-subtitle-as">
                {dt.heroSubtitle}
              </div>
              <p className="districts-hero-desc">
                {dt.heroDesc}
              </p>

              {/* Quick Summary Metrics Grid */}
              <div className="districts-hero-metrics-grid">
                <div className="districts-hero-metric-item">
                  <span className="metric-icon">🏛️</span>
                  <div className="metric-details">
                    <span className="metric-num">35</span>
                    <span className="metric-label">{dt.statDistricts}</span>
                  </div>
                </div>
                <div className="districts-hero-metric-item">
                  <span className="metric-icon">📍</span>
                  <div className="metric-details">
                    <span className="metric-num">89+</span>
                    <span className="metric-label">{dt.statAttractions}</span>
                  </div>
                </div>
                <div className="districts-hero-metric-item">
                  <span className="metric-icon">🌊</span>
                  <div className="metric-details">
                    <span className="metric-num">48</span>
                    <span className="metric-label">{dt.statRivers}</span>
                  </div>
                </div>
                <div className="districts-hero-metric-item">
                  <span className="metric-icon">🗺️</span>
                  <div className="metric-details">
                    <span className="metric-num">5</span>
                    <span className="metric-label">{dt.statDivisions}</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Interactive Search Capsule */}
              <div className="districts-search-capsule">
                <div className="districts-search-icon-wrap">
                  <Search size={18} color="#DC2626" />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={dt.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="districts-search-input"
                  aria-label={dt.searchAriaLabel}
                />

                {searchTerm ? (
                  <div className="districts-search-match-tag">
                    {filteredDistricts.length}{' '}
                    {filteredDistricts.length === 1 ? dt.districtSingular : dt.districtPlural}
                  </div>
                ) : (
                  <kbd className="districts-search-kbd-hint" title={dt.searchKbdHint}>
                    /
                  </kbd>
                )}

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="districts-clear-btn"
                    title={dt.clearSearch}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Instant Match Pills Row when typing */}
              {searchTerm.trim() && filteredDistricts.length > 0 && (
                <div className="districts-instant-matches-panel">
                  <span className="districts-instant-matches-title">
                    <Sparkles size={12} className="text-amber-400" />
                    <span>{dt.quickDirectLinks}</span>
                  </span>
                  <div className="districts-instant-matches-list">
                    {filteredDistricts.slice(0, 6).map((d) => (
                      <Link
                        key={d.id}
                        to={`/districts/${d.slug}`}
                        className="districts-instant-match-pill"
                      >
                        <MapPin size={11} className="text-red-400" />
                        <span className="match-name">{language === 'as' ? d.name_as : d.name}</span>
                        <span className="match-as">({language === 'as' ? d.name : d.name_as})</span>
                        <span className="match-hq">{dt.headquarters}: {d.headquarters}</span>
                      </Link>
                    ))}
                    {filteredDistricts.length > 6 && (
                      <span className="districts-instant-more-tag">
                        +{filteredDistricts.length - 6} {dt.moreBelow}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Quick Division Filter Chips inside Hero Card */}
              <div className="districts-hero-divisions-bar">
                <span className="districts-hero-divisions-label">
                  {dt.quickDivisionFilter}
                </span>
                <div className="districts-hero-divisions-chips" role="tablist">
                  {DIVISION_FILTER_VALUES.map((val) => {
                    const isSelected = selectedDivision === val;
                    const count =
                      val === 'all'
                        ? enrichedDistricts.length
                        : enrichedDistricts.filter((d) => d.division === val).length;
                    return (
                      <button
                        key={val}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        className={`districts-hero-div-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedDivision(val)}
                      >
                        <span>{getDivisionLabel(val)}</span>
                        <span className="hero-chip-badge">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive SVG District Map Showcase */}
      <section className="districts-map-showcase-section py-6">
        <div className="districts-container" data-tour="districts-map">
          <AssamDistrictMap
            districtsWithStats={enrichedDistricts}
            selectedDivision={selectedDivision}
            onSelectDivision={setSelectedDivision}
          />
        </div>
      </section>

      {/* 3. Professional Division Filter Bar & Results Meta Card */}
      <section className="districts-filters-section">
        <div className="districts-container">
          <div className="districts-filter-bar-card">
            {/* Top Row: Division Filter Scroll Track with Smooth Arrow Controls */}
            <div className="districts-pills-scroll-wrapper">
              <button
                type="button"
                onClick={() => scrollPills('left')}
                className="districts-scroll-arrow-btn left"
                aria-label={dt.scrollLeft}
                title={dt.scrollLeft}
              >
                <ChevronLeft size={16} />
              </button>

              <div className="division-pill-row" ref={pillRowRef}>
                {DIVISION_FILTER_VALUES.map((val) => {
                  const isSelected = selectedDivision === val;
                  const count =
                    val === 'all'
                      ? enrichedDistricts.length
                      : enrichedDistricts.filter((d) => d.division === val).length;
                  return (
                    <button
                      key={val}
                      type="button"
                      className={`division-pill ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedDivision(val)}
                    >
                      <span>{getDivisionLabel(val)}</span>
                      <span className="pill-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollPills('right')}
                className="districts-scroll-arrow-btn right"
                aria-label={dt.scrollRight}
                title={dt.scrollRight}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Subtle Divider */}
            <div className="districts-filter-divider" />

            {/* Bottom Row: Results Counter & Active Filter Badge */}
            <div className="districts-results-meta">
              <div className="districts-meta-left">
                <span className="districts-live-pulse" />
                <span className="districts-count-text">
                  {dt.displaying}{' '}
                  <strong>{filteredDistricts.length}</strong>{' '}
                  {dt.showingOfTotal}
                </span>
                {selectedDivision !== 'all' && (
                  <span className="districts-active-division-tag">
                    {getDivisionLabel(selectedDivision)}
                  </span>
                )}
                {searchTerm.trim() && (
                  <span className="districts-active-search-tag">
                    "{searchTerm}"
                  </span>
                )}
              </div>

              {(searchTerm || selectedDivision !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDivision('all');
                  }}
                  className="districts-reset-link"
                  title={dt.resetFilters}
                >
                  <RotateCcw size={13} />
                  <span>{dt.resetFilters}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 35 Districts Responsive Grid */}
      <section className="districts-grid-section">
        <div className="districts-container">
          {filteredDistricts.length === 0 ? (
            <div className="districts-empty-card">
              <Compass size={36} color="#DC2626" />
              <div className="text-lg font-bold text-gray-900 mt-3">
                {dt.noDistrictsFound}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {dt.tryDifferentSearch}
              </p>
            </div>
          ) : (
            <div className="districts-cards-grid">
              {filteredDistricts.map((district) => (
                <Link
                  key={district.id}
                  to={`/districts/${district.slug}`}
                  className="district-portal-card"
                >
                  <div className="gamusa-top-woven-strip" style={{ height: '8px' }} />
                  <div className="district-portal-body">
                    <div className="flex items-center justify-between gap-2">
                      <span className="district-division-tag">{getDivisionLabel(district.division)}</span>
                      <span className="district-hq-tag">
                        <MapPin size={11} color="#DC2626" />
                        <span>{dt.headquarters}: {district.headquarters}</span>
                      </span>
                    </div>

                    <h2 className="district-card-title">
                      {language === 'as' ? district.name_as : district.name}
                    </h2>
                    <div className="district-card-name-as">
                      <span>{language === 'as' ? district.name : district.name_as}</span>
                      <AssamesePronounceButton
                        text={district.name_as}
                        englishTitle={district.name}
                        size="sm"
                        showBadge={false}
                      />
                    </div>

                    <div className="district-meta-stats mt-4">
                      <div className="meta-stat-item" title="Verified Attractions">
                        <Compass size={14} color="#059669" />
                        <span>
                          {district.attractionCount} {dt.attractions}
                        </span>
                      </div>
                      <div className="meta-stat-item" title="Indexed Institutions">
                        <GraduationCap size={14} color="#2563EB" />
                        <span>
                          {district.institutionCount} {dt.institutions}
                        </span>
                      </div>
                    </div>

                    <div className="district-card-cta mt-4">
                      <span>{dt.exploreDistrict}</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
