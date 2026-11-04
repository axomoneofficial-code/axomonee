import { describe, it, expect } from 'vitest';
import { api, FALLBACK_DISTRICTS, FALLBACK_CATEGORIES } from '../api';

describe('AXOM ONE Platform Integrity & District Verification', () => {
  it('covers all 35 administrative districts of Assam including Bajali and Tamulpur', () => {
    expect(FALLBACK_DISTRICTS.length).toBe(35);

    const slugs = FALLBACK_DISTRICTS.map((d) => d.slug);
    expect(slugs).toContain('bajali');
    expect(slugs).toContain('tamulpur');
    expect(slugs).toContain('kamrup-metropolitan');
    expect(slugs).toContain('majuli');
    expect(slugs).toContain('barpeta');
    expect(slugs).toContain('dima-hasao');

    // Every district must have valid English and Assamese names
    FALLBACK_DISTRICTS.forEach((d) => {
      expect(d.name).toBeTruthy();
      expect(d.name_as).toBeTruthy();
      expect(d.slug).toBeTruthy();
      expect(d.is_active).toBe(1);
    });
  });

  it('contains all essential categories for civic and community discovery', () => {
    const categorySlugs = FALLBACK_CATEGORIES.map((c) => c.slug);
    expect(categorySlugs).toContain('businesses');
    expect(categorySlugs).toContain('services');
    expect(categorySlugs).toContain('tourism');
    expect(categorySlugs).toContain('opportunities');
    expect(categorySlugs).toContain('community');
    expect(categorySlugs).toContain('crafts');
  });
});

describe('Directory Filtering, Search & Moderation Visibility', () => {
  it('returns only published listings to the public API', async () => {
    const res = await api.getListings();
    expect(res.listings.length).toBeGreaterThan(0);
    res.listings.forEach((l) => {
      expect(l.moderation_status).toBe('published');
    });
  });

  it('filters listings accurately by district', async () => {
    const res = await api.getListings({ district: 'kamrup-metropolitan' });
    res.listings.forEach((l) => {
      expect(l.district_slug).toBe('kamrup-metropolitan');
    });
  });

  it('filters listings accurately by category', async () => {
    const res = await api.getListings({ category: 'crafts' });
    res.listings.forEach((l) => {
      expect(l.category_slug).toBe('crafts');
    });
  });

  it('searches listings by keyword in title or description', async () => {
    const res = await api.getListings({ q: 'Muga' });
    expect(res.listings.length).toBeGreaterThan(0);
    const combined = `${res.listings[0].title} ${res.listings[0].description}`.toLowerCase();
    expect(combined).toContain('muga');
  });
});

