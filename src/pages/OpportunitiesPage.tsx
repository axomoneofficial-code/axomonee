import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { District, Listing } from '../types';
import { ListingCard } from '../components/ListingCard';
import { api } from '../api';
import { GraduationCap, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OpportunitiesPageProps {
  districts: District[];
  initialDistrict: string;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({ districts, initialDistrict }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [districtFilter, setDistrictFilter] = useState(initialDistrict || 'all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [districtFilter]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await api.getListings({ type: 'opportunity', district: districtFilter });
      setListings(data.listings);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Assam Youth Opportunities, Scholarships &amp; Internships"
        description="Curated career opportunities, government scholarships, skill initiatives, and educational pathways for youth across Assam."
        canonicalPath="/opportunities"
        keywords="Assam scholarships, Assam youth opportunities, education Assam, internships Assam"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Opportunities', path: '/opportunities' },
        ]}
      />
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.35rem' }}>
          Jobs, Internships & Education Notices
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Verified public research fellowships, vocational apprenticeships, and scholarships for the youth of Assam.
        </p>
      </div>

      {/* Mandatory Job Fraud & Recruitment Safety Warning */}
      <div
        style={{
          background: 'var(--gamusa-red-soft)',
          border: '1px solid #FECACA',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <AlertTriangle size={28} color="var(--gamusa-red)" style={{ flexShrink: 0 }} />
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--gamusa-red-dark)', marginBottom: '0.2rem' }}>
            CRITICAL ADVISORY: Never Pay for Job Offers or Recruitment Tests
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#7F1D1D', lineHeight: 1.5 }}>
            Legitimate employers and official fellowship programs never request cash, advance fees, or security deposits for interviews.
            If any listing asks for money, immediately click "Report Listing" or report it via our{' '}
            <Link to="/report" style={{ color: 'var(--gamusa-red)', fontWeight: 700, textDecoration: 'underline' }}>
              Safety Channel
            </Link>.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Filter District:</span>
        <select
          className="filter-select"
          style={{ width: 'auto', minWidth: '220px' }}
          value={districtFilter}
          onChange={(e) => setDistrictFilter(e.target.value)}
        >
          <option value="all">All Assam (সকলো জিলা)</option>
          {districts.map((d) => (
            <option key={d.id} value={d.slug}>
              {d.name} ({d.name_as})
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>Loading opportunity notices...</div>
      ) : listings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', background: '#FFFFFF', borderRadius: '16px' }}>
          <GraduationCap size={48} color="var(--primary-green)" style={{ margin: '0 auto 1rem auto' }} />
          <h2>No opportunities active for this district</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Check back soon as verified notices are posted weekly.</p>
        </div>
      ) : (
        <div className="listings-grid">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      )}
    </div>
  );
};