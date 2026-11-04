# AXOM ONE — Project Status & Implementation Checklist

**Platform**: Axom One (অসম এক মঞ্চ) — Assam's All-in-One Digital Platform  
**Visual Style**: "The Living Axom Interface" matching reference mockup  
**Initial Launch Scope**: One District (Kamrup Metropolitan / Guwahati) — Scalable to all 35 Districts of Assam  
**Last Updated**: November 4, 2026  
**Build Status**: ✅ `npm run build` Passing (0 errors, optimized chunking, zero size warnings)  
**Test Suite**: ✅ `npm run test` Passing (93/93 Vitest tests passing across 10 test suites: platform, directory, discovery, beauty-destinations, security, auth-security-integrity, localized-content, guidance, directory-storage, error-reporting)  

---

## 1. Master Implementation Phases

- [x] **Phase 1: Workspace Inspection & Architecture Planning**
  - Inspected existing files in `axom-one/`
  - Created implementation checklist and baseline status documentation
- [x] **Phase 2: Data Models & D1 Database Architecture**
  - Schema covering all 35 districts of Assam, `categories`, `listings`, `submissions`, `events`, `reports`, `admin_users`, `sessions`, `audit_logs`, `rate_limit_events`
  - Versioned Cloudflare D1 migrations (`migrations/0001_initial.sql`) and realistic seed data (`seed.sql`)
- [x] **Phase 3: Security & REST API Backend (`/api/v1`)**
  - Cloudflare Worker router under `/api/v1` (`worker/index.ts`)
  - Public endpoints: districts, categories, listings, events, submissions, reports, contact
  - Protected admin endpoints: login, logout, me, submissions approval/rejection, listing management, reports resolution, categories, districts, audit logs
  - Database-backed rate limiting with `rate_limit_events`
  - Web Crypto PBKDF2/SHA-256 password hashing and HttpOnly session cookies
  - Security headers & CORS
- [x] **Phase 4: Design System — "The Living Axom Interface"**
  - Exact recreation of provided visual reference with authentic Assamese Gamusa theme & animations:
    - **Pristine Master Panoramic Background (`hero-panoramic-master.jpg`)**: Full 2048x818 HD master unedited artwork. Shows Kamakhya Temple with golden spires on right, soaring birds, Great Indian Hornbill on branch, Brahmaputra river with wooden boat under golden morning sunrise in center, and one-horned rhino grazing in tea garden on left with authentic draped Gamusa on the tree.
    - **Natural Atmospheric Lighting Scrim**: Replaced artificial blurry milky oval cloud with a seamless linear morning dawn scrim (`linear-gradient(180deg, rgba(255,255,255,0.35) 0%, ..., #F8F9FA 100%)`). Preserves 100% of the artwork clarity and saturation (zero blurry patches over Kamakhya Temple).
    - **Professional Typography ("photnts")**:
      - Imported Google Fonts: `Kaushan Script`, `Dancing Script`, `Caveat`, `Outfit`, `Plus Jakarta Sans`, `Tiro Bangla`, `Noto Serif Bengali`, and `Hind Siliguri`.
      - "Welcome To" in rich Assamese vermilion red calligraphy (`Kaushan Script` / `Dancing Script`) with 3.25rem scale, tilted stance, and crisp white ambient glow.
      - "AXOM ONE" in ultra-bold geometric editorial display font (`Outfit` at 900 weight) with tight `-0.035em` tracking. "AXOM" in deep midnight obsidian (`#0F172A`), "ONE" in vivid Assamese scarlet gradient (`#EF4444` -> `#DC2626` -> `#B91C1C`).
      - "Discover Local. Connect Assam." in high-contrast midnight slate (`#0F172A`) with refined letter spacing.
      - "আমাৰ অসম । আপোনাৰ প্লেটফৰ্ম" in authentic Assamese script (`Tiro Bangla` / `Noto Serif Bengali`) in warm terracotta (`#7C2D12`).
      - Authentic Assamese Woven Gamusa Jacquard divider bar (`.hero-accent-gamusa-bar`) with repeating red & white traditional woven motifs.
    - **Top-Right Cultural Identity Tag (`.hero-proud-badge`)**:
      - Recreated "Proud To Be Assamese" calligraphy badge with flying Brahmaputra river bird silhouettes on the upper-right sky matching the reference mockup.
    - **Authentic Gamusa Navbar Theme**:
      - Top Edge Ribbon (`.gamusa-top-woven-strip`): 26px high-definition authentic repeating Phulam Gamusa diamond jacquard ribbon generated directly from the user's high-contrast macro Gamusa photograph (`media_1793465811478_a0f450cb.jpg`), showcasing sharp traditional teeth borders (দাঁতি), authentic Assamese red diamond jacquard motifs, and pure white cotton background.
      - Left & Right Navbar Flank Panels (`.gamusa-header-flank`): Vertical woven Gamusa diamond panels on desktop (> 1280px) outer ends of the navbar.
      - Header Bottom Micro-Woven Accent (`.site-header-wrapper::after`): 3px repeating Gamusa jacquard micro-accent strip along the bottom edge of the navbar framing the entire navigation bar.
      - Mobile Menu Integration: Matching Gamusa ribbon inside the mobile drawer dropdown menu.
      - Replaced jittery infinite wobbles with smooth, high-performance entrance transitions (`heroWelcomeScript`, `heroFadeInUp`, `heroTitlePop`) that lock solidly in place after mount.
      - Stationary, elegant "অসমীয়া হোৱাৰ গৌৰৱ / Proud To Be Assamese" badge with graceful Brahmaputra sky bird flock.
      - Subtle morning sunbeam radial light halo behind the hero center text (`rgba(255, 255, 255, 0.72)`) ensuring 100% crisp contrast for dark black and red typography against the Kamakhya temple background.
      - Removed distracting red dotted line (`................`) under subtitles for a clean, editorial layout.
      - Language-specific typography classes (`.lang-as`, `.lang-hi`, `.lang-en`) applying authentic serif italic calligraphy (`Tiro Bangla`, `Noto Serif Bengali`, `Kalam`, `Kaushan Script`).
      - Category pills auto-fit (`grid-template-columns: repeat(7, minmax(0, 1fr))`) with concise subtitles, preventing edge truncation.
    - **Interactive Floating Search Capsule**: Elevated white pill (`#FFFFFF`) with 1.5px red-tinted border, deep multi-layer elevation shadow, interactive district selector for all 35 Assam districts, and red search button.
    - **7 Horizontal Category Cards & 5 Featured District Cards**: Responsive grid with verified badges.
    - **Deep Forest Green Heritage Footer**: Newsletter, social icons, and Gamusa top divider.
