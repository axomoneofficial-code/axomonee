import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { District, Listing } from '../types';
import { ListingCard } from '../components/ListingCard';
import { api } from '../api';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContextualHelp, GuidanceEmptyState } from '../components/guidance';

interface ServicesPageProps {
  districts: District[];
  initialDistrict: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ districts, initialDistrict }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [districtFilter, setDistrictFilter] = useState(initialDistrict || 'all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [districtFilter]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await api.getListings({ type: 'service', district: districtFilter });
      setListings(data.listings);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Assam Essential Services, Repairs &amp; Civic Utilities"
        description="Find trusted local technicians, vehicle repairs, medical centers, emergency helplines, and municipal civic services in your Assam district."
        canonicalPath="/services"
        keywords="Assam services, emergency helplines Assam, vehicle repairs, appliance care, municipal services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Essential Services', path: '/services' },
        ]}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.35rem' }}>
            Essential Civic & Home Services
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Electricians, solar installers, emergency technicians, medical clinics, and repair services.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <ContextualHelp topicKey="services" />
          <Link to="/submit" className="btn-primary">
            <PlusCircle size={16} /> Register Service
          </Link>
        </div>
      </div>

      <div className="services-filter-bar" data-tour="services-list" style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>Loading services...</div>
      ) : listings.length === 0 ? (
        <GuidanceEmptyState
          title="No Services Found for this District"
          description="Are you a certified technician, electrician, artisan, or healthcare provider? List your service for free on AXOM ONE."
          onResetFilters={() => setDistrictFilter('all')}
          resetLabel="Show All Assam Services"
          secondaryLink={{ to: '/submit', label: '+ Register Your Service' }}
        />
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