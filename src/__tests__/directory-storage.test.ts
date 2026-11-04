import { describe, it, expect, beforeEach } from 'vitest';
import {
  parseStorageVersion,
  getNextStorageKey,
  loadDirectoryRecords,
  saveDirectoryRecords,
  pruneOldVersionCaches,
  STORAGE_KEY_PREFIX,
  CURRENT_STORAGE_VERSION,
  STORAGE_KEY,
} from '../features/directory/directoryStorage';
import { DirectoryItem } from '../features/directory/types';

// In-memory Mock Storage implementation for Node.js Vitest environment
class MockStorage implements Storage {
  private store: Map<string, string> = new Map();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] || null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
}

describe('AXOM ONE — Directory Storage & Cache Invalidation Engine', () => {
  let mockStorage: MockStorage;

  const sampleSeedRecords: DirectoryItem[] = [
    {
      id: 'edu-gauhati',
      name: 'Gauhati University',
      name_as: 'গুৱাহাটী বিশ্ববিদ্যালয়',
      category: 'education',
      subcategory: 'State University',
      district: 'Kamrup Metropolitan',
      district_slug: 'kamrup-metropolitan',
      locality: 'Jalukbari, Guwahati',
      description: 'The oldest and largest premier state university in Northeast India.',
      status: 'published',
    },
    {
      id: 'temple-kamakhya',
      name: 'Kamakhya Temple',
      name_as: 'কামাখ্যা দেৱালয়',
      category: 'temples-spiritual',
      subcategory: 'Shakti Peetha',
      district: 'Kamrup Metropolitan',
      district_slug: 'kamrup-metropolitan',
      locality: 'Nilachal Hill, Guwahati',
      description: 'One of the oldest and most revered Shakti Peethas in the world.',
      status: 'published',
    },
  ];

  beforeEach(() => {
    mockStorage = new MockStorage();
  });

  it('correctly parses and increments version without assuming hardcoded versions', () => {
    expect(parseStorageVersion('axom_one_assam_directory_records_v7')).toBe(7);
    expect(parseStorageVersion('axom_one_assam_directory_records_v8')).toBe(8);
    expect(parseStorageVersion('axom_one_assam_directory_records_v42')).toBe(42);
    expect(parseStorageVersion('no_version_key')).toBeNull();

    // Incrementing arbitrary versions
    expect(getNextStorageKey('axom_one_assam_directory_records_v7')).toBe(
      'axom_one_assam_directory_records_v8'
    );
    expect(getNextStorageKey('axom_one_assam_directory_records_v8')).toBe(
      'axom_one_assam_directory_records_v9'
    );
    expect(getNextStorageKey('axom_one_assam_directory_records_v99')).toBe(
      'axom_one_assam_directory_records_v100'
    );
    expect(getNextStorageKey('custom_key')).toBe('custom_key_v1');
  });

  it('loads seed records accurately on first-time launch when cache is empty', () => {
    const records = loadDirectoryRecords(sampleSeedRecords, mockStorage, STORAGE_KEY);
    expect(records).toHaveLength(2);
    expect(records[0].id).toBe('edu-gauhati');
    expect(records[1].id).toBe('temple-kamakhya');
  });

  it('automatically invalidates and prunes stale prior-version cache keys', () => {
    const oldKey = `${STORAGE_KEY_PREFIX}v${CURRENT_STORAGE_VERSION - 1}`;
    mockStorage.setItem(oldKey, JSON.stringify([{ id: 'stale-record', name: 'Old Cache' }]));

    expect(mockStorage.getItem(oldKey)).toBeTruthy();

    // Loading with active current version key must prune old version
    const records = loadDirectoryRecords(sampleSeedRecords, mockStorage, STORAGE_KEY);
    expect(records).toHaveLength(2);
    expect(records.some((r) => r.id === 'stale-record')).toBe(false);

    // Old key was cleanly purged from storage
    expect(mockStorage.getItem(oldKey)).toBeNull();

    // Verify direct prune function operates safely without throwing
    pruneOldVersionCaches(STORAGE_KEY, mockStorage);
  });

  it('handles corrupted cache payloads gracefully without crashing', () => {
    // 1. Invalid JSON string
    mockStorage.setItem(STORAGE_KEY, '{invalid json string :::');
    let records = loadDirectoryRecords(sampleSeedRecords, mockStorage, STORAGE_KEY);
    expect(records).toHaveLength(2);
    expect(records[0].id).toBe('edu-gauhati');

    // 2. Non-array JSON payload (e.g., plain object or number)
    mockStorage.setItem(STORAGE_KEY, JSON.stringify({ notAnArray: true }));
    records = loadDirectoryRecords(sampleSeedRecords, mockStorage, STORAGE_KEY);
    expect(records).toHaveLength(2);

    // 3. Array with nulls or empty elements
    mockStorage.setItem(STORAGE_KEY, JSON.stringify([null, undefined, {}, { id: 'edu-gauhati' }]));
    records = loadDirectoryRecords(sampleSeedRecords, mockStorage, STORAGE_KEY);
    expect(records).toHaveLength(2);
  });

  it('recovers cleanly when browser storage throws access or quota errors', () => {
    const throwingStorage: Storage = {
      length: 0,
      clear: () => {},
      key: () => null,
      getItem: () => {
        throw new Error('QuotaExceededError or SecurityError: DOM access denied');
      },
      setItem: () => {
        throw new Error('QuotaExceededError: Storage is full');
      },
      removeItem: () => {},
    };

    // Does not crash, returns baseline seed dataset
    const records = loadDirectoryRecords(sampleSeedRecords, throwingStorage, STORAGE_KEY);
    expect(records).toHaveLength(2);

    const saved = saveDirectoryRecords(sampleSeedRecords, throwingStorage, STORAGE_KEY);
    expect(saved).toBe(false);
  });

  it('preserves user-created listings when merging seed updates into local storage', () => {
    // Simulate user having added a verified local community resource in their browser
    const userCreatedRecord: DirectoryItem = {
      id: 'custom-community-library',
      name: 'Nalbari Public Granthagar',
      name_as: 'নলবাৰী ৰাজহুৱা গ্ৰন্থাগাৰ',
      category: 'education',
      subcategory: 'Public Library',
      district: 'Nalbari',
      district_slug: 'nalbari',
      locality: 'Nalbari Town',
      description: 'Historical district library with rare Assamese manuscripts.',
      status: 'published',
    };

    saveDirectoryRecords([...sampleSeedRecords, userCreatedRecord], mockStorage, STORAGE_KEY);

    // Later, seed dataset is updated with a brand new third record
    const updatedSeed: DirectoryItem[] = [
      ...sampleSeedRecords,
      {
        id: 'temple-hayagriva',
        name: 'Hayagriva Madhava Temple',
        category: 'temples-spiritual',
        subcategory: 'Historic Temple',
        district: 'Kamrup',
        district_slug: 'kamrup-rural',
        locality: 'Hajo',
        description: 'Famous historic pilgrimage shrine atop Monikut hill.',
        status: 'published',
      },
    ];

    const merged = loadDirectoryRecords(updatedSeed, mockStorage, STORAGE_KEY);

    // Total must be 4: 2 original seed + 1 custom user created + 1 new seed
    expect(merged).toHaveLength(4);
    const ids = merged.map((r) => r.id);
    expect(ids).toContain('custom-community-library');
    expect(ids).toContain('temple-hayagriva');
    expect(ids).toContain('edu-gauhati');
    expect(ids).toContain('temple-kamakhya');
  });
});
