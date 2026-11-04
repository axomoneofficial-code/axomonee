# AXOM ONE — System Architecture & Future Upgrade Manual
*Comprehensive Technical Reference, Data Models, Component Hierarchy & Roadmap*

---

## 1. Project Overview & Identity

**AXOM ONE** (`অসম ওৱান`) is an enterprise-grade digital portal and cultural atlas for the state of Assam, India. It combines:
1. **Interactive Administrative Map**: Bespoke vector GIS SVG map covering all 35 official districts with rivers, headquarters, and tourist hubs.
2. **Verified Assam Directory**: 283+ statutory listings spanning Higher Education, Ancient Heritage, 48 Temples & Sattras, 15 National Parks & Nature Sanctuaries, Museums, and Public Registries.
3. **Tourism & Cultural Destinations**: 91 certified destination profiles with multi-picture galleries, living cultural etiquette guidelines, and safari season alerts.
4. **Trilingual Localization Engine**: Native English (`en`), Assamese (`as`), and Hindi (`hi`) content resolution with seamless fallbacks.
5. **Official Social Integration**: Clean footer badge linking to `@axomone_official` on Instagram.

---

## 2. Directory Layout & Architecture

```
axom-one/
├── public/
│   ├── images/
│   │   ├── destinations/     # High-res photography for all 91 tourist destinations
│   │   ├── directory/        # Verified institutional and temple photos
│   │   ├── axom-nav-emblem.png
│   │   ├── gamusa-pattern.png
│   │   └── hero-clean-hd.jpg
│   └── manifest.json         # PWA Progressive Web App configuration
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Responsive navigation bar with Gamusa woven accent & search
│   │   ├── Footer.tsx        # 5-column footer with @axomone_official badge & newsletter
│   │   ├── AssamDistrictMap.tsx # 35-district interactive SVG map
│   │   ├── DistrictInteractiveMap.tsx # Single district zoom GIS view
│   │   ├── GlobalSearchModal.tsx # Full-text Ctrl+K search across all datasets
│   │   ├── LiveWeatherSafariAlert.tsx # Seasonal wildlife safari status badges
│   │   ├── CommunityBookingModal.tsx # Eco-tourism & homestay booking interface
│   │   ├── ScrollToTop.tsx   # Automatic viewport reset on route transitions
│   │   └── guidance/         # User walkthrough tour & contextual help overlays
│   ├── config/
│   │   └── socialConfig.ts   # Official handles, profile links & social metadata
│   ├── context/
│   │   ├── LanguageContext.tsx # Active language state ('en' | 'as' | 'hi' | 'brx')
│   │   └── GuidanceContext.tsx # Interactive onboarding tour status
│   ├── data/
│   │   ├── assam-directory.seed.json # 283 verified records across 6 categories
│   │   ├── tourism-destinations.json # 91 destination deep-dives with translations
│   │   ├── district-maps-data.ts     # Vector GIS SVG path data for all 35 districts
│   │   ├── categories.json           # Directory taxonomy definitions
│   │   ├── districts.json            # 35 administrative districts metadata
│   │   └── events.json               # Cultural festivals calendar
│   ├── features/
│   │   └── directory/
│   │       ├── DirectoryHome.tsx    # Search, filter sidebar, category chips & grid
│   │       ├── DirectoryCard.tsx    # Card component with verification badge
│   │       ├── DirectoryDetails.tsx # Slide-in modal with statutory document links
│   │       ├── DirectoryFilters.tsx # Multi-attribute filter sidebar
│   │       └── types.ts             # DirectoryItem, Category, District interfaces
│   ├── pages/
│   │   ├── HomePage.tsx             # Hero section, quick search, featured highlights
│   │   ├── TourismPage.tsx          # Tourism category tabs, cards & destination modal
│   │   ├── DestinationDetailPage.tsx # Dedicated destination route (/destination/:id)
│   │   ├── DistrictDetailPage.tsx   # Single district deep-dive (/districts/:slug)
│   │   ├── DirectoryPage.tsx        # Wrapper for directory feature (/directory)
│   │   └── ContactPage.tsx          # Editorial contact & corrections desk
│   ├── utils/
│   │   ├── localizedContent.ts      # Multi-language string resolver helpers
│   │   └── security.ts              # URL sanitization, XSS mitigation & safe hostnames
│   └── styles.css                   # Master stylesheet (12,000+ lines, fully scoped)
```

