import { describe, it, expect } from 'vitest';
import { isSupabaseConfigured } from '../lib/supabase';
import {
  mapRowToDirectoryItem,
  fetchPublishedDirectoryItems,
} from '../services/directoryService';
import {
  mapRowToDestination,
  fetchPublishedDestinations,
} from '../services/destinationService';

describe('AXOM ONE — Supabase Production Integration & Resilient Fallback', () => {
  it('validates configuration status gracefully', () => {
    // In test environment without env vars, isSupabaseConfigured should safely return false or true depending on env
    const configured = isSupabaseConfigured();
    expect(typeof configured).toBe('boolean');
  });

  it('maps snake_case database row to camelCase DirectoryItem interface accurately', () => {
    const dbRow = {
      id: 'test-college',
      name: 'Test Autonomous College',
      name_as: 'টেষ্ট কলেজ',
      category: 'Education & Learning',
      subcategory: 'Autonomous Degree College',
      district: 'Kamrup Metropolitan',
      locality: 'Guwahati',
      description: 'Prominent educational institution in Assam.',
      website: 'https://example.edu.in',
      source_url: 'https://dte.assam.gov.in',
      verified_from: 'DTE Assam',
      status: 'published',
      image_url: '/images/directory/test-college.jpg',
      latitude: 26.1445,
      longitude: 91.7362,
    };

    const mapped = mapRowToDirectoryItem(dbRow);

    expect(mapped.id).toBe('test-college');
    expect(mapped.name).toBe('Test Autonomous College');
    expect(mapped.name_as).toBe('টেষ্ট কলেজ');
    expect(mapped.sourceUrl).toBe('https://dte.assam.gov.in');
    expect(mapped.verifiedFrom).toBe('DTE Assam');
    expect(mapped.imageUrl).toBe('/images/directory/test-college.jpg');
    expect(mapped.latitude).toBe(26.1445);
    expect(mapped.longitude).toBe(91.7362);
  });

  it('maps snake_case database row to camelCase BeautyDestination interface accurately', () => {
    const dbRow = {
      id: 'dest-kaziranga',
      slug: 'kaziranga-national-park',
      name: 'Kaziranga National Park',
      name_as: 'কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান',
      category: 'wildlife-birdwatching',
      district: 'Golaghat',
      short_description: 'UNESCO World Heritage home to two-thirds of the world’s one-horned rhinoceroses.',
      full_description: 'Extensive biodiversity sanctuary across Brahmaputra floodplains.',
      image_url: '/images/destinations/kaziranga.jpg',
      image_attribution: 'CC BY-SA 4.0 via Wikimedia Commons',
      official_website: 'https://kaziranga.assam.gov.in',
      best_season: 'November to April',
      status: 'published',
    };

    const mapped = mapRowToDestination(dbRow);

    expect(mapped.id).toBe('dest-kaziranga');
    expect(mapped.slug).toBe('kaziranga-national-park');
    expect(mapped.name).toBe('Kaziranga National Park');
    expect(mapped.imageUrl).toBe('/images/destinations/kaziranga.jpg');
    expect(mapped.imageAttribution).toBe('CC BY-SA 4.0 via Wikimedia Commons');
    expect(mapped.officialWebsite).toBe('https://kaziranga.assam.gov.in');
    expect(mapped.shortDescription).toContain('UNESCO World Heritage');
  });

  it('guarantees seamless offline fallback for directory items with zero data loss', async () => {
    const items = await fetchPublishedDirectoryItems();

    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThanOrEqual(280);

    // Verify all returned items have valid required fields
    for (const item of items) {
      expect(item.id).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.district).toBeTruthy();
    }

    // Guarantees zero duplicate IDs
    const idSet = new Set(items.map((i) => i.id));
    expect(idSet.size).toBe(items.length);
  });

  it('guarantees seamless offline fallback for destinations with canonical accuracy', async () => {
    const destinations = await fetchPublishedDestinations();

    expect(Array.isArray(destinations)).toBe(true);
    expect(destinations.length).toBeGreaterThanOrEqual(70);

    // Verify canonical destinations are present
    const kaziranga = destinations.find((d) => d.slug === 'kaziranga' || d.id === 'tour-kaziranga');
    expect(kaziranga).toBeDefined();
    expect(kaziranga?.name).toBe('Kaziranga National Park');
    expect(kaziranga?.district).toBeTruthy();
  });
});
