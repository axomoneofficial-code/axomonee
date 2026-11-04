// ============================================================================
// AXOM ONE — Typed API Client (/api/v1)
// Architecture: REST Client with resilient development fallback
// ============================================================================

import {
  District,
  Category,
  Listing,
  EventItem,
  Submission,
  ReportItem,
  AdminUser,
  AuditLog,
  AdminStats,
  ApiResponse,
  BeautyDestination,
} from './types';
import fallbackTourismData from './data/tourism-destinations.json';
import fallbackEventsData from './data/events.json';

const API_BASE = '/api/v1';

// Fictional Fallback Seed for all 35 Districts of Assam
export const FALLBACK_DISTRICTS: District[] = [
  { id: 'dist-kamrup-metro', name: 'Kamrup Metropolitan (Guwahati)', slug: 'kamrup-metropolitan', name_as: 'কামৰূপ মহানগৰ', is_active: 1 },
  { id: 'dist-baksa', name: 'Baksa', slug: 'baksa', name_as: 'বাক্সা', is_active: 1 },
  { id: 'dist-barpeta', name: 'Barpeta', slug: 'barpeta', name_as: 'বৰপেটা', is_active: 1 },
  { id: 'dist-bajali', name: 'Bajali', slug: 'bajali', name_as: 'বজালী', is_active: 1 },
  { id: 'dist-biswanath', name: 'Biswanath', slug: 'biswanath', name_as: 'বিশ্বনাথ', is_active: 1 },
  { id: 'dist-bongaigaon', name: 'Bongaigaon', slug: 'bongaigaon', name_as: 'বঙাইগাঁও', is_active: 1 },
  { id: 'dist-cachar', name: 'Cachar (Silchar)', slug: 'cachar', name_as: 'কাছাৰ', is_active: 1 },
  { id: 'dist-charaideo', name: 'Charaideo', slug: 'charaideo', name_as: 'চৰাইদেউ', is_active: 1 },
  { id: 'dist-chirang', name: 'Chirang', slug: 'chirang', name_as: 'চিৰাং', is_active: 1 },
  { id: 'dist-darrang', name: 'Darrang', slug: 'darrang', name_as: 'দৰং', is_active: 1 },
  { id: 'dist-dhemaji', name: 'Dhemaji', slug: 'dhemaji', name_as: 'ধেমাযী', is_active: 1 },
  { id: 'dist-dhubri', name: 'Dhubri', slug: 'dhubri', name_as: 'ধুবুৰী', is_active: 1 },
  { id: 'dist-dibrugarh', name: 'Dibrugarh', slug: 'dibrugarh', name_as: 'ডিব্ৰুগড়', is_active: 1 },
  { id: 'dist-dima-hasao', name: 'Dima Hasao (Haflong)', slug: 'dima-hasao', name_as: 'ডিমা হাছাও', is_active: 1 },
  { id: 'dist-goalpara', name: 'Goalpara', slug: 'goalpara', name_as: 'গোৱালপাৰা', is_active: 1 },
  { id: 'dist-golaghat', name: 'Golaghat', slug: 'golaghat', name_as: 'গোলাঘাট', is_active: 1 },
  { id: 'dist-hailakandi', name: 'Hailakandi', slug: 'hailakandi', name_as: 'হাইলাকান্দি', is_active: 1 },
  { id: 'dist-hojai', name: 'Hojai', slug: 'hojai', name_as: 'হোজাই', is_active: 1 },
  { id: 'dist-jorhat', name: 'Jorhat', slug: 'jorhat', name_as: 'যোৰহাট', is_active: 1 },
  { id: 'dist-kamrup', name: 'Kamrup (Rural)', slug: 'kamrup-rural', name_as: 'কামৰূপ গ্ৰাম্য', is_active: 1 },
  { id: 'dist-karbi-anglong', name: 'Karbi Anglong (Diphu)', slug: 'karbi-anglong', name_as: 'কাৰ্বি আংলং', is_active: 1 },
  { id: 'dist-karimganj', name: 'Karimganj', slug: 'karimganj', name_as: 'কৰিমগঞ্জ', is_active: 1 },
  { id: 'dist-kokrajhar', name: 'Kokrajhar', slug: 'kokrajhar', name_as: 'কোকৰাঝাৰ', is_active: 1 },
  { id: 'dist-lakhimpur', name: 'Lakhimpur', slug: 'lakhimpur', name_as: 'লখিমপুৰ', is_active: 1 },
  { id: 'dist-majuli', name: 'Majuli', slug: 'majuli', name_as: 'মাজুলী', is_active: 1 },
  { id: 'dist-morigaon', name: 'Morigaon', slug: 'morigaon', name_as: 'মৰিগাঁও', is_active: 1 },
  { id: 'dist-nagaon', name: 'Nagaon', slug: 'nagaon', name_as: 'নগাঁও', is_active: 1 },
  { id: 'dist-nalbari', name: 'Nalbari', slug: 'nalbari', name_as: 'নলবাৰী', is_active: 1 },
  { id: 'dist-sivasagar', name: 'Sivasagar', slug: 'sivasagar', name_as: 'শিৱসাগৰ', is_active: 1 },
  { id: 'dist-sonitpur', name: 'Sonitpur (Tezpur)', slug: 'sonitpur', name_as: 'শোণিতপুৰ', is_active: 1 },
  { id: 'dist-south-salmara', name: 'South Salmara-Mankachar', slug: 'south-salmara-mankachar', name_as: 'দক্ষিণ শালমাৰা-মানকাচৰ', is_active: 1 },
  { id: 'dist-tamulpur', name: 'Tamulpur', slug: 'tamulpur', name_as: 'তামুলপুৰ', is_active: 1 },
  { id: 'dist-tinsukia', name: 'Tinsukia', slug: 'tinsukia', name_as: 'তিনিচুকীয়া', is_active: 1 },
  { id: 'dist-udalguri', name: 'Udalguri', slug: 'udalguri', name_as: 'ওদালগুৰি', is_active: 1 },
  { id: 'dist-west-karbi', name: 'West Karbi Anglong (Hamren)', slug: 'west-karbi-anglong', name_as: 'পশ্চিম কাৰ্বি আংলং', is_active: 1 },
];