---

## 3. Core Data Schemas

### 3.1. Tourism Destination (`tourism-destinations.json`)
```typescript
interface BeautyDestination {
  id: string;                    // Unique slug, e.g., "tour-tilinga-mandir"
  slug: string;                  // URL-friendly identifier, e.g., "tilinga-mandir"
  name: string;                  // English display name
  name_as: string;               // Assamese name (e.g., "টিলিঙা মন্দিৰ (বৰডুবি)")
  name_hi: string;               // Hindi name (e.g., "तिलिंगा मंदिर")
  category: string;              // "wildlife-birdwatching" | "heritage-historic" | etc.
  district: string;              // District name (e.g., "Tinsukia")
  district_slug: string;         // Lowercase slug (e.g., "tinsukia")
  locality: string;              // Sub-district / town location
  shortDescription: string;      // Quick card summary (English)
  fullDescription: string;       // Rich narrative paragraph (English)
  shortDescription_as: string;   // Assamese card summary
  fullDescription_as: string;    // Assamese cultural narrative
  highlights: string[];          // Key bullet points (English)
  highlights_as: string[];       // Key bullet points (Assamese)
  imageUrl: string;              // Relative asset path in /images/destinations/
  image: string;                 // Redundant mirror of imageUrl for legacy components
  latitude: number;              // Geocoordinates for GIS map placing
  longitude: number;
  bestSeason: string;            // English seasonal window
  bestSeason_as: string;         // Assamese seasonal window
  openingHours: string;          // e.g., "05:30 - 18:30 daily"
  openingHours_as: string;       // e.g., "ৰাতিপুৱা ০৫:৩০ বজাৰ পৰা..."
  entryFee: string;              // e.g., "Free Public Access"
  entryFee_as: string;           // e.g., "সম্পূৰ্ণ বিনামূলীয়া প্ৰৱেশ"
  officialWebsite: string;       // Statutory or portal URL
  sourceUrl: string;             // Verification reference URL
  status: "published";
  language: string[];            // Supported languages: ["en", "as", "hi"]
}
```

### 3.2. Directory Listing Record (`assam-directory.seed.json`)
```typescript
interface DirectoryItem {
  id: string;                    // e.g., "temple-tilinga-mandir"
  name: string;                  // Primary title
  name_as?: string;              // Assamese title
  category: string;              // "education" | "heritage" | "temples-spiritual" |
                                 // "nature-wildlife" | "museums-culture" | "public-services"
  subcategory: string;           // e.g., "Shakti Peetha", "National Park", "University"
  district: string;              // e.g., "Tinsukia", "Kamrup Metropolitan"
  district_slug?: string;
  locality: string;              // e.g., "Bordubi, near Tinsukia"
  description: string;           // English description
  description_as?: string;       // Assamese description
  description_hi?: string;       // Hindi description
  imageUrl?: string;             // Optional hero thumbnail
  website?: string;              // Official web address
  sourceUrl?: string;            // Statutory gazette or administrative verification URL
  verifiedFrom?: string;         // Source authority name
  status: "published" | "draft" | "pending_review" | "rejected" | "archived";
  lastVerifiedAt: string;        // ISO timestamp
}
```

---

## 4. Key Rules for Future Upgrades

### Rule 1: Always Provide Bilingual Text When Adding Destinations
When adding any new location to `tourism-destinations.json`:
- Always populate `name_as`, `tagline_as`, `shortDescription_as`, `description_as`, `fullDescription_as`, `highlights_as`, `bestSeason_as`, `entryFee_as`, and `openingHours_as`.
- Use the helper methods from `src/utils/localizedContent.ts`:
  - `getLocalizedDestinationName(dest, language)`
  - `getLocalizedDestinationDescription(dest, language)`
  - `getLocalizedDestinationHighlights(dest, language)`
  - `getLocalizedDestinationSeason(dest, language)`
  - `getLocalizedDestinationEntry(dest, language)`
  - `getLocalizedDestinationHours(dest, language)`

### Rule 2: Increment `STORAGE_KEY` When Updating Seed Data
The directory in `src/features/directory/DirectoryHome.tsx` caches listings in `localStorage`.
- Current Key: `const STORAGE_KEY = 'axom_one_assam_directory_records_v7';`
- Whenever you add new records or fix categories in `assam-directory.seed.json`, **bump the key to `_v8`** so existing user browsers immediately fetch the updated dataset instead of showing stale cache counts.

