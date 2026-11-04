# AXOM ONE — Database Backup & Disaster Recovery Guide

## 1. Exporting Cloudflare D1 Database

Cloudflare D1 allows programmatic export of database tables and content to standard SQL dumps.

```bash
# Export remote D1 database to local SQL file
npx wrangler d1 export axom-one-db --remote --output=./backup_$(date +%Y%m%d).sql

# Export local development database
npx wrangler d1 export axom-one-db --local --output=./backup_local.sql
```

---

## 2. Restoring from a Backup SQL Dump

In the event of accidental data corruption or disaster recovery:

```bash
# Step 1: Execute backup script onto target database
npx wrangler d1 execute axom-one-db --remote --file=./backup_20261031.sql

# Step 2: Validate table counts
npx wrangler d1 execute axom-one-db --remote --command="SELECT COUNT(*) FROM districts; SELECT COUNT(*) FROM listings;"
```

---

## 3. Scheduled Automated Backups

For production operation, schedule a weekly GitHub Action or Cloudflare Cron Trigger to invoke the export command and store the snapshot in encrypted cold storage.
