import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { useSearchParams, Link } from 'react-router-dom';
import { api } from '../api';
import { Flag, CheckCircle2 } from 'lucide-react';

export const ReportPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledListingId = searchParams.get('listing_id') || '';
  const prefilledTitle = searchParams.get('title') || '';

  const [listingId] = useState(prefilledListingId);
  const [reason, setReason] = useState('Inaccurate Contact or Opening Hours');
  const [description, setDescription] = useState('');
  const [suggestedCorrection, setSuggestedCorrection] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [hpVerification, setHpVerification] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason || !description.trim()) {
      setErrorMsg('Please specify reason and description.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await api.submitReport({
        listing_id: listingId.trim() || undefined,
        reason,
        description: description.trim(),
        suggested_correction: suggestedCorrection.trim() || undefined,
        reporter_contact: reporterContact.trim() || undefined,
        hp_verification: hpVerification.trim() || undefined,
      });

      if (res.success) {
        setSuccessMsg(res.message);
        setDescription('');
        setSuggestedCorrection('');
      } else {
        setErrorMsg(res.message || 'Failed to submit report.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <SEO
        title="Report Inaccuracy or Suggest Correction | AXOMONE"
        description="Submit a data correction, flag outdated information, or report listing concerns to our editorial verification team."
        canonicalPath="/report"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Report & Feedback', path: '/report' },
        ]}
      />
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--gamusa-red)', marginBottom: '0.4rem' }}>
          Report Content or Inaccurate Listing
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Help us keep the Assam directory accurate, safe, and trustworthy for all citizens.
        </p>
      </div>

      <div className="form-card">
        {successMsg ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={56} color="#16A34A" style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
              Report Received
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Thank you for keeping AXOM ONE safe. Our moderation team reviews all flagged content in accordance with our community safety policy.
            </p>
            <Link to="/explore" className="btn-primary">
              Return to Directory
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMsg && (
              <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                {errorMsg}
              </div>
            )}

            {prefilledTitle && (
              <div style={{ background: 'var(--bg-cream)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                Reporting Listing: <strong>{prefilledTitle}</strong>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Violation Category *</label>
              <select
                className="form-select"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              >
                <option value="Inaccurate Contact or Opening Hours">Inaccurate Contact, Address or Opening Hours</option>
                <option value="Business Permanently Closed">Business or Shop Permanently Closed</option>
                <option value="Recruitment Scam / Demanding Money">Job Scam / Requiring Payment for Interview</option>
                <option value="Unauthorized Personal Data (PII)">Unauthorized Personal Data / Privacy Violation</option>
                <option value="False Emergency / Misinformation">False Emergency Notice or Misinformation</option>
                <option value="Harassment or Hate Speech">Harassment or Offensive Content</option>
                <option value="Copyright or Trademark Violation">Copyright or Trademark Infringement</option>
                <option value="Other Policy Violation">Other Policy Violation</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Detailed Explanation *</label>
              <textarea
                className="form-textarea"
                placeholder="Explain what is incorrect, deceptive, or harmful about this listing..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Suggested Correction (Optional)</label>
              <textarea
                className="form-textarea"
                rows={3}
                placeholder="Provide accurate details if known (e.g. updated phone number, correct opening hours, official website, or landmark)..."
                value={suggestedCorrection}
                onChange={(e) => setSuggestedCorrection(e.target.value)}
              />
              <span className="form-hint">
                Our verification desk uses this to fact-check and update the statutory record.
              </span>
            </div>

            {/* Anti-spam honeypot - invisible to human users */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="hp_field">Do not fill this</label>
              <input
                id="hp_field"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={hpVerification}
                onChange={(e) => setHpVerification(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email (Optional, for resolution updates)</label>
              <input
                type="email"
                className="form-input"
                placeholder="citizen@domain.com"
                value={reporterContact}
                onChange={(e) => setReporterContact(e.target.value)}
              />
              <span className="form-hint">
                Your email is never shared with the owner of the reported listing.
              </span>
            </div>

            <button
              type="submit"
              className="btn-danger"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              disabled={isSubmitting}
            >
              <Flag size={16} />
              {isSubmitting ? 'Submitting Report...' : 'Submit Report for Moderation'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};