import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Shield, Lock, Mail, Eye, EyeOff, AlertCircle, ArrowLeft } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError('Please provide both administrative email and password.');
      return;
    }

    const res = await login(email.trim(), password);
    if (res.success) {
      navigate('/admin');
    } else {
      setError(res.error || 'Invalid credentials. Access denied.');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        {/* Authentic Gamusa Silk Top Strip */}
        <div className="gamusa-top-woven-strip" style={{ height: '8px', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />

        <div className="admin-login-body">
          <div className="admin-login-header">
            <div className="admin-login-icon-box">
              <Shield size={28} color="#DC2626" />
            </div>
            <h1 className="admin-login-title">AXOM ONE</h1>
            <div className="admin-login-badge">Administrative Access Desk</div>
            <p className="admin-login-desc">
              Secure authentication for authorized editors, state curators, and platform administrators.
            </p>
          </div>

          {error && (
            <div className="admin-login-error">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="admin-login-field">
              <label htmlFor="admin-email" className="admin-field-label">
                Administrative Email
              </label>
              <div className="admin-input-wrap">
                <Mail size={16} className="admin-input-icon" />
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoFocus
                  placeholder="admin@axom.one"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="admin-login-input"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="admin-login-field">
              <label htmlFor="admin-password" className="admin-field-label">
                Master Password
              </label>
              <div className="admin-input-wrap">
                <Lock size={16} className="admin-input-icon" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter administrator password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="admin-login-input"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="admin-pw-toggle-btn"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="admin-login-submit-btn"
            >
              {isLoading ? 'Verifying Credentials...' : 'Authenticate & Enter Portal'}
            </button>
          </form>

          <div className="admin-login-footer">
            <Link to="/" className="admin-login-back-link">
              <ArrowLeft size={14} />
              <span>Back to Public Portal</span>
            </Link>
            <div className="admin-login-note">
              Unauthorized access attempts are audited and logged with IP verification.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
