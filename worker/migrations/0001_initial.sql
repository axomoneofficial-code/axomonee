-- ============================================================================
-- Migration 0001: Initial schema setup for AXOM ONE
-- ============================================================================

CREATE TABLE IF NOT EXISTS districts (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    name_as TEXT NOT NULL,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS listings (
    id TEXT PRIMARY KEY,
    district_id TEXT NOT NULL REFERENCES districts(id),
    category_id TEXT NOT NULL REFERENCES categories(id),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    listing_type TEXT NOT NULL,
    address TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    website_url TEXT,
    opening_hours_json TEXT,
    image_key TEXT,
    source_url TEXT,
    verification_status TEXT NOT NULL DEFAULT 'unverified',
    moderation_status TEXT NOT NULL DEFAULT 'published',
    is_sponsored INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    published_at TEXT
);

CREATE TABLE IF NOT EXISTS submissions (
    id TEXT PRIMARY KEY,
    listing_id TEXT REFERENCES listings(id) ON DELETE SET NULL,
    submitter_name TEXT NOT NULL,
    submitter_email TEXT NOT NULL,
    submission_type TEXT NOT NULL,
    payload_json TEXT NOT NULL,
    moderation_status TEXT NOT NULL DEFAULT 'pending',
    reviewer_notes TEXT,
    created_at TEXT NOT NULL,
    reviewed_at TEXT
);

CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    district_id TEXT NOT NULL REFERENCES districts(id),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    venue TEXT NOT NULL,
    start_at TEXT NOT NULL,
    end_at TEXT NOT NULL,
    organizer TEXT NOT NULL,
    source_url TEXT,
    moderation_status TEXT NOT NULL DEFAULT 'published',
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS reports (
    id TEXT PRIMARY KEY,
    listing_id TEXT REFERENCES listings(id) ON DELETE CASCADE,
    reason TEXT NOT NULL,
    description TEXT NOT NULL,
    reporter_contact TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TEXT NOT NULL,
    resolved_at TEXT
);

CREATE TABLE IF NOT EXISTS admin_users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'moderator',
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    last_login_at TEXT
);

CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    admin_user_id TEXT NOT NULL REFERENCES admin_users(id) ON DELETE CASCADE,
    token_hash TEXT UNIQUE NOT NULL,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY,
    admin_user_id TEXT NOT NULL REFERENCES admin_users(id),
    action TEXT NOT NULL,
    resource_type TEXT NOT NULL,
    resource_id TEXT NOT NULL,
    metadata_json TEXT,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS rate_limit_events (
    id TEXT PRIMARY KEY,
    action_key TEXT NOT NULL,
    created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_districts_slug ON districts(slug);
CREATE INDEX IF NOT EXISTS idx_districts_active ON districts(is_active);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_active ON categories(is_active);

CREATE INDEX IF NOT EXISTS idx_listings_district_id ON listings(district_id);
CREATE INDEX IF NOT EXISTS idx_listings_category_id ON listings(category_id);
CREATE INDEX IF NOT EXISTS idx_listings_slug ON listings(slug);
CREATE INDEX IF NOT EXISTS idx_listings_type ON listings(listing_type);
CREATE INDEX IF NOT EXISTS idx_listings_moderation ON listings(moderation_status);
CREATE INDEX IF NOT EXISTS idx_listings_created ON listings(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(moderation_status);
CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_events_district_id ON events(district_id);
CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);
CREATE INDEX IF NOT EXISTS idx_events_start ON events(start_at);

CREATE INDEX IF NOT EXISTS idx_reports_status ON reports(status);
CREATE INDEX IF NOT EXISTS idx_reports_listing ON reports(listing_id);

CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token_hash);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);

CREATE INDEX IF NOT EXISTS idx_audit_created ON audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rate_limit_key ON rate_limit_events(action_key, created_at);