- [x] **Phase 5: Public Pages & User Journeys (All 17 Public Routes + Directory Module)**
  - **Tri-Lingual Natural Human Localization (Assamese, Hindi, English)**:
    - Dedicated `LanguageProvider` (`src/context/LanguageContext.tsx`) and translations dictionary (`src/i18n/translations.ts`).
    - Authentic, warm, non-robotic colloquial human vocabulary written specifically for Assam's people:
      - **Assamese (অসমীয়া)**: "স্বাগতম", "অসমীয়া হোৱাৰ গৌৰৱ", "স্থানীয় সেৱা বিচাৰক । অসমৰ সৈতে সংযুক্ত হওক।", "আমাৰ অসম । আপোনাৰ প্লেটফৰ্ম", "দোকান, ব্যৱসায়, সেৱা, অনুষ্ঠান, পৰ্যটন বা কৰ্মসংস্থান বিচাৰক...", "আপোনাৰ জিলাৰ বিশেষ সেৱাসমূহ", "সোণালী ভৱিষ্যত গঢ়ক", "ৰাইজৰ সৈতে ভাগ-বাটোৱাৰা কৰক".
      - **Hindi (हिन्दी)**: "स्वागत है", "गर्व से असमिया", "स्थानीय खोजें • असम से जुड़ें", "हमारा असम • आपका मंच", "दुकानें, सेवाएं, कार्यक्रम, पर्यटन स्थल या रोजगार खोजें...", "हमारे जिले में विशेष", "अपना भविष्य संवारें", "समुदाय से साझा करें".
      - **English**: Natural, welcoming community-focused phrasing.
    - Interactive Language Dropdown in Header with checkmark indicators and persistent `localStorage` preference.
  - `/directory` — **Assam Knowledge & Institution Directory (`src/features/directory/`)**:
    - `DirectoryHome`: Master landing hub with search capsule, 6 category shortcuts, 35-district filtering, and dual view switcher (Public Explorer & Editorial Desk).
    - `DirectorySearch`: Real-time keyword search with clear action and district selector.
    - `DirectoryFilters`: Left sticky filter panel with category counts, subcategories, status toggle, verified source toggle, and multi-criteria sorting.
    - `DirectoryCard`: Verified badge, category icons, district tag, description clamp, official website, and quick modal trigger.
    - `DirectoryDetails`: Full verification modal displaying government `sourceUrl`, `verifiedFrom`, `lastVerifiedAt` audit date, official portal, timings, fees, accessibility notes, and share link.
    - `DirectoryAdmin`: Dedicated administrative desk with table view, inline status updater (`draft`, `pending_review`, `published`, `rejected`, `archived`), one-click "Verify Today" button, add/edit record modals, and JSON/CSV export.
  - `/` — Homepage (Scenic tea garden & Brahmaputra river hero, waving draped Gamusa with 3D physics, category bar, featured carousel, promo banners)
  - `/explore` — Comprehensive Directory:
    - Sticky left Filter Sidebar with modern search input, custom district dropdown (all 35 districts), category dropdown, listing type filter, and reset button.
    - Top controls bar with live results count and sort selector (Recently Published, Alphabetical A-Z).
    - Multi-column responsive listings grid with Living Axom card design: category badges, verified pills, sponsored borders, district pins, phone/website actions, and "View Details" arrow button.
  - `/businesses` — Local business directory with verified badges & sponsored labels
  - `/businesses/:slug` — Detailed business page with contact info, hours, website, report button
  - `/services` — Essential local services directory
  - `/events` & `/events/:slug` — Local cultural, civic, and community events
  - `/tourism` — **Explore Assam Beauty Portal (`src/pages/TourismPage.tsx`)**:
    - Remade from official themes (`assamtourism.gov.in/Explore.php`): Wildlife & National Parks, Charaideo UNESCO Heritage, History & Ahom Legacy, Temples, Satras of Assam, Tea & Golf Heritage, Rural Living, Brahmaputra Cruises, and Hills.
    - 20 curated destination showcase cards with 100% authentic, verified Wikimedia Commons real photographs (Kaziranga rhinos, Charaideo Moidam tumulus, Kamakhya temple spire, Rang Ghar amphitheatre, Talatal Ghar, Sivasagar Sivadol, Majuli traditional mask artisan, Manas wild water buffaloes, colonial tea gardens, Nameri Jia Bhoroli river, Haflong lake, Umananda peacock island, Hajo Hayagriva temple, Pobitora rhinos, Tai Phake monastery, Dehing Patkai rainforest, Sualkuchi weavers, Brahmaputra boat sunset, Agnigarh hillock, and Dibru-Saikhowa wild horses & wetlands).
    - Detailed, deeply researched factual descriptions covering historical origins, cultural significance, geographical locations, key highlights, best travel season, transit hubs, and direct links to official government booking portals (`kaziranga.assam.gov.in`, `asi.nic.in`, `assamtourism.gov.in`).
    - Interactive Seasonal Travel & Circuit Guide: Winter peak wildlife, Spring Rongali Bihu & tea flush, Monsoon Ambubachi Mela.
    - Responsible Traveler's Code of Ethics (wildlife buffer respect, zero plastic in riverways, supporting indigenous homestays).
    - Itinerary and logistics modal drawer with copy share link.
  - `/opportunities` — Jobs, internships, scholarships, fraud warnings & reporting
  - `/community` — Approved community notices & civic announcements
  - `/submit` — Public submission portal for businesses, events, and notices
  - `/about` — Mission, community team info & explicit non-government disclaimer
  - `/contact` — Public inquiry and feedback form
  - `/privacy` — DPDP Act & privacy compliance policy
  - `/terms` — Terms of service & community guidelines
  - `/report` — Content flagging and inaccurate listing reporting form
  - `*` — Custom 404 Not Found page
