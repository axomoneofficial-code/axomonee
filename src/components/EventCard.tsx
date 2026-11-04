import { getAssetUrl } from '../utils/assetHelper';
import React from 'react';
import { Link } from 'react-router-dom';
import { EventItem } from '../types';
import { MapPin, ArrowRight, Sparkles, Navigation } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const startDate = new Date(event.start_at);
  const day = !isNaN(startDate.getDate()) ? startDate.getDate() : 15;
  const month = !isNaN(startDate.getTime())
    ? startDate.toLocaleString('default', { month: 'short' }).toUpperCase()
    : 'NOV';

  return (
    <article className="event-card">
      {/* 1. Header Media Banner with Overlays */}
      <div className="event-card-media-wrap">
        {event.image_url ? (
          <img
            src={getAssetUrl(event.image_url)}
            alt={event.title}
            className="event-card-img"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Fallback pattern when image is missing or errors */}
        <div
          className="event-card-media-fallback"
          style={{ display: event.image_url ? 'none' : 'flex' }}
        >
          <Sparkles size={28} className="text-amber-400 opacity-80" />
          <span>{event.category_label || 'Assam Cultural Event'}</span>
        </div>

        {/* Top-Left Date Badge Overlay */}
        <div className="event-date-badge-overlay">
          <span className="event-date-day">{day}</span>
          <span className="event-date-month">{month}</span>
        </div>

        {/* Top-Right Category Pill Overlay */}
        {event.category_label && (
          <span className="event-category-badge-overlay" title={event.category_label}>
            <Sparkles size={11} />
            <span>{event.category_label}</span>
          </span>
        )}

        {/* Bottom District Tag Overlay */}
        {event.district_name && (
          <div className="event-district-tag-overlay">
            <MapPin size={11} />
            <span>{event.district_name}</span>
          </div>
        )}
      </div>

      {/* 2. Card Content Body */}
      <div className="event-info">
        <h3 className="event-title">
          <Link to={`/events/${event.slug}`}>
            {event.title}
          </Link>
        </h3>

        {event.title_as && (
          <div className="event-title-as">{event.title_as}</div>
        )}

        <div className="event-venue">
          <MapPin size={14} className="event-venue-icon" />
          <span className="event-venue-text" title={event.venue}>
            {event.venue}
          </span>
          {event.latitude && event.longitude && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${event.latitude},${event.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="event-venue-map-link"
              title="Open venue in Google Maps"
              onClick={(e) => e.stopPropagation()}
            >
              <Navigation size={10} /> Map
            </a>
          )}
        </div>

        <p className="event-description">
          {event.description}
        </p>

        <div className="event-footer">
          <div className="event-organizer" title={event.organizer}>
            <span className="event-organizer-label">Organized by</span>
            <span className="event-organizer-name">{event.organizer}</span>
          </div>

          <Link to={`/events/${event.slug}`} className="event-details-btn">
            <span>Details</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
};
