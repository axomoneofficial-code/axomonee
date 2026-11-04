import { BeautyDestination } from '../types';

export interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  conditionLabel: string;
  conditionLabelAs: string;
  conditionLabelHi: string;
  conditionLabelBrx: string;
  iconName: 'sun' | 'cloud-sun' | 'cloud' | 'cloud-rain' | 'cloud-fog' | 'cloud-lightning';
  isDay: boolean;
  isLive: boolean;
  lastUpdated: string;
  safariRecommendation: string;
  safariRecommendationAs: string;
  safariRecommendationHi: string;
  safariRecommendationBrx: string;
}

export interface OperationalStatusInfo {
  isOpen: boolean;
  badgeType: 'safari-open' | 'safari-pause' | 'year-round' | 'optimal-season';
  badgeLabel: string;
  badgeLabelAs: string;
  badgeLabelHi: string;
  badgeLabelBrx: string;
  alertTitle: string;
  alertTitleAs: string;
  alertTitleHi: string;
  alertTitleBrx: string;
  alertSummary: string;
  alertSummaryAs: string;
  alertSummaryHi: string;
  alertSummaryBrx: string;
  safariShifts?: string[];
  safariRanges?: { name: string; nameAs: string; highlight: string; highlightAs: string }[];
  isWildlife: boolean;
  monsoonMonthsLabel: string;
  seasonWindow: string;
  reopeningDate?: string;
}

/**
 * Standard Wildlife & National Park destinations in Assam with strict seasonal safari calendars.
 */
const WILDLIFE_SLUGS = new Set([
  'kaziranga',
  'manas',
  'pobitora',
  'nameri',
  'orang-national-park',
  'dibru-saikhowa',
  'dehing-patkai',
  'bornadi-wildlife-sanctuary',
  'kakoijana-reserve-forest',
  'garampani-wildlife-hotsprings',
  'doboka-reserve-forest',
  'deepor-beel-ramsar-wetland',
]);

/**
 * Calculates real-time operational status (safari season open vs monsoon pause)
 * for any tourist destination in Assam based on date & seasonal hydrology.
 */
