import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import { District, Category } from './types';
import { api, FALLBACK_DISTRICTS, FALLBACK_CATEGORIES } from './api';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { GuidanceProvider } from './context/GuidanceContext';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdminLayout } from './components/AdminLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { WelcomeModal, TourOverlay } from './components/guidance';
import './components/guidance/guidance.css';

// Public Pages (Direct Imports for Instant Navigation)
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { DirectoryPage } from './pages/DirectoryPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { BusinessDetailPage } from './pages/BusinessDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { TourismPage } from './pages/TourismPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { DistrictsPage } from './pages/DistrictsPage';
import { DistrictDetailPage } from './pages/DistrictDetailPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { CommunityPage } from './pages/CommunityPage';
import { SubmitPage } from './pages/SubmitPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ReportPage } from './pages/ReportPage';
import { HelpCentrePage } from './pages/HelpCentrePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Admin Pages (Direct Imports)
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminDestinationsPage } from './pages/admin/AdminDestinationsPage';
import { AdminEventsPage } from './pages/admin/AdminEventsPage';
import { AdminSubmissionsPage } from './pages/admin/AdminSubmissionsPage';
import { AdminListingsPage } from './pages/admin/AdminListingsPage';
import { AdminReportsPage } from './pages/admin/AdminReportsPage';
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage';
import { AdminDistrictsPage } from './pages/admin/AdminDistrictsPage';
import { AdminAuditLogsPage } from './pages/admin/AdminAuditLogsPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';

// Public Shell Component wrapping Header, Main Content, and Footer
const PublicLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <PWAInstallBanner />
      <WelcomeModal />
      <TourOverlay />
      <Header />
      <main style={{ flex: 1 }} className={isHome ? 'home-main-flow' : 'page-container'}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// Dynamic router basename helper for seamless GitHub Pages, custom domain, and local hosting
function getRouterBasename(): string {
  if (import.meta.env.BASE_URL && import.meta.env.BASE_URL !== './') {
    return import.meta.env.BASE_URL;
  }
  if (typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')) {
    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      return '/' + segments[0];
    }
  }
  return '/';
}

export const App: React.FC = () => {
  const [districts, setDistricts] = useState<District[]>(FALLBACK_DISTRICTS);
  const [categories, setCategories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');

  useEffect(() => {
    loadInitialData();
  }, [selectedDistrict]);

  const loadInitialData = async () => {
    try {
      const [distList, catList] = await Promise.all([
        api.getDistricts(),
        api.getCategories(),
      ]);
      if (distList.length > 0) setDistricts(distList);
      if (catList.length > 0) setCategories(catList);
    } catch {}
  };

  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter basename={getRouterBasename()}>
          <GuidanceProvider>
            <ScrollToTop />
            <Routes>
          {/* Public Routes with Living Axom Interface Header and Footer */}
          <Route element={<PublicLayout />}>
            <Route
              path="/"
              element={
                <HomePage
                  districts={districts}
                  categories={categories}
                  selectedDistrict={selectedDistrict}
                  onDistrictChange={setSelectedDistrict}
                />
              }
            />
            <Route
              path="/explore"
              element={
                <ExplorePage
                  districts={districts}
                  categories={categories}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route
              path="/businesses"
              element={
                <BusinessesPage
                  districts={districts}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route path="/businesses/:slug" element={<BusinessDetailPage />} />
            <Route
              path="/services"
              element={
                <ServicesPage
                  districts={districts}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route
              path="/events"
              element={
                <EventsPage
                  districts={districts}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/districts" element={<DistrictsPage />} />
            <Route path="/districts/:slug" element={<DistrictDetailPage />} />
            <Route
              path="/tourism"
              element={
                <TourismPage
                  districts={districts}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
            <Route path="/tourism/:slug" element={<DestinationDetailPage />} />
            <Route
              path="/opportunities"
              element={
                <OpportunitiesPage
                  districts={districts}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route
              path="/community"
              element={
                <CommunityPage
                  districts={districts}
                  initialDistrict={selectedDistrict}
                />
              }
            />
            <Route
              path="/submit"
              element={<SubmitPage districts={districts} categories={categories} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/help" element={<HelpCentrePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Administrator Portal Routes */}
          <Route path="/admin/login" element={<Navigate to="/admin" replace />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="destinations" element={<AdminDestinationsPage />} />
            <Route path="listings" element={<AdminListingsPage />} />
            <Route path="events" element={<AdminEventsPage />} />
            <Route path="submissions" element={<AdminSubmissionsPage />} />
            <Route path="directory" element={<DirectoryPage forcedAdmin={true} />} />
            <Route path="reports" element={<AdminReportsPage />} />
            <Route path="districts" element={<AdminDistrictsPage />} />
            <Route path="categories" element={<AdminCategoriesPage />} />
            <Route path="audit-logs" element={<AdminAuditLogsPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>
        </Routes>
          </GuidanceProvider>
      </BrowserRouter>
    </AuthProvider>
  </LanguageProvider>
  );
};
