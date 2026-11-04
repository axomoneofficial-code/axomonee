import re

file_path = r'e:\New folder\axom-one\src\components\DistrictInteractiveMap.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    code = f.read()

# Add I18N dictionary before component
i18n_code = '''const MAP_I18N = {
  en: {
    atlasBadge: 'Geographic Atlas & Heritage Map',
    verifiedLocations: 'Verified Locations',
    rivers: 'Rivers',
    mapTitle: (name: string, _as: string) => `${name} Geographic Map & Famous Places`,
    mapSubtitle: (name: string) => `Inspect verified heritage landmarks, ancient temples, and natural waterways across ${name} with precise GPS coordinates.`,
    openGoogleMaps: 'Open in Google Maps',
    allPlaces: 'All Places',
    heritage: 'Heritage & History',
    wildlife: 'Wildlife & Nature',
    spiritual: 'Temples & Spiritual',
    toggleRivers: 'Rivers',
    toggleHQ: 'Headquarters',
    viewOnPage: 'View on Page',
    directions: 'Directions (Google Maps)',
    keyRivers: 'Key Rivers of District:',
  },
  as: {
    atlasBadge: 'ভৌগোলিক মানচিত্ৰ আৰু ঐতিহ্য ক্ষেত্ৰ',
    verifiedLocations: 'প্ৰসিদ্ধ স্থান',
    rivers: 'নদী',
    mapTitle: (_name: string, name_as: string) => `${name_as}ৰ ভৌগোলিক মানচিত্ৰ আৰু ঐতিহ্য ক্ষেত্ৰ`,
    mapSubtitle: (_name: string) => 'প্ৰাকৃতিক নদী প্ৰণালী আৰু সঠিক ভৌগোলিক অৱস্থান সহ জিলাখনৰ নিৰ্বাচিত ঐতিহাসিক আৰু সাংস্কৃতিক স্থানসমূহ পৰিদৰ্শন কৰক।',
    openGoogleMaps: 'গুগল মেপত খোলক',
    allPlaces: 'সকলো স্থান',
    heritage: 'ঐতিহাসিক আৰু ঐতিহ্য',
    wildlife: 'প্ৰকৃতি আৰু অভয়াৰণ্য',
    spiritual: 'মন্দিৰ আৰু আধ্যাত্মিক',
    toggleRivers: 'নদীসমূহ',
    toggleHQ: 'জিলা সদৰ',
    viewOnPage: 'বিৱৰণ চাওক',
    directions: 'পথনিৰ্দেশনা (গুগল মেপ)',
    keyRivers: 'জিলাখনৰ প্ৰধান নদীসমূহ:',
  },
  hi: {
    atlasBadge: 'भौगोलिक एटलस एवं विरासत मानचित्र',
    verifiedLocations: 'सत्यापित स्थल',
    rivers: 'नदियाँ',
    mapTitle: (name: string, _as: string) => `${name} का भौगोलिक मानचित्र एवं दर्शनीय स्थल`,
    mapSubtitle: (name: string) => `सटीक जीपीएस निर्देशांकों के साथ ${name} जिले के ऐतिहासिक स्थलों, प्राचीन मंदिरों और प्राकृतिक नदियों का अवलोकन करें।`,
    openGoogleMaps: 'गूगल मैप्स में खोलें',
    allPlaces: 'सभी स्थान',
    heritage: 'विरासत एवं इतिहास',
    wildlife: 'वन्यजीव एवं प्रकृति',
    spiritual: 'मंदिर एवं आध्यात्मिक',
    toggleRivers: 'नदियाँ',
    toggleHQ: 'मुख्यालय',
    viewOnPage: 'पृष्ठ पर देखें',
    directions: 'दिशा-निर्देश (गूगल मैप्स)',
    keyRivers: 'जिले की मुख्य नदियाँ:',
  },
  brx: {
    atlasBadge: 'भुमखौरां एतलास आरो हारिमुआरि मानचित्रा',
    verifiedLocations: 'गोनोखो गोनां जायगा',
    rivers: 'दैसा',
    mapTitle: (name: string, _as: string) => `${name}नि भुमखौरां मानचित्रा आरो नुथाब जायगा`,
    mapSubtitle: (name: string) => `${name} जिल्लानि गोथार मन्दिरफोर, दैसा आरो हारिमुआरि जायगाफोरखौ थि जिपिएसजों नाय।`,
    openGoogleMaps: 'गुगल मेपाव खुलि',
    allPlaces: 'गासैबो जायगा',
    heritage: 'हारिमु आरो जारिमिन',
    wildlife: 'जिब-जुना आरो मिथिंगा',
    spiritual: 'मन्दिर आरो गोथार जायगा',
    toggleRivers: 'दैसाफोर',
    toggleHQ: 'हेडक्वार्टार',
    viewOnPage: 'बिलाइयाव नाय',
    directions: 'लामा दिन्थिनाय (गुगल मेप)',
    keyRivers: 'जिल्लानि गाहाय दैसाफोर:',
  },
};
'''

