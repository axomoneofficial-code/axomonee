// ============================================================================
// AXOM ONE — Directory Data Service (Supabase + Resilient Offline Fallback)
// Fetches published directory items from Supabase with automatic fallback to
// verified local seed data when offline or unconfigured.
// ============================================================================

import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { DirectoryItem } from '../features/directory/types';
import { loadDirectoryRecords } from '../features/directory/directoryStorage';
import initialSeedData from '../data/assam-directory.seed.json';

const seedRecords: DirectoryItem[] = (initialSeedData.records as DirectoryItem[]) || [];

/**
 * Maps a database row (snake_case) to the DirectoryItem interface (camelCase).
 */
export function mapRowToDirectoryItem(row: Record<string, any>): DirectoryItem {
  return {
    id: row.id,
    name: row.name || '',
    name_as: row.name_as || undefined,
    district_slug: row.district_slug || undefined,
    category: row.category || 'Education & Learning',
    subcategory: row.subcategory || '',
    district: row.district || '',
    locality: row.locality || undefined,
    description: row.description || '',
    description_as: row.description_as || undefined,
    description_hi: row.description_hi || undefined,
    website: row.website || undefined,
    sourceUrl: row.source_url || row.sourceUrl || undefined,
    verifiedFrom: row.verified_from || row.verifiedFrom || undefined,
    status: row.status || 'published',
    imageUrl: row.image_url || row.imageUrl || undefined,
    latitude: row.latitude !== null && row.latitude !== undefined ? Number(row.latitude) : undefined,
    longitude: row.longitude !== null && row.longitude !== undefined ? Number(row.longitude) : undefined,
    phone: row.phone || undefined,
    openingHours: row.opening_hours || row.openingHours || undefined,
    entryFee: row.entry_fee || row.entryFee || undefined,
    lastVerifiedAt: row.last_verified_at || row.lastVerifiedAt || null,
    createdAt: row.created_at || row.createdAt || undefined,
    updatedAt: row.updated_at || row.updatedAt || undefined,
  };
}

/**
 * Fetches published directory records.
 * 1. If Supabase is configured, queries the `directory_items` table (SELECT only, status='published').
 * 2. Merges with local seed records to guarantee zero data loss.
 * 3. If Supabase is unreachable, offline, or returns empty, seamlessly returns local seed records.
 */
export async function fetchPublishedDirectoryItems(): Promise<DirectoryItem[]> {
  const localItems = loadDirectoryRecords(seedRecords);

  if (!isSupabaseConfigured() || !supabase) {
    return localItems;
  }

  try {
    const { data, error } = await supabase
      .from('directory_items')
      .select('*')
      .eq('status', 'published');

    if (error) {
      if (import.meta.env.DEV) {
        console.warn('[directoryService] Supabase query notice, using local records:', error.message);
      }
      return localItems;
    }

    if (!data || data.length === 0) {
      return localItems;
    }

    const remoteItems: DirectoryItem[] = data.map(mapRowToDirectoryItem);

    // Merge: Remote published records take precedence; retain any local seed records not in remote
    const remoteIds = new Set(remoteItems.map((item) => item.id));
    const merged = [...remoteItems];

    for (const localItem of localItems) {
      if (!remoteIds.has(localItem.id)) {
        merged.push(localItem);
      }
    }

    return merged;
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[directoryService] Network unreachable; falling back to local seed data.');
    }
    return localItems;
  }
}
