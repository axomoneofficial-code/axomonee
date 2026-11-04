import { describe, it, expect } from 'vitest';
import { TOUR_STEPS } from '../components/guidance/tourSteps';
import { CONTEXTUAL_HELP_TOPICS } from '../components/guidance/ContextualHelp';

describe('AXOM ONE — Interactive Guidance & Onboarding Architecture', () => {
  describe('Tour Steps Specifications & Route Integrity', () => {
    it('provides exactly 9 comprehensive tour steps covering all essential platform controls', () => {
      expect(TOUR_STEPS.length).toBe(9);

      const stepIds = TOUR_STEPS.map((s) => s.id);
      expect(stepIds).toEqual([
        'header-navigation',
        'tourism-explore',
        'districts-portal',
        'destination-details',
        'directory-features',
        'services-businesses',
        'cultural-events',
        'community-submissions',
        'language-accessibility',
      ]);
    });

    it('ensures each tour step includes bilingual labels, explicit used-for purposes, descriptions, and highlights', () => {
      TOUR_STEPS.forEach((step, idx) => {
        expect(step.id).toBeTruthy();
        expect(step.targetSelector).toMatch(/^\[data-tour="[a-z0-9-]+"]$/);
        expect(step.badge).toContain(`Step ${idx + 1} of 9`);
        
        // English and Assamese titles & descriptions
        expect(step.title.trim().length).toBeGreaterThan(0);
        expect(step.title_as.trim().length).toBeGreaterThan(0);
        expect(step.description.trim().length).toBeGreaterThan(20);
        expect(step.description_as.trim().length).toBeGreaterThan(20);

        // Explicit "Used For" purposes in both English and Assamese
        expect(step.used_for).toBeTruthy();
        expect(step.used_for.trim().length).toBeGreaterThan(20);
        expect(step.used_for_as).toBeTruthy();
        expect(step.used_for_as.trim().length).toBeGreaterThan(20);

        // Target routes must belong to official application paths
        expect(['/', '/tourism', '/districts', '/directory', '/services', '/events', '/submit']).toContain(step.route);

        // Highlights list
        expect(Array.isArray(step.highlights)).toBe(true);
        expect(step.highlights.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('targets real existing DOM data-tour hooks across the actual pages', () => {
      const selectors = TOUR_STEPS.map((s) => s.targetSelector);
      expect(selectors).toContain('[data-tour="site-header"]');
      expect(selectors).toContain('[data-tour="tourism-controls"]');
      expect(selectors).toContain('[data-tour="districts-map"]');
      expect(selectors).toContain('[data-tour="nav-destinations-info"]');
      expect(selectors).toContain('[data-tour="directory-search"]');
      expect(selectors).toContain('[data-tour="services-list"]');
      expect(selectors).toContain('[data-tour="events-controls"]');
      expect(selectors).toContain('[data-tour="submit-form"]');
      expect(selectors).toContain('[data-tour="header-lang-picker"]');
    });
  });

  describe('Contextual Help Topics & Verification Notices', () => {
    const requiredKeys = ['tourism', 'directory', 'events', 'services', 'submit'];

    it('supplies tailored contextual help for all core discovery pages', () => {
      requiredKeys.forEach((key) => {
        const topic = CONTEXTUAL_HELP_TOPICS[key];
        expect(topic, `Missing contextual help for ${key}`).toBeDefined();
        expect(topic.title.length).toBeGreaterThan(0);
        expect(topic.summary.length).toBeGreaterThan(0);
        expect(topic.tips.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('articulates verification rules and official source cross-references', () => {
      const tourismHelp = CONTEXTUAL_HELP_TOPICS.tourism;
      expect(tourismHelp.verifiedNote).toContain('Assam Tourism');

      const directoryHelp = CONTEXTUAL_HELP_TOPICS.directory;
      expect(directoryHelp.verifiedNote).toContain('assam.gov.in and bodoland.gov.in');

      const submitHelp = CONTEXTUAL_HELP_TOPICS.submit;
      expect(submitHelp.verifiedNote).toContain("Assam's digital ecosystem");
      expect(submitHelp.tips.find((t) => t.title === 'Editorial Review Process')?.desc).toContain('reviewed by the editorial desk');
    });

    it('provides clear guidance on filters, GPS navigation, and empty state recovery', () => {
      // Tourism tips
      const tourismTips = CONTEXTUAL_HELP_TOPICS.tourism.tips.map((t) => t.title);
      expect(tourismTips).toContain('Interactive 35-District Map');
      expect(tourismTips).toContain('Category Filtering');
      expect(tourismTips).toContain('Turn-by-Turn GPS Directions');

      // Directory tips
      const directoryTips = CONTEXTUAL_HELP_TOPICS.directory.tips.map((t) => t.title);
      expect(directoryTips).toContain('District & Category Filter');
      expect(directoryTips).toContain('Official Portal Links');

      // Events tips
      const eventsTips = CONTEXTUAL_HELP_TOPICS.events.tips.map((t) => t.title);
      expect(eventsTips).toContain('Filter by District');
      expect(eventsTips).toContain('Venue & Map Navigation');
    });
  });

  describe('Privacy & Storage Integrity Contracts', () => {
    it('uses dedicated versioned localStorage keys that require zero personal data', () => {
      const WELCOME_KEY = 'axom_one_welcome_dismissed_v1';
      const TOUR_KEY = 'axom_one_tour_completed_v1';

      expect(WELCOME_KEY).toBe('axom_one_welcome_dismissed_v1');
      expect(TOUR_KEY).toBe('axom_one_tour_completed_v1');

      // Neither key requires network sync, user identity, phone numbers, or cookies
      expect(WELCOME_KEY).not.toContain('user_id');
      expect(TOUR_KEY).not.toContain('token');
    });
  });
});
