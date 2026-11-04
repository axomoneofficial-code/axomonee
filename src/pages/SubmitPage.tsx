import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { District, Category } from '../types';
import { api } from '../api';
import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContextualHelp } from '../components/guidance';

interface SubmitPageProps {
  districts: District[];
  categories: Category[];
}

export const SubmitPage: React.FC<SubmitPageProps> = ({ districts, categories }) => {
  const [submissionType, setSubmissionType] = useState('business');
  const [submitterName, setSubmitterName] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');
  const [title, setTitle] = useState('');
  const [districtSlug, setDistrictSlug] = useState(districts[0]?.slug || 'kamrup-metropolitan');
  const [categorySlug, setCategorySlug] = useState('businesses');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard for bots
    setErrorMessage('');

    if (!title.trim() || !description.trim() || !submitterName.trim() || !submitterEmail.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (website.trim() && !/^https?:\/\//i.test(website.trim())) {
      setErrorMessage('Website URL must start with http:// or https://');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitListing({
        submitter_name: submitterName.trim(),
        submitter_email: submitterEmail.trim(),
        submission_type: submissionType,
        payload: {
          title: title.trim(),
          district_slug: districtSlug,
          category_slug: categorySlug,
          description: description.trim(),
          address: address.trim() || undefined,
          contact_phone: phone.trim() || undefined,
          website_url: website.trim() || undefined,
        },
      });

      if (res.success) {
        setSubmittedSuccess(true);
      } else {
        setErrorMessage(res.message || 'Submission failed. Please check your information.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedSuccess) {
    return (
      <div className="form-card" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
        <CheckCircle2 size={64} color="#16A34A" style={{ margin: '0 auto 1rem auto' }} />
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
          Submission Placed in Moderation Queue!
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
          Thank you for contributing to <strong>AXOM ONE</strong>. To protect our community from spam and fraudulent listings, every entry is reviewed against our safety standards before being published.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={() => {
              setSubmittedSuccess(false);
              setTitle('');
              setDescription('');
              setAddress('');
              setPhone('');
              setWebsite('');
            }}
            className="btn-outline"
          >
            Submit Another Entry
          </button>
          <Link to="/explore" className="btn-primary">
            Explore Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <SEO
        title="Submit Listing or Update – Assam Discovery Portal | AXOMONE"
        description="Contribute verified information about local businesses, educational institutions, historical places, or cultural events in Assam."
        canonicalPath="/submit"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Submit Listing', path: '/submit' },
        ]}
      />
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.4rem' }}>
          Submit a Listing or Community Notice
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Add your enterprise, essential civic trade, craft workshop, or event to Assam's open directory.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.75rem' }}>
          <ContextualHelp topicKey="submit" />
        </div>
      </div>

      <div className="form-card" data-tour="submit-form">
        {errorMessage && (
          <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Honeypot field (hidden from real users, caught by bots) */}
          <div style={{ display: 'none' }}>
            <label>Leave this empty</label>
            <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </div>

          {/* Submission Type Toggle */}
          <div className="form-group">
            <label className="form-label">Select What You Are Submitting *</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
              {[
                { id: 'business', label: 'Local Business' },
                { id: 'service', label: 'Essential Service' },
                { id: 'event', label: 'Cultural Event' },
                { id: 'community', label: 'Community Notice' },
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setSubmissionType(t.id)}
                  style={{
                    padding: '0.65rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: submissionType === t.id ? '2px solid var(--gamusa-red)' : '1px solid var(--border-strong)',
                    background: submissionType === t.id ? 'var(--gamusa-red-soft)' : '#FFFFFF',
                    color: submissionType === t.id ? 'var(--gamusa-red-dark)' : 'var(--text-secondary)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* District & Category */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">District in Assam *</label>
              <select
                className="form-select"
                value={districtSlug}
                onChange={(e) => setDistrictSlug(e.target.value)}
                required
              >
                {districts.map((d) => (
                  <option key={d.id} value={d.slug}>
                    {d.name} ({d.name_as})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Category *</label>
              <select
                className="form-select"
                value={categorySlug}
                onChange={(e) => setCategorySlug(e.target.value)}
                required
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Title */}
          <div className="form-group">
            <label className="form-label">Title / Enterprise / Event Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Guwahati Handloom Weavers Cooperative"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description & Offerings *</label>
            <textarea
              className="form-textarea"
              placeholder="Detail your products, service specializations, opening timings, and heritage..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Physical Address */}
          <div className="form-group">
            <label className="form-label">Physical Address / Landmark</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. House 42, G.S. Road, Christian Basti, Guwahati 781005"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Contact Information */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Public Contact Phone</label>
              <input
                type="text"
                className="form-input"
                placeholder="+91-98765-43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Website or Social Page URL</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://example.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>

          {/* Submitter Verification Information */}
          <div
            style={{
              background: 'var(--bg-cream)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
              <ShieldAlert size={16} />
              <strong style={{ fontSize: '0.85rem' }}>Submitter Verification (Confidential)</strong>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Your personal email and identity are never displayed on public listing cards. We collect this solely to verify listing authenticity and contact you if edits are required.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="form-label">Your Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Ankur Sarma"
                  value={submitterName}
                  onChange={(e) => setSubmitterName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="form-label">Your Email Address *</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@domain.com"
                  value={submitterEmail}
                  onChange={(e) => setSubmitterEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending to Moderation...' : 'Submit Listing for Review'}
          </button>
        </form>
      </div>
    </div>
  );
};