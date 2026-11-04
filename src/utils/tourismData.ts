import { BeautyDestination } from '../types';
import initialTourismData from '../data/tourism-destinations.json';

export const TOURISM_STORAGE_KEY_V3 = 'axom_one_tourism_destinations_v3';
export const TOURISM_STORAGE_KEY_V2 = 'axom_one_tourism_destinations_v2';
export const TOURISM_STORAGE_KEY_V1 = 'axom_one_tourism_destinations_v1';

/**
 * Loads all canonical destinations (75 verified destinations) and merges any
 * local modifications or additions from persistent storage.
 */
export function getTourismDestinations(): BeautyDestination[] {
  const canonicalList = initialTourismData as BeautyDestination[];
  const map = new Map<string, BeautyDestination>();

  // 1. Initialize strictly by unique primary key (id or slug)
  for (const item of canonicalList) {
    const key = item.id || item.slug;
    map.set(key, item);
  }

  // Key finder to match either by id or slug
  const findExistingKey = (id?: string, slug?: string): string | undefined => {
    if (id && map.has(id)) return id;
    if (slug && map.has(slug)) return slug;
    for (const [k, v] of map.entries()) {
      if ((id && v.id === id) || (slug && v.slug === slug)) {
        return k;
      }
    }
    return undefined;
  };

  // 2. Overlay any local modifications from localStorage
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Check modern v3 storage first, then v2, then legacy v1
      const savedRaw =
        localStorage.getItem(TOURISM_STORAGE_KEY_V3) ||
        localStorage.getItem(TOURISM_STORAGE_KEY_V2) ||
        localStorage.getItem(TOURISM_STORAGE_KEY_V1);

      if (savedRaw) {
        const parsed = JSON.parse(savedRaw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          for (const item of parsed) {
            if (!item || (!item.id && !item.slug)) continue;
            const existingKey = findExistingKey(item.id, item.slug);
            if (existingKey) {
              const existing = map.get(existingKey)!;
              map.set(existingKey, {
                ...existing,
                ...item,
                // Always preserve authoritative canonical images, GPS coordinates and localized content
                imageUrl: existing.imageUrl || item.imageUrl,
                image: existing.image || item.image || existing.imageUrl,
                latitude: existing.latitude ?? item.latitude,
                longitude: existing.longitude ?? item.longitude,
                name_as: existing.name_as || item.name_as,
                name_hi: existing.name_hi || item.name_hi,
                tagline_as: existing.tagline_as || item.tagline_as,
                shortDescription_as: existing.shortDescription_as || item.shortDescription_as,
                description_as: existing.description_as || item.description_as,
                fullDescription_as: existing.fullDescription_as || item.fullDescription_as,
                highlights_as: existing.highlights_as || item.highlights_as,
                bestSeason_as: existing.bestSeason_as || item.bestSeason_as,
                entryFee_as: existing.entryFee_as || item.entryFee_as,
                openingHours_as: existing.openingHours_as || item.openingHours_as,
                tagline_hi: existing.tagline_hi || item.tagline_hi,
                shortDescription_hi: existing.shortDescription_hi || item.shortDescription_hi,
                description_hi: existing.description_hi || item.description_hi,
                fullDescription_hi: existing.fullDescription_hi || item.fullDescription_hi,
                highlights_hi: existing.highlights_hi || item.highlights_hi,
              });
            } else {
              // Custom admin/user created new destination
              const newKey = item.id || item.slug;
              map.set(newKey, item);
            }
          }
        }
      }
    }
  } catch (e) {
    console.warn('Could not read tourism storage cache:', e);
  }

  // 3. Guarantee 100% deduplication by both unique ID and unique slug
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const deduplicated: BeautyDestination[] = [];

  for (const item of map.values()) {
    const idKey = item.id ? item.id.toLowerCase().trim() : '';
    const slugKey = item.slug ? item.slug.toLowerCase().trim() : '';

    if (idKey && seenIds.has(idKey)) continue;
    if (slugKey && seenSlugs.has(slugKey)) continue;

    if (idKey) seenIds.add(idKey);
    if (slugKey) seenSlugs.add(slugKey);
    deduplicated.push(item);
  }

  return deduplicated;
}

