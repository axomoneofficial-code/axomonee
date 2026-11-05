import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, MapPin, X, ArrowRight, Filter } from 'lucide-react';
import { DirectoryDistrict } from './types';

interface DirectorySearchProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDistrict: string;
  onDistrictChange: (d: string) => void;
  districts: (DirectoryDistrict | string)[];
  totalCount: number;
  filteredCount: number;
  onClear?: () => void;
  onToggleFilters?: () => void;
  showFiltersToggle?: boolean;
}

export const DirectorySearch: React.FC<DirectorySearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedDistrict,
  onDistrictChange,
  districts,
  totalCount,
  filteredCount,
  onClear,
  onToggleFilters,
  showFiltersToggle = false,
}) => {
  const { language } = useLanguage();
  return (
    <div className="directory-search-capsule-wrapper">
      <div className="directory-search-capsule">
        {/* Search Keyword Input */}
        <div className="directory-search-input-field">
          <Search size={18} className="directory-search-icon" />
          <input
            type="text"
            className="directory-search-native-input"
            placeholder={
              language === 'as'
                ? 'বিশ্ববিদ্যালয়, মন্দিৰ, পুৰাতাত্বিক স্থান, অভয়াৰণ্য, চৰকাৰী সেৱা সন্ধান কৰক...'
                : language === 'hi'
                ? 'विश्वविद्यालय, मंदिर, ऐतिहासिक स्थल, अभयारण्य, सरकारी सेवाएं खोजें...'
                : 'Search universities, temples, archaeological sites, wildlife, public services...'
            }
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="directory-search-clear-btn"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="directory-search-divider" />

        {/* District Selector */}
        <div className="directory-search-district-field">
          <MapPin size={16} className="directory-district-icon" />
          <select
            className="directory-search-district-select"
            value={selectedDistrict}
            onChange={(e) => onDistrictChange(e.target.value)}
          >
            <option value="all">All Assam (সকলো জিলা)</option>
            {districts.map((d) => {
              const name = typeof d === 'string' ? d : d.name;
              const name_as = typeof d === 'string' ? '' : d.name_as ? ` (${d.name_as})` : '';
              return (
                <option key={typeof d === 'string' ? d : d.id || d.name} value={name}>
                  {name}{name_as}
                </option>
              );
            })}
          </select>
        </div>

        {/* Mobile Filter Toggle */}
        {showFiltersToggle && onToggleFilters && (
          <button
            type="button"
            className="directory-mobile-filter-btn"
            onClick={onToggleFilters}
            title="Toggle filters"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
        )}

        {/* Submit / Action Pill Button */}
        <button
          type="button"
          className="directory-search-action-btn"
          onClick={() => {}}
        >
          <span>{language === 'as' ? 'সন্ধান কৰক' : language === 'hi' ? 'खोजें' : 'Find'}</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Meta Result Counter Bar */}
      <div className="directory-search-meta-bar">
        <div className="directory-search-count-pill">
          Showing <strong>{filteredCount}</strong> of <strong>{totalCount}</strong> verified Assam directory listings
        </div>

        {(searchQuery || (selectedDistrict && selectedDistrict !== 'all')) && onClear && (
          <button
            type="button"
            className="directory-search-reset-link"
            onClick={onClear}
          >
            <X size={13} />
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};
