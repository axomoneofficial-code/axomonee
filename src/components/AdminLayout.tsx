import React from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import {
  LayoutDashboard,
  Inbox,
  List,
  Flag,
  FileText,
  Tags,
  MapPin,
  Settings,
  LogOut,
  ShieldCheck,
  Compass,
  Calendar,
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { currentUser, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '6rem' }}>Verifying admin authorization...</div>;
  }

  // If visitor is not authenticated, present the secure login portal
  if (!currentUser) {
    return <AdminLoginPage />;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '6rem' }}>Verifying admin authorization...</div>;
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="admin-shell">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div style={{ padding: '0 0.5rem 1.25rem 0.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--primary-green)' }}>AXOM ONE</div>
              <div style={{ fontSize: '0.725rem', color: 'var(--gamusa-red)', fontWeight: 700 }}>ADMIN PORTAL</div>
            </div>
          </div>
          {currentUser && (
            <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Signed in as: <br /><strong>{currentUser.email}</strong> ({currentUser.role})
            </div>
          )}
        </div>

        <nav>
          <Link to="/admin" className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`}>
            <LayoutDashboard size={16} /> Overview
          </Link>
          <Link to="/admin/destinations" className={`admin-nav-item ${isActive('/admin/destinations') ? 'active' : ''}`}>
            <Compass size={16} color="var(--gamusa-red)" /> Explore Destinations
          </Link>
          <Link to="/admin/listings" className={`admin-nav-item ${isActive('/admin/listings') ? 'active' : ''}`}>
            <List size={16} /> Manage Directory
          </Link>
          <Link to="/admin/events" className={`admin-nav-item ${isActive('/admin/events') ? 'active' : ''}`}>
            <Calendar size={16} /> Events & Festivals
          </Link>
          <Link to="/admin/submissions" className={`admin-nav-item ${isActive('/admin/submissions') ? 'active' : ''}`}>
            <Inbox size={16} /> Submissions Queue
          </Link>
          <Link to="/admin/directory" className={`admin-nav-item ${isActive('/admin/directory') ? 'active' : ''}`}>
            <ShieldCheck size={16} /> Assam Directory Desk
          </Link>
          <Link to="/admin/reports" className={`admin-nav-item ${isActive('/admin/reports') ? 'active' : ''}`}>
            <Flag size={16} /> User Reports
          </Link>
          <Link to="/admin/districts" className={`admin-nav-item ${isActive('/admin/districts') ? 'active' : ''}`}>
            <MapPin size={16} /> Districts (35)
          </Link>
          <Link to="/admin/categories" className={`admin-nav-item ${isActive('/admin/categories') ? 'active' : ''}`}>
            <Tags size={16} /> Categories
          </Link>
          <Link to="/admin/audit-logs" className={`admin-nav-item ${isActive('/admin/audit-logs') ? 'active' : ''}`}>
            <FileText size={16} /> Audit Logs
          </Link>
          <Link to="/admin/settings" className={`admin-nav-item ${isActive('/admin/settings') ? 'active' : ''}`}>
            <Settings size={16} /> Platform Settings
          </Link>

          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={handleLogout}
              className="admin-nav-item"
              style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: '#DC2626' }}
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Admin Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};