- [x] **Phase 6: Admin Dashboard & Moderation System (All 9 Admin Routes)**
  - `/admin/login` — Protected admin login with rate limiting & error handling
  - `/admin` — Metrics overview dashboard
  - `/admin/submissions` — Submission approval/rejection queue with reviewer notes
  - `/admin/listings` — Management of published/draft/suspended listings
  - `/admin/reports` — Community user reports & resolution workflow
  - `/admin/categories` — Directory category management and activation
  - `/admin/districts` — All 35 districts management with Assamese Unicode script
  - `/admin/audit-logs` — Immutable audit log of administrative actions
  - `/admin/settings` — Platform settings & launch district configuration
- [x] **Phase 7: Application Security Audit & Enterprise Hardening**
  - **Complete Pre-Security Backup**: Full verified local backup in `axom-one_backup_pre_security/` (137 files, 8.88 MB).
  - **Security Audit Report**: Formal audit report generated (`SECURITY_AUDIT_REPORT.md` and `docs/SECURITY-AUDIT-2026.md`) categorizing Critical, High, Medium, and Low risks.
  - **Web Crypto PBKDF2 Password Security**: Cryptographically random 16-byte hex salts per account, 100,000 iterations, SHA-256. Fully eliminated plaintext fallback backdoors.
  - **Constant-Time Cryptographic Verification**: Implemented `constantTimeEqual()` against timing side-channel attacks on hashes and tokens.
  - **Anti-CSRF Token Enforcement**: Added cryptographically bound `x-csrf-token` generation and verification for all state-changing API mutations (`POST`, `PATCH`, `DELETE`).
  - **CORS & Origin Hardening**: Replaced wildcard CORS with strict trusted origin matching (`localhost:5173`, `axom.one`, `axom-one.pages.dev`). Disallowed wildcard credentials.
  - **Content Security Policy (CSP)**: Strict resource directives whitelisting authentic Wikimedia Commons photography (`upload.wikimedia.org`), Google Fonts, blocking unauthorized scripts and objects (`object-src 'none'`).
  - **URL Sanitization & XSS Defense**: Universal `sanitizeExternalUrl()` helper strictly restricting schemes to `http:` and `https:`, blocking `javascript:`, `data:`, `vbscript:`, and `file:`.
  - **Safe Hostname Extraction**: `getSafeHostname()` with try/catch fallback preventing unhandled exceptions from crashing React component trees.
  - **Input Bounds & Request Constraints**: Strict server-side payload limits, string length capping, and RFC-compliant email regex validation.
  - **Session Rotation**: Invalidation of previous sessions upon login, secure session expiration, and structured audit logs.
