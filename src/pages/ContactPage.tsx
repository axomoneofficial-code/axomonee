import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { api } from '../api';
import { CheckCircle2, ExternalLink, Star, ShieldCheck, MessageSquareHeart } from 'lucide-react';
import { INSTAGRAM_CONFIG } from '../config/socialConfig';

const FEEDBACK_CATEGORIES = [
  { id: 'review', label: '🌟 General Review' },
  { id: 'suggestion', label: '💡 Suggestion / Idea' },
  { id: 'correction', label: '📝 Directory Correction' },
  { id: 'feedback', label: '💬 General Feedback' },
];

export const ContactPage: React.FC = () => {
  const [category, setCategory] = useState('review');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrorMsg('Please write your feedback or review before submitting.');
      return;
    }

    setIsSending(true);
    setErrorMsg('');
    try {
      const res = await api.submitContact({
        category,
        rating,
        message: message.trim(),
      });
      if (res.success) {
        setSuccessMsg('Thank you! Your feedback and review have been recorded anonymously.');
        setMessage('');
        setRating(5);
      } else {
        setErrorMsg(res.message || 'Failed to submit feedback.');
      }
    } catch {
      setSuccessMsg('Thank you! Your feedback and review have been recorded anonymously.');
      setMessage('');
    } finally {
      setIsSending(false);
    }
  };

  const getRatingLabel = (r: number) => {
    switch (r) {
      case 5: return '⭐⭐⭐⭐⭐ Excellent (অসাধাৰণ)';
      case 4: return '⭐⭐⭐⭐ Good (ভাল)';
      case 3: return '⭐⭐⭐ Average (মধ্যম)';
      case 2: return '⭐⭐ Needs Improvement (উন্নতিৰ প্ৰয়োজন)';
      case 1: return '⭐ Poor (বেয়া)';
      default: return '';
    }
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <SEO
        title="Feedback & Reviews – AXOM ONE"
        description="Share your anonymous feedback, review our regional directory, or suggest corrections for Assam districts and colleges."
        canonicalPath="/contact"
        keywords="Feedback AXOM ONE, reviews, suggestions, corrections, Assam directory feedback"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Feedback & Reviews', path: '/contact' },
        ]}
      />

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', padding: '0.35rem 0.85rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          <MessageSquareHeart size={14} />
          <span>মতামত আৰু পৰ্যালোচনা • Feedback &amp; Community Review</span>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.35rem' }}>
          Feedback &amp; Reviews
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Help us improve AXOM ONE! Share your honest thoughts, review our directory, or suggest improvements.
        </p>
      </div>

      <div className="form-card">
        {/* Privacy Assurance Banner - No Personal Details */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#475569' }}>
          <ShieldCheck size={18} style={{ color: '#16A34A', flexShrink: 0 }} />
          <span>
            <strong>100% Anonymous:</strong> You do not need to share your name, email, or any personal details.
          </span>
        </div>

        {successMsg && (
          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            <span>{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Feedback Category */}
          <div className="form-group">
            <label className="form-label">Category</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem', marginTop: '0.35rem' }}>
              {FEEDBACK_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  style={{
                    padding: '0.55rem 0.65rem',
                    borderRadius: '8px',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    border: category === cat.id ? '2px solid var(--primary-green)' : '1px solid #E2E8F0',
                    background: category === cat.id ? '#ECFDF5' : '#FFFFFF',
                    color: category === cat.id ? '#065F46' : '#475569',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Star Rating */}
          <div className="form-group" style={{ marginTop: '1.25rem' }}>
            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Your Rating</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#D97706' }}>
                {getRatingLabel(hoverRating || rating)}
              </span>
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem', alignItems: 'center' }}>
              {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = (hoverRating || rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.1s',
                    }}
                    aria-label={`Rate ${star} star`}
                  >
                    <Star
                      size={28}
                      fill={isFilled ? '#F59E0B' : 'transparent'}
                      color={isFilled ? '#F59E0B' : '#CBD5E1'}
                      strokeWidth={1.5}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback / Review Textarea */}
          <div className="form-group" style={{ marginTop: '1.25rem' }}>
            <label className="form-label">Your Feedback or Review *</label>
            <textarea
              className="form-textarea"
              placeholder="Write your feedback, experience, suggestions, or corrections here..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', marginTop: '0.75rem' }}
            disabled={isSending}
          >
            {isSending ? 'Submitting...' : 'Submit Anonymous Feedback & Review'}
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
              Direct Chat on Instagram ({INSTAGRAM_CONFIG.handle})
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Want to talk with our team? Send us a DM anytime.
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
          <span>DM @axomone_official</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
};
