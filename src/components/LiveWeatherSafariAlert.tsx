import React, { useState, useEffect } from 'react';
import { BeautyDestination } from '../types';
import { Language } from '../i18n/translations';
import {
  WeatherData,
  OperationalStatusInfo,
  getDestinationOperationalStatus,
  fetchDestinationWeather,
} from '../utils/weatherSafariService';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudFog,
  CloudLightning,
  Droplets,
  Wind,
  Thermometer,
  ShieldAlert,
  Compass,
  Radio,
  Clock,
  Sparkles,
  Info,
  Calendar,
} from 'lucide-react';

interface LiveWeatherSafariAlertProps {
  destination: BeautyDestination;
  language: Language;
}

export const LiveWeatherSafariAlert: React.FC<LiveWeatherSafariAlertProps> = ({
  destination,
  language,
}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loadingWeather, setLoadingWeather] = useState<boolean>(true);
  const [simulatedMonsoon, setSimulatedMonsoon] = useState<boolean>(false);

  // Fetch weather on mount or coordinate changes
  useEffect(() => {
    let isMounted = true;
    setLoadingWeather(true);

    fetchDestinationWeather(destination.latitude, destination.longitude, destination.locality)
      .then((data) => {
        if (isMounted) {
          setWeather(data);
          setLoadingWeather(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoadingWeather(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [destination.latitude, destination.longitude, destination.locality]);

  // Operational status (simulated monsoon vs live date)
  // Simulated monsoon uses July date; live date uses current local time (November = month index 10)
  const simulatedDate = simulatedMonsoon ? new Date(2027, 6, 15) : new Date();
  const statusInfo: OperationalStatusInfo = getDestinationOperationalStatus(
    destination,
    simulatedDate
  );

  // Localized texts based on active language
  const badgeLabel =
    language === 'as'
      ? statusInfo.badgeLabelAs
      : language === 'hi'
      ? statusInfo.badgeLabelHi
      : language === 'brx'
      ? statusInfo.badgeLabelBrx
      : statusInfo.badgeLabel;

  const alertTitle =
    language === 'as'
      ? statusInfo.alertTitleAs
      : language === 'hi'
      ? statusInfo.alertTitleHi
      : language === 'brx'
      ? statusInfo.alertTitleBrx
      : statusInfo.alertTitle;

  const alertSummary =
    language === 'as'
      ? statusInfo.alertSummaryAs
      : language === 'hi'
      ? statusInfo.alertSummaryHi
      : language === 'brx'
      ? statusInfo.alertSummaryBrx
      : statusInfo.alertSummary;

  const conditionLabel = weather
    ? language === 'as'
      ? weather.conditionLabelAs
      : language === 'hi'
      ? weather.conditionLabelHi
      : language === 'brx'
      ? weather.conditionLabelBrx
      : weather.conditionLabel
    : 'Clear Sky';

  const safariTip = weather
    ? language === 'as'
      ? weather.safariRecommendationAs
      : language === 'hi'
      ? weather.safariRecommendationHi
      : language === 'brx'
      ? weather.safariRecommendationBrx
      : weather.safariRecommendation
    : '';

  // Render weather icon dynamically
  const renderWeatherIcon = (iconName: WeatherData['iconName'] | undefined) => {
    switch (iconName) {
      case 'sun':
        return <Sun size={32} className="weather-icon-sun" />;
      case 'cloud-sun':
        return <CloudSun size={32} className="weather-icon-cloudsun" />;
      case 'cloud':
        return <Cloud size={32} className="weather-icon-cloud" />;
      case 'cloud-rain':
        return <CloudRain size={32} className="weather-icon-rain" />;
      case 'cloud-fog':
        return <CloudFog size={32} className="weather-icon-fog" />;
      case 'cloud-lightning':
        return <CloudLightning size={32} className="weather-icon-lightning" />;
      default:
        return <Sun size={32} className="weather-icon-sun" />;
    }
  };

  return (
    <div className={`dest-weather-alert-card ${statusInfo.isOpen ? 'status-open' : 'status-pause'}`}>
      {/* Top Subtle Red Gamusa Bar */}
      <div className="dest-weather-top-stripe" />

      <div className="dest-weather-alert-grid">
        {/* =========================================================================
            LEFT COLUMN: SAFARI OPERATIONAL STATUS & SEASON ALERT
            ========================================================================= */}
        <div className="safari-status-column">
          <div className="safari-status-header-row">
            {/* Live Pulsating Status Badge */}
            <div className={`safari-status-pill ${statusInfo.isOpen ? 'open' : 'pause'}`}>
              <span className={`dest-pulse-radar ${statusInfo.isOpen ? 'green' : 'amber'}`}>
                <span className="radar-circle" />
                <span className="radar-dot" />
              </span>
              <span className="safari-pill-text">{badgeLabel}</span>
            </div>

            {/* Season Window Chip */}
            <span className="safari-season-chip">
              <Calendar size={12} />
              <span>{statusInfo.seasonWindow}</span>
            </span>
          </div>

          <h3 className="safari-alert-title">{alertTitle}</h3>
          <p className="safari-alert-desc">{alertSummary}</p>

          {/* If Safari Open: Core Range Counters & Daily Shifts */}
          {statusInfo.isOpen && statusInfo.isWildlife && (
            <div className="safari-schedule-container">
              <div className="safari-shift-row">
                <div className="shift-badge">
                  <Clock size={13} color="#059669" />
                  <span>
                    {language === 'as'
                      ? 'জীপ চাফাৰী: পুৱা ০৭:৩০ আৰু আবেলি ০১:৩০'
                      : 'Jeep Safari: 07:30 AM & 01:30 PM'}
                  </span>
                </div>
                <div className="shift-badge">
                  <Sparkles size={13} color="#D97706" />
                  <span>
                    {language === 'as'
                      ? 'হাতী চাফাৰী: পুৱা ০৫:৩০ আৰু ০৬:৩০'
                      : 'Elephant Safari: 05:30 AM & 06:30 AM'}
                  </span>
                </div>
              </div>

              {statusInfo.safariRanges && (
                <div className="safari-ranges-grid">
                  {statusInfo.safariRanges.map((rng, idx) => (
                    <div key={idx} className="safari-range-item">
                      <div className="range-name">
                        <Compass size={12} color="#059669" />
                        <span>{language === 'as' ? rng.nameAs : rng.name}</span>
                      </div>
                      <div className="range-sub">{language === 'as' ? rng.highlightAs : rng.highlight}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* If Monsoon Pause: River Flood Alert & Reopening Note */}
          {!statusInfo.isOpen && statusInfo.isWildlife && (
            <div className="safari-monsoon-alert-box">
              <div className="flex items-start gap-2.5">
                <ShieldAlert size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm text-amber-950">
                    {language === 'as'
                      ? 'বাৰিষাৰ বান আৰু বন্যপ্ৰাণীৰ সুৰক্ষা'
                      : 'Monsoon Season & Park Rest Period'}
                  </div>
                  <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                    {language === 'as'
                      ? 'বাৰিষাৰ ব্ৰহ্মপুত্ৰৰ বানৰ বাবে তৃণভূমি আৰু চাফাৰী পথ জলমগ্ন। কাৰ্বি আংলঙৰ পাহাৰলৈ বন্যপ্ৰাণী যাতে সুৰক্ষিতভাৱে পাৰ হ’ব পাৰে, তাৰ বাবে উদ্যানখন মে’ৰ পৰা অক্টোবৰলৈ বন্ধ থাকে।'
                      : 'During monsoon rains, the Brahmaputra swells and floods the grasslands, helping the habitat heal while animals move safely to the highlands. The park reopens for safaris on November 1.'}
                  </p>
                  <div className="mt-2 text-xs font-bold text-amber-800">
                    {language === 'as'
                      ? 'পুনৰ চাফাৰী আৰম্ভ হ’ব: ১ নৱেম্বৰ'
                      : 'Safaris Reopen: November 1'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wildlife Corridor Highway Speed & Rescue Advisory */}
          {statusInfo.isWildlife && (
            <div
              style={{
                marginTop: '0.85rem',
                padding: '0.75rem 0.95rem',
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
              }}
            >
              <ShieldAlert size={16} color="#B45309" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.75rem', color: '#78350F', lineHeight: 1.5 }}>
                <strong style={{ display: 'block', color: '#92400E', fontWeight: 800, marginBottom: '2px' }}>
                  {language === 'as'
                    ? 'NH-715 বন্যপ্ৰাণী ক’ৰিডৰ গতিবেগ সতৰ্কতা (৪০ কিঃমিঃ/ঘণ্টা)'
                    : 'NH-715 Wildlife Corridor Speed Advisory (40 km/h)'}
                </strong>
                <span>
                  {language === 'as'
                    ? 'পানবাৰী, হলধিবাৰী, কঁহৰা আৰু বাগৰিত স্বয়ংক্ৰিয় চেন্সৰ আৰু সময়-পত্ৰ (Time-Card) প্ৰযোজ্য। জৰুৰী বন্যপ্ৰাণী উদ্ধাৰ হেল্পলাইন: ১৯২৬।'
                    : 'Automated sensor cameras & time-card checks enforced across Panbari, Haldhibari, Kohora & Bagori corridors. Emergency Forest Rescue Helpline: 1926.'}
                </span>
              </div>
            </div>
          )}

          {/* Dual-State Season Preview Switcher (Allows testing both states live) */}
          {statusInfo.isWildlife && (
            <div className="safari-sim-toggle-row">
              <span className="sim-label">
                <Info size={12} />
                <span>{language === 'as' ? 'ঋতুভিত্তিক স্থিতি পৰীক্ষা:' : 'Seasonal Preview:'}</span>
              </span>
              <div className="sim-buttons-group">
                <button
                  type="button"
                  onClick={() => setSimulatedMonsoon(false)}
                  className={`sim-btn ${!simulatedMonsoon ? 'active' : ''}`}
                >
                  <span className="dot green" />
                  <span>{language === 'as' ? 'নৱেম্বৰ (মুকলি)' : 'Nov – Apr (Open)'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSimulatedMonsoon(true)}
                  className={`sim-btn ${simulatedMonsoon ? 'active' : ''}`}
                >
                  <span className="dot amber" />
                  <span>{language === 'as' ? 'বাৰিষা (বিৰতি)' : 'May – Oct (Monsoon)'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            RIGHT COLUMN: REAL-TIME SATELLITE WEATHER WIDGET
            ========================================================================= */}
        <div className="realtime-weather-column">
          <div className="weather-header-row">
            <div className="weather-title-group">
              <Radio size={14} className="text-sky-600 animate-pulse" />
              <span className="weather-title-text">
                {language === 'as' ? 'পোনপটীয়া বতৰ' : 'Live Weather'}
              </span>
            </div>

            <div className="weather-satellite-badge" title="Real-time Weather">
              <span className="satellite-dot" />
              <span>
                {weather?.isLive
                  ? language === 'as'
                    ? 'আজিৰ বতৰ'
                    : 'Live Weather'
                  : language === 'as'
                  ? 'অফলাইন বতৰ'
                  : 'Saved Weather'}
              </span>
            </div>
          </div>

          {loadingWeather ? (
            <div className="weather-loading-skeleton">
              <div className="weather-skeleton-line w-24 h-8" />
              <div className="weather-skeleton-line w-40 h-4 mt-2" />
            </div>
          ) : weather ? (
            <div className="weather-body">
              {/* Primary Temperature Row */}
              <div className="weather-temp-row">
                <div className="weather-icon-badge">
                  {renderWeatherIcon(weather.iconName)}
                </div>
                <div className="weather-temp-wrap">
                  <div className="weather-degrees-num">
                    {weather.temperature}
                    <span className="weather-unit">°C</span>
                  </div>
                  <div className="weather-condition-text">{conditionLabel}</div>
                </div>
              </div>

              {/* Weather Stats Row */}
              <div className="weather-stats-grid">
                <div className="weather-stat-chip" title="Atmospheric Humidity">
                  <Droplets size={14} color="#0284C7" />
                  <span className="stat-label">
                    {language === 'as' ? 'আৰ্দ্ৰতা' : 'Humidity'}:
                  </span>
                  <strong className="stat-val">{weather.humidity}%</strong>
                </div>

                <div className="weather-stat-chip" title="Surface Wind Speed">
                  <Wind size={14} color="#0D9488" />
                  <span className="stat-label">
                    {language === 'as' ? 'বতাহ' : 'Wind'}:
                  </span>
                  <strong className="stat-val">{weather.windSpeed} km/h</strong>
                </div>

                <div className="weather-stat-chip" title="Feels Like Temperature">
                  <Thermometer size={14} color="#F59E0B" />
                  <span className="stat-label">
                    {language === 'as' ? 'অনুভৱ' : 'Feels'}:
                  </span>
                  <strong className="stat-val">{weather.apparentTemperature}°C</strong>
                </div>
              </div>

              {/* Safari Gear & Visibility Tip */}
              {safariTip && (
                <div className="weather-safari-tip-box">
                  <div className="tip-header">
                    <Sparkles size={12} color="#059669" />
                    <span>
                      {language === 'as'
                        ? 'চাফাৰী আৰু ভ্ৰমণৰ দিহা:'
                        : 'Safari & Field Guidance:'}
                    </span>
                  </div>
                  <div className="tip-text">{safariTip}</div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
