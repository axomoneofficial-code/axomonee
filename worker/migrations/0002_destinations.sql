-- ============================================================================
-- Migration 0002: Add destinations table for Explore Assam Beauty & Heritage
-- ============================================================================

CREATE TABLE IF NOT EXISTS destinations (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    name_as TEXT,
    name_hi TEXT,
    category TEXT NOT NULL,
    district TEXT NOT NULL,
    district_slug TEXT,
    locality TEXT,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    official_website TEXT,
    source_url TEXT,
    image_url TEXT,
    image_attribution TEXT,
    latitude REAL,
    longitude REAL,
    best_season TEXT,
    access_notes TEXT,
    opening_hours TEXT,
    entry_fee TEXT,
    last_verified_at TEXT,
    status TEXT NOT NULL DEFAULT 'published',
    language_json TEXT NOT NULL DEFAULT '["en","as","hi"]',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_destinations_category ON destinations(category);
CREATE INDEX IF NOT EXISTS idx_destinations_status ON destinations(status);
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
