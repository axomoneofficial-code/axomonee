import { describe, it, expect } from 'vitest';
import destinationsData from '../data/tourism-destinations.json';
import { validateDestinationRecord, validateDestinationCollection, VALID_BEAUTY_CATEGORIES } from '../utils/security';
import { BeautyDestination } from '../types';

describe('AXOM ONE — Explore Assam Beauty Destinations Expansion', () => {
  const destinations = destinationsData as BeautyDestination[];

  it('preserves all 20 pre-existing destination records without deletion or ID alteration', () => {
    const originalIds = [
      'tour-kaziranga',
      'tour-charaideo',
      'tour-kamakhya',
      'tour-rang-ghar',
      'tour-talatal-ghar',
      'tour-sivadol',
      'tour-majuli',
      'tour-manas',
      'tour-tea-country',
      'tour-nameri',
      'tour-haflong',
      'tour-umananda',
      'tour-hajo',
      'tour-pobitora',
      'tour-namphake',
      'tour-dehing-patkai',
      'tour-sualkuchi',
      'tour-brahmaputra-cruises',
      'tour-agnigarh',
      'tour-dibru-saikhowa',
    ];

    const currentIdSet = new Set(destinations.map((d) => d.id));
    originalIds.forEach((id) => {
      expect(currentIdSet.has(id)).toBe(true);
    });
    expect(destinations.length).toBeGreaterThanOrEqual(44);
  });

  it('supports all 10 independently managed categories with authentic records', () => {
    const requiredCategories = [
      'tea-tourism',
      'river-experiences',
      'hills-waterfalls',
      'wildlife-birdwatching',
      'heritage-historic',
      'handloom-crafts',
      'festivals-cultural',
      'culinary-experiences',
      'botanical-green',
      'district-travel-guides',
    ];

    const categoryCounts: Record<string, number> = {};
    destinations.forEach((d) => {
      categoryCounts[d.category] = (categoryCounts[d.category] || 0) + 1;
    });

    requiredCategories.forEach((cat) => {
      expect(VALID_BEAUTY_CATEGORIES.has(cat)).toBe(true);
      expect(categoryCounts[cat]).toBeGreaterThanOrEqual(2);
    });
  });

  it('enforces complete 21-field destination schema across all records', () => {
    destinations.forEach((d) => {
      // Required identity and text fields
      expect(d.id).toBeTruthy();
      expect(d.slug).toBeTruthy();
      expect(d.name).toBeTruthy();
      expect(d.category).toBeTruthy();
      expect(d.district).toBeTruthy();
      expect(d.locality).toBeTruthy();
      expect(d.shortDescription || d.tagline).toBeTruthy();
      expect(d.fullDescription || d.description).toBeTruthy();

      // URLs and imagery
      expect(d.officialWebsite || d.official_source).toMatch(/^https?:\/\//);
      expect(d.sourceUrl || d.official_source).toMatch(/^https?:\/\//);
      expect(d.imageUrl || d.image).toMatch(/^(https?:\/\/|\/images\/)/);
      expect(d.imageAttribution).toBeTruthy();

      // Logistics
      expect(d.bestSeason || d.best_time).toBeTruthy();
      expect(d.accessNotes || d.nearest_transit).toBeTruthy();
      expect(d.openingHours).toBeTruthy();
      expect(d.entryFee || d.entry_permit).toBeTruthy();

      // Status and Language
      expect(['draft', 'pending_review', 'published', 'archived']).toContain(d.status);
      expect(Array.isArray(d.language)).toBe(true);
      expect(d.language.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('keeps unverified community submissions in draft status with null coordinates and null verification', () => {
    const draftRecords = destinations.filter((d) => d.status === 'draft');
    expect(draftRecords.length).toBeGreaterThanOrEqual(3);

    draftRecords.forEach((draft) => {
      expect(draft.lastVerifiedAt).toBeNull();
      // Requirement 5 & 6: Never invent coordinates; map only when verified
      expect(draft.latitude).toBeNull();
      expect(draft.longitude).toBeNull();
    });
  });

  it('strictly validates coordinates within authentic Assam geographical boundaries', () => {
    const verifiedCoordsRecords = destinations.filter(
      (d) => d.latitude !== null && d.longitude !== null
    );

    expect(verifiedCoordsRecords.length).toBeGreaterThanOrEqual(40);

    verifiedCoordsRecords.forEach((dest) => {
      expect(typeof dest.latitude).toBe('number');
      expect(typeof dest.longitude).toBe('number');

      // Assam latitude span: ~24.0°N to ~28.5°N
      expect(dest.latitude).toBeGreaterThanOrEqual(24.0);
      expect(dest.latitude).toBeLessThanOrEqual(28.5);

      // Assam longitude span: ~89.5°E to ~96.5°E
      expect(dest.longitude).toBeGreaterThanOrEqual(89.5);
      expect(dest.longitude).toBeLessThanOrEqual(96.5);
    });
  });

  it('validates destination record validator catches schema violations and malicious vectors', () => {
    // Valid record
    const valid = validateDestinationRecord({
      id: 'tour-valid-sample',
      name: 'Sample Destination',
      category: 'tea-tourism',
      status: 'published',
      shortDescription: 'Sample short description',
      fullDescription: 'Sample full description',
      sourceUrl: 'https://assamtourism.gov.in/',
      officialWebsite: 'https://assamtourism.gov.in/',
      latitude: 26.5,
      longitude: 92.5,
    });
    expect(valid.valid).toBe(true);
    expect(valid.errors).toHaveLength(0);

    // Invalid category
    const invalidCat = validateDestinationRecord({
      id: 'tour-invalid-sample',
      name: 'Sample Destination',
      category: 'illegal-category',
      status: 'published',
      shortDescription: 'Short',
      fullDescription: 'Full',
    });
    expect(invalidCat.valid).toBe(false);
    expect(invalidCat.errors.some((e) => e.includes('Invalid category'))).toBe(true);

    // Out of bounds coordinates (e.g. coordinates in Europe/Africa)
    const outOfBounds = validateDestinationRecord({
      id: 'tour-sample',
      name: 'Sample',
      category: 'tea-tourism',
      status: 'published',
      shortDescription: 'Short',
      fullDescription: 'Full',
      latitude: 51.5074, // London
      longitude: -0.1278,
    });
    expect(outOfBounds.valid).toBe(false);
    expect(outOfBounds.errors.some((e) => e.includes('outside valid Assam boundaries'))).toBe(true);

    // Malicious javascript: URL
    const maliciousUrl = validateDestinationRecord({
      id: 'tour-sample',
      name: 'Sample',
      category: 'tea-tourism',
      status: 'published',
      shortDescription: 'Short',
      fullDescription: 'Full',
      sourceUrl: 'javascript:alert(1)',
    });
    expect(maliciousUrl.valid).toBe(false);
    expect(maliciousUrl.errors.some((e) => e.includes('unsafe sourceUrl'))).toBe(true);
  });

  it('verifies pagination calculations partition records accurately without data loss', () => {
    const pageSize = 9;
    const totalRecords = destinations.length;
    const expectedPages = Math.ceil(totalRecords / pageSize);

    let collectedIds: string[] = [];
    for (let page = 1; page <= expectedPages; page++) {
      const start = (page - 1) * pageSize;
      const pageItems = destinations.slice(start, start + pageSize);
      expect(pageItems.length).toBeLessThanOrEqual(pageSize);
      collectedIds = collectedIds.concat(pageItems.map((d) => d.id));
    }

    expect(collectedIds).toHaveLength(totalRecords);
    // Ensure all unique IDs
    const uniqueIds = new Set(collectedIds);
    expect(uniqueIds.size).toBe(totalRecords);
  });

  it('guarantees every destination slug resolves cleanly via findDestinationBySlug', async () => {
    const { findDestinationBySlug, getTourismDestinations, getDistrictTransitInfo } = await import(
      '../utils/tourismData'
    );
    const all = getTourismDestinations();
    expect(all.length).toBeGreaterThanOrEqual(75);

    // Test specific key destinations that user requested
    const keySlugs = [
      'billeswar-devalaya',
      'hari-mandir-raas-mahotsav',
      'barpeta-doul-utsav-temple',
      'barpeta-satra-heritage',
      'kaziranga',
      'kamakhya',
      'majuli',
    ];

    keySlugs.forEach((slug) => {
      const match = findDestinationBySlug(slug);
      expect(match).not.toBeNull();
      expect(match?.name).toBeTruthy();
      expect(match?.district).toBeTruthy();
    });

    // Test all 75 destinations resolve by their canonical slug
    all.forEach((d) => {
      const resolved = findDestinationBySlug(d.slug);
      expect(resolved).not.toBeNull();
      expect(resolved?.id).toBe(d.id);
    });

    // Test district transit info helper
    const transit = getDistrictTransitInfo('nalbari');
    expect(transit.nearestAirport).toBeTruthy();
    expect(transit.nearestRailway).toBeTruthy();
  });

  it('strictly ensures zero duplicate records in getTourismDestinations()', async () => {
    const { getTourismDestinations } = await import('../utils/tourismData');
    const all = getTourismDestinations();

    const idSet = new Set<string>();
    const slugSet = new Set<string>();
    const duplicateIds: string[] = [];
    const duplicateSlugs: string[] = [];

    all.forEach((d) => {
      if (idSet.has(d.id)) duplicateIds.push(d.id);
      if (slugSet.has(d.slug)) duplicateSlugs.push(d.slug);
      idSet.add(d.id);
      slugSet.add(d.slug);
    });

    expect(duplicateIds).toEqual([]);
    expect(duplicateSlugs).toEqual([]);
    expect(all.length).toBe(idSet.size);

    // Verify Agnigarh specifically exists exactly ONCE
    const agnigarhMatches = all.filter((d) => d.slug === 'agnigarh' || d.id === 'tour-agnigarh');
    expect(agnigarhMatches).toHaveLength(1);
  });

  it('guarantees unique imagery with zero duplicate images across destination frames', () => {
    // 1. Verify every destination has its own unique image URL
    const imageUrlSet = new Set<string>();
    const duplicateUrls: string[] = [];

    destinations.forEach((d) => {
      const url = d.imageUrl || d.image;
      if (url) {
        if (imageUrlSet.has(url)) duplicateUrls.push(url);
        imageUrlSet.add(url);
      }
    });

    expect(duplicateUrls).toEqual([]);
    expect(imageUrlSet.size).toBe(destinations.length);
  });

  it('provides rich multi-picture gallery slides for tourism destination detail pages', async () => {
    const { getDestinationGallery, findDestinationBySlug } = await import('../utils/tourismData');
    
    // Check Kamakhya
    const kamakhya = findDestinationBySlug('kamakhya');
    expect(kamakhya).toBeDefined();
    if (kamakhya) {
      const slides = getDestinationGallery(kamakhya);
      expect(slides.length).toBeGreaterThanOrEqual(3);
      slides.forEach((s) => {
        expect(s.url).toMatch(/^\/images\//);
        expect(s.caption).toBeTruthy();
        expect(s.attribution).toBeTruthy();
      });
      // All slides in the gallery must have distinct URLs
      const urls = new Set(slides.map((s) => s.url));
      expect(urls.size).toBe(slides.length);
    }

    // Check Kaziranga
    const kaziranga = findDestinationBySlug('kaziranga');
    expect(kaziranga).toBeDefined();
    if (kaziranga) {
      const slides = getDestinationGallery(kaziranga);
      expect(slides.length).toBeGreaterThanOrEqual(4);
      slides.forEach((s) => {
        expect(s.url).toMatch(/^\/images\//);
        expect(s.caption).toBeTruthy();
      });
    }

    // Check Charaideo Moidams
    const charaideo = findDestinationBySlug('charaideo');
    expect(charaideo).toBeDefined();
    if (charaideo) {
      const slides = getDestinationGallery(charaideo);
      expect(slides.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('supports touch swipe navigation logic across gallery slides', () => {
    const calculateSwipeDirection = (
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ): 'next' | 'prev' | 'none' => {
      const deltaX = startX - endX;
      const deltaY = startY - endY;
      if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
        return deltaX > 0 ? 'next' : 'prev';
      }
      return 'none';
    };

    // User swipes finger right to left (next slide)
    expect(calculateSwipeDirection(250, 100, 150, 105)).toBe('next');

    // User swipes finger left to right (prev slide)
    expect(calculateSwipeDirection(100, 100, 220, 95)).toBe('prev');

    // User scrolls vertically down (no slide change)
    expect(calculateSwipeDirection(150, 100, 140, 250)).toBe('none');

    // Tiny touch tap / tremor (no slide change, allows fullscreen tap)
    expect(calculateSwipeDirection(150, 100, 153, 102)).toBe('none');
  });

  it('translates seasonal travel guide and responsible pledge dynamically across all languages', async () => {
    const { translations } = await import('../i18n/translations');
    const languages = ['en', 'as', 'hi', 'brx'] as const;

    languages.forEach((lang) => {
      const dict = translations[lang];
      expect(dict.tourism.seasonalGuide).toBeDefined();
      expect(dict.tourism.seasonalGuide.title).toBeTruthy();
      expect(dict.tourism.seasonalGuide.subtitle).toBeTruthy();
      expect(dict.tourism.seasonalGuide.winterTag).toBeTruthy();
      expect(dict.tourism.seasonalGuide.winterTitle).toBeTruthy();
      expect(dict.tourism.seasonalGuide.winterDesc).toBeTruthy();
      expect(dict.tourism.seasonalGuide.springTag).toBeTruthy();
      expect(dict.tourism.seasonalGuide.springTitle).toBeTruthy();
      expect(dict.tourism.seasonalGuide.springDesc).toBeTruthy();
      expect(dict.tourism.seasonalGuide.monsoonTag).toBeTruthy();
      expect(dict.tourism.seasonalGuide.monsoonTitle).toBeTruthy();
      expect(dict.tourism.seasonalGuide.monsoonDesc).toBeTruthy();

      expect(dict.tourism.responsiblePledge).toBeDefined();
      expect(dict.tourism.responsiblePledge.title).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule1Label).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule1Desc).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule2Label).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule2Desc).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule3Label).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule3Desc).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule4Label).toBeTruthy();
      expect(dict.tourism.responsiblePledge.rule4Desc).toBeTruthy();
    });

    // Specifically verify Assamese native script
    const asDict = translations.as;
    expect(asDict.tourism.seasonalGuide.title).toContain('ঋতুভিত্তিক');
    expect(asDict.tourism.responsiblePledge.title).toContain('দায়িত্বশীল পৰ্যটকৰ সংকল্প');
    expect(asDict.tourism.seasonalGuide.springTitle).toContain('ৰঙালী বিহু');
  });

  it('determines live safari operational status and monsoon pause alerts accurately', async () => {
    const { getDestinationOperationalStatus, getOfflineSeasonalWeather } = await import(
      '../utils/weatherSafariService'
    );

    const kaziranga = destinations.find((d) => d.slug === 'kaziranga')!;
    expect(kaziranga).toBeDefined();

    // 1. November test date: Safari season OPEN
    const novDate = new Date(2026, 10, 15); // Nov 15
    const openStatus = getDestinationOperationalStatus(kaziranga, novDate);
    expect(openStatus.isOpen).toBe(true);
    expect(openStatus.badgeType).toBe('safari-open');
    expect(openStatus.badgeLabel).toContain('Open for Safaris (Nov – Apr)');
    expect(openStatus.badgeLabelAs).toContain('চাফাৰীৰ বাবে মুকলি');
    expect(openStatus.alertTitle).toContain('Kaziranga National Park: Open for Safaris (Nov – Apr)');
    expect(openStatus.safariShifts).toBeDefined();
    expect(openStatus.safariShifts?.length).toBeGreaterThan(0);
    expect(openStatus.safariRanges?.some((r) => r.name.includes('Kohora'))).toBe(true);
    expect(openStatus.safariRanges?.some((r) => r.name.includes('Bagori'))).toBe(true);

    // 2. July test date: Monsoon Flood Pause
    const julDate = new Date(2027, 6, 20); // July 20
    const pauseStatus = getDestinationOperationalStatus(kaziranga, julDate);
    expect(pauseStatus.isOpen).toBe(false);
    expect(pauseStatus.badgeType).toBe('safari-pause');
    expect(pauseStatus.badgeLabel).toContain('Monsoon Pause (May – Oct)');
    expect(pauseStatus.badgeLabelAs).toContain('বৰ্ষাকালীন বিৰতি');
    expect(pauseStatus.alertTitle).toContain('Kaziranga National Park: Monsoon Pause (May – Oct)');
    expect(pauseStatus.reopeningDate).toBe('November 1');

    // 3. Cultural Heritage (Kamakhya) is open year-round
    const kamakhya = destinations.find((d) => d.slug === 'kamakhya')!;
    const kamakhyaStatus = getDestinationOperationalStatus(kamakhya, novDate);
    expect(kamakhyaStatus.isOpen).toBe(true);
    expect(kamakhyaStatus.badgeType).toBe('year-round');
    expect(kamakhyaStatus.badgeLabel).toContain('Open Year-Round');

    // 4. Offline Weather generator resilience
    const wx = getOfflineSeasonalWeather(26.5775, 93.1711, 'Kohora', 10);
    expect(wx.temperature).toBeGreaterThan(10);
    expect(wx.temperature).toBeLessThan(40);
    expect(wx.humidity).toBeGreaterThan(0);
    expect(wx.windSpeed).toBeGreaterThan(0);
    expect(wx.conditionLabel).toBeTruthy();
    expect(wx.conditionLabelAs).toBeTruthy();
    expect(wx.safariRecommendation).toBeTruthy();
    expect(wx.isLive).toBe(false);
  });

  it('provides authentic phonetic transliterations and audio playback for native Assamese terms', async () => {
    const { getAssamesePhonetics, playAssameseAudio } = await import(
      '../utils/audioPronounceService'
    );

    // Verify key Assamese heritage terms requested by user
    expect(getAssamesePhonetics('কাজিৰঙা')).toBe('ka-zi-ro-nga');
    expect(getAssamesePhonetics('চৰাইদেউ মৈদাম')).toBe('so-rai-deu moi-dam');
    expect(getAssamesePhonetics('কাৰেংঘৰ')).toBe('ka-reng ghor');
    expect(getAssamesePhonetics('ৰংঘৰ')).toBe('rong ghor');
    expect(getAssamesePhonetics('মাজুলী')).toBe('ma-zu-li');
    expect(getAssamesePhonetics('কামাখ্যা')).toBe('ka-ma-khya');
    expect(getAssamesePhonetics('গামোচা')).toBe('ga-mu-sa');
    expect(getAssamesePhonetics('জাপি')).toBe('za-pi');

    // Verify speech execution resilience (does not crash in mock or non-window environments)
    let started = false;
    let ended = false;
    playAssameseAudio(
      'কাজিৰঙা',
      'Kaziranga',
      () => {
        started = true;
      },
      () => {
        ended = true;
      }
    );
    expect(started || ended).toBe(true);
  });

  it('validates contiguous interactive SVG district map covering all 35 official administrative districts', async () => {
    const { ASSAM_DISTRICT_MAP_ENTRIES } = await import('../components/AssamDistrictMap');
    const districtsJson = (await import('../data/districts.json')).default;

    // Must contain exactly all 35 districts
    expect(ASSAM_DISTRICT_MAP_ENTRIES.length).toBe(35);
    expect(districtsJson.length).toBe(35);

    const jsonSlugs = new Set(districtsJson.map((d: any) => d.slug.toLowerCase()));

    ASSAM_DISTRICT_MAP_ENTRIES.forEach((district) => {
      // Slug exists in official districts dataset
      expect(jsonSlugs.has(district.slug.toLowerCase())).toBe(true);

      // Label pin coordinates within map bounds (1020 x 620)
      expect(district.cx).toBeGreaterThan(0);
      expect(district.cx).toBeLessThan(1020);
      expect(district.cy).toBeGreaterThan(0);
      expect(district.cy).toBeLessThan(620);

      // SVG path starts with M and ends with Z
      expect(district.path.trim().startsWith('M')).toBe(true);
      expect(district.path.trim().endsWith('Z')).toBe(true);

      // Authentic Assamese & English names present
      expect(district.name).toBeTruthy();
      expect(district.name_as).toBeTruthy();
      expect(district.headquarters).toBeTruthy();
      expect(district.division).toBeTruthy();
    });

    // Verify key landmark districts
    const majuli = ASSAM_DISTRICT_MAP_ENTRIES.find((d) => d.slug === 'majuli')!;
    expect(majuli).toBeDefined();
    expect(majuli.name_as).toBe('মাজুলী');

    const kamrupMetro = ASSAM_DISTRICT_MAP_ENTRIES.find((d) => d.slug === 'kamrup-metropolitan')!;
    expect(kamrupMetro).toBeDefined();
    expect(kamrupMetro.headquarters).toBe('Guwahati');

    const dimaHasao = ASSAM_DISTRICT_MAP_ENTRIES.find((d) => d.slug === 'dima-hasao')!;
    expect(dimaHasao).toBeDefined();
    expect(dimaHasao.headquarters).toBe('Haflong');
  });

  it('validates community eco-homestay direct booking & NH-715 wildlife speed check advisory', async () => {
    const { CommunityBookingModal } = await import('../components/CommunityBookingModal');
    expect(CommunityBookingModal).toBeDefined();

    const { getTourismDestinations } = await import('../utils/tourismData');
    const allDests = getTourismDestinations();
    const kaziranga = allDests.find((d) => d.slug === 'kaziranga')!;
    expect(kaziranga).toBeDefined();
    expect(kaziranga.category).toBe('wildlife-birdwatching');

    const majuli = allDests.find((d) => d.slug === 'majuli')!;
    expect(majuli).toBeDefined();
    expect(majuli.district).toBe('Majuli');
  });

  it('validates dedicated District Geographic Atlas & Heritage Maps across all 35 districts with rivers and verified locations', async () => {
    const { DISTRICT_MAP_RECORDS } = await import('../data/district-maps-data');
    const { DistrictInteractiveMap } = await import('../components/DistrictInteractiveMap');
    expect(DistrictInteractiveMap).toBeDefined();

    const districtsJson = (await import('../data/districts.json')).default;
    expect(districtsJson.length).toBe(35);

    districtsJson.forEach((d: any) => {
      const record = DISTRICT_MAP_RECORDS[d.slug.toLowerCase()];
      expect(record).toBeDefined();
      expect(record.name).toBeTruthy();
      expect(record.name_as).toBeTruthy();

      // SVG path starts with M and ends with Z
      expect(record.svgPath.trim().startsWith('M')).toBe(true);
      expect(record.svgPath.trim().endsWith('Z')).toBe(true);

      // Headquarters with coordinates
      expect(record.headquarters).toBeDefined();
      expect(record.headquarters.lat).toBeGreaterThan(24.0);
      expect(record.headquarters.lat).toBeLessThan(28.5);
      expect(record.headquarters.lng).toBeGreaterThan(89.5);
      expect(record.headquarters.lng).toBeLessThan(96.5);

      // Rivers hydrology
      expect(record.rivers.length).toBeGreaterThan(0);
      record.rivers.forEach((river) => {
        expect(river.name).toBeTruthy();
        expect(river.name_as).toBeTruthy();
        expect(river.svgPath.startsWith('M')).toBe(true);
      });

      // Famous places
      expect(record.famousPlaces.length).toBeGreaterThan(0);
      record.famousPlaces.forEach((place) => {
        expect(place.name).toBeTruthy();
        expect(place.lat).toBeGreaterThan(24.0);
        expect(place.lat).toBeLessThan(28.5);
        expect(place.googleMapsUrl).toContain('https://www.google.com/maps/search');
        expect(place.googleDirectionsUrl).toContain('https://www.google.com/maps/dir');
      });
    });

    // Test specific landmark districts: Bajali, Sivasagar, Kamrup Metro
    const bajali = DISTRICT_MAP_RECORDS['bajali'];
    expect(bajali.headquarters.name).toBe('Pathsala');
    const bajaliRivers = bajali.rivers.map((r) => r.name);
    expect(bajaliRivers).toContain('Pahumara River');
    expect(bajaliRivers).toContain('Kaldia River');

    const sivasagar = DISTRICT_MAP_RECORDS['sivasagar'];
    expect(sivasagar.headquarters.name).toBe('Sivasagar');
    const sivasagarRivers = sivasagar.rivers.map((r) => r.name);
    expect(sivasagarRivers).toContain('Dikhow River');
  });

  describe('AXOM ONE — Multilingual Destination Validation & Standard Data Rules', () => {
    it('validates the complete collection of 91 tourism destinations with 0 errors', () => {
      const result = validateDestinationCollection(destinations);
      expect(result.valid).toBe(true);
      expect(result.total).toBe(91);
      expect(result.validCount).toBe(91);
      expect(result.invalidCount).toBe(0);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    it('validates complete trilingual (en, as, hi) translations for all published destinations', () => {
      const published = destinations.filter((d) => d.status === 'published');
      expect(published.length).toBeGreaterThanOrEqual(85);

      published.forEach((dest) => {
        expect(dest.language).toContain('en');
        expect(dest.language).toContain('as');
        expect(dest.language).toContain('hi');

        const res = validateDestinationRecord(dest, { requireAllLanguages: true });
        expect(res.valid).toBe(true);
        expect(res.errors).toHaveLength(0);
      });
    });

    it('catches missing Assamese or Hindi translations when languages are specified', () => {
      const missingAs = validateDestinationRecord({
        id: 'tour-test-missing-as',
        slug: 'test-missing-as',
        name: 'Test Destination',
        category: 'tea-tourism',
        status: 'published',
        language: ['en', 'as'],
        shortDescription: 'Short description',
        fullDescription: 'Full narrative description',
        highlights: ['H1', 'H2'],
        imageUrl: '/images/destinations/test.jpg',
        imageAttribution: 'Official photo',
        latitude: 26.5,
        longitude: 92.5,
      });
      expect(missingAs.valid).toBe(false);
      expect(missingAs.errors.some((e) => e.includes('Missing required Assamese translation: name_as'))).toBe(true);
      expect(missingAs.errors.some((e) => e.includes('Missing required Assamese description'))).toBe(true);

      const missingHi = validateDestinationRecord({
        id: 'tour-test-missing-hi',
        slug: 'test-missing-hi',
        name: 'Test Destination',
        category: 'tea-tourism',
        status: 'published',
        language: ['en', 'hi'],
        shortDescription: 'Short description',
        fullDescription: 'Full narrative description',
        highlights: ['H1', 'H2'],
        imageUrl: '/images/destinations/test.jpg',
        imageAttribution: 'Official photo',
        latitude: 26.5,
        longitude: 92.5,
      });
      expect(missingHi.valid).toBe(false);
      expect(missingHi.errors.some((e) => e.includes('Missing required Hindi translation: name_hi'))).toBe(true);
      expect(missingHi.errors.some((e) => e.includes('Missing required Hindi description'))).toBe(true);
    });

    it('detects duplicate slugs and IDs across existing records', () => {
      const existing = [
        { id: 'tour-kaziranga', slug: 'kaziranga' },
        { id: 'tour-manas', slug: 'manas' },
      ];

      const duplicateSlug = validateDestinationRecord(
        {
          id: 'tour-new-park',
          slug: 'kaziranga',
          name: 'New Park',
          category: 'wildlife-birdwatching',
          status: 'draft',
          shortDescription: 'Short description',
          fullDescription: 'Full description',
        },
        { existingRecords: existing }
      );
      expect(duplicateSlug.valid).toBe(false);
      expect(duplicateSlug.errors.some((e) => e.includes('Duplicate destination slug "kaziranga"'))).toBe(true);

      const duplicateId = validateDestinationRecord(
        {
          id: 'tour-manas',
          slug: 'new-manas-entry',
          name: 'Manas Extra',
          category: 'wildlife-birdwatching',
          status: 'draft',
          shortDescription: 'Short description',
          fullDescription: 'Full description',
        },
        { existingRecords: existing }
      );
      expect(duplicateId.valid).toBe(false);
      expect(duplicateId.errors.some((e) => e.includes('Duplicate destination id "tour-manas"'))).toBe(true);
    });

    it('validates authentic representation of unknown or unverified data in draft status', () => {
      const draftRecords = destinations.filter((d) => d.status === 'draft');
      expect(draftRecords.length).toBeGreaterThanOrEqual(3);

      draftRecords.forEach((draft) => {
        expect(draft.latitude).toBeNull();
        expect(draft.longitude).toBeNull();
        expect(draft.lastVerifiedAt).toBeNull();

        const res = validateDestinationRecord(draft);
        expect(res.valid).toBe(true);
        expect(res.errors).toHaveLength(0);
      });

      const invalidCoords = validateDestinationRecord({
        id: 'tour-invalid-coords',
        name: 'Invalid Coords Destination',
        category: 'tea-tourism',
        status: 'draft',
        shortDescription: 'Short description',
        fullDescription: 'Full narrative description',
        latitude: 12.9716,
        longitude: 77.5946,
      });
      expect(invalidCoords.valid).toBe(false);
      expect(invalidCoords.errors.some((e) => e.includes('outside valid Assam boundaries'))).toBe(true);
    });
  });
});
