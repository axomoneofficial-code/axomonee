// 🌿 AXOM ONE — Professional Geographic Atlas & Heritage Map Data
// 100% Bespoke Vector GIS Architecture — Snug Viewport Fitting & Animated Water Hydrology

export interface DistrictRiverItem {
  name: string;
  name_as: string;
  significance: string;
  svgPath: string;
  labelX: number;
  labelY: number;
}

export interface DistrictPlaceItem {
  id: string;
  slug?: string;
  name: string;
  name_as: string;
  category: string;
  categoryLabel: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  imageUrl?: string;
  shortDescription: string;
  googleMapsUrl: string;
  googleDirectionsUrl: string;
}

export interface DistrictHeadquartersItem {
  name: string;
  name_as: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
}

export interface DistrictNeighborBorders {
  north: string;
  south: string;
  west: string;
  east: string;
}

export interface DistrictMapRecord {
  slug: string;
  name: string;
  name_as: string;
  division: string;
  bounds: {
    minLon: number;
    maxLon: number;
    minLat: number;
    maxLat: number;
  };
  svgPath: string;
  headquarters: DistrictHeadquartersItem;
  scaleKm: number;
  neighbors: DistrictNeighborBorders;
  rivers: DistrictRiverItem[];
  famousPlaces: DistrictPlaceItem[];
}

