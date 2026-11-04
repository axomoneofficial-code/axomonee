import React, { useState, useEffect } from 'react';
import { District } from '../../types';
import { api, FALLBACK_DISTRICTS } from '../../api';
import { Search, CheckCircle2, XCircle } from 'lucide-react';

export const AdminDistrictsPage: React.FC = () => {
  const [districts, setDistricts] = useState<District[]>(FALLBACK_DISTRICTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDistricts();
  }, []);

  const loadDistricts = async () => {
    setIsLoading(true);
    try {
      const data = await api.getDistricts();
      if (data && data.length > 0) setDistricts(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (districtId: string) => {
    const target = districts.find((d) => d.id === districtId);
    if (!target) return;
    const nextVal = target.is_active === 1 ? 0 : 1;
    await api.updateAdminDistrict(districtId, { is_active: nextVal });
    setDistricts((prev) =>
      prev.map((d) => (d.id === districtId ? { ...d, is_active: nextVal } : d))
    );
  };

  const filteredDistricts = districts.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.name_as.includes(searchQuery) ||
      d.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
            Districts of Assam ({districts.length})
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Manage official district metadata and regional enablement across Assam.
          </p>
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <input
            type="text"
            className="search-input-box"
            placeholder="Search district in English or অসমীয়া..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={15} style={{ position: 'absolute', right: '12px', top: '12px', color: '#9CA3AF' }} />
        </div>
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>District Name (English)</th>
              <th>Assamese Script (অসমীয়া)</th>
              <th>Slug</th>
              <th>Scope</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>Loading districts...</td>
              </tr>
            ) : filteredDistricts.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem' }}>No districts found matching your search.</td>
              </tr>
            ) : (
              filteredDistricts.map((d) => (
                <tr key={d.id}>
                  <td>
                    <strong>{d.name}</strong>
                  </td>
                  <td style={{ fontFamily: 'var(--font-as)', fontSize: '1.05rem', color: 'var(--gamusa-red)' }}>
                    {d.name_as}
                  </td>
                  <td><code>{d.slug}</code></td>
                  <td>
                    {d.slug === 'kamrup-metropolitan' ? (
                      <span style={{ background: '#FEF3C7', color: '#B45309', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.725rem', fontWeight: 700 }}>
                        ★ Launch District
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Regional</span>
                    )}
                  </td>
                  <td>
                    <span
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        background: d.is_active === 1 ? '#ECFDF5' : '#FEE2E2',
                        color: d.is_active === 1 ? '#047857' : '#991B1B',
                      }}
                    >
                      {d.is_active === 1 ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleToggleActive(d.id)}
                      className={d.is_active === 1 ? 'btn-outline' : 'btn-primary'}
                      style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem' }}
                    >
                      {d.is_active === 1 ? (
                        <>
                          <XCircle size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Disable
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Enable
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
