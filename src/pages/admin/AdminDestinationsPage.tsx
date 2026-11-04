import { getAssetUrl } from '../../utils/assetHelper';
import React, { useState, useEffect } from 'react';
import { BeautyDestination, BeautyDestinationCategory, DestinationStatus } from '../../types';
import { api, FALLBACK_DISTRICTS } from '../../api';
import {
  Compass,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Archive,
  Edit2,
  Trash2,
  Eye,
  X,
} from 'lucide-react';

const CATEGORIES: { slug: BeautyDestinationCategory; label: string }[] = [
  { slug: 'tea-tourism', label: 'Tea Gardens & Tea Tourism' },
  { slug: 'river-experiences', label: 'River Islands & Riverfronts' },
  { slug: 'hills-waterfalls', label: 'Hills, Lakes & Waterfalls' },
  { slug: 'wildlife-birdwatching', label: 'Wildlife & Sanctuaries' },
  { slug: 'heritage-historic', label: 'Heritage & Historic Sites' },
  { slug: 'handloom-crafts', label: 'Handloom & Cultural Villages' },
  { slug: 'festivals-cultural', label: 'Festivals & Cultural Events' },
  { slug: 'culinary-experiences', label: 'Assamese Food & Culinary' },
  { slug: 'botanical-green', label: 'Botanical Gardens & Parks' },
  { slug: 'district-travel-guides', label: 'District Travel Guides' },
];

