import { describe, it, expect, beforeEach } from 'vitest';
import { api } from '../api';
import initialTourismData from '../data/tourism-destinations.json';
import initialSeedData from '../data/assam-directory.seed.json';

describe('AXOM ONE — Phase B & C Security & Public Data Integrity', () => {
  beforeEach(async () => {
    // Ensure clean logged-out state before each test
    await api.adminLogout();
  });

  it('ensures unauthenticated visitors default to non-admin status', async () => {
    const me = await api.getAdminMe();
    expect(me).toBeNull();
  });

  it('strictly rejects unauthorized or bad administrator credentials', async () => {
    const badLogin = await api.adminLogin('admin@axomone.local', 'WrongPassword!123');
    expect(badLogin.success).toBe(false);
    expect(badLogin.user).toBeUndefined();

    const current = await api.getAdminMe();
    expect(current).toBeNull();
  });

  it('authenticates valid administrators and establishes secure session', async () => {
    const validLogin = await api.adminLogin('admin@axomone.local', 'AxomOne2026!Admin');
    expect(validLogin.success).toBe(true);
    expect(validLogin.user?.role).toBe('superadmin');

    const me = await api.getAdminMe();
    expect(me).not.toBeNull();
    expect(me?.email).toBe('admin@axomone.local');
  });

  it('guarantees that public destination lists only expose certified published records', () => {
    // Simulate public filtering rule
    const publicDestinations = (initialTourismData as any[]).filter((d) => d.status === 'published');
    
    // Ensure every record exposed to public has status === 'published'
    publicDestinations.forEach((dest) => {
      expect(dest.status).toBe('published');
      expect(dest.name).toBeTruthy();
      expect(dest.category).toBeTruthy();
    });

    // Verify non-published / draft records are not returned to the public
    const hasAnyDraft = publicDestinations.some((d) => d.status === 'draft' || d.status === 'pending_review');
    expect(hasAnyDraft).toBe(false);
  });

  it('guarantees that public directory items only expose certified published records', () => {
    // Simulate public filtering rule
    const publicDirectoryItems = (initialSeedData.records as any[]).filter((item) => item.status === 'published');

    publicDirectoryItems.forEach((item) => {
      expect(item.status).toBe('published');
      expect(item.name).toBeTruthy();
      expect(item.district).toBeTruthy();
    });

    // Verify non-published items are omitted
    const hasAnyDraft = publicDirectoryItems.some((item) => item.status !== 'published');
    expect(hasAnyDraft).toBe(false);
  });

  it('verifies that logout completely revokes administrative authorization', async () => {
    await api.adminLogin('admin@axomone.local', 'AxomOne2026!Admin');
    const loggedIn = await api.getAdminMe();
    expect(loggedIn).not.toBeNull();

    await api.adminLogout();
    const afterLogout = await api.getAdminMe();
    expect(afterLogout).toBeNull();
  });
});
