import React from 'react';
import { SEO } from '../components/SEO';

export const TermsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <SEO
        title="Terms of Service &amp; Usage Guidelines | AXOMONE"
        description="Terms and guidelines for using the AXOMONE Assam portal, verified content licensing, and community conduct."
        canonicalPath="/terms"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ]}
      />
      <article className="detail-container">
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
          Terms of Use & Community Standards
        </h1>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
          Last Updated: October 31, 2026
        </div>

        <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or contributing to AXOM ONE, you agree to these Terms of Use and our Community Standards. If you do not agree, please discontinue using the platform.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              2. Accuracy & Prohibited Content
            </h2>
            <p>
              Users and listing submitters agree not to submit:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>False emergency alerts, fabricated flood warnings, or impersonations of district authorities.</li>
              <li>Deceptive recruitment notices requesting payment from job seekers.</li>
              <li>Unauthorized disclosure of private citizen phone numbers, home addresses, or Aadhaar details.</li>
              <li>Hate speech or incitement against any ethnic, linguistic, or religious community of Assam.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              3. Moderation Discretion
            </h2>
            <p>
              Our moderation team retains the absolute right to reject, edit, suspend, or remove any listing that fails to meet publication standards or violates community trust. A listing being published does not imply official endorsement or warranty by AXOM ONE.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              4. Disclaimer of Liability
            </h2>
            <p>
              Directory entries are submitted by community members and local businesses. Users are encouraged to verify business licensing, store hours, and service credentials directly prior to transactions. AXOM ONE is not liable for commercial disputes between users and listed enterprises.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};