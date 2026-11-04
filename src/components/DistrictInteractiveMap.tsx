import { getAssetUrl } from '../utils/assetHelper';
import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Compass,
  Navigation,
  ExternalLink,
  Layers,
  Sparkles,
  Landmark,
  Waves,
  CheckCircle2,
  X,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  DISTRICT_MAP_RECORDS,
  DistrictPlaceItem,
  DistrictMapRecord
} from '../data/district-maps-data';

interface DistrictInteractiveMapProps {
  slug: string;
}

const MAP_I18N = {
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

export const DistrictInteractiveMap: React.FC<DistrictInteractiveMapProps> = ({ slug }) => {
  const { language } = useLanguage();
  const m = MAP_I18N[language] || MAP_I18N.en;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePlace, setActivePlace] = useState<DistrictPlaceItem | null>(null);
  const [hoveredPlace, setHoveredPlace] = useState<DistrictPlaceItem | null>(null);
  const [showRivers, setShowRivers] = useState<boolean>(true);
  const [showHQ, setShowHQ] = useState<boolean>(true);

  // Retrieve compiled GIS record for this district
  const districtData: DistrictMapRecord | undefined = useMemo(() => {
    return DISTRICT_MAP_RECORDS[slug.toLowerCase()];
  }, [slug]);

  if (!districtData) {
    return null;
  }

  // Filter places by category
  const filteredPlaces = useMemo(() => {
    if (selectedCategory === 'all') return districtData.famousPlaces;
    if (selectedCategory === 'heritage') {
      return districtData.famousPlaces.filter(
        (p) => p.category.includes('heritage') || p.category.includes('historic')
      );
    }
    if (selectedCategory === 'spiritual') {
      return districtData.famousPlaces.filter(
        (p) => p.category.includes('temple') || p.category.includes('spiritual')
      );
    }
    if (selectedCategory === 'nature') {
      return districtData.famousPlaces.filter(
        (p) => p.category.includes('nature') || p.category.includes('wildlife') || p.category.includes('botanical')
      );
    }
    return districtData.famousPlaces;
  }, [districtData, selectedCategory]);

  // Current focal place (either hovered or clicked)
  const currentFocus = hoveredPlace || activePlace;

  // Smart Collision-Free Labeling Algorithm:
  // Prevents text overlapping ("glits") when multiple destinations cluster together
  const visibleLabelIds = useMemo(() => {
    const visibleSet = new Set<string>();
    const labeledPoints: { id: string; x: number; y: number }[] = [];
    const MIN_LABEL_CLEARANCE = 60; // minimum pixel distance between static labels

    // If a place is hovered or selected, prioritize its label first
    if (currentFocus) {
      visibleSet.add(currentFocus.id);
      labeledPoints.push({ id: currentFocus.id, x: currentFocus.x, y: currentFocus.y });
    }

    // Add labels for places that maintain clearance
    for (const place of filteredPlaces) {
      if (visibleSet.has(place.id)) continue;

      const collides = labeledPoints.some((lp) => {
        const dx = place.x - lp.x;
        const dy = place.y - lp.y;
        return Math.hypot(dx, dy) < MIN_LABEL_CLEARANCE;
      });

      if (!collides) {
        visibleSet.add(place.id);
        labeledPoints.push({ id: place.id, x: place.x, y: place.y });
      }
    }

    return visibleSet;
  }, [filteredPlaces, currentFocus]);

  const handleScrollToAttraction = (placeSlug?: string) => {
    if (!placeSlug) return;
    const el = document.getElementById(placeSlug) || document.getElementById(`dest-${placeSlug}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlight-pulse-card');
      setTimeout(() => el.classList.remove('highlight-pulse-card'), 2200);
    }
  };

  const openDistrictInGoogleMaps = () => {
    const query = encodeURIComponent(`${districtData.name} District Assam`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  // Category pin color generator
  const getPinColor = (category: string, isSelected: boolean) => {
    if (isSelected) return '#DC2626';
    if (category.includes('wildlife') || category.includes('nature') || category.includes('botanical')) return '#059669';
    if (category.includes('temple') || category.includes('spiritual')) return '#7C3AED';
    if (category.includes('festival') || category.includes('cultural')) return '#2563EB';
    return '#D97706';
  };

  // Truncate long place labels on canvas to avoid crowding
  const formatMapLabel = (name: string) => {
    if (name.length <= 22) return name;
    return name.slice(0, 20) + '…';
  };

  return (
    <div className="district-explorer-card">
      {/* 1. Header Toolbar */}
      <div className="district-explorer-header">
        <div className="district-explorer-titles">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="district-explorer-badge">
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
          </button>
        </div>
      </div>

      {/* 2. Interactive Filter Chips */}
      <div className="district-explorer-filters-bar">
        <div className="district-explorer-chips">
          <button
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
          </button>
        </div>

        {/* Visibility Toggles */}
        <div className="district-layer-toggles">
          <label className="district-toggle-label">
            <input
              type="checkbox"
              checked={showRivers}
              onChange={(e) => setShowRivers(e.target.checked)}
            />
            <span>{m.toggleRivers}</span>
          </label>
          <label className="district-toggle-label">
            <input
              type="checkbox"
              checked={showHQ}
              onChange={(e) => setShowHQ(e.target.checked)}
            />
            <span>{m.toggleHQ}</span>
          </label>
        </div>
      </div>

      {/* 3. SVG Map Vector Canvas with Snug Viewport and Living Water Animation */}
      <div className="district-map-viewport-container">
        <svg
          viewBox="0 0 800 500"
          className="district-vector-svg"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${districtData.name} District Interactive Map`}
        >
          <defs>
            {/* Topographic Landmass Gradients */}
            <linearGradient id="districtLandGradWarm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF2F2" />
              <stop offset="50%" stopColor="#FFF1F2" />
              <stop offset="100%" stopColor="#FEE2E2" />
            </linearGradient>

            <linearGradient id="districtRiverGradLive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <filter id="vectorDropShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.12" />
            </filter>

            <filter id="pinGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#DC2626" floodOpacity="0.4" />
            </filter>

            <filter id="riverGlowDetail" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#0284C7" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Graticule / Coordinate Grid Lines (Topographic feel) */}
          <g id="graticule-grid" opacity="0.4" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 6">
            <line x1="100" y1="0" x2="100" y2="500" />
            <line x1="250" y1="0" x2="250" y2="500" />
            <line x1="400" y1="0" x2="400" y2="500" />
            <line x1="550" y1="0" x2="550" y2="500" />
            <line x1="700" y1="0" x2="700" y2="500" />

            <line x1="0" y1="100" x2="800" y2="100" />
            <line x1="0" y1="200" x2="800" y2="200" />
            <line x1="0" y1="300" x2="800" y2="300" />
            <line x1="0" y1="400" x2="800" y2="400" />
          </g>

          {/* Neighboring Regional Context (Survey of India / Atlas Orientation) */}
          {districtData.neighbors && (
            <g id="neighboring-context" pointerEvents="none" opacity="0.75" fontSize="8.5" fontWeight="800" fill="#94A3B8" letterSpacing="0.08em">
              <text x="400" y="24" textAnchor="middle">{districtData.neighbors.north}</text>
              <text x="400" y="488" textAnchor="middle">{districtData.neighbors.south}</text>
              <text x="18" y="250" textAnchor="start">{districtData.neighbors.west}</text>
              <text x="782" y="250" textAnchor="end">{districtData.neighbors.east}</text>
            </g>
          )}

          {/* Compass Rose (North Arrow in Top-Right) */}
          <g transform="translate(745, 55)" opacity="0.85">
            <circle cx="0" cy="0" r="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <polygon points="0,-14 5,0 0,-2 -5,0" fill="#DC2626" />
            <polygon points="0,14 5,0 0,2 -5,0" fill="#64748B" />
            <text x="0" y="-18" fontSize="10" fontWeight="900" fill="#DC2626" textAnchor="middle">N</text>
          </g>

          {/* Dynamic Geographic Scale Indicator (Bottom-Left) */}
          <g transform="translate(50, 465)" opacity="0.85">
            <rect x="0" y="-14" width="95" height="20" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="12" y1="-4" x2="83" y2="-4" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="12" y1="-8" x2="12" y2="0" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="47.5" y1="-6" x2="47.5" y2="-2" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="83" y1="-8" x2="83" y2="0" stroke="#0F172A" strokeWidth="1.5" />
            <text x="47.5" y="16" fontSize="8" fontWeight="800" fill="#475569" textAnchor="middle">
              Scale: ~{districtData.scaleKm || 15} km
            </text>
          </g>

          {/* District Official GIS Landmass Polygon (Fills canvas with snug padding) */}
          <path
            d={districtData.svgPath}
            fill="url(#districtLandGradWarm)"
            stroke="#DC2626"
            strokeWidth="2.6"
            strokeLinejoin="round"
            filter="url(#vectorDropShadow)"
            className="district-landmass-polygon"
          />

          {/* Inner Highlight Line */}
          <path
            d={districtData.svgPath}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.6"
          />

          {/* Living Water Rivers Layer with Smooth Curved Waves */}
          {showRivers && districtData.rivers.map((river, idx) => (
            <g key={`river-${idx}`} id={`river-${idx}`} pointerEvents="none">
              {/* Outer river stream glow */}
              <path
                d={river.svgPath}
                fill="none"
                stroke="url(#districtRiverGradLive)"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#riverGlowDetail)"
                opacity="0.9"
              />
              {/* Central living current flow animation */}
              <path
                d={river.svgPath}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="12 10"
                className="district-river-current"
                opacity="0.9"
              />
              {/* River Name Watermark */}
              <text
                x={river.labelX}
                y={river.labelY}
                fill="#0284C7"
                stroke="#FFFFFF"
                strokeWidth="2.8"
                paintOrder="stroke fill"
                strokeLinejoin="round"
                fontSize="9"
                fontWeight="800"
                letterSpacing="0.8"
                textAnchor="middle"
              >
                {river.name} ({river.name_as})
              </text>
            </g>
          ))}

          {/* District Headquarters Pin Marker */}
          {showHQ && districtData.headquarters && (
            <g
              transform={`translate(${districtData.headquarters.x}, ${districtData.headquarters.y})`}
              className="district-hq-pin-group"
              cursor="pointer"
              onClick={() => {
                setActivePlace({
                  id: 'hq-marker',
                  name: `${districtData.headquarters.name} (District Headquarters)`,
                  name_as: `${districtData.headquarters.name_as} (জিলা প্ৰশাসনিক সদৰ)`,
                  category: 'headquarters',
                  categoryLabel: 'Administrative Capital',
                  lat: districtData.headquarters.lat,
                  lng: districtData.headquarters.lng,
                  x: districtData.headquarters.x,
                  y: districtData.headquarters.y,
                  shortDescription: `Official administrative headquarters and Deputy Commissioner secretariat of ${districtData.name} district.`,
                  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${districtData.headquarters.lat},${districtData.headquarters.lng}`,
                  googleDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${districtData.headquarters.lat},${districtData.headquarters.lng}`,
                });
              }}
            >
              {/* Pulsing radar waves */}
              <circle cx="0" cy="0" r="10" fill="#DC2626" opacity="0.25" className="hq-pin-pulse" />
              <circle cx="0" cy="0" r="5.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.8" />
              {/* Pin Halo Label */}
              <text
                x="0"
                y="-10"
                textAnchor="middle"
                fill="#991B1B"
                stroke="#FFFFFF"
                strokeWidth="2.8"
                strokeLinejoin="round"
                paintOrder="stroke fill"
                fontSize="9.5"
                fontWeight="900"
              >
                🏛️ {districtData.headquarters.name} (HQ)
              </text>
            </g>
          )}

          {/* Base Layer: All standard places (excluding current focal place) */}
          <g id="regular-places-layer">
            {filteredPlaces
              .filter((p) => p.id !== currentFocus?.id)
              .map((place) => {
                const pinColor = getPinColor(place.category, false);
                const hasLabel = visibleLabelIds.has(place.id);
                // When another place is active, dim sibling labels to guarantee zero clash
                const labelOpacity = currentFocus ? 0.35 : 0.95;

                return (
                  <g
                    key={`place-${place.id}`}
                    transform={`translate(${place.x}, ${place.y})`}
                    className="district-place-pin-marker"
                    cursor="pointer"
                    onClick={() => setActivePlace(place)}
                    onMouseEnter={() => setHoveredPlace(place)}
                    onMouseLeave={() => setHoveredPlace(null)}
                  >
                    {/* Radar ping */}
                    <circle cx="0" cy="-10" r="9" fill={pinColor} opacity="0.18" className="pin-radar-ping" />

                    {/* Sleek Pin Marker */}
                    <path
                      d="M 0,-20 C -6,-20 -6,-8 0,0 C 6,-8 6,-20 0,-20 Z"
                      fill={pinColor}
                      stroke="#FFFFFF"
                      strokeWidth="1.6"
                      filter="url(#pinGlow)"
                    />
                    <circle cx="0" cy="-12" r="2.8" fill="#FFFFFF" />

                    {/* Non-overlapping static text label with cartographic halo */}
                    {hasLabel && (
                      <text
                        x="0"
                        y="14"
                        textAnchor="middle"
                        fill="#0F172A"
                        stroke="#FFFFFF"
                        strokeWidth="2.8"
                        strokeLinejoin="round"
                        paintOrder="stroke fill"
                        fontSize="8.8"
                        fontWeight="700"
                        letterSpacing="0.01em"
                        opacity={labelOpacity}
                      >
                        {formatMapLabel(place.name)}
                      </text>
                    )}
                  </g>
                );
              })}
          </g>

          {/* Top Layer: Active / Hovered Focal Place (Guaranteed highest SVG z-index) */}
          {currentFocus && (
            <g
              id="active-place-top-layer"
              transform={`translate(${currentFocus.x}, ${currentFocus.y})`}
              className="district-place-pin-marker active"
              cursor="pointer"
              onClick={() => setActivePlace(currentFocus)}
            >
              {/* Pulsing Beacon Rings */}
              <circle cx="0" cy="-10" r="18" fill="#DC2626" opacity="0.3" className="pin-pulse-wave" />
              <circle cx="0" cy="-10" r="28" fill="#DC2626" opacity="0.12" className="pin-pulse-wave" />

              {/* Elevated Drop Pin */}
              <path
                d="M 0,-24 C -8,-24 -8,-10 0,0 C 8,-10 8,-24 0,-24 Z"
                fill="#DC2626"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                filter="url(#pinGlow)"
              />
              <circle cx="0" cy="-15" r="3.5" fill="#FFFFFF" />

              {/* Smart Floating Tooltip Capsule Above Pin (Zero collision) */}
              {(() => {
                const textWidth = Math.max(120, Math.min(280, currentFocus.name.length * 7.2 + 32));
                return (
                  <g transform="translate(0, -32)" className="active-place-tooltip-capsule">
                    {/* Dark obsidian glass capsule */}
                    <rect
                      x={-textWidth / 2}
                      y="-16"
                      width={textWidth}
                      height="24"
                      rx="12"
                      fill="#0F172A"
                      stroke="#EF4444"
                      strokeWidth="1.8"
                      filter="url(#vectorDropShadow)"
                    />
                    {/* Downward indicator triangle notch */}
                    <polygon points="-6,8 6,8 0,14" fill="#0F172A" />
                    {/* High-contrast crisp white text */}
                    <text
                      x="0"
                      y="1"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="9.5"
                      fontWeight="800"
                      letterSpacing="0.01em"
                    >
                      {currentFocus.name}
                    </text>
                  </g>
                );
              })()}
            </g>
          )}
        </svg>
      </div>

      {/* 4. Quick-Select Locations Strip (Browse and jump to any place) */}
      <div className="district-places-quick-strip">
        <div className="district-quick-strip-label">
          <Sparkles size={13} color="#DC2626" />
          <span>{language === 'as' ? 'প্ৰসিদ্ধ স্থানসমূহ:' : 'Explore Locations:'}</span>
        </div>
        <div className="district-quick-strip-scroll">
          {filteredPlaces.map((place) => {
            const isSelected = activePlace?.id === place.id;
            return (
              <button
                key={`chip-${place.id}`}
                type="button"
                className={`district-place-pill-chip ${isSelected ? 'active' : ''}`}
                onClick={() => setActivePlace(isSelected ? null : place)}
                onMouseEnter={() => setHoveredPlace(place)}
                onMouseLeave={() => setHoveredPlace(null)}
                title={`${place.name} (${place.categoryLabel})`}
              >
                <span
                  className="place-pill-dot"
                  style={{ backgroundColor: getPinColor(place.category, isSelected) }}
                />
                <span>{place.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Docked Location Inspector Panel (Placed cleanly below map — NEVER occludes map pins) */}
      {activePlace && (
        <div className="district-docked-inspector-card">
          <button
            type="button"
            className="district-inspector-close-btn"
            onClick={() => setActivePlace(null)}
            aria-label="Close details"
          >
            <X size={15} />
          </button>

          {/* Left: Place Image */}
          {activePlace.imageUrl ? (
            <div className="district-inspector-thumb-wrapper">
              <img
                src={getAssetUrl(activePlace.imageUrl)}
                alt={activePlace.name}
                className="district-inspector-thumb"
                loading="lazy"
              />
              <span className="district-inspector-cat-tag">
                {activePlace.categoryLabel}
              </span>
            </div>
          ) : (
            <div className="district-inspector-thumb-placeholder">
              <Landmark size={36} color="#DC2626" />
              <span className="district-inspector-cat-tag mt-2">
                {activePlace.categoryLabel}
              </span>
            </div>
          )}

          {/* Right: Rich Details and Directions */}
          <div className="district-inspector-content">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="district-inspector-cat-tag">
                {activePlace.categoryLabel}
              </span>
              <span className="district-inspector-coords">
                <MapPin size={12} color="#DC2626" />
                <span>{activePlace.lat.toFixed(4)}° N, {activePlace.lng.toFixed(4)}° E</span>
              </span>
            </div>

            <h3 className="district-inspector-name">{activePlace.name}</h3>
            <div className="district-inspector-name-as">{activePlace.name_as}</div>

            <p className="district-inspector-desc">{activePlace.shortDescription}</p>

            <div className="district-inspector-btns">
              {activePlace.slug && (
                <button
                  type="button"
                  onClick={() => handleScrollToAttraction(activePlace.slug)}
                  className="district-inspect-scroll-btn"
                >
                  <span>{m.viewOnPage}</span>
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
          </div>

          <div className="district-waterways-list">
            {districtData.rivers.map((r, i) => (
              <div key={i} className="district-waterway-badge" title={r.significance}>
                <span className="water-drop-icon">💧</span>
                <strong>{r.name}</strong>
                <span className="waterway-name-as">({r.name_as})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
