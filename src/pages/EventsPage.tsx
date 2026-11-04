import React, { useState, useEffect, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { District, EventItem } from '../types';
import { EventCard } from '../components/EventCard';
import { ContextualHelp, GuidanceEmptyState } from '../components/guidance';
import { api } from '../api';
import {
  PlusCircle,
  Search,
  Sparkles,
  MapPin,
  RefreshCw,
  Map as MapIcon,
  LayoutGrid,
  Navigation,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventsPageProps {
  districts: District[];
  initialDistrict: string;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Events (সকলো)', icon: '✨' },
  { id: 'festivals', label: 'Bihu & Spring Festivals (বিহু আৰু বসন্তোৎসৱ)', icon: '🥁' },
  { id: 'spiritual', label: 'Sattras & Devotional (সত্ৰীয়া আৰু আধ্যাত্মিক)', icon: '🪔' },
  { id: 'traditional', label: 'Indigenous & Melas (জনজাতীয় মেলা)', icon: '🌾' },
  { id: 'literary', label: 'Literary & Book Fairs (গ্ৰন্থমেলা আৰু সাহিত্য)', icon: '📚' },
  { id: 'handloom-expo', label: 'Silk, Handloom & Agro (হস্ততাঁত আৰু চাহ)', icon: '🧵' },
];

export const EventsPage: React.FC<EventsPageProps> = ({ districts, initialDistrict }) => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict || 'all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'map'>('cards');
  const [activeMapEvent, setActiveMapEvent] = useState<EventItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, [selectedDistrict]);

  const loadEvents = async () => {
    setIsLoading(true);
    try {
      const data = await api.getEvents({ district: selectedDistrict });
      setEvents(data);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter events client-side by category & search term
  const filteredEvents = useMemo(() => {
    return events.filter((evt) => {
      // Category match
      if (selectedCategory !== 'all') {
        if (evt.category !== selectedCategory) return false;
      }

      // Search match
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchTitle = evt.title.toLowerCase().includes(query);
        const matchTitleAs = (evt.title_as || '').toLowerCase().includes(query);
        const matchDesc = evt.description.toLowerCase().includes(query);
        const matchVenue = evt.venue.toLowerCase().includes(query);
        const matchOrg = evt.organizer.toLowerCase().includes(query);
        const matchDistrict = (evt.district_name || '').toLowerCase().includes(query);
        if (!matchTitle && !matchTitleAs && !matchDesc && !matchVenue && !matchOrg && !matchDistrict) {
          return false;
        }
      }

      return true;
    });
  }, [events, selectedCategory, searchTerm]);

  // Keep activeMapEvent in sync with filtered list
  useEffect(() => {
    if (filteredEvents.length > 0) {
      if (!activeMapEvent || !filteredEvents.some((e) => e.id === activeMapEvent.id)) {
        const howly = filteredEvents.find((e) => e.slug.includes('howly'));
        setActiveMapEvent(howly || filteredEvents[0]);
      }
    } else {
      setActiveMapEvent(null);
    }
  }, [filteredEvents]);

  const handleResetFilters = () => {
    setSelectedDistrict('all');
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 0.5rem' }}>
      <SEO
        title="Assam Cultural Festivals &amp; Raas Mahotsav Calendar 2026–2027"
        description="Verified calendar of Assam cultural festivals including Majuli Raas Mahotsav, Howly Raas, Rongali Bihu, Jonbeel Mela, and Ambubachi Mahayoga."
        canonicalPath="/events"
        keywords="Assam festivals, Majuli Raas Mahotsav, Howly Raas, Bihu, Jonbeel Mela, Ambubachi, Assam cultural calendar"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Cultural Festivals', path: '/events' },
        ]}
      />
      {/* Header Section */}
      <div className="events-page-header">
        <div>
          <h1 className="events-page-title">
            Assam Cultural & Community Events
          </h1>
          <p className="events-page-subtitle">
            Explore authentic Bihu celebrations, sacred Raas Mahotsavs, historic tribal barter melas, international book fairs, and community gatherings across all 35 districts of Assam.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <ContextualHelp topicKey="events" />
          <Link to="/submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            <PlusCircle size={16} /> Submit an Event
          </Link>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="events-filter-container" data-tour="events-controls">
        <div className="events-filter-controls">
          {/* Keyword Search Box */}
          <div className="events-search-box">
            <Search size={16} className="events-search-icon" />
            <input
              type="text"
              className="events-search-input"
              placeholder="Search festivals, bhaonas, venues, melas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* District Dropdown */}
          <div className="events-district-select-wrap">
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
              District:
            </span>
            <select
              className="events-district-select"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="all">All Assam (সকলো জিলা)</option>
              {districts.map((d) => (
                <option key={d.id} value={d.slug}>
                  {d.name} ({d.name_as})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="events-category-pills">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.id}
              className={`event-category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count, View Switcher & Reset */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div className="events-count-badge">
          <Sparkles size={14} color="var(--gamusa-red)" />
          Showing <strong>{filteredEvents.length}</strong> verified cultural & community event{filteredEvents.length !== 1 ? 's' : ''}
          {selectedDistrict !== 'all' && ` in ${selectedDistrict}`}
          {selectedCategory !== 'all' && ` • Filtered by category`}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* View Mode Switcher */}
          <div className="events-view-switcher">
            <button
              type="button"
              className={`events-view-btn ${viewMode === 'cards' ? 'active' : ''}`}
              onClick={() => setViewMode('cards')}
              title="Card Grid View"
            >
              <LayoutGrid size={14} /> Cards View
            </button>
            <button
              type="button"
              className={`events-view-btn ${viewMode === 'map' ? 'active' : ''}`}
              onClick={() => setViewMode('map')}
              title="Interactive Venue Map View"
            >
              <MapIcon size={14} /> Map View
            </button>
          </div>

          {(selectedDistrict !== 'all' || selectedCategory !== 'all' || searchTerm.trim()) && (
            <button
              onClick={handleResetFilters}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--gamusa-red)',
                fontSize: '0.825rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <RefreshCw size={13} /> Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Events View: Loading / Empty / Cards / Map */}
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>
          <RefreshCw size={28} className="spin-icon" style={{ margin: '0 auto 1rem auto', display: 'block' }} />
          Loading cultural events...
        </div>
      ) : filteredEvents.length === 0 ? (
        <GuidanceEmptyState
          title="No Cultural Events Match Your Criteria"
          description="Try broadening your district or category filter, or contribute a local festival celebration notice to the community calendar."
          onResetFilters={handleResetFilters}
          resetLabel="Clear Event Filters"
          secondaryLink={{ to: '/submit', label: '+ Submit a Community Festival Notice' }}
        />
      ) : viewMode === 'map' ? (
        /* ==========================================================
           INTERACTIVE MAP VIEW (Split-View: Events List + Live Map)
           ========================================================== */
        <div className="events-map-view-container">
          {/* Left: Scrollable Events List */}
          <div className="events-map-sidebar">
            {filteredEvents.map((evt) => {
              const isSelected = activeMapEvent?.id === evt.id;
              const startDate = new Date(evt.start_at);
              const day = startDate.getDate() || 15;
              const month = startDate.toLocaleString('default', { month: 'short' }).toUpperCase() || 'NOV';
              return (
                <button
                  key={evt.id}
                  type="button"
                  className={`events-map-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => setActiveMapEvent(evt)}
                >
                  <div className="event-date-badge" style={{ transform: 'none', margin: 0, minWidth: '46px' }}>
                    <span className="event-date-day" style={{ fontSize: '1.1rem' }}>{day}</span>
                    <span className="event-date-month" style={{ fontSize: '0.65rem' }}>{month}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#DC2626', background: '#FEE2E2', padding: '0.1rem 0.45rem', borderRadius: '4px' }}>
                        {evt.district_name}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {evt.title}
                    </div>
                    {evt.title_as && (
                      <div style={{ fontSize: '0.78rem', color: '#DC2626', fontWeight: 600 }}>
                        {evt.title_as}
                      </div>
                    )}
                    <div style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                      <MapPin size={11} color="#DC2626" />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{evt.venue}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Event Live Map & Details */}
          {activeMapEvent && (
            <div className="events-map-main-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'inline-block', background: '#FEE2E2', color: '#DC2626', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {activeMapEvent.category_label || 'Cultural Event'} • {activeMapEvent.district_name}
                  </div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {activeMapEvent.title}
                  </h2>
                  {activeMapEvent.title_as && (
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#DC2626', marginTop: '0.15rem' }}>
                      {activeMapEvent.title_as}
                    </div>
                  )}
                  <p style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.35rem', margin: '0.35rem 0 0 0' }}>
                    <MapPin size={14} color="#DC2626" />
                    <strong>{activeMapEvent.venue}</strong>
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeMapEvent.latitude && activeMapEvent.longitude && (
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${activeMapEvent.latitude},${activeMapEvent.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-map-btn primary"
                    >
                      <Navigation size={13} /> Navigate <ExternalLink size={10} />
                    </a>
                  )}
                  <Link to={`/events/${activeMapEvent.slug}`} className="event-map-btn secondary">
                    Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Embedded Map */}
              {activeMapEvent.latitude && activeMapEvent.longitude ? (
                <div>
                  <div className="event-map-frame-wrap">
                    <iframe
                      title={`Map for ${activeMapEvent.title}`}
                      width="100%"
                      height="380"
                      style={{ border: 0, display: 'block' }}
                      loading="lazy"
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${(activeMapEvent.longitude - 0.035).toFixed(4)}%2C${(activeMapEvent.latitude - 0.025).toFixed(4)}%2C${(activeMapEvent.longitude + 0.035).toFixed(4)}%2C${(activeMapEvent.latitude + 0.025).toFixed(4)}&layer=mapnik&marker=${activeMapEvent.latitude}%2C${activeMapEvent.longitude}`}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem', fontSize: '0.75rem', color: '#64748B' }}>
                    <span>📍 GPS: {activeMapEvent.latitude.toFixed(4)}° N, {activeMapEvent.longitude.toFixed(4)}° E</span>
                    <span>© OpenStreetMap contributors</span>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '3rem 1rem', textAlign: 'center', background: '#F8FAFC', borderRadius: '12px' }}>
                  <MapPin size={32} color="#DC2626" style={{ margin: '0 auto 0.5rem auto' }} />
                  <p style={{ margin: 0, color: '#64748B' }}>Venue mapping coordinates being verified for this location.</p>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* ==========================================================
           GRID VIEW (Original 21 Cards Layout with Map Link)
           ========================================================== */
        <div className="events-grid">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      )}
    </div>
  );
};