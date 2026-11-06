// ============================================================================
// AXOM ONE — Destination Data Service (Supabase + Resilient Offline Fallback)
// Fetches published beauty destinations from Supabase with automatic fallback to
// canonical verified local destination data when offline or unconfigured.
// ============================================================================

import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { BeautyDestination } from '../types';
import { getTourismDestinations } from '../utils/tourismData';

/**
 * Maps a database row (snake_case) to the BeautyDestination interface.
 */
export function mapRowToDestination(row: Record<string, any>): BeautyDestination {
  return {
    id: row.id,
    slug: row.slug || row.id,
    name: row.name || '',
    name_as: row.name_as || undefined,
    name_hi: row.name_hi || undefined,
    category: row.category || 'heritage-historic',
    district: row.district || '',
    district_slug: row.district_slug || undefined,
    locality: row.locality || '',
    shortDescription: row.short_description || row.shortDescription || '',
    fullDescription: row.full_description || row.fullDescription || '',
    shortDescription_as: row.short_description_as || row.shortDescription_as || undefined,
    shortDescription_hi: row.short_description_hi || row.shortDescription_hi || undefined,
    fullDescription_as: row.full_description_as || row.fullDescription_as || undefined,
    fullDescription_hi: row.full_description_hi || row.fullDescription_hi || undefined,
    officialWebsite: row.official_website || row.officialWebsite || '',
    sourceUrl: row.source_url || row.sourceUrl || '',
    imageUrl: row.image_url || row.imageUrl || '',
    imageAttribution: row.image_attribution || row.imageAttribution || '',
    latitude: row.latitude !== null && row.latitude !== undefined ? Number(row.latitude) : null,
    longitude: row.longitude !== null && row.longitude !== undefined ? Number(row.longitude) : null,
    bestSeason: row.best_season || row.bestSeason || 'October to April',
    bestSeason_as: row.best_season_as || row.bestSeason_as || undefined,
    bestSeason_hi: row.best_season_hi || row.bestSeason_hi || undefined,
    accessNotes: row.access_notes || row.accessNotes || '',
    accessNotes_as: row.access_notes_as || row.accessNotes_as || undefined,
    accessNotes_hi: row.access_notes_hi || row.accessNotes_hi || undefined,
    openingHours: row.opening_hours || row.openingHours || 'Sunrise to Sunset',
    openingHours_as: row.opening_hours_as || row.openingHours_as || undefined,
    openingHours_hi: row.opening_hours_hi || row.openingHours_hi || undefined,
    entryFee: row.entry_fee || row.entryFee || 'Free Entry',
    entryFee_as: row.entry_fee_as || row.entryFee_as || undefined,
    entryFee_hi: row.entry_fee_hi || row.entryFee_hi || undefined,
    lastVerifiedAt: row.last_verified_at || row.lastVerifiedAt || null,
    status: row.status || 'published',
    language: Array.isArray(row.language) ? row.language : ['en', 'as'],
    badge: row.badge || undefined,
    tagline: row.tagline || undefined,
    tagline_as: row.tagline_as || undefined,
    highlights: Array.isArray(row.highlights) ? row.highlights : undefined,
    highlights_as: Array.isArray(row.highlights_as) ? row.highlights_as : undefined,
  };
}

/**
 * Fetches published destinations.
 * 1. If Supabase is configured, queries the `beauty_destinations` table (SELECT only, status='published').
 * 2. Merges with canonical 75 destinations to guarantee zero data loss.
 * 3. If Supabase is unreachable or offline, seamlessly returns canonical destinations.
 */
export async function fetchPublishedDestinations(): Promise<BeautyDestination[]> {
  const localDestinations = getTourismDestinations();

  if (!isSupabaseConfigured() || !supabase) {
    return localDestinations;
  }

  try {
    const { data, error } = await supabase
      .from('beauty_destinations')
      .select('*')
      .eq('status', 'published');

    if (error) {
      if (import.meta.env.DEV) {
        console.warn('[destinationService] Supabase query notice, using local records:', error.message);
      }
      return localDestinations;
    }

    if (!data || data.length === 0) {
      return localDestinations;
    }

    const remoteDestinations: BeautyDestination[] = data.map(mapRowToDestination);

    // Merge: Remote records take precedence by ID / slug; retain local records not present in remote
    const remoteKeys = new Set<string>();
    remoteDestinations.forEach((d) => {
      if (d.id) remoteKeys.add(d.id);
      if (d.slug) remoteKeys.add(d.slug);
    });

    const merged = [...remoteDestinations];
    for (const local of localDestinations) {
      const isAlreadyIncluded = (local.id && remoteKeys.has(local.id)) || (local.slug && remoteKeys.has(local.slug));
      if (!isAlreadyIncluded) {
        merged.push(local);
      }
    }

    return merged;
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[destinationService] Network unreachable; falling back to canonical data.');
    }
    return localDestinations;
  }
}
