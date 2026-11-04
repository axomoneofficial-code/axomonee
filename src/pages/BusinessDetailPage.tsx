import { getAssetUrl } from '../utils/assetHelper';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Listing } from '../types';
import { api } from '../api';
import { sanitizeExternalUrl } from '../utils/security';
import {
  MapPin,
  Globe,
  Clock,
  CheckCircle2,
  Flag,
  ArrowLeft,
  Share2,
} from 'lucide-react';

export const BusinessDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [listing, setListing] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      loadListing(slug);
    }
  }, [slug]);

  const loadListing = async (s: string) => {
    setIsLoading(true);
    try {
      const item = await api.getListingBySlug(s);
      setListing(item);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>Loading listing details...</div>;
  }

  if (!listing) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <h2>Listing Not Found</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem 0' }}>The listing you are searching for might have been moved or removed.</p>
        <Link to="/explore" className="btn-primary">&larr; Back to Directory</Link>
      </div>
    );
  }

  let openingHours: Record<string, string> = {};
  if (listing.opening_hours_json) {
    try {
      openingHours = JSON.parse(listing.opening_hours_json);
    } catch {}
  }

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Top Breadcrumb */}
      <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/explore" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Directory
        </Link>
        <button onClick={handleShare} className="btn-outline" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
          <Share2 size={14} /> {copied ? 'Link Copied!' : 'Share'}
        </button>
      </div>

      <article className="detail-container">
        {/* Top Woven Gamusa Jacquard Strip */}
        <div className="gamusa-top-woven-strip" style={{ height: '6px', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }} />

        {/* Detail Hero Image if provided */}
        {listing.image_url && (
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', margin: '1.25rem 1.25rem 1.5rem', maxHeight: '420px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <img
              src={getAssetUrl(listing.image_url)}
              alt={listing.title}
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Header Section */}
        <header className="detail-header">
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="badge-tag badge-green">{listing.category_name || listing.listing_type}</span>
            {listing.verification_status === 'verified' && (
              <span className="badge-verified">
                <CheckCircle2 size={13} /> Verified Listing
              </span>
            )}
            {listing.is_sponsored === 1 && (
              <span className="badge-sponsored">Featured Partner</span>
            )}
          </div>

          <h1 className="detail-title">{listing.title}</h1>

          <div className="detail-meta-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={15} color="var(--gamusa-red)" />
              <strong>{listing.district_name}</strong> {listing.district_name_as && `(${listing.district_name_as})`}
            </span>
            <span>•</span>
            <span>Published: {listing.published_at ? new Date(listing.published_at).toLocaleDateString() : 'Recently'}</span>
          </div>
        </header>

        {/* Description */}
        <div style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '2rem' }}>
          <p>{listing.description}</p>
        </div>

        {/* Contact & Hours Info Grid */}
        <div className="info-cards-row">
          {listing.address && (
            <div className="info-box">
              <h4>Location & Address</h4>
              <p>{listing.address}</p>
            </div>
          )}

          {listing.contact_phone && (
            <div className="info-box">
              <h4>Contact Phone</h4>
              <p>
                <a href={`tel:${listing.contact_phone}`} style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>
                  {listing.contact_phone}
                </a>
              </p>
            </div>
          )}

          {listing.contact_email && (
            <div className="info-box">
              <h4>Email Inquiry</h4>
              <p>
                <a href={`mailto:${listing.contact_email}`} style={{ color: 'var(--primary-green)', textDecoration: 'none' }}>
                  {listing.contact_email}
                </a>
              </p>
            </div>
          )}

          {listing.website_url && sanitizeExternalUrl(listing.website_url) && (
            <div className="info-box">
              <h4>Official Website</h4>
              <p>
                <a href={sanitizeExternalUrl(listing.website_url)} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gamusa-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Globe size={14} /> Visit Website
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Opening Hours Section if provided */}
        {Object.keys(openingHours).length > 0 && (
          <div style={{ background: 'var(--bg-ivory)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-green)' }}>
              <Clock size={16} /> Opening Hours / Schedule
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', fontSize: '0.85rem' }}>
              {Object.entries(openingHours).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0', borderBottom: '1px dashed var(--border-subtle)' }}>
                  <span style={{ textTransform: 'capitalize', color: 'var(--text-muted)' }}>{key.replace('_', ' ')}:</span>
                  <span style={{ fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Official Source Reference */}
        {listing.source_url && (
          <div style={{ marginBottom: '2rem', padding: '1rem 1.25rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155' }}>
              <CheckCircle2 size={16} color="#059669" />
              <span><strong>Verified Record:</strong> Information cross-checked against official institutional portal & district records.</span>
            </div>
            {sanitizeExternalUrl(listing.source_url) && (
              <a href={sanitizeExternalUrl(listing.source_url)} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--gamusa-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                Official Reference <Globe size={13} />
              </a>
            )}
          </div>
        )}

        {/* Content Moderation & Reporting Flag */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div>
            Notice inaccurate info, closed shop, or violation?
          </div>
          <Link
            to={`/report?listing_id=${listing.id}&title=${encodeURIComponent(listing.title)}`}
            className="btn-outline"
            style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', color: 'var(--gamusa-red)' }}
          >
            <Flag size={13} /> Report Listing
          </Link>
        </div>
      </article>
    </div>
  );
};