# Insert MAP_I18N before export const DistrictInteractiveMap
code = code.replace(
    'export const DistrictInteractiveMap: React.FC<DistrictInteractiveMapProps> = ({ slug }) => {',
    i18n_code + '\nexport const DistrictInteractiveMap: React.FC<DistrictInteractiveMapProps> = ({ slug }) => {'
)

# Use m = MAP_I18N[language] || MAP_I18N.en inside component
code = code.replace(
    '  const { language } = useLanguage();',
    '  const { language } = useLanguage();\n  const m = MAP_I18N[language] || MAP_I18N.en;',
    1
)

# Replace Header badges and titles
old_header_part = '''            <span className="district-explorer-badge">
              <Compass size={13} />
              <span>{language === 'as' ? 'ভৌগোলিক মানচিত্ৰ' : 'Geographic Atlas & Heritage Map'}</span>
            </span>
            <span className="district-explorer-stat-pill">
              <CheckCircle2 size={13} color="#059669" />
              <span>{districtData.famousPlaces.length} {language === 'as' ? 'প্ৰসিদ্ধ স্থান' : 'Verified Locations'}</span>
            </span>
            <span className="district-explorer-stat-pill">
              <Waves size={13} color="#0284C7" />
              <span>{districtData.rivers.length} {language === 'as' ? 'নদী' : 'Rivers'}</span>
            </span>
          </div>

          <h2 className="district-explorer-title">
            {language === 'as'
              ? `${districtData.name_as}ৰ ভৌগোলিক মানচিত্ৰ আৰু ঐতিহ্য ক্ষেত্ৰ`
              : `${districtData.name} Geographic Map & Famous Places`}
          </h2>
          <p className="district-explorer-subtitle">
            {language === 'as'
              ? `প্ৰাকৃতিক নদী প্ৰণালী আৰু সঠিক ভৌগোলিক অৱস্থান সহ জিলাখনৰ নিৰ্বাচিত ঐতিহাসিক আৰু সাংস্কৃতিক স্থানসমূহ পৰিদৰ্শন কৰক।`
              : `Inspect verified heritage landmarks, ancient temples, and natural waterways across ${districtData.name} with precise GPS coordinates.`}
          </p>
        </div>

        {/* Action Button: Safe Google Maps Directions Link */}
        <div className="district-explorer-actions">
          <button
            type="button"
            onClick={openDistrictInGoogleMaps}
            className="district-gmaps-link-btn"
            title="Open in Google Maps for real-time turn-by-turn driving navigation"
          >
            <Navigation size={14} />
            <span>{language === 'as' ? 'গুগল মেপত খোলক' : 'Open in Google Maps'}</span>
            <ExternalLink size={12} />
          </button>'''

new_header_part = '''            <span className="district-explorer-badge">
              <Compass size={13} />
              <span>{m.atlasBadge}</span>
            </span>
            <span className="district-explorer-stat-pill">
              <CheckCircle2 size={13} color="#059669" />
              <span>{districtData.famousPlaces.length} {m.verifiedLocations}</span>
            </span>
            <span className="district-explorer-stat-pill">
              <Waves size={13} color="#0284C7" />
              <span>{districtData.rivers.length} {m.rivers}</span>
            </span>
          </div>

          <h2 className="district-explorer-title">
            {m.mapTitle(districtData.name, districtData.name_as)}
          </h2>
          <p className="district-explorer-subtitle">
            {m.mapSubtitle(districtData.name)}
          </p>
        </div>

        {/* Action Button: Safe Google Maps Directions Link */}
        <div className="district-explorer-actions">
          <button
            type="button"
            onClick={openDistrictInGoogleMaps}
            className="district-gmaps-link-btn"
            title="Open in Google Maps for real-time turn-by-turn driving navigation"
          >
            <Navigation size={14} />
            <span>{m.openGoogleMaps}</span>
            <ExternalLink size={12} />
          </button>'''