const SLUG_ALIASES: Record<string, string> = {
  'charaideo-moidams-archaeological': 'charaideo',
  'charaideo-maidams': 'charaideo',
  'charaideo-maidam': 'charaideo',
  'barpeta-doul-mandir': 'barpeta-doul-utsav-temple',
  'barpeta-doul': 'barpeta-doul-utsav-temple',
  'barpeta-doul-utsav': 'barpeta-doul-utsav-temple',
  'guwahati-kamakhya-temple': 'kamakhya',
  'kamakhya-temple': 'kamakhya',
  'hayagriva-madhava-temple': 'hajo',
  'hayagriva-madhava': 'hajo',
  'kaziranga-national-park': 'kaziranga',
  'manas-national-park': 'manas',
  'nameri-national-park': 'nameri',
  'dibru-saikhowa-national-park': 'dibru-saikhowa',
  'dehing-patkai-national-park': 'dehing-patkai',
  'orang-national-park-and-tiger-reserve': 'orang-national-park',
  'deepor-beel': 'deepor-beel-ramsar-wetland',
  'sri-surya-pahar': 'sri-surya-pahar-archaeological-site',
  'madan-kamdev': 'madan-kamdev-archaeological-ruins',
};

/**
 * Finds a destination by slug, ID, or normalized keyword with multi-tier fallback.
 */
export function findDestinationBySlug(rawSlug: string | undefined): BeautyDestination | null {
  if (!rawSlug) return null;

  const allDestinations = getTourismDestinations();
  const canonicalList = initialTourismData as BeautyDestination[];

  const rawClean = decodeURIComponent(rawSlug).toLowerCase().trim();
  const clean = SLUG_ALIASES[rawClean] || rawClean;

  // Tier 1: Exact slug or id match in merged dataset
  const exactMerged = allDestinations.find(
    (d) => d.slug.toLowerCase() === clean || d.id.toLowerCase() === clean
  );
  if (exactMerged) return exactMerged;

  // Tier 2: Exact match in canonical dataset directly
  const exactCanonical = canonicalList.find(
    (d) => d.slug.toLowerCase() === clean || d.id.toLowerCase() === clean
  );
  if (exactCanonical) return exactCanonical;

  // Tier 3: Match without 'tour-' prefix or slug with 'tour-' prefix
  const withPrefix = clean.startsWith('tour-') ? clean : `tour-${clean}`;
  const withoutPrefix = clean.startsWith('tour-') ? clean.replace(/^tour-/, '') : clean;

  const prefixMatch = allDestinations.find(
    (d) =>
      d.id.toLowerCase() === withPrefix ||
      d.slug.toLowerCase() === withoutPrefix ||
      d.id.toLowerCase().replace(/^tour-/, '') === withoutPrefix
  );
  if (prefixMatch) return prefixMatch;

  // Tier 4: Partial substring match on slug
  const partialMatch = allDestinations.find(
    (d) =>
      d.slug.toLowerCase().includes(withoutPrefix) ||
      withoutPrefix.includes(d.slug.toLowerCase())
  );
  if (partialMatch) return partialMatch;

  // Tier 5: Match by normalized destination name
  const nameMatch = allDestinations.find((d) => {
    const normName = d.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normQuery = clean.replace(/[^a-z0-9]/g, '');
    return normName.includes(normQuery) || normQuery.includes(normName);
  });
  if (nameMatch) return nameMatch;

  return null;
}

/**
 * Persists destinations to modern v2 localStorage key and syncs.
 */
export function saveTourismDestinations(destinations: BeautyDestination[]): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(TOURISM_STORAGE_KEY_V3, JSON.stringify(destinations));
      // Remove stale legacy v1 & v2 keys to free quota and prevent regressions
      localStorage.removeItem(TOURISM_STORAGE_KEY_V2);
      localStorage.removeItem(TOURISM_STORAGE_KEY_V1);
    }
  } catch (e) {
    console.warn('Could not persist tourism destinations:', e);
  }
}

