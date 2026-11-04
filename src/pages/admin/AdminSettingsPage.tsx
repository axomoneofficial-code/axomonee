import React, { useState } from 'react';
import { FALLBACK_DISTRICTS } from '../../api';
import { Save, CheckCircle2 } from 'lucide-react';

export const AdminSettingsPage: React.FC = () => {
  const [launchDistrict, setLaunchDistrict] = useState('kamrup-metropolitan');
  const [siteNotice, setSiteNotice] = useState(
    'AXOM ONE is an independent civic portal and is not an official government agency or government website.'
  );
  const [enableSubmissions, setEnableSubmissions] = useState(true);
  const [requireManualReview, setRequireManualReview] = useState(true);
  const [maxSubmissionsPerHour, setMaxSubmissionsPerHour] = useState(10);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
          Platform Settings & Launch Configuration
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Configure launch parameters, public advisories, and edge safety thresholds.
        </p>
      </div>

      <div className="form-card" style={{ maxWidth: '100%', padding: '2rem' }}>
        {savedSuccess && (
          <div
            style={{
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#065F46',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={18} /> Settings updated successfully!
          </div>
        )}

        <form onSubmit={handleSave}>
          <div className="form-group">
            <label className="form-label">Launch District (Initial MVP Scope)</label>
            <select
              className="form-select"
              value={launchDistrict}
              onChange={(e) => setLaunchDistrict(e.target.value)}
            >
              {FALLBACK_DISTRICTS.map((d) => (
                <option key={d.id} value={d.slug}>
                  {d.name} ({d.name_as})
                </option>
              ))}
            </select>
            <span className="form-hint">
              Selected launch district serves as default for new visitors while keeping all 35 districts scalable.
            </span>
          </div>

          <div className="form-group">
            <label className="form-label">Mandatory Non-Government Disclaimer Banner</label>
            <textarea
              className="form-textarea"
              value={siteNotice}
              onChange={(e) => setSiteNotice(e.target.value)}
              rows={3}
              required
            />
            <span className="form-hint">
              Prominently displayed in header and footer across all public views to maintain strict civic transparency.
            </span>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-green)', marginBottom: '1rem' }}>
              Moderation & Edge Controls
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={enableSubmissions}
                  onChange={(e) => setEnableSubmissions(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                />
                <span><strong>Accept Public Submissions</strong> (Allow businesses & community notices)</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={requireManualReview}
                  onChange={(e) => setRequireManualReview(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary-green)' }}
                />
                <span><strong>Enforce Manual Review</strong> (Submissions stay in <code>pending</code> until moderator approval)</span>
              </label>
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '1.5rem' }}>
            <label className="form-label">Rate Limit: Max Submissions Per Hour Per IP</label>
            <input
              type="number"
              className="form-input"
              value={maxSubmissionsPerHour}
              onChange={(e) => setMaxSubmissionsPerHour(parseInt(e.target.value, 10))}
              min={1}
              max={50}
              style={{ width: '120px' }}
            />
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Save size={16} /> Save Configuration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