export const DISTRICT_MAP_RECORDS: Record<string, DistrictMapRecord> = {
  "kamrup-metropolitan": {
    "slug": "kamrup-metropolitan",
    "name": "Kamrup Metropolitan",
    "name_as": "কামৰূপ মহানগৰ",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 91.54,
      "maxLon": 92.2,
      "minLat": 25.988,
      "maxLat": 26.285
    },
    "svgPath": "M 268.7,162.1 L 292.9,175.1 L 411.2,153.2 L 519.8,83.4 L 511.1,114.9 L 523.0,126.9 L 552.6,121.6 L 556.2,139.5 L 571.7,133.9 L 601.6,148.5 L 606.7,177.7 L 643.1,187.0 L 628.3,200.7 L 657.2,207.0 L 682.1,196.7 L 704.1,219.9 L 709.5,208.6 L 722.8,216.9 L 718.9,267.8 L 731.5,321.6 L 725.3,320.9 L 685.3,361.5 L 647.1,355.5 L 597.3,375.4 L 529.5,368.4 L 523.4,383.7 L 466.7,400.0 L 454.1,416.6 L 443.3,404.3 L 448.7,390.0 L 414.4,383.4 L 397.5,364.1 L 410.1,296.3 L 351.7,270.4 L 314.9,312.0 L 299.7,307.0 L 249.6,343.9 L 240.9,372.8 L 139.2,324.6 L 107.5,323.6 L 105.3,341.5 L 92.7,345.2 L 84.7,332.6 L 84.0,343.5 L 73.2,342.5 L 93.4,306.0 L 68.5,289.0 L 68.9,239.9 L 73.2,233.6 L 160.5,214.9 L 169.5,194.7 L 163.4,199.3 L 154.4,178.7 L 177.4,149.5 L 196.6,154.1 L 185.4,171.1 L 210.3,168.4 L 228.7,183.7 L 249.9,160.1 L 268.7,162.1 Z",
    "headquarters": {
      "name": "Guwahati / Dispur",
      "name_as": "গুৱাহাটী",
      "lat": 26.144,
      "lng": 91.736,
      "x": 254.9,
      "y": 241.0
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & NORTH GUWAHATI",
      "south": "↓ MEGHALAYA (KHASI HILLS)",
      "west": "← KAMRUP RURAL (DHARAPUR / AIRPORT)",
      "east": "MORIGAON DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Iconic river corridor framing Umananda Island, Kamakhya Hill, and Guwahati riverfront.",
        "svgPath": "M 107.3,233.7 L 215.8,197.4 L 324.3,173.3 L 487.1,149.1 L 649.9,124.9",
        "labelX": 324.3,
        "labelY": 161.3
      },
      {
        "name": "Bharalu River",
        "name_as": "ভৰলু নদী",
        "significance": "Historic urban stream flowing past Guwahati hills into the Brahmaputra.",
        "svgPath": "M 291.8,270.0 L 270.1,233.7 L 253.8,191.4",
        "labelX": 270.1,
        "labelY": 221.7
      },
      {
        "name": "Basistha Stream",
        "name_as": "বশিষ্ঠ নদী",
        "significance": "Mountain stream cascading past the sacred Basistha Ashram in south Guwahati.",
        "svgPath": "M 324.3,342.5 L 313.5,294.2 L 297.2,257.9",
        "labelX": 313.5,
        "labelY": 282.2
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-kamakhya",
        "slug": "kamakhya",
        "name": "Maa Kamakhya Devalaya & Nilachal Hill",
        "name_as": "মা কামাখ্যা দেৱালয় (নীলাচল পাহাৰ)",
        "category": "heritage-historic",
        "categoryLabel": "Temples & Spiritual Sites",
        "lat": 26.1664,
        "lng": 91.7054,
        "x": 221.7,
        "y": 213.9,
        "imageUrl": "/images/destinations/kamakhya.jpg",
        "shortDescription": "Foremost Shakti Peetha of India & Center of Tantric Spiritual Worship",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1664,91.7054",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1664,91.7054"
      },
      {
        "id": "tour-umananda",
        "slug": "umananda",
        "name": "Umananda Peacock Island & Temple",
        "name_as": "উমানন্দ দেৱালয় (ময়ূৰ দ্বীপ)",
        "category": "heritage-historic",
        "categoryLabel": "Temples & Spiritual Sites",
        "lat": 26.1917,
        "lng": 91.7456,
        "x": 265.3,
        "y": 183.3,
        "imageUrl": "/images/destinations/umananda.jpg",
        "shortDescription": "Smallest Inhabited River Island in the World & Ancient Shiva Shrine",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1917,91.7456",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1917,91.7456"
      },
      {
        "id": "tour-brahmaputra-cruises",
        "slug": "brahmaputra-cruises",
        "name": "Brahmaputra River Sunset & Expedition Cruises",
        "name_as": "ব্ৰহ্মপুত্ৰ নদীৰ সূৰ্যাস্ত আৰু বিলাসী ক্ৰুজ",
        "category": "river-experiences",
        "categoryLabel": "Brahmaputra River & Cruises",
        "lat": 26.1856,
        "lng": 91.7428,
        "x": 262.3,
        "y": 190.7,
        "imageUrl": "/images/destinations/brahmaputra-cruises.jpg",
        "shortDescription": "Expedition Sailing Down the Mighty Red River of Assam",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1856,91.7428",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1856,91.7428"
      },
      {
        "id": "tour-guwahati-riverfront",
        "slug": "guwahati-brahmaputra-riverfront-ropeway",
        "name": "Guwahati Brahmaputra Riverfront Promenade & Ropeway",
        "name_as": "গুৱাহাটী ব্ৰহ্মপুত্ৰ ৰিভাৰফ্ৰণ্ট আৰু ৰোপৱে’",
        "category": "river-experiences",
        "categoryLabel": "Brahmaputra River & Cruises",
        "lat": 26.1889,
        "lng": 91.751,
        "x": 271.2,
        "y": 186.7,
        "imageUrl": "/images/destinations/guwahati-brahmaputra-riverfront-ropeway.jpg",
        "shortDescription": "India's Longest River Ropeway (1.82 km) & Scenic Sunset Promenade",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1889,91.751",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1889,91.751"
      },
      {
        "id": "tour-deepor-beel",
        "slug": "deepor-beel-ramsar-wetland",
        "name": "Deepor Beel Ramsar Wetland & Bird Sanctuary",
        "name_as": "দীপৰ বিল ৰামছাৰ জলাশয়",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.1264,
        "lng": 91.6492,
        "x": 160.7,
        "y": 262.2,
        "imageUrl": "/images/destinations/deepor-beel-ramsar-wetland.jpg",
        "shortDescription": "Assam's Only Ramsar Wetland Site & Global Haven for Greater Adjutants",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1264,91.6492",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1264,91.6492"
      },
      {
        "id": "tour-latasil-bihu",
        "slug": "latasil-bihu-cultural-grounds",
        "name": "Latasil Bihu Cultural Stage & Rongali Bihu Grounds",
        "name_as": "লতাশিল বিহু সন্মিলন আৰু ৰঙালী বিহু মঞ্চ",
        "category": "festivals-cultural",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 26.186,
        "lng": 91.7525,
        "x": 272.8,
        "y": 190.2,
        "imageUrl": "/images/destinations/latasil-bihu-cultural-grounds.jpg",
        "shortDescription": "Historic Birthplace of Urban Stage Bihu Celebrated Every April",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.186,91.7525",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.186,91.7525"
      },
      {
        "id": "tour-culinary-trail",
        "slug": "assamese-heritage-culinary-trail",
        "name": "Traditional Assamese Culinary Trail & Heritage Dining",
        "name_as": "ঐতিহ্যবাহী অসমীয়া খাদ্য সংস্কৃতি আৰু থলুৱা সোৱাদ",
        "category": "culinary-experiences",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 26.175,
        "lng": 91.765,
        "x": 286.3,
        "y": 203.5,
        "imageUrl": "/images/destinations/assamese-heritage-culinary-trail.jpg",
        "shortDescription": "Slow-Cooked Khar, Masor Tenga, Bamboo Shoot & Fragrant Joha Rice",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.175,91.765",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.175,91.765"
      },
      {
        "id": "tour-assam-state-zoo-botanical",
        "slug": "assam-state-zoo-cum-botanical-garden",
        "name": "Assam State Zoo-cum-Botanical Garden & Orchidarium",
        "name_as": "অসম ৰাজ্যিক চিৰিয়াখানা আৰু উদ্ভিদ উদ্যান",
        "category": "botanical-green",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.1633,
        "lng": 91.785,
        "x": 308.1,
        "y": 217.6,
        "imageUrl": "/images/destinations/assam-state-zoo-cum-botanical-garden.jpg",
        "shortDescription": "432-Acre Green Lung of Guwahati Conserving 500+ Rare Orchid & Tree Species",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1633,91.785",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1633,91.785"
      },
      {
        "id": "tour-ambari",
        "slug": "ambari",
        "name": "Ambari Archaeological Site & Museum",
        "name_as": "আমবাৰী প্ৰত্নতাত্ত্বিক ক্ষেত্ৰ",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.1884,
        "lng": 91.7533,
        "x": 273.6,
        "y": 187.3,
        "imageUrl": "/images/destinations/ambari.jpg",
        "shortDescription": "Remarkable urban archaeological excavation site revealing ancient Kamarupa sculptural studios and medieval brick structures.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1884,91.7533",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1884,91.7533"
      },
      {
        "id": "tour-navagraha",
        "slug": "navagraha-temple",
        "name": "Navagraha Temple (Chitrachal Hill)",
        "name_as": "নৱগ্ৰহ মন্দিৰ (চিত্ৰাচল পাহাৰ)",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.1953,
        "lng": 91.7678,
        "x": 289.4,
        "y": 178.9,
        "imageUrl": "/images/destinations/navagraha-temple.jpg",
        "shortDescription": "Ancient astronomical temple dedicated to the nine celestial bodies, built atop Chitrachal Hill by Ahom King Rajeswar Singha.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1953,91.7678",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1953,91.7678"
      },
      {
        "id": "tour-basistha",
        "slug": "basistha-temple",
        "name": "Basistha Ashram & Historic Cave Temple",
        "name_as": "বশিষ্ঠাশ্ৰম মন্দিৰ",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.1039,
        "lng": 91.7886,
        "x": 312.0,
        "y": 289.4,
        "imageUrl": "/images/destinations/basistha-temple.jpg",
        "shortDescription": "Serene Vedic hermitage of Sage Basistha set amidst the confluence of three mountain streams in the lush southern hills.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1039,91.7886",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1039,91.7886"
      }
    ]
  },
  "baksa": {
    "slug": "baksa",
    "name": "Baksa",
    "name_as": "বাক্সা",
    "division": "Lower Assam (BTR)",
    "bounds": {
      "minLon": 90.847,
      "maxLon": 91.442,
      "minLat": 26.399,
      "maxLat": 26.857
    },
    "svgPath": "M 623.8,334.2 L 569.0,344.9 L 571.2,356.9 L 559.9,366.9 L 523.7,380.4 L 528.2,366.6 L 513.4,364.1 L 517.7,352.6 L 535.5,351.1 L 523.7,324.6 L 498.8,334.9 L 496.9,346.9 L 480.7,344.9 L 483.9,331.6 L 518.2,308.1 L 492.6,302.4 L 501.2,289.9 L 475.6,296.4 L 472.0,268.9 L 483.7,268.6 L 484.5,257.9 L 443.1,254.6 L 443.7,272.1 L 432.3,271.6 L 434.2,255.6 L 425.8,254.9 L 433.9,250.4 L 405.3,240.1 L 410.4,228.9 L 400.7,218.6 L 395.8,229.6 L 386.1,230.1 L 385.8,222.1 L 361.5,216.1 L 359.9,228.1 L 374.0,228.9 L 374.0,241.4 L 359.6,239.9 L 361.8,249.4 L 376.9,246.4 L 382.3,264.9 L 396.7,265.1 L 398.0,274.9 L 385.0,271.4 L 374.5,290.1 L 381.2,291.4 L 378.5,300.4 L 367.5,305.1 L 371.8,310.9 L 348.0,315.4 L 340.7,351.9 L 330.4,351.9 L 324.8,339.9 L 275.1,344.9 L 279.6,393.9 L 294.0,415.8 L 290.5,425.6 L 279.9,425.3 L 285.3,437.6 L 267.5,442.6 L 268.0,429.3 L 257.8,431.3 L 262.4,420.8 L 250.7,417.1 L 251.5,404.8 L 260.5,401.8 L 243.4,405.6 L 238.0,401.3 L 244.3,392.9 L 227.8,386.9 L 263.7,366.9 L 263.4,330.4 L 270.5,297.9 L 279.1,301.6 L 278.3,274.9 L 273.4,284.1 L 252.6,276.9 L 252.6,290.9 L 229.4,290.1 L 227.0,316.6 L 218.3,312.4 L 222.1,297.9 L 208.6,299.4 L 194.0,319.1 L 182.9,314.4 L 176.2,296.1 L 201.6,276.4 L 200.2,194.9 L 236.7,115.9 L 275.6,102.1 L 326.4,111.1 L 361.8,73.7 L 401.2,83.7 L 474.7,82.9 L 556.6,111.4 L 588.2,97.9 L 623.8,63.4 L 614.2,57.4 L 623.8,334.2 Z",
    "headquarters": {
      "name": "Mushalpur",
      "name_as": "মুছলপুৰ",
      "lat": 26.583,
      "lng": 91.417,
      "x": 621.4,
      "y": 291.1
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BHUTAN (HIMALAYAN FOOTHILLS)",
      "south": "↓ BARPETA & NALBARI DISTRICTS",
      "west": "← CHIRANG DISTRICT",
      "east": "TAMULPUR DISTRICT →"
    },
    "rivers": [
      {
        "name": "Manas River",
        "name_as": "মানাহ নদী",
        "significance": "Lifeline river forming the western ecological boundary of Manas National Park.",
        "svgPath": "M 249.8,66.4 L 266.1,148.3 L 241.7,230.1 L 217.3,312.0 L 192.9,384.8",
        "labelX": 241.7,
        "labelY": 218.1
      },
      {
        "name": "Beki River",
        "name_as": "বেকি নদী",
        "significance": "Major eastern tributary branch of the Manas river traversing central Baksa.",
        "svgPath": "M 347.4,84.6 L 331.1,166.5 L 306.7,239.2 L 282.3,321.1 L 258.0,384.8",
        "labelX": 306.7,
        "labelY": 227.2
      },
      {
        "name": "Pagladiya River",
        "name_as": "পাগলাদিয়া নদী",
        "significance": "Himalayan mountain stream flowing through eastern Baksa past Mushalpur.",
        "svgPath": "M 591.3,75.5 L 599.5,157.4 L 623.8,239.2 L 607.6,312.0 L 615.7,375.7",
        "labelX": 623.8,
        "labelY": 227.2
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-manas",
        "slug": "manas",
        "name": "Manas National Park & Biosphere Reserve",
        "name_as": "মানাহ ৰাষ্ট্ৰীয় উদ্যান",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.7161,
        "lng": 91.0333,
        "x": 309.4,
        "y": 170.0,
        "imageUrl": "/images/destinations/manas.jpg",
        "shortDescription": "UNESCO World Heritage Natural Site, Project Tiger & Golden Langur Biosphere",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.7161,91.0333",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.7161,91.0333"
      },
      {
        "id": "tour-manas-bansbari",
        "slug": "manas-bansbari-ecocamp",
        "name": "Manas Eco-Tourism Camp & Bodo Heritage Village",
        "name_as": "মানাহ প্ৰকৃতি শিবিৰ আৰু বড়ো ঐতিহ্য গাঁও",
        "category": "wildlife-national-parks",
        "categoryLabel": "Community Ecotourism & Safari Gateway",
        "lat": 26.705,
        "lng": 91.025,
        "x": 302.7,
        "y": 180.1,
        "imageUrl": "/images/destinations/manas-national-park.jpg",
        "shortDescription": "Community-managed forest lodge and safari gateway in Bansbari on the southern rim of Manas National Park.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.705,91.025",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.705,91.025"
      }
    ]
  },
  "barpeta": {
    "slug": "barpeta",
    "name": "Barpeta",
    "name_as": "বৰপেটা",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 90.628,
      "maxLon": 91.308,
      "minLat": 26.069,
      "maxLat": 26.621
    },
    "svgPath": "M 582.3,223.8 L 581.7,225.4 L 585.4,223.8 L 582.1,225.8 L 586.8,223.8 L 588.6,230.1 L 600.7,238.2 L 600.5,230.7 L 612.4,227.4 L 604.6,235.5 L 608.8,253.3 L 602.1,253.5 L 603.9,262.2 L 594.5,273.0 L 598.3,280.9 L 590.6,282.7 L 598.1,292.0 L 574.9,297.2 L 567.5,308.8 L 584.4,313.4 L 567.3,330.1 L 568.0,344.8 L 589.3,358.5 L 581.9,374.3 L 565.3,374.5 L 500.7,393.5 L 489.7,385.6 L 476.4,388.3 L 441.6,420.4 L 420.3,413.2 L 427.9,423.1 L 418.5,420.0 L 383.5,438.9 L 377.7,434.1 L 365.6,442.6 L 334.8,438.0 L 326.7,425.4 L 313.3,427.9 L 274.4,412.8 L 228.9,412.2 L 215.0,396.4 L 187.6,331.4 L 208.2,315.9 L 241.4,315.9 L 240.1,308.0 L 232.7,307.8 L 232.9,297.2 L 253.8,276.9 L 288.3,278.8 L 279.4,262.0 L 298.7,233.6 L 314.2,240.7 L 327.0,236.7 L 326.7,223.8 L 327.8,225.8 L 582.3,223.8 Z M 318.9,112.3 L 322.9,111.5 L 308.1,103.8 L 302.3,87.4 L 325.4,82.7 L 331.9,86.0 L 337.5,85.8 L 339.1,90.1 L 348.3,94.1 L 360.4,77.7 L 371.6,76.5 L 368.5,88.5 L 375.7,92.0 L 377.7,70.0 L 397.0,70.7 L 397.0,59.1 L 414.3,65.1 L 418.3,57.4 L 419.0,79.6 L 411.8,76.5 L 405.9,103.4 L 406.2,133.6 L 376.3,150.2 L 390.0,155.2 L 384.9,162.2 L 389.3,165.7 L 403.5,162.6 L 396.1,165.1 L 395.4,175.2 L 405.0,178.3 L 401.2,187.0 L 409.8,185.4 L 409.3,196.4 L 424.1,192.2 L 419.6,182.1 L 428.4,182.3 L 431.3,174.2 L 419.4,156.0 L 415.6,115.4 L 456.9,111.3 L 461.6,121.2 L 475.7,93.5 L 470.1,121.2 L 475.7,223.8 L 326.7,223.8 L 316.9,207.3 L 328.3,185.4 L 324.3,179.4 L 295.3,187.5 L 284.5,181.9 L 305.2,171.9 L 299.1,151.6 L 289.2,150.0 L 289.9,135.9 L 302.0,140.5 L 305.0,131.8 L 315.1,133.6 L 320.4,118.5 L 318.9,112.3 Z",
    "headquarters": {
      "name": "Barpeta",
      "name_as": "বৰপেটা",
      "lat": 26.32,
      "lng": 91.006,
      "x": 425.7,
      "y": 269.0
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BAKSA & BAJALI DISTRICTS",
      "south": "↓ BRAHMAPUTRA RIVER & GOALPARA",
      "west": "← BONGAIGAON DISTRICT",
      "east": "KAMRUP RURAL & NALBARI →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "The mighty Brahmaputra forms the wide southern riparian boundary of Barpeta.",
        "svgPath": "M 219.1,397.1 L 320.4,374.5 L 421.7,389.6 L 522.9,404.7 L 590.5,412.2",
        "labelX": 421.7,
        "labelY": 377.6
      },
      {
        "name": "Manas River",
        "name_as": "মানাহ নদী",
        "significance": "Flows through western Barpeta before meeting the Brahmaputra at Jogighopa confluence.",
        "svgPath": "M 300.1,95.7 L 273.1,208.7 L 232.6,321.8 L 205.6,397.1",
        "labelX": 232.6,
        "labelY": 309.8
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-sarthebari-bellmetal",
        "slug": "sarthebari-bell-metal-heritage-village",
        "name": "Sarthebari Bell-Metal Heritage Artisan Village",
        "name_as": "সৰ্থেবাৰী কাঁহ শিল্পৰ ঐতিহ্য গাঁও",
        "category": "handloom-crafts",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 26.35,
        "lng": 91.22,
        "x": 570.2,
        "y": 246.4,
        "imageUrl": "/images/destinations/sarthebari-bell-metal-heritage-village.jpg",
        "shortDescription": "Centuries-Old Artisan Guild Hand-Forging GI-Tagged Bell-Metal Utensils",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.35,91.22",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.35,91.22"
      },
      {
        "id": "tour-barpeta-satra",
        "slug": "barpeta-satra-heritage",
        "name": "Barpeta Satra & Kirtan Ghar",
        "name_as": "বৰপেটা সত্ৰ আৰু কীৰ্তন ঘৰ",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 26.321,
        "lng": 91.008,
        "x": 427.1,
        "y": 268.3,
        "imageUrl": "/images/destinations/barpeta-satra.jpg",
        "shortDescription": "Historic 1583 AD Vaishnavite Monastery Established by Mahapurusha Madhabdeva",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.321,91.008",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.321,91.008"
      },
      {
        "id": "tour-barpeta-doul-mandir",
        "slug": "barpeta-doul-utsav-temple",
        "name": "Barpeta Doul Mandir & Historic Doul Utsav",
        "name_as": "বৰপেটা সত্ৰৰ দৌল মন্দিৰ আৰু মহা দৌল উৎসৱ (হোলী)",
        "category": "festivals-cultural",
        "categoryLabel": "Festivals & Cultural Events",
        "lat": 26.3215,
        "lng": 91.0085,
        "x": 427.4,
        "y": 267.9,
        "imageUrl": "/images/destinations/barpeta-doul-mandir.jpg",
        "shortDescription": "The Iconic 7-Tiered Hepta-Pyramidal Temple of Kalia Thakur and Grand 5-Day Spring Doul Utsav",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.3215,91.0085",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.3215,91.0085"
      }
    ]
  },
  "bajali": {
    "slug": "bajali",
    "name": "Bajali",
    "name_as": "বজালী",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 91.072,
      "maxLon": 91.299,
      "minLat": 26.369,
      "maxLat": 26.677
    },
    "svgPath": "M 273.1,209.3 L 274.0,204.7 L 309.4,198.0 L 302.9,189.4 L 319.4,182.4 L 323.4,169.0 L 313.4,167.2 L 329.0,139.4 L 348.3,144.6 L 346.3,130.1 L 325.0,129.7 L 317.0,102.3 L 294.5,106.7 L 291.3,92.6 L 312.6,94.9 L 312.6,76.3 L 291.7,75.2 L 294.1,57.4 L 330.2,66.3 L 330.6,78.2 L 345.1,77.4 L 352.3,61.1 L 366.8,76.3 L 359.1,93.0 L 401.7,108.2 L 389.6,114.9 L 402.1,116.0 L 399.3,139.7 L 416.1,140.5 L 415.3,114.5 L 476.7,119.3 L 475.5,135.3 L 458.3,135.7 L 463.5,176.5 L 501.6,166.8 L 488.8,185.4 L 526.9,193.9 L 475.9,228.8 L 471.1,248.4 L 477.9,249.2 L 475.9,266.2 L 497.6,292.6 L 455.8,363.8 L 468.7,409.8 L 458.7,416.1 L 468.7,431.6 L 463.9,442.6 L 471.9,442.6 L 273.1,442.6 L 273.1,209.3 Z",
    "headquarters": {
      "name": "Pathsala",
      "name_as": "পাঠশালা",
      "lat": 26.499,
      "lng": 91.178,
      "x": 391.5,
      "y": 282.0
    },
    "scaleKm": 10,
    "neighbors": {
      "north": "↑ BAKSA DISTRICT",
      "south": "↓ BARPETA (SARTHEBARI / CHENGA)",
      "west": "← BARPETA TOWN & BHAWANIPUR",
      "east": "NALBARI DISTRICT →"
    },
    "rivers": [
      {
        "name": "Pahumara River",
        "name_as": "পাহুমাৰা নদী",
        "significance": "Historical river nourishing the agricultural plains of Bajali and Pathsala.",
        "svgPath": "M 351.6,64.7 L 360.1,172.7 L 375.8,273.9 L 387.8,361.6 L 396.3,429.1",
        "labelX": 375.8,
        "labelY": 261.9
      },
      {
        "name": "Kaldia River",
        "name_as": "কালদিয়া নদী",
        "significance": "Sacred valley stream flowing through Sarupeta and eastern Bajali.",
        "svgPath": "M 472.4,78.2 L 460.3,186.2 L 442.2,294.1 L 424.1,361.6 L 412.0,429.1",
        "labelX": 442.2,
        "labelY": 282.1
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-pari-hareswar",
        "slug": "pari-hareswar-devalaya",
        "name": "Pari Hareswar Devalaya",
        "name_as": "পৰী হৰেশ্বৰ দেৱালয়",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 26.505,
        "lng": 91.178,
        "x": 391.5,
        "y": 273.9,
        "imageUrl": "/images/destinations/pari-hareswar-devalaya.jpg",
        "shortDescription": "Ancient Shiva Temple & Origin of Classical Devadasi Dance Heritage",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.505,91.178",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.505,91.178"
      },
      {
        "id": "tour-pathsala-culture",
        "slug": "pathsala-mobile-theatre-hub",
        "name": "Pathsala Mobile Theatre Cultural Hub",
        "name_as": "পাঠশালা ভ্ৰাম্যমাণ নাট্যক্ষেত্ৰ",
        "category": "festivals-cultural",
        "categoryLabel": "Festivals & Cultural Events",
        "lat": 26.498,
        "lng": 91.176,
        "x": 389.1,
        "y": 283.3,
        "imageUrl": "/images/destinations/pathsala-mobile-theatre-hub.jpg",
        "shortDescription": "The Heartland of Assam's Unique Mobile Theatre (Bhramyoman) Tradition",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.498,91.176",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.498,91.176"
      }
    ]
  },
  "biswanath": {
    "slug": "biswanath",
    "name": "Biswanath",
    "name_as": "বিশ্বনাথ",
    "division": "North Assam",
    "bounds": {
      "minLon": 93.013,
      "maxLon": 93.819,
      "minLat": 26.579,
      "maxLat": 27.01
    },
    "svgPath": "M 641.9,57.4 L 681.9,92.4 L 686.2,135.0 L 677.9,149.8 L 713.3,162.0 L 720.8,187.7 L 704.2,201.4 L 687.9,241.1 L 654.8,229.2 L 634.8,247.0 L 618.5,243.8 L 599.9,256.2 L 600.5,285.6 L 618.8,329.3 L 601.9,335.1 L 536.5,322.4 L 504.4,292.2 L 475.6,286.1 L 383.0,292.2 L 345.3,306.0 L 326.7,332.5 L 303.6,340.7 L 305.0,342.5 L 297.6,346.0 L 249.8,356.6 L 231.3,407.4 L 166.1,442.6 L 148.1,379.9 L 131.2,345.4 L 114.4,339.3 L 117.2,329.0 L 100.7,295.9 L 106.1,275.3 L 91.8,241.7 L 97.2,223.1 L 79.2,195.6 L 94.7,174.9 L 95.2,127.0 L 117.8,134.4 L 134.4,123.3 L 288.7,96.1 L 384.7,93.1 L 427.9,99.2 L 446.7,113.0 L 613.9,82.3 L 641.9,57.4 Z",
    "headquarters": {
      "name": "Biswanath Chariali",
      "name_as": "বিশ্বনাথ চাৰিআলি",
      "lat": 26.733,
      "lng": 93.15,
      "x": 171.1,
      "y": 309.2
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ ARUNACHAL PRADESH (HILLS)",
      "south": "↓ BRAHMAPUTRA & NAGAON / GOLAGHAT",
      "west": "← SONITPUR DISTRICT",
      "east": "LAKHIMPUR DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 79.2,261.6 L 239.6,242.3 L 400.0,250.0 L 560.4,238.4 L 720.8,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-monabarie-tea",
        "slug": "monabarie-tea-estate",
        "name": "Monabarie Tea Estate",
        "name_as": "মনাবাৰী চাহ বাগিচা",
        "category": "tea-tourism",
        "categoryLabel": "Tea Tourism & Golf",
        "lat": 26.7262,
        "lng": 93.1842,
        "x": 200.5,
        "y": 315.7,
        "imageUrl": "/images/destinations/monabarie-tea-estate.jpg",
        "shortDescription": "Asia's Largest Contiguous Tea Estate (Established 1869 CE)",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.7262,93.1842",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.7262,93.1842"
      },
      {
        "id": "tour-biswanath-ghat",
        "slug": "biswanath-ghat-gupta-kashi",
        "name": "Biswanath Ghat (Gupta Kashi)",
        "name_as": "বিশ্বনাথ ঘাট (গুপ্ত কাশী)",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 26.665,
        "lng": 93.168,
        "x": 186.6,
        "y": 374.7,
        "imageUrl": "/images/destinations/biswanath-ghat-gupta-kashi.jpg",
        "shortDescription": "UNESCO Tentative Heritage Riverfront, Submerged Shiva Temple and Historic Stone Ghats",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.665,93.168",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.665,93.168"
      }
    ]
  },
  "bongaigaon": {
    "slug": "bongaigaon",
    "name": "Bongaigaon",
    "name_as": "বঙাইগাঁও",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 90.371,
      "maxLon": 90.881,
      "minLat": 26.151,
      "maxLat": 26.545
    },
    "svgPath": "M 185.3,151.2 L 213.6,143.6 L 221.5,130.8 L 242.9,139.3 L 246.0,126.8 L 259.2,129.1 L 239.4,160.7 L 258.6,210.4 L 262.7,173.5 L 284.7,167.4 L 290.1,143.6 L 279.1,132.3 L 299.5,79.8 L 365.9,100.4 L 377.2,98.6 L 364.9,77.4 L 376.6,72.2 L 397.6,81.5 L 395.1,96.3 L 453.3,90.5 L 456.5,108.8 L 486.3,111.4 L 479.7,140.7 L 504.0,150.9 L 512.5,125.9 L 499.6,119.2 L 499.6,107.6 L 532.9,104.7 L 543.3,84.4 L 524.4,74.0 L 540.8,57.4 L 552.4,60.3 L 553.0,71.0 L 610.0,60.0 L 612.2,68.7 L 604.6,89.9 L 590.5,87.3 L 586.4,99.5 L 569.4,93.1 L 568.4,112.8 L 582.3,115.2 L 590.8,143.6 L 561.8,157.5 L 576.9,165.4 L 617.5,154.1 L 623.2,162.5 L 607.1,193.3 L 622.5,219.1 L 621.3,234.5 L 603.4,240.0 L 581.7,230.1 L 554.6,269.9 L 567.2,293.4 L 518.7,290.8 L 489.5,319.2 L 489.2,334.0 L 499.6,334.3 L 501.4,345.4 L 454.9,345.4 L 426.0,367.1 L 441.7,404.3 L 428.5,394.7 L 396.7,404.3 L 392.6,396.7 L 375.6,390.3 L 353.9,402.8 L 300.8,406.9 L 251.7,440.0 L 252.3,429.5 L 228.4,442.6 L 226.8,429.0 L 231.9,423.4 L 177.8,415.6 L 176.8,402.8 L 196.0,393.8 L 225.9,368.0 L 216.5,342.2 L 233.8,352.9 L 228.7,335.2 L 255.5,331.7 L 241.6,330.3 L 238.5,316.3 L 248.5,325.9 L 246.7,311.7 L 265.2,305.0 L 248.5,274.2 L 256.4,266.4 L 245.1,271.0 L 237.2,257.7 L 240.0,240.3 L 229.0,252.2 L 227.8,237.1 L 220.5,238.2 L 219.3,253.9 L 209.9,234.2 L 221.5,232.4 L 211.1,229.5 L 218.0,220.0 L 215.5,219.4 L 217.1,215.3 L 208.6,214.2 L 212.7,210.1 L 210.5,199.3 L 201.7,205.2 L 202.3,187.2 L 189.4,188.0 L 200.7,162.8 L 188.5,159.9 L 185.3,151.2 Z",
    "headquarters": {
      "name": "Bongaigaon",
      "name_as": "বঙাইগাঁও",
      "lat": 26.48,
      "lng": 90.56,
      "x": 337.6,
      "y": 110.7
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ CHIRANG DISTRICT",
      "south": "↓ BRAHMAPUTRA RIVER & GOALPARA",
      "west": "← KOKRAJHAR DISTRICT",
      "east": "BARPETA DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 176.8,261.6 L 288.4,242.3 L 400.0,250.0 L 511.6,238.4 L 623.2,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-kakoijana",
        "slug": "kakoijana-reserve-forest",
        "name": "Kakoijana Golden Langur Sanctuary",
        "name_as": "কৈকোযানা সোণালী বান্দৰ অভয়াৰণ্য",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & Sanctuaries",
        "lat": 26.352,
        "lng": 90.628,
        "x": 401.9,
        "y": 245.9,
        "imageUrl": "/images/destinations/kakoijana-langur.jpg",
        "shortDescription": "Global Habitat and Community Conservation Stronghold of the Rare Golden Langur",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.352,90.628",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.352,90.628"
      },
      {
        "id": "tour-jogighopa-caves",
        "slug": "jogighopa-rock-cut-caves",
        "name": "Jogighopa Rock-Cut Caves & Monoliths",
        "name_as": "যোগীঘোপাৰ শিলা গুহা আৰু ভাস্কৰ্য্য",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 26.225,
        "lng": 90.575,
        "x": 351.8,
        "y": 380.1,
        "imageUrl": "/images/destinations/jogighopa-caves.jpg",
        "shortDescription": "Ancient 5th–8th Century Salasthambha Monolithic Cave Architecture on the Brahmaputra",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.225,90.575",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.225,90.575"
      },
      {
        "id": "tour-bagheswari-hill",
        "slug": "bagheswari-temple-hill",
        "name": "Bagheswari Temple & Hill Viewpoint",
        "name_as": "বাঘেশ্বৰী মন্দিৰ আৰু পাহাৰ",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 26.478,
        "lng": 90.552,
        "x": 330.0,
        "y": 112.8,
        "imageUrl": "/images/destinations/bagheswari-temple-hill.jpg",
        "shortDescription": "Sacred Hilltop Shakti Shrine Overlooking Green Valleys of Bongaigaon",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.478,90.552",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.478,90.552"
      }
    ]
  },
  "cachar": {
    "slug": "cachar",
    "name": "Cachar",
    "name_as": "কাছাৰ",
    "division": "Barak Valley",
    "bounds": {
      "minLon": 92.385,
      "maxLon": 93.296,
      "minLat": 24.346,
      "maxLat": 25.174
    },
    "svgPath": "M 262.7,79.4 L 289.7,73.6 L 299.2,77.8 L 310.0,70.1 L 320.0,74.4 L 346.2,72.6 L 351.8,66.0 L 349.9,57.4 L 360.2,59.8 L 371.6,84.9 L 387.3,88.3 L 398.0,102.8 L 426.2,89.4 L 450.9,94.6 L 454.2,83.9 L 462.6,86.3 L 489.7,76.7 L 494.4,79.4 L 492.6,84.8 L 479.4,98.1 L 497.1,113.8 L 501.1,128.1 L 554.9,128.9 L 565.5,138.5 L 576.6,135.7 L 584.6,144.1 L 585.1,143.0 L 592.5,145.0 L 584.8,153.9 L 587.5,159.1 L 580.9,160.7 L 586.5,172.0 L 580.3,173.7 L 582.7,177.8 L 576.0,183.5 L 579.0,187.2 L 573.9,188.7 L 576.2,193.2 L 566.0,204.1 L 561.7,202.7 L 564.8,208.6 L 562.1,208.6 L 564.3,210.6 L 562.2,211.7 L 562.7,224.0 L 560.1,227.7 L 541.1,236.1 L 536.1,224.7 L 527.0,225.9 L 528.2,220.2 L 522.8,224.0 L 517.9,253.0 L 522.0,259.2 L 512.3,275.2 L 506.4,276.0 L 514.0,291.5 L 520.3,293.0 L 516.4,303.7 L 510.8,305.2 L 512.6,315.3 L 507.5,317.9 L 511.2,323.4 L 505.5,330.0 L 520.5,339.0 L 511.4,344.7 L 499.7,343.4 L 505.2,350.9 L 495.6,358.2 L 495.8,370.8 L 487.7,382.8 L 494.3,396.5 L 487.9,415.9 L 492.6,421.6 L 489.0,425.9 L 481.2,426.8 L 477.0,424.5 L 471.7,431.0 L 461.2,426.4 L 454.7,434.9 L 450.6,429.2 L 441.5,434.3 L 431.3,424.9 L 428.6,435.3 L 421.9,432.5 L 419.8,429.5 L 409.3,431.5 L 401.1,442.0 L 393.6,442.6 L 395.2,430.6 L 381.3,421.2 L 362.2,369.4 L 372.3,346.2 L 365.3,346.9 L 352.2,335.1 L 343.8,349.5 L 321.4,334.7 L 320.6,325.3 L 334.4,322.6 L 320.1,316.4 L 320.0,293.3 L 313.3,287.8 L 315.8,253.1 L 328.5,222.4 L 311.4,222.2 L 303.8,202.1 L 311.5,203.3 L 296.0,199.2 L 289.1,190.0 L 281.2,191.9 L 281.3,193.3 L 270.4,190.8 L 256.6,199.1 L 251.6,189.9 L 240.4,192.5 L 243.3,178.4 L 237.3,165.1 L 238.9,155.9 L 221.6,160.0 L 229.8,147.3 L 207.5,146.1 L 210.5,114.3 L 218.4,106.4 L 228.4,110.4 L 225.1,102.0 L 231.9,95.4 L 236.0,74.7 L 262.7,79.4 Z",
    "headquarters": {
      "name": "Silchar",
      "name_as": "শিলচৰ",
      "lat": 24.833,
      "lng": 92.779,
      "x": 372.0,
      "y": 213.2
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ DIMA HASAO (BARAIL RANGE)",
      "south": "↓ MIZORAM STATE",
      "west": "← HAILAKANDI DISTRICT",
      "east": "MANIPUR STATE →"
    },
    "rivers": [
      {
        "name": "Barak River",
        "name_as": "বৰাক নদী",
        "significance": "The principal lifeline waterway of Barak Valley flowing past Silchar town.",
        "svgPath": "M 518.5,219.7 L 450.1,204.6 L 381.6,214.7 L 313.2,189.6",
        "labelX": 381.6,
        "labelY": 202.7
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-guide-barak-valley",
        "slug": "barak-valley-scenic-circuit",
        "name": "Barak Valley Tea, Riverfront & Dimasa Heritage Guide",
        "name_as": "বৰাক উপত্যকাৰ চাহ, নদী আৰু ডিমাচা ঐতিহ্য নিৰ্দেশিকা",
        "category": "district-travel-guides",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 24.8333,
        "lng": 92.7789,
        "x": 372.0,
        "y": 213.0,
        "imageUrl": "/images/destinations/barak-valley-scenic-circuit.jpg",
        "shortDescription": "Southern Assam's Undiscovered Valleys, Khaspur Royal Ruins & Barak Riverfront",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.8333,92.7789",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=24.8333,92.7789"
      },
      {
        "id": "tour-khaspur-palace",
        "slug": "khaspur-kachari-palace-ruins",
        "name": "Khaspur Ancient Kachari Royal Palace Ruins",
        "name_as": "খাসপুৰ কছাৰী ৰাজদৰবাৰৰ ধ্বংসাৱশেষ",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 24.885,
        "lng": 92.955,
        "x": 452.4,
        "y": 187.0,
        "imageUrl": "/images/destinations/khaspur-palace.jpg",
        "shortDescription": "18th-Century Historic Brick Capital Ruins of the Dimasa Kachari Kingdom",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.885,92.955",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=24.885,92.955"
      }
    ]
  },
  "charaideo": {
    "slug": "charaideo",
    "name": "Charaideo",
    "name_as": "চৰাইদেউ",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 94.708,
      "maxLon": 95.394,
      "minLat": 26.901,
      "maxLat": 27.237
    },
    "svgPath": "M 174.7,222.4 L 233.4,140.2 L 313.9,67.4 L 330.2,132.8 L 324.0,157.0 L 397.6,148.3 L 414.6,171.5 L 464.2,170.5 L 467.0,181.5 L 468.0,170.9 L 476.0,178.0 L 488.5,168.0 L 506.6,185.1 L 507.6,170.9 L 515.9,180.5 L 524.6,160.6 L 534.7,164.1 L 538.1,139.3 L 550.3,148.6 L 569.0,136.1 L 567.0,126.4 L 576.3,137.0 L 594.7,131.5 L 594.0,108.0 L 612.4,104.1 L 615.9,114.8 L 643.3,99.0 L 674.6,115.1 L 689.1,112.2 L 698.9,115.1 L 718.6,133.2 L 731.5,201.8 L 651.3,252.4 L 616.9,295.0 L 603.7,302.4 L 588.8,280.5 L 566.6,296.9 L 548.6,288.5 L 463.5,353.0 L 452.8,375.2 L 363.9,422.9 L 328.5,432.6 L 305.9,404.2 L 274.3,409.4 L 267.4,391.0 L 285.8,378.1 L 283.0,345.6 L 269.8,338.5 L 242.8,349.8 L 252.5,366.2 L 187.9,413.6 L 92.5,421.3 L 68.5,409.7 L 124.4,334.3 L 147.7,340.4 L 143.8,333.3 L 168.8,311.4 L 163.6,263.7 L 174.7,222.4 Z",
    "headquarters": {
      "name": "Sonari",
      "name_as": "সোণাৰী",
      "lat": 27.025,
      "lng": 95.033,
      "x": 381.1,
      "y": 301.2
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ DIBRUGARH DISTRICT",
      "south": "↓ NAGALAND STATE",
      "west": "← SIVASAGAR DISTRICT",
      "east": "ARUNACHAL PRADESH →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 68.5,261.0 L 234.3,242.7 L 400.0,250.0 L 565.7,239.0 L 731.5,257.3",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-charaideo",
        "slug": "charaideo",
        "name": "Charaideo Moidams (Ahom Royal Pyramids)",
        "name_as": "চৰাইদেউ মৈদাম",
        "category": "heritage-historic",
        "categoryLabel": "Charaideo UNESCO Heritage",
        "lat": 26.9388,
        "lng": 94.8703,
        "x": 211.2,
        "y": 402.3,
        "imageUrl": "/images/destinations/charaideo.jpg",
        "shortDescription": "UNESCO World Heritage Site (2024) — Sacred Vaulted Burial Mounds of the Ahom Kings",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.9388,94.8703",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.9388,94.8703"
      },
      {
        "id": "tour-kareng-ghar",
        "slug": "kareng-ghar",
        "name": "Kareng Ghar (Garhgaon Royal Palace)",
        "name_as": "কাৰেং ঘৰ (গড়গাঁও ৰাজপ্ৰসাদ)",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.9634,
        "lng": 94.7578,
        "x": 93.7,
        "y": 373.5,
        "imageUrl": "/images/destinations/kareng-ghar.jpg",
        "shortDescription": "Magnificent seven-storied royal palace of the Ahom Kingdom featuring indigenous brick and organic mortar architecture.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.9634,94.7578",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.9634,94.7578"
      }
    ]
  },
  "chirang": {
    "slug": "chirang",
    "name": "Chirang",
    "name_as": "চিৰাং",
    "division": "Lower Assam (BTR)",
    "bounds": {
      "minLon": 90.311,
      "maxLon": 90.982,
      "minLat": 26.365,
      "maxLat": 26.925
    },
    "svgPath": "M 551.9,310.8 L 546.4,311.0 L 540.0,307.7 L 517.3,312.4 L 523.0,328.5 L 537.6,336.1 L 493.7,344.7 L 493.3,337.1 L 485.1,335.1 L 473.7,346.7 L 486.9,354.0 L 479.6,368.3 L 456.2,370.4 L 456.2,378.5 L 465.3,383.2 L 459.3,400.8 L 442.3,393.6 L 447.0,373.0 L 426.0,371.2 L 423.8,358.3 L 383.0,362.4 L 384.8,352.0 L 370.0,345.5 L 361.9,349.2 L 370.5,364.0 L 362.5,365.3 L 316.0,350.8 L 301.6,387.7 L 309.4,395.7 L 305.6,412.4 L 290.2,416.7 L 287.3,442.6 L 273.9,407.7 L 287.8,385.5 L 278.5,383.8 L 276.3,392.6 L 261.3,386.7 L 255.8,395.7 L 235.9,401.0 L 239.9,376.1 L 227.3,368.7 L 232.2,362.2 L 242.5,365.3 L 241.7,355.3 L 232.0,355.3 L 238.8,348.9 L 224.7,336.3 L 229.1,326.5 L 217.4,324.7 L 206.6,305.7 L 214.1,296.7 L 205.9,276.1 L 208.1,260.2 L 201.3,252.7 L 221.4,196.1 L 200.2,130.6 L 194.0,88.4 L 207.0,60.1 L 248.3,57.4 L 333.6,122.5 L 391.8,139.4 L 400.0,152.3 L 419.4,146.6 L 447.0,158.4 L 606.0,143.9 L 602.0,151.3 L 597.4,153.1 L 567.6,217.6 L 568.7,284.1 L 548.0,300.2 L 551.9,310.8 Z",
    "headquarters": {
      "name": "Kajalgaon",
      "name_as": "কাজলগাঁও",
      "lat": 26.52,
      "lng": 90.54,
      "x": 329.4,
      "y": 342.8
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BHUTAN KINGDOM",
      "south": "↓ BONGAIGAON DISTRICT",
      "west": "← KOKRAJHAR DISTRICT",
      "east": "BAKSA DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 194.0,261.6 L 297.0,242.3 L 400.0,250.0 L 503.0,238.4 L 606.0,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-champamati-park",
        "slug": "champamati-river-eco-park",
        "name": "Champamati River Eco Park & Barrage",
        "name_as": "চম্পাৱতী নদী ইক' পাৰ্ক",
        "category": "river-experiences",
        "categoryLabel": "River Islands & Riverfronts",
        "lat": 26.545,
        "lng": 90.468,
        "x": 281.6,
        "y": 324.3,
        "imageUrl": "/images/destinations/champamati-river-eco-park.jpg",
        "shortDescription": "Picturesque Mountain Riverfront and Scenic Foothills Eco-Tourism Park in Chirang",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.545,90.468",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.545,90.468"
      },
      {
        "id": "tour-kalamati-chirang",
        "slug": "kalamati-eco-tourism-spot",
        "name": "Kalamati Eco Tourism Spot (Indo-Bhutan Border)",
        "name_as": "কালামাটি প্ৰকৃতি পৰ্যটন স্থলী",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 26.785,
        "lng": 90.395,
        "x": 233.2,
        "y": 146.1,
        "imageUrl": "/images/destinations/kalamati-eco-tourism-spot.jpg",
        "shortDescription": "Unique Black-Soil Hill Cliffs and Pristine Mountain Springs on the Bhutan Border",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.785,90.395",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.785,90.395"
      }
    ]
  },
  "darrang": {
    "slug": "darrang",
    "name": "Darrang",
    "name_as": "দৰং",
    "division": "North Assam",
    "bounds": {
      "minLon": 91.722,
      "maxLon": 92.406,
      "minLat": 26.18,
      "maxLat": 26.688
    },
    "svgPath": "M 617.2,127.4 L 611.6,138.2 L 621.8,141.4 L 617.9,147.5 L 632.3,172.9 L 613.1,167.0 L 596.5,183.3 L 603.6,194.3 L 559.4,233.0 L 532.6,239.8 L 513.6,264.7 L 486.5,257.5 L 468.5,267.4 L 426.3,325.8 L 414.9,327.6 L 382.7,381.6 L 371.0,383.2 L 364.4,373.3 L 347.3,384.3 L 337.1,380.0 L 265.2,427.7 L 185.2,442.6 L 168.9,433.8 L 167.7,423.9 L 192.8,405.2 L 199.4,385.6 L 193.3,355.0 L 201.6,342.0 L 217.9,348.5 L 212.8,341.3 L 222.5,333.4 L 222.8,301.7 L 188.6,255.3 L 181.8,226.5 L 185.2,221.3 L 189.9,220.2 L 191.3,212.7 L 206.4,214.3 L 207.7,204.0 L 192.8,198.8 L 197.2,197.2 L 190.3,185.3 L 219.1,191.1 L 230.8,183.0 L 226.7,158.7 L 213.8,159.6 L 215.9,147.0 L 228.4,147.9 L 229.6,137.3 L 221.8,136.7 L 231.3,127.4 L 234.0,129.4 L 234.2,134.6 L 243.0,135.8 L 246.2,164.1 L 257.9,169.5 L 268.4,164.1 L 277.4,138.7 L 295.9,140.3 L 300.3,165.0 L 327.6,163.0 L 323.0,153.3 L 331.3,149.7 L 346.1,150.6 L 356.9,167.3 L 362.9,165.7 L 355.9,160.1 L 373.9,161.0 L 367.3,177.6 L 378.5,175.6 L 371.7,188.4 L 383.2,187.5 L 381.5,207.3 L 390.2,215.7 L 394.9,188.2 L 403.4,187.3 L 403.4,158.7 L 431.7,152.9 L 432.9,138.0 L 427.1,130.6 L 416.8,133.5 L 411.5,122.5 L 399.0,124.0 L 394.9,157.1 L 374.2,158.0 L 357.6,146.8 L 360.3,122.0 L 377.6,119.8 L 372.0,106.0 L 381.5,106.3 L 380.5,97.0 L 404.9,93.7 L 406.6,75.2 L 442.4,77.9 L 440.2,70.7 L 485.8,57.4 L 482.9,71.6 L 488.5,77.0 L 501.4,71.6 L 503.6,80.4 L 495.3,85.1 L 514.8,90.5 L 525.3,116.2 L 519.7,118.6 L 522.4,155.6 L 547.5,137.8 L 538.5,135.1 L 530.9,111.0 L 553.6,100.4 L 555.5,66.6 L 565.8,72.0 L 568.9,95.7 L 583.8,93.9 L 582.1,107.8 L 598.9,95.7 L 596.5,108.5 L 605.8,115.5 L 591.9,116.4 L 593.3,124.0 L 617.2,127.4 Z",
    "headquarters": {
      "name": "Mangaldai",
      "name_as": "মঙ্গলদৈ",
      "lat": 26.435,
      "lng": 92.03,
      "x": 375.2,
      "y": 248.9
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ UDALGURI DISTRICT (BTR)",
      "south": "↓ BRAHMAPUTRA RIVER & MORIGAON",
      "west": "← KAMRUP RURAL DISTRICT",
      "east": "SONITPUR DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 167.7,261.6 L 283.8,242.3 L 400.0,250.0 L 516.2,238.4 L 632.3,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-orang-np",
        "slug": "orang-national-park",
        "name": "Orang National Park (Mini Kaziranga)",
        "name_as": "ওৰাং ৰাষ্ট্ৰীয় উদ্যান",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.54,
        "lng": 92.34,
        "x": 602.6,
        "y": 162.8,
        "imageUrl": "/images/destinations/orang-national-park.jpg",
        "shortDescription": "Global Stronghold of One-Horned Rhinos & Royal Bengal Tigers",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.54,92.34",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.54,92.34"
      },
      {
        "id": "tour-gandhi-smriti-park",
        "slug": "gandhi-smriti-park-mangaldai",
        "name": "Gandhi Smriti Park & Batha Riverfront",
        "name_as": "গান্ধী স্মৃতি উদ্যান আৰু বাথা নদীকাষ",
        "category": "heritage-historic",
        "categoryLabel": "Historical Landmark Park",
        "lat": 26.438,
        "lng": 92.032,
        "x": 376.7,
        "y": 246.4,
        "imageUrl": "/images/destinations/ambari-archaeology.jpg",
        "shortDescription": "Historic municipal park and serene green lung in the heart of Mangaldai along the Batha stream.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.438,92.032",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.438,92.032"
      }
    ]
  },
  "dhemaji": {
    "slug": "dhemaji",
    "name": "Dhemaji",
    "name_as": "ধেমাযী",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 94.158,
      "maxLon": 95.568,
      "minLat": 27.286,
      "maxLat": 27.903
    },
    "svgPath": "M 731.3,86.5 L 731.5,98.1 L 720.2,98.9 L 706.8,121.9 L 675.4,149.6 L 668.7,174.2 L 645.7,188.8 L 608.8,195.7 L 606.9,200.5 L 594.9,214.3 L 573.8,213.5 L 565.7,203.0 L 569.5,186.9 L 529.6,197.6 L 517.0,212.3 L 488.1,207.6 L 478.3,214.5 L 468.0,212.9 L 447.3,238.7 L 416.2,258.9 L 364.7,314.0 L 353.6,314.2 L 340.9,339.8 L 333.5,336.7 L 326.9,345.7 L 313.9,349.0 L 312.7,365.2 L 299.4,374.6 L 300.4,388.7 L 286.2,396.8 L 286.1,406.5 L 277.8,399.8 L 281.3,396.5 L 277.0,382.8 L 263.1,385.2 L 262.8,374.2 L 234.4,391.3 L 222.4,390.6 L 214.8,401.6 L 195.8,400.3 L 187.0,413.5 L 178.6,397.0 L 168.1,401.1 L 160.0,389.8 L 134.3,397.6 L 131.3,402.8 L 119.2,407.9 L 113.8,389.8 L 87.4,366.0 L 96.4,361.6 L 109.4,371.0 L 117.0,363.1 L 117.8,340.8 L 102.9,323.3 L 98.7,295.1 L 93.0,284.1 L 93.2,272.3 L 76.1,261.6 L 77.0,248.0 L 68.5,244.6 L 82.5,228.0 L 94.7,226.1 L 97.5,231.0 L 91.1,238.6 L 102.8,252.8 L 113.2,245.7 L 146.2,261.1 L 181.3,246.6 L 196.5,272.3 L 204.6,260.5 L 215.2,262.7 L 238.5,246.1 L 253.3,244.6 L 260.3,236.2 L 283.4,232.9 L 298.4,220.8 L 308.5,220.5 L 311.2,209.4 L 321.9,214.3 L 330.1,207.2 L 345.0,212.0 L 364.9,192.1 L 388.9,189.1 L 394.8,173.5 L 538.9,123.2 L 626.5,93.1 L 662.5,109.6 L 731.3,86.5 Z",
    "headquarters": {
      "name": "Dhemaji",
      "name_as": "ধেমা Officer/Town",
      "lat": 27.483,
      "lng": 94.58,
      "x": 256.4,
      "y": 313.8
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ ARUNACHAL PRADESH (EAST SIANG)",
      "south": "↓ BRAHMAPUTRA & DIBRUGARH",
      "west": "← LAKHIMPUR DISTRICT",
      "east": "TINSUKIA DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 68.5,259.8 L 234.3,243.5 L 400.0,250.0 L 565.7,240.2 L 731.5,256.5",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-gerukamukh-dhemaji",
        "slug": "gerukamukh-subansiri-gorge",
        "name": "Gerukamukh Subansiri River Gorge",
        "name_as": "গেৰুকামুখ সোৱণশিৰী নদী উপত্যকা",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 27.515,
        "lng": 94.265,
        "x": 96.5,
        "y": 295.5,
        "imageUrl": "/images/destinations/subansiri-river.jpg",
        "shortDescription": "Spectacular Deep Mountain River Gorge of the Gold-Bearing Subansiri River",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.515,94.265",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.515,94.265"
      },
      {
        "id": "tour-ghuguha-dol",
        "slug": "ghuguha-dol-historic-temple",
        "name": "Ghuguha Dol & Royal Ahom Monument",
        "name_as": "ঘুঘুহা দ'ল",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 27.425,
        "lng": 94.515,
        "x": 223.4,
        "y": 347.1,
        "imageUrl": "/images/destinations/ghuguha-dol-historic-temple.jpg",
        "shortDescription": "Historic 17th-Century Ahom Royal Temple Dedicated to Queen Jayamati",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.425,94.515",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.425,94.515"
      }
    ]
  },
  "dhubri": {
    "slug": "dhubri",
    "name": "Dhubri",
    "name_as": "ধুবুৰী",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 89.667,
      "maxLon": 90.515,
      "minLat": 25.859,
      "maxLat": 26.404
    },
    "svgPath": "M 230.2,58.0 L 231.3,66.0 L 252.5,73.6 L 247.9,83.6 L 271.1,93.3 L 273.0,101.4 L 255.2,116.1 L 258.6,122.6 L 245.9,153.7 L 251.3,161.6 L 240.9,168.5 L 248.4,171.7 L 241.8,182.6 L 250.7,196.2 L 241.8,206.9 L 252.3,206.1 L 247.5,236.1 L 257.3,247.0 L 275.0,249.3 L 280.0,261.4 L 293.5,261.2 L 295.3,249.1 L 314.9,253.5 L 325.3,246.1 L 354.7,253.7 L 381.3,218.7 L 441.9,191.0 L 438.5,182.6 L 431.0,185.9 L 420.0,159.3 L 408.9,158.7 L 404.3,150.3 L 408.4,146.1 L 418.2,153.0 L 433.9,139.6 L 434.1,126.6 L 423.9,134.4 L 422.8,118.6 L 411.4,111.9 L 418.4,108.6 L 417.5,91.8 L 439.4,81.3 L 466.2,86.8 L 479.5,73.3 L 479.2,64.3 L 493.1,57.4 L 498.1,71.5 L 484.7,82.1 L 493.6,83.8 L 485.6,99.6 L 520.7,98.1 L 518.8,111.5 L 530.2,127.4 L 524.1,146.5 L 514.7,142.1 L 510.0,148.6 L 535.0,158.1 L 534.3,169.2 L 547.5,162.9 L 545.5,153.9 L 557.3,137.7 L 573.2,143.8 L 578.7,131.2 L 586.2,141.9 L 579.8,144.4 L 581.0,153.4 L 598.7,145.5 L 597.4,114.4 L 614.9,105.6 L 608.8,78.0 L 609.9,76.1 L 628.6,73.1 L 636.3,87.8 L 636.5,76.3 L 641.8,75.4 L 642.7,86.3 L 650.6,77.7 L 648.6,90.3 L 654.3,100.0 L 662.5,96.6 L 656.8,102.3 L 668.9,124.5 L 655.4,129.3 L 656.8,139.6 L 649.5,132.7 L 651.8,142.7 L 661.8,143.8 L 642.4,146.3 L 646.1,159.1 L 633.6,151.3 L 640.4,170.0 L 618.8,188.7 L 582.6,205.4 L 546.4,203.3 L 519.1,210.7 L 516.6,232.5 L 507.5,243.2 L 471.5,253.3 L 456.7,271.7 L 453.7,287.8 L 461.0,313.0 L 427.8,309.0 L 394.1,319.5 L 376.1,349.9 L 350.8,348.7 L 318.5,369.2 L 300.1,388.5 L 302.6,407.6 L 294.6,407.8 L 289.8,421.8 L 267.7,426.4 L 252.9,442.6 L 230.2,439.7 L 260.4,392.3 L 217.9,391.6 L 220.8,384.7 L 234.5,389.1 L 229.3,373.0 L 250.4,367.7 L 225.4,340.7 L 225.2,364.0 L 214.7,360.0 L 213.8,330.8 L 206.5,317.0 L 192.4,335.9 L 201.9,319.5 L 182.6,321.0 L 193.1,313.0 L 190.6,306.9 L 199.7,305.0 L 196.9,282.6 L 188.1,287.0 L 189.9,270.0 L 171.0,267.7 L 177.8,251.8 L 164.4,230.0 L 146.2,229.6 L 151.9,220.1 L 157.3,219.1 L 138.9,219.3 L 131.1,204.8 L 141.2,207.5 L 146.2,201.5 L 140.0,196.0 L 155.5,190.1 L 132.5,184.1 L 154.1,169.8 L 143.7,154.5 L 133.6,152.6 L 136.8,144.0 L 145.7,154.1 L 158.5,144.4 L 144.1,124.9 L 145.9,116.5 L 150.5,125.8 L 171.2,130.0 L 167.1,105.4 L 175.3,108.8 L 188.7,96.6 L 187.6,81.1 L 214.7,65.8 L 208.3,75.4 L 214.5,81.3 L 217.7,59.3 L 230.2,58.0 Z",
    "headquarters": {
      "name": "Dhubri",
      "name_as": "ধুবুৰী",
      "lat": 26.02,
      "lng": 89.98,
      "x": 323.9,
      "y": 335.1
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ KOKRAJHAR DISTRICT",
      "south": "↓ BANGLADESH & SOUTH SALMARA",
      "west": "← WEST BENGAL (COOCH BEHAR)",
      "east": "GOALPARA & BONGAIGAON →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 131.1,261.6 L 265.6,242.3 L 400.0,250.0 L 534.4,238.4 L 668.9,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-asharikandi-terracotta",
        "slug": "asharikandi-terracotta-village",
        "name": "Asharikandi Terracotta & Pottery Craft Village",
        "name_as": "আশাৰীকান্দি টেৰাকোটা আৰু মৃৎশিল্প গাঁও",
        "category": "handloom-crafts",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 26.05,
        "lng": 89.98,
        "x": 323.9,
        "y": 312.2,
        "imageUrl": "/images/destinations/asharikandi-terracotta-village.jpg",
        "shortDescription": "India's Premier Terracotta Cluster Famed for Handcrafted Hatima Dolls",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.05,89.98",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.05,89.98"
      },
      {
        "id": "tour-dhubri-gurdwara",
        "slug": "gurdwara-guru-tegh-bahadur",
        "name": "Gurdwara Sri Guru Tegh Bahadur Sahib",
        "name_as": "গুৰুদ্বাৰা শ্ৰী গুৰু টেগ বাহাদুৰ চাহাব",
        "category": "temples-spiritual",
        "categoryLabel": "Sacred Historic Gurdwara",
        "lat": 26.022,
        "lng": 89.983,
        "x": 326.0,
        "y": 333.6,
        "imageUrl": "/images/destinations/barpeta-satra.jpg",
        "shortDescription": "World-famous historic riverfront Gurdwara established by Ninth Sikh Guru Tegh Bahadur in 1669 CE.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.022,89.983",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.022,89.983"
      }
    ]
  },
  "dibrugarh": {
    "slug": "dibrugarh",
    "name": "Dibrugarh",
    "name_as": "ডিব্ৰুগড়",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 94.527,
      "maxLon": 95.521,
      "minLat": 27.067,
      "maxLat": 27.729
    },
    "svgPath": "M 537.3,72.3 L 542.3,77.3 L 564.1,131.0 L 554.1,132.7 L 545.4,143.4 L 538.9,139.2 L 544.3,156.2 L 534.7,158.2 L 535.4,180.0 L 514.3,186.7 L 509.3,221.3 L 527.1,227.3 L 525.0,245.8 L 551.4,239.2 L 559.1,255.6 L 581.0,252.5 L 589.0,259.6 L 604.2,254.4 L 616.0,256.8 L 631.6,271.1 L 639.8,264.4 L 650.9,269.4 L 646.4,284.8 L 636.6,289.3 L 647.4,301.0 L 654.8,298.4 L 635.3,315.0 L 643.5,330.0 L 632.4,336.4 L 638.1,354.7 L 647.0,335.0 L 656.6,348.3 L 642.6,369.6 L 646.8,385.8 L 639.4,401.2 L 644.4,405.8 L 639.4,418.6 L 637.0,416.9 L 631.8,420.8 L 608.3,430.5 L 593.6,441.2 L 585.3,394.3 L 574.7,384.6 L 569.5,383.0 L 561.7,384.6 L 545.1,375.9 L 530.4,384.4 L 528.6,378.7 L 518.7,380.8 L 519.1,393.4 L 509.3,396.3 L 504.3,390.6 L 505.4,395.8 L 495.4,402.5 L 488.9,397.5 L 487.0,410.8 L 481.7,408.9 L 477.0,419.6 L 472.6,414.5 L 472.0,422.0 L 462.4,412.9 L 455.7,418.2 L 451.4,414.5 L 450.9,420.1 L 449.4,414.3 L 422.9,414.8 L 413.8,402.4 L 374.5,407.0 L 377.8,394.1 L 369.1,359.0 L 326.1,398.0 L 294.8,442.1 L 292.9,442.6 L 279.8,439.3 L 284.8,428.1 L 253.1,418.4 L 249.0,411.7 L 263.1,392.5 L 257.4,383.9 L 264.4,374.6 L 256.1,361.6 L 258.3,350.6 L 242.3,344.7 L 247.2,331.6 L 240.1,327.4 L 229.2,334.7 L 230.9,345.7 L 216.4,329.2 L 207.1,347.1 L 186.9,345.0 L 159.7,408.6 L 143.4,386.1 L 147.1,384.1 L 149.3,379.6 L 156.0,332.1 L 171.2,307.4 L 167.1,293.4 L 178.0,287.9 L 175.8,290.8 L 184.9,298.1 L 185.1,287.6 L 200.6,278.6 L 199.5,263.2 L 214.2,252.8 L 215.5,235.1 L 229.7,231.4 L 237.0,221.6 L 245.1,225.1 L 259.0,196.9 L 271.3,196.7 L 327.8,136.3 L 361.9,114.2 L 384.7,85.9 L 396.0,87.6 L 406.8,80.0 L 438.5,85.2 L 452.4,69.1 L 496.1,57.4 L 492.0,75.0 L 500.9,86.6 L 524.1,87.4 L 537.3,72.3 Z",
    "headquarters": {
      "name": "Dibrugarh",
      "name_as": "ডিব্ৰুগড়",
      "lat": 27.473,
      "lng": 94.912,
      "x": 337.5,
      "y": 202.8
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & DHEMAJI",
      "south": "↓ CHARAIDEO & SIVASAGAR",
      "west": "← SIVASAGAR DISTRICT",
      "east": "TINSUKIA DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Mighty braided channels framed by the Bogibeel rail-road bridge.",
        "svgPath": "M 247.2,236.1 L 330.8,192.1 L 414.5,154.4 L 526.0,123.0",
        "labelX": 414.5,
        "labelY": 142.4
      },
      {
        "name": "Burhi Dihing River",
        "name_as": "বুঢ়ী দিহিঙ নদী",
        "significance": "Southern tea garden river flowing past Naharkatia and Namrup rainforests.",
        "svgPath": "M 609.7,386.9 L 498.2,361.8 L 386.6,324.1 L 275.0,298.9",
        "labelX": 386.6,
        "labelY": 312.1
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-namphake",
        "slug": "namphake",
        "name": "Tai Phake Buddhist Village & Monastery",
        "name_as": "নামফাকে টাই বৌদ্ধ গাঁও",
        "category": "handloom-crafts",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 27.32,
        "lng": 95.34,
        "x": 576.2,
        "y": 298.9,
        "imageUrl": "/images/destinations/namphake.jpg",
        "shortDescription": "Living Tai Buddhist Cultural Heritage & Traditional Stilt Village",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.32,95.34",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.32,95.34"
      },
      {
        "id": "tour-dehing-patkai",
        "slug": "dehing-patkai",
        "name": "Dehing Patkai National Park (Amazon of the East)",
        "name_as": "দেহিং পাটকাই ৰাষ্ট্ৰীয় উদ্যান",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 27.2917,
        "lng": 95.4167,
        "x": 619.0,
        "y": 316.7,
        "imageUrl": "/images/destinations/dehing-patkai.jpg",
        "shortDescription": "The Amazon of the East — Largest Lowland Tropical Rainforest in India",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.2917,95.4167",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.2917,95.4167"
      }
    ]
  },
  "dima-hasao": {
    "slug": "dima-hasao",
    "name": "Dima Hasao",
    "name_as": "ডিমা হাছাও",
    "division": "Central Assam / Hills",
    "bounds": {
      "minLon": 92.484,
      "maxLon": 93.511,
      "minLat": 24.936,
      "maxLat": 25.861
    },
    "svgPath": "M 427.1,80.4 L 428.6,84.0 L 441.0,79.7 L 453.6,86.8 L 452.1,92.4 L 460.3,97.0 L 461.3,99.0 L 454.4,120.3 L 458.8,131.8 L 470.3,131.5 L 473.3,141.4 L 478.8,145.0 L 473.8,150.5 L 472.6,162.5 L 485.7,184.6 L 506.0,182.3 L 510.7,190.2 L 519.8,184.3 L 523.4,190.6 L 531.6,189.3 L 534.6,184.9 L 543.1,189.7 L 546.9,197.5 L 560.0,212.2 L 559.5,222.1 L 587.2,235.3 L 593.2,255.9 L 583.1,275.9 L 592.2,292.0 L 574.6,301.7 L 555.8,321.4 L 556.1,329.0 L 541.5,352.8 L 541.2,373.7 L 536.0,387.2 L 528.8,391.2 L 522.7,408.5 L 508.3,407.0 L 504.1,420.0 L 500.0,421.0 L 500.2,430.1 L 506.5,428.7 L 500.4,442.6 L 493.3,435.0 L 483.4,437.5 L 474.0,429.0 L 426.0,428.2 L 422.5,415.4 L 406.7,401.4 L 418.4,389.4 L 420.1,384.6 L 415.9,382.2 L 391.7,390.8 L 384.3,388.7 L 381.3,398.2 L 359.3,393.6 L 334.1,405.6 L 324.7,392.6 L 310.6,389.5 L 300.5,367.0 L 291.3,364.9 L 293.1,372.6 L 288.1,378.5 L 264.7,380.1 L 255.8,376.3 L 246.2,383.2 L 237.7,379.4 L 213.7,384.6 L 207.0,372.5 L 206.8,366.5 L 247.0,377.4 L 249.7,367.0 L 260.9,359.5 L 264.0,349.7 L 276.5,348.6 L 296.3,336.2 L 309.8,339.3 L 320.2,332.3 L 308.1,325.7 L 304.0,318.3 L 310.5,313.0 L 306.9,308.6 L 316.5,302.1 L 312.1,279.2 L 299.2,274.4 L 292.0,263.2 L 294.4,258.5 L 286.2,261.6 L 268.1,242.9 L 263.4,246.4 L 260.1,234.1 L 254.3,241.3 L 248.6,233.5 L 249.4,239.3 L 240.9,243.3 L 237.8,219.5 L 230.3,216.8 L 224.7,220.8 L 223.8,216.1 L 227.6,208.5 L 255.7,188.6 L 256.7,179.1 L 262.3,172.2 L 271.9,169.8 L 276.6,160.2 L 292.7,162.3 L 295.4,161.2 L 301.1,152.5 L 306.3,151.3 L 302.7,146.4 L 314.8,133.1 L 309.3,125.9 L 325.2,113.3 L 328.1,95.6 L 369.5,81.8 L 371.8,66.2 L 378.2,67.9 L 386.0,61.2 L 383.2,67.5 L 387.6,77.4 L 393.0,73.6 L 394.1,76.9 L 393.2,65.4 L 403.4,57.4 L 402.2,75.3 L 408.4,68.8 L 425.2,81.4 L 427.1,80.4 Z",
    "headquarters": {
      "name": "Haflong",
      "name_as": "হাফলং",
      "lat": 25.18,
      "lng": 93.02,
      "x": 409.0,
      "y": 348.3
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ HOJAI & KARBI ANGLONG",
      "south": "↓ CACHAR DISTRICT",
      "west": "← MEGHALAYA (WEST JAINTIA)",
      "east": "MANIPUR & NAGALAND →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 206.8,261.6 L 303.4,242.3 L 400.0,250.0 L 496.6,238.4 L 593.2,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-haflong",
        "slug": "haflong",
        "name": "Haflong Hill Station & Haflong Lake",
        "name_as": "হাফলং পাহাৰ আৰু হাফলং হ্ৰদ",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills & Nature Trails",
        "lat": 25.1764,
        "lng": 93.0185,
        "x": 408.4,
        "y": 349.9,
        "imageUrl": "/images/destinations/haflong.jpg",
        "shortDescription": "Assam's Only Hill Station, Misty Barail Peaks & Emerald Blue Lake",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.1764,93.0185",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.1764,93.0185"
      },
      {
        "id": "tour-panimur-falls",
        "slug": "panimur-waterfalls-niagara-of-assam",
        "name": "Panimur Waterfalls (Niagara of Assam)",
        "name_as": "পানীমূৰ জলপ্ৰপাত (অসমৰ নায়াগ্ৰা)",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills & Nature Trails",
        "lat": 25.7167,
        "lng": 92.8167,
        "x": 326.4,
        "y": 106.8,
        "imageUrl": "/images/destinations/panimur-waterfalls-niagara-of-assam.jpg",
        "shortDescription": "Roaring Kopili River Cascades Celebrated as the Niagara of Assam",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.7167,92.8167",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.7167,92.8167"
      }
    ]
  },
  "goalpara": {
    "slug": "goalpara",
    "name": "Goalpara",
    "name_as": "গোৱালপাৰা",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 90.077,
      "maxLon": 91.139,
      "minLat": 25.872,
      "maxLat": 26.228
    },
    "svgPath": "M 441.8,136.0 L 458.0,174.4 L 471.9,190.1 L 517.4,190.7 L 556.2,205.7 L 569.6,203.3 L 577.7,215.8 L 608.4,220.4 L 620.5,211.9 L 626.3,216.7 L 624.1,217.9 L 629.2,219.6 L 651.9,240.6 L 682.2,252.6 L 708.4,252.0 L 724.5,263.7 L 731.5,280.2 L 718.7,308.5 L 696.5,331.6 L 683.7,373.3 L 643.4,373.9 L 641.8,352.3 L 629.0,326.7 L 619.8,332.9 L 608.6,329.3 L 608.4,352.3 L 586.4,325.0 L 584.2,330.6 L 559.3,328.3 L 553.5,335.3 L 553.9,326.5 L 535.5,323.4 L 514.7,356.4 L 500.3,354.5 L 502.8,346.3 L 490.7,353.5 L 497.6,339.9 L 493.6,341.7 L 489.3,333.3 L 490.5,321.9 L 478.6,327.7 L 473.7,321.5 L 415.6,348.5 L 409.3,364.4 L 398.8,350.2 L 410.9,333.3 L 386.4,319.2 L 378.8,335.1 L 356.6,345.0 L 360.2,351.2 L 336.2,365.5 L 332.9,361.5 L 350.8,325.4 L 310.9,280.4 L 282.6,294.1 L 274.8,294.1 L 263.3,280.9 L 234.2,281.1 L 208.9,307.7 L 132.4,323.2 L 126.6,317.0 L 115.8,329.6 L 109.1,318.4 L 96.8,319.9 L 91.8,312.6 L 68.5,318.2 L 70.5,310.6 L 76.8,312.8 L 85.8,300.9 L 116.3,286.6 L 113.6,281.1 L 123.0,268.3 L 105.1,254.6 L 112.5,250.1 L 103.7,229.5 L 107.1,210.3 L 121.7,192.1 L 157.1,182.2 L 166.0,171.7 L 168.5,150.2 L 195.4,143.0 L 231.1,145.1 L 253.0,134.5 L 253.7,144.0 L 292.3,149.6 L 288.7,153.5 L 289.8,163.2 L 306.8,153.9 L 306.4,161.4 L 341.4,137.8 L 379.3,135.0 L 394.7,126.1 L 406.8,130.6 L 409.8,136.0 L 432.4,129.2 L 441.8,136.0 Z",
    "headquarters": {
      "name": "Goalpara",
      "name_as": "গোৱালপাৰা",
      "lat": 26.17,
      "lng": 90.62,
      "x": 408.1,
      "y": 160.1
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & BARPETA",
      "south": "↓ MEGHALAYA (EAST/WEST GARO HILLS)",
      "west": "← DHUBRI DISTRICT",
      "east": "KAMRUP RURAL DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 68.5,153.3 L 234.3,141.0 L 400.0,145.9 L 565.7,138.5 L 731.5,150.9",
        "labelX": 400.0,
        "labelY": 133.9
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-surya-pahar",
        "slug": "sri-surya-pahar-archaeological-site",
        "name": "Sri Surya Pahar Archaeological Complex",
        "name_as": "শ্ৰী সূৰ্য পাহাৰ প্ৰত্নতাত্ত্বিক ক্ষেত্ৰ",
        "category": "heritage-historic",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 26.105,
        "lng": 90.71,
        "x": 468.8,
        "y": 208.9,
        "imageUrl": "/images/destinations/sri-surya-pahar-archaeological-site.jpg",
        "shortDescription": "Sacred Hill of 99,999 Shiva Lingas & Ancient Interfaith Confluence",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.105,90.71",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.105,90.71"
      },
      {
        "id": "tour-paglatek-mandir",
        "slug": "paglatek-shiva-temple",
        "name": "Paglatek Shiva Temple & Brahmaputra Rock Inscriptions",
        "name_as": "পাগলাটেক শিৱ মন্দিৰ আৰু শৈল ভাস্কৰ্য",
        "category": "temples-spiritual",
        "categoryLabel": "Ancient Riverside Temple",
        "lat": 26.185,
        "lng": 90.585,
        "x": 384.5,
        "y": 148.8,
        "imageUrl": "/images/destinations/madan-kamdev.jpg",
        "shortDescription": "Ancient river cliff temple on the south bank of Brahmaputra with centuries-old stone inscriptions and coins.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.185,90.585",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.185,90.585"
      }
    ]
  },
  "golaghat": {
    "slug": "golaghat",
    "name": "Golaghat",
    "name_as": "গোলাঘাট",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 93.251,
      "maxLon": 94.213,
      "minLat": 25.764,
      "maxLat": 26.975
    },
    "svgPath": "M 411.6,86.8 L 420.2,94.1 L 428.1,93.6 L 431.7,84.6 L 448.9,79.9 L 449.1,70.3 L 456.8,65.0 L 457.9,58.6 L 463.2,57.4 L 470.8,58.6 L 472.3,65.4 L 469.0,70.5 L 474.2,76.9 L 481.8,77.5 L 484.9,90.4 L 476.2,98.5 L 474.2,103.5 L 478.6,106.8 L 473.9,109.3 L 473.9,113.1 L 481.6,113.8 L 483.8,121.3 L 496.6,123.3 L 495.9,132.0 L 493.4,133.2 L 497.4,140.7 L 495.7,143.0 L 498.9,143.7 L 499.8,149.3 L 507.7,149.7 L 512.5,156.5 L 506.2,165.9 L 508.5,168.4 L 503.5,172.9 L 507.7,176.1 L 506.4,179.7 L 513.0,178.9 L 512.3,181.8 L 515.3,181.3 L 517.6,186.4 L 514.9,188.2 L 518.1,189.9 L 512.3,210.6 L 514.3,218.0 L 521.4,222.2 L 517.7,231.1 L 519.8,244.7 L 524.7,257.2 L 532.0,257.6 L 532.7,256.4 L 534.1,257.8 L 537.1,258.1 L 526.9,263.4 L 518.0,263.7 L 519.8,267.8 L 514.7,267.1 L 508.2,279.6 L 505.4,279.5 L 505.3,286.2 L 497.0,291.4 L 492.2,309.1 L 482.6,317.8 L 480.6,326.0 L 483.0,330.8 L 479.0,332.0 L 481.6,332.7 L 478.3,337.8 L 481.7,339.3 L 476.6,349.0 L 478.5,354.0 L 470.8,364.4 L 467.8,375.9 L 468.2,387.6 L 472.7,391.6 L 475.8,405.6 L 463.2,412.6 L 462.0,416.4 L 456.5,416.9 L 445.9,430.8 L 433.0,426.3 L 419.3,442.6 L 413.8,428.5 L 419.3,409.5 L 412.9,388.8 L 414.8,383.4 L 422.1,383.9 L 419.2,379.5 L 421.1,376.3 L 415.0,374.3 L 420.7,366.2 L 414.6,363.4 L 419.2,362.7 L 416.8,358.4 L 419.9,359.0 L 419.1,355.9 L 422.4,354.8 L 419.7,352.5 L 422.6,352.5 L 422.3,344.9 L 425.2,345.8 L 422.8,341.8 L 429.5,333.2 L 426.4,330.0 L 430.4,330.0 L 427.4,317.8 L 431.6,316.6 L 429.8,309.6 L 432.5,310.2 L 433.2,302.2 L 436.6,303.0 L 440.7,296.2 L 435.5,294.1 L 440.7,292.6 L 442.6,282.4 L 445.7,283.0 L 441.9,275.9 L 447.0,273.0 L 443.5,270.6 L 447.0,270.3 L 447.1,267.6 L 449.7,268.6 L 445.9,258.5 L 448.2,258.1 L 447.3,255.3 L 449.8,249.2 L 445.7,249.1 L 446.6,242.4 L 441.0,243.4 L 429.1,233.5 L 418.9,247.9 L 413.1,245.1 L 420.6,236.6 L 415.2,234.0 L 418.9,229.8 L 415.5,226.3 L 419.1,225.8 L 405.8,198.9 L 407.3,195.2 L 399.8,192.2 L 406.1,176.1 L 390.4,168.3 L 369.1,172.3 L 364.4,182.6 L 362.6,178.6 L 356.1,181.0 L 355.0,169.7 L 344.9,166.5 L 335.8,173.1 L 331.4,173.2 L 327.1,167.1 L 321.6,169.8 L 319.2,173.8 L 325.8,175.3 L 317.2,181.5 L 314.7,180.5 L 317.6,175.7 L 315.2,179.1 L 300.4,181.5 L 296.9,180.7 L 298.5,177.7 L 274.9,176.1 L 266.1,179.6 L 267.5,177.6 L 264.3,174.1 L 265.8,166.8 L 262.9,158.1 L 268.4,158.2 L 272.3,153.5 L 269.0,147.7 L 271.5,141.1 L 268.1,136.4 L 276.4,133.5 L 283.1,124.1 L 296.6,119.2 L 329.7,117.0 L 340.1,119.2 L 351.5,129.9 L 374.9,134.4 L 381.0,132.4 L 374.4,116.8 L 374.2,106.3 L 380.9,101.9 L 386.7,103.0 L 393.9,96.7 L 405.7,100.9 L 411.6,86.8 Z",
    "headquarters": {
      "name": "Golaghat",
      "name_as": "গোলাঘাট",
      "lat": 26.52,
      "lng": 93.97,
      "x": 473.1,
      "y": 198.4
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & BISWANATH",
      "south": "↓ NAGALAND (WOKHA DISTRICT)",
      "west": "← NAGAON & KARBI ANGLONG",
      "east": "JORHAT DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Northern ecological corridor of Kaziranga National Park.",
        "svgPath": "M 220.7,150.3 L 313.1,140.0 L 405.4,129.7 L 467.0,119.4",
        "labelX": 405.4,
        "labelY": 117.69999999999999
      },
      {
        "name": "Dhansiri River",
        "name_as": "ধনশিৰি নদী",
        "significance": "Major south-bank river meandering past Golaghat town.",
        "svgPath": "M 467.0,256.8 L 476.2,205.2 L 457.7,164.0 L 445.4,133.1",
        "labelX": 457.7,
        "labelY": 152.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-kaziranga",
        "slug": "kaziranga",
        "name": "Kaziranga National Park",
        "name_as": "কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.5775,
        "lng": 93.1711,
        "x": 227.2,
        "y": 178.6,
        "imageUrl": "/images/destinations/kaziranga.jpg",
        "shortDescription": "UNESCO World Heritage Site & Global Stronghold of the Great Indian One-Horned Rhino",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.5775,93.1711",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.5775,93.1711"
      },
      {
        "id": "tour-kakochang-falls",
        "slug": "kakochang-waterfalls",
        "name": "Kakochang Waterfalls & Karbi Hills Viewpoint",
        "name_as": "কাকোচাং জলপ্ৰপাত",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills & Nature Trails",
        "lat": 26.6025,
        "lng": 93.535,
        "x": 339.2,
        "y": 170.0,
        "imageUrl": "/images/destinations/kakochang-waterfalls.jpg",
        "shortDescription": "Magnificent Natural Waterfall Amidst Rubber & Coffee Plantations",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.6025,93.535",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.6025,93.535"
      }
    ]
  },
  "hailakandi": {
    "slug": "hailakandi",
    "name": "Hailakandi",
    "name_as": "হাইলাকান্দি",
    "division": "Barak Valley",
    "bounds": {
      "minLon": 92.405,
      "maxLon": 92.794,
      "minLat": 24.107,
      "maxLat": 24.909
    },
    "svgPath": "M 391.0,60.8 L 390.8,59.4 L 399.0,57.4 L 406.2,67.0 L 422.2,71.1 L 414.2,70.0 L 422.0,90.6 L 439.8,90.9 L 426.6,122.6 L 424.1,158.3 L 431.0,164.0 L 431.1,187.8 L 445.9,194.3 L 431.6,197.1 L 432.4,206.8 L 455.6,222.1 L 464.2,207.2 L 477.9,219.4 L 485.1,218.6 L 474.6,242.6 L 476.0,246.6 L 442.6,330.0 L 429.1,332.8 L 422.4,342.7 L 412.0,340.1 L 406.2,380.7 L 377.0,385.3 L 367.1,421.6 L 360.5,420.5 L 353.8,430.2 L 345.5,428.8 L 343.1,439.6 L 336.5,442.6 L 322.9,433.8 L 321.8,418.4 L 314.9,413.5 L 316.5,381.2 L 321.2,381.0 L 335.9,357.5 L 349.1,322.0 L 357.3,277.5 L 355.7,236.0 L 361.2,215.6 L 355.2,207.7 L 356.2,169.0 L 350.0,159.0 L 363.5,135.0 L 364.9,123.6 L 374.4,116.3 L 374.2,94.5 L 392.1,75.7 L 393.8,66.7 L 391.0,60.8 Z",
    "headquarters": {
      "name": "Hailakandi",
      "name_as": "হাইলাকান্দি",
      "lat": 24.68,
      "lng": 92.56,
      "x": 381.4,
      "y": 160.7
    },
    "scaleKm": 10,
    "neighbors": {
      "north": "↑ CACHAR DISTRICT (BARAK RIVER)",
      "south": "↓ MIZORAM (KOLASIB DISTRICT)",
      "west": "← KARIMGANJ DISTRICT",
      "east": "CACHAR DISTRICT →"
    },
    "rivers": [
      {
        "name": "Barak River",
        "name_as": "বৰাক নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 314.9,261.6 L 357.5,242.3 L 400.0,250.0 L 442.5,238.4 L 485.1,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-siddheswar-hailakandi",
        "slug": "siddheswar-shiva-temple-barak",
        "name": "Siddheswar Temple & Kapila Muni Hermitage",
        "name_as": "সিদ্ধেশ্বৰ শিৱ দেৱালয়",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 24.895,
        "lng": 92.565,
        "x": 383.8,
        "y": 49.2,
        "imageUrl": "/images/destinations/siddheswar-shiva-temple-barak.jpg",
        "shortDescription": "Ancient Sacred Shiva Shrine on the Barak Riverbanks Associated with Sage Kapila",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.895,92.565",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=24.895,92.565"
      },
      {
        "id": "tour-pachbhai-lake",
        "slug": "pachbhai-lake-tea-trails",
        "name": "Pachbhai Lake & Tea Estate Trails",
        "name_as": "পাঁচভাই বিল আৰু চাহ বাগিচা",
        "category": "tea-tourism",
        "categoryLabel": "Tea Gardens & Tea Tourism",
        "lat": 24.625,
        "lng": 92.615,
        "x": 407.4,
        "y": 189.2,
        "imageUrl": "/images/destinations/pachbhai-lake-tea-trails.jpg",
        "shortDescription": "Picturesque Wetland Lake Surrounded by Rolling Green Hillocks of Tea",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.625,92.615",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=24.625,92.615"
      }
    ]
  },
  "hojai": {
    "slug": "hojai",
    "name": "Hojai",
    "name_as": "হোজাই",
    "division": "Central Assam",
    "bounds": {
      "minLon": 92.682,
      "maxLon": 93.269,
      "minLat": 25.699,
      "maxLat": 26.222
    },
    "svgPath": "M 241.2,175.0 L 244.6,169.6 L 239.6,158.6 L 226.2,161.9 L 231.0,150.3 L 224.3,147.5 L 232.4,138.3 L 219.6,138.3 L 226.0,126.9 L 205.8,119.1 L 207.2,105.5 L 219.1,98.5 L 239.8,105.7 L 247.2,93.7 L 243.1,76.0 L 259.1,69.9 L 257.6,59.8 L 374.3,57.4 L 386.2,79.9 L 368.4,98.3 L 370.5,109.9 L 385.3,106.6 L 443.3,132.2 L 446.1,149.0 L 457.5,148.3 L 460.1,155.1 L 495.1,156.4 L 484.4,192.3 L 508.6,193.8 L 530.7,222.2 L 531.0,249.1 L 541.7,256.3 L 548.6,295.5 L 589.4,340.3 L 594.2,388.2 L 579.9,405.2 L 579.7,436.0 L 519.6,442.6 L 523.8,430.1 L 522.2,426.6 L 507.7,418.5 L 510.3,408.7 L 488.2,396.0 L 466.3,403.7 L 463.7,397.3 L 470.4,394.3 L 438.0,367.6 L 405.0,317.8 L 323.2,323.2 L 308.7,295.0 L 313.2,278.4 L 299.0,287.4 L 287.3,279.1 L 275.5,283.2 L 267.4,267.7 L 270.5,253.3 L 279.5,253.1 L 270.5,246.7 L 257.1,259.6 L 247.9,250.0 L 252.9,238.0 L 247.4,231.2 L 253.6,227.3 L 245.5,225.5 L 259.5,221.8 L 243.8,216.6 L 262.1,210.7 L 245.3,207.4 L 249.8,195.8 L 236.2,187.3 L 241.2,175.0 Z",
    "headquarters": {
      "name": "Sankardev Nagar / Hojai",
      "name_as": "হোজাই",
      "lat": 26.0,
      "lng": 92.86,
      "x": 317.5,
      "y": 218.6
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ NAGAON DISTRICT",
      "south": "↓ DIMA HASAO DISTRICT",
      "west": "← WEST KARBI ANGLONG",
      "east": "EAST KARBI ANGLONG →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 205.8,261.6 L 302.9,242.3 L 400.0,250.0 L 497.1,238.4 L 594.2,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-akashiganga",
        "slug": "akashiganga-waterfalls",
        "name": "Akashiganga Waterfalls & Ancient Shrine",
        "name_as": "আকাশীগংগা জলপ্ৰপাত আৰু দেৱালয়",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 26.062,
        "lng": 92.955,
        "x": 385.4,
        "y": 169.3,
        "imageUrl": "/images/destinations/akashiganga-waterfalls.jpg",
        "shortDescription": "Sacred Forest Cascades and Kalika Purana Historical Archaeological Site",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.062,92.955",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.062,92.955"
      },
      {
        "id": "tour-doboka-sanctuary",
        "slug": "doboka-reserve-forest",
        "name": "Doboka Reserve Forest & Sanctuary",
        "name_as": "ডবকা সংৰক্ষিত বনাঞ্চল",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & Sanctuaries",
        "lat": 26.015,
        "lng": 92.88,
        "x": 331.8,
        "y": 206.7,
        "imageUrl": "/images/destinations/doboka-reserve-forest.jpg",
        "shortDescription": "Dense Sal Forest, Wild Elephant Corridors and Diverse Avian Sanctuary",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.015,92.88",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.015,92.88"
      }
    ]
  },
  "jorhat": {
    "slug": "jorhat",
    "name": "Jorhat",
    "name_as": "যোৰহাট",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 93.947,
      "maxLon": 94.628,
      "minLat": 26.324,
      "maxLat": 26.975
    },
    "svgPath": "M 462.5,57.4 L 467.4,68.8 L 474.4,62.3 L 506.3,67.4 L 511.1,86.5 L 506.5,94.8 L 517.1,101.3 L 519.2,111.1 L 513.1,134.1 L 523.4,137.1 L 536.1,153.9 L 530.0,157.1 L 535.1,160.9 L 528.1,171.8 L 549.6,186.6 L 553.3,181.6 L 562.6,184.3 L 568.9,200.3 L 579.9,210.3 L 574.6,208.0 L 574.8,219.4 L 565.3,217.1 L 559.4,228.2 L 555.1,226.2 L 556.8,214.3 L 533.1,218.1 L 531.2,229.0 L 525.8,226.9 L 516.9,239.4 L 498.5,242.0 L 494.4,247.8 L 501.6,260.3 L 493.4,258.3 L 465.7,274.7 L 471.8,296.1 L 464.6,323.4 L 450.5,331.3 L 448.3,341.5 L 434.2,342.4 L 437.3,351.7 L 421.5,356.8 L 416.4,371.9 L 401.2,358.2 L 397.1,307.3 L 374.9,333.3 L 370.9,341.3 L 340.3,373.8 L 333.9,390.1 L 333.5,432.9 L 327.8,442.6 L 314.4,441.9 L 305.3,418.7 L 301.7,395.9 L 308.3,377.0 L 295.0,369.1 L 291.4,355.4 L 302.2,316.8 L 296.2,313.6 L 301.3,310.3 L 296.9,300.8 L 291.4,301.9 L 292.7,296.4 L 280.4,297.8 L 282.9,291.2 L 275.1,285.2 L 284.4,276.9 L 280.0,272.2 L 291.8,254.8 L 282.9,242.2 L 268.3,241.3 L 266.6,231.0 L 260.7,229.7 L 263.7,225.3 L 256.3,211.5 L 261.1,209.2 L 262.2,193.1 L 238.5,189.4 L 234.5,175.3 L 220.1,174.1 L 220.1,167.1 L 228.8,162.3 L 220.7,156.2 L 224.5,146.9 L 240.6,132.0 L 235.7,111.1 L 309.2,94.8 L 345.8,82.2 L 355.3,73.0 L 380.6,84.6 L 409.8,83.9 L 413.9,103.7 L 419.3,102.5 L 448.7,78.5 L 462.5,57.4 Z",
    "headquarters": {
      "name": "Jorhat",
      "name_as": "যোৰহাট",
      "lat": 26.751,
      "lng": 94.204,
      "x": 352.3,
      "y": 185.1
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & MAJULI",
      "south": "↓ NAGALAND (MOKOKCHUNG)",
      "west": "← GOLAGHAT DISTRICT",
      "east": "SIVASAGAR DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 220.1,99.8 L 310.0,80.5 L 400.0,88.2 L 490.0,76.7 L 579.9,95.9",
        "labelX": 400.0,
        "labelY": 76.2
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-tea-country",
        "slug": "tea-country",
        "name": "Jorhat & Dibrugarh Historic Tea Estates",
        "name_as": "যোৰহাট আৰু ডিব্ৰুগড়ৰ ঐতিহ্যমণ্ডিত চাহ বাগিচা",
        "category": "tea-tourism",
        "categoryLabel": "Tea Tourism & Golf",
        "lat": 26.7509,
        "lng": 94.2037,
        "x": 352.1,
        "y": 185.1,
        "imageUrl": "/images/destinations/tea-country.jpg",
        "shortDescription": "World's Tea Capital, Heritage Planter Bungalows & Historic 1876 Golf Greens",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.7509,94.2037",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.7509,94.2037"
      },
      {
        "id": "tour-cinnamara-heritage",
        "slug": "cinnamara-historic-tea-estate",
        "name": "Cinnamara Historic Tea Estate & Maniram Dewan Memorial",
        "name_as": "চিনামৰা চাহ বাগিচা আৰু মণিৰাম দেৱান স্মৃতিসৌধ",
        "category": "tea-tourism",
        "categoryLabel": "Tea Tourism & Golf",
        "lat": 26.72,
        "lng": 94.225,
        "x": 364.3,
        "y": 204.9,
        "imageUrl": "/images/destinations/cinnamara-historic-tea-estate.jpg",
        "shortDescription": "First Indigenous Indian-Owned Tea Garden Founded in 1845 CE",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.72,94.225",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.72,94.225"
      }
    ]
  },
  "kamrup-rural": {
    "slug": "kamrup-rural",
    "name": "Kamrup",
    "name_as": "কামৰূপ গ্ৰাম্য",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 90.905,
      "maxLon": 91.857,
      "minLat": 25.69,
      "maxLat": 26.561
    },
    "svgPath": "M 484.4,57.4 L 487.9,57.8 L 489.3,64.4 L 502.2,65.2 L 500.7,78.1 L 506.0,74.5 L 502.6,81.0 L 505.9,80.5 L 505.2,85.2 L 501.6,86.3 L 506.3,88.1 L 504.6,96.5 L 526.7,96.0 L 540.9,81.4 L 545.3,82.3 L 547.3,69.9 L 560.0,73.9 L 559.2,80.1 L 571.0,80.0 L 569.9,85.6 L 567.1,86.3 L 565.1,89.3 L 569.1,106.1 L 589.1,133.1 L 588.9,151.6 L 583.2,156.2 L 586.2,160.4 L 576.7,156.6 L 571.8,164.2 L 575.4,182.1 L 571.6,193.5 L 556.9,204.4 L 557.6,210.3 L 550.2,209.4 L 541.8,218.7 L 534.5,212.7 L 524.7,213.7 L 529.1,207.0 L 521.5,205.2 L 512.4,216.7 L 516.0,224.9 L 518.4,223.0 L 514.8,231.0 L 480.5,238.3 L 478.7,240.9 L 478.5,260.3 L 488.3,267.0 L 480.4,281.4 L 484.6,281.8 L 484.9,277.5 L 488.1,282.5 L 493.0,281.0 L 493.9,274.0 L 506.4,274.3 L 546.6,293.4 L 546.3,326.4 L 542.5,336.8 L 524.1,355.8 L 515.8,354.8 L 497.9,340.0 L 498.9,336.3 L 506.6,337.1 L 511.3,327.4 L 505.0,316.3 L 507.2,299.5 L 492.8,301.4 L 485.2,294.2 L 472.8,321.2 L 458.7,329.2 L 459.4,338.8 L 452.2,345.1 L 452.3,351.3 L 466.7,342.9 L 453.0,354.1 L 452.6,362.0 L 444.0,361.1 L 440.0,370.1 L 454.7,373.7 L 435.1,378.3 L 427.4,386.6 L 417.7,379.6 L 380.5,386.2 L 354.3,429.2 L 331.9,442.6 L 318.2,430.5 L 312.9,416.3 L 316.4,396.8 L 323.9,384.8 L 320.5,376.2 L 313.8,384.6 L 299.8,381.4 L 288.1,389.8 L 263.2,395.6 L 257.5,391.5 L 267.3,387.1 L 270.2,380.4 L 256.9,382.1 L 241.5,393.9 L 239.7,393.8 L 248.0,367.3 L 247.5,364.6 L 248.8,364.5 L 256.9,338.0 L 271.0,323.3 L 279.2,305.3 L 274.7,294.8 L 264.5,287.3 L 247.8,287.7 L 228.6,280.1 L 214.2,266.7 L 210.9,265.7 L 234.6,253.0 L 240.6,254.9 L 235.7,248.6 L 249.2,253.2 L 271.3,232.9 L 279.7,231.2 L 286.7,236.2 L 327.8,224.1 L 363.0,235.0 L 388.2,230.2 L 404.0,243.6 L 414.2,245.1 L 416.8,226.7 L 412.8,214.0 L 416.5,211.7 L 417.7,199.1 L 413.5,183.3 L 423.8,185.8 L 430.1,181.3 L 431.6,157.1 L 461.7,149.3 L 459.3,140.6 L 466.5,130.2 L 463.3,122.5 L 478.5,104.7 L 472.2,85.9 L 477.5,79.1 L 475.1,59.1 L 484.4,57.4 Z M 457.0,373.2 L 462.3,362.0 L 466.0,365.6 L 464.0,371.5 L 457.0,373.2 Z",
    "headquarters": {
      "name": "Amingaon",
      "name_as": "আমিনগাঁও",
      "lat": 26.195,
      "lng": 91.685,
      "x": 530.3,
      "y": 217.0
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ BAKSA & BARPETA DISTRICTS",
      "south": "↓ MEGHALAYA (RI-BHOI DISTRICT)",
      "west": "← GOALPARA & BARPETA",
      "east": "KAMRUP METROPOLITAN & DARRANG →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "The grand arterial river carving through central Kamrup Rural between Hajo and Sualkuchi.",
        "svgPath": "M 215.1,233.7 L 300.9,224.1 L 386.6,209.8 L 472.4,224.1 L 558.1,205.0",
        "labelX": 386.6,
        "labelY": 197.8
      },
      {
        "name": "Kulsi River",
        "name_as": "কুলসী নদী",
        "significance": "Sacred freshwater dolphin habitat flowing from Chandubi Lake north towards the Brahmaputra.",
        "svgPath": "M 420.9,367.4 L 403.8,314.9 L 378.1,267.1 L 348.0,228.9",
        "labelX": 378.1,
        "labelY": 255.10000000000002
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-hajo",
        "slug": "hajo",
        "name": "Hajo Panchatirtha & Poa Mecca",
        "name_as": "হাজো পঞ্চতীৰ্থ আৰু পোৱা মক্কা",
        "category": "heritage-historic",
        "categoryLabel": "Buddhism & Multi-Faith Confluence",
        "lat": 26.2483,
        "lng": 91.5278,
        "x": 462.9,
        "y": 191.5,
        "imageUrl": "/images/destinations/hajo.jpg",
        "shortDescription": "Sacred Historic Confluence of Hinduism, Buddhism, and Islam",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.2483,91.5278",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.2483,91.5278"
      },
      {
        "id": "tour-sualkuchi",
        "slug": "sualkuchi",
        "name": "Sualkuchi Silk Weavers Village",
        "name_as": "শুৱালকুছি পাট-মুগাৰ বস্ত্ৰনগৰী",
        "category": "handloom-crafts",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 26.17,
        "lng": 91.57,
        "x": 481.0,
        "y": 228.9,
        "imageUrl": "/images/destinations/sualkuchi.jpg",
        "shortDescription": "Manchester of Assam — Generational Handlooms of Certified Golden Muga Silk",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.17,91.57",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.17,91.57"
      },
      {
        "id": "tour-chandubi-lake",
        "slug": "chandubi-lake-eco-lagoon",
        "name": "Chandubi Lake & Garo Foothills Eco-Lagoon",
        "name_as": "চান্দুবি বিল আৰু পৰিৱেশ পৰ্যটন",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills & Nature Trails",
        "lat": 25.8833,
        "lng": 91.4333,
        "x": 422.3,
        "y": 365.8,
        "imageUrl": "/images/destinations/chandubi-lake-eco-lagoon.jpg",
        "shortDescription": "Pristine Tectonic Lake Born from the Great 1897 Assam Earthquake",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.8833,91.4333",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.8833,91.4333"
      },
      {
        "id": "tour-madan-kamdev",
        "slug": "madan-kamdev-archaeological-ruins",
        "name": "Madan Kamdev Archaeological Ruins (Khajuraho of Assam)",
        "name_as": "মদন কামদেৱ দেৱালয় (অসমৰ খাজুৰাহো)",
        "category": "heritage-historic",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 26.3314,
        "lng": 91.6886,
        "x": 531.8,
        "y": 151.8,
        "imageUrl": "/images/destinations/madan-kamdev-archaeological-ruins.jpg",
        "shortDescription": "10th–12th Century Kamarupa Pala Dynasty Sculpted Stone Temples",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.3314,91.6886",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.3314,91.6886"
      },
      {
        "id": "tour-aswaklanta",
        "slug": "aswaklanta-temple",
        "name": "Aswaklanta Historic Temple (North Guwahati)",
        "name_as": "অশ্বক্লান্ত মন্দিৰ (উত্তৰ গুৱাহাটী)",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.1989,
        "lng": 91.7289,
        "x": 549.1,
        "y": 215.1,
        "imageUrl": "/images/destinations/aswaklanta-temple.jpg",
        "shortDescription": "Historic riverside temple overlooking the Brahmaputra, built in 1720 CE by Ahom King Siva Singha.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.1989,91.7289",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.1989,91.7289"
      },
      {
        "id": "tour-doul-govinda",
        "slug": "doul-govinda-temple",
        "name": "Doul Govinda Temple & Holi Pilgrimage",
        "name_as": "দৌল গোবিন্দ মন্দিৰ",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.2081,
        "lng": 91.7197,
        "x": 545.1,
        "y": 210.7,
        "imageUrl": "/images/destinations/doul-govinda-temple.jpg",
        "shortDescription": "Renowned Krishna temple famous for its vibrant 5-day Doul Utsav (Holi) celebration and scenic riverside ghats.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.2081,91.7197",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.2081,91.7197"
      }
    ]
  },
  "karbi-anglong": {
    "slug": "karbi-anglong",
    "name": "Karbi Anglong",
    "name_as": "কাৰ্বি আংলং",
    "division": "Central Assam / Hills",
    "bounds": {
      "minLon": 92.75,
      "maxLon": 93.938,
      "minLat": 25.487,
      "maxLat": 26.656
    },
    "svgPath": "M 385.1,70.9 L 394.3,67.3 L 418.8,68.9 L 417.1,72.1 L 420.7,72.9 L 436.1,70.4 L 438.6,66.9 L 435.6,71.9 L 438.2,72.9 L 447.2,66.5 L 440.3,64.9 L 442.8,60.8 L 448.4,58.0 L 452.9,64.3 L 457.5,64.2 L 466.9,57.4 L 477.5,60.6 L 478.6,72.4 L 485.3,69.9 L 487.2,74.0 L 492.1,63.4 L 514.2,59.3 L 530.6,67.3 L 524.0,84.0 L 531.7,87.1 L 530.3,91.0 L 544.1,118.8 L 540.4,119.3 L 543.9,122.9 L 540.0,127.2 L 545.6,130.0 L 537.8,138.8 L 543.9,141.7 L 554.4,126.8 L 566.8,137.0 L 572.7,136.0 L 571.7,142.9 L 575.9,143.1 L 573.3,149.4 L 574.2,152.3 L 571.9,152.7 L 575.8,163.1 L 573.1,162.1 L 573.0,164.9 L 569.4,165.2 L 573.0,167.7 L 567.8,170.7 L 571.7,178.1 L 568.4,177.4 L 566.5,188.0 L 561.1,189.6 L 566.5,191.7 L 562.2,198.7 L 558.7,198.0 L 558.0,206.3 L 555.1,205.6 L 557.0,212.8 L 552.7,214.1 L 555.8,226.7 L 551.6,226.7 L 554.8,230.0 L 547.9,238.9 L 550.3,243.2 L 547.4,242.2 L 547.7,250.1 L 544.7,250.1 L 547.5,252.4 L 544.1,253.6 L 544.9,256.8 L 541.6,256.2 L 544.2,260.7 L 539.4,261.3 L 545.7,264.3 L 539.8,272.7 L 546.1,274.7 L 544.2,278.1 L 547.2,282.6 L 539.6,282.1 L 538.3,286.6 L 534.7,286.5 L 535.6,292.8 L 528.3,295.9 L 530.3,299.3 L 507.9,309.5 L 514.4,328.2 L 518.4,330.8 L 510.1,330.3 L 503.7,338.8 L 496.6,338.6 L 489.8,345.7 L 487.4,355.1 L 474.7,362.8 L 471.6,361.4 L 469.5,368.7 L 463.4,371.2 L 463.0,382.6 L 458.6,385.4 L 457.1,383.0 L 454.0,391.1 L 448.8,398.4 L 436.2,403.2 L 437.4,406.3 L 432.1,403.7 L 426.3,406.4 L 404.7,434.0 L 399.0,432.7 L 392.9,441.6 L 386.7,442.6 L 383.5,437.6 L 376.5,442.3 L 372.7,436.0 L 356.8,437.9 L 346.5,420.4 L 347.4,410.9 L 351.3,406.5 L 347.0,403.7 L 344.6,395.8 L 335.6,396.1 L 332.1,387.0 L 335.6,375.7 L 362.5,372.8 L 362.6,359.0 L 369.0,351.3 L 368.7,344.8 L 366.9,329.9 L 348.6,309.9 L 345.5,292.4 L 340.7,289.1 L 340.6,277.1 L 330.7,264.4 L 319.9,263.7 L 324.7,247.7 L 309.1,247.1 L 307.9,244.0 L 302.8,244.3 L 301.5,236.8 L 275.6,225.4 L 269.0,226.8 L 268.0,221.6 L 276.0,213.4 L 270.7,203.3 L 226.5,203.6 L 224.1,197.4 L 231.0,199.3 L 234.8,195.3 L 231.0,192.6 L 230.5,182.0 L 239.4,174.5 L 240.2,166.9 L 251.6,174.5 L 255.6,172.8 L 257.6,165.5 L 271.8,157.9 L 270.7,149.8 L 261.0,149.8 L 266.3,140.5 L 259.1,138.3 L 254.9,142.3 L 257.5,138.0 L 252.3,140.3 L 258.7,132.6 L 264.6,136.0 L 270.3,131.7 L 274.0,134.0 L 283.2,125.8 L 296.2,125.8 L 304.0,119.8 L 308.0,123.0 L 305.9,127.3 L 309.6,127.4 L 319.4,121.2 L 312.0,120.5 L 321.8,116.8 L 321.8,119.1 L 327.6,118.2 L 323.3,115.7 L 331.0,110.3 L 325.3,107.8 L 333.6,103.1 L 330.7,104.6 L 332.5,101.2 L 330.1,99.0 L 329.9,103.6 L 321.5,107.1 L 324.7,109.2 L 322.8,111.7 L 310.6,104.8 L 318.9,97.5 L 292.8,104.3 L 294.2,94.9 L 305.4,88.3 L 303.8,85.0 L 309.2,81.6 L 322.4,82.3 L 326.8,86.5 L 335.3,77.8 L 338.3,81.0 L 351.2,73.6 L 357.1,77.6 L 341.5,89.0 L 353.8,85.6 L 357.1,92.2 L 355.4,97.0 L 359.5,94.9 L 358.1,86.9 L 364.6,84.8 L 374.3,90.0 L 374.3,94.4 L 380.9,90.5 L 383.0,94.8 L 382.0,90.2 L 374.4,87.7 L 378.1,85.5 L 377.5,81.5 L 372.1,86.2 L 374.1,84.0 L 369.1,81.5 L 372.1,79.3 L 365.3,78.7 L 370.3,72.7 L 380.0,73.0 L 385.1,70.9 Z",
    "headquarters": {
      "name": "Diphu",
      "name_as": "ডিফু",
      "lat": 25.845,
      "lng": 93.43,
      "x": 427.5,
      "y": 330.6
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ GOLAGHAT & NAGAON",
      "south": "↓ NAGALAND & DIMA HASAO",
      "west": "← HOJAI & WEST KARBI ANGLONG",
      "east": "NAGALAND (DIMAPUR) →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 224.1,261.6 L 312.0,242.3 L 400.0,250.0 L 488.0,238.4 L 575.9,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-kangthilangso",
        "slug": "kangthilangso-waterfalls",
        "name": "Kangthilangso Waterfalls & Eco Trail",
        "name_as": "কাংথিলেংছ' জলপ্ৰপাত",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 26.155,
        "lng": 93.185,
        "x": 349.2,
        "y": 220.3,
        "imageUrl": "/images/destinations/kangthilangso-waterfalls.jpg",
        "shortDescription": "Spectacular Multi-Tiered Jungle Waterfalls Hidden in the Karbi Hills",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.155,93.185",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.155,93.185"
      },
      {
        "id": "tour-garampani-hotsprings",
        "slug": "garampani-wildlife-hotsprings",
        "name": "Garampani Sanctuary & Natural Hot Springs",
        "name_as": "গৰমপানী অভয়াৰণ্য আৰু উষ্ণ প্ৰস্ৰৱণ",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & Sanctuaries",
        "lat": 26.425,
        "lng": 93.715,
        "x": 518.6,
        "y": 124.2,
        "imageUrl": "/images/destinations/garampani-wildlife-hotsprings.jpg",
        "shortDescription": "Centuries-Old Geothermal Sulphur Springs and Hoolock Gibbon Sanctuary",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.425,93.715",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.425,93.715"
      }
    ]
  },
  "karimganj": {
    "slug": "karimganj",
    "name": "Karimganj",
    "name_as": "কৰিমগঞ্জ",
    "division": "Barak Valley",
    "bounds": {
      "minLon": 92.177,
      "maxLon": 92.602,
      "minLat": 24.207,
      "maxLat": 24.943
    },
    "svgPath": "M 464.7,77.9 L 470.3,88.3 L 485.9,79.0 L 498.0,81.2 L 501.2,88.2 L 499.4,98.0 L 479.9,118.5 L 480.1,142.2 L 469.8,150.2 L 468.3,162.6 L 453.6,188.9 L 460.2,199.7 L 459.2,241.8 L 465.7,250.5 L 459.7,272.8 L 461.4,318.0 L 452.5,366.5 L 438.2,405.1 L 422.1,430.8 L 336.9,433.3 L 311.6,442.6 L 298.8,437.6 L 307.6,434.8 L 312.4,413.5 L 333.4,372.4 L 326.8,325.7 L 318.1,319.7 L 318.2,291.7 L 308.7,289.9 L 318.7,265.9 L 330.5,191.7 L 351.9,158.7 L 343.2,153.6 L 348.3,131.4 L 340.4,123.1 L 340.3,107.3 L 327.8,106.0 L 330.0,101.2 L 323.9,99.0 L 320.5,88.0 L 326.3,84.6 L 326.8,74.8 L 319.9,66.4 L 353.4,57.4 L 374.5,78.7 L 379.1,71.4 L 386.6,82.0 L 392.6,81.2 L 398.2,93.5 L 405.4,95.3 L 408.8,89.4 L 425.2,91.1 L 428.5,82.1 L 444.5,84.6 L 464.7,77.9 Z",
    "headquarters": {
      "name": "Karimganj",
      "name_as": "কৰিমগঞ্জ",
      "lat": 24.865,
      "lng": 92.359,
      "x": 384.4,
      "y": 86.1
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BANGLADESH (SYLHET DIVISION)",
      "south": "↓ MIZORAM & TRIPURA",
      "west": "← TRIPURA (DHARMANAGAR)",
      "east": "HAILAKANDI & CACHAR →"
    },
    "rivers": [
      {
        "name": "Kushiyara River",
        "name_as": "কুশিয়াৰা নদী",
        "significance": "Historic branch of Barak forming the international river boundary.",
        "svgPath": "M 482.6,71.9 L 405.5,83.2 L 328.4,94.5",
        "labelX": 405.5,
        "labelY": 71.2
      },
      {
        "name": "Longai River",
        "name_as": "লঙ্গাই নদী",
        "significance": "Nourishes the biodiversity of Son Beel wetland.",
        "svgPath": "M 431.2,264.2 L 415.8,190.7 L 395.2,122.8",
        "labelX": 415.8,
        "labelY": 178.7
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-son-beel",
        "slug": "son-beel-wetland-lake",
        "name": "Son Beel Wetland & Bird Sanctuary",
        "name_as": "সোণ বিল জলাশয় আৰু পক্ষী অভয়াৰণ্য",
        "category": "river-experiences",
        "categoryLabel": "River Islands & Riverfronts",
        "lat": 24.685,
        "lng": 92.445,
        "x": 428.6,
        "y": 187.8,
        "imageUrl": "/images/destinations/son-beel.jpg",
        "shortDescription": "Asia's Second Largest Seasonal Wetland Lake and Migratory Waterfowl Paradise",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.685,92.445",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=24.685,92.445"
      },
      {
        "id": "tour-badarpur-fort",
        "slug": "badarpur-historic-fort",
        "name": "Badarpur Fort (Barak Riverfront)",
        "name_as": "বৰদৰপুৰ ঐতিহাসিক দুৰ্গ",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 24.898,
        "lng": 92.545,
        "x": 480.1,
        "y": 67.4,
        "imageUrl": "/images/destinations/badarpur-fort.jpg",
        "shortDescription": "18th-Century Strategic Stone Fort on the Banks of the Barak River",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=24.898,92.545",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=24.898,92.545"
      }
    ]
  },
  "kokrajhar": {
    "slug": "kokrajhar",
    "name": "Kokrajhar",
    "name_as": "কোকৰাঝাৰ",
    "division": "Lower Assam (BTR)",
    "bounds": {
      "minLon": 89.803,
      "maxLon": 90.462,
      "minLat": 26.087,
      "maxLat": 26.893
    },
    "svgPath": "M 494.0,57.4 L 498.3,86.8 L 513.0,132.3 L 499.0,171.6 L 503.8,176.9 L 502.3,187.9 L 508.0,202.3 L 502.7,208.5 L 510.3,221.7 L 518.4,223.0 L 515.3,229.8 L 525.1,238.6 L 520.4,243.0 L 527.1,243.0 L 527.8,249.9 L 520.5,247.8 L 517.2,252.3 L 525.9,257.4 L 523.2,275.0 L 524.7,279.0 L 530.7,280.4 L 525.1,292.8 L 531.4,292.3 L 531.1,301.1 L 535.4,298.3 L 536.5,303.6 L 534.5,305.5 L 538.7,306.1 L 537.9,308.1 L 539.1,308.4 L 535.7,313.1 L 540.8,314.5 L 522.4,317.2 L 521.6,318.5 L 525.8,337.2 L 513.9,343.1 L 514.9,364.1 L 502.9,369.5 L 502.1,363.4 L 506.4,361.7 L 501.3,354.5 L 497.7,363.0 L 486.9,358.9 L 478.9,369.8 L 480.3,375.9 L 471.4,380.2 L 471.9,372.6 L 455.0,366.3 L 458.2,361.9 L 464.5,364.8 L 468.6,351.9 L 461.0,341.2 L 462.2,332.1 L 438.5,333.1 L 443.9,322.4 L 437.9,321.3 L 447.0,314.1 L 443.6,304.6 L 434.2,309.2 L 434.4,315.3 L 425.5,324.4 L 407.4,320.7 L 392.6,327.8 L 393.2,339.2 L 388.5,341.4 L 396.2,346.0 L 396.9,356.6 L 403.8,351.4 L 403.7,360.2 L 393.1,369.2 L 386.5,364.6 L 383.7,367.4 L 386.8,373.1 L 394.3,373.5 L 401.7,391.5 L 406.8,389.2 L 409.1,394.9 L 368.2,413.7 L 350.2,437.3 L 330.4,432.2 L 323.4,437.2 L 310.2,434.2 L 308.9,442.5 L 299.9,442.6 L 296.5,434.4 L 284.5,432.8 L 277.9,425.4 L 281.1,405.1 L 274.1,405.7 L 280.1,398.5 L 274.1,389.2 L 278.5,381.9 L 273.5,379.7 L 280.5,375.1 L 276.8,369.7 L 285.4,348.7 L 283.1,344.3 L 295.1,334.3 L 293.9,328.8 L 278.2,322.3 L 281.3,315.5 L 267.0,310.4 L 266.3,305.0 L 272.4,304.4 L 267.6,293.8 L 263.8,300.7 L 259.2,299.0 L 262.3,288.8 L 272.4,289.5 L 268.4,284.5 L 277.2,266.1 L 269.3,249.4 L 275.2,216.9 L 272.9,205.4 L 280.5,201.3 L 276.5,197.2 L 278.4,185.8 L 269.3,181.1 L 277.0,169.5 L 275.6,151.0 L 270.2,142.8 L 276.4,139.0 L 273.5,123.4 L 323.4,129.3 L 361.5,125.6 L 397.9,115.4 L 428.7,103.4 L 425.5,86.1 L 431.6,71.5 L 445.3,59.4 L 477.2,64.8 L 494.0,57.4 Z",
    "headquarters": {
      "name": "Kokrajhar",
      "name_as": "কোকৰাঝাৰ",
      "lat": 26.4,
      "lng": 90.27,
      "x": 463.5,
      "y": 296.3
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BHUTAN KINGDOM",
      "south": "↓ DHUBRI DISTRICT",
      "west": "← WEST BENGAL (ALIPURDUAR)",
      "east": "CHIRANG DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 259.2,261.6 L 329.6,242.3 L 400.0,250.0 L 470.4,238.4 L 540.8,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-guide-bodoland-circuit",
        "slug": "bodoland-wildlife-culture-circuit",
        "name": "Bodoland Himalayan Foothills & Wildlife Trail Guide",
        "name_as": "বড়োলেণ্ড হিমালয় পাদদেশ আৰু বন্যপ্ৰাণী পৰ্যটন নিৰ্দেশিকা",
        "category": "district-travel-guides",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.4,
        "lng": 90.27,
        "x": 463.5,
        "y": 296.3,
        "imageUrl": "/images/destinations/bodoland-wildlife-culture-circuit.jpg",
        "shortDescription": "Golden Langurs, Virgin Himalayan Reserves & Rich Bodo Handloom Culture",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.4,90.27",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.4,90.27"
      },
      {
        "id": "tour-raimona-np",
        "slug": "raimona-national-park",
        "name": "Raimona National Park (Golden Langur Habitat)",
        "name_as": "ৰাইমনা ৰাষ্ট্ৰীয় উদ্যান (সোণালী বান্দৰ)",
        "category": "wildlife-national-parks",
        "categoryLabel": "Assam 6th National Park",
        "lat": 26.65,
        "lng": 90.05,
        "x": 361.8,
        "y": 167.2,
        "imageUrl": "/images/destinations/bodoland-wildlife-culture-circuit.jpg",
        "shortDescription": "Assams 6th national park in the Himalayan foothills, renowned for endemic Golden Langurs and butterfly biodiversity.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.650,90.050",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.650,90.050"
      }
    ]
  },
  "lakhimpur": {
    "slug": "lakhimpur",
    "name": "Lakhimpur",
    "name_as": "লখিমপুৰ",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 93.66,
      "maxLon": 94.666,
      "minLat": 26.796,
      "maxLat": 27.548
    },
    "svgPath": "M 450.4,57.4 L 452.2,59.8 L 456.3,87.0 L 470.7,103.9 L 469.9,125.5 L 462.5,133.1 L 449.9,124.0 L 441.3,128.2 L 466.8,151.2 L 472.0,168.6 L 483.8,163.8 L 486.7,158.8 L 511.6,151.2 L 519.4,162.1 L 529.6,158.1 L 537.7,174.1 L 546.2,161.3 L 564.7,162.6 L 572.1,151.9 L 583.7,152.7 L 611.1,136.1 L 611.5,146.8 L 624.9,144.5 L 629.1,157.7 L 618.0,163.2 L 621.6,175.5 L 608.2,197.2 L 602.3,239.0 L 600.3,242.9 L 578.8,255.4 L 582.0,263.3 L 570.9,266.3 L 569.1,277.7 L 555.5,268.2 L 549.8,282.1 L 533.1,279.1 L 525.6,293.5 L 501.6,290.3 L 486.7,299.6 L 478.4,296.4 L 473.2,305.7 L 456.8,292.5 L 445.0,296.1 L 434.9,305.4 L 429.8,327.3 L 411.9,325.4 L 412.7,342.5 L 385.5,351.4 L 385.7,362.1 L 359.1,367.1 L 349.1,354.5 L 331.6,369.4 L 330.9,382.6 L 318.0,377.0 L 306.7,387.7 L 289.1,383.5 L 280.6,385.5 L 278.8,395.6 L 266.5,404.3 L 266.2,419.6 L 238.7,427.2 L 233.0,441.7 L 220.3,442.6 L 206.5,430.7 L 216.0,422.8 L 211.8,408.1 L 191.5,401.1 L 196.2,392.6 L 193.8,368.1 L 170.9,348.1 L 183.6,333.3 L 205.2,323.2 L 206.9,310.6 L 210.6,317.8 L 211.9,308.7 L 213.2,316.5 L 221.4,313.0 L 218.1,304.9 L 222.9,312.8 L 226.5,307.7 L 235.6,308.0 L 239.9,297.6 L 233.7,280.5 L 220.1,269.5 L 223.9,269.1 L 224.2,262.7 L 315.4,163.3 L 349.1,144.9 L 363.8,119.9 L 398.1,89.6 L 396.6,82.3 L 427.7,65.8 L 450.4,57.4 Z",
    "headquarters": {
      "name": "North Lakhimpur",
      "name_as": "উত্তৰ লক্ষীমপুৰ",
      "lat": 27.234,
      "lng": 94.103,
      "x": 370.3,
      "y": 215.6
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ ARUNACHAL PRADESH (PAPUM PARE)",
      "south": "↓ BRAHMAPUTRA RIVER & MAJULI",
      "west": "← BISWANATH DISTRICT",
      "east": "DHEMAJI DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 170.9,261.6 L 285.4,242.3 L 400.0,250.0 L 514.6,238.4 L 629.1,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-leteku-pukhuri",
        "slug": "leteku-pukhuri-madhavdev",
        "name": "Leteku Pukhuri (Sri Sri Madhavdev Janmasthan)",
        "name_as": "লেতেকু পুখুৰী (শ্ৰীশ্ৰী মাধৱদেৱ জন্মস্থান)",
        "category": "heritage-historic",
        "categoryLabel": "Sacred Vaishnavite Shrine",
        "lat": 26.985,
        "lng": 93.85,
        "x": 245.9,
        "y": 353.3,
        "imageUrl": "/images/destinations/majuli-satras.jpg",
        "shortDescription": "Sacred birthplace of Mahapurush Sri Sri Madhavdev near Narayanpur, revered center of Neo-Vaishnavism.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.985,93.850",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.985,93.850"
      },
      {
        "id": "tour-subansiri-sandbar",
        "slug": "subansiri-sandbar-camp",
        "name": "Subansiri River Island & Ecotourism Viewpoint",
        "name_as": "সোৱণশিৰী নদী দ্বীপ আৰু প্ৰকৃতি শিবিৰ",
        "category": "wildlife-national-parks",
        "categoryLabel": "River Ecology & Landscape",
        "lat": 27.24,
        "lng": 94.11,
        "x": 373.8,
        "y": 212.3,
        "imageUrl": "/images/destinations/brahmaputra-cruises.jpg",
        "shortDescription": "Golden sandbars and clear mountain waters of the mighty Subansiri river, ideal for winter birdwatching.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.240,94.110",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.240,94.110"
      }
    ]
  },
  "majuli": {
    "slug": "majuli",
    "name": "Majuli",
    "name_as": "মাজুলী",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 93.931,
      "maxLon": 94.618,
      "minLat": 26.854,
      "maxLat": 27.194
    },
    "svgPath": "M 701.3,66.1 L 731.5,107.6 L 680.9,188.3 L 636.6,231.4 L 609.2,242.0 L 593.3,283.4 L 525.7,330.7 L 527.5,335.5 L 502.2,374.1 L 448.5,418.2 L 438.8,420.4 L 431.2,384.1 L 377.8,385.4 L 331.8,364.1 L 314.4,380.9 L 247.6,404.0 L 113.2,433.9 L 111.8,428.1 L 85.8,426.2 L 68.5,404.3 L 79.6,387.0 L 75.1,366.7 L 86.2,368.6 L 110.1,345.8 L 137.4,357.7 L 138.8,329.7 L 175.9,298.2 L 197.0,324.9 L 200.1,324.6 L 253.5,314.3 L 253.1,291.8 L 310.6,272.8 L 308.9,236.8 L 347.0,240.7 L 357.7,194.4 L 379.2,174.8 L 404.2,167.0 L 438.8,195.0 L 449.9,175.4 L 467.5,182.2 L 499.1,162.5 L 550.0,169.3 L 565.9,138.8 L 601.2,145.2 L 613.4,115.6 L 642.1,135.9 L 645.9,111.7 L 669.5,105.3 L 662.6,88.6 L 701.3,66.1 Z",
    "headquarters": {
      "name": "Garmur",
      "name_as": "গড়মূৰ",
      "lat": 26.96,
      "lng": 94.19,
      "x": 311.6,
      "y": 324.9
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ KHERKUTIA XUTI & LAKHIMPUR",
      "south": "↓ BRAHMAPUTRA RIVER & JORHAT",
      "west": "← BRAHMAPUTRA & GOLAGHAT",
      "east": "BRAHMAPUTRA & DIBRUGARH →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River (South Channel)",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Main southern channel defining the world heritage river island of Majuli.",
        "svgPath": "M 165.7,418.5 L 301.2,348.3 L 447.1,278.1 L 613.9,207.9",
        "labelX": 447.1,
        "labelY": 266.1
      },
      {
        "name": "Kherkutia Xuti (North Channel)",
        "name_as": "খেৰকটীয়া সুঁতি",
        "significance": "Northern river channel separating Majuli from Lakhimpur mainland.",
        "svgPath": "M 217.8,207.9 L 342.9,161.1 L 488.8,126.0 L 634.7,102.6",
        "labelX": 488.8,
        "labelY": 114.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-majuli",
        "slug": "majuli",
        "name": "Majuli River Island & Sattras",
        "name_as": "মাজুলী নদীদ্বীপ আৰু সত্ৰীয়া সংস্কৃতি",
        "category": "river-experiences",
        "categoryLabel": "Satras & River Islands",
        "lat": 26.9538,
        "lng": 94.2144,
        "x": 337.1,
        "y": 332.2,
        "imageUrl": "/images/destinations/majuli.jpg",
        "shortDescription": "World's Largest Inhabited River Island & Cradle of Neo-Vaishnavite Culture",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.9538,94.2144",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.9538,94.2144"
      },
      {
        "id": "tour-majuli-raas",
        "slug": "majuli-raas-mahotsav-sattras",
        "name": "Majuli Raas Mahotsav Living Theatrical Festival",
        "name_as": "মাজুলীৰ ৰাস মহোৎসৱ আৰু ভাওনা সংস্কৃতি",
        "category": "festivals-cultural",
        "categoryLabel": "Satras & River Islands",
        "lat": 26.96,
        "lng": 94.22,
        "x": 342.9,
        "y": 324.9,
        "imageUrl": "/images/destinations/majuli-raas-mahotsav-sattras.jpg",
        "shortDescription": "500-Year-Old Living Theatrical Celebration of Lord Krishna on the Island",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.96,94.22",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.96,94.22"
      },
      {
        "id": "tour-mishing-kitchen",
        "slug": "mishing-chang-ghar-kitchen-apong",
        "name": "Mishing Chang-Ghar Traditional Kitchen & Cultural Trail",
        "name_as": "মিচিং চাংঘৰৰ ৰন্ধনশালা আৰু আপং সংস্কৃতি",
        "category": "culinary-experiences",
        "categoryLabel": "Rural Charm & Living Culture",
        "lat": 26.98,
        "lng": 94.28,
        "x": 405.4,
        "y": 301.5,
        "imageUrl": "/images/destinations/mishing-chang-ghar-kitchen-apong.jpg",
        "shortDescription": "Bamboo-Tube Smoked Fish, Namsing, Wild Herbs & Traditional Rice Brews",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.98,94.28",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.98,94.28"
      }
    ]
  },
  "morigaon": {
    "slug": "morigaon",
    "name": "Morigaon",
    "name_as": "মৰিগাঁও",
    "division": "Central Assam",
    "bounds": {
      "minLon": 91.948,
      "maxLon": 92.592,
      "minLat": 26.048,
      "maxLat": 26.532
    },
    "svgPath": "M 454.2,67.8 L 459.3,63.3 L 468.8,65.2 L 476.0,61.4 L 514.6,57.4 L 515.1,88.1 L 531.5,111.2 L 532.2,124.6 L 518.7,144.0 L 526.1,144.7 L 531.2,181.2 L 553.7,177.7 L 566.0,187.1 L 579.0,171.1 L 581.8,179.8 L 616.4,171.1 L 628.4,179.6 L 629.4,209.1 L 617.4,234.3 L 580.0,264.7 L 514.8,267.1 L 505.9,289.5 L 519.4,299.9 L 523.8,335.3 L 513.0,368.3 L 499.0,381.0 L 506.4,391.2 L 471.4,432.4 L 468.8,420.4 L 446.0,433.2 L 440.9,424.9 L 418.2,428.4 L 402.6,442.6 L 334.0,440.2 L 325.1,434.1 L 326.9,432.7 L 317.9,394.5 L 320.7,358.4 L 311.3,352.5 L 307.4,360.5 L 291.8,344.0 L 274.2,351.3 L 253.7,346.8 L 264.2,337.2 L 238.4,330.6 L 234.8,309.8 L 213.6,299.4 L 202.6,303.4 L 200.0,290.7 L 179.0,294.5 L 170.6,286.0 L 176.7,263.6 L 185.9,267.6 L 203.8,256.0 L 210.8,266.4 L 223.0,264.7 L 256.8,208.1 L 268.8,206.2 L 313.0,145.2 L 332.0,134.8 L 360.4,142.3 L 380.3,116.1 L 408.4,109.1 L 454.2,67.8 Z",
    "headquarters": {
      "name": "Morigaon",
      "name_as": "মৰিগাঁও",
      "lat": 26.25,
      "lng": 92.34,
      "x": 453.7,
      "y": 284.5
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & DARRANG",
      "south": "↓ WEST KARBI ANGLONG & MEGHALAYA",
      "west": "← KAMRUP METROPOLITAN (GUWAHATI)",
      "east": "NAGAON DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 170.6,99.8 L 285.3,80.5 L 400.0,88.2 L 514.7,76.7 L 629.4,95.9",
        "labelX": 400.0,
        "labelY": 76.2
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-pobitora",
        "slug": "pobitora",
        "name": "Pobitora Wildlife Sanctuary",
        "name_as": "পৱিতৰা অভয়াৰণ্য",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 26.23,
        "lng": 92.05,
        "x": 230.6,
        "y": 301.6,
        "imageUrl": "/images/destinations/pobitora.jpg",
        "shortDescription": "Highest Density of One-Horned Rhinos in the World (Guaranteed Sightings)",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.23,92.05",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.23,92.05"
      },
      {
        "id": "tour-mayong-museum",
        "slug": "mayong-heritage-museum",
        "name": "Mayong Black Magic Museum & Ancient Tantra Relics",
        "name_as": "মায়ং ক’লা যাদু সংগ্ৰহালয় আৰু তন্ত্ৰ ঐতিহ্য",
        "category": "heritage-historic",
        "categoryLabel": "Folklore & Mystery Heritage",
        "lat": 26.255,
        "lng": 92.045,
        "x": 226.7,
        "y": 280.2,
        "imageUrl": "/images/destinations/ambari-archaeology.jpg",
        "shortDescription": "World-famous cradle of Indian occultism, ancient Ayurveda manuscript heritage, and archaeological relics.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.255,92.045",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.255,92.045"
      }
    ]
  },
  "nagaon": {
    "slug": "nagaon",
    "name": "Nagaon",
    "name_as": "নগাঁও",
    "division": "Central Assam",
    "bounds": {
      "minLon": 92.359,
      "maxLon": 93.355,
      "minLat": 25.935,
      "maxLat": 26.728
    },
    "svgPath": "M 194.3,153.8 L 194.3,152.6 L 205.7,152.3 L 217.1,163.5 L 243.1,157.3 L 268.1,161.6 L 309.0,149.8 L 321.0,156.3 L 336.5,142.5 L 339.9,152.1 L 349.1,155.7 L 359.9,132.2 L 370.9,131.5 L 393.2,117.2 L 428.4,111.8 L 444.5,98.3 L 464.1,101.8 L 474.0,110.3 L 500.9,110.2 L 512.9,121.1 L 535.7,113.3 L 535.2,111.9 L 570.9,92.7 L 581.0,65.0 L 611.2,57.4 L 615.5,63.6 L 611.6,73.6 L 616.8,82.5 L 610.7,89.7 L 602.4,89.4 L 606.8,102.8 L 604.4,113.9 L 609.4,119.3 L 607.3,122.3 L 599.8,125.3 L 585.4,124.9 L 578.0,133.8 L 588.0,134.7 L 583.7,137.8 L 591.0,141.6 L 588.0,144.8 L 596.0,137.8 L 596.9,143.8 L 591.5,147.1 L 602.7,150.7 L 604.1,157.5 L 601.0,151.1 L 591.3,156.9 L 591.3,150.4 L 577.1,142.7 L 567.6,145.9 L 569.6,157.6 L 563.5,160.8 L 566.0,153.7 L 561.2,143.9 L 543.0,148.9 L 566.0,132.1 L 557.4,126.3 L 538.4,137.1 L 534.0,132.4 L 521.5,145.2 L 515.1,139.0 L 495.5,138.0 L 487.7,143.0 L 490.1,147.9 L 473.5,157.6 L 471.5,171.4 L 509.9,161.5 L 497.7,172.3 L 515.5,182.4 L 518.4,178.8 L 513.7,175.6 L 526.0,170.4 L 526.3,163.7 L 529.9,167.0 L 527.3,171.9 L 531.5,169.7 L 519.3,176.6 L 527.7,180.4 L 516.3,188.3 L 522.7,192.0 L 514.1,193.3 L 514.1,189.9 L 499.8,195.4 L 510.5,196.4 L 496.2,205.6 L 490.7,205.5 L 493.8,199.1 L 487.9,194.4 L 476.5,203.1 L 457.4,203.1 L 443.8,215.3 L 438.4,211.9 L 430.1,218.3 L 421.3,213.2 L 412.0,224.5 L 419.6,221.2 L 415.7,227.5 L 422.0,221.6 L 432.6,224.9 L 424.8,238.6 L 439.0,238.6 L 440.5,250.4 L 419.8,261.7 L 416.8,272.5 L 410.9,274.9 L 394.1,263.7 L 392.9,274.9 L 379.9,286.0 L 380.5,301.6 L 386.2,305.6 L 380.5,311.6 L 370.4,308.7 L 374.3,317.9 L 362.3,319.1 L 363.2,325.7 L 352.7,329.7 L 355.4,341.4 L 350.5,349.3 L 337.0,344.6 L 329.1,349.2 L 328.2,358.1 L 341.5,363.3 L 337.3,370.8 L 345.7,370.8 L 340.4,376.9 L 344.8,378.7 L 341.6,386.4 L 350.4,384.2 L 353.7,391.4 L 351.5,395.0 L 346.6,391.6 L 333.1,395.6 L 332.6,414.3 L 310.9,408.9 L 304.9,413.5 L 305.6,423.7 L 277.6,435.2 L 274.1,442.6 L 256.8,441.6 L 254.0,438.7 L 263.5,418.1 L 276.5,412.5 L 269.8,406.3 L 277.4,381.5 L 267.4,374.0 L 265.6,362.6 L 254.8,365.8 L 249.5,373.1 L 241.6,370.1 L 246.0,344.6 L 242.7,342.4 L 236.5,349.6 L 226.0,345.4 L 222.4,356.1 L 210.7,363.2 L 204.8,373.7 L 191.7,363.2 L 183.2,364.2 L 189.3,357.8 L 184.8,351.6 L 193.4,343.8 L 199.9,323.7 L 197.3,302.0 L 189.0,295.7 L 194.5,282.0 L 234.3,280.6 L 257.1,262.0 L 264.5,246.5 L 263.8,228.5 L 256.5,223.3 L 235.4,228.7 L 233.7,223.3 L 225.7,233.1 L 218.2,227.4 L 204.5,229.5 L 201.3,207.2 L 196.8,206.8 L 205.1,194.9 L 204.6,186.7 L 194.6,172.6 L 194.3,153.8 Z",
    "headquarters": {
      "name": "Nagaon",
      "name_as": "নগাঁও",
      "lat": 26.345,
      "lng": 92.684,
      "x": 318.9,
      "y": 242.8
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & SONITPUR",
      "south": "↓ HOJAI & WEST KARBI ANGLONG",
      "west": "← MORIGAON DISTRICT",
      "east": "GOLAGHAT & KAZIRANGA →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 183.2,99.8 L 291.6,80.5 L 400.0,88.2 L 508.4,76.7 L 616.8,95.9",
        "labelX": 400.0,
        "labelY": 76.2
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-batadrava-than",
        "slug": "batadrava-than-bordowa",
        "name": "Batadrava Than (Bordowa)",
        "name_as": "বটদ্ৰৱা থান (বৰদোৱা)",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 26.398,
        "lng": 92.625,
        "x": 291.1,
        "y": 215.0,
        "imageUrl": "/images/destinations/batadrava-than.jpg",
        "shortDescription": "Sacred Birthplace of Mahapurusha Srimanta Sankaradeva & Birthplace of Neo-Vaishnavism",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.398,92.625",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.398,92.625"
      },
      {
        "id": "tour-champawati-kunda",
        "slug": "champawati-kunda-falls",
        "name": "Champawati Kunda Waterfalls (Chapanalla Hills)",
        "name_as": "চম্পাৱতী কুণ্ড জলপ্ৰপাত (চাপানালা পাহাৰ)",
        "category": "wildlife-national-parks",
        "categoryLabel": "Scenic Cascades & Foothills",
        "lat": 26.28,
        "lng": 92.85,
        "x": 396.9,
        "y": 276.9,
        "imageUrl": "/images/destinations/panimur-waterfalls.jpg",
        "shortDescription": "Lush evergreen mountain waterfall and picnic haven cascading down the scenic Karbi foothills in Chapanalla.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.280,92.850",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.280,92.850"
      }
    ]
  },
  "nalbari": {
    "slug": "nalbari",
    "name": "Nalbari",
    "name_as": "নলবাৰী",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 91.201,
      "maxLon": 91.6,
      "minLat": 26.119,
      "maxLat": 26.589
    },
    "svgPath": "M 280.6,100.4 L 292.0,101.9 L 293.8,90.2 L 318.0,80.2 L 329.6,106.0 L 312.2,107.4 L 308.0,118.6 L 322.5,121.0 L 318.0,134.4 L 353.3,121.3 L 364.3,111.6 L 362.2,99.9 L 447.2,83.4 L 422.8,77.3 L 427.0,64.9 L 453.3,65.7 L 459.9,58.4 L 472.0,66.9 L 474.6,91.2 L 484.1,92.4 L 501.5,69.1 L 540.4,57.4 L 546.2,71.7 L 537.5,72.0 L 540.7,95.3 L 523.6,98.5 L 528.0,135.4 L 518.3,148.0 L 529.9,182.7 L 501.7,215.8 L 507.8,230.1 L 494.3,249.3 L 498.8,265.3 L 443.3,279.9 L 440.4,324.6 L 428.8,332.8 L 409.9,328.2 L 417.5,357.6 L 415.4,380.9 L 408.6,385.0 L 415.9,408.6 L 411.2,442.6 L 392.2,439.9 L 363.0,415.1 L 316.4,423.9 L 259.9,404.7 L 270.9,403.5 L 279.6,385.0 L 254.6,369.0 L 253.8,351.8 L 273.8,332.1 L 254.1,326.7 L 262.8,313.1 L 289.9,307.1 L 281.2,296.1 L 290.1,294.0 L 285.7,284.7 L 296.7,272.1 L 294.6,261.9 L 302.5,261.7 L 297.5,240.8 L 306.7,231.3 L 292.8,235.2 L 293.0,243.9 L 278.8,234.5 L 276.4,226.2 L 270.6,228.9 L 274.6,219.9 L 268.0,209.7 L 274.6,205.6 L 266.2,175.4 L 293.5,128.8 L 279.3,111.6 L 280.6,100.4 Z",
    "headquarters": {
      "name": "Nalbari",
      "name_as": "নলবাৰী",
      "lat": 26.446,
      "lng": 91.438,
      "x": 429.9,
      "y": 168.7
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BAKSA DISTRICT (BTR)",
      "south": "↓ BRAHMAPUTRA RIVER & KAMRUP",
      "west": "← BAJALI & BARPETA",
      "east": "KAMRUP RURAL DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 253.8,261.6 L 326.9,242.3 L 400.0,250.0 L 473.1,238.4 L 546.2,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-billeswar-temple",
        "slug": "billeswar-devalaya",
        "name": "Billeshwar Devalaya (Belsor)",
        "name_as": "বৰ বিলেশ্বৰ দেৱালয়",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 26.398,
        "lng": 91.385,
        "x": 387.9,
        "y": 211.2,
        "imageUrl": "/images/destinations/billeswar-devalaya.jpg",
        "shortDescription": "Ancient 500-Year-Old Historic Shiva Temple Rebuilt by Ahom King Shiva Singha",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.398,91.385",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.398,91.385"
      },
      {
        "id": "tour-hari-mandir-nalbari",
        "slug": "hari-mandir-raas-mahotsav",
        "name": "Nalbari Sri Sri Hari Mandir & Raas Grounds",
        "name_as": "নলবাৰী শ্ৰীশ্ৰী হৰি মন্দিৰ আৰু ৰাস মহোৎসৱ",
        "category": "festivals-cultural",
        "categoryLabel": "Festivals & Cultural Events",
        "lat": 26.442,
        "lng": 91.438,
        "x": 429.9,
        "y": 172.3,
        "imageUrl": "/images/destinations/hari-mandir-nalbari.jpg",
        "shortDescription": "The Epicenter of the Celebrated 13-Day Historic Nalbari Raas Mahotsav",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.442,91.438",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.442,91.438"
      }
    ]
  },
  "sivasagar": {
    "slug": "sivasagar",
    "name": "Sivasagar",
    "name_as": "শিৱসাগৰ",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 94.374,
      "maxLon": 94.964,
      "minLat": 26.69,
      "maxLat": 27.297
    },
    "svgPath": "M 353.7,145.7 L 383.8,76.6 L 405.9,78.9 L 416.0,59.3 L 431.8,77.4 L 430.0,65.3 L 442.0,57.4 L 449.7,61.9 L 444.4,76.2 L 461.9,82.6 L 459.4,94.7 L 468.6,108.8 L 460.9,119.0 L 467.1,128.4 L 451.7,149.3 L 456.2,156.6 L 490.9,167.2 L 485.4,179.4 L 502.6,182.6 L 495.3,206.5 L 498.4,234.4 L 483.8,247.2 L 486.0,251.3 L 472.4,247.7 L 439.8,291.8 L 453.8,298.6 L 509.5,294.1 L 547.3,266.4 L 541.6,256.8 L 557.4,250.2 L 565.1,254.3 L 566.8,273.3 L 534.7,294.2 L 520.5,308.0 L 510.8,331.3 L 490.9,349.8 L 489.1,369.2 L 477.1,372.9 L 481.8,381.6 L 461.9,390.1 L 454.8,405.9 L 443.6,398.9 L 441.4,417.2 L 441.8,408.3 L 414.4,429.2 L 370.4,442.6 L 363.9,425.6 L 356.2,427.3 L 355.0,430.5 L 349.5,433.9 L 341.4,415.3 L 331.4,412.5 L 327.4,417.7 L 304.5,401.9 L 312.0,390.3 L 306.5,386.1 L 313.0,382.7 L 299.4,364.7 L 288.4,361.5 L 294.9,336.8 L 292.7,326.2 L 281.3,319.3 L 286.2,310.4 L 281.1,289.9 L 247.0,284.5 L 239.5,291.4 L 233.2,276.5 L 272.8,248.7 L 282.1,224.4 L 298.2,218.2 L 324.1,193.0 L 353.7,145.7 Z",
    "headquarters": {
      "name": "Sivasagar",
      "name_as": "শিৱসাগৰ",
      "lat": 26.983,
      "lng": 94.63,
      "x": 376.4,
      "y": 257.2
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & DHEMAJI",
      "south": "↓ NAGALAND (MOKOKCHUNG)",
      "west": "← JORHAT DISTRICT",
      "east": "CHARAIDEO & DIBRUGARH →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Northern boundary facing the river island of Majuli and Dhemaji.",
        "svgPath": "M 266.6,231.9 L 358.1,177.1 L 449.7,122.3 L 541.3,74.3",
        "labelX": 449.7,
        "labelY": 110.3
      },
      {
        "name": "Dikhow River",
        "name_as": "দিখৌ নদী",
        "significance": "Historic royal Ahom waterway flowing past Rang Ghar and Kareng Ghar in Sivasagar.",
        "svgPath": "M 492.4,382.6 L 431.4,300.4 L 382.5,252.4 L 345.9,204.5",
        "labelX": 382.5,
        "labelY": 240.4
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-rang-ghar",
        "slug": "rang-ghar",
        "name": "Rang Ghar (Ahom Royal Amphitheatre)",
        "name_as": "ৰংঘৰ (আহোম ৰাজকীয় পেভিলিয়ন)",
        "category": "heritage-historic",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 26.966,
        "lng": 94.6225,
        "x": 371.9,
        "y": 268.9,
        "imageUrl": "/images/destinations/rang-ghar.jpg",
        "shortDescription": "Asia's Oldest Surviving Sports Pavilion & Architectural Emblem of Assam",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.966,94.6225",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.966,94.6225"
      },
      {
        "id": "tour-talatal-ghar",
        "slug": "talatal-ghar",
        "name": "Talatal Ghar & Kareng Ghar Royal Palaces",
        "name_as": "তলাতল ঘৰ আৰু কাৰেং ঘৰ",
        "category": "heritage-historic",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 26.9744,
        "lng": 94.6366,
        "x": 380.5,
        "y": 263.1,
        "imageUrl": "/images/destinations/talatal-ghar.jpg",
        "shortDescription": "Secret Multi-Level Underground Royal Palace & Military Bastion of the Ahoms",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.9744,94.6366",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.9744,94.6366"
      },
      {
        "id": "tour-sivadol",
        "slug": "sivadol",
        "name": "Sivasagar Sivadol & Borpukhuri Lake",
        "name_as": "শিৱসাগৰ শিৱদৌল আৰু বৰপুখুৰী",
        "category": "heritage-historic",
        "categoryLabel": "Temples & Spiritual Sites",
        "lat": 26.985,
        "lng": 94.6378,
        "x": 381.2,
        "y": 255.8,
        "imageUrl": "/images/destinations/sivadol.jpg",
        "shortDescription": "Tallest Historical Shiva Temple Tower in India (104 ft) Beside an Imperial Lake",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.985,94.6378",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.985,94.6378"
      },
      {
        "id": "tour-guide-upper-assam",
        "slug": "upper-assam-heritage-tea-circuit",
        "name": "Upper Assam Heritage & Tea Country Scenic Circuit Guide",
        "name_as": "উজনি অসমৰ বুৰঞ্জী আৰু চাহ পৰ্যটন ভ্ৰমণ নিৰ্দেশিকা",
        "category": "district-travel-guides",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 26.985,
        "lng": 94.6378,
        "x": 381.2,
        "y": 255.8,
        "imageUrl": "/images/destinations/upper-assam-heritage-tea-circuit.jpg",
        "shortDescription": "Multi-Day Road Itinerary: 600-Year Ahom Capitals, Rain Forests & Planter Mansions",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.985,94.6378",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.985,94.6378"
      }
    ]
  },
  "sonitpur": {
    "slug": "sonitpur",
    "name": "Sonitpur",
    "name_as": "শোণিতপুৰ",
    "division": "North Assam",
    "bounds": {
      "minLon": 92.291,
      "maxLon": 93.178,
      "minLat": 26.475,
      "maxLat": 27.053
    },
    "svgPath": "M 610.2,136.3 L 609.8,172.0 L 598.2,187.4 L 611.7,208.0 L 607.6,221.8 L 618.3,246.9 L 614.2,262.4 L 626.6,287.1 L 624.5,294.8 L 637.1,299.3 L 649.7,325.0 L 663.8,373.8 L 632.6,384.5 L 616.2,369.5 L 579.5,369.7 L 566.0,358.0 L 539.1,353.3 L 517.2,371.6 L 469.1,379.2 L 438.6,398.7 L 423.7,399.7 L 409.0,431.9 L 396.4,427.0 L 391.7,413.7 L 370.6,432.7 L 354.1,423.8 L 298.2,440.0 L 264.1,434.1 L 228.6,442.6 L 213.1,427.2 L 165.3,432.7 L 159.3,435.9 L 151.4,434.3 L 147.1,438.0 L 141.4,429.0 L 155.9,414.7 L 172.7,419.9 L 160.1,397.5 L 163.6,392.2 L 154.6,389.4 L 161.0,378.6 L 159.9,371.8 L 155.4,365.5 L 169.7,358.0 L 169.7,346.7 L 182.3,348.5 L 184.7,340.2 L 182.1,337.5 L 161.6,336.9 L 162.3,297.3 L 149.7,301.1 L 155.0,305.4 L 152.5,321.8 L 141.2,322.8 L 141.8,299.9 L 150.8,292.4 L 141.6,280.1 L 148.0,275.0 L 141.6,278.0 L 145.0,272.2 L 136.2,267.9 L 143.1,265.7 L 139.0,255.0 L 144.4,248.7 L 139.4,244.4 L 146.9,244.8 L 139.0,214.9 L 158.0,133.5 L 184.0,134.3 L 193.0,121.2 L 201.8,122.6 L 215.6,109.8 L 289.9,110.6 L 314.2,104.0 L 342.4,89.8 L 360.1,57.4 L 392.5,67.1 L 428.2,63.7 L 497.7,80.3 L 518.0,92.8 L 517.4,106.8 L 584.4,142.4 L 610.2,136.3 Z",
    "headquarters": {
      "name": "Tezpur",
      "name_as": "তেজপুৰ",
      "lat": 26.634,
      "lng": 92.793,
      "x": 437.6,
      "y": 343.4
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ ARUNACHAL PRADESH (WEST KAMENG)",
      "south": "↓ BRAHMAPUTRA RIVER & NAGAON",
      "west": "← DARRANG & UDALGURI",
      "east": "BISWANATH DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Expansive southern river boundary framing Tezpur Agnigarh hillock.",
        "svgPath": "M 185.3,382.3 L 345.8,360.7 L 442.1,367.9 L 570.5,339.1",
        "labelX": 442.1,
        "labelY": 355.9
      },
      {
        "name": "Jia Bhoroli River",
        "name_as": "জীয়া ভৰলী নদী",
        "significance": "Pristine glacial river flowing through Nameri National Park famed for golden mahseer.",
        "svgPath": "M 454.9,65.8 L 474.2,152.1 L 493.5,238.4 L 480.6,353.5",
        "labelX": 493.5,
        "labelY": 226.4
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-nameri",
        "slug": "nameri",
        "name": "Nameri National Park & Jia Bhoroli River",
        "name_as": "নামেৰি ৰাষ্ট্ৰীয় উদ্যান আৰু জিয়া ভৰলী",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 27.005,
        "lng": 92.7916,
        "x": 436.7,
        "y": 76.6,
        "imageUrl": "/images/destinations/nameri.jpg",
        "shortDescription": "Angler's Paradise, River Rafting & Stronghold of the White-Winged Wood Duck",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.005,92.7916",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.005,92.7916"
      },
      {
        "id": "tour-agnigarh",
        "slug": "agnigarh",
        "name": "Agnigarh Hillock & Tezpur Cultural City",
        "name_as": "অগ্নিগড় আৰু তেজপুৰ সাংস্কৃতিক চহৰ",
        "category": "heritage-historic",
        "categoryLabel": "History & Ahom Legacy",
        "lat": 26.6214,
        "lng": 92.8028,
        "x": 443.9,
        "y": 352.5,
        "imageUrl": "/images/destinations/agnigarh.jpg",
        "shortDescription": "Mythological Fortress of Fire & The City of Eternal Romance",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.6214,92.8028",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.6214,92.8028"
      },
      {
        "id": "tour-da-parbatia",
        "slug": "da-parbatia",
        "name": "Da-Parbatia Archaeological Ruins",
        "name_as": "দ-পৰ্বতীয়া প্ৰত্নতাত্ত্বিক স্থান",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 26.6214,
        "lng": 92.7758,
        "x": 426.6,
        "y": 352.5,
        "imageUrl": "/images/destinations/da-parbatia.jpg",
        "shortDescription": "Ancient 5th-century Gupta-era doorframe ruins representing the oldest surviving stone sculpture in Assam.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.6214,92.7758",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.6214,92.7758"
      }
    ]
  },
  "south-salmara-mankachar": {
    "slug": "south-salmara-mankachar",
    "name": "South Salmara-Mankachar",
    "name_as": "দক্ষিণ শালমাৰা-মানকাচৰ",
    "division": "Lower Assam",
    "bounds": {
      "minLon": 89.802,
      "maxLon": 90.213,
      "minLat": 25.443,
      "maxLat": 26.078
    },
    "svgPath": "M 303.2,169.6 L 322.8,172.1 L 335.6,158.3 L 354.6,154.3 L 358.7,142.2 L 365.6,142.0 L 363.4,125.7 L 379.3,109.1 L 407.2,91.4 L 428.9,92.5 L 444.4,66.4 L 473.4,57.4 L 479.3,58.1 L 501.1,61.4 L 496.6,64.1 L 512.3,76.0 L 504.0,87.1 L 506.4,92.0 L 479.7,104.4 L 471.9,114.9 L 466.4,112.9 L 464.6,119.5 L 468.0,119.9 L 450.1,133.4 L 446.6,145.6 L 431.5,149.6 L 420.9,166.5 L 410.7,161.3 L 400.5,170.5 L 409.1,180.9 L 397.9,198.2 L 378.7,206.7 L 374.4,202.2 L 373.2,210.7 L 368.7,209.9 L 370.7,204.9 L 365.2,207.2 L 371.7,237.1 L 357.5,253.7 L 358.7,259.8 L 351.3,264.1 L 333.6,260.0 L 336.2,272.2 L 362.8,303.0 L 365.8,317.6 L 385.8,337.4 L 398.1,337.4 L 407.6,350.2 L 397.5,364.6 L 385.6,361.0 L 379.3,372.4 L 323.2,388.4 L 317.7,404.6 L 326.9,408.0 L 328.5,415.4 L 320.7,415.6 L 320.1,435.4 L 307.9,442.6 L 313.2,409.1 L 308.1,395.1 L 316.7,390.4 L 326.4,343.7 L 319.5,314.0 L 305.2,292.2 L 306.9,279.6 L 298.3,279.1 L 293.6,267.9 L 302.0,249.7 L 294.0,218.8 L 287.7,214.3 L 298.5,197.5 L 297.3,177.3 L 303.2,169.6 Z",
    "headquarters": {
      "name": "Hatsingimari",
      "name_as": "হাটশিঙিমাৰী",
      "lat": 25.68,
      "lng": 89.88,
      "x": 324.9,
      "y": 302.6
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BRAHMAPUTRA RIVER & DHUBRI",
      "south": "↓ BANGLADESH (KURIGRAM DISTRICT)",
      "west": "← BRAHMAPUTRA & BANGLADESH",
      "east": "MEGHALAYA (WEST GARO HILLS) →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 287.7,261.6 L 343.9,242.3 L 400.0,250.0 L 456.1,238.4 L 512.3,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-kamakhya-mankachar",
        "slug": "kamakhya-mankachar-temple",
        "name": "Kamakhya Temple of Mankachar",
        "name_as": "মানকাচৰৰ কামাখ্যা দেৱালয়",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 25.535,
        "lng": 89.865,
        "x": 316.1,
        "y": 397.6,
        "imageUrl": "/images/destinations/kamakhya-mankachar-temple.jpg",
        "shortDescription": "Historic Border Hilltop Shakti Shrine Overlooking Bangladesh Floodplains",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.535,89.865",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.535,89.865"
      },
      {
        "id": "tour-mir-jumla-tomb",
        "slug": "mir-jumla-historic-tomb",
        "name": "Mir Jumla Historic Tomb & Cannon Post",
        "name_as": "মীৰ জুমলাৰ ঐতিহাসিক সমাধিক্ষেত্ৰ",
        "category": "heritage-historic",
        "categoryLabel": "Heritage & Historic Sites",
        "lat": 25.562,
        "lng": 89.878,
        "x": 323.8,
        "y": 380.0,
        "imageUrl": "/images/destinations/mir-jumla-historic-tomb.jpg",
        "shortDescription": "1663 Monument of Mughal General Mir Jumla on the Historic Route to Assam",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.562,89.878",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.562,89.878"
      }
    ]
  },
  "tamulpur": {
    "slug": "tamulpur",
    "name": "Tamulpur",
    "name_as": "তামুলপুৰ",
    "division": "Lower Assam (BTR)",
    "bounds": {
      "minLon": 91.405,
      "maxLon": 91.817,
      "minLat": 26.432,
      "maxLat": 26.849
    },
    "svgPath": "M 483.3,77.9 L 520.1,202.4 L 510.3,229.8 L 523.0,243.5 L 514.4,252.0 L 524.5,254.0 L 509.1,260.0 L 521.0,263.3 L 513.2,285.2 L 525.7,285.2 L 518.3,297.0 L 524.5,303.3 L 535.5,296.5 L 523.9,309.1 L 539.0,316.7 L 551.2,340.6 L 555.6,354.3 L 547.0,361.2 L 554.7,362.5 L 547.0,367.2 L 555.6,371.0 L 549.1,377.3 L 557.4,391.9 L 552.1,393.8 L 570.2,400.1 L 568.7,412.7 L 550.3,410.8 L 550.9,408.0 L 526.3,408.3 L 528.1,395.4 L 501.7,386.9 L 497.5,413.0 L 488.4,411.1 L 458.7,441.5 L 412.8,442.6 L 416.3,425.0 L 406.6,421.2 L 414.0,419.0 L 415.4,409.1 L 408.6,410.2 L 415.7,396.5 L 404.8,404.2 L 407.7,377.1 L 381.1,375.4 L 378.1,361.7 L 370.7,360.9 L 367.1,334.6 L 376.9,334.3 L 370.4,318.1 L 326.5,331.3 L 307.0,357.6 L 296.3,356.2 L 293.3,328.8 L 279.7,319.2 L 272.3,327.4 L 242.7,326.6 L 237.9,340.6 L 265.5,347.4 L 229.8,354.4 L 229.8,57.4 L 296.9,99.3 L 384.0,85.3 L 413.4,69.7 L 470.9,83.7 L 483.3,77.9 Z",
    "headquarters": {
      "name": "Tamulpur",
      "name_as": "তামুলপুৰ",
      "lat": 26.63,
      "lng": 91.57,
      "x": 363.6,
      "y": 260.2
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BHUTAN KINGDOM",
      "south": "↓ NALBARI & KAMRUP RURAL",
      "west": "← BAKSA DISTRICT",
      "east": "UDALGURI DISTRICT (BTR) →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 229.8,261.6 L 314.9,242.3 L 400.0,250.0 L 485.1,238.4 L 570.2,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-daranga-mela",
        "slug": "daranga-mela-cultural-grounds",
        "name": "Daranga Mela & Indo-Bhutan Cultural Gateway",
        "name_as": "দৰঙা মেলা আৰু ভাৰত-ভুটান সমন্বয় স্থলী",
        "category": "festivals-cultural",
        "categoryLabel": "Festivals & Cultural Events",
        "lat": 26.795,
        "lng": 91.505,
        "x": 305.7,
        "y": 95.6,
        "imageUrl": "/images/destinations/daranga-mela-cultural-grounds.jpg",
        "shortDescription": "Centuries-Old Historic Winter Trade Fair and Cultural Confluence with Bhutan",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.795,91.505",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.795,91.505"
      },
      {
        "id": "tour-bogamati-tamulpur",
        "slug": "bogamati-tamulpur-valley",
        "name": "Bornadi & Bogamati River Valley (Tamulpur Gateway)",
        "name_as": "বৰনদী আৰু বগামাটি নদী উপত্যকা",
        "category": "wildlife-national-parks",
        "categoryLabel": "Foothill River Ecology",
        "lat": 26.815,
        "lng": 91.56,
        "x": 354.7,
        "y": 75.6,
        "imageUrl": "/images/destinations/brahmaputra-cruises.jpg",
        "shortDescription": "Pristine whitewash boulder valley and river canyon at the Indo-Bhutan border along the Barnadi river.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.815,91.560",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.815,91.560"
      }
    ]
  },
  "tinsukia": {
    "slug": "tinsukia",
    "name": "Tinsukia",
    "name_as": "তিনিচুকীয়া",
    "division": "Upper Assam",
    "bounds": {
      "minLon": 95.188,
      "maxLon": 96.047,
      "minLat": 27.193,
      "maxLat": 28.001
    },
    "svgPath": "M 339.1,433.1 L 331.2,422.2 L 324.0,438.3 L 319.3,423.4 L 328.4,418.1 L 321.7,405.8 L 337.6,392.2 L 331.6,394.4 L 322.8,384.7 L 330.8,381.1 L 334.4,368.5 L 325.3,364.4 L 318.7,369.9 L 305.9,358.1 L 296.2,356.2 L 283.8,360.4 L 277.3,354.6 L 259.4,357.2 L 253.0,343.7 L 231.5,349.1 L 233.2,334.0 L 218.6,329.0 L 222.7,300.7 L 240.0,295.2 L 239.4,277.4 L 247.3,275.7 L 242.9,261.8 L 248.2,265.2 L 255.3,256.4 L 263.5,255.0 L 245.6,211.0 L 241.3,206.6 L 243.2,202.7 L 276.4,196.5 L 297.0,183.3 L 303.1,161.2 L 331.2,136.3 L 343.2,115.7 L 353.4,115.0 L 353.1,104.7 L 375.4,84.1 L 378.7,74.7 L 385.7,75.1 L 395.1,65.8 L 491.9,57.4 L 561.5,61.9 L 551.2,74.5 L 552.9,83.7 L 542.4,92.6 L 546.1,95.0 L 535.9,99.6 L 540.3,103.5 L 535.9,102.4 L 515.3,128.7 L 500.4,133.1 L 500.6,140.3 L 489.1,146.4 L 472.2,169.4 L 473.8,179.6 L 462.7,184.3 L 467.4,189.5 L 468.4,203.5 L 478.8,207.2 L 471.8,210.2 L 469.7,218.7 L 481.2,227.0 L 474.1,237.8 L 479.2,248.7 L 490.4,249.2 L 489.7,261.7 L 510.9,277.8 L 517.1,277.2 L 517.7,293.5 L 522.9,301.4 L 517.1,303.4 L 515.4,317.1 L 507.6,322.1 L 503.5,340.3 L 510.6,347.3 L 509.2,341.2 L 521.2,333.2 L 522.3,352.3 L 532.4,333.8 L 547.6,332.3 L 553.8,341.3 L 560.5,337.1 L 560.8,343.7 L 566.8,345.3 L 581.4,367.8 L 569.4,373.8 L 558.7,388.6 L 563.2,390.3 L 554.0,393.8 L 556.2,397.3 L 527.6,412.0 L 530.8,416.3 L 525.3,425.9 L 508.9,417.8 L 510.3,409.5 L 485.6,416.8 L 483.6,411.0 L 473.9,418.4 L 456.8,420.1 L 446.8,428.9 L 429.2,427.7 L 407.4,438.8 L 391.6,442.6 L 362.3,421.2 L 350.4,422.5 L 348.1,429.4 L 339.1,433.1 Z",
    "headquarters": {
      "name": "Tinsukia",
      "name_as": "তিনিচুকীয়া",
      "lat": 27.492,
      "lng": 95.358,
      "x": 281.6,
      "y": 304.1
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ ARUNACHAL PRADESH & DHEMAJI",
      "south": "↓ ARUNACHAL PRADESH (CHANGLANG)",
      "west": "← DIBRUGARH DISTRICT",
      "east": "ARUNACHAL (LOHIT & NAMSAI) →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 218.6,261.6 L 309.3,242.3 L 400.0,250.0 L 490.7,238.4 L 581.4,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-dibru-saikhowa",
        "slug": "dibru-saikhowa",
        "name": "Dibru-Saikhowa National Park & Maguri Beel",
        "name_as": "ডিব্ৰু-ছৈখোৱা ৰাষ্ট্ৰীয় উদ্যান আৰু মাগুৰী বিল",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & National Parks",
        "lat": 27.6667,
        "lng": 95.35,
        "x": 277.9,
        "y": 214.2,
        "imageUrl": "/images/destinations/dibru-saikhowa.jpg",
        "shortDescription": "Flooded Island Wilderness, Feral Wild Horses & Gangetic River Dolphins",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.6667,95.35",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.6667,95.35"
      },
      {
        "id": "tour-digboi-oil-heritage",
        "slug": "digboi-oil-heritage",
        "name": "Digboi Centenary Oil Museum & Heritage Area",
        "name_as": "ডিগবৈ তেল যাদুঘৰ আৰু ঐতিহ্য ক্ষেত্ৰ",
        "category": "heritage-historic",
        "categoryLabel": "Verified Attraction",
        "lat": 27.3828,
        "lng": 95.6322,
        "x": 406.7,
        "y": 360.3,
        "imageUrl": "/images/destinations/digboi-oil-heritage.jpg",
        "shortDescription": "Birthplace of the modern petroleum industry in Asia, featuring the historic Well No. 1 and an open-air machinery museum.",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=27.3828,95.6322",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=27.3828,95.6322"
      }
    ]
  },
  "udalguri": {
    "slug": "udalguri",
    "name": "Udalguri",
    "name_as": "ওদালগুৰি",
    "division": "Lower Assam (BTR)",
    "bounds": {
      "minLon": 91.676,
      "maxLon": 92.427,
      "minLat": 26.457,
      "maxLat": 26.95
    },
    "svgPath": "M 632.6,62.7 L 630.6,62.5 L 608.3,158.1 L 617.6,193.1 L 608.8,192.6 L 614.6,197.7 L 608.3,205.1 L 613.1,217.7 L 605.1,220.2 L 615.3,225.3 L 611.3,232.0 L 618.8,228.5 L 611.3,234.6 L 622.1,249.0 L 611.6,257.8 L 610.8,284.7 L 624.1,283.5 L 627.1,264.3 L 620.8,259.2 L 635.6,254.8 L 634.9,301.1 L 658.9,301.8 L 661.9,305.1 L 659.2,314.8 L 644.4,312.7 L 644.4,325.9 L 627.6,334.8 L 632.9,342.2 L 633.1,351.9 L 607.8,348.2 L 606.3,340.3 L 620.6,339.4 L 611.1,332.2 L 613.6,319.0 L 596.3,331.5 L 598.0,317.1 L 582.8,319.0 L 579.5,294.6 L 569.0,289.1 L 567.0,323.9 L 543.7,334.8 L 551.4,359.6 L 560.7,362.4 L 534.9,380.7 L 532.2,342.6 L 537.9,340.1 L 527.1,313.7 L 507.1,308.1 L 515.6,303.2 L 513.4,294.2 L 500.1,299.7 L 494.3,294.2 L 497.3,279.6 L 450.5,293.2 L 452.7,300.7 L 415.9,297.9 L 414.2,316.9 L 389.1,320.4 L 390.1,329.9 L 380.3,329.7 L 386.1,343.8 L 368.3,346.1 L 365.6,371.6 L 382.6,383.2 L 403.9,382.3 L 408.1,348.2 L 420.9,346.6 L 426.4,357.9 L 437.0,354.9 L 443.0,362.6 L 441.7,377.9 L 412.7,383.9 L 412.7,413.4 L 403.9,414.3 L 399.1,442.6 L 390.1,434.0 L 391.9,413.6 L 380.1,414.5 L 387.1,401.3 L 375.6,403.4 L 382.3,386.2 L 363.8,385.3 L 371.1,391.1 L 364.8,392.7 L 353.8,375.6 L 338.5,374.6 L 330.0,378.4 L 334.7,388.3 L 306.7,390.4 L 302.2,364.9 L 283.1,363.3 L 273.9,389.5 L 263.1,395.1 L 251.1,389.5 L 247.8,360.3 L 238.8,359.1 L 238.5,353.8 L 235.8,351.7 L 226.0,361.2 L 234.0,361.9 L 232.8,372.8 L 220.0,371.9 L 217.7,384.8 L 231.0,383.9 L 235.3,409.0 L 223.3,417.3 L 193.7,411.3 L 199.2,406.0 L 191.9,402.7 L 198.5,398.8 L 191.9,397.6 L 199.2,391.8 L 195.4,380.2 L 185.2,360.0 L 172.4,353.5 L 182.2,342.9 L 172.9,348.7 L 167.6,343.3 L 173.9,333.4 L 163.4,333.4 L 169.9,314.8 L 159.9,312.0 L 172.9,306.9 L 164.4,305.3 L 171.6,298.1 L 160.9,286.5 L 169.1,263.3 L 138.1,158.1 L 150.6,158.7 L 228.5,114.9 L 255.1,73.2 L 280.4,68.5 L 334.2,99.4 L 348.8,120.0 L 403.4,129.3 L 438.2,111.9 L 446.7,90.3 L 507.9,92.7 L 553.4,76.2 L 569.2,82.7 L 589.3,78.3 L 589.3,65.3 L 636.1,57.4 L 632.6,62.7 Z",
    "headquarters": {
      "name": "Udalguri",
      "name_as": "ওদালগুৰি",
      "lat": 26.745,
      "lng": 92.096,
      "x": 433.4,
      "y": 215.2
    },
    "scaleKm": 20,
    "neighbors": {
      "north": "↑ BHUTAN KINGDOM",
      "south": "↓ DARRANG DISTRICT",
      "west": "← TAMULPUR DISTRICT (BTR)",
      "east": "SONITPUR DISTRICT →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 138.1,261.6 L 269.0,242.3 L 400.0,250.0 L 531.0,238.4 L 661.9,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-bhairabkunda",
        "slug": "bhairabkunda-scenic-confluence",
        "name": "Bhairabkunda Scenic River Confluence",
        "name_as": "ভৈৰৱকুণ্ড তিনিৰাজ্যৰ মিলনভূমি",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 26.905,
        "lng": 92.115,
        "x": 447.7,
        "y": 80.2,
        "imageUrl": "/images/destinations/bhairabkunda.jpg",
        "shortDescription": "Spectacular Tri-Junction of Assam, Bhutan, and Arunachal Pradesh on the Dhansiri",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.905,92.115",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.905,92.115"
      },
      {
        "id": "tour-bornadi-sanctuary",
        "slug": "bornadi-wildlife-sanctuary",
        "name": "Bornadi Wildlife Sanctuary",
        "name_as": "বৰনদী অভয়াৰণ্য",
        "category": "wildlife-birdwatching",
        "categoryLabel": "Wildlife & Sanctuaries",
        "lat": 26.835,
        "lng": 91.755,
        "x": 176.4,
        "y": 139.2,
        "imageUrl": "/images/destinations/bornadi-wildlife-sanctuary.jpg",
        "shortDescription": "Protected Foothills Refuge of the Critically Endangered Pygmy Hog and Hispid Hare",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=26.835,91.755",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=26.835,91.755"
      }
    ]
  },
  "west-karbi-anglong": {
    "slug": "west-karbi-anglong",
    "name": "West Karbi Anglong",
    "name_as": "পশ্চিম কাৰ্বি আংলং",
    "division": "Central Assam / Hills",
    "bounds": {
      "minLon": 92.107,
      "maxLon": 93.111,
      "minLat": 25.526,
      "maxLat": 26.179
    },
    "svgPath": "M 277.6,83.8 L 287.9,82.6 L 303.9,95.4 L 311.1,82.6 L 325.4,74.0 L 329.8,61.1 L 342.6,66.2 L 350.2,57.4 L 354.2,60.0 L 348.8,91.0 L 358.4,94.7 L 364.8,85.8 L 378.0,81.9 L 380.3,95.8 L 392.5,104.9 L 383.1,135.0 L 391.3,142.5 L 375.5,149.3 L 363.9,174.4 L 367.3,177.9 L 388.5,179.1 L 392.7,170.2 L 426.8,156.2 L 426.0,143.7 L 433.2,138.1 L 459.7,144.8 L 460.3,122.0 L 476.9,117.1 L 483.7,121.8 L 478.8,131.1 L 489.6,137.9 L 486.0,147.2 L 499.6,149.9 L 484.9,154.6 L 497.5,158.8 L 486.2,161.8 L 492.7,163.2 L 487.7,166.3 L 492.1,171.7 L 488.1,181.4 L 495.6,189.1 L 506.2,178.7 L 513.5,183.8 L 506.2,184.0 L 503.7,195.5 L 510.2,208.0 L 519.8,204.7 L 529.1,211.3 L 540.5,204.1 L 536.9,217.4 L 548.5,240.0 L 614.1,235.6 L 640.6,275.6 L 666.5,296.9 L 658.5,300.8 L 634.8,282.9 L 626.1,292.2 L 627.8,266.8 L 613.3,278.2 L 614.6,294.5 L 613.1,289.7 L 605.5,295.2 L 599.2,281.2 L 603.2,272.2 L 592.2,281.7 L 583.2,279.2 L 580.0,301.3 L 521.5,320.9 L 517.5,345.9 L 495.0,363.8 L 502.8,374.0 L 485.6,392.9 L 490.8,399.7 L 483.4,401.4 L 475.4,413.7 L 471.5,415.3 L 448.9,412.3 L 442.2,426.0 L 429.6,429.1 L 424.3,417.9 L 415.3,424.4 L 407.5,433.1 L 386.0,442.6 L 370.0,429.5 L 368.5,401.6 L 340.6,400.6 L 320.4,363.1 L 303.5,352.6 L 305.6,334.7 L 298.0,326.9 L 286.7,328.1 L 283.9,318.8 L 269.8,320.6 L 271.1,312.5 L 241.9,331.9 L 229.4,329.5 L 202.3,341.6 L 185.2,342.4 L 179.6,337.2 L 148.4,368.2 L 138.1,365.6 L 140.2,362.1 L 139.8,350.5 L 133.5,336.3 L 143.6,320.2 L 135.6,300.8 L 137.3,272.9 L 152.6,250.7 L 152.4,237.2 L 180.2,213.9 L 166.7,215.9 L 162.3,208.2 L 151.4,215.2 L 139.4,212.7 L 143.1,201.9 L 138.1,191.7 L 145.0,175.1 L 201.9,135.0 L 202.5,119.0 L 219.3,103.8 L 236.2,101.2 L 240.0,107.3 L 257.0,97.9 L 258.9,106.8 L 277.6,83.8 Z",
    "headquarters": {
      "name": "Hamren",
      "name_as": "হামৰেণ",
      "lat": 25.86,
      "lng": 92.54,
      "x": 360.4,
      "y": 245.4
    },
    "scaleKm": 30,
    "neighbors": {
      "north": "↑ MORIGAON & NAGAON",
      "south": "↓ MEGHALAYA (WEST JAINTIA HILLS)",
      "west": "← MEGHALAYA (EAST KHASI HILLS)",
      "east": "HOJAI & EAST KARBI ANGLONG →"
    },
    "rivers": [
      {
        "name": "Brahmaputra River",
        "name_as": "ব্ৰহ্মপুত্ৰ নদী",
        "significance": "Lifeline river valley corridor nourishing the district.",
        "svgPath": "M 133.5,261.6 L 266.8,242.3 L 400.0,250.0 L 533.2,238.4 L 666.5,257.7",
        "labelX": 400.0,
        "labelY": 238.0
      }
    ],
    "famousPlaces": [
      {
        "id": "tour-khanduli-meadows",
        "slug": "khanduli-highland-meadows",
        "name": "Khanduli Highland Meadows & Tourist Village",
        "name_as": "খান্দুলি সেউজীয়া মালভূমি",
        "category": "hills-waterfalls",
        "categoryLabel": "Hills, Lakes & Waterfalls",
        "lat": 25.685,
        "lng": 92.425,
        "x": 294.5,
        "y": 356.9,
        "imageUrl": "/images/destinations/khanduli-highland-meadows.jpg",
        "shortDescription": "Breathtaking Rolling Green Hilltop Meadows on the Assam-Meghalaya Plateau",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.685,92.425",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.685,92.425"
      },
      {
        "id": "tour-baithalangso-kopili",
        "slug": "baithalangso-kopili-river-valley",
        "name": "Baithalangso Kopili River Bend & Cascades",
        "name_as": "বৈঠালাংছো কপিলী নদী উপত্যকা",
        "category": "river-experiences",
        "categoryLabel": "River Islands & Riverfronts",
        "lat": 25.925,
        "lng": 92.515,
        "x": 346.1,
        "y": 204.0,
        "imageUrl": "/images/destinations/baithalangso-kopili-river-valley.jpg",
        "shortDescription": "Picturesque Mountain River Gorges, White Rapids and Forested Cliffs",
        "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=25.925,92.515",
        "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=25.925,92.515"
      }
    ]
  }
};
