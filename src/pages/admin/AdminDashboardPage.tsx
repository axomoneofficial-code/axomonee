import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminStats } from '../../types';
import { api } from '../../api';
import { Inbox, Flag, ArrowRight, Compass, Calendar, Store, MapPin } from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const [stats, setStats] = useState<AdminStats>({
    published_listings: 0,
    pending_submissions: 0,
    open_reports: 0,
    active_districts: 35,
    destinations_count: 44,
    events_count: 2,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await api.getAdminStats();
      setStats(data);
    } catch {}
  };

  return (
    <div>
      {/* Top Gamusa Jacquard Strip */}
      <div className="gamusa-top-woven-strip" style={{ height: '5px', borderRadius: '4px', marginBottom: '1.5rem' }} />

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-green)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span>অসম ONE</span> • Platform Command Center
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Real-time metrics, content administration, and moderation workload across all 35 Assam districts.
        </p>
      </div>

      {/* 6 Stats Cards */}
      <div className="stat-cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div className="stat-card" style={{ borderLeft: '4px solid #059669' }}>
          <div className="stat-val" style={{ color: '#059669' }}>{stats.destinations_count || 44}</div>
          <div className="stat-lbl">Explore Destinations</div>
        </div>

        <div className="stat-card" style={{ borderLeft: '4px solid #2563EB' }}>
          <div className="stat-val" style={{ color: '#2563EB' }}>{stats.published_listings}</div>
          <div className="stat-lbl">Published Directory</div>
        </div>

        <div className="stat-card" style={{ borderLeft: '4px solid #7C3AED' }}>
          <div className="stat-val" style={{ color: '#7C3AED' }}>{stats.events_count || 2}</div>
          <div className="stat-lbl">Events & Festivals</div>
        </div>

        <div className="stat-card" style={{ borderLeft: '4px solid #F59E0B' }}>
          <div className="stat-val" style={{ color: '#D97706' }}>{stats.pending_submissions}</div>
          <div className="stat-lbl">Pending Submissions</div>
        </div>

        <div className="stat-card" style={{ borderLeft: '4px solid #DC2626' }}>
          <div className="stat-val" style={{ color: '#DC2626' }}>{stats.open_reports}</div>
          <div className="stat-lbl">Open User Reports</div>
        </div>

        <div className="stat-card" style={{ borderLeft: '4px solid #0D9488' }}>
          <div className="stat-val" style={{ color: '#0D9488' }}>{stats.active_districts}</div>
          <div className="stat-lbl">Active Districts</div>
        </div>
      </div>

      {/* Quick Action Panels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
        {/* 1. Explore Assam Destinations */}
        <div style={{ background: '#FFFFFF', padding: '1.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', marginBottom: '0.5rem' }}>
            <Compass size={20} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Explore Assam Destinations</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Create, verify, and publish heritage landscapes, tea tourism, sanctuaries, and cultural villages across 35 districts.
          </p>
          <Link to="/admin/destinations" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}>
            Manage Destinations <ArrowRight size={14} />
          </Link>
        </div>

        {/* 2. Directory & Business Listings */}
        <div style={{ background: '#FFFFFF', padding: '1.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563EB', marginBottom: '0.5rem' }}>
            <Store size={20} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Directory & Businesses</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Manage local enterprises, silk weavers, universities, mechanics, and public emergency contacts.
          </p>
          <Link to="/admin/listings" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', color: '#2563EB' }}>
            Manage Directory <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3. Community Submissions */}
        <div style={{ background: '#FFFFFF', padding: '1.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', marginBottom: '0.5rem' }}>
            <Inbox size={20} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Submissions Queue</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Quarantine review: Approve or reject community-submitted businesses, festivals, and listings before publication.
          </p>
          <Link to="/admin/submissions" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', color: '#D97706' }}>
            Review Submissions <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4. Events & Festivals */}
        <div style={{ background: '#FFFFFF', padding: '1.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7C3AED', marginBottom: '0.5rem' }}>
            <Calendar size={20} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Events & Festivals</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Publish Bihu celebrations, Raas Mahotsav, literature fairs, and cultural gatherings across districts.
          </p>
          <Link to="/admin/events" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', color: '#7C3AED' }}>
            Manage Events <ArrowRight size={14} />
          </Link>
        </div>

        {/* 5. User Reports */}
        <div style={{ background: '#FFFFFF', padding: '1.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626', marginBottom: '0.5rem' }}>
            <Flag size={20} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>User Reports Desk</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Resolve citizen flags regarding outdated timings, closed businesses, or unverified claims.
          </p>
          <Link to="/admin/reports" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', color: '#DC2626' }}>
            Review Reports <ArrowRight size={14} />
          </Link>
        </div>

        {/* 6. District Administration */}
        <div style={{ background: '#FFFFFF', padding: '1.35rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0D9488', marginBottom: '0.5rem' }}>
            <MapPin size={20} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Districts of Assam</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Enable or update administrative district boundaries, headquarters, and regional metadata.
          </p>
          <Link to="/admin/districts" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', color: '#0D9488' }}>
            View 35 Districts <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
