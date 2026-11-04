# AGENTS.md — Permanent Development Rules & Engineering Standards
*Project: AXOM ONE (অসম এক মঞ্চ) — Assam's Digital Gateway & Cultural Atlas*

---

## 1. Operating Environment & Project Identity

- **Platform**: AXOM ONE is a community-driven civic directory, responsible tourism guide, and vector GIS cultural atlas covering all 35 administrative districts of Assam, India.
- **Root Directory**: `e:\New folder\axom-one`
- **Tech Stack**:
  - Frontend: React 18, TypeScript, Vite, React Router 7, Modern CSS ("The Living Axom Interface"), Lucide Icons.
  - Backend API: Cloudflare Workers TypeScript (`/api/v1`), Web Crypto PBKDF2 authentication, Cloudflare D1 distributed SQLite.
  - Test Suite: Vitest (8 test suites, 77 test cases).

---

## 2. Permanent Engineering Rules for All Agents

Every AI agent or developer modifying AXOM ONE must strictly abide by these permanent rules:

### Rule 1: Mandatory Bilingual Localization for Tourism Destinations
- Every new destination added to `src/data/tourism-destinations.json` must include all required Assamese translation fields:
  - `name_as`, `tagline_as`, `shortDescription_as`, `description_as`, `fullDescription_as`
  - `highlights_as`, `bestSeason_as`, `entryFee_as`, `openingHours_as`
- When displaying destinations in React components, **always use the existing localization helpers** in `src/utils/localizedContent.ts`:
  - `getLocalizedDestinationName(dest, lang)`
  - `getLocalizedDestinationTagline(dest, lang)`
  - `getLocalizedDestinationDescription(dest, lang)`
  - `getLocalizedDestinationHighlights(dest, lang)`
  - `getLocalizedDestinationSeason(dest, lang)`
  - `getLocalizedDestinationEntry(dest, lang)`
  - `getLocalizedDestinationHours(dest, lang)`
- Never hardcode raw English fallback strings inside page JSX if an Assamese translation field exists.

### Rule 2: Cache Invalidation & `STORAGE_KEY` Discipline
- The directory listings in `src/features/directory/DirectoryHome.tsx` are cached in `localStorage` for performance.
- When `src/data/assam-directory.seed.json` changes (e.g. adding new records, category reclassifications, or metadata fixes):
  1. Inspect the existing `STORAGE_KEY` and cache hydration logic.
  2. Increment `STORAGE_KEY` (e.g., from `axom_one_assam_directory_records_v7` to `_v8`) **only when needed** to ensure user browsers immediately reload the fresh dataset rather than displaying stale cache counts.
  3. Do not arbitrarily change the key if the seed data has not been updated.

### Rule 3: GitHub Backup Archive Constraints (< 25 MB)
- Always generate the backup archive using the automated script:
  `python scratch/create_backup_zip.py` (or `C:\Users\rd364\.gemini\antigravity\brain\...\scratch\create_backup_zip.py`)
- Archive destination: `e:\New folder\axom-one-backups\axom-one-github-backup.zip`
- **Hard Constraints**:
  - Must remain strictly **under 25 MB** for GitHub compatibility.
  - Must exclude: `node_modules/`, `.git/`, `dist/`, `.wrangler/`, credentials, `.env*`, and private database dumps.
  - Never place raw uncompressed video or uncompressed TIFF/PNG assets in `public/images/`.

### Rule 4: Mandatory Pre-Completion Verification & Truthful Reporting
- Before concluding any task or declaring work complete:
  - Run the Vitest test suite: `npx vitest run --testTimeout 15000`
  - Run the production build: `npm run build` (`tsc -b && vite build`)
- **Strict Integrity Rule**: Never invent, falsify, or assume successful test results. Always report the exact actual exit code, test counts, duration, and any compiler warnings or errors.

### Rule 5: Use Natural, Human-Written Language Across All Languages

All new and updated content on AXOM ONE must sound natural, warm, clear, and genuinely written for real people.

#### 1. Writing style
- Use simple, conversational language that visitors can understand easily.
- Write as if a knowledgeable local person is explaining something to a visitor.
- Prefer short, meaningful sentences over long, formal paragraphs.
- Give each destination a unique description based on its real history, culture, atmosphere, and visitor experience.
- Avoid repetitive introductions, generic promotional phrases, exaggerated claims, and robotic wording.
- Do not repeat the same description across different destinations.
- Never invent local stories, historical facts, visitor experiences, or cultural traditions.

#### 2. Assamese and English content
- Write both English and Assamese naturally; do not translate English word for word when that sounds unnatural.
- Use correct Assamese spelling, grammar, punctuation, and Unicode characters.
- Preserve local names, cultural expressions, and place names accurately.
- Have Assamese content reviewed by a fluent Assamese speaker when possible.
- Ensure the language selector displays the correct language throughout the entire page, including headings, descriptions, buttons, labels, empty states, and error messages.

