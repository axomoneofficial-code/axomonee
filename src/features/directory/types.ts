// ============================================================================
// AXOM ONE — Directory Feature TypeScript Definitions
// ============================================================================

export type DirectoryStatus = 'draft' | 'pending_review' | 'published' | 'rejected' | 'archived';

export interface DirectoryCategory {
  id: string;
  label: string;
  name_as?: string;
  description?: string;
  icon?: string;
  subcategories?: string[];
}

export interface DirectoryDistrict {
  id: string;
  name: string;
  slug: string;
  name_as: string;
  headquarters?: string;
  division?: string;
  is_active: number;
}

export interface DirectoryItem {
  id: string;
  name: string;
  name_as?: string;
  district_slug?: string;
  category: string;
  subcategory: string;
  district: string;
  locality?: string;
  description: string;
  description_as?: string;
  description_hi?: string;
  website?: string;
  sourceUrl?: string;
  verifiedFrom?: string;
  status: DirectoryStatus;
  language?: string[];
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  openingHours?: string;
  entryFee?: string;
  accessibility?: string;
  lastVerifiedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface DirectoryFilterState {
  searchQuery: string;
  selectedCategory: string;
  selectedSubcategory: string;
  selectedDistrict: string;
  selectedStatus: string;
  verifiedOnly: boolean;
  sortBy: 'name-asc' | 'name-desc' | 'category' | 'district' | 'verified';
}

export type BeautyDestinationCategory =
  | 'tea-tourism'
  | 'river-experiences'
  | 'hills-waterfalls'
  | 'wildlife-birdwatching'
  | 'heritage-historic'
  | 'handloom-crafts'
  | 'festivals-cultural'
  | 'culinary-experiences'
  | 'botanical-green'
  | 'district-travel-guides';

export type DestinationStatus = 'draft' | 'pending_review' | 'published' | 'archived';

export interface BeautyDestination {
  id: string;
  slug: string;
  name: string;
  name_as?: string;
  name_hi?: string;
  category: BeautyDestinationCategory | string;
  district: string;
  district_slug?: string;
  locality: string;
  shortDescription: string;
  fullDescription: string;
  shortDescription_as?: string;
  shortDescription_hi?: string;
  fullDescription_as?: string;
  fullDescription_hi?: string;
  officialWebsite: string;
  sourceUrl: string;
  imageUrl: string;
  imageAttribution: string;
  latitude: number | null;
  longitude: number | null;
  bestSeason: string;
  bestSeason_as?: string;
  bestSeason_hi?: string;
  accessNotes: string;
  accessNotes_as?: string;
  accessNotes_hi?: string;
  openingHours: string;
  openingHours_as?: string;
  openingHours_hi?: string;
  entryFee: string;
  entryFee_as?: string;
  entryFee_hi?: string;
  lastVerifiedAt: string | null;
  status: DestinationStatus;
  language: string[];
  // Backward compatibility aliases
  theme?: string;
  theme_label?: string;
  tagline?: string;
  tagline_as?: string;
  tagline_hi?: string;
  description?: string;
  description_as?: string;
  description_hi?: string;
  highlights?: string[];
  highlights_as?: string[];
  highlights_hi?: string[];
  best_time?: string;
  nearest_transit?: string;
  entry_permit?: string;
  official_source?: string;
  image?: string;
  badge?: string;
}
