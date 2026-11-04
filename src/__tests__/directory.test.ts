import { describe, it, expect } from 'vitest';
import seedData from '../data/assam-directory.seed.json';
import categoriesData from '../data/categories.json';
import districtsData from '../data/districts.json';
import tourismDestinations from '../data/tourism-destinations.json';
import { DirectoryStatus } from '../features/directory/types';

describe('Assam Directory Feature & Starter Pack Integrity', () => {
  it('loads valid starter seed data with 47 records and 6 core categories', () => {
    expect(seedData.records.length).toBeGreaterThanOrEqual(47);
    expect(seedData.categories.length).toBe(6);
    expect(categoriesData.length).toBe(6);
    expect(districtsData.length).toBe(35);
  });

  it('ensures all records have required fields as defined in README.md', () => {
    const validStatuses: DirectoryStatus[] = ['draft', 'pending_review', 'published', 'rejected', 'archived'];

    seedData.records.forEach((record: any) => {
      expect(record.id).toBeTruthy();
      expect(record.name).toBeTruthy();
      expect(record.category).toBeTruthy();
      expect(record.subcategory).toBeTruthy();
      expect(record.district).toBeTruthy();
      expect(record.description).toBeTruthy();
      expect(validStatuses).toContain(record.status);
    });
  });

  it('contains verifiable official source URLs for editorial oversight', () => {
    const withSource = seedData.records.filter((r: any) => !!r.sourceUrl);
    expect(withSource.length).toBeGreaterThan(40);

    // Official domains must be valid URLs
    withSource.forEach((r: any) => {
      expect(() => new URL(r.sourceUrl)).not.toThrow();
    });
  });

  it('covers major Assam cultural landmarks and universities', () => {
    const names = seedData.records.map((r: any) => r.name);
    expect(names).toContain('Gauhati University');
    expect(names).toContain('Tezpur University');
    expect(names).toContain('Indian Institute of Technology Guwahati');
    expect(names).toContain('Kamakhya Temple');
    expect(names).toContain('Kaziranga National Park');
    expect(names).toContain('Rang Ghar');
    expect(names).toContain('Charaideo Moidams');
  });

  it('provides all 35 Assam districts with authentic Assamese names and headquarters', () => {
    districtsData.forEach((d) => {
      expect(d.id).toBeTruthy();
      expect(d.name).toBeTruthy();
      expect(d.name_as).toBeTruthy();
      expect(d.slug).toBeTruthy();
      expect(d.headquarters).toBeTruthy();
      expect(d.division).toBeTruthy();
    });
  });

  it('validates remade Assam Tourism destinations covering all official interest themes', () => {
    expect(tourismDestinations.length).toBeGreaterThanOrEqual(15);

    const themes = new Set(tourismDestinations.map((t) => t.theme));
    expect(themes).toContain('wildlife');
    expect(themes).toContain('charaideo');
    expect(themes).toContain('history');
    expect(themes).toContain('temples');
    expect(themes).toContain('satras');
    expect(themes).toContain('tea-golf');
    expect(themes).toContain('rural');
    expect(themes).toContain('river');
    expect(themes).toContain('hills');

    // Every destination must have authentic Assamese title, highlights, best season, and official source URL
    tourismDestinations.forEach((t) => {
      expect(t.name).toBeTruthy();
      expect(t.name_as).toBeTruthy();
      expect(t.tagline).toBeTruthy();
      expect(t.description).toBeTruthy();
      expect(t.highlights.length).toBeGreaterThanOrEqual(3);
      expect(t.best_time).toBeTruthy();
      expect(t.nearest_transit).toBeTruthy();
      expect(t.official_source).toMatch(/^https?:\/\//);
      expect(t.badge).toBeTruthy();
    });
  });
});