describe('Submissions Moderation Workflow', () => {
  it('submits an entry and places it in pending status without exposing it publicly', async () => {
    const submissionResult = await api.submitListing({
      submitter_name: 'Hemanta Deka',
      submitter_email: 'hdeka@assamartisans.test',
      submission_type: 'business',
      payload: {
        title: 'Brahmaputra Cane and Bamboo Guild',
        district_slug: 'barpeta',
        category_slug: 'crafts',
        description: 'Eco-friendly traditional Japi and bamboo furniture crafted in Barpeta.',
      },
    });

    expect(submissionResult.success).toBe(true);

    // Verify it is NOT displayed publicly while pending
    const publicAfter = await api.getListings();
    const foundInPublic = publicAfter.listings.find((l) => l.title === 'Brahmaputra Cane and Bamboo Guild');
    expect(foundInPublic).toBeUndefined();

    // Verify it is present in the admin pending queue
    const pendingQueue = await api.getAdminSubmissions('pending');
    const queuedItem = pendingQueue.find((s) => s.submitter_name === 'Hemanta Deka');
    expect(queuedItem).toBeDefined();
    expect(queuedItem?.moderation_status).toBe('pending');
  });

  it('allows administrator to approve a submission', async () => {
    const pendingQueue = await api.getAdminSubmissions('pending');
    expect(pendingQueue.length).toBeGreaterThan(0);
    const target = pendingQueue[0];

    const approved = await api.approveSubmission(target.id);
    expect(approved).toBe(true);

    const approvedQueue = await api.getAdminSubmissions('approved');
    const item = approvedQueue.find((s) => s.id === target.id);
    expect(item).toBeDefined();
    expect(item?.moderation_status).toBe('approved');
  });

  it('allows administrator to reject a submission with review notes', async () => {
    // Create new submission to test rejection
    await api.submitListing({
      submitter_name: 'Test Submitter',
      submitter_email: 'test@domain.test',
      submission_type: 'business',
      payload: { title: 'Spam Entry' },
    });

    const pendingQueue = await api.getAdminSubmissions('pending');
    const spamItem = pendingQueue.find((s) => s.submitter_name === 'Test Submitter');
    expect(spamItem).toBeDefined();

    const rejected = await api.rejectSubmission(spamItem!.id, 'Missing contact details and unverifiable business');
    expect(rejected).toBe(true);

    const rejectedQueue = await api.getAdminSubmissions('rejected');
    const foundRejected = rejectedQueue.find((s) => s.id === spamItem!.id);
    expect(foundRejected).toBeDefined();
    expect(foundRejected?.reviewer_notes).toContain('Missing contact details');
  });
});

describe('Content Reporting & Administrator Audit Trail', () => {
  it('records user reports into the moderation queue', async () => {
    const reportRes = await api.submitReport({
      reason: 'Inaccurate Opening Hours',
      description: 'The shop is closed on Sunday.',
      reporter_contact: 'reporter@citizen.test',
    });

    expect(reportRes.success).toBe(true);

    const reportsQueue = await api.getAdminReports();
    const found = reportsQueue.find((r) => r.reporter_contact === 'reporter@citizen.test');
    expect(found).toBeDefined();
    expect(found?.status).toBe('pending');

    // Admin can resolve report
    const resolved = await api.updateReport(found!.id, 'resolved');
    expect(resolved).toBe(true);
  });

  it('maintains an audit trail of administrator actions', async () => {
    const logs = await api.getAuditLogs();
    expect(logs.length).toBeGreaterThan(0);
    expect(logs[0].admin_user_id).toBeTruthy();
  });
});

