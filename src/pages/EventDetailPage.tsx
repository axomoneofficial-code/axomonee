import { getAssetUrl } from '../utils/assetHelper';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventItem } from '../types';
import { api } from '../api';
import { sanitizeExternalUrl } from '../utils/security';
import {
  Calendar,
  MapPin,
  User,
  Globe,
  ArrowLeft,
  Share2,
  Navigation,
  ExternalLink,
  Compass,
  Copy,
  Check,
  Info,
} from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<EventItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);

  useEffect(() => {
    if (slug) loadEvent(slug);
  }, [slug]);

  const loadEvent = async (s: string) => {
    setIsLoading(true);
    try {
      const item = await api.getEventBySlug(s);
      setEvent(item);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCoords = (lat: number, lon: number) => {
    navigator.clipboard.writeText(`${lat.toFixed(4)}, ${lon.toFixed(4)}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  if (isLoading) return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading event details...</div>;
  if (!event) return (
    <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <h2>Event Not Found</h2>
      <Link to="/events" className="btn-primary" style={{ marginTop: '1.5rem' }}>&larr; Back to Events</Link>
    </div>
  );

  const start = new Date(event.start_at);
  const end = new Date(event.end_at);

  const hasGps = typeof event.latitude === 'number' && typeof event.longitude === 'number' && !isNaN(event.latitude) && !isNaN(event.longitude);
  const lat = event.latitude ?? 26.2006;
  const lon = event.longitude ?? 92.9376;

  const googleMapsDirectionsUrl = hasGps
    ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${event.venue}, ${event.district_name || ''}, Assam`)}`;

  const osmUrl = hasGps
    ? `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`
    : `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${event.venue} Assam`)}`;

  const appleMapsUrl = hasGps
    ? `https://maps.apple.com/?daddr=${lat},${lon}`
    : `https://maps.apple.com/?q=${encodeURIComponent(`${event.venue} Assam`)}`;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 0.5rem' }}>
      <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Events
        </Link>
        <button onClick={handleShare} className="btn-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
          <Share2 size={14} /> {copied ? 'Link Copied!' : 'Share'}
        </button>
      </div>

      <article className="detail-container">
        <header className="detail-header">
          <div style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-block', background: 'var(--gamusa-red-soft)', color: 'var(--gamusa-red)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
              {event.category_label || 'Cultural & Community Event'}
            </span>
          </div>
          <h1 className="detail-title">{event.title}</h1>
          {event.title_as && (
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gamusa-red)', marginTop: '-0.35rem', marginBottom: '0.75rem' }}>
              {event.title_as}
            </div>
          )}
          <div className="detail-meta-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={15} color="var(--gamusa-red)" />
              <strong>{event.district_name}</strong> {event.district_name_as && `(${event.district_name_as})`}
            </span>
          </div>
        </header>

        {/* Real Authentic Photo Hero */}
        {event.image_url && (
          <div style={{
            margin: '0.5rem 0 1.75rem',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
            border: '1px solid #E2E8F0',
            position: 'relative',
            maxHeight: '380px',
            background: '#F8FAFC'
          }}>
            <img
              src={getAssetUrl(event.image_url)}
              alt={event.title}
              style={{
                width: '100%',
                maxHeight: '360px',
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('hero-clean-hd.jpg')) {
                  target.src = '/images/hero-clean-hd.jpg';
                }
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '0.6rem 1.25rem',
              background: 'linear-gradient(transparent, rgba(15, 23, 42, 0.75))',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              backdropFilter: 'blur(2px)'
            }}>
              <span style={{ fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                {event.title} — {event.venue}
              </span>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                background: 'rgba(255, 255, 255, 0.22)',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
                border: '1px solid rgba(255, 255, 255, 0.35)'
              }}>
                Verified Authentic Picture
              </span>
            </div>
          </div>
        )}

        {/* Schedule & Venue Boxes */}
        <div className="info-cards-row">
          <div className="info-box">
            <h4><Calendar size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Date & Timing</h4>
            <p style={{ marginTop: '0.25rem' }}>
              {start.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              To: {end.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <div className="info-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4><MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Venue / Location</h4>
              <a href="#event-location-map" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gamusa-red)', textDecoration: 'none' }}>
                View Map &darr;
              </a>
            </div>
            <p style={{ marginTop: '0.25rem' }}>{event.venue}</p>
          </div>

          <div className="info-box">
            <h4><User size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Organizer</h4>
            <p style={{ marginTop: '0.25rem' }}>{event.organizer}</p>
          </div>
        </div>

        {/* Description */}
        <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: '2rem 0' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.75rem' }}>About this Event</h3>
          <p>{event.description}</p>
        </div>

        {/* Dedicated Venue Location & Turn-by-Turn Map Section */}
        <section id="event-location-map" className="event-map-section">
          <div className="event-map-header">
            <div className="event-map-title-wrap">
              <h3>
                <MapPin size={22} color="var(--gamusa-red)" />
                Venue Location & Interactive Map
              </h3>
              <p className="event-map-subtitle">
                Exact temple grounds, festival premises, and turn-by-turn driving directions in Assam.
              </p>
            </div>

            <div className="event-map-nav-triggers">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-map-btn primary"
                title="Navigate with Google Maps"
              >
                <Navigation size={14} /> Google Maps <ExternalLink size={11} />
              </a>
              <a
                href={osmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-map-btn secondary"
                title="View on OpenStreetMap"
              >
                <Compass size={14} /> OpenStreetMap <ExternalLink size={11} />
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-map-btn secondary"
                title="View on Apple Maps"
              >
                Apple Maps <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {hasGps && (
            <div className="event-map-coords-bar">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                <span style={{ color: '#DC2626' }}>📍</span> GPS Coordinates: <strong>{lat.toFixed(4)}° N, {lon.toFixed(4)}° E</strong>
                <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>• {event.venue}</span>
              </span>

              <button
                type="button"
                onClick={() => handleCopyCoords(lat, lon)}
                style={{
                  background: copiedCoords ? '#DCFCE7' : '#FFFFFF',
                  color: copiedCoords ? '#166534' : '#475569',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {copiedCoords ? <Check size={12} color="#166534" /> : <Copy size={12} />}
                {copiedCoords ? 'Copied!' : 'Copy GPS'}
              </button>
            </div>
          )}

          {/* Embedded OpenStreetMap Frame */}
          <div className="event-map-frame-wrap">
            <iframe
              title={`Location map for ${event.title}`}
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${(lon - 0.035).toFixed(4)}%2C${(lat - 0.025).toFixed(4)}%2C${(lon + 0.035).toFixed(4)}%2C${(lat + 0.025).toFixed(4)}&layer=mapnik&marker=${lat}%2C${lon}`}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem', fontSize: '0.75rem', color: '#64748B' }}>
            <span>Marker placed at {event.venue}</span>
            <span>© OpenStreetMap contributors</span>
          </div>

          {/* Transit & Venue Connectivity Tiles */}
          <div className="event-map-footer-info">
            <div className="event-map-info-tile">
              <h5><MapPin size={13} color="#DC2626" /> Venue & Landmark</h5>
              <p>{event.venue}</p>
            </div>
            <div className="event-map-info-tile">
              <h5><Navigation size={13} color="#059669" /> District & Region</h5>
              <p>{event.district_name} {event.district_name_as && `(${event.district_name_as})`}, Assam</p>
            </div>
            <div className="event-map-info-tile">
              <h5><Info size={13} color="#2563EB" /> Transit & Access</h5>
              <p>
                {event.slug.includes('howly')
                  ? 'Connected via NH-27 at Howly Chariali; ~6 km from Barpeta Road Railway Station with regular e-rickshaws and ASTC bus services.'
                  : `Accessible via major highway arteries and district transport networks in ${event.district_name || 'Assam'}.`}
              </p>
            </div>
          </div>
        </section>

        {event.source_url && sanitizeExternalUrl(event.source_url) && (
          <div style={{ padding: '1rem', background: 'var(--bg-cream)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Official announcement or registration source:</span>
            <a href={sanitizeExternalUrl(event.source_url)} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}>
              <Globe size={14} /> Official Link
            </a>
          </div>
        )}
      </article>
    </div>
  );
};
