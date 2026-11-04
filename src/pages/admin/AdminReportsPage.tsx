import React, { useState, useEffect } from 'react';
import { ReportItem } from '../../types';
import { api } from '../../api';
import { Check, X } from 'lucide-react';

export const AdminReportsPage: React.FC = () => {
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    setIsLoading(true);
    try {
      const data = await api.getAdminReports();
      setReports(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResolve = async (id: string, status: 'resolved' | 'dismissed') => {
    await api.updateReport(id, status);
    loadReports();
  };

  const parseReportDescription = (text: string) => {
    const marker = '\n\n[Suggested Correction]:\n';
    if (text && text.includes(marker)) {
      const parts = text.split(marker);
      return {
        issue: parts[0]?.trim() || '',
        suggestedCorrection: parts.slice(1).join(marker).trim(),
      };
    }
    return { issue: text, suggestedCorrection: null };
  };

  return (
    <div>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
          Community User Reports
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Resolve complaints regarding inaccurate listings, scams, or policy violations.
        </p>
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Reported Listing</th>
              <th>Reason</th>
              <th>Description</th>
              <th>Reporter</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '2rem' }}>Loading user reports...</td>
              </tr>
            ) : reports.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '3rem', color: '#16A34A' }}>
                  ✨ All user reports resolved!
                </td>
              </tr>
            ) : (
              reports.map((rep) => (
                <tr key={rep.id}>
                  <td><code>{rep.id}</code></td>
                  <td><strong>{rep.listing_title || rep.listing_id || 'General'}</strong></td>
                  <td><span style={{ color: 'var(--gamusa-red)', fontWeight: 600 }}>{rep.reason}</span></td>
                  <td style={{ fontSize: '0.8rem', maxWidth: '320px', lineHeight: 1.45 }}>
                    {(() => {
                      const { issue, suggestedCorrection } = parseReportDescription(rep.description);
                      return (
                        <div>
                          <div>{issue}</div>
                          {suggestedCorrection && (
                            <div
                              style={{
                                marginTop: '0.45rem',
                                padding: '0.35rem 0.55rem',
                                background: '#FEF3C7',
                                borderLeft: '3px solid #D97706',
                                borderRadius: '4px',
                                color: '#92400E',
                                fontSize: '0.75rem',
                              }}
                            >
                              <strong>💡 Proposed Fix:</strong> {suggestedCorrection}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </td>
                  <td style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rep.reporter_contact || 'Anonymous'}</td>
                  <td>
                    <span
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: '999px',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        background: rep.status === 'pending' ? '#FEF3C7' : '#ECFDF5',
                        color: rep.status === 'pending' ? '#B45309' : '#047857',
                      }}
                    >
                      {rep.status}
                    </span>
                  </td>
                  <td>
                    {rep.status === 'pending' ? (
                      <div style={{ display: 'flex', gap: '0.35rem' }}>
                        <button
                          onClick={() => handleResolve(rep.id, 'resolved')}
                          className="btn-primary"
                          style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', background: '#16A34A' }}
                          title="Mark Resolved"
                        >
                          <Check size={12} /> Resolve
                        </button>
                        <button
                          onClick={() => handleResolve(rep.id, 'dismissed')}
                          className="btn-outline"
                          style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                          title="Dismiss as False Alarm"
                        >
                          <X size={12} /> Dismiss
                        </button>
                      </div>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Closed</span>
                    )}
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