describe('Administrator Security & Authentication', () => {
  it('rejects invalid administrator credentials with generic error', async () => {
    const res = await api.adminLogin('admin@axomone.local', 'WrongPassword123');
    expect(res.success).toBe(false);
    expect(res.user).toBeUndefined();
    expect(res.error).toContain('Invalid credentials');
  });

  it('authenticates valid administrator and generates secure session', async () => {
    const res = await api.adminLogin('admin@axomone.local', 'AxomOne2026!Admin');
    expect(res.success).toBe(true);
    expect(res.user).toBeDefined();
    expect(res.user?.email).toBe('admin@axomone.local');

    const me = await api.getAdminMe();
    expect(me).toBeDefined();
    expect(me?.role).toBe('superadmin');

    await api.adminLogout();
    const afterLogout = await api.getAdminMe();
    expect(afterLogout).toBeNull();
  });

  it('exports ScrollToTop component to reset scroll position to upper top on route changes', async () => {
    const { ScrollToTop } = await import('../components/ScrollToTop');
    expect(ScrollToTop).toBeDefined();
    expect(typeof ScrollToTop).toBe('function');
  });

  it('validates PWA manifest and service worker configuration for offline access', async () => {
    // 1. Verify Web App Manifest (JSON resolution)
    const manifestModule = await import('../../public/manifest.json');
    const manifest = (manifestModule.default || manifestModule) as any;
    expect(manifest.name).toContain('AXOM ONE');
    expect(manifest.short_name).toBe('AXOM ONE');
    expect(manifest.start_url).toBe('/');
    expect(manifest.display).toBe('standalone');
    expect(manifest.theme_color).toBe('#DC2626');
    expect(manifest.background_color).toBe('#FAF6EE');
    expect(manifest.icons.length).toBeGreaterThanOrEqual(4);

    // 2. Verify PWA utilities & prompt handlers
    const { registerServiceWorker, onInstallableChange, promptPwaInstall } = await import('../utils/pwa');
    expect(typeof registerServiceWorker).toBe('function');
    expect(typeof onInstallableChange).toBe('function');
    expect(typeof promptPwaInstall).toBe('function');

    // 3. Verify PWA Component Banner
    const { PWAInstallBanner } = await import('../components/PWAInstallBanner');
    expect(PWAInstallBanner).toBeDefined();
    expect(typeof PWAInstallBanner).toBe('function');
  });

  it('validates interactive Assam district map geometry and 35 district coverage', async () => {
    const { ASSAM_DISTRICT_MAP_ENTRIES, AssamDistrictMap } = await import('../components/AssamDistrictMap');
    expect(AssamDistrictMap).toBeDefined();
    expect(typeof AssamDistrictMap).toBe('function');

    // All 35 official administrative districts must be mapped
    expect(ASSAM_DISTRICT_MAP_ENTRIES).toHaveLength(35);

    const mapSlugs = new Set(ASSAM_DISTRICT_MAP_ENTRIES.map((d) => d.slug));
    expect(mapSlugs.size).toBe(35);

    // Verify key districts are correctly plotted
    expect(mapSlugs.has('kamrup-metropolitan')).toBe(true);
    expect(mapSlugs.has('majuli')).toBe(true);
    expect(mapSlugs.has('dima-hasao')).toBe(true);
    expect(mapSlugs.has('baksa')).toBe(true);
    expect(mapSlugs.has('tinsukia')).toBe(true);
    expect(mapSlugs.has('dhubri')).toBe(true);
    expect(mapSlugs.has('cachar')).toBe(true);

    // Verify coordinates and path definitions
    ASSAM_DISTRICT_MAP_ENTRIES.forEach((d) => {
      expect(d.path).toMatch(/^M\s/);
      expect(d.cx).toBeGreaterThan(0);
      expect(d.cx).toBeLessThan(1020);
      expect(d.cy).toBeGreaterThan(0);
      expect(d.cy).toBeLessThan(620);
      expect(d.name).toBeTruthy();
      expect(d.division).toBeTruthy();
    });
  });

  it('validates Global Quick Search (Ctrl + K) modal component and searchable index', async () => {
    const { GlobalSearchModal } = await import('../components/GlobalSearchModal');
    expect(GlobalSearchModal).toBeDefined();
    expect(typeof GlobalSearchModal).toBe('function');

    const districts = (await import('../data/districts.json')).default;
    const destinations = (await import('../data/tourism-destinations.json')).default;
    const directory = (await import('../data/assam-directory.seed.json')).default;

    // 1. Verify 35 districts indexed
    expect(districts.length).toBe(35);
    const districtSlugs = new Set(districts.map((d: any) => d.slug));
    expect(districtSlugs.has('kamrup-metropolitan')).toBe(true);
    expect(districtSlugs.has('majuli')).toBe(true);

    // 2. Verify tourism destinations indexed
    expect(destinations.length).toBeGreaterThanOrEqual(75);
    const tourSlugs = new Set(destinations.map((d: any) => d.slug));
    expect(tourSlugs.has('kaziranga')).toBe(true);
    expect(tourSlugs.has('kamakhya')).toBe(true);

    // 3. Verify directory records indexed (colleges, universities, civic services)
    expect(directory.records.length).toBeGreaterThan(200);
    const educationItems = directory.records.filter((r: any) => r.category === 'education');
    expect(educationItems.length).toBeGreaterThan(20);
  });
});