export function getDestinationOperationalStatus(
  destination: BeautyDestination,
  simulatedDate: Date = new Date()
): OperationalStatusInfo {
  const month = simulatedDate.getMonth(); // 0 = Jan, 4 = May, 5 = Jun, 9 = Oct, 10 = Nov, 11 = Dec
  const isWildlife =
    WILDLIFE_SLUGS.has(destination.slug) ||
    destination.category === 'wildlife-birdwatching' ||
    (destination.bestSeason && destination.bestSeason.toLowerCase().includes('safari'));

  const destName = destination.name;
  const destNameAs = destination.name_as || destination.name;
  const destNameHi = destination.name_hi || destination.name;

  // 1. WILDLIFE & SAFARI DESTINATIONS (Kaziranga, Manas, Pobitora, Orang, Nameri, etc.)
  if (isWildlife) {
    // Standard Assam National Park Safari Season: November 1 to April 30 (or mid-May)
    // Monsoon Pause: May/June through October (river flooding, animal breeding & road preservation)
    const isSafariSeason = month === 10 || month === 11 || month === 0 || month === 1 || month === 2 || month === 3;
    const isPreMonsoonMay = month === 4;

    if (isSafariSeason || isPreMonsoonMay) {
      // OPEN FOR SAFARIS
      const seasonLabel = 'Open for Safaris (Nov – Apr)';
      const seasonLabelAs = 'চাফাৰীৰ বাবে মুকলি (নৱেম্বৰ – এপ্ৰিল)';
      const seasonLabelHi = 'सफारी हेतु खुला (नवंबर – अप्रैल)';
      const seasonLabelBrx = 'साफारीनि थाखाय गेवलां (नभेम्बर – एप्रिल)';

      return {
        isOpen: true,
        badgeType: 'safari-open',
        badgeLabel: seasonLabel,
        badgeLabelAs: seasonLabelAs,
        badgeLabelHi: seasonLabelHi,
        badgeLabelBrx: seasonLabelBrx,
        alertTitle: `${destName}: Open for Safaris (Nov – Apr)`,
        alertTitleAs: `${destNameAs}: চাফাৰীৰ বাবে মুকলি (নৱেম্বৰ – এপ্ৰিল)`,
        alertTitleHi: `${destNameHi}: सफारी हेतु खुला (नवंबर – अप्रैल)`,
        alertTitleBrx: `${destName}: साफारीनि थाखाय गेवलां (नभेम्बर – एप्रिल)`,
        alertSummary:
          'Morning (07:30) and afternoon (13:30) jeep safaris are fully operational. Elephant safari counters active at dawn. All core ranges are accessible with pleasant dry weather and clear grasslands.',
        alertSummaryAs:
          'পুৱা (০৭:৩০) আৰু আবেলি (০১:৩০) জীপ চাফাৰী সম্পূৰ্ণৰূপে সক্ৰিয়। ৰাতিপুৱাৰ হাতী চাফাৰী আৰু সকলো প্ৰধান পৰিসৰ মুকলি। পৰিষ্কাৰ শুকান বতৰত বন্যপ্ৰাণী দৰ্শনৰ সৰ্বোত্তম সময়।',
        alertSummaryHi:
          'सुबह (07:30) और दोपहर (01:30) जीप सफारी पूरी तरह चालू हैं। हाथी सफारी काउंटर सक्रिय हैं। सुखद मौसम एवं साफ दृश्यता के साथ वन्यजीव देखने का उत्तम समय।',
        alertSummaryBrx:
          'फुं (०७:३०) आरो बेलासि (০১:३०) जीप साफारी सोलिगासिनो दं। हाथि साफारी काउन्टरफोर गेवलां। बयनिख्रुइ मोजां बोथोर।',
        safariShifts: [
          'Morning Jeep Safari: 07:30 AM – 10:00 AM',
          'Elephant Safari (Dawn): 05:30 AM & 06:30 AM',
          'Afternoon Jeep Safari: 01:30 PM – 04:30 PM',
        ],
        safariRanges: [
          {
            name: 'Kohora (Central Range)',
            nameAs: 'কহঁৰা (মধ্য পৰিসৰ)',
            highlight: 'Grasslands, swamp deer & Rhino epicenter',
            highlightAs: 'ঘাঁহনি, দল-হৰিণা আৰু গঁড়ৰ মূল বাসস্থান',
          },
          {
            name: 'Bagori (Western Range)',
            nameAs: 'বাগৰি (পশ্চিম পৰিসৰ)',
            highlight: 'Highest density of Greater One-Horned Rhinos',
            highlightAs: 'এশিঙীয়া গঁড়ৰ সৰ্বাধিক ঘনত্বৰ কেন্দ্ৰ',
          },
          {
            name: 'Agaratoli (Eastern Range)',
            nameAs: 'অগৰাতলী (পূব পৰিসৰ)',
            highlight: 'Sohola Beel wetland & migratory bird paradise',
            highlightAs: 'চহলা বিল জলভূমি আৰু পৰিভ্ৰমী চৰাইৰ ৰম্যভূমি',
          },
          {
            name: 'Burapahar (Ghorakati)',
            nameAs: 'বুঢ়াপাহাৰ (ঘোঁৰাকটি)',
            highlight: 'Hilly terrain trekking & Hoolock Gibbon forest',
            highlightAs: 'পাহাৰীয়া ট্ৰেকিং আৰু হুলক গিবনৰ অৰণ্য',
          },
        ],
        isWildlife: true,
        monsoonMonthsLabel: 'Monsoon pause begins May 1',
        seasonWindow: 'November – April',
      };
    } else {
      // MONSOON PAUSE (May/June – October)
      const pauseLabel = 'Monsoon Pause (May – Oct) • Safaris Suspended';
      const pauseLabelAs = 'বৰ্ষাকালীন বিৰতি (মে’ – অক্টোবৰ) • চাফাৰী স্থগিত';
      const pauseLabelHi = 'मानसून विराम (मई – अक्टूबर) • सफारी स्थगित';
      const pauseLabelBrx = 'अखा बोथोरनि थाखाय बन्द (मे – अक्ट’बर) • साफारी थाद’नाय';

      return {
        isOpen: false,
        badgeType: 'safari-pause',
        badgeLabel: pauseLabel,
        badgeLabelAs: pauseLabelAs,
        badgeLabelHi: pauseLabelHi,
        badgeLabelBrx: pauseLabelBrx,
        alertTitle: `${destName}: Monsoon Pause (May – Oct)`,
        alertTitleAs: `${destNameAs}: বৰ্ষাকালীন বিৰতি (মে’ – অক্টোবৰ)`,
        alertTitleHi: `${destNameHi}: मानसून विराम (मई – अक्टूबर)`,
        alertTitleBrx: `${destName}: अखा बोथोरनि थाखाय बन्द (मे – अक्ट’बर)`,
        alertSummary:
          'Grassland jeep tracks and low-lying animal corridors are submerged by monsoon floodwaters. The reserve is closed to protect wildlife breeding and habitat regeneration. High-speed highway sensors (NH-715) active for animal crossings.',
        alertSummaryAs:
          'ব্ৰহ্মপুত্ৰৰ বাৰিষাৰ বানপানীৰ বাবে চাফাৰী পথ আৰু তৃণভূমি জলমগ্ন। বন্যপ্ৰাণীৰ প্ৰজনন আৰু সুৰক্ষাৰ বাবে উদ্যান স্থগিত ৰখা হৈছে। ৩৭ নং ৰাষ্ট্ৰীয় ঘাইপথত পশু পাৰাপাৰ নিৰীক্ষণ চলি আছে।',
        alertSummaryHi:
          'मानसून की बाढ़ के कारण सफारी ट्रैक जलमग्न हैं। वन्यजीव प्रजनन एवं सुरक्षा हेतु पार्क में प्रवेश स्थगित है। 1 नवंबर को पार्क पुनः खुलेगा।',
        alertSummaryBrx:
          'ब्रह्मपुत्रनि बानानि थाखाय साफारी लामाफोर दैयाव गोदोदों। जिब-जुनानि रैखाथिनि थाखाय बन्द लाखिनाय जादों।',
        isWildlife: true,
        monsoonMonthsLabel: 'Monsoon Flood Inundation Period',
        seasonWindow: 'May – October',
        reopeningDate: 'November 1',
      };
    }
  }

  // 2. RIVER & FERRY EXPERIENCES (Majuli Ferry, Brahmaputra Sunset Cruise, Umananda Island)
  if (destination.category === 'river-experiences') {
    const isMonsoon = month >= 5 && month <= 8; // Jun - Sep
    if (isMonsoon) {
      return {
        isOpen: true,
        badgeType: 'safari-pause',
        badgeLabel: 'Monsoon High Water Alert (Jun – Sep)',
        badgeLabelAs: 'বৰ্ষাকালীন উচ্চ জলপ্ৰবাহ সতৰ্কবাণী (জুন – ছেপ্টেম্বৰ)',
        badgeLabelHi: 'मानसून उच्च जलप्रवाह चेतावनी (जून – सितंबर)',
        badgeLabelBrx: 'अखा बोथोरनि दैमा बाना सांग्रांथि (जुन – सेप्टेम्बर)',
        alertTitle: `${destName}: Monsoon Water Alert`,
        alertTitleAs: `${destNameAs}: বৰ্ষাকালীন উচ্চ জল সতৰ্কবাণী`,
        alertTitleHi: `${destNameHi}: मानसून जलप्रवाह चेतावनी`,
        alertTitleBrx: `${destName}: अखा बोथोरनि सांग्रांथि`,
        alertSummary:
          'Brahmaputra water levels are high. Ferry crossings operate strictly subject to IWT safety clearances and daylight hours. Riverbank sandbars are temporarily submerged.',
        alertSummaryAs:
          'ব্ৰহ্মপুত্ৰৰ জলপৃষ্ঠ বৃদ্ধি পাইছে। আভ্যন্তৰীণ জল পৰিবহণৰ সুৰক্ষা নিৰ্দেশনা অনুসৰি ফেৰী চলাচল চলি থাকে। নদীৰ চাপৰি আৰু বালিচৰসমূহ জলমগ্ন।',
        alertSummaryHi:
          'ब्रह्मपुत्र में जलस्तर बढ़ा हुआ है। नौका सेवाएं मौसम एवं सुरक्षा अनुमति के अधीन संचालित हैं।',
        alertSummaryBrx:
          'दैमानि दै बांदों। नाव सालायनाया बोथोरनि सायाव सोनारो।',
        isWildlife: false,
        monsoonMonthsLabel: 'High Monsoon Waterway Levels',
        seasonWindow: 'June – September',
      };
    } else {
      return {
        isOpen: true,
        badgeType: 'safari-open',
        badgeLabel: 'Active River Cruising Season (Oct – May)',
        badgeLabelAs: 'নদী পৰিবহণৰ অনুকূল ঋতু (অক্টোবৰ – মে’)',
        badgeLabelHi: 'नदी क्रूज का सर्वोत्तम समय (अक्टूबर – मई)',
        badgeLabelBrx: 'दैमा दावबायनायनि मोजां समाव (अक्ट’बर – मे)',
        alertTitle: `${destName}: Optimal Cruising Season`,
        alertTitleAs: `${destNameAs}: নদী ক্ৰুজৰ সৰ্বোত্তম সময়`,
        alertTitleHi: `${destNameHi}: नौका विहार का उत्तम समय`,
        alertTitleBrx: `${destName}: दैमा दावबायनायनि समाव`,
        alertSummary:
          'Smooth river currents, golden sandbars, and serene sunset cruises across the Brahmaputra. Nimati-Majuli and Guwahati-North Guwahati ferries running scheduled services.',
        alertSummaryAs:
          'শান্ত নদী প্ৰবাহ, সোণালী বালিচৰ আৰু মনোৰম সূৰ্যাস্ত ক্ৰুজ। নিমাতী-মাজুলী আৰু গুৱাহাটীৰ সকলো নিয়মীয়া ফেৰী সেৱা সক্ৰিয়।',
        alertSummaryHi:
          'शांत जलप्रवाह एवं ब्रह्मपुत्र पर स्वर्णिम सूर्यास्त क्रूज का आनंद लें। सभी नियमित फेरी सेवाएं उपलब्ध हैं।',
        alertSummaryBrx:
          'गोजोनथाव दैमा आरो सान्दुं हाबनाय समाव नाव दावबायनायनि मोजां समाव।',
        isWildlife: false,
        monsoonMonthsLabel: 'Dry River Navigation Window',
        seasonWindow: 'October – May',
      };
    }
  }

  // 3. HERITAGE & SPIRITUAL SHAWLS (Kamakhya, Charaideo, Sivasagar, Majuli Sattras, Hajo)
  if (destination.category === 'heritage-historic' || destination.category === 'handloom-crafts') {
    return {
      isOpen: true,
      badgeType: 'year-round',
      badgeLabel: 'Open Year-Round for Visitors',
      badgeLabelAs: 'দৰ্শনাৰ্থীৰ বাবে বছৰজুৰি মুকলি',
      badgeLabelHi: 'दर्शकों हेतु वर्षभर खुला',
      badgeLabelBrx: 'नायगिरिफोरनि थाखाय बोसोरफ्रोमबो गेवलां',
      alertTitle: `${destName}: Open Year-Round`,
      alertTitleAs: `${destNameAs}: বছৰজুৰি দৰ্শনৰ বাবে মুকলি`,
      alertTitleHi: `${destNameHi}: वर्षभर दर्शन हेतु खुला`,
      alertTitleBrx: `${destName}: बोसोरफ्रोमबो गेवलां`,
      alertSummary:
        'Historic monuments, living sanctums, and heritage artisan workshops are open daily. October through April offers ideal cool weather for walking tours and cultural immersion.',
      alertSummaryAs:
        'ঐতিহাসিক কীৰ্তিচিহ্ন, আধ্যাত্মিক ধাম আৰু পৰম্পৰাগত হস্তশিল্প প্ৰতিষ্ঠানসমূহ প্ৰতিদিনে খোলা থাকে। অক্টোবৰৰ পৰা এপ্ৰিললৈ পদযাত্ৰা আৰু ঐতিহ্য অন্বেষণৰ সৰ্বোত্তম সময়।',
      alertSummaryHi:
        'ऐतिहासिक स्मारक, पवित्र स्थल एवं पारंपरिक हथकरघा केंद्र प्रतिदिन खुले हैं। अक्टूबर से अप्रैल का समय घूमने के लिए सर्वश्रेष्ठ है।',
      alertSummaryBrx:
        'जारिमिनारि मन्दिर, सत्र आरो सि दानाय थावनि सानफ्रोमबो गेवलां थायो।',
      isWildlife: false,
      monsoonMonthsLabel: 'Cultural & Sacred Circuit',
      seasonWindow: 'Year-Round Access',
    };
  }

  // 4. HILLS, LAKES & WATERFALLS (Haflong, Panimur, Umrangso, Kakochang)
  return {
    isOpen: true,
    badgeType: 'optimal-season',
    badgeLabel: 'Scenic Mountain & Nature Trails',
    badgeLabelAs: 'মনোৰম পাহাৰ আৰু প্ৰকৃতিৰ পথ',
    badgeLabelHi: 'सुहावने पहाड़ एवं प्राकृतिक रास्ते',
    badgeLabelBrx: 'समायना हाजो आरो मिथिंगानि लामा',
    alertTitle: `${destName}: Open & Accessible`,
    alertTitleAs: `${destNameAs}: ভ্ৰমণৰ বাবে মুকলি`,
    alertTitleHi: `${destNameHi}: यात्रा हेतु खुला`,
    alertTitleBrx: `${destName}: नायगिरिफोरनि थाखाय गेवलां`,
    alertSummary:
      'Trekking viewpoints, mountain cascades, and tea garden vistas are open. Slip-resistant footwear advised around waterfall stones during rainy transitions.',
    alertSummaryAs:
      'ট্ৰেকিং স্থান, পাহাৰীয়া জলপ্ৰপাত আৰু চাহ বাগিচাৰ সৌন্দৰ্য মুকলি। পাথুৰীয়া জলপ্ৰপাতৰ কাষত খোজ কঢ়াৰ বাবে উপযুক্ত জোতা ব্যৱহাৰ কৰক।',
    alertSummaryHi:
      'ट्रेकिंग व्यूप्वाइंट एवं झरने खुले हैं। पत्थरों पर फिसलने से बचने के लिए उपयुक्त जूते पहनें।',
    alertSummaryBrx:
      'हाजो खना आरो खफ्लानाय दैमाफोर नायनो मोजां।',
    isWildlife: false,
    monsoonMonthsLabel: 'Scenic Hill & Lake Region',
    seasonWindow: 'October – May',
  };
}

