import React, { useMemo } from 'react';
import { SEO } from '../components/SEO';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BeautyDestination } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { sanitizeExternalUrl } from '../utils/security';
import { DestinationImage } from '../components/DestinationImage';
import { AssamesePronounceButton } from '../components/AssamesePronounceButton';
import { DistrictInteractiveMap } from '../components/DistrictInteractiveMap';
import {
  MapPin,
  ChevronRight,
  ArrowLeft,
  Compass,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Building,
  ExternalLink,
  Info,
  Home,
  Camera,
} from 'lucide-react';

import districtsData from '../data/districts.json';
import tourismDestinations from '../data/tourism-destinations.json';
import directoryData from '../data/assam-directory.seed.json';

const DETAIL_I18N = {
  en: {
    home: 'Home',
    districtsOfAssam: 'Districts of Assam',
    allDistricts: 'All Districts',
    officialDistrictsBadge: '35 Official Districts',
    adminPortal: 'District Administration Portal',
    headquarters: 'Headquarters:',
    adminDivision: 'Administrative Division:',
    verifiedAttractions: 'Verified Attractions:',
    touristAttractionsTitle: 'Tourist Attractions & Heritage Spots',
    noDestinationsMsg: (name: string) => `No published tourist destinations currently indexed for ${name}. Contributed records undergo editorial verification before publication.`,
    higherEducationTitle: 'Higher Education & Research Institutes',
    noEducationMsg: (name: string) => `No higher education institutions currently indexed in the starter directory for ${name}.`,
    heritageTitle: 'Heritage Sites & Spiritual Shrines',
    noHeritageMsg: (name: string) => `Heritage and spiritual records for ${name} are currently undergoing editorial curation.`,
    publicServicesTitle: 'Public Services & Citizen Portals',
    officialPortalTag: 'Official Portal',
    adminOfficeTitle: (name: string) => `${name} District Administration`,
    adminOfficeDesc: 'Official portal of the District Commissionerate and district administrative departments.',
    detailsBtn: 'Details',
    viewDetailsAction: 'View Details',
    officialPortalAction: 'Official Portal',
    districtNotFound: 'District Not Found',
    districtNotFoundDesc: 'The district slug does not match any of the 35 recognized administrative districts of Assam.',
    goBack: 'Go Back',
    officialWebsite: 'Official Website',
    seeAllPictures: 'See All Pictures',
  },
  as: {
    home: 'গৃহ',
    districtsOfAssam: 'জিলাসমূহ',
    allDistricts: 'সকলো জিলা',
    officialDistrictsBadge: '৩৫ খন চৰকাৰী জিলা',
    adminPortal: 'জিলা প্ৰশাসন পৰ্টেল',
    headquarters: 'প্ৰশাসনিক সদৰ:',
    adminDivision: 'প্ৰশাসনিক মণ্ডল:',
    verifiedAttractions: 'পৰ্যটন স্থান:',
    touristAttractionsTitle: 'পৰ্যটন আৰু দৰ্শনীয় স্থানসমূহ',
    noDestinationsMsg: (name: string) => `${name} জিলাৰ বাবে কোনো পৰ্যটন স্থান এতিয়াও প্ৰকাশ হোৱা নাই। সকলো তথ্য সম্পাদকীয় পৰীক্ষাৰ অধীনত থাকে।`,
    higherEducationTitle: 'উচ্চ শিক্ষানুষ্ঠান আৰু বিশ্ববিদ্যালয়',
    noEducationMsg: (name: string) => `${name} জিলাৰ বাবে কোনো উচ্চ শিক্ষানুষ্ঠান এই প্ৰাৰম্ভিক পঞ্জীকাত অন্তৰ্ভুক্ত হোৱা নাই।`,
    heritageTitle: 'ঐতিহাসিক আৰু ধৰ্মীয় তীৰ্থস্থান',
    noHeritageMsg: (name: string) => `${name} জিলাৰ ঐতিহাসিক স্থানসমূহৰ সত্যাসত্য নিৰূপণ চলি আছে।`,
    publicServicesTitle: 'ৰাজহুৱা সেৱা আৰু চৰকাৰী পৰ্টেল',
    officialPortalTag: 'চৰকাৰী পৰ্টেল',
    adminOfficeTitle: (name: string) => `${name} জিলা প্ৰশাসন`,
    adminOfficeDesc: 'জিলা আয়ুক্ত কাৰ্যালয় আৰু প্ৰশাসনিক বিভাগসমূহৰ চৰকাৰী ডিজিটেল পৰ্টেল।',
    detailsBtn: 'বিৱৰণ',
    viewDetailsAction: 'সম্পূৰ্ণ তথ্য',
    officialPortalAction: 'পৰ্টেল',
    districtNotFound: 'জিলা বিচাৰি পোৱা নগ’ল',
    districtNotFoundDesc: 'অনুগ্ৰহ কৰি অসমৰ ৩৫ খন প্ৰশাসনিক জিলাৰ তালিকাৰ পৰা বাছনি কৰক।',
    goBack: 'উভতি যাওক',
    officialWebsite: 'চৰকাৰী ৱেবছাইট',
    seeAllPictures: 'সকলো ছবি চাওক',
  },
  hi: {
    home: 'होम',
    districtsOfAssam: 'असम के जिले',
    allDistricts: 'सभी जिले',
    officialDistrictsBadge: '३५ आधिकारिक जिले',
    adminPortal: 'जिला प्रशासन पोर्टल',
    headquarters: 'प्रशासनिक मुख्यालय:',
    adminDivision: 'प्रशासनिक प्रभाग:',
    verifiedAttractions: 'प्रमाणित स्थल:',
    touristAttractionsTitle: 'पर्यटन एवं दर्शनीय स्थल',
    noDestinationsMsg: (name: string) => `${name} जिले के लिए दर्शनीय स्थल वर्तमान में संपादकीय सत्यापन के अधीन हैं।`,
    higherEducationTitle: 'उच्च शिक्षा एवं शोध संस्थान',
    noEducationMsg: (name: string) => `${name} जिले के लिए उच्च शिक्षण संस्थान वर्तमान में सूचीबद्ध किए जा रहे हैं।`,
    heritageTitle: 'विरासत स्थल एवं आध्यात्मिक तीर्थ',
    noHeritageMsg: (name: string) => `${name} जिले के ऐतिहासिक एवं धार्मिक स्थल संपादकीय समीक्षा में हैं।`,
    publicServicesTitle: 'सार्वजनिक सेवाएं एवं नागरिक पोर्टल',
    officialPortalTag: 'आधिकारिक पोर्टल',
    adminOfficeTitle: (name: string) => `${name} जिला प्रशासन`,
    seeAllPictures: 'सभी तस्वीरें देखें',
    adminOfficeDesc: 'जिला उपायुक्त कार्यालय एवं प्रशासनिक विभागों का आधिकारिक डिजिटल पोर्टल।',
    detailsBtn: 'विवरण',
    viewDetailsAction: 'संपूर्ण विवरण',
    officialPortalAction: 'आधिकारिक पोर्टल',
    districtNotFound: 'जिला नहीं मिला',
    districtNotFoundDesc: 'कृपया असम के ३५ प्रशासनिक जिलों की सूची से चयन करें।',
    goBack: 'वापस जाएं',
    officialWebsite: 'आधिकारिक वेबसाइट',
  },
  brx: {
    home: 'गाहाय',
    districtsOfAssam: 'आसामनि जिल्लाफोर',
    allDistricts: 'गासैबो जिल्ला',
    officialDistrictsBadge: '३५ प्रसासनिक जिल्ला',
    adminPortal: 'जिल्ला प्रसासन पोर्टल',
    headquarters: 'प्रसासनिक हेडक्वार्टार:',
    adminDivision: 'प्रसासनिक मण्डल:',
    verifiedAttractions: 'नुथाब जायगा:',
    touristAttractionsTitle: 'दावबायनाय आरो नुथाब जायगाफोर',
    noDestinationsMsg: (name: string) => `${name} जिल्लानि दावबायनाय जायगाफोरनि खौरां थि खालामबाय थानाय जादों।`,
    higherEducationTitle: 'गोजौ सोलोंथाय आरो फरायसालिफोर',
    noEducationMsg: (name: string) => `${name} जिल्लानि गोजौ सोलोंथाय फरायसालिफोरखौ फारियाव होनाय जादों।`,
    heritageTitle: 'हारिमुआरि आरो गोथार मन्दिरफोर',
    noHeritageMsg: (name: string) => `${name} जिल्लानि जारिमिन आरो गोथार जायगाफोरखौ सामलायनाय जादों।`,
    publicServicesTitle: 'रायजोआरि सिबिथाय आरो पोर्टलफोर',
    officialPortalTag: 'सोरखारि पोर्टल',
    adminOfficeTitle: (name: string) => `${name} जिल्ला प्रसासन`,
    adminOfficeDesc: 'जिल्ला कमिसनार कार्यालय आरो प्रसासनिक बिफानफोरनि सोरखारि डिजिटल पोर्टल।',
    detailsBtn: 'खौरां',
    viewDetailsAction: 'गुवारै खौरां',
    officialPortalAction: 'सोरखारि पोर्टल',
    districtNotFound: 'जिल्ला मोनाखै',
    districtNotFoundDesc: 'अननानै आसामनि ३५ जिल्लानि फारिनिफ्राय सायख।',
    goBack: 'फिन थां',
    officialWebsite: 'सोरखारि वेबसाइट',
  },
};

