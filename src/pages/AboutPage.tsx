import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldAlert, Heart, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <SEO
        title="About AXOMONE – Authentic Assam Discovery &amp; Civic Portal"
        description="Learn about the mission, cultural vision, data verification standards, and community ethos behind the AXOMONE portal for Assam."
        canonicalPath="/about"
        keywords="About AXOMONE, Assam portal mission, Assam civic initiative, verified Assam database"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About AXOMONE', path: '/about' },
        ]}
      />
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '2.5rem' }}>🦏</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-green)', marginTop: '0.5rem', marginBottom: '0.4rem' }}>
          About AXOM ONE (অসম এক মঞ্চ)
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
          A community-driven digital infrastructure project for Assam, uniting traditional heritage with contemporary local utility.
        </p>
      </div>

      <div className="form-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.75rem' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Assam's towns and villages possess extraordinary wealth in cultural arts, handloom weaving, organic agriculture, and local expertise.
          However, accessing verified local contacts, civic repair technicians, upcoming sattra festivals, and authentic artisan collectives has historically been fragmented across social media groups and out-of-date directories.
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          <strong>AXOM ONE</strong> bridges this gap by creating an open, high-speed, community-moderated directory that works across all 35 districts of Assam, on mobile devices, low-bandwidth networks, and multiple languages.
        </p>
      </div>

      {/* Non-Government Status Clear Disclaimer */}
      <div
        style={{
          background: 'var(--gold-accent-soft)',
          borderLeft: '5px solid var(--gold-accent)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#92400E', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.05rem' }}>
          <ShieldAlert size={20} />
          <span>Independent Platform Disclaimer</span>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#78350F', lineHeight: 1.6 }}>
          AXOM ONE is an independent, community-operated platform. We do not represent or impersonate the Government of Assam or any department thereof.
          Official administrative procedures, legal certificates, or governmental filings must be completed through official state portals.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-green)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle size={18} color="var(--primary-green)" /> Human Moderation
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Every submission is screened by community moderators before publication to eliminate spam, scams, and deceptive ads.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-green)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={18} color="var(--gamusa-red)" /> 35 Districts Architecture
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            From Majuli to Dima Hasao, Dhubri to Tinsukia, every region is represented with bilingual Assamese and English metadata.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-green)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Heart size={18} color="var(--gamusa-red)" /> Privacy by Design
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Zero invasive tracking cookies, no GPS spying, and strict data minimization aligned with India's DPDP Act.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
          Get in Touch with our Team
        </Link>
      </div>
    </div>
  );
};