#### 3. Destination descriptions
For every new destination in `src/data/tourism-destinations.json`, provide meaningful English and Assamese versions for all required fields:
`name_as`, `tagline_as`, `shortDescription_as`, `description_as`, `fullDescription_as`, `highlights_as`, `bestSeason_as`, `entryFee_as`, and `openingHours_as`.

Use the existing localization helpers in `src/utils/localizedContent.ts` rather than duplicating language-selection logic.

Descriptions should explain:
- What makes this place special.
- Its verified cultural, historical, or natural significance.
- What visitors can actually see or experience.
- Practical travel information, when verified.
- Any important visitor guidance or restrictions.

Do not fill missing information with guesses. Use a clear “Information not yet verified” state when necessary.

#### 4. Make all website copy sound authentic
Review:
- Homepage headings and introductory text.
- Tourism and district pages.
- University, temple, heritage, and nature listings.
- Local business and service descriptions.
- Events and festival information.
- Navigation menus, buttons, forms, and notifications.
- Help Centre, onboarding guide, and error messages.
- SEO titles, meta descriptions, and social media captions.

Remove unnecessary phrases such as “Discover the ultimate experience,” “Nestled in the heart of,” and “Unlock the hidden gems” when they add no meaningful information.

Prefer specific, factual writing over generic marketing language.

#### 5. Quality checks
Before finishing a content update:
1. Check grammar and spelling in both languages.
2. Confirm that the Assamese version communicates the same meaning naturally.
3. Check for repeated or copied descriptions.
4. Verify factual claims against reliable sources.
5. Confirm that no required translation fields are missing.
6. Test the language switcher on desktop and mobile.
7. Report any content that still needs human review.

Do not claim that content was reviewed by a human unless a human actually reviewed it.

**Final standard:** AXOM ONE should sound like a trusted local guide to Assam—not a machine-generated directory. Every sentence should help visitors learn something real, understand a place, or take a useful next step.

### Rule 6: Verified Assam Inventory & Fact-Checking Checklist
Every new or modified record must be verified against authentic statutory sources before publication. Never add fictional places, fabricated coordinates, or dead links.

#### A. The 7 Statutory National Parks of Assam
1. **Kaziranga National Park** (`tour-kaziranga` / `nature-kaziranga`) — Golaghat / Nagaon / Sonitpur (UNESCO World Heritage)
2. **Manas National Park** (`tour-manas` / `nature-manas`) — Baksa / Chirang (Bodoland / UNESCO World Heritage)
3. **Dibru-Saikhowa National Park** (`tour-dibru-saikhowa` / `nature-dibru`) — Tinsukia / Dibrugarh (Biosphere Reserve)
4. **Nameri National Park** (`tour-nameri` / `nature-nameri`) — Sonitpur (Tiger Reserve & Jia Bhoroli River)
5. **Orang National Park** (`tour-orang` / `nature-orang`) — Darrang / Udalguri / Sonitpur (Tiger Reserve)
6. **Raimona National Park** (`tour-raimona` / `nature-raimona`) — Kokrajhar (Bodoland, 6th National Park declared 2021)
7. **Dehing Patkai National Park** (`tour-dehing-patkai` / `nature-dehing`) — Dibrugarh / Tinsukia (7th National Park declared 2021, "Amazon of the East")

#### B. Verified Temples & Spiritual Sanctuaries
- **Kamakhya Devalaya & Nilachal Hill** (Kamrup Metropolitan)
- **Umananda Shiva Temple & Peacock Island** (Kamrup Metropolitan)
- **Navagraha Temple** (Chitrachal Hill, Kamrup Metropolitan)
- **Basistha Ashram & Cave Temple** (Kamrup Metropolitan)
- **Sukreswar & Dirgheswari Devalayas** (Kamrup Metropolitan / Kamrup)
- **Hayagriva Madhava & Hajo Panchatirtha** (Kamrup)
- **Aswaklanta & Doul Govinda Temples** (Kamrup / North Guwahati)
- **Madan Kamdev Archaeological Ruins** (Baihata Chariali, Kamrup)
- **Sivasagar Sivadol, Vishnudol & Devidol** (Sivasagar)
- **Sri Sri Batadrava Than (Bordowa)** (Nagaon)
- **Barpeta Satra & Kirtan Ghar, Barpeta Doul Mandir** (Barpeta)
- **Sri Sri Patbausi & Sundaridiya Sattras** (Barpeta)
- **Billeswar Devalaya & Sri Sri Hari Mandir** (Nalbari)
- **Pari Hareswar Devalaya** (Dubi, Bajali)
- **Mahabhairav & Bhairabi Temples** (Tezpur, Sonitpur)
- **Biswanath Ghat (Gupta Kashi) & Basudev Doul** (Biswanath / Gohpur)
- **Majuli River Island Sattras** (Auniati, Dakhinpat, Kamalabari, Shamaguri, Garamur)
- **Negheriting Shiva Doul** (Dergaon, Golaghat)
- **Tilinga Mandir (The Bell Temple)** (Bordubi, Tinsukia)
- **Dhekiakhowa Bornamghar** (Jorhat, 560-year-old Akhanda Banti)
- **Sri Sri Kachakanti Devi Temple** (Silchar, Cachar)
- **Bhubaneswar Shiva Temple** (Bhuban Hills, Cachar)
- **Siddheswar Shiva Temple** (Badarpurghat, Karimganj)
- **Bagheswari Temple** (Bongaigaon)
- **Mahamaya Dham** (Bogribari, Kokrajhar)
- **Kamakhya Temple of Mankachar** (South Salmara-Mankachar)

