import { describe, it, expect } from 'vitest';
import districtsData from '../data/districts.json';
import tourismDestinations from '../data/tourism-destinations.json';
import directoryData from '../data/assam-directory.seed.json';
import { translations, Language } from '../i18n/translations';

describe('Explore Assam & District Explorer Verification (Phase 2)', () => {
  it('covers all 35 administrative districts with headquarters and administrative division', () => {
    expect(districtsData.length).toBe(35);

    districtsData.forEach((d) => {
      expect(d.id).toBeTruthy();
      expect(d.name).toBeTruthy();
      expect(d.slug).toBeTruthy();
      expect(d.name_as).toBeTruthy();
      expect(d.headquarters).toBeTruthy();
      expect(d.division).toBeTruthy();
      expect(d.is_active).toBe(1);
    });
  });

  it('verifies that all major Assam divisions exist in the district dataset', () => {
    const divisions = new Set(districtsData.map((d) => d.division));
    expect(divisions.has('Lower Assam')).toBe(true);
    expect(divisions.has('Lower Assam (BTR)')).toBe(true);
    expect(divisions.has('Central Assam')).toBe(true);
    expect(divisions.has('Central Assam / Hills')).toBe(true);
    expect(divisions.has('Upper Assam')).toBe(true);
    expect(divisions.has('North Assam')).toBe(true);
    expect(divisions.has('Barak Valley')).toBe(true);
  });

  it('ensures all destinations have valid slugs for standalone detail pages', () => {
    expect(tourismDestinations.length).toBeGreaterThanOrEqual(44);

    const slugs = new Set<string>();
    tourismDestinations.forEach((dest: any) => {
      expect(dest.slug).toBeTruthy();
      expect(slugs.has(dest.slug)).toBe(false);
      slugs.add(dest.slug);

      expect(dest.name).toBeTruthy();
      expect(dest.district).toBeTruthy();
      expect(dest.category).toBeTruthy();
      expect(dest.shortDescription || dest.tagline).toBeTruthy();
      expect(dest.fullDescription || dest.description).toBeTruthy();
      expect(dest.status).toMatch(/published|draft|pending_review|archived/);
    });
  });

  it('verifies conditional GPS coordinates and copyright attribution for destinations', () => {
    tourismDestinations.forEach((dest: any) => {
      if (dest.latitude !== null && dest.longitude !== null) {
        expect(typeof dest.latitude).toBe('number');
        expect(typeof dest.longitude).toBe('number');
        // Assam geographic bounding box approximately: Lat 24° to 28°N, Long 89° to 96°E
        expect(dest.latitude).toBeGreaterThanOrEqual(24.0);
        expect(dest.latitude).toBeLessThanOrEqual(29.0);
        expect(dest.longitude).toBeGreaterThanOrEqual(89.0);
        expect(dest.longitude).toBeLessThanOrEqual(97.0);
      }

      // Check copyright attribution presence
      expect(dest.imageAttribution).toBeTruthy();
    });
  });

  it('supports Bodo (brx) alongside Assamese, Hindi, and English with fallback dictionaries', () => {
    const supportedLangs: Language[] = ['en', 'as', 'hi', 'brx'];

    supportedLangs.forEach((lang) => {
      const dict = translations[lang];
      expect(dict).toBeDefined();
      expect(dict.nav).toBeDefined();
      expect(dict.nav.home).toBeTruthy();
      expect(dict.nav.districts).toBeTruthy();
      expect(dict.nav.directory).toBeTruthy();
      expect(dict.nav.tourism).toBeTruthy();
    });
  });

  it('verifies educational and heritage directory records tie correctly into districts', () => {
    const districtsList = districtsData.map((d) => d.name.toLowerCase());

    const records = directoryData.records;
    expect(records.length).toBeGreaterThan(40);

    // Ensure records reference recognizable districts
    const matched = records.filter((r: any) =>
      districtsList.some((dName) => r.district.toLowerCase().includes(dName))
    );
    expect(matched.length).toBeGreaterThan(35);
  });
});
