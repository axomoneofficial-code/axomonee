import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  MapPin,
  Compass,
  GraduationCap,
  Building,
  Sparkles,
  ArrowRight,
  CornerDownLeft,
  Command,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import districtsData from '../data/districts.json';
import tourismDestinations from '../data/tourism-destinations.json';
import directoryData from '../data/assam-directory.seed.json';

export interface SearchResultItem {
  id: string;
  title: string;
  titleAs?: string;
  subtitle: string;
  category: 'district' | 'tourism' | 'education' | 'service' | 'quick-link';
  categoryLabel: string;
  url: string;
  badge?: string;
  external?: boolean;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Detect Mac vs Windows/Linux for keyboard shortcut badge
  const isMac = useMemo(() => {
    return typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  }, []);

  // 1. Build Comprehensive Search Index (memoized once)
  const allSearchableItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // A. 35 Administrative Districts
    (districtsData as any[]).forEach((d) => {
      items.push({
        id: `dist-${d.slug}`,
        title: d.name,
        titleAs: d.name_as,
        subtitle: `Headquarters: ${d.headquarters} • Division: ${d.division}`,
        category: 'district',
        categoryLabel: language === 'as' ? 'জিলাসমূহ' : 'Districts of Assam',
        url: `/districts/${d.slug}`,
        badge: d.division,
      });
    });

    // B. Verified Tourism & Heritage Destinations
    (tourismDestinations as any[]).forEach((dest) => {
      if (dest.status === 'published' || dest.slug) {
        items.push({
          id: `tour-${dest.slug || dest.id}`,
          title: dest.name,
          titleAs: dest.name_as,
          subtitle: `${dest.locality || dest.district} • ${dest.category ? dest.category.replace(/-/g, ' ') : 'Heritage Spot'}`,
          category: 'tourism',
          categoryLabel: language === 'as' ? 'পৰ্যটন আৰু ঐতিহ্য' : 'Tourist Attractions',
          url: `/destinations/${dest.slug}`,
          badge: dest.badge || dest.district,
        });
      }
    });

    // C. Colleges, Universities & Higher Education
    ((directoryData as any).records || []).forEach((rec: any) => {
      if (rec.category === 'education') {
        const destSlug = rec.destinationSlug;
        const distSlug = rec.district_slug;
        const targetUrl = destSlug
          ? `/destinations/${destSlug}`
          : distSlug
          ? `/districts/${distSlug}`
          : '/directory';

        items.push({
          id: `edu-${rec.id}`,
          title: rec.name,
          titleAs: rec.name_as,
          subtitle: `${rec.locality || rec.district} • ${rec.subcategory || 'Higher Education'}`,
          category: 'education',
          categoryLabel: language === 'as' ? 'উচ্চ শিক্ষানুষ্ঠান' : 'Colleges & Universities',
          url: targetUrl,
          badge: rec.subcategory || 'Education',
        });
      } else if (rec.category === 'public-services') {
        items.push({
          id: `serv-${rec.id}`,
          title: rec.name,
          titleAs: rec.name_as,
          subtitle: `${rec.locality || rec.district} • Civic Services`,
          category: 'service',
          categoryLabel: language === 'as' ? 'নাগৰিক সেৱা' : 'Citizen & Civic Services',
          url: rec.website || (rec.district_slug ? `/districts/${rec.district_slug}` : '/services'),
          badge: rec.subcategory || 'Citizen Service',
          external: Boolean(rec.website && !rec.district_slug),
        });
      }
    });