### Rule 7: Social Integration & Single Source of Truth
- Keep `src/config/socialConfig.ts` as the single source of truth for social URLs, handles, and branding.
- **Footer Integration**:
  - Circular social icon row linking to official channels.
  - Compact, vertically centered `@axomone_official` badge with official Instagram gradient button (`linear-gradient(135deg, #f09433, #dc2743, #bc1888)`).
  - Clear vertical spacing (`1.15rem`) separating the Instagram badge from the newsletter form.
- **Retired Features**:
  - Do not invent, estimate, or hardcode follower counts in UI badges.
  - Do not restore the retired homepage Instagram showcase banner or image grid.

### Rule 8: System Stability & Architecture Preservation
- Preserve existing user data, database schemas, Cloudflare D1 migrations, rate limiter tables, and authentication mechanisms.
- Maintain responsive layouts across mobile (< 768px), tablet (768px-1024px), and desktop (> 1024px).
- Never break working routes (`/`, `/tourism`, `/districts`, `/directory`, `/explore`, `/businesses`, `/services`, `/events`, `/opportunities`, `/community`, `/submit`, `/contact`, `/about`, `/admin`).
- Before performing high-risk refactoring on core components, verify existing backups.

### Rule 9: Zero Fictional Data, Zero Fake Links & Strict Verification
- Use only real, authentic statutory links (`*.assam.gov.in`, official universities `.ac.in`, certified trusts, or legitimate district portal links).
- Never insert placeholder domains (`example.com`, `test.org`, `fake-url.in`).
- Never introduce unverified claims, fictional phone numbers, or fabricated facts.
- Never commit credentials, private tokens, or secrets to repository files.

### Rule 10: Standard Post-Task Reporting
At the end of every task, output a concise structured report covering:
1. **Modified Files**: List of paths modified.
2. **Tests & Builds Executed**: Exact commands run and actual outcomes (`77/77 passed`, `built in X.XXs`).
3. **Backup Status**: Size of `axom-one-github-backup.zip` (< 25 MB).
4. **Remaining Issues / Next Steps**: Any pending tasks or user clarification items.

---

## 3. Core File Map & Reference

```
axom-one/
├── AGENTS.md                         # This permanent rules document
├── docs/
│   ├── FUTURE_UPGRADE_AND_ARCHITECTURE_GUIDE.md # Comprehensive architecture reference
│   ├── ARCHITECTURE.md               # Technology overview
│   └── SECURITY.md                   # Security protocols
├── src/
│   ├── components/
│   │   ├── Header.tsx                # Responsive navigation bar with Gamusa motifs
│   │   ├── Footer.tsx                # 5-column footer with Instagram & newsletter
│   │   ├── AssamDistrictMap.tsx      # 35-district interactive SVG map
│   │   └── guidance/                 # Onboarding walkthrough modal & tour overlays
│   ├── config/
│   │   └── socialConfig.ts           # Single source of truth for social links
│   ├── data/
│   │   ├── assam-directory.seed.json # 283 verified directory records
│   │   ├── tourism-destinations.json # 91 tourist destinations with trilingual data
│   │   ├── district-maps-data.ts     # Vector GIS paths for all 35 districts
│   │   └── categories.json           # Directory category taxonomy
│   ├── features/
│   │   └── directory/
│   │       ├── DirectoryHome.tsx     # Directory hub with STORAGE_KEY cache logic
│   │       ├── DirectoryCard.tsx     # Card with verification badges
│   │       └── types.ts              # DirectoryItem & Category interfaces
│   ├── utils/
│   │   ├── localizedContent.ts       # Trilingual string resolution helpers
│   │   └── security.ts               # URL sanitization & XSS prevention
│   └── types.ts                      # Core platform TypeScript definitions
```
