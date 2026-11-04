import { describe, it, expect } from 'vitest';
import {
  getLocalizedDestinationDescription,
  getLocalizedDestinationTagline,
  getLocalizedDestinationHighlights,
  getLocalizedDestinationName,
  getLocalizedDestinationSeason,
  getLocalizedDirectoryDescription,
  getLocalizedDirectoryName,
} from '../utils/localizedContent';
import { BeautyDestination } from '../types';
import { DirectoryItem } from '../features/directory/types';

describe('Localized Content Utilities', () => {
  const sampleDestination: BeautyDestination = {
    id: 'tour-kaziranga',
    slug: 'kaziranga',
    name: 'Kaziranga National Park',
    name_as: 'কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান',
    name_hi: 'काजीरंगा राष्ट्रीय उद्यान',
    category: 'wildlife-birdwatching',
    district: 'Golaghat',
    locality: 'Kohora',
    shortDescription: 'UNESCO World Heritage Site & Global Stronghold of the Great Indian One-Horned Rhino',
    shortDescription_as: 'ইউনেস্কো বিশ্ব ঐতিহ্য ক্ষেত্ৰ আৰু বিশ্ববিখ্যাত এশিঙীয়া গঁড়ৰ প্ৰধান বাসস্থান',
    fullDescription: 'Spanning 858 sq km across the alluvial floodplains of the Brahmaputra...',
    fullDescription_as: 'ব্ৰহ্মপুত্ৰৰ পলসুৱা প্লাৱনভূমিত ৮৫৮ বৰ্গ কিলোমিটাৰ জুৰি বিস্তৃত কাজিৰঙা...',
    fullDescription_hi: 'ब्रह्मपुत्र के उपजाऊ कछार में 858 वर्ग किमी में विस्तृत काजीरंगा...',
    highlights: [
      'Dawn Elephant-back Safari',
      'Jeep Safaris',
    ],
    highlights_as: [
      'ৰাতিপুৱাৰ হাতী চাফাৰী আৰু কাজিৰঙাৰ ওখ নল-খাগৰিৰ মনোমোহা দৃশ্য',
      'কঁহৰা আৰু বাঘৰি ৰেঞ্জৰ জীৱন্ত জীপ চাফাৰী',
    ],
    bestSeason: 'November to April',
    bestSeason_as: 'নৱেম্বৰৰ পৰা এপ্ৰিল (চাফাৰী খোলা থাকে)',
    bestSeason_hi: 'नवंबर से अप्रैल',
    officialWebsite: 'https://kaziranga.assam.gov.in',
    sourceUrl: 'https://kaziranga.assam.gov.in',
    imageUrl: 'https://images.unsplash.com/photo-kaziranga.jpg',
    imageAttribution: 'Assam Forest Department',
    latitude: 26.5775,
    longitude: 93.1711,
    accessNotes: 'NH-715',
    openingHours: '07:30 - 16:00',
    entryFee: 'Standard ATDC fee',
    lastVerifiedAt: '2026-03-30',
    status: 'published',
    language: ['en', 'as', 'hi'],
  };

  it('correctly provides Assamese description when active language is "as"', () => {
    const descAs = getLocalizedDestinationDescription(sampleDestination, 'as');
    expect(descAs).toContain('ব্ৰহ্মপুত্ৰৰ পলসুৱা প্লাৱনভূমিত');

    const descEn = getLocalizedDestinationDescription(sampleDestination, 'en');
    expect(descEn).toContain('Spanning 858 sq km');

    const descHi = getLocalizedDestinationDescription(sampleDestination, 'hi');
    expect(descHi).toContain('ब्रह्मपुत्र के उपजाऊ कछार');
  });

  it('correctly provides Assamese tagline and highlights', () => {
    const taglineAs = getLocalizedDestinationTagline(sampleDestination, 'as');
    expect(taglineAs).toContain('ইউনেস্কো বিশ্ব ঐতিহ্য ক্ষেত্ৰ');

    const highlightsAs = getLocalizedDestinationHighlights(sampleDestination, 'as');
    expect(highlightsAs.length).toBe(2);
    expect(highlightsAs[0]).toContain('ৰাতিপুৱাৰ হাতী চাফাৰী');

    const highlightsEn = getLocalizedDestinationHighlights(sampleDestination, 'en');
    expect(highlightsEn[0]).toBe('Dawn Elephant-back Safari');
  });

  it('correctly resolves primary destination name by language', () => {
    expect(getLocalizedDestinationName(sampleDestination, 'as')).toBe('কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান');
    expect(getLocalizedDestinationName(sampleDestination, 'hi')).toBe('काजीरंगा राष्ट्रीय उद्यान');
    expect(getLocalizedDestinationName(sampleDestination, 'en')).toBe('Kaziranga National Park');
  });

  it('correctly provides localized season', () => {
    expect(getLocalizedDestinationSeason(sampleDestination, 'as')).toContain('নৱেম্বৰৰ পৰা এপ্ৰিল');
    expect(getLocalizedDestinationSeason(sampleDestination, 'en')).toBe('November to April');
  });

  it('gracefully falls back to English when localized fields are absent', () => {
    const sparseDestination: BeautyDestination = {
      ...sampleDestination,
      fullDescription_as: undefined,
      description_as: undefined,
      shortDescription_as: undefined,
      highlights_as: undefined,
      bestSeason_as: undefined,
    };

    expect(getLocalizedDestinationDescription(sparseDestination, 'as')).toBe(sparseDestination.fullDescription);
    expect(getLocalizedDestinationHighlights(sparseDestination, 'as')).toEqual(sparseDestination.highlights);
    expect(getLocalizedDestinationSeason(sparseDestination, 'as')).toBe('November to April');
  });

  it('correctly resolves directory item localized fields', () => {
    const sampleItem: DirectoryItem = {
      id: 'edu-gauhati',
      name: 'Gauhati University',
      name_as: 'গুৱাহাটী বিশ্ববিদ্যালয়',
      category: 'education',
      subcategory: 'University',
      district: 'Kamrup Metropolitan',
      description: 'Public state university in Guwahati, Assam.',
      description_as: 'গুৱাহাটী বিশ্ববিদ্যালয় কামৰূপ মহানগৰ জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান।',
      status: 'published',
    };

    expect(getLocalizedDirectoryName(sampleItem, 'as')).toBe('গুৱাহাটী বিশ্ববিদ্যালয়');
    expect(getLocalizedDirectoryName(sampleItem, 'en')).toBe('Gauhati University');
    expect(getLocalizedDirectoryDescription(sampleItem, 'as')).toContain('গুৱাহাটী বিশ্ববিদ্যালয়');
    expect(getLocalizedDirectoryDescription(sampleItem, 'en')).toBe('Public state university in Guwahati, Assam.');
  });
});
