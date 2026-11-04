export interface TourStep {
  id: string;
  targetSelector: string;
  route: string;
  badge: string;
  title: string;
  title_as: string;
  used_for: string;
  used_for_as: string;
  description: string;
  description_as: string;
  highlights: string[];
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'bottom-right';
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: 'header-navigation',
    targetSelector: '[data-tour="site-header"]',
    route: '/',
    badge: 'Step 1 of 9 • Navigation',
    title: 'Homepage & Global Discovery',
    title_as: 'প্ৰধান পৃষ্ঠা আৰু নেভিগেচন',
    used_for: 'Quick access to all 35 district portals, instant global search (press Ctrl + K anytime), and navigation across Tourism, Directory, Services, and Events.',
    used_for_as: '৩৫খন জিলাৰ প’ৰ্টেল, তাৎক্ষণিক সন্ধান (Ctrl + K), আৰু পৰ্যটন, ডাইৰেক্টৰি, সেৱা আৰু উৎসৱলৈ যাবলৈ ব্যৱহাৰ কৰক।',
    description: 'Welcome to AXOM ONE! Access our main sections anytime: Tourism, 35 Administrative Districts, Verified Directory, Services, and Cultural Events.',
    description_as: 'AXOM ONE লৈ স্বাগতম! পৰ্যটন, ৩৫খন প্ৰশাসনিক জিলা, সত্যনিষ্ঠ ডাইৰেক্টৰি, সেৱা আৰু সাংস্কৃতিক অনুষ্ঠানসমূহ সহজে বিচাৰি পাওক।',
    highlights: [
      'Interactive Gamusa-styled navigation bar',
      'Global Search shortcut: press Ctrl + K or "/" anytime',
      'One-click access to all 35 district portals'
    ],
    placement: 'bottom'
  },
  {
    id: 'tourism-explore',
    targetSelector: '[data-tour="tourism-controls"]',
    route: '/tourism',
    badge: 'Step 2 of 9 • Explore Assam Filters',
    title: 'Explore Assam — Search & District Selector',
    title_as: 'অসম ভ্ৰমণ — সন্ধান আৰু জিলা নিৰ্বাচন',
    used_for: 'Filter all 80+ verified heritage places, ancient temples, tea gardens, and wildlife reserves by your chosen district (like Udalguri, Barpeta, Majuli, Kamrup) or keyword search.',
    used_for_as: 'আপোনাৰ পছন্দৰ জিলা বা কী-ৱৰ্ডৰ জৰিয়তে অসমৰ ৮০+ সংৰক্ষিত বনাঞ্চল, প্ৰাচীন মন্দিৰ আৰু ঐতিহ্য স্থান বিচাৰি উলিয়াওক।',
    description: 'Discover over 80+ verified natural reserves, tea estates, archaeological landmarks, and wildlife sanctuaries across Assam.',
    description_as: 'অসমৰ ৮০+ সংৰক্ষিত বনাঞ্চল, চাহ বাগিচা, ঐতিহাসিক স্মৃতিসৌধ আৰু বন্যপ্ৰাণী অভয়াৰণ্য অন্বেষণ কৰক।',
    highlights: [
      'Filter destinations instantly by any of the 35 administrative districts',
      'Live keyword search across historical sites and nature trails',
      'Instant count badge showing verified published locations'
    ],
    placement: 'bottom'
  },
  {
    id: 'districts-portal',
    targetSelector: '[data-tour="districts-map"]',
    route: '/districts',
    badge: 'Step 3 of 9 • 35 Administrative Districts',
    title: 'Interactive 35-District Administrative Map',
    title_as: '৩৫খন জিলাৰ ইন্টাৰেক্টিভ মানচিত্ৰ',
    used_for: 'Click any district boundary on the contiguous SVG map (from Tinsukia to Dhubri) to view its official headquarters, geography, demographics, and certified tourist locations.',
    used_for_as: 'মানচিত্ৰত যিকোনো জিলাৰ ওপৰত ক্লিক কৰি জিলা সদৰ, ভৌগোলিক তথ্য আৰু চৰকাৰী প’ৰ্টেলৰ লিংক পৰিদৰ্শন কৰক।',
    description: 'Deep dive into every administrative district of Assam—from Tinsukia in the east to Dhubri in the west, and Karbi Anglong to Dima Hasao.',
    description_as: 'পূবৰ তিনিচুকীয়াৰ পৰা পশ্চিমৰ ধুবুৰীলৈ, পাহাৰীয়া কাৰ্বি আংলং আৰু ডিমা হাছাওকে ধৰি সকলো জিলাৰ তথ্য।',
    highlights: [
      'Official district headquarters, geographical coordinates, and boundaries',
      'Key economic hubs, cultural heritage, and tourist destinations per district',
      'Direct links to official Assam State portals (assam.gov.in & bodoland.gov.in)'
    ],
    placement: 'bottom-right'
  },
  {
    id: 'destination-details',
    targetSelector: '[data-tour="nav-destinations-info"]',
    route: '/tourism',
    badge: 'Step 4 of 9 • Destination Details & GPS',
    title: 'Verified Destination Cards & Turn-by-Turn GPS',
    title_as: 'পৰ্যটন স্থানৰ তথ্য আৰু জিপিএছ নিৰ্দেশনা',
    used_for: 'View real photographs, factual history, best visiting seasons, entry guidelines, and click for 1-click turn-by-turn driving directions in Google Maps or OpenStreetMap.',
    used_for_as: 'প্ৰকৃত আলোকচিত্ৰ, প্ৰামাণিক ইতিহাস, ভ্ৰমণৰ উপযুক্ত সময় আৰু ১-ক্লিকত জিপিএছ ড্ৰাইভিং নিৰ্দেশনা লাভ কৰক।',
    description: 'Every destination features verified factual descriptions, high-resolution authentic photography, and precise GPS navigation.',
    description_as: 'প্ৰতিটো স্থানৰ বাবে সত্যনিষ্ঠ তথ্য, প্ৰকৃত আলোকচিত্ৰ আৰু নিখুঁত জিপিএছ নিৰ্দেশনা উপলব্ধ।',
    highlights: [
      'Turn-by-turn driving directions with Google Maps and OpenStreetMap',
      'Best season to visit, entry guidelines, and distance from major hubs',
      'Verified citation from District Administrations & Tourism Board'
    ],
    placement: 'bottom-right'
  },
  {
    id: 'directory-features',
    targetSelector: '[data-tour="directory-search"]',
    route: '/directory',
    badge: 'Step 5 of 9 • Verified Knowledge Directory',
    title: 'Universities, Temples & Schools Directory',
    title_as: 'বিশ্ববিদ্যালয়, সত্ৰ, মন্দিৰ আৰু ঐতিহ্য পঞ্জী',
    used_for: 'Search and inspect verified higher education universities, medical/engineering colleges, AHSEC/CBSE institutions, and sacred Satras with official portal links.',
    used_for_as: 'চৰকাৰী স্বীকৃতিপ্ৰাপ্ত বিশ্ববিদ্যালয়, মহাবিদ্যালয়, ঐতিহাসিক বিদ্যালয় আৰু সত্ৰসমূহৰ তথ্য পৰিদৰ্শন কৰক।',
    description: 'Browse verified institutions across Assam: public universities, medical colleges, historic higher secondary schools, sacred temples, and Satras.',
    description_as: 'বিশ্ববিদ্যালয়, চিকিৎসা মহাবিদ্যালয়, ঐতিহাসিক বিদ্যালয়, প্ৰাচীন মন্দিৰ আৰু সত্ৰসমূহৰ তথ্য।',
    highlights: [
      'Filter seamlessly by District and Category (Education, Temples, Wildlife)',
      'Subcategories for degree colleges, CBSE schools, Satras, and archaeological sites',
      'Direct one-click links to official institutional and administrative portals'
    ],
    placement: 'bottom'
  },
  {
    id: 'services-businesses',
    targetSelector: '[data-tour="services-list"]',
    route: '/services',
    badge: 'Step 6 of 9 • Local Economy & Services',
    title: 'Essential Civic & Artisan Services',
    title_as: 'স্থানীয় ব্যৱসায় আৰু নাগৰিক সেৱা',
    used_for: 'Find certified electricians, technicians, healthcare providers, and traditional artisans (Sualkuchi Muga weavers, Sarthebari bell-metal craftsmen) by district.',
    used_for_as: 'জিলা অনুসৰি কাৰিকৰ, চিকিৎসক, বিজুলী কৰ্মী আৰু পৰম্পৰাগত হস্তশিল্পৰ সেৱাসমূহ বিচাৰি পাওক।',
    description: 'Connect with grassroots services, Sualkuchi handloom silk weavers, Sarthebari bell metal artisans, emergency medical providers, and civic utilities.',
    description_as: 'শুৱালকুছিৰ পাট-মুগাৰ শিল্পী, সৰ্থেবাৰীৰ কাঁহ-পিতলৰ কাৰিকৰ আৰু নাগৰিক সেৱাসমূহ।',
    highlights: [
      'Clear differentiation between officially verified and community-listed services',
      'Filter by district, operational status, and trade category',
      'Direct contact phone numbers, addresses, and physical locations'
    ],
    placement: 'bottom'
  },
  {
    id: 'cultural-events',
    targetSelector: '[data-tour="events-controls"]',
    route: '/events',
    badge: 'Step 7 of 9 • Cultural Calendar',
    title: 'Cultural Festivals & Temple Venues',
    title_as: 'সাংস্কৃতিক উৎসৱ আৰু মন্দিৰৰ দিনপঞ্জী',
    used_for: 'Track annual festival dates (Historic Howly Raas Mahotsav, Majuli Raas, Rongali Bihu, Barpeta Doul Utsav) with venue locations, temple grounds, and navigation maps.',
    used_for_as: 'ঐতিহাসিক হাওলী ৰাস, মাজুলীৰ ৰাস, ব’হাগ বিহু আদি উৎসৱৰ তাৰিখ আৰু মন্দিৰ প্ৰাংগণৰ জিপিএছ মানচিত্ৰ চাওক।',
    description: 'Explore celebrated festivals across Assam: Howly & Majuli Raas Mahotsavs, Rongali Bihu, Jonbeel Mela, Barpeta Doul Utsav, and book fairs.',
    description_as: 'হাওলী আৰু মাজুলীৰ ৰাস মহোৎসৱ, ব’হাগ বিহু, জোনবিল মেলা আৰু বৰপেটাৰ দৌল মহোৎসৱৰ সময়সূচী।',
    highlights: [
      'Festival calendar with exact start and end dates',
      'Authentic event venue photography and celebration history',
      'Interactive maps with one-click driving navigation to temple grounds'
    ],
    placement: 'bottom'
  },
  {
    id: 'community-submissions',
    targetSelector: '[data-tour="submit-form"]',
    route: '/submit',
    badge: 'Step 8 of 9 • Community Contribution',
    title: 'Suggest a Place or Submit Correction',
    title_as: 'নতুন স্থানৰ পৰামৰ্শ আৰু সংশোধন',
    used_for: 'Contribute a newly discovered tourist spot, list your trade or cultural event, or report an outdated address for editorial review.',
    used_for_as: 'আপোনাৰ অঞ্চলৰ নতুন স্থান, ব্যৱসায় বা অনুষ্ঠান অন্তৰ্ভুক্ত কৰক অথবা ভুল তথ্য থাকিলে সংশোধনৰ আবেদন জনাওক।',
    description: 'AXOM ONE belongs to the people of Assam. Suggest a local destination, register your small business, or report any inaccuracy you discover.',
    description_as: 'আপোনাৰ অঞ্চলৰ নতুন স্থানৰ পৰামৰ্শ দিয়ক বা কিবা ভুল থাকিলে সহজতে সংশোধনৰ আবেদন জনাওক।',
    highlights: [
      'All submissions undergo strict administrative review before publishing',
      'Submit historical background, photos, location coordinates, and sources',
      'Dedicated "/report" portal to notify editors of outdated hours or changes'
    ],
    placement: 'bottom-right'
  },
  {
    id: 'language-accessibility',
    targetSelector: '[data-tour="header-lang-picker"]',
    route: '/',
    badge: 'Step 9 of 9 • Preferences',
    title: 'Language Switcher & Accessibility',
    title_as: 'ভাষা নিৰ্বাচন আৰু সুবিধা',
    used_for: 'Switch the entire interface seamlessly between English, অসমীয়া (Assamese), and हिन्दी (Hindi). Preference is stored 100% locally on your device.',
    used_for_as: 'ইংৰাজী, অসমীয়া আৰু হিন্দী ভাষাৰ মাজত সহজে সলনি কৰক। আপোনাৰ পছন্দ ব্ৰাউজাৰত সংৰক্ষিত থাকে।',
    description: 'Switch between English, Assamese (অসমীয়া), and Hindi. AXOM ONE respects your screen reader, keyboard focus, and reduced-motion preferences.',
    description_as: 'ইংৰাজী, অসমীয়া আৰু হিন্দী ভাষাৰ মাজত পৰিৱৰ্তন কৰক।',
    highlights: [
      'Instant language switching without reloading the page',
      'Full keyboard navigation support (Tab, Enter, Escape, Arrow keys)',
      '100% private: your preferences are stored strictly in your browser'
    ],
    placement: 'bottom'
  }
];