assert old_header_part in code, 'old_header_part not found'
code = code.replace(old_header_part, new_header_part, 1)

# Replace filter chips
old_chips_part = '''          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <Layers size={13} />
            <span>{language === 'as' ? 'সকলো স্থান' : 'All Places'} ({districtData.famousPlaces.length})</span>
          </button>

          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'heritage' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('heritage')}
          >
            <Landmark size={13} />
            <span>{language === 'as' ? 'ঐতিহাসিক' : 'Heritage & History'}</span>
          </button>

          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'nature' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('nature')}
          >
            <Sparkles size={13} />
            <span>{language === 'as' ? 'প্ৰকৃতি আৰু অভয়াৰণ্য' : 'Wildlife & Nature'}</span>
          </button>

          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'spiritual' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('spiritual')}
          >
            <Landmark size={13} />
            <span>{language === 'as' ? 'মন্দিৰ আৰু আধ্যাত্মিক' : 'Temples & Spiritual'}</span>
          </button>'''

new_chips_part = '''          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <Layers size={13} />
            <span>{m.allPlaces} ({districtData.famousPlaces.length})</span>
          </button>

          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'heritage' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('heritage')}
          >
            <Landmark size={13} />
            <span>{m.heritage}</span>
          </button>

          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'nature' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('nature')}
          >
            <Sparkles size={13} />
            <span>{m.wildlife}</span>
          </button>

          <button
            type="button"
            className={`district-filter-chip ${selectedCategory === 'spiritual' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('spiritual')}
          >
            <Landmark size={13} />
            <span>{m.spiritual}</span>
          </button>'''

assert old_chips_part in code, 'old_chips_part not found'
code = code.replace(old_chips_part, new_chips_part, 1)

# Replace toggles
old_toggles_part = '''            <span>{language === 'as' ? 'নদীসমূহ' : 'Rivers'}</span>
          </label>
          <label className="district-toggle-label">
            <input
              type="checkbox"
              checked={showHQ}
              onChange={(e) => setShowHQ(e.target.checked)}
            />
            <span>{language === 'as' ? 'জিলা সদৰ' : 'Headquarters'}</span>'''

new_toggles_part = '''            <span>{m.toggleRivers}</span>
          </label>
          <label className="district-toggle-label">
            <input
              type="checkbox"
              checked={showHQ}
              onChange={(e) => setShowHQ(e.target.checked)}
            />
            <span>{m.toggleHQ}</span>'''

assert old_toggles_part in code, 'old_toggles_part not found'
code = code.replace(old_toggles_part, new_toggles_part, 1)

# Replace Inspector buttons & waterways label
old_popup_part = '''                  <span>{language === 'as' ? 'বিৱৰণ চাওক' : 'View on Page'}</span>
                  <ArrowRight size={13} />
                </button>
              )}

              <a
                href={activePlace.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="district-inspect-directions-btn"
              >
                <Navigation size={13} />
                <span>{language === 'as' ? 'পথনিৰ্দেশনা (Google Maps)' : 'Directions (Google Maps)'}</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. Hydrology & Famous Waterways Footer Pill Bar */}
      <div className="district-explorer-footer">
        <div className="district-waterways-row">
          <div className="district-waterways-label">
            <Waves size={14} color="#0284C7" />
            <span>{language === 'as' ? 'জিলাখনৰ উল্লেখযোগ্য নদীসমূহ:' : 'Key Rivers of District:'}</span>
          </div>'''

new_popup_part = '''                  <span>{m.viewOnPage}</span>
                  <ArrowRight size={13} />
                </button>
              )}

              <a
                href={activePlace.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="district-inspect-directions-btn"
              >
                <Navigation size={13} />
                <span>{m.directions}</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. Hydrology & Famous Waterways Footer Pill Bar */}
      <div className="district-explorer-footer">
        <div className="district-waterways-row">
          <div className="district-waterways-label">
            <Waves size={14} color="#0284C7" />
            <span>{m.keyRivers}</span>
          </div>'''

assert old_popup_part in code, 'old_popup_part not found'
code = code.replace(old_popup_part, new_popup_part, 1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(code)

print("SUCCESS: DistrictInteractiveMap.tsx updated with natural human languages!")