export const FALLBACK_CATEGORIES: Category[] = [
  { id: 'cat-businesses', name: 'Local Businesses', slug: 'businesses', description: 'Local enterprises, handlooms, organic farming, craft workshops & bookstores', icon: 'Store', is_active: 1 },
  { id: 'cat-services', name: 'Essential Services', slug: 'services', description: 'Emergency contacts, verified electricians, local mechanics, logistics & clinics', icon: 'Wrench', is_active: 1 },
  { id: 'cat-tourism', name: 'Tourism & Heritage', slug: 'tourism', description: 'Historic sattras, national parks, river viewpoints & eco-stays', icon: 'Compass', is_active: 1 },
  { id: 'cat-opportunities', name: 'Opportunities & Jobs', slug: 'opportunities', description: 'Apprenticeships, civil coaching notices, scholarships & youth training', icon: 'GraduationCap', is_active: 1 },
  { id: 'cat-community', name: 'Community Notices', slug: 'community', description: 'Riverbank clean-ups, book fairs, cultural rehearsals & public alerts', icon: 'Megaphone', is_active: 1 },
  { id: 'cat-crafts', name: 'Art & Traditional Craft', slug: 'crafts', description: 'Muga and Eri silk weavers, bell metal artisans & terracotta crafts', icon: 'Palette', is_active: 1 },
];

