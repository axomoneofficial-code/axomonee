/**
 * Official Social Media & Instagram Configuration for AXOM ONE
 * Update your handle, profile URL, and live follower counts here anytime.
 */

export interface SocialChannelConfig {
  name: string;
  handle: string;
  url: string;
  followerCount: string;
  followerCountNumber: number;
  label: string;
  label_as: string;
  bio: string;
  bio_as: string;
  postsCount: string;
  fullBio150Words: string;
  fullBio150Words_as: string;
}

export const INSTAGRAM_CONFIG: SocialChannelConfig = {
  name: 'Instagram',
  handle: '@axomone_official',
  url: 'https://instagram.com/axomone_official',
  followerCount: '12.5K',
  followerCountNumber: 12500,
  label: 'Followers on Instagram',
  label_as: 'ইনষ্টাগ্ৰাম অনুগামী',
  // Official Instagram app bio (strictly under 150 characters)
  bio: '🌿 Discover Local. Connect Assam.\n📍 আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম\n🦏 35 Districts • 85+ Shrines & Wildlife\n🏛️ Heritage, Food & Directory\n🌐 axomone.com',
  bio_as: '🌿 আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম\n📍 ৩৫ খন জিলাৰ পৰ্যটন আৰু ঐতিহ্য\n🦏 কাজিৰঙা, সত্ৰ আৰু সংস্কৃতি\n🏛️ উচ্চ শিক্ষা আৰু চৰকাৰী পঞ্জীকা\n🌐 axomone.com',
  postsCount: '180+',
  // Full 150-word narrative bio for extended profiles & about pages
  fullBio150Words:
    "AXOM ONE is Assam’s premier community-driven digital discovery platform, dedicated to connecting people with the authentic heritage, culture, and local enterprises of all 35 administrative districts. From the UNESCO World Heritage biodiversity of Kaziranga and Manas to the living Neo-Vaishnavite sattras of Majuli and the architectural marvels of the 600-year Ahom dynasty in Sivasagar, AXOM ONE provides verified regional intelligence for travellers, researchers, and citizens alike. Our mission—'Discover Local. Connect Assam' (আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম)—celebrates indigenous handloom traditions like Sualkuchi golden Muga silk, historic colonial tea estates across Upper Assam, sacred pilgrimage shrines from Kamakhya to Hajo, and trusted statutory directories for universities, businesses, and essential civic services. Whether you are seeking offbeat Himalayan river valleys, traditional ethnic culinary trails, or verified official contacts, AXOM ONE serves as your unified bridge to explore, celebrate, and preserve the boundless spirit of the land of the Red River and Blue Hills.",
  fullBio150Words_as:
    "অক্সম ৱান (AXOM ONE) হৈছে অসমৰ ৩৫ খন প্ৰশাসনিক জিলাৰ চহকী ঐতিহ্য, জীৱন্ত সংস্কৃতি আৰু থলুৱা উদ্যমক বিশ্বৰ সৈতে সংযোগ কৰাৰ বাবে সমৰ্পিত এক প্ৰধান ডিজিটেল মঞ্চ। কাজিৰঙা আৰু মানাহৰ ইউনেস্কো বিশ্ব ঐতিহ্য জৈৱ-বৈচিত্ৰ্যৰ পৰা আৰম্ভ কৰি মাজুলীৰ বৈষ্ণৱ সত্ৰীয়া পৰম্পৰা আৰু শিৱসাগৰৰ ৬০০ বছৰীয়া আহোম ৰাজবংশৰ ঐতিহাসিক কীৰ্তিচিহ্নলৈকে, এই প্লেটফৰ্মে পৰ্যটক, গৱেষক আৰু নাগৰিকসকলক প্ৰমাণিত তথ্য প্ৰদান কৰে। আমাৰ সংকল্প—'Discover Local. Connect Assam' (আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম)—অসমৰ শুৱালকুছিৰ সোণালী পাট-মুগা বস্ত্ৰশিল্প, উজনি অসমৰ ঐতিহাসিক চাহ বাগিচা, মা কামাখ্যা আৰু হাজোৰ পৱিত্ৰ তীৰ্থস্থান, আৰু ৰাজ্যৰ বিশ্ববিদ্যালয়, ব্যৱসায়িক প্ৰতিষ্ঠান তথা নাগৰিক চৰকাৰী সেৱাৰ সঠিক নিৰ্দেশনা প্ৰদৰ্শন কৰে। অপৰূপ সেউজ পাহাৰীয়া উপত্যকা, লোকসংস্কৃতি, পৰম্পৰাগত থলুৱা খাদ্যসম্ভাৰ বা চৰকাৰী যোগাযোগ তথ্য বিচাৰিবলৈ, অক্সম ৱান হৈছে ৰঙা নদী আৰু নীলা পাহাৰৰ দেশখনক জনাৰ এক সুচল মাধ্যম। অসমৰ প্ৰতিটো প্ৰান্তৰ লোকক একত্ৰিত কৰি সমাজখনক ডিজিটেল পৃথিৱীত আগুৱাই লৈ যোৱাই আমাৰ উদ্দেশ্য। আজি আমাৰ সৈতে যোগ দি গৌৰৱময় যাত্ৰাৰ অংশীদাৰ হওক আৰু নতুন সম্ভাৱনা গঢ়ক।",
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/axomone_official',
  facebook: 'https://facebook.com/axomone.official',
  youtube: 'https://youtube.com/@axomone',
  x: 'https://x.com/axomone',
  telegram: 'https://t.me/axomone',
};
