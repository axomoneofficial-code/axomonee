import React, { useState } from 'react';
import { DirectoryItem, DirectoryStatus, DirectoryCategory, DirectoryDistrict } from './types';
import { sanitizeExternalUrl, sanitizeInput } from '../../utils/security';
import {
  ShieldCheck,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  Plus,
  Download,
  Calendar,
  Edit2,
  Trash2,
  Globe,
  MapPin,
  RefreshCw,
  Eye,
  FileSpreadsheet,
} from 'lucide-react';

interface DirectoryAdminProps {
  items: DirectoryItem[];
  categories: DirectoryCategory[];
  districts: (DirectoryDistrict | string)[];
  onStatusChange: (id: string, status: DirectoryStatus) => void;
  onUpdateItem: (item: DirectoryItem) => void;
  onAddItem: (item: Omit<DirectoryItem, 'id'>) => void;
  onDeleteItem: (id: string) => void;
  onVerifyItem: (id: string) => void;
  onSelectView?: (item: DirectoryItem) => void;
}

export const DirectoryAdmin: React.FC<DirectoryAdminProps> = ({
  items,
  categories,
  districts,
  onStatusChange,
  onUpdateItem,
  onAddItem,
  onDeleteItem,
  onVerifyItem,
  onSelectView,
}) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [districtFilter, setDistrictFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<DirectoryItem | null>(null);

  // Stats calculation
  const totalCount = items.length;
  const publishedCount = items.filter((i) => i.status === 'published').length;
  const draftCount = items.filter((i) => i.status === 'draft').length;
  const reviewCount = items.filter((i) => i.status === 'pending_review').length;
  const verifiedCount = items.filter((i) => !!i.lastVerifiedAt).length;

  // Filtered items
  const filtered = items.filter((item) => {
    if (statusFilter !== 'all' && item.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (districtFilter !== 'all' && item.district !== districtFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const match =
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.locality && item.locality.toLowerCase().includes(q)) ||
        (item.sourceUrl && item.sourceUrl.toLowerCase().includes(q)) ||
        (item.website && item.website.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  // Export JSON handler
  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assam-directory-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export CSV handler
  const handleExportCsv = () => {
    const headers = [
      'id',
      'name',
      'category',
      'subcategory',
      'district',
      'locality',
      'description',
      'website',
      'sourceUrl',
      'verifiedFrom',
      'status',
      'lastVerifiedAt',
    ];
    const rows = items.map((i) => [
      i.id,
      `"${i.name.replace(/"/g, '""')}"`,
      i.category,
      `"${i.subcategory.replace(/"/g, '""')}"`,
      `"${i.district.replace(/"/g, '""')}"`,
      `"${(i.locality || '').replace(/"/g, '""')}"`,
      `"${i.description.replace(/"/g, '""')}"`,
      i.website || '',
      i.sourceUrl || '',
      `"${(i.verifiedFrom || '').replace(/"/g, '""')}"`,
      i.status,
      i.lastVerifiedAt || '',
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assam-directory-export-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="directory-admin-container">
      {/* Top Heritage Woven Gamusa Bar */}
      <div className="directory-admin-gamusa-strip" />

      {/* Admin Title & Description */}
      <div className="directory-admin-header">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={24} className="text-emerald-700" />
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Assam Directory Administration & Verification Desk
            </h1>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Review official records, verify government <code>sourceUrl</code> documents, maintain <code>lastVerifiedAt</code> audit trails, and moderate public listings.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleExportCsv}
            className="directory-admin-btn-secondary"
            title="Download CSV"
          >
            <FileSpreadsheet size={15} />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            onClick={handleExportJson}
            className="directory-admin-btn-secondary"
            title="Download JSON"
          >
            <Download size={15} />
            <span>Export JSON</span>
          </button>
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="directory-admin-btn-primary"
          >
            <Plus size={16} />
            <span>Add New Record</span>
          </button>
        </div>
      </div>

      {/* Stat Metric Cards Bar */}
      <div className="directory-admin-stats-grid">
        <div className="directory-admin-stat-card">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Records</div>
          <div className="text-2xl font-black text-gray-900 mt-1">{totalCount}</div>
          <div className="text-xs text-gray-400 mt-0.5">Assam State Directory Pack</div>
        </div>

        <div className="directory-admin-stat-card border-l-4 border-l-emerald-600">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
            <CheckCircle size={13} />
            Published
          </div>
          <div className="text-2xl font-black text-emerald-900 mt-1">{publishedCount}</div>
          <div className="text-xs text-emerald-600 mt-0.5">Live on public portal</div>
        </div>

        <div className="directory-admin-stat-card border-l-4 border-l-amber-500">
          <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1">
            <Clock size={13} />
            Drafts (Pending)
          </div>
          <div className="text-2xl font-black text-amber-900 mt-1">{draftCount}</div>
          <div className="text-xs text-amber-600 mt-0.5">Needs editorial verification</div>
        </div>

        <div className="directory-admin-stat-card border-l-4 border-l-sky-500">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider flex items-center gap-1">
            <AlertCircle size={13} />
            In Review
          </div>
          <div className="text-2xl font-black text-sky-900 mt-1">{reviewCount}</div>
          <div className="text-xs text-sky-600 mt-0.5">Under verification</div>
        </div>

        <div className="directory-admin-stat-card border-l-4 border-l-teal-600">
          <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider flex items-center gap-1">
            <Calendar size={13} />
            Source Verified
          </div>
          <div className="text-2xl font-black text-teal-900 mt-1">{verifiedCount}</div>
          <div className="text-xs text-teal-600 mt-0.5">Has audit timestamp</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="directory-admin-filter-bar">
        <div className="directory-admin-search-box">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search records by name, locality, or sourceUrl..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="directory-admin-search-input"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="directory-admin-select"
          >
            <option value="all">All Statuses</option>
            <option value="draft">Drafts Only</option>
            <option value="pending_review">Pending Review</option>
            <option value="published">Published Only</option>
            <option value="rejected">Rejected</option>
            <option value="archived">Archived</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="directory-admin-select"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>

          {/* District Filter */}
          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="directory-admin-select"
          >
            <option value="all">All Districts</option>
            {districts.map((d) => {
              const name = typeof d === 'string' ? d : d.name;
              return (
                <option key={typeof d === 'string' ? d : d.id || d.name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Main Records Table */}
      <div className="directory-admin-table-container">
        <table className="directory-admin-table">
          <thead>
            <tr>
              <th>Record Name & Category</th>
              <th>District & Locality</th>
              <th>Official Source URL (Verification)</th>
              <th>Status</th>
              <th>Last Verified</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-500">
                  No directory records matching your search or filters.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/70 transition">
                  {/* Name and Subcategory */}
                  <td>
                    <div className="font-bold text-gray-900 hover:text-red-700 cursor-pointer" onClick={() => onSelectView?.(item)}>
                      {item.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">
                        {item.subcategory}
                      </span>
                      {item.website && sanitizeExternalUrl(item.website) && (
                        <a
                          href={sanitizeExternalUrl(item.website)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline flex items-center gap-0.5"
                          title="Official portal"
                        >
                          <Globe size={11} />
                          <span>Website</span>
                        </a>
                      )}
                    </div>
                  </td>

                  {/* District & Locality */}
                  <td>
                    <div className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                      <MapPin size={12} className="text-red-600 shrink-0" />
                      <span>{item.district}</span>
                    </div>
                    {item.locality && (
                      <div className="text-xs text-gray-500 mt-0.5 truncate max-w-[180px]">
                        {item.locality}
                      </div>
                    )}
                  </td>

                  {/* Prominently Displayed Source URL (Explicit instruction from README) */}
                  <td>
                    {item.sourceUrl && sanitizeExternalUrl(item.sourceUrl) ? (
                      <div className="max-w-[280px]">
                        <a
                          href={sanitizeExternalUrl(item.sourceUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-800 font-medium hover:underline flex items-center gap-1 truncate"
                          title={item.sourceUrl}
                        >
                          <ShieldCheck size={13} className="text-emerald-700 shrink-0" />
                          <span className="truncate">{item.sourceUrl}</span>
                          <ExternalLink size={11} className="shrink-0" />
                        </a>
                        <div className="text-[11px] text-gray-400 mt-0.5 truncate">
                          {item.verifiedFrom || 'Official registry'}
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs text-amber-600 italic">No sourceUrl attached</span>
                    )}
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    <select
                      value={item.status}
                      onChange={(e) => onStatusChange(item.id, e.target.value as DirectoryStatus)}
                      className={`text-xs font-bold rounded-full px-2.5 py-1 border outline-none cursor-pointer ${
                        item.status === 'published'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : item.status === 'draft'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : item.status === 'pending_review'
                          ? 'bg-sky-50 text-sky-800 border-sky-300'
                          : 'bg-rose-50 text-rose-800 border-rose-300'
                      }`}
                    >
                      <option value="draft">Draft</option>
                      <option value="pending_review">In Review</option>
                      <option value="published">Published</option>
                      <option value="rejected">Rejected</option>
                      <option value="archived">Archived</option>
                    </select>
                  </td>

                  {/* Last Verified & Verify Today Button */}
                  <td>
                    <div className="text-xs text-gray-700 font-medium">
                      {item.lastVerifiedAt || <span className="text-gray-400 italic">Never</span>}
                    </div>
                    <button
                      type="button"
                      onClick={() => onVerifyItem(item.id)}
                      className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1 mt-0.5"
                      title="Set verified date to today"
                    >
                      <RefreshCw size={10} />
                      <span>Verify Today</span>
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onSelectView?.(item)}
                        className="p-1.5 rounded text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                        title="View details"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingItem(item)}
                        className="p-1.5 rounded text-blue-600 hover:bg-blue-50"
                        title="Edit record"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteItem(item.id)}
                        className="p-1.5 rounded text-rose-600 hover:bg-rose-50"
                        title="Delete record"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Record Modal */}
      {showAddModal && (
        <div className="directory-admin-modal-overlay">
          <div className="directory-admin-modal-card">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Plus size={18} className="text-red-600" />
              Add New Assam Directory Record
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                onAddItem({
                  name: sanitizeInput(formData.get('name') as string, 200),
                  category: formData.get('category') as string,
                  subcategory: sanitizeInput(formData.get('subcategory') as string, 100),
                  district: formData.get('district') as string,
                  locality: sanitizeInput((formData.get('locality') as string) || '', 150),
                  description: sanitizeInput(formData.get('description') as string, 3000),
                  website: sanitizeExternalUrl(formData.get('website') as string) || undefined,
                  sourceUrl: sanitizeExternalUrl(formData.get('sourceUrl') as string) || undefined,
                  verifiedFrom: sanitizeInput((formData.get('verifiedFrom') as string) || 'Official State Portal', 200),
                  status: (formData.get('status') as DirectoryStatus) || 'draft',
                  lastVerifiedAt: new Date().toISOString().slice(0, 10),
                });
                setShowAddModal(false);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Institution / Landmark Name *</label>
                <input required name="name" className="w-full text-sm p-2 border rounded-md" placeholder="e.g. Cotton University" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Category *</label>
                  <select required name="category" className="w-full text-sm p-2 border rounded-md">
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Subcategory *</label>
                  <input required name="subcategory" className="w-full text-sm p-2 border rounded-md" placeholder="e.g. State University" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">District *</label>
                  <select required name="district" className="w-full text-sm p-2 border rounded-md">
                    {districts.map((d) => {
                      const name = typeof d === 'string' ? d : d.name;
                      return <option key={name} value={name}>{name}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Locality / Address</label>
                  <input name="locality" className="w-full text-sm p-2 border rounded-md" placeholder="e.g. Panbazar, Guwahati" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Description *</label>
                <textarea required name="description" rows={3} className="w-full text-sm p-2 border rounded-md" placeholder="Brief factual description..." />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Official Website URL</label>
                  <input type="url" name="website" className="w-full text-sm p-2 border rounded-md" placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Official Source URL (Verification) *</label>
                  <input required type="url" name="sourceUrl" className="w-full text-sm p-2 border rounded-md" placeholder="https://highereducation.assam.gov.in/..." />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Status</label>
                <select name="status" defaultValue="draft" className="w-full text-sm p-2 border rounded-md">
                  <option value="draft">Draft (Verification Pending)</option>
                  <option value="pending_review">Pending Review</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-red-700 text-white font-bold rounded-md hover:bg-red-800"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Record Modal */}
      {editingItem && (
        <div className="directory-admin-modal-overlay">
          <div className="directory-admin-modal-card">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Edit2 size={18} className="text-blue-600" />
              Edit Record: {editingItem.name}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                onUpdateItem({
                  ...editingItem,
                  name: sanitizeInput(formData.get('name') as string, 200),
                  subcategory: sanitizeInput(formData.get('subcategory') as string, 100),
                  district: formData.get('district') as string,
                  locality: sanitizeInput((formData.get('locality') as string) || '', 150),
                  description: sanitizeInput(formData.get('description') as string, 3000),
                  website: sanitizeExternalUrl(formData.get('website') as string) || undefined,
                  sourceUrl: sanitizeExternalUrl(formData.get('sourceUrl') as string) || undefined,
                  status: formData.get('status') as DirectoryStatus,
                  lastVerifiedAt: new Date().toISOString().slice(0, 10),
                });
                setEditingItem(null);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Name *</label>
                <input required name="name" defaultValue={editingItem.name} className="w-full text-sm p-2 border rounded-md" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Subcategory *</label>
                  <input required name="subcategory" defaultValue={editingItem.subcategory} className="w-full text-sm p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">District *</label>
                  <input required name="district" defaultValue={editingItem.district} className="w-full text-sm p-2 border rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Locality</label>
                <input name="locality" defaultValue={editingItem.locality || ''} className="w-full text-sm p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Description *</label>
                <textarea required name="description" rows={3} defaultValue={editingItem.description} className="w-full text-sm p-2 border rounded-md" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Website URL</label>
                  <input type="url" name="website" defaultValue={editingItem.website || ''} className="w-full text-sm p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Official Source URL</label>
                  <input type="url" name="sourceUrl" defaultValue={editingItem.sourceUrl || ''} className="w-full text-sm p-2 border rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Status</label>
                <select name="status" defaultValue={editingItem.status} className="w-full text-sm p-2 border rounded-md">
                  <option value="draft">Draft</option>
                  <option value="pending_review">Pending Review</option>
                  <option value="published">Published</option>
                  <option value="rejected">Rejected</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800"
                >
                  Update & Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