export const DistrictDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const dt = DETAIL_I18N[language] || DETAIL_I18N.en;

  // Find district by slug
  const district = useMemo(() => {
    if (!slug) return null;
    return (districtsData as any[]).find(
      (d) => d.slug.toLowerCase() === slug.toLowerCase()
    ) || null;
  }, [slug]);

  // Verified attractions from tourism-destinations.json with guaranteed uniqueness
  const attractions = useMemo(() => {
    if (!district) return [];
    const distSlug = district.slug.toLowerCase();
    const distName = district.name.toLowerCase();
    const seen = new Set<string>();

    return (tourismDestinations as BeautyDestination[]).filter((dest) => {
      const uniqueKey = (dest.id || dest.slug || dest.name).toLowerCase().trim();
      if (seen.has(uniqueKey)) return false;

      const dSlug = (dest.district_slug || '').toLowerCase();
      const dName = (dest.district || '').toLowerCase();
      const matches = dSlug === distSlug || (dSlug === '' && dName.includes(distName));
      if (matches) {
        seen.add(uniqueKey);
        if (dest.slug) seen.add(dest.slug.toLowerCase().trim());
        return true;
      }
      return false;
    });
  }, [district]);

  // Educational institutions from directory
  const educationItems = useMemo(() => {
    if (!district) return [];
    const distName = district.name.toLowerCase();
    const distSlug = district.slug.toLowerCase();

    return (directoryData.records as any[]).filter((item) => {
      const iDist = (item.district || '').toLowerCase();
      const iSlug = (item.district_slug || '').toLowerCase();
      return (
        item.category === 'education' &&
        (iSlug === distSlug || iDist === distName || iDist.includes(distName) || iDist.includes(distSlug))
      );
    });
  }, [district]);

  // Heritage & Spiritual places from directory (deduplicated against attractions)
  const heritageItems = useMemo(() => {
    if (!district) return [];
    const distName = district.name.toLowerCase();
    const distSlug = district.slug.toLowerCase();

    // Slugs and normalized names already rendered in the Tourist Attractions section above
    const renderedAttractionSlugs = new Set(
      attractions.map((a) => (a.slug || '').toLowerCase().trim()).filter(Boolean)
    );
    const renderedAttractionNames = new Set(
      attractions.map((a) => a.name.toLowerCase().replace(/[^a-z0-9]/g, ''))
    );

    return (directoryData.records as any[]).filter((item) => {
      const iDist = (item.district || '').toLowerCase();
      const isHeritage =
        item.category === 'heritage' ||
        item.category === 'temples-spiritual' ||
        item.category === 'nature-wildlife';

      if (!isHeritage || (!iDist.includes(distName) && !iDist.includes(distSlug))) {
        return false;
      }

      // Check if already shown in the Tourist Attractions section above
      if (item.destinationSlug && renderedAttractionSlugs.has(item.destinationSlug.toLowerCase().trim())) {
        return false;
      }

      const normItemName = (item.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      for (const renderedName of renderedAttractionNames) {
        if (normItemName.includes(renderedName) || renderedName.includes(normItemName)) {
          return false;
        }
      }

      return true;
    });
  }, [district, attractions]);

  // Public services & Civic Portals from directory
  const publicServiceItems = useMemo(() => {
    if (!district) return [];
    const distName = district.name.toLowerCase();
    const distSlug = district.slug.toLowerCase();

    return (directoryData.records as any[]).filter((item) => {
      const iDist = (item.district || '').toLowerCase();
      return (
        item.category === 'public-services' &&
        (iDist.includes(distName) || iDist.includes(distSlug))
      );
    });
  }, [district]);

  if (!district) {
    return (
      <div className="dest-notfound-container">
        <div className="dest-notfound-card">
          <div className="gamusa-top-woven-strip" style={{ height: '14px', borderRadius: '4px' }} />
          <div className="p-8 text-center">
            <div className="dest-notfound-icon-wrap">
              <MapPin size={40} color="#DC2626" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 mt-4">
              {dt.districtNotFound}
            </h1>
            <p className="text-gray-600 mt-2 max-w-md mx-auto text-sm">
              {dt.districtNotFoundDesc}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <ArrowLeft size={16} />
                <span>{dt.goBack}</span>
              </button>
              <Link
                to="/districts"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <MapPin size={16} />
                <span>{dt.allDistricts}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Official portal link for district administration (e.g., https://kamrupmetro.assam.gov.in/)
  const officialAdminPortal = `https://${district.slug.replace(/-/g, '')}.assam.gov.in/`;

  return (
    <div className="district-detail-page-wrapper">
      {district && (
        <SEO
          title={`${district.name} District (${district.name_as}) – Complete Profile &amp; Directory`}
          description={`Complete administrative and heritage guide to ${district.name} district in Assam. Headquarters: ${district.headquarters}, Division: ${district.division}. Explore verified attractions, higher education, and official administration portals.`}
          canonicalPath={`/districts/${district.slug}`}
          keywords={`${district.name}, ${district.name_as}, Assam districts, ${district.headquarters}, ${district.division}`}
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Districts of Assam', path: '/districts' },
            { name: district.name, path: `/districts/${district.slug}` },
          ]}
        />
      )}
      {/* 1. Box-Type Breadcrumb Navigation Bar */}
      <div className="dest-breadcrumb-bar">
        <div className="dest-container">
          <div className="dest-breadcrumbs-box">
            <nav className="dest-breadcrumbs-trail" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb-link" title={dt.home}>
                <Home size={14} color="#64748B" />
                <span>{dt.home}</span>
              </Link>
              <ChevronRight size={13} className="breadcrumb-sep" />
              <Link to="/districts" className="breadcrumb-link">
                {dt.districtsOfAssam}
              </Link>
              <ChevronRight size={13} className="breadcrumb-sep" />
              <span className="breadcrumb-current-chip">{language === 'as' ? district.name_as : district.name}</span>
            </nav>

            <Link to="/districts" className="breadcrumb-back-link">
              <ArrowLeft size={13} />
              <span>{dt.allDistricts}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="dest-container py-4">
        {/* 2. District Header Hero */}
        <div className="district-banner-card">
          <div className="gamusa-top-woven-strip" style={{ height: '16px' }} />

          <div className="district-banner-body">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="district-division-badge">{district.division}</span>
                <span className="district-verified-badge">
                  <ShieldCheck size={13} />
                  <span>{dt.officialDistrictsBadge}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${district.name} Assam real pictures tourism heritage`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="district-photos-google-link"
                  title={`Search real photos of ${district.name} on Google Images`}
                >
                  <Camera size={13} />
                  <span>{(dt as any).seeAllPictures || 'See All Pictures'}</span>
                  <ExternalLink size={11} />
                </a>

                <a
                  href={sanitizeExternalUrl(officialAdminPortal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="district-portal-link"
                >
                  <span>{dt.adminPortal}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <h1 className="district-title-large">{language === 'as' ? district.name_as : district.name}</h1>
            <div className="district-title-as-large">
              <span>{language === 'as' ? district.name : district.name_as}</span>
              <AssamesePronounceButton
                text={district.name_as}
                englishTitle={district.name}
                size="md"
              />
            </div>

            <div className="district-quick-facts-row mt-4">
              <div className="fact-item">
                <MapPin size={14} color="#64748B" />
                <span className="fact-label">{dt.headquarters}</span>
                <strong className="fact-val">{district.headquarters}</strong>
              </div>
              <div className="fact-item">
                <Compass size={14} color="#2563EB" />
                <span className="fact-label">{dt.adminDivision}</span>
                <strong className="fact-val">{district.division}</strong>
              </div>
              <div className="fact-item">
                <ShieldCheck size={14} color="#059669" />
                <span className="fact-label">{dt.verifiedAttractions}</span>
                <strong className="fact-val text-emerald-700">{attractions.length}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 2.5. Dedicated District Geographic & Heritage Map */}
        <DistrictInteractiveMap slug={district.slug} />

        {/* 3. Section: Verified Tourism & Attractions */}
        <section className="district-section">
          <div className="district-section-header">
            <div className="section-title-wrap">
              <span className="section-icon-badge red">
                <Compass size={19} color="#DC2626" />
              </span>
              <h2 className="section-title-text">
                {dt.touristAttractionsTitle}
              </h2>
            </div>
            <span className="section-count-tag">{attractions.length}</span>
          </div>

          {attractions.length === 0 ? (
            <div className="district-category-empty">
              <Info size={20} color="#6B7280" />
              <p className="text-sm text-gray-600">
                {dt.noDestinationsMsg(district.name)}
              </p>
            </div>
          ) : (
            <div className="district-attractions-grid">
              {attractions.map((dest) => (
                <Link
                  key={dest.id}
                  to={`/destinations/${dest.slug}`}
                  className="dest-card-in-district"
                >
                  <div className="dest-card-media-wrap">
                    <DestinationImage
                      src={dest.imageUrl || dest.image || ''}
                      alt={dest.name}
                      className="dest-card-image"
                      category={dest.category}
                      attribution={dest.imageAttribution}
                    />
                    <span className="dest-category-tag-float">
                      {dest.category.replace(/-/g, ' ')}
                    </span>
                  </div>

                  <div className="dest-card-content-wrap">
                    <h3 className="dest-card-item-title">
                      {language === 'as' && dest.name_as ? dest.name_as : dest.name}
                    </h3>
                    {language === 'as' ? (
                      <div className="text-xs text-amber-800 font-semibold">{dest.name}</div>
                    ) : dest.name_as ? (
                      <div className="text-xs text-amber-800 font-semibold">{dest.name_as}</div>
                    ) : null}
                    <p className="dest-card-item-desc">
                      {(language === 'as' && (dest.tagline_as || dest.shortDescription_as || dest.description_as))
                        ? (dest.tagline_as || dest.shortDescription_as || dest.description_as)
                        : (dest.shortDescription || dest.tagline || dest.fullDescription?.slice(0, 110) + '...')}
                    </p>

                    <div className="dest-card-footer-row">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} color="#DC2626" />
                        <span>{dest.locality || district.name}</span>
                      </div>
                      <span className="dest-view-action">
                        <span>{dt.detailsBtn}</span>
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* 4. Section: Higher Education & Universities */}
        <section className="district-section">
          <div className="district-section-header">
            <div className="section-title-wrap">
              <span className="section-icon-badge blue">
                <GraduationCap size={19} color="#2563EB" />
              </span>
              <h2 className="section-title-text">
                {dt.higherEducationTitle}
              </h2>
            </div>
            <span className="section-count-tag">{educationItems.length}</span>
          </div>

          {educationItems.length === 0 ? (
            <div className="district-category-empty">
              <Info size={20} color="#6B7280" />
              <p className="text-sm text-gray-600">
                {dt.noEducationMsg(district.name)}
              </p>
            </div>
          ) : (
            <div className="district-institutions-grid">
              {educationItems.map((item) => (
                <div key={item.id} className="institution-card">
                  <div className="flex items-start justify-between gap-2">
                    <span className="institution-type-tag">{item.subcategory || 'University'}</span>
                    {item.website && (
                      <a
                        href={sanitizeExternalUrl(item.website)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="institution-website-link"
                        title="Visit official website"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <h3 className="institution-title">
                    {language === 'as' && item.name_as ? item.name_as : item.name}
                  </h3>
                  <div className="institution-locality">
                    <MapPin size={12} color="#6B7280" />
                    <span>{item.locality || district.name}</span>
                  </div>
                  <p className="institution-desc">
                    {(language === 'as' && item.description_as) ? item.description_as : item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 5. Section: Heritage & Spiritual Shrines */}
        <section className="district-section">
          <div className="district-section-header">
            <div className="section-title-wrap">
              <span className="section-icon-badge amber">
                <Landmark size={19} color="#D97706" />
              </span>
              <h2 className="section-title-text">
                {dt.heritageTitle}
              </h2>
            </div>
            <span className="section-count-tag">{heritageItems.length}</span>
          </div>

          {heritageItems.length === 0 ? (
            <div className="district-category-empty">
              <Info size={20} color="#6B7280" />
              <p className="text-sm text-gray-600">
                {dt.noHeritageMsg(district.name)}
              </p>
            </div>
          ) : (
            <div className="district-attractions-grid">
              {heritageItems.map((item) => {
                const targetLink = item.destinationSlug ? `/destinations/${item.destinationSlug}` : null;
                const cardContent = (
                  <>
                    <div className="dest-card-media-wrap">
                      <DestinationImage
                        src={item.imageUrl || item.image_url || ''}
                        alt={item.name}
                        className="dest-card-image"
                        category={item.category || 'heritage'}
                      />
                      <span className="dest-category-tag-float">
                        {item.subcategory || 'Heritage'}
                      </span>
                    </div>

                    <div className="dest-card-content-wrap">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="dest-card-item-title">
                          {language === 'as' && item.name_as ? item.name_as : item.name}
                        </h3>
                        {item.website && (
                          <a
                            href={sanitizeExternalUrl(item.website)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="institution-website-link"
                            title="Official Website"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>

                      <p className="dest-card-item-desc">
                        {(language === 'as' && item.description_as) ? item.description_as : item.description}
                      </p>

                      <div className="dest-card-footer-row">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={12} color="#DC2626" />
                          <span>{item.locality || district.name}</span>
                        </div>
                        {targetLink ? (
                          <span className="dest-view-action">
                            <span>{dt.viewDetailsAction}</span>
                            <ChevronRight size={14} />
                          </span>
                        ) : item.website ? (
                          <span className="dest-view-action" style={{ color: '#2563EB' }}>
                            <span>{dt.officialPortalAction}</span>
                            <ExternalLink size={12} />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </>
                );

                return targetLink ? (
                  <Link key={item.id} to={targetLink} className="dest-card-in-district">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={item.id} className="dest-card-in-district">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 6. Section: Public Services & Citizen Portals */}
        <section className="district-section">
          <div className="district-section-header">
            <div className="section-title-wrap">
              <span className="section-icon-badge green">
                <Building size={19} color="#059669" />
              </span>
              <h2 className="section-title-text">
                {dt.publicServicesTitle}
              </h2>
            </div>
            <span className="section-count-tag">
              {publicServiceItems.length + 1}
            </span>
          </div>

          <div className="district-institutions-grid">
            {/* Primary District Portal Card */}
            <div className="institution-card" style={{ borderColor: 'rgba(5, 150, 105, 0.4)' }}>
              <div className="flex items-start justify-between gap-2">
                <span className="institution-type-tag" style={{ background: '#ECFDF5', color: '#047857' }}>
                  {dt.officialPortalTag}
                </span>
                <a
                  href={sanitizeExternalUrl(officialAdminPortal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="institution-website-link"
                >
                  <ExternalLink size={13} />
                </a>
              </div>
              <h3 className="institution-title">{dt.adminOfficeTitle(district.name)}</h3>
              <div className="institution-locality">
                <MapPin size={12} color="#6B7280" />
                <span>{dt.headquarters} {district.headquarters}</span>
              </div>
              <p className="institution-desc">
                {dt.adminOfficeDesc}
              </p>
            </div>

            {publicServiceItems.map((item) => (
              <div key={item.id} className="institution-card">
                <div className="flex items-start justify-between gap-2">
                  <span className="institution-type-tag">{item.subcategory || 'Citizen Service'}</span>
                  {item.website && (
                    <a
                      href={sanitizeExternalUrl(item.website)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="institution-website-link"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
                <h3 className="institution-title">
                  {language === 'as' && item.name_as ? item.name_as : item.name}
                </h3>
                <div className="institution-locality">
                  <MapPin size={12} color="#6B7280" />
                  <span>{item.locality || district.name}</span>
                </div>
                <p className="institution-desc">
                  {(language === 'as' && item.description_as) ? item.description_as : item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};