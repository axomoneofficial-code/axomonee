import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { District, Listing } from '../types';
import { ListingCard } from '../components/ListingCard';
import { api } from '../api';
import { Megaphone, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunityPageProps {
  districts: District[];
  initialDistrict: string;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ districts, initialDistrict }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [districtFilter, setDistrictFilter] = useState(initialDistrict || 'all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [districtFilter]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await api.getListings({ type: 'community', district: districtFilter });
      setListings(data.listings);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Assam Citizens &amp; Community Exchange Platform"
        description="Connect with local Assam communities, share authentic updates, participate in cultural exchanges, and collaborate across districts."
        canonicalPath="/community"
        keywords="Assam community, citizen platform Assam, Assam youth forums, cultural exchange"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Community', path: '/community' },
        ]}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.35rem' }}>
            Approved Community Notices
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            River cleanup drives, neighborhood book donation kiosks, blood donor desks, and civic notices.
          </p>
        </div>
        <Link to="/submit" className="btn-primary">
          <PlusCircle size={16} /> Post Community Notice
        </Link>
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
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>Loading announcements...</div>
      ) : listings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', background: '#FFFFFF', borderRadius: '16px' }}>
          <Megaphone size={48} color="var(--primary-green)" style={{ margin: '0 auto 1rem auto' }} />
          <h2>No announcements active in this district</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Organizing a tree plantation or neighborhood initiative? Share it with the community!</p>
          <Link to="/submit" className="btn-outline" style={{ marginTop: '1rem' }}>Submit Community Notice</Link>
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