    // D. Quick Navigation & Interactive Features
    const quickLinks: SearchResultItem[] = [
      {
        id: 'quick-map',
        title: language === 'as' ? 'অসমৰ মানচিত্ৰ (ইণ্টাৰেক্টিভ)' : 'Interactive SVG District Map of Assam',
        subtitle: language === 'as' ? '৩৫ খন জিলাৰ মানচিত্ৰ আৰু তথ্য চাওক' : 'Hover and click all 35 districts across 7 administrative divisions',
        category: 'quick-link',
        categoryLabel: language === 'as' ? 'দ্ৰুত লিংক' : 'Quick Actions',
        url: '/districts',
        badge: 'Interactive Map',
      },
      {
        id: 'quick-tourism',
        title: language === 'as' ? 'সকলো পৰ্যটন স্থান অন্বেষণ' : 'All Assam Tourism & Heritage Directory',
        subtitle: language === 'as' ? 'ৰাষ্ট্ৰীয় উদ্যান, ঐতিহাসিক দেৱালয় আৰু পাহাৰ' : 'Explore UNESCO World Heritage sites, wildlife, rivers & temples',
        category: 'quick-link',
        categoryLabel: language === 'as' ? 'দ্ৰুত লিংক' : 'Quick Actions',
        url: '/tourism',
        badge: '75+ Places',
      },
      {
        id: 'quick-directory',
        title: language === 'as' ? 'অসম ব্যৱসায় আৰু সেৱা নিৰ্দেশিকা' : 'Assam Local Services & Trade Directory',
        subtitle: language === 'as' ? 'স্থানীয় ব্যৱসায়, দোকান আৰু কাৰিকৰী সেৱা' : 'Local verified businesses, emergency services & civic portals',
        category: 'quick-link',
        categoryLabel: language === 'as' ? 'দ্ৰুত লিংক' : 'Quick Actions',
        url: '/services',
        badge: 'Directory',
      },
      {
        id: 'quick-events',
        title: language === 'as' ? 'সাংস্কৃতিক অনুষ্ঠান আৰু উৎসৱ' : 'Assam Festivals & Cultural Events Calendar',
        subtitle: language === 'as' ? 'বিহু, দৌল উৎসৱ, ৰাস মহোৎসৱ আৰু মেলা' : 'Seasonal Bihu, Doul Utsav, Raas Mahotsav & heritage fairs',
        category: 'quick-link',
        categoryLabel: language === 'as' ? 'দ্ৰুত লিংক' : 'Quick Actions',
        url: '/events',
        badge: 'Cultural Calendar',
      },
      {
        id: 'quick-submit',
        title: language === 'as' ? 'নতুন ভুক্তি যোগ কৰক' : 'Submit / Suggest a Verified Listing',
        subtitle: language === 'as' ? 'আপোনাৰ ব্যৱসায় বা ঐতিহ্য স্থান AXOM ONE ত অন্তৰ্ভুক্ত কৰক' : 'Contribute community destinations, local colleges & businesses',
        category: 'quick-link',
        categoryLabel: language === 'as' ? 'দ্ৰুত লিংক' : 'Quick Actions',
        url: '/submit',
        badge: 'Contribute',
      },
    ];

