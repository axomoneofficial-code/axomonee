# AXOM ONE — Free-Tier Cloudflare Deployment Guide

## 1. Cloudflare Free Tier Alignment

AXOM ONE is designed to run entirely within the generous, zero-cost free tiers of **Cloudflare**:
- **Cloudflare Workers**: 100,000 requests/day free.
- **Cloudflare Static Assets / Pages**: Unlimited static requests free.
- **Cloudflare D1**: 5,000,000 rows read/day, 100,000 rows written/day, 5 GB total storage free.

---

## 2. Step-by-Step Production Deployment

### Step 1: Login to Cloudflare CLI
```bash
npx wrangler login
```

### Step 2: Create Remote D1 Database
```bash
npx wrangler d1 create axom-one-db
```
Copy the generated `database_id` into your [`wrangler.toml`](file:///e:/New%20folder/axom-one/wrangler.toml) file:
```toml
[[d1_databases]]
binding = "DB"
database_name = "axom-one-db"
database_id = "<your-database-id-here>"
```

### Step 3: Run Database Migrations on Remote D1
```bash
npx wrangler d1 migrations apply axom-one-db --remote
```

### Step 4: Seed Initial Assam Districts and Categories
```bash
npx wrangler d1 execute axom-one-db --remote --file=./worker/seed.sql
```

### Step 5: Build Frontend & Deploy Edge Application
```bash
npm run build
npx wrangler deploy
```

Upon completion, Wrangler will output your live URL (e.g., `https://axom-one.<your-subdomain>.workers.dev`).
