// ============================================================================
// AXOM ONE — Application TypeScript Definitions
// ============================================================================

export interface District {
  id: string;
  name: string;
  slug: string;
  name_as: string;
  headquarters?: string;
  division?: string;
  is_active: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  is_active: number;
}

export type ListingType = 'business' | 'service' | 'tourism' | 'opportunity' | 'community';
export type VerificationStatus = 'unverified' | 'verified';
export type ModerationStatus = 'pending' | 'published' | 'rejected' | 'suspended';

export interface Listing {
  id: string;
  district_id: string;
  category_id: string;
  title: string;
  slug: string;
  description: string;
  listing_type: ListingType;
  address?: string;
  contact_email?: string;
  contact_phone?: string;
  website_url?: string;
  opening_hours_json?: string;
  image_key?: string;
  image_url?: string;
  source_url?: string;
  verification_status: VerificationStatus;
  moderation_status: ModerationStatus;
  is_sponsored: number;
  created_at: string;
  updated_at?: string;
  published_at?: string;
  district_name?: string;
  district_slug?: string;
  district_name_as?: string;
  category_name?: string;
  category_slug?: string;
  category_icon?: string;
}

export interface EventItem {
  id: string;
  district_id: string;
  title: string;
  title_as?: string;
  slug: string;
  category?: string;
  category_label?: string;
  description: string;
  venue: string;
  start_at: string;
  end_at: string;
  organizer: string;
  source_url?: string;
  moderation_status?: string;
  district_name?: string;
  district_slug?: string;
  district_name_as?: string;
  image_url?: string;
  latitude?: number;
  longitude?: number;
}

export interface Submission {
  id: string;
  listing_id?: string;
  submitter_name: string;
  submitter_email: string;
  submission_type: string;
  payload_json: string;
  moderation_status: 'pending' | 'approved' | 'rejected';
  reviewer_notes?: string;
  created_at: string;
  reviewed_at?: string;
}

export interface ReportItem {
  id: string;
  listing_id?: string;
  reason: string;
  description: string;
  reporter_contact?: string;
  status: 'pending' | 'resolved' | 'dismissed';
  created_at: string;
  resolved_at?: string;
  listing_title?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'superadmin' | 'admin' | 'moderator';
}

export interface AuditLog {
  id: string;
  admin_user_id: string;
  admin_email?: string;
  action: string;
  resource_type: string;
  resource_id: string;
  metadata_json?: string;
  created_at: string;
}

export interface AdminStats {
  published_listings: number;
  pending_submissions: number;
  open_reports: number;
  active_districts: number;
  destinations_count?: number;
  events_count?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  page?: number;
  limit?: number;
  total?: number;
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