### Rule 3: Keep the GitHub Backup Archive Under 25 MB
- Run: `python scratch/create_backup_zip.py`
- Archive location: `e:\New folder\axom-one-backups\axom-one-github-backup.zip`
- The script automatically excludes heavy directories (`node_modules/`, `.git/`, `dist/`).
- Never add raw uncompressed videos or multi-megabyte unoptimized TIFF/PNG files to `public/images/`. Use `.jpg` or `.webp` at standard web compression.

### Rule 4: Run Tests & Typechecks Before Concluding
- Vitest command: `npx vitest run --testTimeout 15000` (All 77 tests must pass).
- Production build: `npm run build` (`tsc -b && vite build` must exit with code 0).

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

---

## 5. Important Inventory Checklists

### 5.1. The 7 Statutory National Parks of Assam
1. **Kaziranga National Park** (`tour-kaziranga`, `nature-kaziranga`)
2. **Manas National Park** (`tour-manas`, `nature-manas`)
3. **Dibru-Saikhowa National Park** (`tour-dibru-saikhowa`, `nature-dibru`)
4. **Nameri National Park** (`tour-nameri`, `nature-nameri`)
5. **Orang National Park** (`tour-orang`, `nature-orang`)
6. **Raimona National Park** (`tour-raimona`, `nature-raimona`)
7. **Dehing Patkai National Park** (`tour-dehing-patkai`, `nature-dehing`)

### 5.2. Prominent Temples & Spiritual Centers Added
- **Kamakhya Devalaya & Nilachal Hill** (Kamrup Metropolitan)
- **Umananda Peacock Island Shiva Temple** (Kamrup Metropolitan)
- **Navagraha Astronomical Temple** (Kamrup Metropolitan)
- **Basistha Ashram Cave Temple** (Kamrup Metropolitan)
- **Hajo Panchatirtha & Hayagriva Madhava** (Kamrup)
- **Aswaklanta & Doul Govinda Temples** (Kamrup / North Guwahati)
- **Sivasagar Sivadol, Vishnudol & Devidol** (Sivasagar)
- **Batadrava Than / Bordowa** (Nagaon)
- **Barpeta Satra & Doul Mandir** (Barpeta)
- **Majuli River Island Sattras** (Auniati, Dakhinpat, Kamalabari, Shamaguri, Garamur)
- **Tilinga Mandir (The Bell Temple)** (Bordubi, Tinsukia)
- **Mahabhairav Historic Temple** (Tezpur, Sonitpur)
- **Negheriting Shiva Doul** (Dergaon, Golaghat)
- **Dhekiakhowa Bornamghar** (Jorhat)
- **Sri Sri Kachakanti Devi Temple** (Silchar, Cachar)
- **Bhubaneswar Shiva Temple** (Bhuban Hills, Cachar)
- **Billeswar Devalaya & Sri Sri Hari Mandir** (Nalbari)
- **Pari Hareswar Devalaya** (Bajali)

---

## 6. Official Social Configuration
Defined in `src/config/socialConfig.ts`:
```typescript
export const INSTAGRAM_CONFIG = {
  handle: '@axomone_official',
  username: 'axomone_official',
  url: 'https://instagram.com/axomone_official',
  profileUrl: 'https://www.instagram.com/axomone_official/',
  bioShort: 'Discover Local. Connect Assam.',
  bioFull: 'Official platform celebrating the heritage, wildlife, and people of Assam.',
};
```
- **Footer**: Shows circular social icons row, official Instagram gradient Follow button, and the weekly newsletter email subscription form.
- The follower count display and large homepage showcase grid were cleanly retired per user instructions.

---

## 7. Development & Runtime Services

| Service | Port / Protocol | Launch Command | Purpose |
|---|---|---|---|
| **Vite Dev Server** | `http://localhost:5173` | `npm run dev -- --host 0.0.0.0 --port 5173` | Live reload HMR front-end application |
| **Cloudflare Worker** | `http://127.0.0.1:8787` | `npm run worker:dev -- --port 8787` | Serverless backend API simulation |
| **Vitest Runner** | Node.js in-memory | `npx vitest run --testTimeout 15000` | Automated regression test harness |
| **Vite Production Bundler** | Rollup / esbuild | `npm run build` | Typechecking (`tsc -b`) & asset minimization |
