import React, { useState, useEffect } from 'react';
import { Category } from '../../types';
import { api, FALLBACK_CATEGORIES } from '../../api';
import { Plus, CheckCircle2, XCircle } from 'lucide-react';

export const AdminCategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [isLoading, setIsLoading] = useState(true);
  const [newCatName, setNewCatName] = useState('');
  const [newCatSlug, setNewCatSlug] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const data = await api.getCategories();
      if (data && data.length > 0) setCategories(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = (catId: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === catId ? { ...c, is_active: c.is_active === 1 ? 0 : 1 } : c))
    );
  };

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const slug = newCatSlug.trim() || newCatName.toLowerCase().replace(/\s+/g, '-');
    const newCat: Category = {
      id: `cat-${Date.now()}`,
      name: newCatName.trim(),
      slug,
      description: newCatDesc.trim() || undefined,
      icon: 'Tag',
      is_active: 1,
    };

    setCategories([...categories, newCat]);
    setNewCatName('');
    setNewCatSlug('');
    setNewCatDesc('');
    setIsAdding(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
            Category Management
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Control directory categories, icons, and visibility across the public discovery portal.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="btn-primary"
          style={{ fontSize: '0.85rem' }}
        >
          <Plus size={16} /> {isAdding ? 'Cancel' : 'Add Category'}
        </button>
      </div>

      {isAdding && (
        <div className="form-card" style={{ maxWidth: '100%', marginBottom: '1.75rem', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-green)', marginBottom: '1rem' }}>
            New Directory Category
          </h3>
          <form onSubmit={handleCreateCategory}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label className="form-label">Category Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Agri-Tourism"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-label">Slug (optional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="agri-tourism"
                  value={newCatSlug}
                  onChange={(e) => setNewCatSlug(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-input"
                placeholder="Organic farming tours, village harvest festivals, and rural homestays..."
                value={newCatDesc}
                onChange={(e) => setNewCatDesc(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button type="button" onClick={() => setIsAdding(false)} className="btn-outline">
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Save Category
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Slug</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>Loading categories...</td>
              </tr>
            ) : categories.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '3rem' }}>No categories found.</td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td>
                    <strong>{cat.name}</strong>
                  </td>
                  <td><code>{cat.slug}</code></td>
                  <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '300px' }}>
                    {cat.description || '—'}
                  </td>
                  <td>
                    <span
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        background: cat.is_active === 1 ? '#ECFDF5' : '#FEE2E2',
                        color: cat.is_active === 1 ? '#047857' : '#991B1B',
                      }}
                    >
                      {cat.is_active === 1 ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleToggleActive(cat.id)}
                      className={cat.is_active === 1 ? 'btn-outline' : 'btn-primary'}
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                    >
                      {cat.is_active === 1 ? (
                        <>
                          <XCircle size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Deactivate
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Activate
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
