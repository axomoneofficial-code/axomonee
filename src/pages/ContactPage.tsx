import React, { useState } from 'react';
import { api } from '../api';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { INSTAGRAM_CONFIG } from '../config/socialConfig';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all fields.');
      return;
    }

    setIsSending(true);
    setErrorMsg('');
    try {
      const res = await api.submitContact({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      if (res.success) {
        setSuccessMsg(res.message);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setErrorMsg(res.message || 'Failed to send message.');
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.35rem' }}>
          Contact Axom One
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Questions, district partnership queries, feedback, or listing corrections.
        </p>
      </div>

      <div className="form-card">
        {successMsg && (
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Priyam Hazarika"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Your Email *</label>
            <input
              type="email"
              className="form-input"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message or Inquiry *</label>
            <textarea
              className="form-textarea"
              placeholder="Describe your inquiry or suggestion for our regional directory..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            disabled={isSending}
          >
            {isSending ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Official Instagram Community Connect Card */}
      <div style={{ marginTop: '1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>
              Connect on Instagram ({INSTAGRAM_CONFIG.handle})
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Official Community Channel • DM for quick corrections
            </div>
          </div>
        </div>
        <a
          href={INSTAGRAM_CONFIG.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', borderColor: 'transparent', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
        >
          <span>Follow @axomone_official</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
};
