# Axom One - Privacy & Data Governance Checklist

This checklist defines mandatory data protection requirements, compliance checks, and privacy safeguards for deploying and operating the **Axom One** web platform and Cloudflare edge services.

---

## 1. Compliance Framework

Axom One adheres to data protection best practices including:
- **Digital Personal Data Protection Act (DPDP Act, India)**
- **General Data Protection Regulation (GDPR principles)**
- **Cloudflare Edge Data Minimization Standards**

---

## 2. Pre-Deployment Privacy Audit Checklist

### A. Data Collection Minimization
- [ ] **No Unnecessary PII**: Authors can publish stories under a pseudonym or community alias without requiring phone numbers or Aadhaar/identity document uploads.
- [ ] **Zero Unsolicited Geolocation Tracking**: Location tagging is restricted to broad administrative districts (e.g., *Majuli*, *Barpeta*, *Jorhat*). Exact GPS latitude/longitude coordinates are never scraped or stored.
- [ ] **Email & Contact Concealment**: User emails submitted during reporting are stored solely in encrypted edge tables and never exposed via public API responses (`/api/posts`).

### B. Cloudflare Worker & D1 Storage Security
- [ ] **CORS Strict Origin**: In production, replace `'Access-Control-Allow-Origin': '*'` with explicit domain origins in `worker/index.ts`.
- [ ] **Environment Secret Isolation**: Secrets (`ADMIN_SECRET_KEY`, Cloudflare tokens) must be stored via `wrangler secret put` and never committed in git or `.env` files.
- [ ] **D1 Encryption at Rest**: Verify that the Cloudflare D1 database encryption at rest is enabled by default.
- [ ] **Automated SQL Parameterization**: All SQL queries use prepared statement binding (`env.DB.prepare(...).bind(...)`) to prevent SQL injection and data leakage.

### C. Cookies, Analytics & Third-Party Telemetry
- [ ] **Cookie-Free Experience**: The core application functions without tracking cookies or third-party ad pixels.
- [ ] **Privacy-Preserving Fonts**: Google Fonts are loaded with `preconnect` with no tracking parameters. Self-hosting WOFF2 fonts is recommended for high-privacy deployments.
- [ ] **Opt-In Analytics Only**: If analytics or metrics SDKs are added, they must honor `navigator.doNotTrack` and require explicit user consent.

### D. User Rights & Data Deletion (Right to Be Forgotten)
- [ ] **Takedown & Anonymization Endpoint**: Authors or users whose personal information appears in an unauthorized post can submit a flag via the UI or contact administrators.
- [ ] **Cascading Deletion**: Removing a post cascades and removes related flags and report notes (`ON DELETE CASCADE` in `worker/schema.sql`).
- [ ] **Audit Retention Window**: Moderation audit logs (`moderation_logs`) are retained for 90 days for safety accountability, after which they are automatically archived or purged.

---

## 3. Incident Response Protocol

In the event of accidental exposure of sensitive personal data:
1. **Immediate Quarantine**: Admin triggers `status = 'removed'` via the moderation panel.
2. **Purge Edge Cache**: Run `wrangler d1 execute axom-one-db --command="DELETE FROM posts WHERE id = '...'"` and purge Cloudflare cache.
3. **Notify Affected Parties**: Document timeline and corrective actions in internal compliance ledger.
