import React, { useState, useMemo, useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { DirectoryItem, DirectoryCategory, DirectoryDistrict, DirectoryStatus } from './types';
import { DirectoryCard } from './DirectoryCard';
import { DirectorySearch } from './DirectorySearch';
import { DirectoryFilters } from './DirectoryFilters';
import { DirectoryDetails } from './DirectoryDetails';
import { DirectoryAdmin } from './DirectoryAdmin';
import {
  GraduationCap,
  Landmark,
  Church,
  Trees,
  Palette,
  ShieldCheck,
  Building,
  Settings,
  Sparkles,
} from 'lucide-react';

// Import initial seed and metadata
import initialSeedData from '../../data/assam-directory.seed.json';
import initialCategories from '../../data/categories.json';
import initialDistricts from '../../data/districts.json';
import { ContextualHelp, GuidanceEmptyState } from '../../components/guidance';

import { loadDirectoryRecords, saveDirectoryRecords } from './directoryStorage';
import { fetchPublishedDirectoryItems } from '../../services/directoryService';


export const DirectoryHome: React.FC<{ forcedAdmin?: boolean }> = ({ forcedAdmin }) => {
  const { language } = useLanguage();
  const { isAdmin: authAdmin } = useAuth();
  const isAdmin = Boolean(forcedAdmin || authAdmin);

  // Load persistent records from localStorage or initial seed, auto-merging newly added seed records & images
  const [items, setItems] = useState<DirectoryItem[]>(() => {
    const seedRecords = (initialSeedData.records as DirectoryItem[]) || [];
    return loadDirectoryRecords(seedRecords);
    /*
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const seedMap = new Map(seedRecords.map((r) => [r.id, r]));
          const updatedParsed = parsed.map((item: DirectoryItem) => {
            const seed = seedMap.get(item.id);
            if (seed) {
              return {
                ...item,
                status: seed.status,
                name: seed.name,
                name_as: seed.name_as || item.name_as,
                category: seed.category,
                subcategory: seed.subcategory,
                district: seed.district,
                district_slug: seed.district_slug || item.district_slug,
                locality: seed.locality,
                description: seed.description,
                description_as: seed.description_as || item.description_as,
                description_hi: seed.description_hi || item.description_hi,
                imageUrl: seed.imageUrl || item.imageUrl,
                website: seed.website || item.website,
                sourceUrl: seed.sourceUrl || item.sourceUrl,
                verifiedFrom: seed.verifiedFrom || item.verifiedFrom,
              };
            }
            return item;
          });
          const existingIds = new Set(updatedParsed.map((item: DirectoryItem) => item.id));
          const newFromSeed = seedRecords.filter((rec) => !existingIds.has(rec.id));
          return [...updatedParsed, ...newFromSeed];
        }
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    // Fallback to starter seed
    */
  });

  const categories = initialCategories as DirectoryCategory[];
  const districts = initialDistricts as DirectoryDistrict[];

  // Save to localStorage when updated
  useEffect(() => {
    try {
      saveDirectoryRecords(items);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [items]);

  // Synchronize live published records from Supabase (graceful fallback to seed records)
  useEffect(() => {
    let isMounted = true;
    fetchPublishedDirectoryItems()
      .then((liveItems) => {
        if (isMounted && liveItems && liveItems.length > 0) {
          setItems(liveItems);
        }
      })
      .catch((err) => {
        if (import.meta.env.DEV) {
          console.warn('[DirectoryHome] Using offline seed records:', err);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // View state: 'directory' | 'admin'
  const [activeView, setActiveView] = useState<'directory' | 'admin'>('directory');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'category' | 'district' | 'verified'>('name-asc');

  // Selected item for details modal
  const [selectedItem, setSelectedItem] = useState<DirectoryItem | null>(null);

  // Subcategories derived from current category or all
  const availableSubcategories = useMemo(() => {
    const relevantItems = selectedCategory === 'all'
      ? items
      : items.filter((i) => i.category === selectedCategory);
    const subcatSet = new Set<string>();
    relevantItems.forEach((i) => {
      if (i.subcategory) subcatSet.add(i.subcategory);
    });
    return Array.from(subcatSet).sort();
  }, [items, selectedCategory]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((i) => {
      counts[i.category] = (counts[i.category] || 0) + 1;
    });
    return counts;
  }, [items]);

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Security: Public visitors strictly see approved 'published' directory records only
      if (!isAdmin) {
        if (item.status !== 'published') return false;
      } else if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }

      // Verified source toggle
      if (verifiedOnly && !item.sourceUrl) return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Subcategory filter
      if (selectedSubcategory !== 'all' && item.subcategory !== selectedSubcategory) return false;

      // District filter
      if (selectedDistrict !== 'all' && !item.district.toLowerCase().includes(selectedDistrict.toLowerCase())) {
        return false;
      }

      // Keyword Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          (item.locality && item.locality.toLowerCase().includes(q)) ||
          item.subcategory.toLowerCase().includes(q) ||
          item.district.toLowerCase().includes(q);
        if (!match) return false;
      }

      return true;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'district':
          return a.district.localeCompare(b.district);
        case 'verified':
          if (a.lastVerifiedAt && !b.lastVerifiedAt) return -1;
          if (!a.lastVerifiedAt && b.lastVerifiedAt) return 1;
          return (b.lastVerifiedAt || '').localeCompare(a.lastVerifiedAt || '');
        default:
          return 0;
      }
    });
  }, [items, selectedStatus, verifiedOnly, selectedCategory, selectedSubcategory, selectedDistrict, searchQuery, sortBy]);

  // Admin Actions (strictly protected by administrator authorization)
  const handleStatusChange = (id: string, status: DirectoryStatus) => {
    if (!isAdmin) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status, updatedAt: new Date().toISOString() } : i))
    );
    if (selectedItem && selectedItem.id === id) {
      setSelectedItem((prev) => (prev ? { ...prev, status } : null));
    }
  };

  const handleUpdateItem = (updated: DirectoryItem) => {
    if (!isAdmin) return;
    setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
    if (selectedItem && selectedItem.id === updated.id) {
      setSelectedItem(updated);
    }
  };

  const handleAddItem = (newRecord: Omit<DirectoryItem, 'id'>) => {
    if (!isAdmin) return;
    const newItem: DirectoryItem = {
      ...newRecord,
      id: `dir-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const handleDeleteItem = (id: string) => {
    if (!isAdmin) return;
    if (confirm('Are you sure you want to delete this directory record?')) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      if (selectedItem && selectedItem.id === id) setSelectedItem(null);
    }
  };

  const handleVerifyItem = (id: string) => {
    if (!isAdmin) return;
    const today = new Date().toISOString().slice(0, 10);
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, lastVerifiedAt: today, updatedAt: new Date().toISOString() } : i))
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('all');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedStatus('all');
    setVerifiedOnly(false);
    setSortBy('name-asc');
  };

  return (
    <div className="directory-page-container">
      <SEO
        title="Assam Official Discovery Directory – Universities, Heritage &amp; Public Services"
        description="Verified public directory of universities, engineering &amp; medical colleges, heritage monuments, archaeological sites, temples, and citizen helplines across Assam."
        canonicalPath="/directory"
        keywords="Assam directory, universities in Assam, Assam colleges, Assam heritage sites, Assam temples, public services Assam"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Assam Directory', path: '/directory' },
        ]}
      />
      {/* View Switcher Bar */}
      <div className="directory-view-switch-bar">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`directory-tab-pill ${activeView === 'directory' ? 'active' : ''}`}
            onClick={() => setActiveView('directory')}
          >
            <Building size={14} />
            <span>Public Directory Portal</span>
          </button>
          {isAdmin && (
            <button
              type="button"
              className={`directory-tab-pill ${activeView === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveView('admin')}
            >
              <Settings size={14} />
              <span>Editorial & Verification Desk ({items.length})</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isAdmin ? (
            <Link to="/submit" className="directory-suggest-cta">
              <span>+ Submit an Institution or Service</span>
            </Link>
          ) : (
            <div className="text-xs text-amber-600 font-bold hidden sm:block">
              🛡️ Administrator Mode Active
            </div>
          )}
        </div>
      </div>

      {isAdmin && activeView === 'admin' ? (
        <DirectoryAdmin
          items={items}
          categories={categories}
          districts={districts}
          onStatusChange={handleStatusChange}
          onUpdateItem={handleUpdateItem}
          onAddItem={handleAddItem}
          onDeleteItem={handleDeleteItem}
          onVerifyItem={handleVerifyItem}
          onSelectView={(item) => setSelectedItem(item)}
        />
      ) : (
        <>
          {/* Hero Banner with Living Axom Theme */}
          <div className="directory-hero-banner">
            <div className="directory-hero-gamusa-ribbon" />
            <div className="directory-hero-content">
              <div className="directory-hero-badge">
                <Sparkles size={14} className="text-amber-300" />
                <span>
                  {language === 'as'
                    ? 'অসম চৰকাৰী জ্ঞানকোষ আৰু প্ৰতিষ্ঠান পঞ্জীকা'
                    : language === 'hi'
                    ? 'असम आधिकारिक ज्ञानकोष एवं संस्थान निर्देशिका'
                    : 'Assam Official Knowledge & Institution Directory'}
                </span>
              </div>
              <h1 className="directory-hero-title">
                {language === 'as'
                  ? 'প্ৰমাণিত অসম পঞ্জীকা'
                  : language === 'hi'
                  ? 'सत्यापित असम निर्देशिका'
                  : 'Explore Verified Assam'}
              </h1>
              <div className={`directory-hero-subtitle-as ${language === 'as' ? 'lang-as' : 'lang-en'}`}>
                {language === 'as'
                  ? 'অসমৰ বিশ্ববিদ্যালয়, ঐতিহাসিক স্মৃতিসৌধ, তীৰ্থস্থান আৰু ৰাষ্ট্ৰীয় উদ্যান'
                  : language === 'hi'
                  ? 'असम के विश्वविद्यालय, ऐतिहासिक स्मारक, तीर्थस्थल एवं राष्ट्रीय उद्यान'
                  : 'Universities, Historic Monuments, Sacred Places & National Parks of Assam'}
              </div>
              <p className="directory-hero-desc">
                {language === 'as'
                  ? 'অসমৰ উচ্চ শিক্ষা কেন্দ্ৰ, ইউনেস্কো বিশ্ব ঐতিহ্য ক্ষেত্ৰ, প্ৰাচীন সত্ৰ আৰু মন্দিৰ, অভয়াৰণ্য আৰু বিধিসন্মত চৰকাৰী পঞ্জীয়নসমূহ চৰকাৰী সত্যাপন সংযোগৰ সৈতে অন্বেষণ কৰক।'
                  : 'Discover higher education hubs, UNESCO heritage sites, ancient sattras and temples, wildlife reserves, and statutory government registries with official verification links.'}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ContextualHelp topicKey="directory" />
              </div>

              {/* Central Search Capsule */}
              <div data-tour="directory-search">
              <DirectorySearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedDistrict={selectedDistrict}
                onDistrictChange={setSelectedDistrict}
                districts={districts}
                totalCount={items.length}
                filteredCount={filteredItems.length}
                onClear={handleResetFilters}
              />
              </div>
            </div>
          </div>

          {/* Quick Category Shortcut Cards */}
          <h2 className="sr-only">Browse by Verified Category</h2>
          <div className="directory-category-strip">
            {categories.map((c) => {
              const count = categoryCounts[c.id] || 0;
              const isSelected = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  className={`directory-cat-chip-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedCategory(isSelected ? 'all' : c.id);
                    setSelectedSubcategory('all');
                  }}
                >
                  <div className="directory-cat-chip-icon">
                    {c.id === 'education' && <GraduationCap size={18} />}
                    {c.id === 'heritage' && <Landmark size={18} />}
                    {c.id === 'temples-spiritual' && <Church size={18} />}
                    {c.id === 'nature-wildlife' && <Trees size={18} />}
                    {c.id === 'museums-culture' && <Palette size={18} />}
                    {c.id === 'public-services' && <ShieldCheck size={18} />}
                  </div>
                  <div className="directory-cat-chip-body">
                    <span className="directory-cat-chip-title">
                      {language === 'as' && c.name_as ? c.name_as : c.label}
                    </span>
                    <span className="directory-cat-chip-count">
                      {count} {language === 'as' ? 'টা তথ্য' : 'records'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main 2-Column Explorer Layout */}
          <div className="directory-explorer-layout">
            {/* Left Filter Sidebar */}
            <div className="directory-explorer-sidebar">
              <DirectoryFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                subcategories={availableSubcategories}
                selectedSubcategory={selectedSubcategory}
                onSubcategoryChange={setSelectedSubcategory}
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
                verifiedOnly={verifiedOnly}
                onVerifiedOnlyChange={setVerifiedOnly}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                categoryCounts={categoryCounts}
                totalCount={items.length}
                onResetAll={handleResetFilters}
                isAdmin={isAdmin}
              />
            </div>

            {/* Right Results Grid */}
            <div className="directory-explorer-main">
              {filteredItems.length === 0 ? (
                <GuidanceEmptyState
                  title="No Directory Records Found"
                  description="No institutions or heritage sites match your active search and category filters. Try clearing filters or switching district."
                  onResetFilters={handleResetFilters}
                  resetLabel="Reset Directory Filters"
                  secondaryLink={{ to: '/help', label: 'Need guidance? Open Help Centre' }}
                />
              ) : (
                <div className="directory-cards-grid">
                  {filteredItems.map((item) => (
                    <DirectoryCard
                      key={item.id}
                      item={item}
                      onSelect={(it) => setSelectedItem(it)}
                      showAdminControls={false}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Details View Modal */}
      {selectedItem && (
        <DirectoryDetails
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onStatusChange={handleStatusChange}
          showAdminControls={activeView === 'admin'}
        />
      )}
    </div>
  );
};