import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <article className="detail-container">
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '0.5rem' }}>
          Privacy Policy & Data Protection
        </h1>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
          Last Updated: October 31, 2026 • Compliant with Digital Personal Data Protection Act, 2023 (DPDP Act, India)
        </div>

        <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              1. Our Commitment to Data Minimization
            </h2>
            <p>
              AXOM ONE is built from the ground up on the principle of data minimization. We only collect the minimal information necessary to deliver directory services and protect platform safety. We do not sell, rent, or trade your personal information.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              2. Information We Collect
            </h2>
            <p>
              • <strong>Public Directory Information:</strong> Information voluntarily provided by business owners and event organizers (such as store names, public telephone numbers, business email addresses, and public opening hours).<br />
              • <strong>Submitter Identification:</strong> Submitter names and contact emails are kept in confidential moderation records and never displayed on public listing cards.<br />
              • <strong>Content Reports:</strong> Details regarding inaccurate or abusive listings, along with optional reporter contact email for follow-up.<br />
              • <strong>Technical Telemetry:</strong> Anonymized server logs and rate-limiting keys stored ephemerally to prevent denial-of-service and brute-force abuse.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              3. Zero Geolocation Tracking
            </h2>
            <p>
              AXOM ONE does not request, track, or record your GPS latitude and longitude coordinates. All geographical browsing is selected by you through administrative district names (e.g. Majuli, Kamrup Metropolitan, Barpeta).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              4. Your Rights Under DPDP Act
            </h2>
            <p>
              You have the right to request the correction, completion, or deletion of any listing containing your personal information. To exercise this right, contact our privacy officer at <code>privacy@axomone.org</code> or submit a takedown report through our public reporting channel.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              5. Edge Security & Storage
            </h2>
            <p>
              Our database is encrypted at rest using Cloudflare D1 distributed SQLite architecture. Administrator sessions utilize secure, HttpOnly, SameSite cookies with cryptographic token hashing.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};
