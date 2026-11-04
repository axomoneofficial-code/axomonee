import React, { useState, useEffect } from 'react';
import { EventItem } from '../../types';
import { api, FALLBACK_DISTRICTS } from '../../api';
import {
  Calendar,
  Plus,
  Search,
  CheckCircle2,
  Archive,
  Edit2,
  Trash2,
  X,
  MapPin,
} from 'lucide-react';

export const AdminEventsPage: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Modals
  const [editingItem, setEditingItem] = useState<Partial<EventItem> | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    loadEvents();
  }, [selectedDistrict, selectedStatus]);

  const loadEvents = async () => {
    setIsLoading(true);
    try {
      const data = await api.getAdminEvents({
        district: selectedDistrict !== 'all' ? selectedDistrict : undefined,
        status: selectedStatus !== 'all' ? selectedStatus : undefined,
        q: searchQuery.trim() || undefined,
      });
      setEvents(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadEvents();
  };

  const handleToggleStatus = async (item: EventItem) => {
    const nextStatus = item.moderation_status === 'published' ? 'draft' : 'published';
    const action = nextStatus === 'published' ? 'publish' : 'unpublish';
    if (!window.confirm(`Are you sure you want to ${action} "${item.title}"?`)) return;

    await api.updateAdminEvent(item.id, { moderation_status: nextStatus });
    loadEvents();
  };

  const handleDelete = async (item: EventItem) => {
    if (!window.confirm(`PERMANENT ACTION: Delete "${item.title}"? This cannot be undone.`)) return;
    await api.deleteAdminEvent(item.id);
    loadEvents();
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (!editingItem.title?.trim()) {
      setFormError('Event title is required.');
      return;
    }
    if (!editingItem.venue?.trim()) {
      setFormError('Event venue is required.');
      return;
    }
    if (!editingItem.start_at || !editingItem.end_at) {
      setFormError('Start date and end date are required.');
      return;
    }
    if (!editingItem.description?.trim()) {
      setFormError('Description is required.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      if (isCreating) {
        const res = await api.createAdminEvent(editingItem);
        if (res.success) {
          setIsCreating(false);
          setEditingItem(null);
          loadEvents();
        } else {
          setFormError(res.error || 'Failed to create event');
        }
      } else if (editingItem.id) {
        await api.updateAdminEvent(editingItem.id, editingItem);
        setEditingItem(null);
        loadEvents();
      }
    } catch (err: any) {
      setFormError(err?.message || 'Failed to save event');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Top Gamusa Jacquard Strip */}
      <div className="gamusa-top-woven-strip" style={{ height: '5px', borderRadius: '4px', marginBottom: '1.25rem' }} />

      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={28} color="var(--gamusa-red)" />
            Events & Festivals Management ({events.length})
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Schedule, moderate, and publish cultural events, Bihu celebrations, and district gatherings.
          </p>
        </div>

        <button
          onClick={() => {
            setIsCreating(true);
            setEditingItem({
              title: '',
              district_id: 'dist-kamrup-metro',
              venue: '',
              start_at: new Date().toISOString().slice(0, 16),
              end_at: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 16),
              organizer: '',
              description: '',
              source_url: '',
              moderation_status: 'published',
            });
            setFormError('');
          }}
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.1rem' }}
        >
          <Plus size={16} /> Schedule Event
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
        <form onSubmit={handleSearchSubmit} style={{ flex: '1 1 240px', position: 'relative' }}>
          <input
            type="text"
            className="search-input-box"
            placeholder="Search by title, venue, organizer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" style={{ position: 'absolute', right: '10px', top: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
            <Search size={15} />
          </button>
        </form>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="form-input"
          style={{ flex: '1 1 180px', padding: '0.5rem' }}
        >
          <option value="all">All 35 Districts</option>
          {FALLBACK_DISTRICTS.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="form-input"
          style={{ flex: '1 1 140px', padding: '0.5rem' }}
        >
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Events Table */}
      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>District & Venue</th>
              <th>Dates</th>
              <th>Organizer</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#6B7280' }}>
                  Loading events database...
                </td>
              </tr>
            ) : events.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3.5rem', color: '#6B7280' }}>
                  No events found matching the criteria.
                </td>
              </tr>
            ) : (
              events.map((ev) => (
                <tr key={ev.id}>
                  <td>
                    <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{ev.title}</strong>
                    <div style={{ fontSize: '0.725rem', color: '#6B7280' }}>slug: {ev.slug}</div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600 }}>{ev.district_name || 'District'}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <MapPin size={12} color="#DC2626" /> {ev.venue}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.75rem' }}>
                      <div>Start: {new Date(ev.start_at).toLocaleDateString()}</div>
                      <div style={{ color: '#6B7280' }}>End: {new Date(ev.end_at).toLocaleDateString()}</div>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.8rem', color: '#374151' }}>{ev.organizer}</span>
                  </td>
                  <td>
                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        background: ev.moderation_status === 'published' ? '#ECFDF5' : '#FEF3C7',
                        color: ev.moderation_status === 'published' ? '#047857' : '#B45309',
                        border: '1px solid currentColor',
                      }}
                    >
                      {ev.moderation_status || 'published'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setIsCreating(false);
                          setEditingItem({ ...ev });
                          setFormError('');
                        }}
                        title="Edit Event"
                        style={{ padding: '0.35rem', background: '#EFF6FF', border: 'none', borderRadius: '4px', cursor: 'pointer', color: '#2563EB' }}
                      >
                        <Edit2 size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleStatus(ev)}
                        title={ev.moderation_status === 'published' ? 'Unpublish Event' : 'Publish Event'}
                        style={{
                          padding: '0.35rem',
                          background: ev.moderation_status === 'published' ? '#FEF3C7' : '#ECFDF5',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          color: ev.moderation_status === 'published' ? '#B45309' : '#047857',
                        }}
                      >
                        {ev.moderation_status === 'published' ? <Archive size={14} /> : <CheckCircle2 size={14} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(ev)}
                        title="Delete Event"
                        style={{ padding: '0.35rem', background: '#FEE2E2', border: 'none', borderRadius: '4px', cursor: 'pointer', color: '#DC2626' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      {editingItem && (
        <div className="directory-details-modal-overlay" onClick={() => setEditingItem(null)}>
          <div
            className="directory-details-modal-content"
            style={{ maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gamusa-top-woven-strip" style={{ height: '6px' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-green)' }}>
                {isCreating ? 'Schedule New Cultural Event' : `Edit: ${editingItem.title}`}
              </h2>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveForm} style={{ padding: '1.5rem' }}>
              {formError && (
                <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: '0.75rem', borderRadius: '6px', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                  {formError}
                </div>
              )}

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Event / Festival Title *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Majuli Raas Mahotsav 2026"
                  value={editingItem.title || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">District *</label>
                  <select
                    className="form-input"
                    value={editingItem.district_id || 'dist-kamrup-metro'}
                    onChange={(e) => setEditingItem({ ...editingItem, district_id: e.target.value })}
                    required
                  >
                    {FALLBACK_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Venue / Grounds *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Auniati Satra Grounds, Majuli"
                    value={editingItem.venue || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, venue: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Start Date & Time *</label>
                  <input
                    type="datetime-local"
                    className="form-input"
                    value={editingItem.start_at ? editingItem.start_at.slice(0, 16) : ''}
                    onChange={(e) => setEditingItem({ ...editingItem, start_at: new Date(e.target.value).toISOString() })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">End Date & Time *</label>
                  <input
                    type="datetime-local"
                    className="form-input"
                    value={editingItem.end_at ? editingItem.end_at.slice(0, 16) : ''}
                    onChange={(e) => setEditingItem({ ...editingItem, end_at: new Date(e.target.value).toISOString() })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Organizer / Cultural Guild *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Majuli Raas Celebration Committee"
                    value={editingItem.organizer || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, organizer: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Official Link / Notice URL</label>
                  <input
                    type="url"
                    className="form-input"
                    placeholder="https://..."
                    value={editingItem.source_url || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, source_url: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label">Event Description & Cultural Highlights *</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Detailed schedule, traditional performances, mask dances, folk drama, public guidelines..."
                  value={editingItem.description || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid #E5E7EB', paddingTop: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="btn-outline"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : isCreating ? 'Publish Event' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
