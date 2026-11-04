import React, { useState, useEffect } from 'react';
import { AuditLog } from '../../types';
import { api } from '../../api';

export const AdminAuditLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    setIsLoading(true);
    try {
      const data = await api.getAuditLogs();
      setLogs(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)' }}>
          System Audit Trail & Moderation Logs
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Immutable record of administrator actions, content approvals, and security events.
        </p>
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Timestamp (UTC)</th>
              <th>Administrator</th>
              <th>Action</th>
              <th>Resource</th>
              <th>Metadata</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>Loading audit records...</td>
              </tr>
            ) : logs.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '3rem' }}>No audit records available.</td>
              </tr>
            ) : (
              logs.map((log) => (
                <tr key={log.id}>
                  <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {new Date(log.created_at).toLocaleString()}
                  </td>
                  <td><strong>{log.admin_email || log.admin_user_id}</strong></td>
                  <td>
                    <code style={{ background: '#F1F5F9', padding: '0.2rem 0.45rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {log.action}
                    </code>
                  </td>
                  <td>
                    {log.resource_type}: <code>{log.resource_id}</code>
                  </td>
                  <td style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {log.metadata_json}
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
