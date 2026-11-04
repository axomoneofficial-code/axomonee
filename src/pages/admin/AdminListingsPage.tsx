import React, { useState, useEffect } from 'react';
import { Listing, VerificationStatus, ModerationStatus, ListingType } from '../../types';
import { api, FALLBACK_DISTRICTS, FALLBACK_CATEGORIES } from '../../api';
import {
  Store,
  Plus,
  Search,
  CheckCircle2,
  Archive,
  Edit2,
  Trash2,
  X,
  MapPin,
} from 'lucide-react';

export const AdminListingsPage: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12;

  // Modals
  const [editingItem, setEditingItem] = useState<Partial<Listing> | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    loadListings();
  }, [selectedDistrict, selectedCategory, selectedStatus, currentPage]);

  const loadListings = async () => {
    setIsLoading(true);
    try {
      const data = await api.getAdminListings({
        district: selectedDistrict !== 'all' ? selectedDistrict : undefined,
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        status: selectedStatus !== 'all' ? selectedStatus : undefined,
        q: searchQuery.trim() || undefined,
        limit: pageSize,
        offset: (currentPage - 1) * pageSize,
      });
      setListings(data.listings);
      setTotalCount(data.total);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    loadListings();
  };

  const handleToggleVerification = async (l: Listing) => {
    const nextStatus: VerificationStatus = l.verification_status === 'verified' ? 'unverified' : 'verified';
    await api.updateAdminListing(l.id, { verification_status: nextStatus });
    loadListings();
  };

  const handleToggleStatus = async (l: Listing) => {
    const nextStatus: ModerationStatus = l.moderation_status === 'published' ? 'suspended' : 'published';
    const action = nextStatus === 'published' ? 'publish' : 'suspend';
    if (!window.confirm(`Are you sure you want to ${action} "${l.title}"?`)) return;

    await api.updateAdminListing(l.id, { moderation_status: nextStatus });
    loadListings();
  };

  const handleDelete = async (l: Listing) => {
    if (!window.confirm(`PERMANENT ACTION: Delete "${l.title}"? This cannot be undone.`)) return;
    await api.deleteAdminListing(l.id);
    loadListings();
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (!editingItem.title?.trim()) {
      setFormError('Title is required.');
      return;
    }
    if (!editingItem.district_id) {
      setFormError('Please select a district.');
      return;
    }
    if (!editingItem.category_id) {
      setFormError('Please select a category.');
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
        const res = await api.createAdminListing(editingItem);
        if (res.success) {
          setIsCreating(false);
          setEditingItem(null);
          loadListings();
        } else {
          setFormError(res.error || 'Failed to create listing');
        }
      } else if (editingItem.id) {
        await api.updateAdminListing(editingItem.id, editingItem);
        setEditingItem(null);
        loadListings();
      }
    } catch (err: any) {
      setFormError(err?.message || 'Failed to save listing');
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
            <Store size={28} color="var(--gamusa-red)" />
            Manage Directory & Businesses ({totalCount})
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Curate local enterprises, artisans, universities, services, and commercial partners across Assam.
          </p>
        </div>

        <button
          onClick={() => {
            setIsCreating(true);
            setEditingItem({
              title: '',
              slug: '',
              district_id: 'dist-kamrup-metro',
              category_id: 'cat-businesses',
              listing_type: 'business',
              description: '',
              address: '',
              contact_phone: '',
              contact_email: '',
              website_url: '',
              image_url: '',
              verification_status: 'verified',
              moderation_status: 'published',
              is_sponsored: 0,
            });
            setFormError('');
          }}
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.1rem' }}
        >
          <Plus size={16} /> Add Directory Listing
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
        <form onSubmit={handleSearchSubmit} style={{ flex: '1 1 220px', position: 'relative' }}>
          <input
            type="text"
            className="search-input-box"
            placeholder="Search by title, phone, address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" style={{ position: 'absolute', right: '10px', top: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
            <Search size={15} />
          </button>
        </form>

        <select
          value={selectedDistrict}
          onChange={(e) => { setSelectedDistrict(e.target.value); setCurrentPage(1); }}
          className="form-input"
          style={{ flex: '1 1 180px', padding: '0.5rem' }}
        >
          <option value="all">All 35 Districts</option>
          {FALLBACK_DISTRICTS.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
          className="form-input"
          style={{ flex: '1 1 180px', padding: '0.5rem' }}
        >
          <option value="all">All Categories</option>
          {FALLBACK_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => { setSelectedStatus(e.target.value); setCurrentPage(1); }}
          className="form-input"
          style={{ flex: '1 1 140px', padding: '0.5rem' }}
        >
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>

      {/* Listings Table */}
      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Title & Details</th>
              <th>District</th>
              <th>Category</th>
              <th>Verification</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#6B7280' }}>
                  Loading directory listings...
                </td>
              </tr>
            ) : listings.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3.5rem', color: '#6B7280' }}>
                  No directory listings match the selected filters.
                </td>
              </tr>
            ) : (
              listings.map((l) => (
                <tr key={l.id}>
                  <td style={{ minWidth: '220px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '6px', overflow: 'hidden', background: '#F3F4F6', flexShrink: 0 }}>
                        <img
                          src={l.image_url || l.image_key || '/images/hero-clean-hd.jpg'}
                          alt={l.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/hero-clean-hd.jpg'; }}
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <strong style={{ fontSize: '0.9rem', color: '#111827' }}>{l.title}</strong>
                          {l.is_sponsored === 1 && (
                            <span style={{ fontSize: '0.65rem', background: '#FEF3C7', color: '#B45309', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>
                              SPONSORED
                            </span>
                          )}
                        </div>
                        {l.address && (
                          <div style={{ fontSize: '0.725rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                            <MapPin size={11} color="#DC2626" /> {l.address}
                          </div>
                        )}
                        <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>slug: {l.slug}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600 }}>{l.district_name || 'District'}</div>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.75rem', background: '#F3F4F6', color: '#374151', padding: '0.2rem 0.5rem', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                      {l.category_name || l.listing_type}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      onClick={() => handleToggleVerification(l)}
                      style={{
                        background: l.verification_status === 'verified' ? '#EFF6FF' : '#F3F4F6',
                        color: l.verification_status === 'verified' ? '#1D4ED8' : '#6B7280',
                        border: '1px solid currentColor',
                        borderRadius: '999px',
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                    >
                      <CheckCircle2 size={12} />
                      {l.verification_status === 'verified' ? 'Verified' : 'Unverified'}
                    </button>
                  </td>

                  <td>
                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        background: l.moderation_status === 'published' ? '#ECFDF5' : '#FEF3C7',
                        color: l.moderation_status === 'published' ? '#047857' : '#B45309',
                        border: '1px solid currentColor',
                      }}
                    >
                      {l.moderation_status}
                    </span>
                  </td>

                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setIsCreating(false);
                          setEditingItem({ ...l });
                          setFormError('');
                        }}
                        title="Edit Listing Details"
                        style={{ padding: '0.35rem', background: '#EFF6FF', border: 'none', borderRadius: '4px', cursor: 'pointer', color: '#2563EB' }}
                      >
                        <Edit2 size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleToggleStatus(l)}
                        title={l.moderation_status === 'published' ? 'Suspend Listing' : 'Publish Listing'}
                        style={{
                          padding: '0.35rem',
                          background: l.moderation_status === 'published' ? '#FEF3C7' : '#ECFDF5',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          color: l.moderation_status === 'published' ? '#B45309' : '#047857',
                        }}
                      >
                        {l.moderation_status === 'published' ? <Archive size={14} /> : <CheckCircle2 size={14} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(l)}
                        title="Delete Listing"
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
          Showing page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({totalCount} total listings)
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

      {/* Add / Edit Listing Modal */}
      {editingItem && (
        <div className="directory-details-modal-overlay" onClick={() => setEditingItem(null)}>
          <div
            className="directory-details-modal-content"
            style={{ maxWidth: '780px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gamusa-top-woven-strip" style={{ height: '6px' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-green)' }}>
                {isCreating ? 'Add Directory Business or Service' : `Edit: ${editingItem.title}`}
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
                  <label className="form-label">Establishment / Listing Title *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Guwahati Solar Works"
                    value={editingItem.title || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    className="form-input"
                    value={editingItem.category_id || 'cat-businesses'}
                    onChange={(e) => setEditingItem({ ...editingItem, category_id: e.target.value })}
                    required
                  >
                    {FALLBACK_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

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
                  <label className="form-label">Listing Type</label>
                  <select
                    className="form-input"
                    value={editingItem.listing_type || 'business'}
                    onChange={(e) => setEditingItem({ ...editingItem, listing_type: e.target.value as ListingType })}
                  >
                    <option value="business">Local Business</option>
                    <option value="service">Essential Service</option>
                    <option value="opportunity">Opportunity / Education</option>
                    <option value="tourism">Tourism & Hospitality</option>
                    <option value="community">Community Organization</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Physical Address / Locality</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. G.S. Road, Christian Basti, Guwahati 781005"
                  value={editingItem.address || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, address: e.target.value })}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Description & Offerings *</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Describe services, specialities, craft techniques, customer guarantees..."
                  value={editingItem.description || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="+91-..."
                    value={editingItem.contact_phone || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, contact_phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="contact@..."
                    value={editingItem.contact_email || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, contact_email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Official Website</label>
                  <input
                    type="url"
                    className="form-input"
                    placeholder="https://..."
                    value={editingItem.website_url || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, website_url: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Featured Image URL</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="/images/featured/... or https://..."
                    value={editingItem.image_url || editingItem.image_key || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, image_url: e.target.value, image_key: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Official Verification Document / Source URL</label>
                  <input
                    type="url"
                    className="form-input"
                    placeholder="https://..."
                    value={editingItem.source_url || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, source_url: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
                <div className="form-group">
                  <label className="form-label">Verification Status</label>
                  <select
                    className="form-input"
                    value={editingItem.verification_status || 'verified'}
                    onChange={(e) => setEditingItem({ ...editingItem, verification_status: e.target.value as VerificationStatus })}
                  >
                    <option value="verified">Verified Listing</option>
                    <option value="unverified">Unverified Listing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Moderation Status</label>
                  <select
                    className="form-input"
                    value={editingItem.moderation_status || 'published'}
                    onChange={(e) => setEditingItem({ ...editingItem, moderation_status: e.target.value as ModerationStatus })}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>

                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.6rem' }}>
                  <input
                    type="checkbox"
                    id="is_sponsored"
                    checked={editingItem.is_sponsored === 1}
                    onChange={(e) => setEditingItem({ ...editingItem, is_sponsored: e.target.checked ? 1 : 0 })}
                  />
                  <label htmlFor="is_sponsored" style={{ fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                    Feature as Sponsored Partner
                  </label>
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
                  {isSubmitting ? 'Saving...' : isCreating ? 'Create Listing' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
