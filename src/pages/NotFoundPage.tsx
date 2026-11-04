import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '6rem 1.5rem', maxWidth: '600px', margin: '0 auto' }}>
      <SEO
        title="Page Not Found (404) | AXOMONE"
        description="The requested page could not be found on AXOMONE. Return to the homepage to explore Assam districts, tourism, and services."
        canonicalPath="/404"
      />
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🦏</div>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
        Page Not Found • পৃষ্ঠা পোৱা নগল
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
        The page you are looking for may have been moved, renamed, or is temporarily unavailable across the Assam regional gateway.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/" className="btn-primary">
          <Home size={16} /> Return Home
        </Link>
        <Link to="/explore" className="btn-outline">
          <Compass size={16} /> Explore Directory
        </Link>
      </div>
    </div>
  );
};