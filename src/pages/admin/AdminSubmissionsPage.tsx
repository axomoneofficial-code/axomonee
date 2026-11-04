import React, { useState, useEffect } from 'react';
import { Submission } from '../../types';
import { api } from '../../api';
import { Check, X, Eye } from 'lucide-react';

export const AdminSubmissionsPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filterStatus, setFilterStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [isLoading, setIsLoading] = useState(true);
  const [inspectSub, setInspectSub] = useState<Submission | null>(null);

  useEffect(() => {
    loadSubmissions();
  }, [filterStatus]);

  const loadSubmissions = async () => {
    setIsLoading(true);
    try {
      const data = await api.getAdminSubmissions(filterStatus);
      setSubmissions(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    if (!window.confirm('Approve and publish this submission?')) return;
    await api.approveSubmission(id);
    loadSubmissions();
  };

  const handleReject = async (id: string) => {
    const notes = prompt('Enter rejection reason for submitter record:', 'Does not meet publication standards');
    if (notes === null) return;
    await api.rejectSubmission(id, notes);
    loadSubmissions();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
            Submissions Moderation Queue
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Review, verify, and approve public listings before publication.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', background: '#FFFFFF', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
          {(['pending', 'approved', 'rejected'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                border: 'none',
                background: filterStatus === st ? 'var(--primary-green)' : 'transparent',
                color: filterStatus === st ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Submitter</th>
              <th>Title / Payload</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  Loading queue items...
                </td>
              </tr>
            ) : submissions.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#16A34A' }}>
                  ✨ No {filterStatus} submissions in queue.
                </td>
              </tr>
            ) : (
              submissions.map((sub) => {
                let payload: any = {};
                try {
                  payload = JSON.parse(sub.payload_json);
                } catch {}

                return (
                  <tr key={sub.id}>
                    <td><code>{sub.id}</code></td>
                    <td><span className="badge-tag badge-green">{sub.submission_type}</span></td>
                    <td>
                      <div><strong>{sub.submitter_name}</strong></div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sub.submitter_email}</div>
                    </td>
                    <td>
                      <strong>{payload.title || 'Untitled'}</strong>
                      <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {payload.description || ''}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {new Date(sub.created_at).toLocaleDateString()}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          onClick={() => setInspectSub(sub)}
                          className="btn-outline"
                          style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                          title="View Full Payload"
                        >
                          <Eye size={13} /> View
                        </button>

                        {filterStatus === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(sub.id)}
                              className="btn-primary"
                              style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem', background: '#16A34A' }}
                              title="Approve & Publish"
                            >
                              <Check size={13} /> Approve
                            </button>
                            <button
                              onClick={() => handleReject(sub.id)}
                              className="btn-danger"
                              style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                              title="Reject Submission"
                            >
                              <X size={13} /> Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Inspect Payload Modal */}
      {inspectSub && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '16px', maxWidth: '600px', width: '100%', padding: '2rem', maxHeight: '85vh', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Submission Details ({inspectSub.id})</h3>
            <pre style={{ background: 'var(--bg-cream)', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(JSON.parse(inspectSub.payload_json || '{}'), null, 2)}
            </pre>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button onClick={() => setInspectSub(null)} className="btn-outline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
