# AXOM ONE — Production Launch & Verification Checklist

Before releasing AXOM ONE to the public or promoting district coverage, verify every item below:

---

### A. Environment & Secrets Check
- [ ] No `.env`, `.dev.vars`, or private administrator passwords exist in version control.
- [ ] `ADMIN_SECRET_KEY` and production administrator accounts are provisioned via `wrangler secret put`.
- [ ] Production database binding in `wrangler.toml` references the real remote D1 UUID.

### B. Security & Rate Limiting Verification
- [ ] Attempting 6 consecutive incorrect logins to `/api/v1/admin/login` triggers HTTP 429 Rate Limited.
- [ ] Cookies are issued with `HttpOnly`, `SameSite=Lax`, and `Secure` attributes.
- [ ] Content-Security-Policy header is active and blocks unauthorized frame embedding (`frame-ancestors 'none'`).

### C. District & Content Integrity
- [ ] All 35 Assam districts are present in the database with verified Assamese Unicode spellings.
- [ ] The launch district (Kamrup Metropolitan / Guwahati) displays verified business and service entries.
- [ ] Non-government disclaimer banner is prominently visible in the footer and header on all screens.
- [ ] All opportunity listings display the fraud warning advising job seekers never to pay recruitment fees.

### D. Build & Automated Tests
- [ ] TypeScript check and production bundling (`npm run build`) completes with 0 errors.
- [ ] Vitest automated test suite (`npm run test`) passes 100% of test cases.
- [ ] Mobile responsive layout verified on small screen widths (360px–420px).
