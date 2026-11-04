export type Language = 'en' | 'as' | 'hi' | 'brx';

export interface TranslationDictionary {
  nav: {
    home: string;
    directory: string;
    explore: string;
    districts: string;
    services: string;
    businesses: string;
    events: string;
    tourism: string;
    opportunities: string;
    community: string;
    about: string;
    admin: string;
    selectLanguage: string;
    servicesMenu: string;
    moreMenu: string;
  };
  hero: {
    welcome: string;
    proudBadge: string;
    subtitleEn: string;
    subtitleAs: string;
    searchPlaceholder: string;
    chooseDistrict: string;
    allDistricts: string;
    searchBtn: string;
  };
  categories: {
    localBusinessTitle: string;
    localBusinessSub: string;
    servicesTitle: string;
    servicesSub: string;
    foodTitle: string;
    foodSub: string;
    tourismTitle: string;
    tourismSub: string;
    opportunitiesTitle: string;
    opportunitiesSub: string;
    eventsTitle: string;
    eventsSub: string;
    communityTitle: string;
    communitySub: string;
  };
  featured: {
    title: string;
    subtitle: string;
    viewAll: string;
    openNow: string;
    closed: string;
  };
  promos: {
    exploreBeautyTitle: string;
    exploreBeautyDesc: string;
    exploreBeautyBtn: string;
    buildFutureTitle: string;
    buildFutureDesc: string;
    buildFutureBtn: string;
    shareCommunityTitle: string;
    shareCommunityDesc: string;
    shareCommunityBtn: string;
  };
  tourism: {
    heroPill: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    searchPlaceholder: string;
    allDistrictsOption: string;
    resetFilters: string;
    showingCount: string;
    inTheme: string;
    noDestinationsFound: string;
    tryAdjustingFilters: string;
    viewDetails: string;
    highlightsTitle: string;
    bestSeason: string;
    transitHub: string;
    permitGuide: string;
    shareDestination: string;
    linkCopied: string;
    officialPortal: string;
    page: string;
    of: string;
    nextPage: string;
    prevPage: string;
    verifiedBadge: string;
    draftBadge: string;
    pendingReviewBadge: string;
    coordsPending: string;
    officialSource: string;
    attributionLabel: string;
    adminMode: string;
    visitorMode: string;
    approveBtn: string;
    verifyBtn: string;
    archiveBtn: string;
    categories: {
      all: string;
      teaTourism: string;
      riverExperiences: string;
      hillsWaterfalls: string;
      wildlifeBirdwatching: string;
      heritageHistoric: string;
      handloomCrafts: string;
      festivalsCultural: string;
      culinaryExperiences: string;
      botanicalGreen: string;
      districtTravelGuides: string;
    };
    themes: {
      all: string;
      wildlife: string;
      charaideo: string;
      history: string;
      temples: string;
      satras: string;
      teaGolf: string;
      rural: string;
      river: string;
      hills: string;
    };
    seasonalGuide: {
      title: string;
      subtitle: string;
      winterTag: string;
      winterTitle: string;
      winterDesc: string;
      springTag: string;
      springTitle: string;
      springDesc: string;
      monsoonTag: string;
      monsoonTitle: string;
      monsoonDesc: string;
    };
    responsiblePledge: {
      title: string;
      rule1Label: string;
      rule1Desc: string;
      rule2Label: string;
      rule2Desc: string;
      rule3Label: string;
      rule3Desc: string;
      rule4Label: string;
      rule4Desc: string;
    };
  };
  footer: {
    tagline: string;
    mission: string;
    quickLinks: string;
    more: string;
    legal: string;
    stayConnected: string;
    subscribePlaceholder: string;
    subscribedMsg: string;
    subscribeBtn: string;
    privacy: string;
    terms: string;
    contact: string;
    aboutUs: string;
    rightsReserved: string;
    madeWithLove: string;
  };
  districts: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    statDistricts: string;
    statAttractions: string;
    statRivers: string;
    statDivisions: string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    districtSingular: string;
    districtPlural: string;
    searchKbdHint: string;
    clearSearch: string;
    quickDirectLinks: string;
    moreBelow: string;
    quickDivisionFilter: string;
    allRegions: string;
    upperAssam: string;
    lowerAssam: string;
    bodoland: string;
    northAssam: string;
    centralAssam: string;
    hillsKarbi: string;
    barakValley: string;
    scrollLeft: string;
    scrollRight: string;
    displaying: string;
    showingOfTotal: string;
    resetFilters: string;
    noDistrictsFound: string;
    tryDifferentSearch: string;
    headquarters: string;
    attractions: string;
    institutions: string;
    exploreDistrict: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      directory: 'Directory',
      explore: 'Explore',
      districts: 'Districts',
      services: 'Services',
      businesses: 'Businesses',
      events: 'Events',
      tourism: 'Tourism',
      opportunities: 'Opportunities',
      community: 'Community',
      about: 'About',
      admin: 'Admin Desk',
      selectLanguage: 'Select Language',
      servicesMenu: 'Services & Local',
      moreMenu: 'More',
    },
    hero: {
      welcome: 'Welcome To',
      proudBadge: 'Proud To Be Assamese',
      subtitleEn: 'Discover Local. Connect Assam.',
      subtitleAs: 'আমাৰ অসম । আপোনাৰ প্লেটফৰ্ম',
      searchPlaceholder: 'Search businesses, services, tourism, heritage...',
      chooseDistrict: 'Choose District',
      allDistricts: 'All Assam Districts',
      searchBtn: 'Search',
    },
    categories: {
      localBusinessTitle: 'Local Business',
      localBusinessSub: 'Shops • Services • Stores',
      servicesTitle: 'Services',
      servicesSub: 'Home • Professional • Repair',
      foodTitle: 'Food & Dining',
      foodSub: 'Local Cuisine • Cafes',
      tourismTitle: 'Tourism',
      tourismSub: 'Places • Homestays • Culture',
      opportunitiesTitle: 'Opportunities',
      opportunitiesSub: 'Jobs • Internships • Education',
      eventsTitle: 'Events',
      eventsSub: 'Festivals • Programs • Meetups',
      communityTitle: 'Community',
      communitySub: 'Notices • Help • Updates',
    },
    featured: {
      title: 'Featured in Our District',
      subtitle: 'Discover trusted establishments and experiences near you',
      viewAll: 'View All',
      openNow: 'Open',
      closed: 'Closed',
    },
    promos: {
      exploreBeautyTitle: "Explore\nAssam's Beauty",
      exploreBeautyDesc: 'From tea gardens to river islands, explore hidden gems.',
      exploreBeautyBtn: 'Explore Now',
      buildFutureTitle: 'Assam Official\nDirectory',
      buildFutureDesc: 'Explore universities, heritage monuments, sacred temples & public services across 35 districts.',
      buildFutureBtn: 'Explore Directory',
      shareCommunityTitle: 'Share with\nYour Community',
      shareCommunityDesc: 'Notice, event, help or a local update. Keep Assam connected.',
      shareCommunityBtn: 'Post Now',
    },
    tourism: {
      heroPill: 'Assam Tourism • সৌন্দৰ্য্যমণ্ডিত অসম',
      heroTitle: "Explore Assam's Living Beauty",
      heroSubtitle: 'From the rhinos of Kaziranga to royal Charaideo Moidams, Majuli satras to Brahmaputra sunsets',
      heroDesc: "Discover UNESCO World Heritage national parks, ancient 600-year Ahom royal monuments, the world's largest river island, colonial heritage tea estates, and sacred river shrines across the land of the Red River and Blue Hills.",
      searchPlaceholder: 'Search by landmark, wildlife, temple, river island, or heritage site...',
      allDistrictsOption: 'All Assam Districts (সকলো জিলা)',
      resetFilters: 'Reset Filters',
      showingCount: 'Found',
      inTheme: 'in',
      noDestinationsFound: 'No destinations found matching your criteria',
      tryAdjustingFilters: 'Try selecting another district or searching with a different name.',
      viewDetails: 'View Details & Guide',
      highlightsTitle: 'Highlights & Experiences',
      bestSeason: 'Best Season to Visit',
      transitHub: 'How to Reach',
      permitGuide: 'Tickets & Visitor Permits',
      shareDestination: 'Share with Friends',
      linkCopied: 'Link Copied!',
      officialPortal: 'Official Tourism Portal',
      page: 'Page',
      of: 'of',
      nextPage: 'Next Page',
      prevPage: 'Previous Page',
      verifiedBadge: 'Verified Place',
      draftBadge: 'Community Suggestion',
      pendingReviewBadge: 'Under Verification',
      coordsPending: 'Location mapping in progress',
      officialSource: 'Official Link',
      attributionLabel: 'Photo Credit & License',
      adminMode: 'Editorial View',
      visitorMode: 'Visitor View',
      approveBtn: 'Approve & Publish',
      verifyBtn: 'Verify Now',
      archiveBtn: 'Archive',
      categories: {
        all: 'All Categories',
        teaTourism: 'Tea Gardens & Tea Tourism',
        riverExperiences: 'River Islands & Riverfront Experiences',
        hillsWaterfalls: 'Hills, Lakes, Waterfalls & Viewpoints',
        wildlifeBirdwatching: 'Wildlife Parks, Sanctuaries & Birding',
        heritageHistoric: 'Heritage Landscapes & Historic Destinations',
        handloomCrafts: 'Handloom, Silk Weaving & Cultural Villages',
        festivalsCultural: 'Festivals & Seasonal Cultural Events',
        culinaryExperiences: 'Assamese Food & Culinary Heritage',
        botanicalGreen: 'Botanical Gardens & Green Spaces',
        districtTravelGuides: 'District-Wise Scenic Travel Guides',
      },
      themes: {
        all: 'All Destinations',
        wildlife: 'Wildlife & National Parks',
        charaideo: 'Charaideo UNESCO Heritage',
        history: 'History & Ahom Legacy',
        temples: 'Temples & Spiritual Sites',
        satras: 'Satras & River Islands',
        teaGolf: 'Tea Tourism & Golf',
        rural: 'Rural Charm & Living Culture',
        river: 'Brahmaputra River & Cruises',
        hills: 'Hills & Nature Trails',
      },
      seasonalGuide: {
        title: 'Assam Seasonal Travel & Circuit Guide',
        subtitle: 'Plan your travel when Assam’s nature, wildlife, and festivals are at their most enchanting.',
        winterTag: 'November – April • Peak Wildlife & Heritage',
        winterTitle: 'Safaris, Migratory Birds & River Expeditions',
        winterDesc: 'Kaziranga and Manas national parks are in full safari season. Clear skies, pleasant dry weather (10°C to 25°C), optimal wildlife visibility, golden sunsets on the Brahmaputra, and Majuli’s vibrant Raas Mahotsav (Nov).',
        springTag: 'April – May • Spring & Cultural Bihu',
        springTitle: 'Rongali Bihu, Tea Flush & Orchid Blooms',
        springDesc: 'Assam’s New Year festival (Bohaag Bihu) bursts into life with Dhol, Pepa, and Bihu dancing. Tea gardens erupt with fresh first flush plucking, wild foxtail orchids (Kopou Phool) blossom across village trees.',
        monsoonTag: 'June – September • Monsoon & Spiritual Shrines',
        monsoonTitle: 'Ambubachi Mela & The Mighty River in Full Flow',
        monsoonDesc: 'Millions of pilgrims attend the legendary Ambubachi Mela atop Kamakhya’s Nilachal Hill. The Brahmaputra runs in majestic power, rainforests glisten in deep emerald, and tea tasting thrives.',
      },
      responsiblePledge: {
        title: 'Responsible Traveler’s Pledge for Assam (দায়িত্বশীল পৰ্যটকৰ সংকল্প)',
        rule1Label: 'Protect Wildlife Sanctuary Buffers',
        rule1Desc: 'Maintain mandatory distances from rhinos, elephants, and gibbons. Never play loud music or use flash inside forest reserves.',
        rule2Label: 'Zero Plastic in Sacred Riverways',
        rule2Desc: 'Refuse single-use plastics along the Brahmaputra riverbanks, temple staircases, and island ferries.',
        rule3Label: 'Honor Living Sattras & Communities',
        rule3Desc: 'Wear modest attire when entering historic Neo-Vaishnavite Sattras in Majuli and Barpeta.',
        rule4Label: 'Empower Indigenous Collectives',
        rule4Desc: 'Choose community-managed homestays (Bodo, Mishing, Karbi, Dimasa) and buy certified Golden Muga silk directly from Sualkuchi weavers.',
      },
    },
    footer: {
      tagline: 'Discover Local . Connect Assam.',
      mission: "Assam's all-in-one digital directory platform for local shops, civic repairs, events, and youth opportunities.",
      quickLinks: 'Quick Links',
      more: 'More',
      legal: 'Legal',
      stayConnected: 'Stay Connected',
      subscribePlaceholder: 'Enter your email',
      subscribedMsg: 'Subscribed! ধন্যবাদ',
      subscribeBtn: 'Subscribe',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contact: 'Contact',
      aboutUs: 'About Us',
      rightsReserved: 'All rights reserved.',
      madeWithLove: 'Made with ❤️ for Assam',
    },
    districts: {
      heroBadge: 'ASSAM ADMINISTRATIVE ATLAS • 35 DISTRICTS',
      heroTitle: '35 Districts of Assam',
      heroSubtitle: 'Administrative & Geographic Explorer of Brahmaputra and Barak Valleys',
      heroDesc: 'Discover certified attractions, public institutions, heritage sites, and authentic local services across all 35 administrative districts of Assam.',
      statDistricts: 'Administrative Districts',
      statAttractions: 'Heritage Places',
      statRivers: 'Rivers & Basins',
      statDivisions: 'Divisions',
      searchPlaceholder: 'Search by district name or headquarters (e.g. Kamrup, Dibrugarh, Jorhat)...',
      searchAriaLabel: 'Search districts',
      districtSingular: 'district',
      districtPlural: 'districts',
      searchKbdHint: 'Press / to search',
      clearSearch: 'Clear search',
      quickDirectLinks: 'Quick Direct Links:',
      moreBelow: 'more below',
      quickDivisionFilter: 'Quick Division Filter:',
      allRegions: 'All Regions',
      upperAssam: 'Upper Assam',
      lowerAssam: 'Lower Assam',
      bodoland: 'BTR / Bodoland',
      northAssam: 'North Assam',
      centralAssam: 'Central Assam',
      hillsKarbi: 'Hills & Karbi',
      barakValley: 'Barak Valley',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      displaying: 'Displaying',
      showingOfTotal: 'administrative districts',
      resetFilters: 'Reset filters',
      noDistrictsFound: 'No matching districts found',
      tryDifferentSearch: 'Try searching with a different spelling or clearing the division filter.',
      headquarters: 'HQ',
      attractions: 'Attractions',
      institutions: 'Institutions',
      exploreDistrict: 'Explore District',
    },
  },

  as: {
    nav: {
      home: 'মুখ্য পৃষ্ঠা',
      directory: 'পঞ্জীকা',
      explore: 'অন্বেষণ',
      districts: 'জিলাসমূহ',
      services: 'সেৱাসমূহ',
      businesses: 'ব্যৱসায়',
      events: 'অনুষ্ঠানসমূহ',
      tourism: 'পৰ্যটন',
      opportunities: 'সুযোগসমূহ',
      community: 'ৰাইজৰ মঞ্চ',
      about: 'আমাৰ বিষয়ে',
      admin: 'প্ৰশাসক ডেস্ক',
      selectLanguage: 'ভাষা বাছনি কৰক',
      servicesMenu: 'সেৱা আৰু ব্যৱসায়',
      moreMenu: 'অধিক',
    },
    hero: {
      welcome: 'স্বাগতম',
      proudBadge: 'অসমীয়া হোৱাৰ গৌৰৱ',
      subtitleEn: 'স্থানীয় সেৱা বিচাৰক । অসমৰ সৈতে সংযুক্ত হওক।',
      subtitleAs: 'আমাৰ অসম । আপোনাৰ প্লেটফৰ্ম',
      searchPlaceholder: 'ব্যৱসায়, সেৱা, পৰ্যটন বা ঐতিহ্য বিচাৰক...',
      chooseDistrict: 'জিলা বাছনি কৰক',
      allDistricts: 'অসমৰ সকলো জিলা',
      searchBtn: 'বিচাৰক',
    },
    categories: {
      localBusinessTitle: 'স্থানীয় ব্যৱসায়',
      localBusinessSub: 'দোকান • সেৱা • ব্যৱসায়',
      servicesTitle: 'প্ৰয়োজনীয় সেৱা',
      servicesSub: 'ঘৰুৱা • মেৰামতি',
      foodTitle: 'খাদ্য আৰু সোৱাদ',
      foodSub: 'থলুৱা সোৱাদ • কেফে',
      tourismTitle: 'পৰ্যটন আৰু সংস্কৃতি',
      tourismSub: 'দৰ্শনীয় স্থান • ঐতিহ্য',
      opportunitiesTitle: 'কৰ্মসংস্থান ও শিক্ষা',
      opportunitiesSub: 'চাকৰি • ইণ্টাৰ্ণশ্বিপ',
      eventsTitle: 'উৎসৱ আৰু অনুষ্ঠান',
      eventsSub: 'বিহু • সাংস্কৃতিক মেলা',
      communityTitle: 'ৰাইজৰ মঞ্চ',
      communitySub: 'জাননী • সাহায্য',
    },
    featured: {
      title: 'আপোনাৰ জিলাৰ বিশেষ সেৱাসমূহ',
      subtitle: 'আপোনাৰ ওচৰৰ বিশ্বাসযোগ্য প্ৰতিষ্ঠান আৰু সেৱাসমূহ চাওক',
      viewAll: 'সকলো চাওক',
      openNow: 'খোলা আছে',
      closed: 'এতিয়া বন্ধ',
    },
    promos: {
      exploreBeautyTitle: "অসমৰ অনন্য\nসৌন্দৰ্য্য",
      exploreBeautyDesc: 'সেউজীয়া চাহ বাগিচাৰ পৰা নদীদ্বীপলৈ, অসমৰ অপৰূপ স্থানসমূহ অন্বেষণ কৰক।',
      exploreBeautyBtn: 'সৌন্দৰ্য্য চাওক',
      buildFutureTitle: 'অসম তথ্যকোষ\nনাগৰিক সেৱা',
      buildFutureDesc: '৩৫ খন জিলাৰ বিশ্ববিদ্যালয়, ঐতিহাসিক কীৰ্তিচিহ্ন, পবিত্ৰ তীৰ্থস্থান আৰু চৰকাৰী সেৱা চাওক।',
      buildFutureBtn: 'তথ্যকোষ খোলক',
      shareCommunityTitle: 'ৰাইজৰ সৈতে\nভাগ-বাটোৱাৰা কৰক',
      shareCommunityDesc: 'জাননী, অনুষ্ঠান, সহায় বা স্থানীয় বাৰ্তা। অসমক একত্ৰিত কৰি ৰাখক।',
      shareCommunityBtn: 'বাৰ্তা পঠিয়াওক',
    },
    tourism: {
      heroPill: 'অসম পৰ্যটন • সৌন্দৰ্য্যমণ্ডিত অসম',
      heroTitle: 'অসমৰ অপৰূপ প্ৰাকৃতিক সৌন্দৰ্য্য',
      heroSubtitle: 'কাজিৰঙাৰ গঁড়ৰ পৰা চৰাইদেউৰ মৈদামলৈ, মাজুলীৰ সত্ৰীয়া সংস্কৃতিৰ পৰা ব্ৰহ্মপুত্ৰৰ সূৰ্যাস্তলৈ',
      heroDesc: 'ইউনেস্কো বিশ্ব ঐতিহ্য উদ্যান, ৬০০ বছৰীয়া আহোম ৰাজকীয়া স্থাপত্য, পৃথিৱীৰ সৰ্ববৃহৎ নদীদ্বীপ, আৰু পবিত্ৰ তীৰ্থক্ষেত্ৰসমূহৰ অনুপম অভিজ্ঞতা লাভ কৰক।',
      searchPlaceholder: 'ঐতিহাসিক স্থান, অভয়াৰণ্য, নদীদ্বীপ বা মন্দিৰ বিচাৰক...',
      allDistrictsOption: 'অসমৰ সকলো জিলা (All 35 Districts)',
      resetFilters: 'ফিল্টাৰ পৰিষ্কাৰ কৰক',
      showingCount: 'উপলব্ধ',
      inTheme: 'শ্ৰেণী:',
      noDestinationsFound: 'কোনো স্থান বিচাৰি পোৱা নগ’ল',
      tryAdjustingFilters: 'অনুগ্ৰহ কৰি আন কোনো জিলা বা বেলেগ নাম লিখি বিচাৰি চাওক।',
      viewDetails: 'বিস্তাৰিত তথ্য চাওক',
      highlightsTitle: 'বিশেষ আকৰ্ষণ',
      bestSeason: 'ভ্ৰমণৰ সৰ্বোত্তম সময়',
      transitHub: 'যাতায়াতৰ সুচল বাট',
      permitGuide: 'টিকট আৰু প্ৰৱেশৰ নিয়ম',
      shareDestination: 'বন্ধু-বান্ধৱক জনাওক',
      linkCopied: 'লিংক কপি কৰা হ’ল!',
      officialPortal: 'চৰকাৰী পৰ্যটন প’ৰ্টেল',
      page: 'পৃষ্ঠা',
      of: 'পৰা',
      nextPage: 'পৰৱৰ্তী পৃষ্ঠা',
      prevPage: 'পূৰ্বৱৰ্তী পৃষ্ঠা',
      verifiedBadge: 'প্ৰমাণিত স্থান',
      draftBadge: 'নতুন খবৰ (পৰীক্ষা চলি আছে)',
      pendingReviewBadge: 'পৰীক্ষাৰ বাবে ৰখা হৈছে',
      coordsPending: 'স্থানৰ ঠিকনা পৰীক্ষা কৰা হৈছে',
      officialSource: 'চৰকাৰী লিংক',
      attributionLabel: 'ছবিৰ উৎস আৰু কৃতিত্ব',
      adminMode: 'এডমিন দৃশ্য',
      visitorMode: 'ৰাইজৰ দৃশ্য',
      approveBtn: 'অনুমোদন আৰু প্ৰকাশ',
      verifyBtn: 'এতিয়াই প্ৰমাণিত কৰক',
      archiveBtn: 'সংৰক্ষণাগাৰলৈ প্ৰেৰণ',
      categories: {
        all: 'সকলো শ্ৰেণী',
        teaTourism: 'চাহ বাগিচা আৰু চাহ পৰ্যটন',
        riverExperiences: 'নদীদ্বীপ আৰু অনুমোদিত নদী ভ্ৰমণ',
        hillsWaterfalls: 'পাহাৰ, হ্ৰদ, জলপ্ৰপাত আৰু নৈসৰ্গিক দৃশ্য',
        wildlifeBirdwatching: 'ৰাষ্ট্ৰীয় উদ্যান আৰু পক্ষী নিৰীক্ষণ',
        heritageHistoric: 'ঐতিহ্যক্ষেত্ৰ আৰু ঐতিহাসিক স্থানসমূহ',
        handloomCrafts: 'হস্ততাঁত, মুগা ৰেচম আৰু হস্তশিল্প গাঁও',
        festivalsCultural: 'বিহু আৰু ঋতুভিত্তিক সাংস্কৃতিক উৎসৱ',
        culinaryExperiences: 'থলুৱা অসমীয়া খাদ্য আৰু সোৱাদ',
        botanicalGreen: 'উদ্ভিদ উদ্যান আৰু সেউজ উদ্যানসমূহ',
        districtTravelGuides: 'জিলাভিত্তিক ভ্ৰমণ নিৰ্দেশিকা',
      },
      themes: {
        all: 'সকলো আকৰ্ষণীয় স্থান',
        wildlife: 'অভয়াৰণ্য আৰু ৰাষ্ট্ৰীয় উদ্যান',
        charaideo: 'চৰাইদেউ ইউনেস্কো ঐতিহ্য',
        history: 'আহোম বুৰঞ্জী আৰু স্থাপত্য',
        temples: 'পবিত্ৰ ধৰ্মীয় তীৰ্থস্থান',
        satras: 'সত্ৰ আৰু নদীদ্বীপ',
        teaGolf: 'চাহ বাগিচা আৰু গল্ফ',
        rural: 'থলুৱা গাঁৱলীয়া জীৱন',
        river: 'ব্ৰহ্মপুত্ৰ আৰু সূৰ্যাস্ত ক্ৰুজ',
        hills: 'পাহাৰ আৰু সেউজ ট্ৰেইল',
      },
      seasonalGuide: {
        title: 'অসমৰ ঋতুভিত্তিক ভ্ৰমণ আৰু চাৰ্কিট নিৰ্দেশিকা',
        subtitle: 'অসমৰ প্ৰকৃতি, বন্যপ্ৰাণী আৰু উৎসৱসমূহ যেতিয়া আটাইতকৈ মনোমোহা ৰূপত থাকে, তেতিয়া আপোনাৰ ভ্ৰমণৰ পৰিকল্পনা কৰক।',
        winterTag: 'নৱেম্বৰ – এপ্ৰিল • বন্যপ্ৰাণী আৰু ঐতিহ্যৰ প্ৰধান ঋতু',
        winterTitle: 'চাফাৰী, পৰিভ্ৰমী চৰাই আৰু নদী অভিযান',
        winterDesc: 'কাজিৰঙা আৰু মানাহ ৰাষ্ট্ৰীয় উদ্যানত পূৰ্ণ চাফাৰী ঋতু চলি থাকে। পৰিষ্কাৰ আকাশ, আৰামদায়ক শুকান বতৰ (১০°C ৰ পৰা ২৫°C), বন্যপ্ৰাণী দৰ্শনৰ সৰ্বোত্তম সময়, ব্ৰহ্মপুত্ৰৰ বুকুত সোণালী সূৰ্যাস্ত আৰু মাজুলীৰ ঐতিহাসিক ৰাস মহোৎসৱ।',
        springTag: 'এপ্ৰিল – মে’ • বসন্ত আৰু সাংস্কৃতিক বিহু',
        springTitle: 'ৰঙালী বিহু, চাহৰ প্ৰথম পাত আৰু কপৌ ফুলৰ শোভা',
        springDesc: 'অসমৰ বাপতিসাহোন নৱবৰ্ষ (ব’হাগ বিহু) ঢোল, পেঁপা আৰু বিহু নৃত্যৰ সুৰেৰে মুখৰিত হৈ পৰে। চাহ বাগিচাসমূহত প্ৰথম পাত তোলাৰ ব্যস্ততা আৰু গাঁৱে-ভূঞে গছৰ ডালত ফুলা ৰঙীন কপৌ ফুলে প্ৰকৃতি সজাই তোলে।',
        monsoonTag: 'জুন – ছেপ্টেম্বৰ • বৰ্ষা আৰু আধ্যাত্মিক তীৰ্থস্থান',
        monsoonTitle: 'অম্বুবাচী মেলা আৰু জলমগ্ন ব্ৰহ্মপুত্ৰৰ বিশাল ৰূপ',
        monsoonDesc: 'নীলাচল পাহাৰৰ ঐতিহাসিক কামাখ্যা ধামত লাখ লাখ ভক্ত আৰু সাধু-সন্তৰ সমাবেশ ঘটা অম্বুবাচী মেলা। মহাবাহু ব্ৰহ্মপুত্ৰৰ বিশাল প্ৰবাহ, বৰ্ষাসিক্ত গাঢ় সেউজ বৰ্ষাৰণ্য আৰু সতেজ চাহৰ সুবাস।',
      },
      responsiblePledge: {
        title: 'অসমৰ বাবে দায়িত্বশীল পৰ্যটকৰ সংকল্প',
        rule1Label: 'বন্যপ্ৰাণী অভয়াৰণ্যৰ সুৰক্ষা সংৰক্ষণ কৰক',
        rule1Desc: 'গঁড়, হাতী আৰু বনৰীয়া প্ৰাণীৰ পৰা বাধ্যতামূলক দূৰত্ব বজাই ৰাখক। সংৰক্ষিত বনাঞ্চলৰ ভিতৰত কেতিয়াও উচ্চ শব্দৰ গান নবজাব বা কেমেৰাৰ ফ্লেছ ব্যৱহাৰ নকৰিব।',
        rule2Label: 'পৱিত্ৰ নদী আৰু জলভাগ প্লাষ্টিকমুক্ত ৰাখক',
        rule2Desc: 'ব্ৰহ্মপুত্ৰৰ ঘাট, ঐতিহাসিক মন্দিৰৰ চিৰি আৰু ফেৰীত এবাৰ ব্যৱহাৰ্য প্লাষ্টিক বৰ্জন কৰক আৰু কোনো আৱৰ্জনা নেপেলাব।',
        rule3Label: 'ঐতিহাসিক সত্ৰ আৰু স্থানীয় সমাজৰ মৰ্যাদা ৰাখক',
        rule3Desc: 'মাজুলী, বৰপেটা আদিৰ পৱিত্ৰ নৱ-বৈষ্ণৱ সত্ৰসমূহলৈ যোৱাৰ সময়ত মাৰ্জিত সাজ-পোছাক পৰিধান কৰক আৰু সত্ৰীয়া সংস্কৃতিক শ্ৰদ্ধা জনাওক।',
        rule4Label: 'খিলঞ্জীয়া সমাজ আৰু শিপিনীসকলক উৎসাহিত কৰক',
        rule4Desc: 'স্থানীয় জনগোষ্ঠীয় লোকসকলৰ দ্বাৰা পৰিচালিত হোমষ্টে’ (বড়ো, মিচিং, কাৰ্বি, ডিমাছা) বাছনি কৰক আৰু শুৱালকুছিৰ শিপিনীসকলৰ পৰা প্ৰত্যক্ষভাৱে প্ৰমাণিত সোণালী মুগা ৰেচম ক্ৰয় কৰক।',
      },
    },
    footer: {
      tagline: 'স্থানীয় সেৱা বিচাৰক । অসমৰ সৈতে সংযুক্ত হওক।',
      mission: 'অসমৰ সকলো জিলাৰ স্থানীয় দোকান, সেৱা, অনুষ্ঠান আৰু যুৱ প্ৰজন্মৰ সুযোগৰ এক বিশ্বাসযোগ্য ডিজিটেল মঞ্চ।',
      quickLinks: 'প্ৰয়োজনীয় লিংক',
      more: 'অন্যান্য শাখা',
      legal: 'নিয়মাৱলী আৰু নীতি',
      stayConnected: 'যোগাযোগত থাকক',
      subscribePlaceholder: 'আপোনাৰ ইমেইল লিখক...',
      subscribedMsg: 'ধন্যবাদ! আপুনি যুক্ত হ’ল।',
      subscribeBtn: 'যুক্ত হওক',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'ব্যৱহাৰৰ চৰ্তাৱলী',
      contact: 'যোগাযোগ কৰক',
      aboutUs: 'আমাৰ বিষয়ে',
      rightsReserved: 'সকলো অধিকাৰ সংৰক্ষিত।',
      madeWithLove: 'অসমৰ প্ৰতি মৰমেৰে নিৰ্মিত',
    },
    districts: {
      heroBadge: 'অসম প্ৰশাসনিক এটলাছ • ৩৫ খন জিলা',
      heroTitle: 'অসমৰ ৩৫ খন জিলা',
      heroSubtitle: 'ব্ৰহ্মপুত্ৰ আৰু বৰাক উপত্যকাৰ প্ৰশাসনিক আৰু ভৌগোলিক পৰিদৰ্শন',
      heroDesc: 'ব্ৰহ্মপুত্ৰ আৰু বৰাক উপত্যকাৰ প্ৰতিখন জিলাৰ ঐতিহ্য, পৰ্যটন, শিক্ষানুষ্ঠান আৰু প্ৰশাসনিক তথ্য একেখন মঞ্চত।',
      statDistricts: 'প্ৰশাসনিক জিলা',
      statAttractions: 'প্ৰমাণিত স্থান',
      statRivers: 'প্ৰাকৃতিক নদী',
      statDivisions: 'ৰাজহ মণ্ডল',
      searchPlaceholder: 'জিলাৰ নাম বা সদৰ বিচাৰক (যেনে: কামৰূপ, ডিব্ৰুগড়, যোৰহাট)...',
      searchAriaLabel: 'জিলা সন্ধান কৰক',
      districtSingular: 'খন জিলা',
      districtPlural: 'খন জিলা',
      searchKbdHint: 'সন্ধানৰ বাবে / টিপক',
      clearSearch: 'সন্ধান মচক',
      quickDirectLinks: 'দ্ৰুত লিংকসমূহ:',
      moreBelow: 'খন তলত আছে',
      quickDivisionFilter: 'মণ্ডল অনুসৰি বাছক:',
      allRegions: 'সকলো অঞ্চল',
      upperAssam: 'উজনি অসম',
      lowerAssam: 'নামনি অসম',
      bodoland: 'বিটিআৰ / বড়োলেণ্ড',
      northAssam: 'উত্তৰ অসম',
      centralAssam: 'মধ্য অসম',
      hillsKarbi: 'পাৰ্বত্য কাৰ্বি',
      barakValley: 'বৰাক উপত্যকা',
      scrollLeft: 'বাওঁফালে স্ক্ৰল কৰক',
      scrollRight: 'সোঁফালে স্ক্ৰল কৰক',
      displaying: 'প্ৰদৰ্শন কৰা হৈছে:',
      showingOfTotal: 'খন প্ৰশাসনিক জিলা',
      resetFilters: 'ফিল্টাৰ পুনৰায় স্থাপন',
      noDistrictsFound: 'কোনো জিলা বিচাৰি পোৱা নগ’ল',
      tryDifferentSearch: 'অনুগ্ৰহ কৰি আন কোনো নাম বা মণ্ডল বিচাৰি চাওক।',
      headquarters: 'সদৰ',
      attractions: 'পৰ্যটন স্থান',
      institutions: 'প্ৰতিষ্ঠান',
      exploreDistrict: 'জিলা চাওক',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      directory: 'डायरेक्टरी',
      explore: 'एक्सप्लोर',
      districts: 'जिले',
      services: 'सेवाएं',
      businesses: 'व्यापार',
      events: 'कार्यक्रम',
      tourism: 'पर्यटन',
      opportunities: 'अवसर',
      community: 'समुदाय',
      about: 'हमारे बारे में',
      admin: 'प्रशासक डेस्क',
      selectLanguage: 'भाषा चुनें',
      servicesMenu: 'सेवाएं व व्यापार',
      moreMenu: 'और देखें',
    },
    hero: {
      welcome: 'स्वागत है',
      proudBadge: 'गर्व से असमिया',
      subtitleEn: 'स्थानीय खोजें • असम से जुड़ें',
      subtitleAs: 'हमारा असम • आपका मंच',
      searchPlaceholder: 'दुकानें, सेवाएं, पर्यटन या विरासत खोजें...',
      chooseDistrict: 'अपना जिला चुनें',
      allDistricts: 'असम के सभी जिले',
      searchBtn: 'खोजें',
    },
    categories: {
      localBusinessTitle: 'स्थानीय व्यापार',
      localBusinessSub: 'दुकानें • सेवाएं',
      servicesTitle: 'आवश्यक सेवाएं',
      servicesSub: 'घरेलू • मरम्मत',
      foodTitle: 'खान-पान व कैफे',
      foodSub: 'पारंपरिक स्वाद',
      tourismTitle: 'पर्यटन व संस्कृति',
      tourismSub: 'दर्शनीय स्थल • धरोहर',
      opportunitiesTitle: 'रोजगार व शिक्षा',
      opportunitiesSub: 'नौकरियां • छात्रवृत्तियां',
      eventsTitle: 'उत्सव व कार्यक्रम',
      eventsSub: 'त्योहार • सांस्कृतिक बैठकें',
      communityTitle: 'समुदाय मंच',
      communitySub: 'सूचनाएं • स्थानीय मदद',
    },
    featured: {
      title: 'हमारे जिले में विशेष',
      subtitle: 'अपने आस-पास के बेहतरीन प्रतिष्ठान और सेवाएं देखें',
      viewAll: 'सभी देखें',
      openNow: 'खुला है',
      closed: 'बंद है',
    },
    promos: {
      exploreBeautyTitle: "असम का अनूठा\nसौंदर्य",
      exploreBeautyDesc: 'हरी-भरी चाय बगान से लेकर नदी द्वीपों तक, असम के मनमोहक स्थलों को जानें।',
      exploreBeautyBtn: 'अभी देखें',
      buildFutureTitle: 'असम डायरेक्टरी\nनागरिक सेवाएं',
      buildFutureDesc: '35 जिलों के विश्वविद्यालय, ऐतिहासिक स्मारक, पवित्र मंदिर एवं जनसेवाएं देखें।',
      buildFutureBtn: 'डायरेक्टरी देखें',
      shareCommunityTitle: 'समुदाय से\nसाझा करें',
      shareCommunityDesc: 'सूचना, कार्यक्रम, मदद या स्थानीय समाचार साझा करें और असम को जोड़े रखें।',
      shareCommunityBtn: 'अभी पोस्ट करें',
    },
    tourism: {
      heroPill: 'असम पर्यटन • सौंदर्यमयी असम',
      heroTitle: 'असम की जीवंत प्राकृतिक व सांस्कृतिक धरोहर',
      heroSubtitle: 'काजीरंगा के एक-सींग वाले गैंडों से लेकर चराइदेव के विश्व धरोहर तक, माजुली के सत्रों से ब्रह्मपुत्र के सूर्यास्त तक',
      heroDesc: 'यूनेस्को विश्व धरोहर राष्ट्रीय उद्यान, 600 वर्ष पुराने अहोम राजप्रासाद, विश्व का सबसे बड़ा नदी द्वीप, और पवित्र तीर्थ स्थलों का अनुभव करें।',
      searchPlaceholder: 'स्थान, वन्यजीव, मंदिर, नदी द्वीप या ऐतिहासिक स्थल खोजें...',
      allDistrictsOption: 'असम के सभी जिले (All 35 Districts)',
      resetFilters: 'फ़िल्टर हटाएं',
      showingCount: 'उपलब्ध',
      inTheme: 'श्रेणी:',
      noDestinationsFound: 'कोई जगह नहीं मिली',
      tryAdjustingFilters: 'कृपया कोई दूसरा जिला या कोई नया नाम लिखकर देखें।',
      viewDetails: 'पूरी जानकारी देखें',
      highlightsTitle: 'खास आकर्षण',
      bestSeason: 'घूमने का सही समय',
      transitHub: 'पहुंचने का आसान रास्ता',
      permitGuide: 'टिकट और परमिट की जानकारी',
      shareDestination: 'दोस्तों को बताएं',
      linkCopied: 'लिंक कॉपी हो गया!',
      officialPortal: 'आधिकारिक पर्यटन पोर्टल',
      page: 'पृष्ठ',
      of: 'का',
      nextPage: 'अगला पेज',
      prevPage: 'पिछला पेज',
      verifiedBadge: 'प्रमाणित स्थान',
      draftBadge: 'नया सुझाव (जांच जारी)',
      pendingReviewBadge: 'जांच के लिए सुरक्षित',
      coordsPending: 'स्थान की जानकारी जांची जा रही है',
      officialSource: 'आधिकारिक लिंक',
      attributionLabel: 'तस्वीर का स्रोत व आभार',
      adminMode: 'एडमिन दृश्य',
      visitorMode: 'सामान्य दृश्य',
      approveBtn: 'स्वीकृत व प्रकाशित करें',
      verifyBtn: 'अभी सत्यापित करें',
      archiveBtn: 'संग्रहित करें',
      categories: {
        all: 'सभी श्रेणियां',
        teaTourism: 'चाय बागान और चाय पर्यटन',
        riverExperiences: 'नदी द्वीप और स्वीकृत रिवर अनुभव',
        hillsWaterfalls: 'पहाड़, झीलें, झरने और मनोरम दृश्य',
        wildlifeBirdwatching: 'वन्यजीव अभयारण्य और पक्षी दर्शन',
        heritageHistoric: 'विरासत परिदृश्य और ऐतिहासिक स्थल',
        handloomCrafts: 'हथकरघा, रेशम बुनाई और शिल्प ग्राम',
        festivalsCultural: 'त्योहार और मौसमी सांस्कृतिक उत्सव',
        culinaryExperiences: 'असमिया पारंपरिक व्यंजन और स्वाद',
        botanicalGreen: 'वानस्पतिक उद्यान और हरित स्थल',
        districtTravelGuides: 'ज़िला-वार दर्शनीय यात्रा गाइड',
      },
      themes: {
        all: 'सभी दर्शनीय स्थल',
        wildlife: 'वन्यजीव व राष्ट्रीय उद्यान',
        charaideo: 'चराइदेव यूनेस्को धरोहर',
        history: 'इतिहास व अहोम परंपरा',
        temples: 'पवित्र धार्मिक व आध्यात्मिक स्थल',
        satras: 'सत्र व नदी द्वीप',
        teaGolf: 'चाय पर्यटन व गोल्फ',
        rural: 'ग्रामीण जीवन व पारंपरिक संस्कृति',
        river: 'ब्रह्मपुत्र नदी व क्रूज',
        hills: 'पहाड़ियां व प्राकृतिक रास्ते',
      },
      seasonalGuide: {
        title: 'असम मौसमी यात्रा एवं सर्किट मार्गदर्शिका',
        subtitle: 'अपनी यात्रा की योजना तब बनाएं जब असम की प्रकृति, वन्यजीव और उत्सव अपने सबसे मनमोहक रूप में हों।',
        winterTag: 'नवंबर – अप्रैल • वन्यजीव एवं धरोहर का मुख्य मौसम',
        winterTitle: 'सफारी, प्रवासी पक्षी एवं नदी अभियान',
        winterDesc: 'काजीरंगा और मानस राष्ट्रीय उद्यानों में सफारी सीजन पूरी रौनक पर होता है। साफ आसमान, सुहावना मौसम (10°C से 25°C), ब्रह्मपुत्र पर स्वर्णिम सूर्यास्त और माजुली का जीवंत रास महोत्सव।',
        springTag: 'अप्रैल – मई • वसंत एवं सांस्कृतिक बिहू',
        springTitle: 'रोंगाली बिहू, चाय की नई पत्तियां और खिलते ऑर्किड',
        springDesc: 'असम का नववर्ष (बोहाग बिहू) ढोल, पेपा और बिहू नृत्य की गूंज से जीवंत हो उठता है। चाय बागानों में पत्तियों की पहली चुनाई और पेड़ों पर खिलते कपौ फूल प्रकृति को सजाते हैं।',
        monsoonTag: 'जून – सितंबर • मानसून एवं आध्यात्मिक तीर्थ',
        monsoonTitle: 'अंबुबाची मेला और ब्रह्मपुत्र का विशाल प्रवाह',
        monsoonDesc: 'नीलांचल पहाड़ी पर स्थित कामाख्या देवी मंदिर में ऐतिहासिक अंबुबाची मेले में लाखों श्रद्धालु जुटते हैं। ब्रह्मपुत्र का विशाल जलप्रवाह और हरी-भरी वर्षावन छटा देखते ही बनती है।',
      },
      responsiblePledge: {
        title: 'असम के लिए जिम्मेदार यात्री संकल्प',
        rule1Label: 'वन्यजीव अभयारण्यों की सीमाओं का सम्मान करें',
        rule1Desc: 'गैंडे, हाथी और वन्यजीवों से अनिवार्य सुरक्षित दूरी बनाए रखें। जंगल में कभी भी तेज संगीत न बजाएं या कैमरे का फ्लैश इस्तेमाल न करें।',
        rule2Label: 'पवित्र नदियों को प्लास्टिक मुक्त रखें',
        rule2Desc: 'ब्रह्मपुत्र के तटों, मंदिर की सीढ़ियों और नौकाओं पर एकल-उपयोग प्लास्टिक का उपयोग न करें और कोई कचरा न फेंकें।',
        rule3Label: 'सत्रों एवं स्थानीय परंपराओं का आदर करें',
        rule3Desc: 'माजुली और बारपेटा के ऐतिहासिक नव-वैष्णव सत्रों में प्रवेश करते समय मर्यादित पोशाक पहनें और स्थानीय संस्कृति का सम्मान करें।',
        rule4Label: 'स्थानीय समुदायों और बुनकरों को सशक्त बनाएं',
        rule4Desc: 'जनजातीय समुदायों द्वारा संचालित होमस्टे (बोडो, मिशिंग, कार्बी, दिमासा) चुनें और सुआलकुची के बुनकरों से सीधे प्रमाणित मुगा सिल्क खरीदें।',
      },
    },
    footer: {
      tagline: 'स्थानीय खोजें • असम से जुड़ें',
      mission: 'स्थानीय दुकानों, नागरिक सेवाओं, आयोजनों और युवा अवसरों के लिए असम का संपूर्ण डिजिटल मंच।',
      quickLinks: 'त्वरित लिंक',
      more: 'और देखें',
      legal: 'नियम व नीतियां',
      stayConnected: 'जुड़े रहें',
      subscribePlaceholder: 'अपना ईमेल दर्ज करें...',
      subscribedMsg: 'धन्यवाद! आप जुड़ चुके हैं।',
      subscribeBtn: 'जुड़ें',
      privacy: 'गोपनीयता नीति',
      terms: 'उपयोग की शर्तें',
      contact: 'संपर्क करें',
      aboutUs: 'हमारे बारे में',
      rightsReserved: 'सर्वाधिकार सुरक्षित।',
      madeWithLove: 'असम के प्रति स्नेह के साथ निर्मित',
    },
    districts: {
      heroBadge: 'असम प्रशासनिक एटलस • ३५ जिले',
      heroTitle: 'असम के ३५ जिले',
      heroSubtitle: 'ब्रह्मपुत्र और बराक घाटी का प्रशासनिक एवं भौगोलिक अवलोकन',
      heroDesc: 'असम के सभी ३५ प्रशासनिक जिलों में प्रमाणित दर्शनीय स्थल, सार्वजनिक संस्थान, विरासत स्थल और प्रामाणिक स्थानीय सेवाएं देखें।',
      statDistricts: 'प्रशासनिक जिले',
      statAttractions: 'प्रमाणित स्थल',
      statRivers: 'नदियाँ और घाटियाँ',
      statDivisions: 'प्रशासनिक प्रभाग',
      searchPlaceholder: 'जिले का नाम या मुख्यालय खोजें (उदा: कामरूप, डिब्रूगढ़, जोरहाट)...',
      searchAriaLabel: 'जिले खोजें',
      districtSingular: 'जिला',
      districtPlural: 'जिले',
      searchKbdHint: 'सर्च के लिए / दबाएं',
      clearSearch: 'सर्च साफ़ करें',
      quickDirectLinks: 'त्वरित लिंक:',
      moreBelow: 'नीचे और हैं',
      quickDivisionFilter: 'प्रभाग अनुसार चुनें:',
      allRegions: 'सभी प्रभाग',
      upperAssam: 'ऊपरी असम',
      lowerAssam: 'निचला असम',
      bodoland: 'बीटीआर / बोडोलैंड',
      northAssam: 'उत्तरी असम',
      centralAssam: 'मध्य असम',
      hillsKarbi: 'पहाड़ी और कार्बी',
      barakValley: 'बराक घाटी',
      scrollLeft: 'बाएं स्क्रॉल करें',
      scrollRight: 'दाएं स्क्रॉल करें',
      displaying: 'प्रदर्शित:',
      showingOfTotal: 'प्रशासनिक जिले',
      resetFilters: 'फ़िल्टर रीसेट करें',
      noDistrictsFound: 'कोई जिला नहीं मिला',
      tryDifferentSearch: 'कृपया भिन्न नाम या प्रभाग से खोजें।',
      headquarters: 'मुख्यालय',
      attractions: 'दर्शनीय स्थल',
      institutions: 'संस्थान',
      exploreDistrict: 'जिला देखें',
    },
  },

  // Bodo (बर’ / Boro) Language Support Architecture
  brx: {
    nav: {
      home: 'गाहाय',
      directory: 'दिन्थिगिरि',
      explore: 'नायगिरणाय',
      districts: 'जिल्लाफोर',
      services: 'सिबिफोर',
      businesses: 'फालांगि',
      events: 'हाबाफारिफोर',
      tourism: 'दावबायनाय',
      opportunities: 'सुযোগफोर',
      community: 'रैजो-राजा मंच',
      about: 'जोंनि सोमोन्दै',
      admin: 'सामलायगिरि डेस्क',
      selectLanguage: 'राव सायखʼ',
      servicesMenu: 'सिबि आरो फालांगि',
      moreMenu: 'आरोबाव',
    },
    hero: {
      welcome: 'बरायबाय',
      proudBadge: 'असमिया जानायनि गर्व',
      subtitleEn: 'Discover Local. Connect Assam.',
      subtitleAs: 'जोंनि आसाम । नोंथांनि मञ्च',
      searchPlaceholder: 'दुकान, सिबि, हाबाफारि, दावबायनाय...',
      chooseDistrict: 'जिल्ला सायखʼ',
      allDistricts: 'गासैबो आसाम जिल्लाफोर',
      searchBtn: 'नायगिर',
    },
    categories: {
      localBusinessTitle: 'स्थानीय फालांगि',
      localBusinessSub: 'दुकान आरो सोरां',
      servicesTitle: 'नागरिक सिबिफोर',
      servicesSub: 'हाबा-हुखा आरो सिबि',
      foodTitle: 'जानाय-लोंनाय',
      foodSub: 'होटेल आरो केफे',
      tourismTitle: 'दावबायनाय',
      tourismSub: 'मोजां जायगाफोर',
      opportunitiesTitle: 'सुযোগफोर',
      opportunitiesSub: 'चाक्री आरो फरायनाय',
      eventsTitle: 'हाबाफारिफोर',
      eventsSub: 'उत्सव आरो फोरबो',
      communityTitle: 'रैजो-राजा',
      communitySub: 'फोसावनाय आरो खौरां',
    },
    featured: {
      title: 'जोंनि जिल्लायाव विशेष',
      subtitle: 'सत्यापित स्थानीय दुकान आरो सिबिफोर',
      viewAll: 'गासैबो नाय',
      openNow: 'खेवनाय',
      closed: 'बन्द',
    },
    promos: {
      exploreBeautyTitle: 'आसामनि सौन्दर्य\nनायगिर',
      exploreBeautyDesc: 'काजिरंगा, चराइदेउ, माजुली आरो राष्ट्रीय उद्यानफोर।',
      exploreBeautyBtn: 'दावबायनाय नाय',
      buildFutureTitle: 'आसाम डायरेक्टरी\nनागरिक सेवाफोर',
      buildFutureDesc: '35 जिल्लानि सोलोंथाय जायगा, ऐतिहासिक मुंदांखा आरो सरकारी सेवाफोर।',
      buildFutureBtn: 'डायरेक्टरी नाय',
      shareCommunityTitle: 'गावनि समाजजों\nरिफि',
      shareCommunityDesc: 'नोंथांनि फालांगि वा हाबाफारि AXOM ONE आव फोसाव।',
      shareCommunityBtn: 'दासानो फोसाव',
    },
    tourism: {
      heroPill: 'Explore Assam • অসম ভ্ৰমণ',
      heroTitle: 'আসামनि सौन्दर्य नायगिर',
      heroSubtitle: 'काजिरंगानि गान्दा, ब्रह्मपुत्रनि हाबा आरो चराइदेउनि मैदामफोर।',
      heroDesc: 'आसाम सरकारनि पर्यटन विभाग (assamtourism.gov.in) आरो युनेस्को प्रमाणित जायगाफोर।',
      searchPlaceholder: 'जायगा, राष्ट्रीय उद्यान, मन्दिर वा जिल्ला नायगिर...',
      allDistrictsOption: 'गासैबो जिल्लाफोर',
      resetFilters: 'फिल्टर बोखार',
      showingCount: 'मोननाय जायगा',
      inTheme: 'बिथिं:',
      noDestinationsFound: 'जेबो जायगा मोनाखै',
      tryAdjustingFilters: 'गुबुन जिल्ला वा बिथिं बासिना नाय।',
      viewDetails: 'गुवारै नाय',
      highlightsTitle: 'प्रधान बिथिंफोर',
      bestSeason: 'थाबायनायनि मोजां सम',
      transitHub: 'सौहैनायनि राहा',
      permitGuide: 'हाबनायनि टिकिट आरो नियम',
      shareDestination: 'लोगोफोरनो खौरां हर',
      linkCopied: 'लिंक कपि खालामबाय!',
      officialPortal: 'सोरखारि पर्यटन पोर्टल',
      page: 'बिलाइ',
      of: 'नि',
      nextPage: 'उननि बिलाइ',
      prevPage: 'सिगांनि बिलाइ',
      verifiedBadge: 'प्रमाणित जायगा',
      draftBadge: 'गोदान खौरां (नायनाय सोलिदों)',
      pendingReviewBadge: 'नायबिजिरनाय सोलिदों',
      coordsPending: 'जायगानि खौरां नायनाय सोलिदों',
      officialSource: 'सोरखारि लिंक',
      attributionLabel: 'फोटोनि खौरां आरो स्रोत',
      adminMode: 'सामलायगिरि बिथिं',
      visitorMode: 'दावबायगिरि बिथिं',
      approveBtn: 'मान्य खालाम',
      verifyBtn: 'सत्यापित खालाम',
      archiveBtn: 'आर्काइभ',
      categories: {
        all: 'गासैबो बिथिंफोर',
        teaTourism: 'सा-बागान आरो सा-पर्यटन',
        riverExperiences: 'दै-द्विप आरो दैमा-रुगुं',
        hillsWaterfalls: 'हाजो, बिल आरो जलप्रपात',
        wildlifeBirdwatching: 'वन्यजीव अभयारण्य आरो दाव नायनाय',
        heritageHistoric: 'जारिमिनारि जायगा आरो आहोम धरोहर',
        handloomCrafts: 'दाम्नाय-लुनाय आरो शिल्प गामिफोर',
        festivalsCultural: 'उत्सव आरो ऋतुपरिक सांस्कृतिक कार्यक्रम',
        culinaryExperiences: 'आसामि जानाय-लोंनाय परंपरा',
        botanicalGreen: 'उद्भिद उद्यान आरो सोमखोर जायगा',
        districtTravelGuides: 'जिल्लावाइज दावबायनायनि लामानि दिन्थि',
      },
      themes: {
        all: 'गासैबो जायगा',
        wildlife: 'काजिरंगा आरो वन्यजीव',
        charaideo: 'चराइदेउ युनेस्को धरोहर',
        history: 'जारिमिन आरो आहोम परंपरा',
        temples: 'मन्दिर आरो थासारि',
        satras: 'सत्र आरो दै-द्विप',
        teaGolf: 'सा-बागान आरो गल्फ',
        rural: 'गामीण जिउ आरो संस्कृति',
        river: 'ब्रह्मपुत्र दै आरो क्रूज',
        hills: 'हाजो आरो लामाफोर',
      },
      seasonalGuide: {
        title: 'आसामनि बोथोरारि थाबायनाय आरो सर्किट बिथांखि',
        subtitle: 'आसामनि मिथिंगा, हारिमु आरो नोगोरारि रंजानाय समाव थाबायनायनि थाखाय थि खालाम।',
        winterTag: 'नभेम्बर – एप्रिल • मिथिंगानि जिब-जुनानि समाव',
        winterTitle: 'साफारी, दावबायनाय दाव आरो दैमा दावबायनाय',
        winterDesc: 'काजिरंगा आरो मानास हादोरारि पार्कआव सफारि सोलिगासिनो दं। साखोन-सिखोन अखाफोर, गोजोनथाव बोथोर आरो माजुलिनि रास महोत्सब।',
        springTag: 'एप्रिल – मे • बोसागु आरो हारिमु',
        springTitle: 'रंगालि बिहु, साहा बिलाइ आरो खपौ फुल',
        springDesc: 'आसामनि गोदान बोसोर (बहाग बिहु) ख्राम, सिफुं आरो बिहु मवनायजों मोखां जायो। साहा बागानफोराव गोदान बिलाइ आरो खपौ बिबार बाथिनाय नुनो मोनो।',
        monsoonTag: 'जुन – सेप्टेम्बर • अखा बोथोर आरो गोथार मन्दिर',
        monsoonTitle: 'अम्बुबाची मेला आरो ब्रह्मपुत्र दैमानि गेवलां महर',
        monsoonDesc: 'कामाख्या देवालयाव लाख लाख सुबुं अखा बोथोरनि अम्बुबाची मेलायाव फैयो आरो ब्रह्मपुत्र दैमानि गोथौ महर नुनो मोनो।',
      },
      responsiblePledge: {
        title: 'आसामनि थाखाय दायित्वगोनां दावबायग्रा संकल्ब',
        rule1Label: 'जिब-जुनानि रैखाथि लाखिनाय',
        rule1Desc: 'गेंडा, हाथि आरो जिब-जुनानिफ्राय जान्थि जाबना था। हाग्राबारियाव गोख्रों रिंखांनाय दामनाय आरो फ्रेस बाहायनाङा।',
        rule2Label: 'दैसा-दैमाफोरखौ प्लास्टिक मुकथ लाखि',
        rule2Desc: 'ब्रह्मपुत्रनि सेराव, मन्दिरफोराव आरो नावनि गेजेराव प्लास्टिक गारनाङा।',
        rule3Label: 'सत्र आरो हारिमुखौ मान होनाय',
        rule3Desc: 'माजुलि आरो बारपेटानि सत्रफोराव हाबनाय समाव समायना गाननाय-जोमनाय बाहाय आरो मान हो।',
        rule4Label: 'गांसेयै दानाय-लुनाय आरो नखरखौ हेफाजाब होनाय',
        rule4Desc: 'गावनि समाजनि होमस्टे (बर’, मिसिं, कार्बि, दिमासा) सायख आरो सुवालकुचिनि मुगा सिल्क ला।',
      },
    },
    footer: {
      tagline: 'स्थानीय नायगिर • आसामजों फोनांजाब',
      mission: 'स्थानीय दुकान, नागरिक सिबि, हाबाफारि आरो लाइमोन सुযোগफोरनि थाखाय आसामनि संपूर्ण डिजिटल मञ्च।',
      quickLinks: 'थाब लिंकफोर',
      more: 'आरोबाव नाय',
      legal: 'नेम आरो नीतिफोर',
      stayConnected: 'फोनांजाबना था',
      subscribePlaceholder: 'ईमेल लिर...',
      subscribedMsg: 'साबाईखर! नोंथाङा फोनांजाबबाय।',
      subscribeBtn: 'फोनांजाब',
      privacy: 'गोपनीयता नीति',
      terms: 'नेमफोर',
      contact: 'योगাযোগ',
      aboutUs: 'जोंनि सोमोन्दै',
      rightsReserved: 'गासैबो अधिकार सामलायनाय जाबाय।',
      madeWithLove: 'आसामनि थाखाय अननायजों बानायबाय',
    },
    districts: {
      heroBadge: 'आसाम प्रसासनिक एतलास • ३५ जिल्लाफोर',
      heroTitle: 'आसामनि ३५ जिल्लाफोर',
      heroSubtitle: 'ब्रह्मपुत्र आरो बराक हायेननि प्रसासनिक आरो भुमखौरां नुथाय',
      heroDesc: 'आसामनि गासैबो ३५ प्रसासनिक जिल्लाफोराव गोनोखो गोनां जायगाफोर, सानथौआरि फरायसालि आरो स्थानीय सिबिथायफोर नागिरना दिहुन।',
      statDistricts: 'प्रसासनिक जिल्ला',
      statAttractions: 'गोनोखो गोनां जायगा',
      statRivers: 'दैसा आरो दोइसा',
      statDivisions: 'मण्डलफोर',
      searchPlaceholder: 'जिल्लानि मुं एबा हेडक्वार्टार नागिर (उदा: कामरूप, दिब्रुगड़, जरहात)...',
      searchAriaLabel: 'जिल्लाफोर नागिर',
      districtSingular: 'जिल्ला',
      districtPlural: 'जिल्लाफोर',
      searchKbdHint: 'नागिरनो / थु',
      clearSearch: 'नागिरनायखौ हुगार',
      quickDirectLinks: 'थाब लिंकफोर:',
      moreBelow: 'गाहायाव दंबावो',
      quickDivisionFilter: 'मण्डल बादियै सायख\':',
      allRegions: 'गासैबो ओनसोल',
      upperAssam: 'साहा आसाम',
      lowerAssam: 'खोलो आसाम',
      bodoland: 'बि.ति.आर. / बड’लेण्ड',
      northAssam: 'सा आसाम',
      centralAssam: 'गेजेर आसाम',
      hillsKarbi: 'हाजो आरो कार्बियारी',
      barakValley: 'बराक हायेन',
      scrollLeft: 'आगसि फारसे स्ख्रल खालाम',
      scrollRight: 'आगदा फारसे स्ख्रल खालाम',
      displaying: 'दिन्थिदों:',
      showingOfTotal: 'प्रसासनिक जिल्लाफोर',
      resetFilters: 'फिल्टार फिन फज\'',
      noDistrictsFound: 'जेबो जिल्ला मोनाखै',
      tryDifferentSearch: 'अननानै गुबुन मुं एबा मण्डलाव नागिरना नाय।',
      headquarters: 'हेडक्वार्टार',
      attractions: 'नुथाब जायगा',
      institutions: 'फरायसालि',
      exploreDistrict: 'जिल्ला नाय',
    },
  },
};