/**
 * Provides comprehensive transit connectivity intelligence for any Assam district.
 */
export interface DistrictTransitInfo {
  nearestAirport: string;
  airportCode: string;
  distanceAirport: string;
  nearestRailway: string;
  railwayJunction: string;
  roadHighway: string;
  busTerminal: string;
}

export interface DestinationSlide {
  url: string;
  caption: string;
  attribution?: string;
}

export const CURATED_GALLERIES: Record<string, DestinationSlide[]> = {
  kamakhya: [
    {
      url: '/images/destinations/kamakhya.jpg',
      caption: 'Sacred Nilachal Hill & Ancient Shikhara Domes of Maa Kamakhya',
      attribution: 'Photo: Historic Kamakhya Temple Complex (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/featured/temple-shrine.jpg',
      caption: 'Historic Sanctum Sanctorum & Ritual Mandapa Entrance',
      attribution: 'Photo: Assam Sacred Heritage Archive',
    },
    {
      url: '/images/destinations/umananda.jpg',
      caption: 'Peacock Island & Umananda Temple amidst the Brahmaputra',
      attribution: 'Photo: Umananda Island Sanctuary (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/navagraha-temple.jpg',
      caption: 'Navagraha Temple on Chitrachal Hill overlooking Guwahati',
      attribution: 'Photo: Historic Navagraha Temple of Guwahati (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  kaziranga: [
    {
      url: '/images/destinations/kaziranga.jpg',
      caption: 'Great Indian One-Horned Rhinoceros grazing in the Central Range (Kohora)',
      attribution: 'Photo: Kaziranga Grasslands Safari (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/pobitora.jpg',
      caption: 'Floodplain Elephant Safari & Dense Alluvial Grasslands',
      attribution: 'Photo: Rhino Habitat (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/kakochang-waterfalls.jpg',
      caption: 'Kakochang Waterfalls cascading amidst Bokakhat rubber plantations',
      attribution: 'Photo: Scenic Cascades of Golaghat (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/panimur-waterfalls-niagara-of-assam.jpg',
      caption: 'Grand Panimur Cascades on Kopili River along Karbi Hills fringe',
      attribution: 'Photo: Panimur Waterfalls (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  charaideo: [
    {
      url: '/images/destinations/charaideo.jpg',
      caption: 'Terraced Tumulus Burial Mounds of the Tai-Ahom Kings (UNESCO World Heritage)',
      attribution: 'Photo: Charaideo Moidams Landscape (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/charaideo-moidams-archaeological.jpg',
      caption: 'Archaeological Vault & Octagonal Brick Pavilion of the Maidams',
      attribution: 'Photo: Charaideo Maidam Pavilion (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/kareng-ghar.jpg',
      caption: '7-Story Garhgaon Royal Palace (Kareng Ghar) of the Ahom Kings',
      attribution: 'Photo: Royal Palace of Garhgaon (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/upper-assam-heritage-tea-circuit.jpg',
      caption: 'Lush Heritage Tea Gardens across the Charaideo-Tinsukia Belt',
      attribution: 'Photo: Upper Assam Tea Estate (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'kareng-ghar': [
    {
      url: '/images/destinations/kareng-ghar.jpg',
      caption: 'The Four-Tiered Imperial Palace of Garhgaon (Kareng Ghar)',
      attribution: 'Photo: Royal Palace of Garhgaon (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/talatal-ghar.jpg',
      caption: 'Talatal Ghar Underground Fortification and Palace Tunnels',
      attribution: 'Photo: Talatal Ghar Palace (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/rang-ghar.jpg',
      caption: 'Rang Ghar Royal Amphitheatre Pavilion',
      attribution: 'Photo: Historic Rang Ghar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/charaideo.jpg',
      caption: 'Charaideo Moidams UNESCO World Heritage Royal Tumuli',
      attribution: 'Photo: Charaideo Moidams (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  majuli: [
    {
      url: '/images/destinations/majuli.jpg',
      caption: 'Lush Wetland Landscapes of the World’s Largest Inhabited River Island',
      attribution: 'Photo: Riverine Majuli (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/majuli-raas-mahotsav-sattras.jpg',
      caption: 'Traditional Neo-Vaishnavite Bamboo & Clay Mukha (Mask) Artisans of Samaguri Satra',
      attribution: 'Photo: Majuli Mask Crafts (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/subansiri-river.jpg',
      caption: 'Pristine Riverine Vistas along the Subansiri & Brahmaputra Confluence',
      attribution: 'Photo: Subansiri River (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/mishing-chang-ghar-kitchen-apong.jpg',
      caption: 'Traditional Mishing Chang-Ghar (Stilt House) Heritage of Majuli',
      attribution: 'Photo: Indigenous Mishing Architecture (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'rang-ghar': [
    {
      url: '/images/destinations/rang-ghar.jpg',
      caption: 'Asia’s Oldest Surviving Sports Amphitheatre Pavilion (Built by King Pramatta Singha in 1746)',
      attribution: 'Photo: Historic Rang Ghar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/talatal-ghar.jpg',
      caption: 'Talatal Ghar Grand Military Citadel and Secret Escape Tunnels',
      attribution: 'Photo: Talatal Ghar Palace (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/sivadol.jpg',
      caption: '104-Foot Golden Kalasha of Sivadol on the Banks of Borpukhuri',
      attribution: 'Photo: Sivadol Sivasagar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/kareng-ghar.jpg',
      caption: 'Royal Palace of Garhgaon (Kareng Ghar)',
      attribution: 'Photo: Royal Palace of Garhgaon (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'talatal-ghar': [
    {
      url: '/images/destinations/talatal-ghar.jpg',
      caption: 'Seven-Storied Royal Residence with Subterranean Security Quarters',
      attribution: 'Photo: Talatal Ghar Palace (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/rang-ghar.jpg',
      caption: 'The Inverted Boat Shaped Royal Amphitheatre (Rang Ghar)',
      attribution: 'Photo: Historic Rang Ghar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/sivadol.jpg',
      caption: 'Sivadol Temple Complex Built by Queen Ambika in 1734',
      attribution: 'Photo: Sivadol Sivasagar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/kareng-ghar.jpg',
      caption: 'Garhgaon Palace (Kareng Ghar)',
      attribution: 'Photo: Royal Palace of Garhgaon (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  sivadol: [
    {
      url: '/images/destinations/sivadol.jpg',
      caption: 'The Tallest Shiva Temple in Northeast India (104 Feet Shikhara)',
      attribution: 'Photo: Sivadol Sivasagar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/rang-ghar.jpg',
      caption: 'Royal Ahom Sports Pavilion (Rang Ghar)',
      attribution: 'Photo: Historic Rang Ghar (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/talatal-ghar.jpg',
      caption: 'Subterranean Tunnels and Bastions of Talatal Ghar',
      attribution: 'Photo: Talatal Ghar Palace (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/kareng-ghar.jpg',
      caption: 'Kareng Ghar Garhgaon',
      attribution: 'Photo: Royal Palace of Garhgaon (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  manas: [
    {
      url: '/images/destinations/manas.jpg',
      caption: 'UNESCO Natural World Heritage Site & Biosphere Reserve at the Foothills of the Himalayas',
      attribution: 'Photo: Manas National Park (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/raimona-national-park.jpg',
      caption: 'Wild Elephants in the Ripu Reserve Belt of Raimona National Park',
      attribution: 'Photo: Wild Elephant in Raimona (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/bornadi-wildlife-sanctuary.jpg',
      caption: 'Bornadi Wildlife Sanctuary Foothill Sanctuary',
      attribution: 'Photo: Bornadi Wildlife Sanctuary (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/bogamati-eco-park-bornadi.jpg',
      caption: 'Bogamati Eco Park & Bornadi River Canyon',
      attribution: 'Photo: Bogamati Eco Tourism (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  agnigarh: [
    {
      url: '/images/destinations/agnigarh.jpg',
      caption: 'Circular Hillock Overlooking the Brahmaputra with Sculptures of the Usha-Aniruddha Legend',
      attribution: 'Photo: Agnigarh Hillock Tezpur (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/da-parbatia.jpg',
      caption: '5th-Century Gupta Stone Sculptural Doorframe of Da-Parbatia',
      attribution: 'Photo: 5th-century Gupta Doorframe of Da-Parbatia (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/biswanath-ghat-gupta-kashi.jpg',
      caption: 'Biswanath Ghat (Gupta Kashi) Ancient River Shrines',
      attribution: 'Photo: Biswanath Ghat (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/nameri.jpg',
      caption: 'Jia Bhoroli River Valley & Nameri National Park',
      attribution: 'Photo: Nameri River Valley (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'da-parbatia': [
    {
      url: '/images/destinations/da-parbatia.jpg',
      caption: 'Ancient 5th-Century Classical Gupta Stone Lintel with Ganga and Yamuna Reliefs',
      attribution: 'Photo: 5th-century Gupta Doorframe of Da-Parbatia (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/agnigarh.jpg',
      caption: 'Mythological Hill Fortress of Fire (Agnigarh) in Tezpur',
      attribution: 'Photo: Agnigarh Hillock Tezpur (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/biswanath-ghat-gupta-kashi.jpg',
      caption: 'Biswanath Ghat Submerged Shiva Temples',
      attribution: 'Photo: Biswanath Ghat (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/nameri.jpg',
      caption: 'Nameri National Park & Jia Bhoroli Golden Mahseer Habitat',
      attribution: 'Photo: Nameri National Park (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'billeswar-devalaya': [
    {
      url: '/images/destinations/billeswar-devalaya.jpg',
      caption: 'Historic 500-Year-Old Shiva Devalaya Rebuilt by Ahom King Shiva Singha in Belsor',
      attribution: 'Photo: Historic Bileshwar Mahadev Temple, Belsor (Assamese Wikipedia Archives)',
    },
    {
      url: '/images/destinations/hari-mandir-nalbari.jpg',
      caption: 'Nalbari Sri Sri Hari Mandir during the Celebrated 13-Day Raas Mahotsav',
      attribution: 'Photo: Ajay Das - Hari Mandir during Ras Utsav (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/barpeta-satra.jpg',
      caption: 'Barpeta Satra Kirtan Ghar Neo-Vaishnavite Heritage',
      attribution: 'Photo: Barpeta Satra (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/sarthebari-bell-metal-heritage-village.jpg',
      caption: 'Sarthebari Traditional Handcrafted Bell-Metal Workshops',
      attribution: 'Photo: Sarthebari Artisans (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'hari-mandir-nalbari': [
    {
      url: '/images/destinations/hari-mandir-nalbari.jpg',
      caption: 'Nalbari Sri Sri Hari Mandir Illuminated for the Historic Annual Raas Festival',
      attribution: 'Photo: Ajay Das - Hari Mandir during Ras Utsav (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/billeswar-devalaya.jpg',
      caption: 'Ancient Billeshwar Devalaya Shiva Sanctuary in Belsor',
      attribution: 'Photo: Historic Bileshwar Mahadev Temple, Belsor (Assamese Wikipedia Archives)',
    },
    {
      url: '/images/destinations/barpeta-doul-mandir.jpg',
      caption: 'Barpeta Satra Doul Mandir and Traditional Holi Grounds',
      attribution: 'Photo: Celebrating Doul Utsav (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/pari-hareswar-devalaya.jpg',
      caption: 'Pari Hareswar Devalaya Historic Temple of Bajali',
      attribution: 'Photo: Pari Hareswar Devalaya (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'barpeta-satra': [
    {
      url: '/images/destinations/barpeta-satra.jpg',
      caption: 'Main Kirtan Ghar of Sri Sri Barpeta Satra Established by Mahapurush Madhavdeva in 1583',
      attribution: 'Photo: Barpeta Satra (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/barpeta-doul-mandir.jpg',
      caption: '7-Story Doul Mandir during the Vibrant Spring Doul Utsav (Holi)',
      attribution: 'Photo: Celebrating Doul Utsav at Barpeta Satra (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/sarthebari-bell-metal-heritage-village.jpg',
      caption: 'Indigenous Bell-Metal Craft Village of Sarthebari',
      attribution: 'Photo: Sarthebari Heritage Village (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/batadrava-than.jpg',
      caption: 'Batadrava Than Cultural Project in Nagaon',
      attribution: 'Photo: Bordowa Than (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  'barpeta-doul-utsav-temple': [
    {
      url: '/images/destinations/barpeta-doul-mandir.jpg',
      caption: 'Seven-Tiered Historic Doul Mandir Glowing during Spring Holi Celebrations',
      attribution: 'Photo: Celebrating Doul Utsav at Barpeta Satra (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/barpeta-satra.jpg',
      caption: 'The Grand Sanctum of Barpeta Satra Kirtan Ghar',
      attribution: 'Photo: Barpeta Satra (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/billeswar-devalaya.jpg',
      caption: 'Billeshwar Devalaya Shiva Sanctuary in Belsor',
      attribution: 'Photo: Historic Bileshwar Mahadev Temple, Belsor (Assamese Wikipedia Archives)',
    },
    {
      url: '/images/destinations/sarthebari-bell-metal-heritage-village.jpg',
      caption: 'Centuries-Old Metal Guilds of Sarthebari',
      attribution: 'Photo: Sarthebari Bell-Metal (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
  haflong: [
    {
      url: '/images/destinations/haflong.jpg',
      caption: 'Haflong Hill Station & Scenic Lake surrounded by the Blue Barail Range',
      attribution: 'Photo: Haflong Lake & Hills (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/barail-high-ridge-viewpoint-draft.jpg',
      caption: 'High Ridge Panoramic Viewpoints across the Barail Mountain Range',
      attribution: 'Photo: Barail Range Vistas (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/panimur-waterfalls-niagara-of-assam.jpg',
      caption: 'Panimur Waterfalls along the Kopili River',
      attribution: 'Photo: Panimur Waterfalls (CC BY-SA 4.0 via Wikimedia Commons)',
    },
    {
      url: '/images/destinations/khanduli-highland-meadows.jpg',
      caption: 'Rolling Highland Grassland Meadows of Karbi Anglong and Dima Hasao',
      attribution: 'Photo: Highland Meadows (CC BY-SA 4.0 via Wikimedia Commons)',
    },
  ],
};

/**
 * Returns a rich, multi-picture curated gallery array for any tourism destination.
 */
export function getDestinationGallery(
  dest: BeautyDestination,
  allDestinations?: BeautyDestination[]
): DestinationSlide[] {
  if (!dest) return [];

  const slug = (dest.slug || '').toLowerCase().trim();
  if (CURATED_GALLERIES[slug] && CURATED_GALLERIES[slug].length > 0) {
    return CURATED_GALLERIES[slug];
  }

  const slides: DestinationSlide[] = [];
  const primaryImg = dest.imageUrl || dest.image;
  if (primaryImg) {
    slides.push({
      url: primaryImg,
      caption: dest.name + (dest.locality ? ` — ${dest.locality}` : ''),
      attribution: dest.imageAttribution || 'Assam Tourism Verified Archive',
    });
  }

  const list = allDestinations || getTourismDestinations();
  const seenUrls = new Set<string>();
  if (primaryImg) seenUrls.add(primaryImg);

  // 1. Add images from same district
  const sameDistrict = list.filter(
    (d) =>
      d.slug !== dest.slug &&
      (d.district_slug === dest.district_slug || d.district === dest.district) &&
      (d.imageUrl || d.image)
  );

  for (const d of sameDistrict) {
    const u = d.imageUrl || d.image;
    if (u && !seenUrls.has(u)) {
      seenUrls.add(u);
      slides.push({
        url: u,
        caption: `${d.name} (${d.district})`,
        attribution: d.imageAttribution || 'Assam Tourism Archive',
      });
      if (slides.length >= 4) break;
    }
  }

  // 2. Add images from same category if still under 4
  if (slides.length < 4) {
    const sameCategory = list.filter(
      (d) =>
        d.slug !== dest.slug &&
        d.category === dest.category &&
        (d.imageUrl || d.image)
    );
    for (const d of sameCategory) {
      const u = d.imageUrl || d.image;
      if (u && !seenUrls.has(u)) {
        seenUrls.add(u);
        slides.push({
          url: u,
          caption: `${d.name} (${d.district})`,
          attribution: d.imageAttribution || 'Assam Tourism Archive',
        });
        if (slides.length >= 4) break;
      }
    }
  }

  // 3. Fallback scenic images if still under 3
  const scenicPool = [
    {
      url: '/images/destinations/kaziranga.jpg',
      caption: 'Kaziranga Floodplains & Wildlife Sanctuary',
      attribution: 'Assam Tourism Verified Archive',
    },
    {
      url: '/images/destinations/majuli.jpg',
      caption: 'Majuli Riverine Heritage & Sattras',
      attribution: 'Assam Tourism Verified Archive',
    },
    {
      url: '/images/destinations/haflong.jpg',
      caption: 'Haflong Blue Hills & Serene Lake',
      attribution: 'Assam Tourism Verified Archive',
    },
    {
      url: '/images/destinations/charaideo.jpg',
      caption: 'UNESCO World Heritage Ahom Moidams',
      attribution: 'Assam Tourism Verified Archive',
    },
  ];

  for (const s of scenicPool) {
    if (slides.length >= 4) break;
    if (!seenUrls.has(s.url)) {
      seenUrls.add(s.url);
      slides.push(s);
    }
  }

  return slides;
}

export function getDistrictTransitInfo(districtSlugOrName: string): DistrictTransitInfo {
  const norm = districtSlugOrName.toLowerCase();

  // Barak Valley (Cachar, Hailakandi, Karimganj)
  if (norm.includes('cachar') || norm.includes('silchar') || norm.includes('hailakandi') || norm.includes('karimganj')) {
    return {
      nearestAirport: 'Silchar Kumbhirgram Airport',
      airportCode: 'IXS',
      distanceAirport: '25 - 45 km',
      nearestRailway: 'Silchar Railway Station / Badarpur Junction',
      railwayJunction: 'Badarpur Junction (Lumding-Badarpur Hill Section)',
      roadHighway: 'NH-37 / NH-6 via Meghalaya or Halflong Expressway',
      busTerminal: 'ASTC Silchar / Badarpur ASTC Stand',
    };
  }

  // Upper Assam (Dibrugarh, Tinsukia, Dhemaji)
  if (norm.includes('dibrugarh') || norm.includes('tinsukia') || norm.includes('dhemaji')) {
    return {
      nearestAirport: 'Dibrugarh Mohanbari Airport',
      airportCode: 'DIB',
      distanceAirport: '15 - 50 km',
      nearestRailway: 'Dibrugarh Banipur / New Tinsukia Junction',
      railwayJunction: 'New Tinsukia Junction (Direct Rajdhani & Express Connectivity)',
      roadHighway: 'NH-15 (North Bank via Bogibeel Bridge) & NH-2 (South Bank)',
      busTerminal: 'ASTC Chowkidingee Dibrugarh / Tinsukia ASTC',
    };
  }

  // Central Tea Country (Jorhat, Golaghat, Sivasagar, Charaideo)
  if (norm.includes('jorhat') || norm.includes('golaghat') || norm.includes('sivasagar') || norm.includes('charaideo') || norm.includes('majuli')) {
    return {
      nearestAirport: 'Jorhat Rowriah Airport',
      airportCode: 'JRH',
      distanceAirport: '8 - 60 km',
      nearestRailway: 'Jorhat Town / Mariani Junction / Simaluguri Junction',
      railwayJunction: 'Mariani Junction (Main Northeast Frontier Line)',
      roadHighway: 'NH-715 (Old NH-37) 4-Lane Trans-Assam Highway',
      busTerminal: 'ASTC Jorhat / Sivasagar ASTC Central Bus Stand',
    };
  }

  // North Bank (Sonitpur, Biswanath, Lakhimpur, Darrang)
  if (norm.includes('tezpur') || norm.includes('sonitpur') || norm.includes('biswanath') || norm.includes('lakhimpur') || norm.includes('darrang')) {
    return {
      nearestAirport: 'Tezpur Salonibari Airport / LGBI Guwahati',
      airportCode: 'TEZ / GAU',
      distanceAirport: '10 - 75 km',
      nearestRailway: 'Rangapara North Junction / Biswanath Chariali / North Lakhimpur',
      railwayJunction: 'Rangapara North Junction',
      roadHighway: 'NH-15 (North Bank Highway via Kaliabhomora / Kolia Bhomora Setu)',
      busTerminal: 'ASTC Tezpur Mission Chariali / Biswanath Chariali ASTC',
    };
  }

  // Hills (Dima Hasao, Karbi Anglong, West Karbi Anglong)
  if (norm.includes('haflong') || norm.includes('dima-hasao') || norm.includes('karbi') || norm.includes('diphu')) {
    return {
      nearestAirport: 'LGBI Airport Guwahati / Dimapur Airport',
      airportCode: 'GAU / DMU',
      distanceAirport: '60 - 150 km',
      nearestRailway: 'New Haflong Station / Lumding Junction / Diphu',
      railwayJunction: 'Lumding Junction & New Haflong (Scenic Vistadome Route)',
      roadHighway: 'NH-27 (East-West Corridor / Mahasadak)',
      busTerminal: 'Haflong ASTC / Diphu Central Bus Terminus',
    };
  }

  // Bodoland & Western Assam (Baksa, Chirang, Kokrajhar, Udalguri, Bongaigaon, Dhubri, South Salmara, Goalpara)
  if (
    norm.includes('bongaigaon') ||
    norm.includes('kokrajhar') ||
    norm.includes('chirang') ||
    norm.includes('baksa') ||
    norm.includes('udalguri') ||
    norm.includes('dhubri') ||
    norm.includes('goalpara')
  ) {
    return {
      nearestAirport: 'Rupsi Airport (Dhubri) / LGBI Airport Guwahati',
      airportCode: 'RUP / GAU',
      distanceAirport: '20 - 110 km',
      nearestRailway: 'New Bongaigaon Junction / Kokrajhar / Goalpara Town',
      railwayJunction: 'New Bongaigaon Junction (Major Gateway of Assam Railways)',
      roadHighway: 'NH-27 (National East-West 4-lane Highway) & NH-17',
      busTerminal: 'ASTC New Bongaigaon / Kokrajhar ASTC Hub',
    };
  }

  // Lower Assam & Kamrup (Kamrup Metro, Kamrup Rural, Nalbari, Barpeta, Bajali, Morigaon)
  return {
    nearestAirport: 'Lokpriya Gopinath Bordoloi International Airport (Guwahati)',
    airportCode: 'GAU',
    distanceAirport: '20 - 65 km',
    nearestRailway: 'Guwahati Junction / Kamakhya Junction / Rangiya Junction / Nalbari / Barpeta Road',
    railwayJunction: 'Guwahati & Rangiya Junction (NFR Headquarters)',
    roadHighway: 'NH-27 (National 4-Lane Highway) / Saraighat Bridge',
    busTerminal: 'ISBT Betkuchi (Guwahati) & ASTC Paltan Bazar',
  };
}