    return [...items, ...quickLinks];
  }, [language]);

  // 2. Curated Featured Picks for Empty Query
  const featuredPicks: SearchResultItem[] = useMemo(() => {
    const featuredIds = [
      'tour-kaziranga',
      'tour-kamakhya',
      'tour-majuli',
      'tour-charaideo',
      'dist-kamrup-metropolitan',
      'quick-map',
    ];
    return allSearchableItems.filter((item) => featuredIds.includes(item.id));
  }, [allSearchableItems]);

  // 3. Instant Search Filter & Ranking
  const searchResults: SearchResultItem[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return featuredPicks;
    }

    const queryTerms = q.split(/\s+/).filter(Boolean);

    // Scoring function
    const scored = allSearchableItems
      .map((item) => {
        const titleLower = item.title.toLowerCase();
        const titleAsLower = (item.titleAs || '').toLowerCase();
        const subLower = item.subtitle.toLowerCase();
        const badgeLower = (item.badge || '').toLowerCase();

        let matchesAllTerms = true;
        let score = 0;

        for (const term of queryTerms) {
          const matchTitle = titleLower.includes(term);
          const matchTitleAs = titleAsLower.includes(term);
          const matchSub = subLower.includes(term);
          const matchBadge = badgeLower.includes(term);

          if (!matchTitle && !matchTitleAs && !matchSub && !matchBadge) {
            matchesAllTerms = false;
            break;
          }

          // Exact prefix gets highest priority
          if (titleLower.startsWith(term)) score += 50;
          if (titleAsLower.startsWith(term)) score += 50;
          if (matchTitle) score += 30;
          if (matchTitleAs) score += 30;
          if (matchSub) score += 15;
          if (matchBadge) score += 10;
        }

        if (!matchesAllTerms) return null;

        // Bonus for exact word match
        if (titleLower === q || titleAsLower === q) score += 100;

        return { item, score };
      })
      .filter((entry): entry is { item: SearchResultItem; score: number } => entry !== null);

    // Sort by relevance score descending
    scored.sort((a, b) => b.score - a.score);

    // Group-capped selection to ensure balanced results across categories
    const results: SearchResultItem[] = [];
    const counts: Record<string, number> = {
      district: 0,
      tourism: 0,
      education: 0,
      service: 0,
      'quick-link': 0,
    };

    const maxPerGroup: Record<string, number> = {
      district: 4,
      tourism: 5,
      education: 4,
      service: 3,
      'quick-link': 2,
    };

    for (const { item } of scored) {
      if (counts[item.category] < (maxPerGroup[item.category] || 3)) {
        results.push(item);
        counts[item.category]++;
        if (results.length >= 16) break;
      }
    }

    // If still have room, add remaining best matches
    if (results.length < 12) {
      for (const { item } of scored) {
        if (!results.some((r) => r.id === item.id)) {
          results.push(item);
          if (results.length >= 16) break;
        }
      }
    }

    return results;
  }, [query, allSearchableItems, featuredPicks]);

  // Reset selected item index on query or list change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
      // Small timeout to allow mount transition
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Scroll active item into view when navigating via arrow keys
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLElement>(`[data-search-idx="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  // Navigate to selected result
  const handleSelectResult = (item: SearchResultItem) => {
    onClose();
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.url);
    }
  };

  // Keyboard navigation inside modal
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length > 0 && searchResults[selectedIndex]) {
        handleSelectResult(searchResults[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchResultItem['category']) => {
    switch (category) {
      case 'district':
        return <MapPin size={17} color="#DC2626" />;
      case 'tourism':
        return <Compass size={17} color="#2563EB" />;
      case 'education':
        return <GraduationCap size={17} color="#059669" />;
      case 'service':
        return <Building size={17} color="#D97706" />;
      case 'quick-link':
      default:
        return <Sparkles size={17} color="#7C3AED" />;
    }
  };

  const isQueryEmpty = !query.trim();

  return (
    <div
      className="global-search-backdrop animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Global Search Modal"
    >
      <div
        className="global-search-modal-container animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Authentic Woven Gamusa Top Header Ribbon */}
        <div className="gamusa-top-woven-strip" style={{ height: '14px', borderRadius: '16px 16px 0 0' }} />

        {/* Search Input Bar */}
        <div className="global-search-input-row">
          <div className="search-input-leading-icon">
            <Search size={20} color="#DC2626" />
          </div>

          <input
            ref={inputRef}
            type="text"
            className="global-search-field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              language === 'as'
                ? 'জিলা, পৰ্যটন স্থান, শিক্ষানুষ্ঠান বা সেৱা সন্ধান কৰক (যেনে: কাজিৰঙা, বৰপেটা)...'
                : 'Search 35 districts, tourism spots, colleges, or services (e.g. Kaziranga, Barpeta)...'
            }
            aria-label="Search AXOM ONE"
            autoComplete="off"
            spellCheck="false"
          />

          {query && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              title="Clear search query"
            >
              <X size={16} />
            </button>
          )}

          <button
            type="button"
            className="search-modal-close-chip"
            onClick={onClose}
            title="Close search (Esc)"
          >
            <span>Esc</span>
          </button>
        </div>

        {/* Results Container */}
        <div className="global-search-results-list" ref={listRef} role="listbox">
          {isQueryEmpty && (
            <div className="search-group-header">
              <span className="search-group-title">
                {language === 'as' ? 'জনপ্ৰিয় আৰু দ্ৰুত সন্ধান' : 'Popular & Featured Destinations'}
              </span>
              <span className="search-group-hint">
                {language === 'as' ? 'বাছনি কৰিবলৈ ক্লিক কৰক' : 'Press ↑↓ to navigate'}
              </span>
            </div>
          )}

          {!isQueryEmpty && searchResults.length > 0 && (
            <div className="search-group-header">
              <span className="search-group-title">
                {language === 'as'
                  ? `সন্ধান ফলাফল (${searchResults.length})`
                  : `Search Results (${searchResults.length})`}
              </span>
              <span className="search-group-hint">
                {language === 'as' ? 'প্ৰৱেশ কৰিবলৈ ↵ টিপক' : 'Press ↵ to open'}
              </span>
            </div>
          )}

          {searchResults.length === 0 ? (
            <div className="global-search-empty-state">
              <div className="empty-search-icon-wrap">
                <Search size={32} color="#94A3B8" />
              </div>
              <h3 className="empty-search-title">
                {language === 'as' ? 'কোনো ফলাফল পোৱা নগ’ল' : 'No matches found'}
              </h3>
              <p className="empty-search-desc">
                {language === 'as'
                  ? `"${query}" ৰ সৈতে মিল থকা কোনো জিলা, পৰ্যটন স্থান বা অনুষ্ঠান পোৱা নগ’ল। বানান পৰীক্ষা কৰক বা আন শব্দেৰে চেষ্টা কৰক।`
                  : `No districts, tourist destinations, or institutions matched "${query}". Check your spelling or try searching by district name.`}
              </p>
              <div className="empty-search-suggestions">
                <span>{language === 'as' ? 'প্ৰচেষ্টা কৰক:' : 'Try searching:'}</span>
                <button
                  type="button"
                  className="empty-suggestion-tag"
                  onClick={() => setQuery('Kaziranga')}
                >
                  Kaziranga
                </button>
                <button
                  type="button"
                  className="empty-suggestion-tag"
                  onClick={() => setQuery('Kamakhya')}
                >
                  Kamakhya
                </button>
                <button
                  type="button"
                  className="empty-suggestion-tag"
                  onClick={() => setQuery('Majuli')}
                >
                  Majuli
                </button>
                <button
                  type="button"
                  className="empty-suggestion-tag"
                  onClick={() => setQuery('Guwahati')}
                >
                  Guwahati
                </button>
              </div>
            </div>
          ) : (
            searchResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-search-idx={index}
                  role="option"
                  aria-selected={isSelected}
                  className={`search-result-row ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectResult(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className={`search-item-icon-box ${item.category}`}>
                    {getCategoryIcon(item.category)}
                  </div>

                  <div className="search-item-info">
                    <div className="search-item-top">
                      <span className="search-item-title">{item.title}</span>
                      {item.titleAs && (
                        <span className="search-item-title-as">{item.titleAs}</span>
                      )}
                      {item.badge && (
                        <span className={`search-item-badge ${item.category}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="search-item-subtitle">{item.subtitle}</div>
                  </div>

                  <div className="search-item-action">
                    {item.external ? (
                      <ExternalLink size={14} className="search-action-icon" />
                    ) : isSelected ? (
                      <CornerDownLeft size={14} className="search-action-icon active" />
                    ) : (
                      <ArrowRight size={14} className="search-action-icon" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard Footer Bar */}
        <div className="global-search-footer">
          <div className="search-footer-shortcuts">
            <span className="footer-shortcut-item">
              <kbd>↑</kbd>
              <kbd>↓</kbd>
              <span>{language === 'as' ? 'স্থানান্তৰ' : 'Navigate'}</span>
            </span>
            <span className="footer-shortcut-item">
              <kbd>↵</kbd>
              <span>{language === 'as' ? 'বাছনি' : 'Select'}</span>
            </span>
            <span className="footer-shortcut-item">
              <kbd>esc</kbd>
              <span>{language === 'as' ? 'বন্ধ কৰক' : 'Close'}</span>
            </span>
          </div>

          <div className="search-footer-brand">
            <span>AXOM ONE Global Search</span>
            <span className="footer-brand-pill">
              {isMac ? <Command size={10} /> : <span style={{ fontSize: '10px' }}>Ctrl</span>}
              <span>K</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