/**
 * Maps WMO standard weather code to descriptive labels, icons, and safari gear advice.
 */
function parseWmoWeather(code: number, isDay: boolean, tempC: number) {
  let conditionLabel = 'Clear Sky';
  let conditionLabelAs = 'পৰিষ্কাৰ আকাশ';
  let conditionLabelHi = 'साफ आसमान';
  let conditionLabelBrx = 'साखोन-सिखोन अखाफोर';
  let iconName: WeatherData['iconName'] = isDay ? 'sun' : 'sun';
  let safariRecommendation = 'Optimal visibility for grassland wildlife spotting. Sun hat and camera zoom recommended.';
  let safariRecommendationAs = 'তৃণভূমিৰ বন্যপ্ৰাণী দৰ্শনৰ বাবে অনুকূল পৰিৱেশ। টুপী আৰু কেমেৰাৰ জুম লেন্স প্ৰয়োজনীয়।';
  let safariRecommendationHi = 'वन्यजीव देखने हेतु उत्तम दृश्यता। धूप का चश्मा और कैमरा साथ रखें।';
  let safariRecommendationBrx = 'जिब-जुना नायनो बयनिख्रुइ मोजां समाव।';

  if (code === 0) {
    conditionLabel = isDay ? 'Sunny & Clear' : 'Clear Starry Night';
    conditionLabelAs = isDay ? 'ৰৌদ্ৰোজ্জ্বল আৰু পৰিষ্কাৰ' : 'পৰিষ্কাৰ তৰাভৰা আকাশ';
    conditionLabelHi = isDay ? 'धूप खिली और साफ' : 'साफ तारों भरी रात';
    conditionLabelBrx = isDay ? 'सान्दुं गोनां' : 'साखोन-सिखोन हर';
    iconName = isDay ? 'sun' : 'sun';
  } else if (code === 1 || code === 2) {
    conditionLabel = 'Partly Cloudy';
    conditionLabelAs = 'আংশিক মেঘাচ্ছন্ন';
    conditionLabelHi = 'आंशिक रूप से बादल';
    conditionLabelBrx = 'खोमसि अखाफोर';
    iconName = 'cloud-sun';
    safariRecommendation = 'Comfortable mild temperature with occasional cloud shade. Ideal for all-day photography.';
    safariRecommendationAs = 'মনোৰম মৃদু তাপমাত্ৰা আৰু মেঘৰ ছাঁ। দিনজোৰা ফটোগ্ৰাফীৰ বাবে উপযুক্ত।';
    safariRecommendationHi = 'सुखद तापमान एवं फोटोग्राफी के लिए उत्तम मौसम।';
    safariRecommendationBrx = 'ফটোগ্ৰাফিনি थाखाय मोजां बोथोर।';
  } else if (code === 3) {
    conditionLabel = 'Overcast';
    conditionLabelAs = 'ডাৱৰীয়া আকাশ';
    conditionLabelHi = 'बादल छाए हुए';
    conditionLabelBrx = 'जोमफ्रा खोमसि';
    iconName = 'cloud';
    safariRecommendation = 'Soft diffused natural lighting. Cool breeze across the riverbanks and safari tracks.';
    safariRecommendationAs = 'কোমল প্ৰাকৃতিক পোহৰ আৰু নদীৰ পাৰত মলয়া বতাহ।';
    safariRecommendationHi = 'ठंडी हवा एवं वन्यजीव देखने हेतु शांत वातावरण।';
    safariRecommendationBrx = 'गोसो गोजोनथाव बार।';
  } else if (code === 45 || code === 48) {
    conditionLabel = 'Morning Mist / Fog';
    conditionLabelAs = 'পুৱাৰ কুঁৱলী';
    conditionLabelHi = 'सुबह का कोहरा';
    conditionLabelBrx = 'फुंनि कुहा';
    iconName = 'cloud-fog';
    safariRecommendation =
      'Characteristic atmospheric Brahmaputra morning mist. Light woolens or fleece essential for 07:30 AM elephant safari.';
    safariRecommendationAs =
      'ব্ৰহ্মপুত্ৰ উপত্যকাৰ স্বাভাৱিক পুৱাৰ কুঁৱলী। ০৭:৩০ বজাৰ হাতী আৰু জীপ চাফাৰীৰ বাবে গৰম কাপোৰ লগত ৰাখক।';
    safariRecommendationHi =
      'ब्रह्मपुत्र घाटी का सुबह का कोहरा। सुबह 07:30 की सफारी के लिए गर्म कपड़े आवश्यक हैं।';
    safariRecommendationBrx =
      'फुंनि कुहानि थाखाय गांसे गोजां सि गानना लानाया मोजां।';
  } else if (code >= 51 && code <= 67) {
    conditionLabel = 'Passing Rain Showers';
    conditionLabelAs = 'বৰষুণৰ সম্ভাৱনা';
    conditionLabelHi = 'हल्की वर्षा की संभावना';
    conditionLabelBrx = 'अखा हानयनि सम्भाबना';
    iconName = 'cloud-rain';
    safariRecommendation = 'Keep waterproof camera cover ready. Rain poncho recommended for open-top safari jeeps.';
    safariRecommendationAs = 'কেমেৰাৰ বাবে ৱাটাৰপ্ৰুফ কভাৰ ৰাখক। খোলা জীপৰ বাবে বৰষুণৰ পৰা ৰক্ষা পোৱা কাপোৰ উপযুক্ত।';
    safariRecommendationHi = 'वाटरप्रूफ रेनकोट रखें। खुली जीप के लिए छाता या पोंचो उपयोगी होगा।';
    safariRecommendationBrx = 'अखानिफ्राय रैखा मोननो रेनकोट बाहाय।';
  } else if (code >= 80 && code <= 99) {
    conditionLabel = 'Thunderstorm Alert';
    conditionLabelAs = 'বজ্ৰপাত আৰু ধুমুহা সতৰ্কবাণী';
    conditionLabelHi = 'गरज के साथ वर्षा चेतावनी';
    conditionLabelBrx = 'अखा-सान्दुं सांग्रांथि';
    iconName = 'cloud-lightning';
    safariRecommendation = 'Temporary delay possible on river ferries and deep forest tracks. Check range station notice.';
    safariRecommendationAs = 'নদী ফেৰী আৰু বনাঞ্চলৰ পথত সাময়িক পলম হ’ব পাৰে। ৰেঞ্জ ষ্টেচনৰ জাননী পৰীক্ষা কৰক।';
    safariRecommendationHi = 'फेरी और सफारी में अस्थायी देरी संभव। आधिकारिक नोटिस देखें।';
    safariRecommendationBrx = "थासारि मोजां जायासिम नेथ'।";
  }

  // Adjust gear tip for temperature
  if (tempC < 16) {
    safariRecommendation += ' (Cool temperatures: pack a light jacket).';
    safariRecommendationAs += ' (শীতল বতৰ: পাতল জেকেট লগত ৰাখক)।';
    safariRecommendationHi += ' (ठंडा मौसम: हल्का जैकेट साथ रखें)।';
  }

  return {
    conditionLabel,
    conditionLabelAs,
    conditionLabelHi,
    conditionLabelBrx,
    iconName,
    safariRecommendation,
    safariRecommendationAs,
    safariRecommendationHi,
    safariRecommendationBrx,
  };
}