export const AdminDestinationsPage: React.FC = () => {
  const [destinations, setDestinations] = useState<BeautyDestination[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Filters & Pagination
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12;

  // Modals
  const [editingItem, setEditingItem] = useState<Partial<BeautyDestination> | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [previewItem, setPreviewItem] = useState<BeautyDestination | null>(null);
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    loadDestinations();
  }, [selectedCategory, selectedDistrict, selectedStatus, currentPage]);

  const loadDestinations = async () => {
    setIsLoading(true);
    try {
      const res = await api.getAdminDestinations({
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        district: selectedDistrict !== 'all' ? selectedDistrict : undefined,
        status: selectedStatus !== 'all' ? selectedStatus : undefined,
        q: searchQuery.trim() || undefined,
        limit: pageSize,
        offset: (currentPage - 1) * pageSize,
      });
      setDestinations(res.destinations);
      setTotalCount(res.total);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    loadDestinations();
  };

  const handleTogglePublish = async (item: BeautyDestination) => {
    const nextStatus: DestinationStatus = item.status === 'published' ? 'draft' : 'published';
    const actionLabel = nextStatus === 'published' ? 'publish' : 'unpublish';
    if (!window.confirm(`Are you sure you want to ${actionLabel} "${item.name}"?`)) return;

    await api.updateAdminDestination(item.id, {
      status: nextStatus,
      lastVerifiedAt: nextStatus === 'published' ? new Date().toISOString() : null,
    });
    loadDestinations();
  };

  const handleDelete = async (item: BeautyDestination) => {
    if (!window.confirm(`PERMANENT ACTION: Delete "${item.name}"? This cannot be undone.`)) return;
    await api.deleteAdminDestination(item.id);
    loadDestinations();
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (!editingItem.name?.trim()) {
      setFormError('Destination name is required.');
      return;
    }
    if (!editingItem.category) {
      setFormError('Please select a valid category.');
      return;
    }
    if (!editingItem.district?.trim()) {
      setFormError('Please specify the district.');
      return;
    }
    if (!editingItem.shortDescription?.trim()) {
      setFormError('Short description is required.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      if (isCreating) {
        const res = await api.createAdminDestination(editingItem);
        if (res.success) {
          setIsCreating(false);
          setEditingItem(null);
          loadDestinations();
        } else {
          setFormError(res.error || 'Failed to create destination');
        }
      } else if (editingItem.id) {
        await api.updateAdminDestination(editingItem.id, editingItem);
        setEditingItem(null);
        loadDestinations();
      }
    } catch (err: any) {
      setFormError(err?.message || 'Failed to save destination');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  return (
    <div>
      {/* Top Gamusa Jacquard Strip */}
      <div className="gamusa-top-woven-strip" style={{ height: '5px', borderRadius: '4px', marginBottom: '1.25rem' }} />

      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Compass size={28} color="var(--gamusa-red)" />
            Explore Assam Destinations ({totalCount})
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Comprehensive management of 21-field heritage, scenic, wildlife, and tea destinations across Assam.
          </p>
        </div>

        <button
          onClick={() => {
            setIsCreating(true);
            setEditingItem({
              name: '',
              name_as: '',
              name_hi: '',
              category: 'tea-tourism',
              district: 'Kamrup Metropolitan',
              locality: '',
              shortDescription: '',
              fullDescription: '',
              imageUrl: '',
              imageAttribution: '',
              latitude: null,
              longitude: null,
              bestSeason: 'October to April',
              accessNotes: '',
              openingHours: '09:00 - 17:00 Daily',
              entryFee: 'Free',
              status: 'published',
            });
            setFormError('');
          }}
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.1rem' }}
        >
          <Plus size={16} /> Add Destination
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
        {/* Search */}
        <form onSubmit={handleSearchSubmit} style={{ flex: '1 1 220px', position: 'relative' }}>
          <input
            type="text"
            className="search-input-box"
            placeholder="Search by name, locality, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" style={{ position: 'absolute', right: '10px', top: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
            <Search size={15} />
          </button>
        </form>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
          className="form-input"
          style={{ flex: '1 1 180px', padding: '0.5rem' }}
        >
          <option value="all">All 10 Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>{c.label}</option>
          ))}
        </select>

        {/* District Filter */}
        <select
          value={selectedDistrict}
          onChange={(e) => { setSelectedDistrict(e.target.value); setCurrentPage(1); }}
          className="form-input"
          style={{ flex: '1 1 160px', padding: '0.5rem' }}
        >
          <option value="all">All 35 Districts</option>
          {FALLBACK_DISTRICTS.map((d) => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
          className="form-input"
          style={{ flex: '1 1 130px', padding: '0.5rem' }}
        >
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft (Quarantined)</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Destinations Table */}
      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Category</th>
              <th>District</th>
              <th>Verification / GPS</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#6B7280' }}>
                  Loading destinations database...
                </td>
              </tr>
            ) : destinations.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3.5rem', color: '#6B7280' }}>
                  No destinations match the selected criteria.
                </td>
              </tr>
            ) : (
              destinations.map((d) => (
                <tr key={d.id}>
                  {/* Title & Thumbnail */}
                  <td style={{ minWidth: '220px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '6px', overflow: 'hidden', background: '#E5E7EB', flexShrink: 0 }}>
                        <img
                          src={getAssetUrl(d.imageUrl || d.image || '/images/hero-clean-hd.jpg')}
                          alt={d.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/hero-clean-hd.jpg'; }}
                        />
                      </div>
                      <div>
                        <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{d.name}</strong>
                        {d.name_as && (
                          <div style={{ fontSize: '0.75rem', color: '#047857' }}>{d.name_as}</div>
                        )}
                        <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>slug: {d.slug}</div>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td>
                    <span style={{ fontSize: '0.75rem', background: '#F3F4F6', color: '#374151', padding: '0.2rem 0.5rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                      {d.category.replace(/-/g, ' ')}
                    </span>
                  </td>

                  {/* District */}
                  <td>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600 }}>{d.district}</div>
                    {d.locality && <div style={{ fontSize: '0.725rem', color: '#6B7280' }}>{d.locality}</div>}
                  </td>

                  {/* Verification & GPS */}
                  <td>
                    <div style={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      {d.latitude && d.longitude ? (
                        <span style={{ color: '#059669', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          <CheckCircle2 size={12} /> GPS ({d.latitude.toFixed(2)}, {d.longitude.toFixed(2)})
                        </span>
                      ) : (
                        <span style={{ color: '#D97706', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          <AlertTriangle size={12} /> Missing GPS
                        </span>
                      )}
                      <span style={{ color: '#6B7280', fontSize: '0.7rem' }}>
                        {d.lastVerifiedAt ? `Verified: ${new Date(d.lastVerifiedAt).toLocaleDateString()}` : 'Pending verification'}
                      </span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td>
                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        background: d.status === 'published' ? '#ECFDF5' : d.status === 'draft' ? '#FEF3C7' : '#F3F4F6',
                        color: d.status === 'published' ? '#047857' : d.status === 'draft' ? '#B45309' : '#6B7280',
                        border: `1px solid currentColor`,
                      }}
                    >
                      {d.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
                      {/* View */}
                      <button
                        type="button"
                        onClick={() => setPreviewItem(d)}
                        title="Quick View Details"
                        style={{ padding: '0.35rem', background: '#F3F4F6', border: 'none', borderRadius: '4px', cursor: 'pointer', color: '#374151' }}
                      >
                        <Eye size={14} />
                      </button>

                      {/* Edit */}
                      <button
                        type="button"
                        onClick={() => {
                          setIsCreating(false);
                          setEditingItem({ ...d });
                          setFormError('');
                        }}
                        title="Edit Destination Record"
                        style={{ padding: '0.35rem', background: '#EFF6FF', border: 'none', borderRadius: '4px', cursor: 'pointer', color: '#2563EB' }}
                      >
                        <Edit2 size={14} />
                      </button>

                      {/* Toggle Publish */}
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(d)}
                        title={d.status === 'published' ? 'Unpublish (Send to Draft)' : 'Publish to Live Site'}
                        style={{
                          padding: '0.35rem',
                          background: d.status === 'published' ? '#FEF3C7' : '#ECFDF5',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          color: d.status === 'published' ? '#B45309' : '#047857',
                        }}
                      >
                        {d.status === 'published' ? <Archive size={14} /> : <CheckCircle2 size={14} />}
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => handleDelete(d)}
                        title="Delete Destination"
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

      {/* Pagination Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', fontSize: '0.85rem', color: '#6B7280' }}>
        <div>
          Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({totalCount} total destinations)
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="btn-outline"
            style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="btn-outline"
            style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem' }}
          >
            Next &rarr;
          </button>
        </div>
      </div>

      {/* Add / Edit Destination Modal */}
      {editingItem && (
        <div className="directory-details-modal-overlay" onClick={() => setEditingItem(null)}>
          <div
            className="directory-details-modal-content"
            style={{ maxWidth: '820px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gamusa-top-woven-strip" style={{ height: '6px' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-green)' }}>
                {isCreating ? 'Add Explore Assam Destination' : `Edit: ${editingItem.name}`}
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

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Destination Name (English) *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={editingItem.name || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Name in Assamese (অসমীয়া)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. উমানন্দ দ্বীপ"
                    value={editingItem.name_as || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, name_as: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    className="form-input"
                    value={editingItem.category || 'tea-tourism'}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value as BeautyDestinationCategory })}
                    required
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">District *</label>
                  <select
                    className="form-input"
                    value={editingItem.district || 'Kamrup Metropolitan'}
                    onChange={(e) => {
                      const d = FALLBACK_DISTRICTS.find((dist) => dist.name === e.target.value);
                      setEditingItem({
                        ...editingItem,
                        district: e.target.value,
                        district_slug: d ? d.slug : e.target.value.toLowerCase().replace(/\s+/g, '-'),
                      });
                    }}
                    required
                  >
                    {FALLBACK_DISTRICTS.map((d) => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Locality / Area</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Peacock Island, Brahmaputra River"
                    value={editingItem.locality || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, locality: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Custom Slug (Auto-generated if empty)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. umananda-peacock-island"
                    value={editingItem.slug || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, slug: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Short Summary (Shown on search cards) *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Compelling 1-2 sentence overview..."
                  value={editingItem.shortDescription || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, shortDescription: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Full Narrative & Historical Description *</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Detailed background, cultural context, natural flora/fauna, visitor recommendations..."
                  value={editingItem.fullDescription || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, fullDescription: e.target.value })}
                  required
                />
              </div>

              {/* Photo & Attribution */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Image URL</label>
                  <input
                    type="url"
                    className="form-input"
                    placeholder="https://... or /images/..."
                    value={editingItem.imageUrl || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Image Attribution (CC License / Photographer)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Photo: John Doe (CC BY-SA 4.0 via Wikimedia)"
                    value={editingItem.imageAttribution || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, imageAttribution: e.target.value })}
                  />
                </div>
              </div>

              {/* Coordinates */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Latitude (GPS)</label>
                  <input
                    type="number"
                    step="0.0001"
                    className="form-input"
                    placeholder="26.1917"
                    value={editingItem.latitude ?? ''}
                    onChange={(e) => setEditingItem({ ...editingItem, latitude: e.target.value ? parseFloat(e.target.value) : null })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Longitude (GPS)</label>
                  <input
                    type="number"
                    step="0.0001"
                    className="form-input"
                    placeholder="91.7456"
                    value={editingItem.longitude ?? ''}
                    onChange={(e) => setEditingItem({ ...editingItem, longitude: e.target.value ? parseFloat(e.target.value) : null })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    className="form-input"
                    value={editingItem.status || 'published'}
                    onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value as DestinationStatus })}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft (Quarantined in Review)</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Visitor Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Best Visiting Season</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="October to April"
                    value={editingItem.bestSeason || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, bestSeason: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Visiting Hours</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="09:00 - 17:00 Daily"
                    value={editingItem.openingHours || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, openingHours: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Entry Fee / Ticket</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Free / INR 50"
                    value={editingItem.entryFee || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, entryFee: e.target.value })}
                  />
                </div>
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
                  {isSubmitting ? 'Saving...' : isCreating ? 'Create Destination' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Quick Preview Modal */}
      {previewItem && (
        <div className="directory-details-modal-overlay" onClick={() => setPreviewItem(null)}>
          <div
            className="directory-details-modal-content"
            style={{ maxWidth: '640px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gamusa-top-woven-strip" style={{ height: '5px' }} />
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', background: '#ECFDF5', color: '#047857', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                    {previewItem.category.replace(/-/g, ' ').toUpperCase()}
                  </span>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.35rem' }}>{previewItem.name}</h2>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>{previewItem.locality ? `${previewItem.locality}, ` : ''}{previewItem.district}</div>
                </div>
                <button onClick={() => setPreviewItem(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              {previewItem.imageUrl && (
                <div style={{ width: '100%', height: '240px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <img src={getAssetUrl(previewItem.imageUrl)} alt={previewItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}

              <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.6, marginBottom: '1rem' }}>
                {previewItem.fullDescription}
              </p>

              <div style={{ background: '#F9FAFB', padding: '0.75rem 1rem', borderRadius: '6px', fontSize: '0.8rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                <div><strong>Best Season:</strong> {previewItem.bestSeason || 'N/A'}</div>
                <div><strong>Hours:</strong> {previewItem.openingHours || 'N/A'}</div>
                <div><strong>Entry Fee:</strong> {previewItem.entryFee || 'Free'}</div>
                <div><strong>Coordinates:</strong> {previewItem.latitude ? `${previewItem.latitude}, ${previewItem.longitude}` : 'Unverified'}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
