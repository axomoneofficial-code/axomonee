# AXOM ONE — Privacy Architecture & DPDP Act Compliance

## 1. Statutory Alignment

AXOM ONE is engineered in full compliance with the **Digital Personal Data Protection Act, 2023 (DPDP Act, India)**:

- **Purpose Limitation**: Data collected (e.g. submitter contact info) is exclusively utilized for listing verification and moderation correspondence.
- **Collection Minimization**: The platform strictly avoids demanding Aadhaar numbers, PAN cards, or private residential addresses.
- **Data Principal Rights**: Any citizen whose personal contact details have been mistakenly listed or scraped from third parties can request immediate takedown via `/report` or `privacy@axomone.org`.

---

## 2. Zero Geolocation Tracking

- Standard location-based applications frequently scrape GPS latitude and longitude coordinates.
- **AXOM ONE explicitly prohibits GPS scraping**. District filtering operates solely on administrative district names voluntarily selected by the user.

---

## 3. Data Retention & Erasure Schedule

| Data Category | Storage Location | Retention Policy |
| :--- | :--- | :--- |
| **Public Listings** | `listings` table | Persisted until business closure or owner takedown request. |
| **Pending Submissions** | `submissions` table | Retained for 90 days after review, then archived. |
| **User Reports** | `reports` table | Resolved reports archived after 60 days. |
| **Rate Limit Events** | `rate_limit_events` | Purged continuously after rolling window (15–60 minutes). |
| **Admin Sessions** | `sessions` table | Automatically invalidated after 7 days (`expires_at`). |
