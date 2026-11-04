import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DirectoryCategory } from './types';
import {
  Filter,
  RotateCcw,
  GraduationCap,
  Landmark,
  Church,
  Trees,
  Palette,
  ShieldCheck,
  CheckCircle2,
  SortAsc,
} from 'lucide-react';

interface DirectoryFiltersProps {
  categories: DirectoryCategory[];
  selectedCategory: string;
  onCategoryChange: (catId: string) => void;
  subcategories: string[];
  selectedSubcategory: string;
  onSubcategoryChange: (subcat: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  verifiedOnly: boolean;
  onVerifiedOnlyChange: (verified: boolean) => void;
  sortBy: 'name-asc' | 'name-desc' | 'category' | 'district' | 'verified';
  onSortByChange: (sort: 'name-asc' | 'name-desc' | 'category' | 'district' | 'verified') => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  onResetAll: () => void;
  isAdmin?: boolean;
}

export const DirectoryFilters: React.FC<DirectoryFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  subcategories,
  selectedSubcategory,
  onSubcategoryChange,
  selectedStatus,
  onStatusChange,
  verifiedOnly,
  onVerifiedOnlyChange,
  sortBy,
  onSortByChange,
  categoryCounts,
  totalCount,
  onResetAll,
  isAdmin = false,
}) => {
  const { language } = useLanguage();
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'education':
        return <GraduationCap size={16} />;
      case 'heritage':
        return <Landmark size={16} />;
      case 'temples-spiritual':
        return <Church size={16} />;
      case 'nature-wildlife':
        return <Trees size={16} />;
      case 'museums-culture':
        return <Palette size={16} />;
      case 'public-services':
        return <ShieldCheck size={16} />;
      default:
        return <Filter size={16} />;
    }
  };

  return (
    <aside className="directory-filters-panel">
      {/* Header */}
      <div className="directory-filters-header">
        <div className="directory-filters-title">
          <Filter size={18} className="text-red-700" />
          <span>Filters & Categories</span>
        </div>
        <button
          type="button"
          onClick={onResetAll}
          className="directory-filters-reset-btn"
          title="Reset all filters"
        >
          <RotateCcw size={13} />
          <span>Reset</span>
        </button>
      </div>

      {/* 1. Sort Order */}
      <div className="directory-filter-section">
        <label className="directory-filter-label">
          <SortAsc size={14} className="text-gray-500" />
          <span>Sort Listings</span>
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as any)}
          className="directory-filter-select"
        >
          <option value="name-asc">Alphabetical (A to Z)</option>
          <option value="name-desc">Alphabetical (Z to A)</option>
          <option value="category">Category</option>
          <option value="district">District</option>
          <option value="verified">Verified Status</option>
        </select>
      </div>

      {/* 2. Official Verification Status Toggle */}
      <div className="directory-filter-section">
        <label className="directory-filter-checkbox-wrap">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => onVerifiedOnlyChange(e.target.checked)}
            className="directory-filter-checkbox"
          />
          <div className="directory-filter-checkbox-text">
            <span className="font-semibold text-sm flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 size={14} className="text-emerald-600" />
              Verified Official Source
            </span>
            <span className="text-xs text-gray-500">Only show items with sourceUrl verified</span>
          </div>
        </label>
      </div>

      {/* 3. Status Filter strictly for Authenticated Administrators */}
      {isAdmin && (
        <div className="directory-filter-section">
          <label className="directory-filter-label">Publication Status (Admin Only)</label>
          <div className="directory-status-chips">
            {[
              { id: 'all', label: 'All Records' },
              { id: 'published', label: 'Published' },
              { id: 'draft', label: 'Draft' },
              { id: 'pending_review', label: 'In Review' },
            ].map((st) => (
              <button
                key={st.id}
                type="button"
                className={`directory-status-chip ${selectedStatus === st.id ? 'active' : ''}`}
                onClick={() => onStatusChange(st.id)}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. Categories Selection */}
      <div className="directory-filter-section">
        <label className="directory-filter-label">
          <span>Categories</span>
          <span className="text-xs text-gray-400">({totalCount})</span>
        </label>
        <div className="directory-category-nav-list">
          <button
            type="button"
            className={`directory-category-nav-item ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => {
              onCategoryChange('all');
              onSubcategoryChange('all');
            }}
          >
            <span className="flex items-center gap-2">
              <Filter size={15} />
              <span>All Categories</span>
            </span>
            <span className="directory-count-badge">{totalCount}</span>
          </button>

          {categories.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                type="button"
                className={`directory-category-nav-item ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  onCategoryChange(cat.id);
                  onSubcategoryChange('all');
                }}
              >
                <span className="flex items-center gap-2">
                  {getCategoryIcon(cat.id)}
                  <span>{language === 'as' && cat.name_as ? cat.name_as : cat.label}</span>
                </span>
                <span className="directory-count-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Subcategories (if available) */}
      {subcategories.length > 0 && (
        <div className="directory-filter-section">
          <label className="directory-filter-label">
            <span>Subcategory</span>
          </label>
          <select
            value={selectedSubcategory}
            onChange={(e) => onSubcategoryChange(e.target.value)}
            className="directory-filter-select"
          >
            <option value="all">All Subcategories</option>
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      )}
    </aside>
  );
};