/**
 * Generates realistic climatological offline weather estimate for Assam
 * when the visitor is in a remote forest without mobile signal or offline.
 */
export function getOfflineSeasonalWeather(
  _lat: number,
  _lng: number,
  _locality?: string,
  month: number = new Date().getMonth()
): WeatherData {
  const currentHour = new Date().getHours();
  const isDay = currentHour >= 6 && currentHour < 18;

  // Seasonal Assam temperatures (Celsius)
  let baseTemp = 24;
  let humidity = 68;
  let code = 0;

  if (month >= 10 || month <= 1) {
    // Winter (Nov - Feb): 16 - 25 C
    baseTemp = isDay ? 24 : 17;
    humidity = 66;
    code = currentHour < 9 ? 45 : 0; // Morning fog or clear
  } else if (month >= 2 && month <= 4) {
    // Spring (Mar - May): 22 - 31 C
    baseTemp = isDay ? 29 : 21;
    humidity = 64;
    code = 1;
  } else if (month >= 5 && month <= 8) {
    // Monsoon (Jun - Sep): 26 - 33 C
    baseTemp = isDay ? 31 : 26;
    humidity = 84;
    code = 61; // Rain showers
  } else {
    // Autumn (Oct): 23 - 28 C
    baseTemp = isDay ? 27 : 21;
    humidity = 72;
    code = 1;
  }

  const parsed = parseWmoWeather(code, isDay, baseTemp);

  return {
    temperature: baseTemp,
    apparentTemperature: baseTemp + 1,
    humidity,
    windSpeed: 7,
    weatherCode: code,
    conditionLabel: parsed.conditionLabel,
    conditionLabelAs: parsed.conditionLabelAs,
    conditionLabelHi: parsed.conditionLabelHi,
    conditionLabelBrx: parsed.conditionLabelBrx,
    iconName: parsed.iconName,
    isDay,
    isLive: false,
    lastUpdated: 'Offline Weather',
    safariRecommendation: parsed.safariRecommendation,
    safariRecommendationAs: parsed.safariRecommendationAs,
    safariRecommendationHi: parsed.safariRecommendationHi,
    safariRecommendationBrx: parsed.safariRecommendationBrx,
  };
}

