import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { useSearchParams } from 'react-router-dom';
import { District, Category, Listing } from '../types';
import { ListingCard } from '../components/ListingCard';
import { api } from '../api';
import { Search, RotateCcw, SlidersHorizontal, MapPin, Layers, Sparkles } from 'lucide-react';

interface ExplorePageProps {
  districts: District[];
  categories: Category[];
  initialDistrict: string;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  districts,
  categories,
  initialDistrict,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter States initialized from URL or props
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [districtFilter, setDistrictFilter] = useState(searchParams.get('district') || initialDistrict || 'all');
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'all');
  const [typeFilter, setTypeFilter] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    loadListings();
  }, [districtFilter, categoryFilter, typeFilter, searchQuery]);

  const loadListings = async () => {
    setIsLoading(true);
    try {
      const data = await api.getListings({
        district: districtFilter,
        category: categoryFilter,
        type: typeFilter,
        q: searchQuery,
      });
      setListings(data.listings);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setDistrictFilter('all');
    setCategoryFilter('all');
    setTypeFilter('all');
    setSearchParams({});
  };

  // Sorting
  const sortedListings = [...listings].sort((a, b) => {
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div>
      <SEO
        title="Explore Assam – Unified District, Tourism &amp; Business Search"
        description="Search across all 35 Assam districts, heritage destinations, verified local enterprises, essential public services, and cultural events."
        canonicalPath="/explore"
        keywords="Explore Assam, Assam search, find tourist spots Assam, Assam district lookup"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Explore', path: '/explore' },
        ]}
      />
      {/* Editorial Header Banner */}
      <div className="page-header-box">
        <div className="page-pill-badge">
          <Sparkles size={13} color="var(--gamusa-red-bright)" />
          <span>অসম এক নিৰ্দেশিকা • Verified Assam Directory</span>
        </div>
        <h1 className="page-main-title">
          Explore Assam Directory
        </h1>
        <p className="page-main-desc">
          Discover local enterprises, verified service providers, handloom cooperatives, eco-tourism trails, and opportunities across all 35 districts of Assam.
        </p>
        <div className="page-divider-strip" />
      </div>

      <div className="directory-layout">
        {/* Left Filter Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-header-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SlidersHorizontal size={16} color="var(--gamusa-red-bright)" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', margin: 0 }}>Filters</h3>
            </div>
            <button
              onClick={handleResetFilters}
              className="filter-reset-btn"
              title="Reset all filters"
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>

          {/* Search Query */}
          <div className="filter-group">
            <label className="filter-group-title">Search Keyword</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="search-input-box"
                placeholder="Search listings, tags, crafts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} style={{ position: 'absolute', right: '12px', top: '12px', color: '#9CA3AF', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* District Filter */}
          <div className="filter-group">
            <label className="filter-group-title">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} color="#DC2626" /> District (জিলা)
              </span>
            </label>
            <select
              className="filter-select"
              value={districtFilter}
              onChange={(e) => setDistrictFilter(e.target.value)}
            >
              <option value="all">All Assam (সকলো জিলা - 35 Districts)</option>
              {districts.map((d) => (
                <option key={d.id} value={d.slug}>
                  {d.name} ({d.name_as})
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <label className="filter-group-title">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Layers size={13} color="#059669" /> Category
              </span>
            </label>
            <select
              className="filter-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Listing Type Filter */}
          <div className="filter-group">
            <label className="filter-group-title">Listing Type</label>
            <select
              className="filter-select"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="business">Businesses & Shops</option>
              <option value="service">Essential Services</option>
              <option value="tourism">Tourism & Travel</option>
              <option value="opportunity">Jobs & Internships</option>
              <option value="community">Community Notices</option>
            </select>
          </div>
        </aside>

        {/* Right Main Content */}
        <main>
          {/* Controls Bar */}
          <div className="directory-controls-bar">
            <div style={{ fontSize: '0.9rem', color: '#4B5563', fontWeight: 500 }}>
              Showing <strong style={{ color: '#111827', fontWeight: 800 }}>{sortedListings.length}</strong> verified public listings
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <label style={{ fontSize: '0.825rem', color: '#6B7280', fontWeight: 700 }}>Sort By:</label>
              <select
                className="filter-select"
                style={{ width: 'auto', padding: '0.4rem 2rem 0.4rem 0.85rem', fontSize: '0.825rem' }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Recently Published</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Listings Grid */}
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              Loading listings across Assam...
            </div>
          ) : sortedListings.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                No listings matched your criteria
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem auto', fontSize: '0.9rem' }}>
                Try adjusting your search terms, clearing specific category filters, or selecting "All Assam".
              </p>
              <button onClick={handleResetFilters} className="btn-outline">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="listings-grid">
              {sortedListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};