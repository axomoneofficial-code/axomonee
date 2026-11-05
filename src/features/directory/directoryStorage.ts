// ============================================================================
// AXOM ONE — Directory LocalStorage & Cache Invalidation Engine
// Manages versioned local cache, automatic cache invalidation, corrupted storage
// recovery, and preservation of user/admin-created records.
// ============================================================================

import { DirectoryItem } from './types';

export const STORAGE_KEY_PREFIX = 'axom_one_assam_directory_records_';

/**
 * Extracts the integer version number from any storage key string.
 * Supports patterns like '..._v7', '..._v8', '..._v12', etc.
 */
export function parseStorageVersion(key: string): number | null {
  const match = key.match(/_v(\d+)$/i);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Returns the incremented storage key without assuming a specific base version.
 * e.g., '..._v7' -> '..._v8', '..._v8' -> '..._v9'
 */
export function getNextStorageKey(currentKey: string): string {
  const currentVer = parseStorageVersion(currentKey);
  if (currentVer === null) {
    return `${currentKey}_v1`;
  }
  const base = currentKey.replace(/_v\d+$/i, '');
  return `${base}_v${currentVer + 1}`;
}

// Current active storage key for directory records
export const CURRENT_STORAGE_VERSION = 11;
export const STORAGE_KEY = `${STORAGE_KEY_PREFIX}v${CURRENT_STORAGE_VERSION}`;

/**
 * Checks whether browser storage is accessible without throwing.
 */
function isStorageAvailable(storage: Storage | null): boolean {
  if (!storage) return false;
  try {
    const testKey = '__axom_storage_test__';
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Cleanly removes outdated version keys from previous releases so stale records
 * do not take up browser quota.
 */
export function pruneOldVersionCaches(
  activeKey: string,
  storage: Storage | null
): void {
  if (!isStorageAvailable(storage) || !storage) return;

  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < storage.length; i++) {
      const k = storage.key(i);
      if (k && k.startsWith(STORAGE_KEY_PREFIX) && k !== activeKey) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach((k) => {
      try {
        storage.removeItem(k);
      } catch {
        // Ignore quota/permission errors
      }
    });
  } catch {
    // Ignore storage iteration failure
  }
}

/**
 * Loads directory records from localStorage with automatic version-based cache migration,
 * malformed storage handling, and preservation of user/admin created records.
 */
export function loadDirectoryRecords(
  seedRecords: DirectoryItem[] = [],
  storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null,
  activeKey: string = STORAGE_KEY
): DirectoryItem[] {
  if (!isStorageAvailable(storage) || !storage) {
    return seedRecords;
  }

  try {
    // Invalidate and prune older version keys
    pruneOldVersionCaches(activeKey, storage);

    const saved = storage.getItem(activeKey);
    if (!saved) {
      return seedRecords;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(saved);
    } catch {
      // Corrupted JSON payload: reset storage key and fallback to seed
      storage.removeItem(activeKey);
      return seedRecords;
    }

    if (!Array.isArray(parsed) || parsed.length === 0) {
      storage.removeItem(activeKey);
      return seedRecords;
    }

    // Merge logic: preserve user-created listings while updating seed records
    const seedMap = new Map(seedRecords.map((r) => [r.id, r]));

    const mergedExisting: DirectoryItem[] = [];
    for (const rawItem of parsed) {
      if (!rawItem || typeof rawItem !== 'object' || !rawItem.id) {
        continue;
      }
      const item = rawItem as DirectoryItem;
      const seed = seedMap.get(item.id);

      if (seed) {
        // It is an official statutory seed record: sync statutory updates
        mergedExisting.push({
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
          lastVerifiedAt: seed.lastVerifiedAt || item.lastVerifiedAt,
        });
      } else {
        // User-created or custom listing: preserve as-is without overwrite
        mergedExisting.push(item);
      }
    }

    // Add any newly added seed records that do not exist in the cached set
    const existingIds = new Set(mergedExisting.map((i) => i.id));
    const newlyAddedFromSeed = seedRecords.filter((r) => !existingIds.has(r.id));

    return [...mergedExisting, ...newlyAddedFromSeed];
  } catch (err) {
    console.warn('Failed to load directory records from storage:', err);
    return seedRecords;
  }
}

/**
 * Safely persists directory records to localStorage without crashing on quota errors.
 */
export function saveDirectoryRecords(
  records: DirectoryItem[],
  storage: Storage | null = typeof window !== 'undefined' ? window.localStorage : null,
  activeKey: string = STORAGE_KEY
): boolean {
  if (!isStorageAvailable(storage) || !storage) return false;
  try {
    storage.setItem(activeKey, JSON.stringify(records));
    return true;
  } catch (err) {
    console.warn('Failed to persist directory records to storage:', err);
    return false;
  }
}