/**
 * Fetches real-time weather from Open-Meteo with caching & offline resilience.
 */
export async function fetchDestinationWeather(
  lat: number | null,
  lng: number | null,
  locality?: string
): Promise<WeatherData> {
  // Use central Assam coordinates if destination has no GPS
  const targetLat = lat !== null && !isNaN(lat) ? lat : 26.5775;
  const targetLng = lng !== null && !isNaN(lng) ? lng : 93.1711;

  const cacheKey = `axom_wx_${targetLat.toFixed(2)}_${targetLng.toFixed(2)}`;

  // 1. Check in-memory / sessionStorage cache (< 20 mins)
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const cachedRaw = sessionStorage.getItem(cacheKey);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (cached && Date.now() - cached.timestamp < 20 * 60 * 1000) {
          return cached.data as WeatherData;
        }
      }
    }
  } catch {
    // Ignore storage errors
  }

  // 2. Fetch live satellite forecast from Open-Meteo
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${targetLat}&longitude=${targetLng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=Asia%2FKolkata`;
    
    // Quick 3.5s timeout for snappy mobile response
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = (await res.json()) as { current?: any };
      const current = data?.current;
      if (current) {
        const temp = Math.round(current.temperature_2m);
        const apparent = Math.round(current.apparent_temperature);
        const humidity = Math.round(current.relative_humidity_2m);
        const wind = Math.round(current.wind_speed_10m);
        const code = current.weather_code ?? 0;
        const isDay = current.is_day === 1;

        const parsed = parseWmoWeather(code, isDay, temp);

        const weatherResult: WeatherData = {
          temperature: temp,
          apparentTemperature: apparent,
          humidity,
          windSpeed: wind,
          weatherCode: code,
          conditionLabel: parsed.conditionLabel,
          conditionLabelAs: parsed.conditionLabelAs,
          conditionLabelHi: parsed.conditionLabelHi,
          conditionLabelBrx: parsed.conditionLabelBrx,
          iconName: parsed.iconName,
          isDay,
          isLive: true,
          lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          safariRecommendation: parsed.safariRecommendation,
          safariRecommendationAs: parsed.safariRecommendationAs,
          safariRecommendationHi: parsed.safariRecommendationHi,
          safariRecommendationBrx: parsed.safariRecommendationBrx,
        };

        // Cache result
        try {
          if (typeof window !== 'undefined' && window.sessionStorage) {
            sessionStorage.setItem(
              cacheKey,
              JSON.stringify({ timestamp: Date.now(), data: weatherResult })
            );
          }
        } catch {
          // ignore cache error
        }

        return weatherResult;
      }
    }
  } catch {
    // Network failed or offline - fall back cleanly
  }

  // 3. Fallback to seasonal climate estimate
  return getOfflineSeasonalWeather(targetLat, targetLng, locality);
}
