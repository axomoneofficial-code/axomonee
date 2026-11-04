import React from 'react';
import { Link } from 'react-router-dom';
import { Listing } from '../types';
import { CheckCircle2, MapPin, Phone, ExternalLink, Flag, ArrowRight } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <article className={`listing-card ${listing.is_sponsored ? 'sponsored-border' : ''}`}>
      <div>
        <div className="card-top-badges">
          <span className="badge-tag badge-green">
            {listing.category_name || listing.listing_type}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            {listing.is_sponsored === 1 && (
              <span className="badge-sponsored">Featured</span>
            )}
            {listing.verification_status === 'verified' && (
              <span className="badge-verified" title="Identity independently verified">
                <CheckCircle2 size={12} /> Verified
              </span>
            )}
          </div>
        </div>

        <h3 className="listing-title">
          <Link to={`/businesses/${listing.slug}`}>{listing.title}</Link>
        </h3>

        <div className="listing-district-row">
          <MapPin size={13} color="#DC2626" />
          <span>{listing.district_name || 'Assam'} {listing.district_name_as && `(${listing.district_name_as})`}</span>
        </div>

        <p className="listing-desc">{listing.description}</p>
      </div>

      <div className="listing-card-footer">
        <div>
          {listing.contact_phone ? (
            <span className="card-contact-hint" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={13} color="#059669" /> {listing.contact_phone}
            </span>
          ) : listing.website_url ? (
            <a
              href={listing.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-website-link"
            >
              <ExternalLink size={13} /> Visit Site
            </a>
          ) : (
            <span style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Local Listing</span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Link
            to={`/report?listing_id=${listing.id}`}
            title="Report inaccurate information"
            className="card-flag-btn"
          >
            <Flag size={13} />
          </Link>
          <Link to={`/businesses/${listing.slug}`} className="btn-card-details">
            <span>View Details</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
};