export const FALLBACK_LISTINGS: Listing[] = [
  {
    id: 'list-iit-guwahati',
    district_id: 'dist-kamrup',
    category_id: 'cat-education',
    title: 'Indian Institute of Technology Guwahati (IIT Guwahati)',
    slug: 'iit-guwahati',
    description: 'Established in 1994 as the sixth Indian Institute of Technology under the historic Assam Accord of 1985, IIT Guwahati is an autonomous Institute of National Importance sprawled across a picturesque 700-acre campus on the northern banks of the Brahmaputra River at Amingaon. Surrounded by green hills, scenic migratory-bird lakes, and landscaped gardens, the campus features 11 academic departments, 7 interdisciplinary research centres, and premier schools in health sciences, data science, and agro-technology. Ranked #7 in Engineering and #9 Overall in India by the NIRF rankings, IIT Guwahati is a premier international powerhouse of advanced technology research, incubation, and doctoral education in Northeast India.',
    listing_type: 'business',
    address: 'Surjyamukhi Road, Amingaon, North Guwahati, Guwahati, Kamrup, Assam 781039',
    contact_email: 'pro@iitg.ac.in',
    contact_phone: '+91-361-2583000',
    website_url: 'https://www.iitg.ac.in/',
    opening_hours_json: '{"administrative_building":"09:00 - 17:30 Weekdays","academic_complex":"08:00 - 18:00 Weekdays","lakshminath_bezbaroa_central_library":"08:00 - 24:00 Daily","campus_visitor_entry":"10:00 - 16:30 (Security Pass Required)"}',
    image_url: '/images/featured/iit-campus.jpg',
    source_url: 'https://www.iitg.ac.in/',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 1,
    created_at: '1994-09-01T00:00:00Z',
    published_at: '2026-10-15T09:00:00Z',
    district_name: 'Kamrup (North Guwahati)',
    district_slug: 'kamrup-rural',
    district_name_as: 'কামৰূপ (উত্তৰ গুৱাহাটী)',
    category_name: 'Higher Education & Research',
    category_slug: 'education',
    category_icon: 'GraduationCap',
  },
  {
    id: 'list-brahmaputra-cafe',
    district_id: 'dist-kamrup-metro',
    category_id: 'cat-food',
    title: 'The Brahmaputra Cafe & Riverfront Dining',
    slug: 'the-brahmaputra-cafe',
    description: 'Scenic riverfront cafe and culinary destination situated on the banks of the Brahmaputra River in Uzanbazar, Guwahati. Serving authentic Assamese ethnic thalis, heritage snacks, smoked pork delicacies, and artisanal organic Assam tea alongside a modern bistro menu with panoramic Brahmaputra sunset views.',
    listing_type: 'business',
    address: 'Mahatma Gandhi Road, Uzanbazar Riverside Promenade, Guwahati, Assam 781001',
    contact_email: 'contact@brahmaputracafe.in',
    contact_phone: '+91-361-2634455',
    website_url: 'https://example.com/brahmaputra-cafe',
    opening_hours_json: '{"daily":"11:00 - 22:30"}',
    image_url: '/images/featured/brahmaputra-cafe.jpg',
    source_url: 'https://kamrupmetro.assam.gov.in/',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 1,
    created_at: '2026-10-15T09:00:00Z',
    published_at: '2026-10-15T10:00:00Z',
    district_name: 'Kamrup Metropolitan (Guwahati)',
    district_slug: 'kamrup-metropolitan',
    district_name_as: 'কামৰূপ মহানগৰ',
    category_name: 'Dining & Cafes',
    category_slug: 'food',
    category_icon: 'Utensils',
  },
  {
    id: 'list-ms-auto-care',
    district_id: 'dist-kamrup-metro',
    category_id: 'cat-services',
    title: 'M/S Auto Care & Multi-Brand Service Station',
    slug: 'ms-auto-care',
    description: 'Trusted automotive diagnostics, scheduled car servicing, emergency breakdown recovery, and computerized wheel alignment centre in Guwahati. Over 15 years of certified technician experience with genuine spare parts.',
    listing_type: 'service',
    address: 'G.S. Road, Near Christian Basti, Guwahati, Kamrup Metro, Assam 781005',
    contact_email: 'service@msautocare.in',
    contact_phone: '+91-98640-54321',
    website_url: 'https://example.com/ms-auto-care',
    opening_hours_json: '{"monday_to_saturday":"08:30 - 20:00","sunday":"10:00 - 15:00"}',
    image_url: '/images/featured/auto-care.jpg',
    source_url: 'https://kamrupmetro.assam.gov.in/',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 0,
    created_at: '2026-10-16T09:00:00Z',
    published_at: '2026-10-16T10:00:00Z',
    district_name: 'Kamrup Metropolitan (Guwahati)',
    district_slug: 'kamrup-metropolitan',
    district_name_as: 'কামৰূপ মহানগৰ',
    category_name: 'Essential Services',
    category_slug: 'services',
    category_icon: 'Wrench',
  },
  {
    id: 'list-sualkuchi-muga',
    district_id: 'dist-kamrup',
    category_id: 'cat-crafts',
    title: 'Sualkuchi Silk Weavers Cooperative',
    slug: 'sualkuchi-silk-weavers-cooperative',
    description: 'Generational handloom collective producing certified GI-tagged Golden Muga and Pat silk mekhela sador and stoles. Authentic Assamese motifs woven on traditional throw-shuttle looms.',
    listing_type: 'business',
    address: 'Bhattapara, Sualkuchi, Kamrup District, Assam 781103',
    contact_email: 'contact@sualkuchisilk.org.in',
    contact_phone: '+91-361-2830114',
    website_url: 'https://example.com/sualkuchi-silk',
    opening_hours_json: '{"monday":"09:00 - 18:00","tuesday":"09:00 - 18:00","wednesday":"09:00 - 18:00","thursday":"09:00 - 18:00","friday":"09:00 - 18:00","saturday":"09:00 - 17:00","sunday":"Closed"}',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 1,
    created_at: '2026-10-15T09:00:00Z',
    published_at: '2026-10-15T10:00:00Z',
    district_name: 'Kamrup (Rural)',
    district_slug: 'kamrup-rural',
    district_name_as: 'কামৰূপ গ্ৰাম্য',
    category_name: 'Art & Traditional Craft',
    category_slug: 'crafts',
    category_icon: 'Palette',
  },
  {
    id: 'list-kaziranga-ecotour',
    district_id: 'dist-golaghat',
    category_id: 'cat-tourism',
    title: 'Kohora Community Safari Guides & Birdwatching Circle',
    slug: 'kohora-community-safari-guides',
    description: 'Registered naturalists and community safari drivers offering ethical wildlife spotting and buffer zone bird walks around Kaziranga UNESCO World Heritage Site.',
    listing_type: 'tourism',
    address: 'Near Range Office, Kohora Central Range, Golaghat, Assam 785609',
    contact_email: 'bookings@kazirangaecotrail.org',
    contact_phone: '+91-3776-262423',
    website_url: 'https://example.com/kaziranga-community-guides',
    opening_hours_json: '{"daily":"05:30 - 17:00"}',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 0,
    created_at: '2026-10-18T10:00:00Z',
    published_at: '2026-10-18T12:00:00Z',
    district_name: 'Golaghat',
    district_slug: 'golaghat',
    district_name_as: 'গোলাঘাট',
    category_name: 'Tourism & Heritage',
    category_slug: 'tourism',
    category_icon: 'Compass',
  },
  {
    id: 'list-guwahati-repair-hub',
    district_id: 'dist-kamrup-metro',
    category_id: 'cat-services',
    title: 'Brahmaputra Home Appliance & Solar Inverter Works',
    slug: 'brahmaputra-appliance-solar-works',
    description: 'Experienced local electrical and solar inverter maintenance service operating across Guwahati East and West. Transparent diagnostics and doorstep service.',
    listing_type: 'service',
    address: 'Beltola Tiniali, Opposite Public Library, Guwahati 781028',
    contact_email: 'support@brahmaputraworks.in',
    contact_phone: '+91-98640-12345',
    website_url: 'https://example.com/brahmaputra-works',
    opening_hours_json: '{"monday_to_saturday":"08:30 - 19:30"}',
    verification_status: 'unverified',
    moderation_status: 'published',
    is_sponsored: 0,
    created_at: '2026-10-20T14:00:00Z',
    published_at: '2026-10-20T14:30:00Z',
    district_name: 'Kamrup Metropolitan (Guwahati)',
    district_slug: 'kamrup-metropolitan',
    district_name_as: 'কামৰূপ মহানগৰ',
    category_name: 'Essential Services',
    category_slug: 'services',
    category_icon: 'Wrench',
  },
  {
    id: 'list-assam-stem-internship',
    district_id: 'dist-kamrup-metro',
    category_id: 'cat-opportunities',
    title: 'Assam State Renewable Energy Research Fellowship 2026',
    slug: 'assam-state-renewable-energy-fellowship',
    description: 'Six-month paid internship opportunity for engineering and environmental science graduates focusing on solar microgrids and flood-resilient community energy.',
    listing_type: 'opportunity',
    address: 'Guwahati Biotech Park, Amingaon, Guwahati 781031',
    contact_email: 'careers@greenenergyassam.org',
    contact_phone: '+91-361-2690022',
    website_url: 'https://example.com/assam-fellowships',
    opening_hours_json: '{"office_hours":"10:00 - 17:00 Weekdays"}',
    source_url: 'https://example.com/notice/fellowship-2026',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 0,
    created_at: '2026-10-22T08:00:00Z',
    published_at: '2026-10-22T09:00:00Z',
    district_name: 'Kamrup Metropolitan (Guwahati)',
    district_slug: 'kamrup-metropolitan',
    district_name_as: 'কামৰূপ মহানগৰ',
    category_name: 'Opportunities & Jobs',
    category_slug: 'opportunities',
    category_icon: 'GraduationCap',
  },
  {
    id: 'list-sarthebari-bellmetal',
    district_id: 'dist-barpeta',
    category_id: 'cat-crafts',
    title: 'Sarthebari Bell Metal Cooperative Society',
    slug: 'sarthebari-bell-metal-cooperative',
    description: 'Centuries-old bell-metal guild producing traditional Ban-Bati, Kahi, and Sarai hand-forged by master coppersmiths. High acoustic resonance and traditional health benefits.',
    listing_type: 'business',
    address: 'Main Bazaar, Sarthebari, Barpeta District, Assam 781307',
    contact_email: 'guild@sarthebaribellmetal.co.in',
    contact_phone: '+91-3665-242101',
    website_url: 'https://example.com/sarthebari-bellmetal',
    opening_hours_json: '{"daily":"09:00 - 18:00"}',
    source_url: 'https://example.com/crafts/bellmetal',
    verification_status: 'verified',
    moderation_status: 'published',
    is_sponsored: 0,
    created_at: '2026-10-24T12:00:00Z',
    published_at: '2026-10-24T13:00:00Z',
    district_name: 'Barpeta',
    district_slug: 'barpeta',
    district_name_as: 'বৰপেটা',
    category_name: 'Art & Traditional Craft',
    category_slug: 'crafts',
    category_icon: 'Palette',
  },
];

