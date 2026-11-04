import { BeautyDestination } from '../types';
import { DirectoryItem } from '../features/directory/types';
import { Language } from '../i18n/translations';

/**
 * Returns the localized full narrative/description of a tourist destination.
 */
export function getLocalizedDestinationDescription(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as') {
    return (
      dest.fullDescription_as ||
      dest.description_as ||
      dest.shortDescription_as ||
      dest.fullDescription ||
      dest.description ||
      dest.shortDescription ||
      ''
    );
  }
  if (lang === 'hi') {
    return (
      dest.fullDescription_hi ||
      dest.description_hi ||
      dest.shortDescription_hi ||
      dest.fullDescription ||
      dest.description ||
      dest.shortDescription ||
      ''
    );
  }
  return dest.fullDescription || dest.description || dest.shortDescription || '';
}

/**
 * Returns the localized short tagline / summary for destination cards & modals.
 */
export function getLocalizedDestinationTagline(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as') {
    return (
      dest.tagline_as ||
      dest.shortDescription_as ||
      dest.tagline ||
      dest.shortDescription ||
      ''
    );
  }
  if (lang === 'hi') {
    return (
      dest.tagline_hi ||
      dest.shortDescription_hi ||
      dest.tagline ||
      dest.shortDescription ||
      ''
    );
  }
  return dest.tagline || dest.shortDescription || '';
}

/**
 * Returns the localized key highlights list for a destination.
 */
export function getLocalizedDestinationHighlights(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string[] {
  if (!dest) return [];
  if (lang === 'as' && dest.highlights_as && dest.highlights_as.length > 0) {
    return dest.highlights_as;
  }
  if (lang === 'hi' && dest.highlights_hi && dest.highlights_hi.length > 0) {
    return dest.highlights_hi;
  }
  return dest.highlights || [];
}

/**
 * Returns the primary localized display name for a destination.
 */
export function getLocalizedDestinationName(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as' && dest.name_as) {
    return dest.name_as;
  }
  if (lang === 'hi' && dest.name_hi) {
    return dest.name_hi;
  }
  return dest.name || '';
}

/**
 * Returns the localized best season to visit.
 */
export function getLocalizedDestinationSeason(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as' && dest.bestSeason_as) return dest.bestSeason_as;
  if (lang === 'hi' && dest.bestSeason_hi) return dest.bestSeason_hi;
  if (lang === 'hi') {
    const raw = dest.bestSeason || dest.best_time;
    if (raw === 'October to April' || raw === 'November to April') {
      return 'अक्टूबर से अप्रैल';
    }
    if (raw === 'Year-round' || raw === 'Throughout the year') {
      return 'वर्ष भर (सभी मौसम)';
    }
  }
  return dest.bestSeason || dest.best_time || 'October to April';
}

/**
 * Returns the localized entry permit / fee information.
 */
export function getLocalizedDestinationEntry(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as' && dest.entryFee_as) return dest.entryFee_as;
  if (lang === 'hi' && dest.entryFee_hi) return dest.entryFee_hi;
  if (lang === 'hi') {
    const raw = dest.entryFee || dest.entry_permit;
    if (raw && raw.toLowerCase().includes('free')) {
      return 'निःशुल्क सार्वजनिक प्रवेश';
    }
  }
  return dest.entryFee || dest.entry_permit || 'Free Entry / Public Access';
}

/**
 * Returns the localized opening hours.
 */
export function getLocalizedDestinationHours(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as' && dest.openingHours_as) return dest.openingHours_as;
  if (lang === 'hi' && dest.openingHours_hi) return dest.openingHours_hi;
  return dest.openingHours || '05:00 - 18:30 daily';
}

/**
 * Returns the localized access notes or transit logistics.
 */
export function getLocalizedDestinationAccessNotes(
  dest: BeautyDestination | null | undefined,
  lang: Language
): string {
  if (!dest) return '';
  if (lang === 'as' && dest.accessNotes_as) return dest.accessNotes_as;
  if (lang === 'hi' && dest.accessNotes_hi) return dest.accessNotes_hi;
  return dest.accessNotes || dest.nearest_transit || '';
}

/**
 * Returns the localized description for a directory listing record.
 */
export function getLocalizedDirectoryDescription(
  item: DirectoryItem | null | undefined,
  lang: Language
): string {
  if (!item) return '';
  if (lang === 'as' && item.description_as) {
    return item.description_as;
  }
  if (lang === 'hi' && item.description_hi) {
    return item.description_hi;
  }
  return item.description || '';
}

/**
 * Returns the localized name for a directory listing record.
 */
export function getLocalizedDirectoryName(
  item: DirectoryItem | null | undefined,
  lang: Language
): string {
  if (!item) return '';
  if (lang === 'as' && item.name_as) {
    return item.name_as;
  }
  if (lang === 'hi' && (item as any).name_hi) {
    return (item as any).name_hi;
  }
  return item.name || '';
}
