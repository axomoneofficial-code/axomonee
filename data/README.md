# AXOM ONE Assam Directory — starter pack

Files:
- `assam-directory.seed.json`: structured JSON records and categories.
- `assam-directory.seed.csv`: spreadsheet-friendly records.

## Integration
1. Inspect the existing AXOM ONE project and database schema first.
2. Import into a development database or existing seed-data workflow; do not overwrite production data.
3. Map the fields to the current schema rather than replacing your backend.
4. Keep records in `draft` status until reviewed.
5. Display `sourceUrl` in the admin interface so editors can verify each record.
6. Add coordinates, photos, phone, opening hours, fees and accessibility only from reliable sources.
7. Store a `lastVerifiedAt` date and allow editors to update stale links.

## Suggested DirectoryItem fields
`id, name, category, subcategory, district, locality, description, website, sourceUrl, verifiedFrom, status, language, imageUrl, latitude, longitude, phone, openingHours, entryFee, accessibility, lastVerifiedAt, createdAt, updatedAt`.

Suggested status values: `draft`, `pending_review`, `published`, `rejected`, `archived`.

## Important
This is a starter dataset, not an exhaustive list of every university, college, temple, heritage site, park, service, event or business in Assam. Some entries link to an official category directory rather than an individual attraction page when a reliable individual page was not established. Verify all details before public publication.