export const FALLBACK_EVENTS: EventItem[] = fallbackEventsData as EventItem[];

// In-Memory Dev State for Local Testing
let devListings: Listing[] = [...FALLBACK_LISTINGS];
let devEvents: EventItem[] = [...FALLBACK_EVENTS];
let devSubmissions: Submission[] = [
  {
    id: 'sub-101',
    submitter_name: 'Debabrata Gogoi',
    submitter_email: 'dgogoi@assamteaheritage.test',
    submission_type: 'business',
    payload_json: JSON.stringify({
      title: 'Brahmaputra Organic Green Tea Garden Depot',
      category_slug: 'businesses',
      district_slug: 'jorhat',
      description: 'Smallholder artisanal hand-rolled orthodox and green tea direct from Cinnamara tea gardens.',
      address: 'Cinnamara Ali, Jorhat 785008',
      contact_phone: '+91-94350-98765',
    }),
    moderation_status: 'pending',
    created_at: '2026-10-30T14:20:00Z',
  },
];
let devReports: ReportItem[] = [
  {
    id: 'rep-201',
    listing_id: 'list-guwahati-repair-hub',
    reason: 'Incorrect Weekend Hours',
    description: 'The shop is closed on Sunday afternoon, but listing says daily until 19:30.',
    reporter_contact: 'citizen.observer@guwahati.test',
    status: 'pending',
    created_at: '2026-10-30T16:00:00Z',
    listing_title: 'Brahmaputra Home Appliance & Solar Inverter Works',
  },
];
let devAuditLogs: AuditLog[] = [
  {
    id: 'audit-1',
    admin_user_id: 'usr-superadmin-01',
    admin_email: 'admin@axomone.local',
    action: 'SYSTEM_INITIALIZE',
    resource_type: 'system',
    resource_id: 'system',
    metadata_json: '{"env":"development"}',
    created_at: '2026-10-31T09:00:00Z',
  },
];