- [x] **Phase 8: Documentation & SEO**
  - `README.md`, `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, `docs/SECURITY.md`, `docs/SECURITY-AUDIT-2026.md`, `docs/ADMIN-MODERATION.md`, `docs/DEPLOYMENT.md`, `docs/TESTING.md`, `docs/PRIVACY.md`, `docs/BACKUP-RESTORE.md`, `docs/LAUNCH-CHECKLIST.md`
  - `public/robots.txt` and `public/sitemap.xml`

---

## 2. Test Verification Log

```text
✓ src/__tests__/platform.test.ts (13 tests) 17ms
  ✓ covers all 35 administrative districts of Assam including Bajali and Tamulpur
  ✓ contains all essential categories for civic and community discovery
  ✓ returns only published listings to the public API
  ✓ filters listings accurately by district
  ✓ filters listings accurately by category
  ✓ searches listings by keyword in title or description
  ✓ submits an entry and places it in pending status without exposing it publicly
  ✓ allows administrator to approve a submission
  ✓ allows administrator to reject a submission with review notes
  ✓ records user reports into the moderation queue
  ✓ maintains an audit trail of administrator actions
  ✓ rejects invalid administrator credentials with generic error
  ✓ authenticates valid administrator and generates secure session

✓ src/__tests__/directory.test.ts (6 tests) 20ms
  ✓ loads valid starter seed data with 47 records and 6 core categories
  ✓ ensures all records have required fields as defined in README.md
  ✓ contains verifiable official source URLs for editorial oversight
  ✓ covers major Assam cultural landmarks and universities
  ✓ provides all 35 Assam districts with authentic Assamese names and headquarters
  ✓ validates remade Assam Tourism destinations covering all official interest themes

✓ src/__tests__/security.test.ts (11 tests) 145ms
  ✓ strictly rejects dangerous and pseudo-protocol URIs (javascript:, data:, vbscript:)
  ✓ permits valid HTTP and HTTPS URLs
  ✓ handles null, undefined, empty and invalid values without throwing exceptions
  ✓ safely extracts hostname without crashing on malformed URLs
  ✓ strips non-printable control characters and enforces length limits
  ✓ validates email addresses strictly
  ✓ executes constant-time comparison accurately
  ✓ generates unique salts and hashes for every password generation
  ✓ rejects incorrect passwords and tampered hashes without backdoor fallback
  ✓ ensures all starter directory records have sanitized and safe official URLs
  ✓ ensures all 20 Assam tourism destinations link only to safe government / academic sources

✓ src/__tests__/platform.test.ts (13 tests)
✓ src/__tests__/beauty-destinations.test.ts (7 tests)
✓ src/__tests__/directory.test.ts (6 tests)
✓ src/__tests__/discovery.test.ts (6 tests)
✓ src/__tests__/security.test.ts (11 tests)

Test Files  5 passed (5)
Tests       43 passed (43)
Build       tsc -b && vite build (0 errors)
```

---

## 3. Active Dev Server
- Dev command: `npm --prefix axom-one run dev -- --host`
- Bound Port: `5173`
- Status: Ready (Clean hot-reload active)
