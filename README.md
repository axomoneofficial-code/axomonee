# AXOM ONE (অসম এক মঞ্চ) — Assam's All-in-One Digital Platform

> **Citizen Notice**: AXOM ONE is an independent, community-driven civic directory and cultural portal for Assam. It is not an official government agency or authorized government website.

---

## 🌾 Overview

**AXOM ONE** brings verified local businesses, traditional crafts, essential civic services, cultural events, responsible tourism, and youth opportunities across **all 35 administrative districts of Assam** into a single, accessible, fast digital gateway.

Built with an original cultural aesthetic named **"The Living Axom Interface"**, the platform draws inspiration from Assamese *Gamusa* woven jacquard motifs, the flowing curves of the Brahmaputra, and a palette of warm ivory, deep forest green, Gamusa red, and Muga silk gold.

---

## 🚀 Key Highlights & Public Services

| Section | Route | Purpose |
| :--- | :--- | :--- |
| **Explore** | `/explore` | Multi-filter directory search by keyword, district, category, and listing type |
| **Businesses** | `/businesses` | Handloom collectives, organic tea gardens, artisans & verified shops |
| **Services** | `/services` | Electricians, solar technicians, emergency medical desks, and plumbers |
| **Events** | `/events` | Raas Mahotsavs, Bihu celebrations, craft exhibitions, and book conclaves |
| **Tourism** | `/tourism` | Responsible travel guidance for Kaziranga, Majuli, Sivasagar, and buffer eco-trails |
| **Opportunities** | `/opportunities` | Internships, research fellowships, scholarships, with anti-fraud advisories |
| **Community** | `/community` | Approved civic announcements, river cleanup drives, and donor desks |
| **Submissions** | `/submit` | Free public submissions queue for local businesses, services, and notices |
| **Safety Channel** | `/report` | Community reporting for inaccurate listings, closed shops, or deceptive ads |
| **Admin Portal** | `/admin` | Protected moderation dashboard, queue reviews, audit trails, and metrics |

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite, React Router 7, Modern CSS ("The Living Axom Interface"), Lucide React icons.
- **Backend**: Cloudflare Workers TypeScript REST API (`/api/v1`), Web Crypto PBKDF2/SHA-256 authentication, HttpOnly SameSite session cookies.
- **Database**: Cloudflare D1 (Distributed SQLite) with parameterized queries, comprehensive indexes, and versioned migrations.
- **Security & Privacy**: Database-backed rate limiting via `rate_limit_events`, strict CSP and HTTP security headers, DPDP Act 2023 compliance, zero GPS tracking.
- **Testing**: Automated Vitest test suite covering search, district integrity, moderation visibility, and authentication.

---

## 🏁 Quick Start & Local Development

### Prerequisites
- Node.js 18+
- npm or pnpm
- Cloudflare Wrangler (included in `devDependencies`)

### 1. Installation
```bash
git clone <repo-url> axom-one
cd axom-one
npm install
```

### 2. Run Public Frontend & Dev Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 3. Run Automated Tests
```bash
npm run test
```

### 4. Build Production Bundle
```bash
npm run build
```

### 5. Typecheck Across App and Worker
```bash
npm run typecheck
```

### 6. Local Cloudflare D1 Database & Worker (Optional)
```bash
npm run db:migrate:local
npm run db:seed:local
npm run worker:dev
```

---

## 💻 VS Code Integration Ready

The repository includes pre-configured `.vscode/` settings, tasks, and debug profiles:

- **Recommended Extensions** (`.vscode/extensions.json`): ESLint, Prettier, Vitest Explorer, Tailwind CSS, Cloudflare Wrangler.
- **One-Click Tasks** (`Ctrl+Shift+B` or *Terminal > Run Task*):
  - `npm: dev (Vite Dev Server)`
  - `npm: build (Production Build)`
  - `npm: test (Run Vitest Suite)`
  - `npm: typecheck`
  - `npm: worker:dev`
- **F5 Interactive Debugging** (`.vscode/launch.json`):
  - `Debug AXOM ONE (Chrome)`: Launches Chrome attached to Vite HMR with active breakpoints.
  - `Debug AXOM ONE (Edge)`: Launches Edge attached to Vite HMR.
  - `Debug Vitest Tests`: Debugs tests interactively with breakpoint pauses.
- **Clean File Nesting & Formatting**: Automatic format-on-save with Prettier, clean explorer nesting for lockfiles, tsconfigs, and env configurations.

---

## 🌐 GitHub & Edge Hosting

### Option A: GitHub Pages (Zero-Config CI/CD)
The repository contains an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.
1. Push your repository to GitHub.
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build the client and deploy live to `https://<your-username>.github.io/<repo-name>/`.
5. Deep-linking (`/tourism`, `/directory`, `/events`, etc.) is fully handled by the included `public/404.html` and `index.html` Single Page Application router redirect.

### Option B: Cloudflare Pages / Workers (Full Stack with D1 SQLite)
- Fast Edge deployment with unlimited static assets and Cloudflare D1 SQLite database:
```bash
npm run build
npx wrangler deploy
```
- Full Cloudflare deployment guide available in [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md).

---

## 🛡️ Default Administrator Account (Local Development Only)

- **Login URL**: `/admin/login`
- **Email**: `admin@axomone.local`
- **Password**: `AxomOne2026!Admin`

*(In production environments, administrator passwords must be provisioned via secure environment secrets and never committed).*

---

## 📚 Documentation Directory

- [`PROJECT_STATUS.md`](./PROJECT_STATUS.md): Master development checklist and verified test results
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md): Architectural topology, component hierarchy & security boundaries
- [`docs/DATABASE.md`](./docs/DATABASE.md): Cloudflare D1 schema, relational tables, indexes & migrations
- [`docs/SECURITY.md`](./docs/SECURITY.md): Cryptography, HttpOnly sessions, CSRF, rate-limiting & CSP headers
- [`docs/ADMIN-MODERATION.md`](./docs/ADMIN-MODERATION.md): Content safety guidelines, SLA, and verification matrix
- [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md): Cloudflare Pages / Workers static assets deployment guide
- [`docs/TESTING.md`](./docs/TESTING.md): Vitest automated test suite documentation
- [`docs/PRIVACY.md`](./docs/PRIVACY.md): DPDP Act 2023 compliance and edge data minimization
- [`docs/BACKUP-RESTORE.md`](./docs/BACKUP-RESTORE.md): Cloudflare D1 export, snapshot and recovery procedures
- [`docs/LAUNCH-CHECKLIST.md`](./docs/LAUNCH-CHECKLIST.md): Production go-live verification checklist