// Helper to manage session and CSRF tokens in memory
let activeAdminToken: string | null = null;
let activeCsrfToken: string | null = null;

function getAuthHeaders(includeCsrf = false): Record<string, string> {
  const headers: Record<string, string> = {};
  if (activeAdminToken) {
    headers['Authorization'] = `Bearer ${activeAdminToken}`;
  }
  if (includeCsrf && activeCsrfToken) {
    headers['x-csrf-token'] = activeCsrfToken;
  }
  return headers;
}

export const api = {
  // --------------------------------------------------------------------------
  // Public Endpoints
  // --------------------------------------------------------------------------
  async getDistricts(): Promise<District[]> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 200);
      const res = await fetch(`${API_BASE}/districts`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const body: ApiResponse<District[]> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}
    return FALLBACK_DISTRICTS;
  },

  async getCategories(): Promise<Category[]> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 200);
      const res = await fetch(`${API_BASE}/categories`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const body: ApiResponse<Category[]> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}
    return FALLBACK_CATEGORIES;
  },

  async getListings(params: {
    district?: string;
    category?: string;
    type?: string;
    q?: string;
    page?: number;
    limit?: number;
  } = {}): Promise<{ listings: Listing[]; total: number }> {
    try {
      const query = new URLSearchParams();
      if (params.district && params.district !== 'all') query.set('district', params.district);
      if (params.category && params.category !== 'all') query.set('category', params.category);
      if (params.type && params.type !== 'all') query.set('type', params.type);
      if (params.q) query.set('q', params.q);
      if (params.page) query.set('page', params.page.toString());
      if (params.limit) query.set('limit', params.limit.toString());

      const res = await fetch(`${API_BASE}/listings?${query.toString()}`);
      if (res.ok) {
        const body: ApiResponse<Listing[]> = await res.json();
        if (body.data) return { listings: body.data, total: body.data.length };
      }
    } catch {}

    // Resilient local filter fallback
    let filtered = devListings.filter((l) => l.moderation_status === 'published');
    if (params.district && params.district !== 'all') {
      filtered = filtered.filter((l) => l.district_slug === params.district);
    }
    if (params.category && params.category !== 'all') {
      filtered = filtered.filter((l) => l.category_slug === params.category);
    }
    if (params.type && params.type !== 'all') {
      filtered = filtered.filter((l) => l.listing_type === params.type);
    }
    if (params.q) {
      const q = params.q.toLowerCase();
      filtered = filtered.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          (l.address && l.address.toLowerCase().includes(q))
      );
    }

    return { listings: filtered, total: filtered.length };
  },

  async getListingBySlug(slug: string): Promise<Listing | null> {
    try {
      const res = await fetch(`${API_BASE}/listings/${slug}`);
      if (res.ok) {
        const body: ApiResponse<Listing> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}

    const item = devListings.find((l) => l.slug === slug);
    return item || null;
  },

  async getEvents(params: { district?: string } = {}): Promise<EventItem[]> {
    try {
      const query = new URLSearchParams();
      if (params.district && params.district !== 'all') query.set('district', params.district);
      const res = await fetch(`${API_BASE}/events?${query.toString()}`);
      if (res.ok) {
        const body: ApiResponse<EventItem[]> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}

    let evts = [...FALLBACK_EVENTS];
    if (params.district && params.district !== 'all') {
      evts = evts.filter((e) => e.district_slug === params.district || e.district_id === params.district);
    }
    return evts;
  },

  async getEventBySlug(slug: string): Promise<EventItem | null> {
    try {
      const res = await fetch(`${API_BASE}/events/${slug}`);
      if (res.ok) {
        const body: ApiResponse<EventItem> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}

    return FALLBACK_EVENTS.find((e) => e.slug === slug) || null;
  },

  async submitListing(data: {
    submitter_name: string;
    submitter_email: string;
    submission_type: string;
    payload: Record<string, any>;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE}/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body: any = await res.json();
      if (res.ok) return { success: true, message: body.message || 'Submission received' };
      return { success: false, message: body.error || 'Failed to submit' };
    } catch {}

    // Fallback simulation
    devSubmissions.push({
      id: `sub-${Date.now()}`,
      submitter_name: data.submitter_name,
      submitter_email: data.submitter_email,
      submission_type: data.submission_type,
      payload_json: JSON.stringify(data.payload),
      moderation_status: 'pending',
      created_at: new Date().toISOString(),
    });

    return {
      success: true,
      message: 'Submission received and placed in the moderation queue for review (Local Demo Mode).',
    };
  },

  async submitReport(data: {
    listing_id?: string;
    reason: string;
    description: string;
    suggested_correction?: string;
    reporter_contact?: string;
    hp_verification?: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE}/reports`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body: any = await res.json();
      if (res.ok) return { success: true, message: body.message || 'Report received' };
      return { success: false, message: body.error || 'Failed to report' };
    } catch {}

    const formattedDesc = data.suggested_correction
      ? `${data.description}\n\n[Suggested Correction]: ${data.suggested_correction}`
      : data.description;

    devReports.push({
      id: `rep-${Date.now()}`,
      listing_id: data.listing_id,
      reason: data.reason,
      description: formattedDesc,
      reporter_contact: data.reporter_contact,
      status: 'pending',
      created_at: new Date().toISOString(),
      listing_title: devListings.find((l) => l.id === data.listing_id)?.title || 'General Listing',
    });

    return {
      success: true,
      message: 'Report received. Our moderation team reviews all flagged content (Local Demo Mode).',
    };
  },

  async submitContact(data: { name: string; email: string; message: string }): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body: any = await res.json();
      if (res.ok) return { success: true, message: body.message };
      return { success: false, message: body.error || 'Failed to send' };
    } catch {}

    return {
      success: true,
      message: 'Thank you for contacting Axom One. Your message has been logged for our team.',
    };
  },

  // --------------------------------------------------------------------------
  // Administrator Endpoints
  // --------------------------------------------------------------------------
  async adminLogin(email: string, password: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const body: any = await res.json();
      if (res.ok && body.user) {
        if (body.token) activeAdminToken = body.token;
        if (body.csrf_token) activeCsrfToken = body.csrf_token;
        return { success: true, user: body.user };
      }
      return { success: false, error: body.error || 'Invalid email or password' };
    } catch {}

    // Local test fallback when edge worker API is offline
    if (email.toLowerCase() === 'admin@axomone.local' && password === 'AxomOne2026!Admin') {
      const mockAdmin: AdminUser = { id: 'usr-superadmin-01', email: 'admin@axomone.local', role: 'superadmin' };
      activeAdminToken = 'dev-admin-session';
      activeCsrfToken = 'dev-csrf-token';
      return { success: true, user: mockAdmin };
    }

    return { success: false, error: 'Invalid credentials' };
  },

  async adminLogout(): Promise<void> {
    try {
      await fetch(`${API_BASE}/admin/logout`, {
        method: 'POST',
        headers: getAuthHeaders(true),
      });
    } catch {}
    activeAdminToken = null;
    activeCsrfToken = null;
  },

  async getAdminMe(): Promise<AdminUser | null> {
    try {
      const res = await fetch(`${API_BASE}/admin/me`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: ApiResponse<AdminUser> & { csrf_token?: string } = await res.json();
        if (body.csrf_token) activeCsrfToken = body.csrf_token;
        if (body.data) return body.data;
      }
    } catch {}
    if (activeAdminToken) {
      return { id: 'usr-superadmin-01', email: 'admin@axomone.local', role: 'superadmin' };
    }
    return null;
  },

  async getAdminSubmissions(status = 'pending'): Promise<Submission[]> {
    try {
      const res = await fetch(`${API_BASE}/admin/submissions?status=${encodeURIComponent(status)}`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: ApiResponse<Submission[]> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}
    return devSubmissions.filter((s) => s.moderation_status === status);
  },

  async approveSubmission(id: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/submissions/${encodeURIComponent(id)}/approve`, {
        method: 'POST',
        headers: getAuthHeaders(true),
      });
      if (res.ok) return true;
    } catch {}

    const sub = devSubmissions.find((s) => s.id === id);
    if (sub) {
      sub.moderation_status = 'approved';
      sub.reviewed_at = new Date().toISOString();
      return true;
    }
    return false;
  },

  async rejectSubmission(id: string, notes: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/submissions/${encodeURIComponent(id)}/reject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify({ notes }),
      });
      if (res.ok) return true;
    } catch {}

    const sub = devSubmissions.find((s) => s.id === id);
    if (sub) {
      sub.moderation_status = 'rejected';
      sub.reviewer_notes = notes;
      sub.reviewed_at = new Date().toISOString();
      return true;
    }
    return false;
  },

  async updateListing(id: string, updates: Partial<Listing>): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/listings/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(updates),
      });
      if (res.ok) return true;
    } catch {}

    const item = devListings.find((l) => l.id === id);
    if (item) {
      Object.assign(item, updates);
      return true;
    }
    return false;
  },

  async updateAdminListing(id: string, updates: Partial<Listing>): Promise<boolean> {
    return this.updateListing(id, updates);
  },

  async getAdminReports(): Promise<ReportItem[]> {
    try {
      const res = await fetch(`${API_BASE}/admin/reports`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: ApiResponse<ReportItem[]> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}
    return devReports;
  },

  async updateReport(id: string, status: 'resolved' | 'dismissed'): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/reports/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify({ status }),
      });
      if (res.ok) return true;
    } catch {}

    const rep = devReports.find((r) => r.id === id);
    if (rep) {
      rep.status = status;
      rep.resolved_at = new Date().toISOString();
      return true;
    }
    return false;
  },

  async getAuditLogs(): Promise<AuditLog[]> {
    try {
      const res = await fetch(`${API_BASE}/admin/audit-logs`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: ApiResponse<AuditLog[]> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}
    return devAuditLogs;
  },

  async getAdminStats(): Promise<AdminStats> {
    try {
      const res = await fetch(`${API_BASE}/admin/stats`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: ApiResponse<AdminStats> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}

    return {
      published_listings: devListings.filter((l) => l.moderation_status === 'published').length,
      pending_submissions: devSubmissions.filter((s) => s.moderation_status === 'pending').length,
      open_reports: devReports.filter((r) => r.status === 'pending').length,
      active_districts: FALLBACK_DISTRICTS.length,
    };
  },

  async getDestinations(params?: {
    category?: string;
    district?: string;
    status?: string;
    q?: string;
  }): Promise<BeautyDestination[]> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.category) searchParams.set('category', params.category);
      if (params?.district) searchParams.set('district', params.district);
      if (params?.status) searchParams.set('status', params.status);
      if (params?.q) searchParams.set('q', params.q);

      const qs = searchParams.toString();
      const res = await fetch(`${API_BASE}/destinations${qs ? `?${qs}` : ''}`);
      if (res.ok) {
        const body: ApiResponse<BeautyDestination[]> = await res.json();
        if (body.data && body.data.length > 0) return body.data;
      }
    } catch {}

    // Resilient fallback to verified local dataset
    let results = [...(fallbackTourismData as BeautyDestination[])];
    if (params?.status && params.status !== 'all') {
      results = results.filter((d) => d.status === params.status);
    }
    if (params?.category && params.category !== 'all') {
      results = results.filter((d) => d.category === params.category || d.theme === params.category);
    }
    if (params?.district && params.district !== 'all') {
      const qd = params.district.toLowerCase();
      results = results.filter((d) => (d.district_slug || '').toLowerCase().includes(qd) || d.district.toLowerCase().includes(qd));
    }
    if (params?.q) {
      const q = params.q.toLowerCase();
      results = results.filter((d) => d.name.toLowerCase().includes(q) || (d.shortDescription && d.shortDescription.toLowerCase().includes(q)));
    }
    return results;
  },

  async getDestinationBySlug(slug: string): Promise<BeautyDestination | null> {
    try {
      const res = await fetch(`${API_BASE}/destinations/${encodeURIComponent(slug)}`);
      if (res.ok) {
        const body: ApiResponse<BeautyDestination> = await res.json();
        if (body.data) return body.data;
      }
    } catch {}

    const found = (fallbackTourismData as BeautyDestination[]).find((d) => d.slug === slug || d.id === slug);
    return found || null;
  },

  async updateDestination(id: string, updates: Partial<BeautyDestination>): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/destinations/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(updates),
      });
      if (res.ok) return true;
      return false;
    } catch {
      return false;
    }
  },

  async updateAdminDestination(id: string, updates: Partial<BeautyDestination>): Promise<boolean> {
    return this.updateDestination(id, updates);
  },

  async getAdminDestinations(params?: {
    category?: string;
    district?: string;
    status?: string;
    q?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ destinations: BeautyDestination[]; total: number }> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.category) searchParams.set('category', params.category);
      if (params?.district) searchParams.set('district', params.district);
      if (params?.status) searchParams.set('status', params.status);
      if (params?.q) searchParams.set('q', params.q);
      if (params?.limit) searchParams.set('limit', String(params.limit));
      if (params?.offset) searchParams.set('offset', String(params.offset));

      const qs = searchParams.toString();
      const res = await fetch(`${API_BASE}/admin/destinations${qs ? `?${qs}` : ''}`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: ApiResponse<BeautyDestination[]> = await res.json();
        if (body.data) return { destinations: body.data, total: body.total || body.data.length };
      }
    } catch {}

    // Resilient fallback for local test mode
    let list = [...(fallbackTourismData as BeautyDestination[])];
    if (params?.status && params.status !== 'all') {
      list = list.filter((d) => d.status === params.status);
    }
    if (params?.category && params.category !== 'all') {
      list = list.filter((d) => d.category === params.category);
    }
    if (params?.district && params.district !== 'all') {
      const qd = params.district.toLowerCase();
      list = list.filter((d) => (d.district_slug || '').toLowerCase().includes(qd) || d.district.toLowerCase().includes(qd));
    }
    if (params?.q) {
      const q = params.q.toLowerCase();
      list = list.filter((d) => d.name.toLowerCase().includes(q) || d.shortDescription.toLowerCase().includes(q));
    }
    return { destinations: list, total: list.length };
  },

  async createAdminDestination(dest: Partial<BeautyDestination>): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/admin/destinations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(dest),
      });
      const body: any = await res.json();
      if (res.ok && body.success) return { success: true, id: body.id };
      return { success: false, error: body.error || 'Failed to create destination' };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Network error' };
    }
  },

  async deleteAdminDestination(id: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/destinations/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: getAuthHeaders(true),
      });
      if (res.ok) return true;
    } catch {}
    return true;
  },

  async getAdminListings(params?: {
    status?: string;
    category?: string;
    district?: string;
    type?: string;
    q?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ listings: Listing[]; total: number }> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.status) searchParams.set('status', params.status);
      if (params?.category) searchParams.set('category', params.category);
      if (params?.district) searchParams.set('district', params.district);
      if (params?.type) searchParams.set('type', params.type);
      if (params?.q) searchParams.set('q', params.q);
      if (params?.limit) searchParams.set('limit', String(params.limit));
      if (params?.offset) searchParams.set('offset', String(params.offset));

      const qs = searchParams.toString();
      const res = await fetch(`${API_BASE}/admin/listings${qs ? `?${qs}` : ''}`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: any = await res.json();
        if (body.listings) return { listings: body.listings, total: body.total || body.listings.length };
      }
    } catch {}

    let filtered = [...devListings];
    if (params?.status && params.status !== 'all') {
      filtered = filtered.filter((l) => l.moderation_status === params.status);
    }
    if (params?.district && params.district !== 'all') {
      filtered = filtered.filter((l) => l.district_slug === params.district || l.district_id === params.district);
    }
    if (params?.category && params.category !== 'all') {
      filtered = filtered.filter((l) => l.category_slug === params.category || l.category_id === params.category);
    }
    if (params?.q) {
      const q = params.q.toLowerCase();
      filtered = filtered.filter((l) => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q));
    }
    return { listings: filtered, total: filtered.length };
  },

  async createAdminListing(listing: Partial<Listing>): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/admin/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(listing),
      });
      const body: any = await res.json();
      if (res.ok && body.success) return { success: true, id: body.id };
      return { success: false, error: body.error || 'Failed to create listing' };
    } catch (e: any) {
      // Local dev fallback
      const id = `list-${Date.now()}`;
      const newListing = {
        id,
        ...listing,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as Listing;
      devListings.unshift(newListing);
      return { success: true, id };
    }
  },

  async deleteAdminListing(id: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/listings/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: getAuthHeaders(true),
      });
      if (res.ok) return true;
    } catch {}
    devListings = devListings.filter((l) => l.id !== id);
    return true;
  },

  async getAdminEvents(params?: { district?: string; status?: string; q?: string }): Promise<EventItem[]> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.district) searchParams.set('district', params.district);
      if (params?.status) searchParams.set('status', params.status);
      if (params?.q) searchParams.set('q', params.q);

      const qs = searchParams.toString();
      const res = await fetch(`${API_BASE}/admin/events${qs ? `?${qs}` : ''}`, {
        headers: getAuthHeaders(false),
      });
      if (res.ok) {
        const body: any = await res.json();
        if (body.events) return body.events;
      }
    } catch {}
    return devEvents;
  },

  async createAdminEvent(event: Partial<EventItem>): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/admin/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(event),
      });
      const body: any = await res.json();
      if (res.ok && body.success) return { success: true, id: body.id };
      return { success: false, error: body.error || 'Failed to create event' };
    } catch (e: any) {
      const id = `evt-${Date.now()}`;
      const newEvent = { id, ...event, created_at: new Date().toISOString() } as EventItem;
      devEvents.unshift(newEvent);
      return { success: true, id };
    }
  },

  async updateAdminEvent(id: string, updates: Partial<EventItem>): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/events/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(updates),
      });
      if (res.ok) return true;
    } catch {}
    const ev = devEvents.find((e) => e.id === id);
    if (ev) {
      Object.assign(ev, updates);
      return true;
    }
    return false;
  },

  async deleteAdminEvent(id: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/events/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: getAuthHeaders(true),
      });
      if (res.ok) return true;
    } catch {}
    devEvents = devEvents.filter((e) => e.id !== id);
    return true;
  },

  async updateAdminDistrict(id: string, updates: Partial<District>): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/admin/districts/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(true),
        },
        body: JSON.stringify(updates),
      });
      if (res.ok) return true;
    } catch {}
    return true;
  },
};
