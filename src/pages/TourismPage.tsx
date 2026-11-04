import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { District, BeautyDestination, DestinationStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { sanitizeExternalUrl, validateDestinationRecord } from '../utils/security';
import { DestinationImage } from '../components/DestinationImage';
import { AssamesePronounceButton } from '../components/AssamesePronounceButton';
import {
  getLocalizedDestinationDescription,
  getLocalizedDestinationTagline,
  getLocalizedDestinationHighlights,
  getLocalizedDestinationName,
  getLocalizedDestinationSeason,
  getLocalizedDestinationEntry,
  getLocalizedDestinationHours,
  getLocalizedDestinationAccessNotes,
} from '../utils/localizedContent';
import {
  Compass,
  MapPin,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Plane,
  Ticket,
  Trees,
  Landmark,
  Search,
  Sparkles,
  Leaf,
  Coffee,
  X,
  Copy,
  Check,
  CheckCircle2,
  Ship,
  Mountain,
  Utensils,
  Palette,
  Map,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Edit2,
  Archive,
  Download,
  RotateCcw,
  Clock,
  LayoutGrid,
  Navigation,
} from 'lucide-react';

import { useAuth } from '../context/AuthContext';
import { api } from '../api';
import initialTourismData from '../data/tourism-destinations.json';
import { ContextualHelp, GuidanceEmptyState } from '../components/guidance';
import { getTourismDestinations, saveTourismDestinations } from '../utils/tourismData';

const ITEMS_PER_PAGE = 9;

interface TourismPageProps {
  districts: District[];
  initialDistrict?: string;
}

export const TourismPage: React.FC<TourismPageProps> = ({ districts, initialDistrict }) => {
  const { t, language } = useLanguage();
  const { isAdmin } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  // Persistent destinations state (loads canonical destinations + verified local cache)
  const [destinations, setDestinations] = useState<BeautyDestination[]>(() => {
    return getTourismDestinations();
  });

  // Save changes to persistent storage
  useEffect(() => {
    saveTourismDestinations(destinations);
  }, [destinations]);

  // Pull authoritative public records from server-side database whenever API is available
  useEffect(() => {
    let isMounted = true;
    api.getDestinations({ status: isAdmin ? undefined : 'published' })
      .then((serverData) => {
        if (isMounted && serverData && serverData.length > 0) {
          setDestinations(serverData);
        }
      })
      .catch(() => {
        // Retains canonical local dataset fallback
      });
    return () => {
      isMounted = false;
    };
  }, [isAdmin]);

  // View Mode: 'grid' or 'map'
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedMapDestId, setSelectedMapDestId] = useState<string | null>(null);

  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict || 'all');
  const [selectedStatus, setSelectedStatus] = useState<string>('published'); // visitors view 'published' by default
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Admin Mode Toggle
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [editingDest, setEditingDest] = useState<BeautyDestination | null>(null);

  // Active modal destination (supports deep linking via ?dest=slug)
  const [activeModalDest, setActiveModalDest] = useState<BeautyDestination | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Deep linking: check URL search params for ?dest=slug
  useEffect(() => {
    const destSlug = searchParams.get('dest');
    if (destSlug) {
      const found = destinations.find((d) => d.slug === destSlug || d.id === destSlug);
      if (found) {
        setActiveModalDest(found);
      }
    }
  }, [searchParams, destinations]);

  // 10 Independently Managed Categories with localized labels & icons
  const categories = [
    { id: 'all', label: t.tourism.categories.all, icon: <Compass size={15} /> },
    { id: 'tea-tourism', label: t.tourism.categories.teaTourism, icon: <Coffee size={15} /> },
    { id: 'river-experiences', label: t.tourism.categories.riverExperiences, icon: <Ship size={15} /> },
    { id: 'hills-waterfalls', label: t.tourism.categories.hillsWaterfalls, icon: <Mountain size={15} /> },
    { id: 'wildlife-birdwatching', label: t.tourism.categories.wildlifeBirdwatching, icon: <Trees size={15} /> },
    { id: 'heritage-historic', label: t.tourism.categories.heritageHistoric, icon: <Landmark size={15} /> },
    { id: 'handloom-crafts', label: t.tourism.categories.handloomCrafts, icon: <Palette size={15} /> },
    { id: 'festivals-cultural', label: t.tourism.categories.festivalsCultural, icon: <Calendar size={15} /> },
    { id: 'culinary-experiences', label: t.tourism.categories.culinaryExperiences, icon: <Utensils size={15} /> },
    { id: 'botanical-green', label: t.tourism.categories.botanicalGreen, icon: <Leaf size={15} /> },
    { id: 'district-travel-guides', label: t.tourism.categories.districtTravelGuides, icon: <Map size={15} /> },
  ];

  // Reset pagination when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedDistrict, selectedStatus, searchQuery]);

  // Filtered destinations with guaranteed uniqueness (no duplicates)
  const filtered = useMemo(() => {
    const seen = new Set<string>();

    return destinations.filter((d) => {
      // 1. Strict deduplication check
      const uniqueKey = (d.id || d.slug || d.name).toLowerCase().trim();
      if (seen.has(uniqueKey)) return false;
      if (d.slug && seen.has(d.slug.toLowerCase().trim())) return false;
      seen.add(uniqueKey);
      if (d.slug) seen.add(d.slug.toLowerCase().trim());

      // 2. Category filter
      if (selectedCategory !== 'all' && d.category !== selectedCategory) {
        // Also check legacy theme mapping
        if (d.theme !== selectedCategory) return false;
      }

      // District filter
      if (selectedDistrict !== 'all') {
        const qDist = selectedDistrict.toLowerCase();
        const dSlug = (d.district_slug || '').toLowerCase();
        const dName = (d.district || '').toLowerCase();
        if (!dSlug.includes(qDist) && !dName.includes(qDist)) return false;
      }

      // Status filter: Public visitors strictly see approved 'published' records only
      if (!isAdmin) {
        if (d.status !== 'published') return false;
      } else if (selectedStatus !== 'all') {
        if (d.status !== selectedStatus) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          d.name.toLowerCase().includes(q) ||
          (d.name_as && d.name_as.includes(q)) ||
          (d.name_hi && d.name_hi.includes(q)) ||
          (d.fullDescription && d.fullDescription.toLowerCase().includes(q)) ||
          (d.shortDescription && d.shortDescription.toLowerCase().includes(q)) ||
          (d.locality && d.locality.toLowerCase().includes(q)) ||
          (d.district && d.district.toLowerCase().includes(q));
        if (!match) return false;
      }

      return true;
    });
  }, [destinations, selectedCategory, selectedDistrict, selectedStatus, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginatedDestinations = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  // Selected destination in map view
  const selectedMapDest = useMemo(() => {
    if (selectedMapDestId) {
      const match = filtered.find((d) => d.id === selectedMapDestId);
      if (match) return match;
    }
    return filtered.length > 0 ? filtered[0] : null;
  }, [filtered, selectedMapDestId]);

  // Detail Modal Open / Close Handler (Syncs URL)
  const openModal = (dest: BeautyDestination) => {
    setActiveModalDest(dest);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('dest', dest.slug || dest.id);
    setSearchParams(newParams, { replace: true });
  };

  const closeModal = () => {
    setActiveModalDest(null);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('dest');
    setSearchParams(newParams, { replace: true });
  };

  const handleCopyLink = (dest: BeautyDestination) => {
    const url = `${window.location.origin}/tourism?dest=${dest.slug || dest.id}`;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Admin Review Operations (strictly protected by server-side administrator authorization)
  const handleApprove = async (id: string) => {
    if (!isAdmin) return;
    const now = new Date().toISOString();
    try {
      await api.updateAdminDestination(id, {
        status: 'published',
        lastVerifiedAt: now,
      });
    } catch (e) {
      console.warn('Server destination update error:', e);
    }
    setDestinations((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              status: 'published' as DestinationStatus,
              lastVerifiedAt: now,
            }
          : d
      )
    );
  };

  const handleVerify = async (id: string) => {
    if (!isAdmin) return;
    const now = new Date().toISOString();
    try {
      await api.updateAdminDestination(id, {
        lastVerifiedAt: now,
      });
    } catch (e) {
      console.warn('Server destination verification error:', e);
    }
    setDestinations((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              lastVerifiedAt: now,
            }
          : d
      )
    );
  };

  const handleArchive = async (id: string) => {
    if (!isAdmin) return;
    try {
      await api.updateAdminDestination(id, {
        status: 'archived',
      });
    } catch (e) {
      console.warn('Server destination archive error:', e);
    }
    setDestinations((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              status: 'archived' as DestinationStatus,
            }
          : d
      )
    );
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin || !editingDest) return;

    const validation = validateDestinationRecord(editingDest);
    if (!validation.valid) {
      alert(`Validation errors:\n${validation.errors.join('\n')}`);
      return;
    }

    try {
      await api.updateAdminDestination(editingDest.id, editingDest);
    } catch (err) {
      console.warn('Server destination edit error:', err);
    }

    setDestinations((prev) =>
      prev.map((d) => (d.id === editingDest.id ? editingDest : d))
    );
    setEditingDest(null);
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(destinations, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `axom-one-tourism-destinations-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleResetToSeed = () => {
    if (window.confirm('Reset all destinations to the official verified repository? Any unsaved local edits will be replaced.')) {
      const canonical = initialTourismData as BeautyDestination[];
      setDestinations(canonical);
      saveTourismDestinations(canonical);
    }
  };

  // Stats for Admin Toolbar
  const stats = useMemo(() => {
    return {
      total: destinations.length,
      published: destinations.filter((d) => d.status === 'published').length,
      drafts: destinations.filter((d) => d.status === 'draft').length,
      coordsCount: destinations.filter((d) => d.latitude !== null && d.longitude !== null).length,
    };
  }, [destinations]);

  return (
    <div className="tourism-experience-page">
      {/* 1. Living Axom Hero Banner */}
      <div className="tourism-hero-banner">
        <div className="tourism-hero-gamusa-ribbon" />
        <div className="tourism-hero-content">
          <div className="tourism-hero-pill">
            <Sparkles size={14} className="text-amber-300" />
            <span>{t.tourism.heroPill}</span>
          </div>
          <h1 className="tourism-hero-title">
            {t.tourism.heroTitle}
          </h1>
          <div className="tourism-hero-subtitle-as">
            {t.tourism.heroSubtitle}
          </div>
          <p className="tourism-hero-desc">
            {t.tourism.heroDesc}
          </p>

          {/* Quick Highlight Pills */}
          <div className="tourism-hero-chips">
            <span className="tourism-chip">
              {language === 'as' ? '🦏 কাজিৰঙা আৰু মানাহ অভয়াৰণ্য' : '🦏 Kaziranga & Manas Wildlife'}
            </span>
            <span className="tourism-chip">
              {language === 'as' ? '🏛️ চৰাইদেউ ইউনেস্কো মৈদাম (২০২৪)' : '🏛️ Charaideo UNESCO Moidams (2024)'}
            </span>
            <span className="tourism-chip">
              {language === 'as' ? '🏝️ মাজুলী নদীদ্বীপ আৰু সত্ৰ সংস্কৃতি' : '🏝️ Majuli River Island & Sattras'}
            </span>
            <span className="tourism-chip">
              {language === 'as' ? '🍵 ১৮৭৬ চনৰ ঐতিহ্য চাহ বাগিচা' : '🍵 1876 Heritage Tea Country'}
            </span>
            <span className="tourism-chip">
              {language === 'as' ? '🚢 ব্ৰহ্মপুত্ৰৰ সূৰ্যাস্ত ক্ৰুজ' : '🚢 Brahmaputra Sunset Cruises'}
            </span>
          </div>
        </div>
      </div>

      {/* Public Catalog Status Banner or Admin Moderation Toolbar */}
      {isAdmin ? (
        <div className="tourism-admin-bar">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-sm tracking-wide text-amber-300">
              {isAdminMode ? '🛡️ MODERATION & REVIEW DESK' : '🌿 EXPLORE DIRECTORY'}
            </span>
            <span className="text-xs text-gray-300 hidden sm:inline">
              Total: <strong>{stats.total}</strong> | Published: <strong>{stats.published}</strong> | Drafts: <strong>{stats.drafts}</strong> | Verified GPS: <strong>{stats.coordsCount}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isAdminMode && (
              <>
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="tourism-admin-toggle-btn"
                  title="Export JSON dataset"
                >
                  <Download size={13} />
                  <span>Export</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetToSeed}
                  className="tourism-admin-toggle-btn"
                  title="Reset to default seed data"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => {
                setIsAdminMode(!isAdminMode);
                if (!isAdminMode) setSelectedStatus('all');
                else setSelectedStatus('published');
              }}
              className={`tourism-admin-toggle-btn ${isAdminMode ? 'active' : ''}`}
            >
              <ShieldCheck size={14} />
              <span>{isAdminMode ? t.tourism.visitorMode : t.tourism.adminMode}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="tourism-public-bar">
          <div className="flex items-center gap-2">
            <span className="tourism-public-badge">🌿 Certified State Catalog</span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Displaying verified heritage shrines, wildlife reserves, and cultural landscapes across Assam.
            </span>
          </div>
          <Link to="/submit" className="tourism-submit-cta-btn">
            <span>+ Suggest a Heritage Destination</span>
          </Link>
        </div>
      )}

      {/* 2. Interactive Search & District Filter Capsule */}
      <div className="tourism-controls-bar" data-tour="tourism-controls">
        <div className="tourism-search-box">
          <Search size={18} className="text-red-600 shrink-0" />
          <input
            type="text"
            placeholder={t.tourism.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tourism-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="tourism-clear-btn"
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="tourism-district-filter-group">
          <MapPin size={16} className="text-red-600 shrink-0" />
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="tourism-district-select"
          >
            <option value="all">{t.tourism.allDistrictsOption}</option>
            {districts.map((d) => (
              <option key={d.id} value={d.slug}>
                {d.name} ({d.name_as})
              </option>
            ))}
          </select>
        </div>

        <ContextualHelp topicKey="tourism" />

        {/* Status Filter strictly for Authenticated Admins */}
        {isAdmin && (
          <div className="tourism-district-filter-group" style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '0.85rem' }}>
            <ShieldAlert size={15} className="text-amber-600 shrink-0" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="tourism-district-select"
            >
              <option value="published">
                {language === 'as' ? '✅ প্ৰকাশিত স্থানসমূহ' : '✅ Published Destinations'}
              </option>
              <option value="draft">
                {language === 'as' ? '📝 পৰীক্ষাধীন খচৰা আৰু প্ৰস্তাৱ' : '📝 Drafts & Community Proposals'}
              </option>
              {isAdminMode && (
                <option value="all">
                  {language === 'as' ? '🔍 সকলো অৱস্থা (প্ৰশাসক)' : '🔍 All Statuses (Admin)'}
                </option>
              )}
              {isAdminMode && (
                <option value="archived">
                  {language === 'as' ? '📦 সংৰক্ষিত' : '📦 Archived'}
                </option>
              )}
            </select>
          </div>
        )}
      </div>

      {/* 3. 10 Independently Managed Categories Carousel */}
      <div className="tourism-themes-scroll" data-tour="tourism-categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`tourism-theme-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Results Header Meta */}
      <div className="tourism-results-meta flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            {t.tourism.showingCount} <strong>{filtered.length}</strong>{' '}
            {selectedStatus === 'draft'
              ? 'community drafts awaiting verification'
              : language === 'as'
              ? 'খন পৰ্যটন ক্ষেত্ৰ'
              : language === 'hi'
              ? 'गंतव्य'
              : 'verified Assam beauty destinations'}
            {selectedCategory !== 'all' && (
              <span className="ml-1 text-red-700 font-semibold">
                ({categories.find((c) => c.id === selectedCategory)?.label})
              </span>
            )}
          </div>
          {(selectedCategory !== 'all' || selectedDistrict !== 'all' || selectedStatus !== 'published' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDistrict('all');
                setSelectedStatus('published');
                setSearchQuery('');
              }}
              className="tourism-reset-btn"
            >
              {t.tourism.resetFilters}
            </button>
          )}
        </div>

        {/* View Mode Toggle (Grid View vs Interactive Map) */}
        <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <LayoutGrid size={14} />
            <span>{language === 'as' ? 'গ্ৰিড তালিকা' : language === 'hi' ? 'ग्रिड दृश्य' : 'Grid View'}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setViewMode('map');
              if (!selectedMapDestId && filtered.length > 0) {
                setSelectedMapDestId(filtered[0].id);
              }
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'map'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Map size={14} />
            <span>{language === 'as' ? 'মানচিত্ৰ দৰ্শন' : language === 'hi' ? 'मानचित्र दर्शन' : 'Interactive Map'}</span>
          </button>
        </div>
      </div>

      {/* 4. Interactive Map View OR Grid View */}
      {viewMode === 'map' ? (
        <div className="tourism-map-view-card mt-6 bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
            {/* Left Column: Filtered List */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col max-h-[680px]">
              <div className="p-4 bg-gray-50/80 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-gray-900 text-sm">
                    {language === 'as' ? 'মানচিত্ৰত চিহ্নিত স্থানসমূহ' : language === 'hi' ? 'मानचित्र पर दर्शनीय स्थल' : 'Destinations on Map'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {filtered.length} locations matching active filters
                  </div>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                  Click to Pinpoint
                </span>
              </div>

              <div className="overflow-y-auto flex-1 divide-y divide-gray-100 p-2 space-y-1">
                {filtered.map((dest) => {
                  const isSelected = selectedMapDest?.id === dest.id;
                  return (
                    <div
                      key={dest.id}
                      onClick={() => setSelectedMapDestId(dest.id)}
                      className={`p-3 rounded-xl cursor-pointer transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-red-50 border border-red-300 shadow-xs'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                        <DestinationImage
                          src={dest.imageUrl || dest.image || ''}
                          alt={dest.name}
                          className="w-full h-full object-cover"
                          category={dest.category}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm text-gray-900 truncate">
                          {dest.name}
                        </div>
                        {dest.name_as && (
                          <div className="text-[11px] text-amber-900 font-medium truncate">
                            {dest.name_as}
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <MapPin size={11} color="#DC2626" />
                          <span>{dest.locality || dest.district}</span>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-red-600 mt-2" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Map & Selected Destination Overview */}
            <div className="lg:col-span-7 flex flex-col bg-gray-50">
              {selectedMapDest && (
                <div className="p-4 bg-white border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      {selectedMapDest.category.replace(/-/g, ' ')}
                    </span>
                    <h3 className="font-black text-base text-gray-900">
                      {selectedMapDest.name}
                    </h3>
                    <div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} color="#DC2626" />
                        <span>{selectedMapDest.locality}, {selectedMapDest.district}</span>
                      </span>
                      {selectedMapDest.latitude && selectedMapDest.longitude && (
                        <span className="font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {selectedMapDest.latitude.toFixed(4)}°N, {selectedMapDest.longitude.toFixed(4)}°E
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedMapDest.latitude && selectedMapDest.longitude && (
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${selectedMapDest.latitude},${selectedMapDest.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                      >
                        <Navigation size={12} />
                        <span>Directions</span>
                      </a>
                    )}
                    <Link
                      to={`/destinations/${selectedMapDest.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 rounded-lg text-xs font-bold transition-all"
                    >
                      <span>Full Page</span>
                      <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              )}

              {/* Map View Frame */}
              <div className="flex-1 relative min-h-[440px] bg-slate-100">
                {selectedMapDest && selectedMapDest.latitude && selectedMapDest.longitude ? (
                  <iframe
                    title={`OpenStreetMap for ${selectedMapDest.name}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '480px' }}
                    loading="lazy"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${(
                      selectedMapDest.longitude - 0.05
                    ).toFixed(4)}%2C${(selectedMapDest.latitude - 0.04).toFixed(4)}%2C${(
                      selectedMapDest.longitude + 0.05
                    ).toFixed(4)}%2C${(selectedMapDest.latitude + 0.04).toFixed(
                      4
                    )}&layer=mapnik&marker=${selectedMapDest.latitude}%2C${selectedMapDest.longitude}`}
                  />
                ) : (
                  <iframe
                    title="Assam Regional Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '480px' }}
                    loading="lazy"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=89.6%2C24.8%2C96.1%2C28.2&layer=mapnik"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : filtered.length === 0 ? (
        <GuidanceEmptyState
          title={t.tourism.noDestinationsFound}
          description={t.tourism.tryAdjustingFilters}
          onResetFilters={() => {
            setSearchQuery('');
            setSelectedDistrict('all');
            setSelectedCategory('all');
          }}
          resetLabel="Reset All Filters"
          secondaryLink={{ to: '/help', label: 'Need guidance? Visit Help Centre' }}
        />
      ) : (
        <>
          <div className="tourism-cards-grid" data-tour="nav-destinations-info">
            {paginatedDestinations.map((dest) => {
              const hasVerifiedCoords = dest.latitude !== null && dest.longitude !== null;
              const isDraft = dest.status === 'draft';

              return (
                <article key={dest.id} className="tourism-dest-card">
                  {/* Image & Badges */}
                  <div className="tourism-card-image-wrap">
                    <DestinationImage
                      src={dest.imageUrl || dest.image || ''}
                      alt={dest.name}
                      className="tourism-card-image"
                      category={dest.category}
                      attribution={dest.imageAttribution}
                    />

                    <div className="tourism-card-badges">
                      <span className={`tourism-status-badge ${isDraft ? 'tourism-status-draft' : 'tourism-status-published'}`}>
                        {isDraft ? `📝 ${t.tourism.draftBadge}` : `✅ ${t.tourism.verifiedBadge}`}
                      </span>
                      {dest.badge && <span className="tourism-badge-primary">{dest.badge}</span>}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="tourism-card-body">
                    <div className="tourism-card-location">
                      <MapPin size={13} className="text-red-600 shrink-0" />
                      <span>{dest.district}</span>
                      {hasVerifiedCoords && (
                        <span className="text-emerald-700 text-xs font-bold ml-auto flex items-center gap-1">
                          <Check size={11} /> {language === 'as' ? 'প্ৰমাণিত স্থান' : language === 'hi' ? 'जीपीएस सत्यापित' : 'GPS Verified'}
                        </span>
                      )}
                    </div>

                    <h3 className="tourism-card-title">
                      <Link to={`/destinations/${dest.slug}`} className="hover:text-red-700 transition-colors">
                        {getLocalizedDestinationName(dest, language)}
                      </Link>
                    </h3>
                    {language === 'as' ? (
                      <div className="tourism-card-title-as">
                        <span>{dest.name}</span>
                        <AssamesePronounceButton
                          text={dest.name_as || dest.name}
                          englishTitle={dest.name}
                          size="sm"
                          showBadge={false}
                        />
                      </div>
                    ) : dest.name_as ? (
                      <div className="tourism-card-title-as">
                        <span>{dest.name_as}</span>
                        <AssamesePronounceButton
                          text={dest.name_as}
                          englishTitle={dest.name}
                          size="sm"
                          showBadge={false}
                        />
                      </div>
                    ) : null}

                    <p className="tourism-card-tagline">{getLocalizedDestinationTagline(dest, language)}</p>
                    <p className="tourism-card-desc">{getLocalizedDestinationDescription(dest, language)}</p>

                    {/* Highlights List */}
                    {getLocalizedDestinationHighlights(dest, language).length > 0 && (
                      <div className="tourism-card-highlights">
                        {getLocalizedDestinationHighlights(dest, language).slice(0, 3).map((h, i) => (
                          <div key={i} className="tourism-highlight-item">
                            <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Travel Logistics Meta */}
                    <div className="tourism-card-meta-bar">
                      <div className="tourism-meta-row">
                        <Calendar size={13} className="text-amber-600 shrink-0" />
                        <span><strong>{language === 'as' ? 'উপযুক্ত সময়:' : language === 'hi' ? 'सर्वोत्तम समय:' : 'Season:'}</strong> {getLocalizedDestinationSeason(dest, language)}</span>
                      </div>
                      <div className="tourism-meta-row">
                        <Plane size={13} className="text-sky-600 shrink-0" />
                        <span className="truncate"><strong>{language === 'as' ? 'যাতায়াত:' : language === 'hi' ? 'परिवहन:' : 'Transit:'}</strong> {getLocalizedDestinationAccessNotes(dest, language) || dest.accessNotes || dest.nearest_transit}</span>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="tourism-card-footer">
                      <Link
                        to={`/destinations/${dest.slug}`}
                        className="tourism-btn-details"
                      >
                        <span>{t.tourism.viewDetails}</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => openModal(dest)}
                        className="tourism-btn-source"
                        title="Quick View"
                      >
                        <span>Quick View</span>
                        <ChevronRight size={13} />
                      </button>
                    </div>

                    {/* Admin Review Operations Bar */}
                    {isAdminMode && (
                      <div className="tourism-card-admin-actions">
                        {isDraft && (
                          <button
                            type="button"
                            onClick={() => handleApprove(dest.id)}
                            className="tourism-card-admin-btn approve"
                            title="Approve and publish record"
                          >
                            <Check size={12} />
                            <span>Approve</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => handleVerify(dest.id)}
                          className="tourism-card-admin-btn verify"
                          title="Verify and update timestamp"
                        >
                          <ShieldCheck size={12} />
                          <span>Verify</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setEditingDest({ ...dest })}
                          className="tourism-card-admin-btn"
                          title="Edit record details"
                        >
                          <Edit2 size={12} />
                          <span>Edit</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleArchive(dest.id)}
                          className="tourism-card-admin-btn archive"
                          title="Archive destination"
                        >
                          <Archive size={12} />
                          <span>Archive</span>
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* 5. Pagination Bar */}
          {totalPages > 1 && (
            <div className="tourism-pagination-bar">
              <div className="tourism-pagination-info">
                {t.tourism.page} <strong>{currentPage}</strong> {t.tourism.of} <strong>{totalPages}</strong>{' '}
                <span className="text-gray-400">({filtered.length} total)</span>
              </div>

              <div className="tourism-pagination-controls">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="tourism-page-btn"
                  title="Previous Page"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`tourism-page-btn ${currentPage === page ? 'active' : ''}`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="tourism-page-btn"
                  title="Next Page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* 6. Assam Travel Seasons & Circuits Guide */}
      <section className="tourism-seasons-section">
        <div className="tourism-seasons-header">
          <Calendar size={22} className="text-red-700" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {t.tourism.seasonalGuide.title}
            </h2>
            <p className="text-sm text-gray-600">
              {t.tourism.seasonalGuide.subtitle}
            </p>
          </div>
        </div>

        <div className="tourism-seasons-grid">
          <div className="tourism-season-card">
            <div className="tourism-season-tag bg-sky-100 text-sky-800">
              {t.tourism.seasonalGuide.winterTag}
            </div>
            <h4 className="font-bold text-gray-900 mt-2 text-base">
              {t.tourism.seasonalGuide.winterTitle}
            </h4>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {t.tourism.seasonalGuide.winterDesc}
            </p>
          </div>

          <div className="tourism-season-card">
            <div className="tourism-season-tag bg-amber-100 text-amber-800">
              {t.tourism.seasonalGuide.springTag}
            </div>
            <h4 className="font-bold text-gray-900 mt-2 text-base">
              {t.tourism.seasonalGuide.springTitle}
            </h4>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {t.tourism.seasonalGuide.springDesc}
            </p>
          </div>

          <div className="tourism-season-card">
            <div className="tourism-season-tag bg-emerald-100 text-emerald-800">
              {t.tourism.seasonalGuide.monsoonTag}
            </div>
            <h4 className="font-bold text-gray-900 mt-2 text-base">
              {t.tourism.seasonalGuide.monsoonTitle}
            </h4>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {t.tourism.seasonalGuide.monsoonDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Responsible Tourism Pledge Banner */}
      <section className="tourism-pledge-banner">
        <div className="flex items-start gap-3">
          <Leaf size={28} className="text-emerald-600 shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-emerald-950">
              {t.tourism.responsiblePledge.title}
            </h3>
            <div className="text-sm text-emerald-800 mt-2 space-y-1.5 leading-relaxed">
              <div>
                • <strong>{t.tourism.responsiblePledge.rule1Label}:</strong> {t.tourism.responsiblePledge.rule1Desc}
              </div>
              <div>
                • <strong>{t.tourism.responsiblePledge.rule2Label}:</strong> {t.tourism.responsiblePledge.rule2Desc}
              </div>
              <div>
                • <strong>{t.tourism.responsiblePledge.rule3Label}:</strong> {t.tourism.responsiblePledge.rule3Desc}
              </div>
              <div>
                • <strong>{t.tourism.responsiblePledge.rule4Label}:</strong> {t.tourism.responsiblePledge.rule4Desc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Destination Details Modal Drawer */}
      {activeModalDest && (
        <div className="tourism-modal-overlay" onClick={closeModal}>
          <div className="tourism-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="tourism-modal-gamusa-ribbon" />

            <button
              type="button"
              className="tourism-modal-close-btn"
              onClick={closeModal}
              title="Close modal"
            >
              <X size={20} />
            </button>

            <div className="tourism-modal-hero-img-wrap">
              <DestinationImage
                src={activeModalDest.imageUrl || activeModalDest.image || ''}
                alt={activeModalDest.name}
                className="tourism-modal-hero-img"
                category={activeModalDest.category}
                attribution={activeModalDest.imageAttribution}
              />
              <div className="tourism-modal-img-overlay">
                <div className="flex items-center gap-2">
                  <span className={`tourism-status-badge ${activeModalDest.status === 'draft' ? 'tourism-status-draft' : 'tourism-status-published'}`}>
                    {activeModalDest.status === 'draft' ? `📝 ${t.tourism.draftBadge}` : `✅ ${t.tourism.verifiedBadge}`}
                  </span>
                  {activeModalDest.badge && <span className="tourism-badge-primary">{activeModalDest.badge}</span>}
                </div>
                <h2 className="text-2xl font-black text-white mt-2">{activeModalDest.name}</h2>
                {activeModalDest.name_as && (
                  <div className="text-amber-300 font-semibold flex items-center gap-2 mt-0.5">
                    <span>{activeModalDest.name_as}</span>
                    <AssamesePronounceButton
                      text={activeModalDest.name_as}
                      englishTitle={activeModalDest.name}
                      size="sm"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="tourism-modal-inner">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-red-600" />
                  <span>{activeModalDest.locality}, {activeModalDest.district}, Assam</span>
                </div>
                {activeModalDest.lastVerifiedAt && (
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} />
                    <span>Verified: {new Date(activeModalDest.lastVerifiedAt).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              <div className="text-base font-bold text-gray-800 italic mb-4 border-l-4 border-red-700 pl-3">
                &ldquo;{getLocalizedDestinationTagline(activeModalDest, language)}&rdquo;
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-5">
                {getLocalizedDestinationDescription(activeModalDest, language)}
              </p>

              {/* Highlights */}
              {getLocalizedDestinationHighlights(activeModalDest, language).length > 0 && (
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">{t.tourism.highlightsTitle}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {getLocalizedDestinationHighlights(activeModalDest, language).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-800 bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Map Preview (Requirement 5: Only show map when verified coordinates available) */}
              {activeModalDest.latitude !== null && activeModalDest.longitude !== null && !isNaN(activeModalDest.latitude) && !isNaN(activeModalDest.longitude) ? (
                <div className="tourism-map-container">
                  <div className="tourism-map-header">
                    <span>📍 Verified GPS Location ({activeModalDest.latitude.toFixed(4)}°N, {activeModalDest.longitude.toFixed(4)}°E)</span>
                    <a
                      href={`https://www.openstreetmap.org/?mlat=${activeModalDest.latitude}&mlon=${activeModalDest.longitude}#map=14/${activeModalDest.latitude}/${activeModalDest.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tourism-map-nav-link"
                    >
                      <span>Open in OpenStreetMap</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <iframe
                    title={`Map for ${activeModalDest.name}`}
                    className="tourism-map-frame"
                    loading="lazy"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${activeModalDest.longitude - 0.03}%2C${activeModalDest.latitude - 0.02}%2C${activeModalDest.longitude + 0.03}%2C${activeModalDest.latitude + 0.02}&layer=mapnik&marker=${activeModalDest.latitude}%2C${activeModalDest.longitude}`}
                  />
                </div>
              ) : (
                <div className="tourism-coords-pending-box">
                  <ShieldAlert size={18} className="shrink-0" />
                  <span>
                    <strong>Coordinates Awaiting Field Verification:</strong> Formal GPS survey by Assam Tourism / Archaeological Survey in progress. Refer to the official transit link below.
                  </span>
                </div>
              )}

              {/* Logistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-amber-50/50 p-4 rounded-xl border border-amber-200">
                <div>
                  <div className="text-xs text-amber-800 font-bold uppercase flex items-center gap-1">
                    <Calendar size={13} />
                    {t.tourism.bestSeason}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mt-0.5">
                    {getLocalizedDestinationSeason(activeModalDest, language)}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-sky-800 font-bold uppercase flex items-center gap-1">
                    <Plane size={13} />
                    {t.tourism.transitHub}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mt-0.5">
                    {getLocalizedDestinationAccessNotes(activeModalDest, language) || activeModalDest.accessNotes || activeModalDest.nearest_transit}
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-2 pt-2 border-t border-amber-200">
                  <div className="text-xs text-emerald-800 font-bold uppercase flex items-center gap-1">
                    <Ticket size={13} />
                    {t.tourism.permitGuide}
                  </div>
                  <div className="text-sm text-gray-800 mt-0.5">
                    {getLocalizedDestinationEntry(activeModalDest, language)}
                  </div>
                </div>

                {activeModalDest.openingHours && (
                  <div className="col-span-1 sm:col-span-2 pt-2 border-t border-amber-200">
                    <div className="text-xs text-purple-800 font-bold uppercase flex items-center gap-1">
                      <Clock size={13} />
                      {language === 'as' ? 'দৰ্শন আৰু প্ৰৱেশৰ সময়সূচী' : language === 'hi' ? 'दर्शन एवं प्रवेश का समय' : 'Opening Hours & Visiting Windows'}
                    </div>
                    <div className="text-sm text-gray-800 mt-0.5">
                      {getLocalizedDestinationHours(activeModalDest, language)}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer (Requirement 4: Include official source link on every detail page) */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleCopyLink(activeModalDest)}
                  className="tourism-btn-share"
                >
                  {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                  <span>{copied ? t.tourism.linkCopied : t.tourism.shareDestination}</span>
                </button>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/destinations/${activeModalDest.slug}`}
                    className="tourism-btn-source"
                    title="Open full dedicated page"
                  >
                    <span>Full Page View</span>
                    <ExternalLink size={12} />
                  </Link>
                  {activeModalDest.sourceUrl && (
                    <a
                      href={sanitizeExternalUrl(activeModalDest.sourceUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tourism-btn-source"
                    >
                      <ShieldCheck size={14} />
                      <span>Verified Source</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <a
                    href={sanitizeExternalUrl(activeModalDest.officialWebsite || activeModalDest.sourceUrl || activeModalDest.official_source)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tourism-btn-modal-portal"
                  >
                    <ShieldCheck size={16} />
                    <span>{t.tourism.officialPortal}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. Admin Edit Modal */}
      {editingDest && (
        <div className="tourism-modal-overlay" onClick={() => setEditingDest(null)}>
          <div className="tourism-modal-content" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <div className="tourism-modal-gamusa-ribbon" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Edit Destination: {editingDest.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingDest(null)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                  <input
                    type="text"
                    value={editingDest.name}
                    onChange={(e) => setEditingDest({ ...editingDest, name: e.target.value })}
                    className="w-full p-2 border rounded-lg text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category</label>
                    <select
                      value={editingDest.category}
                      onChange={(e) => setEditingDest({ ...editingDest, category: e.target.value })}
                      className="w-full p-2 border rounded-lg text-sm"
                    >
                      {categories.filter((c) => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.id}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Status</label>
                    <select
                      value={editingDest.status}
                      onChange={(e) => setEditingDest({ ...editingDest, status: e.target.value as DestinationStatus })}
                      className="w-full p-2 border rounded-lg text-sm"
                    >
                      <option value="draft">Draft</option>
                      <option value="pending_review">Pending Review</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Latitude (GPS)</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 26.5775"
                      value={editingDest.latitude ?? ''}
                      onChange={(e) =>
                        setEditingDest({
                          ...editingDest,
                          latitude: e.target.value === '' ? null : parseFloat(e.target.value),
                        })
                      }
                      className="w-full p-2 border rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Longitude (GPS)</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 93.1711"
                      value={editingDest.longitude ?? ''}
                      onChange={(e) =>
                        setEditingDest({
                          ...editingDest,
                          longitude: e.target.value === '' ? null : parseFloat(e.target.value),
                        })
                      }
                      className="w-full p-2 border rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Official Website</label>
                  <input
                    type="url"
                    value={editingDest.officialWebsite || ''}
                    onChange={(e) => setEditingDest({ ...editingDest, officialWebsite: e.target.value })}
                    className="w-full p-2 border rounded-lg text-sm"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Source URL</label>
                  <input
                    type="url"
                    value={editingDest.sourceUrl || ''}
                    onChange={(e) => setEditingDest({ ...editingDest, sourceUrl: e.target.value })}
                    className="w-full p-2 border rounded-lg text-sm"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Description</label>
                  <textarea
                    rows={4}
                    value={editingDest.fullDescription}
                    onChange={(e) => setEditingDest({ ...editingDest, fullDescription: e.target.value })}
                    className="w-full p-2 border rounded-lg text-sm"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setEditingDest(null)}
                    className="px-4 py-2 border rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold shadow"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
