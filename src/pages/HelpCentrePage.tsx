import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGuidance } from '../context/GuidanceContext';
import {
  HelpCircle,
  Compass,
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  Mail,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface HelpSection {
  id: string;
  category: 'general' | 'exploration' | 'contributions' | 'privacy';
  title: string;
  title_as?: string;
  summary: string;
  content: React.ReactNode;
}

export const HelpCentrePage: React.FC = () => {
  const { restartTour } = useGuidance();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedSection, setExpandedSection] = useState<string | null>('what-is-axom-one');

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  const helpSections: HelpSection[] = [
    {
      id: 'what-is-axom-one',
      category: 'general',
      title: 'What is AXOM ONE?',
      title_as: 'AXOM ONE কি?',
      summary: 'AXOM ONE is a community-driven digital discovery platform for the state of Assam.',
      content: (
        <div className="help-answer-body">
          <p>
            <strong>AXOM ONE</strong> (<em>Discover Local. Connect Assam. / আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম</em>) is an authentic, civic-focused open web platform built to celebrate the heritage, geography, and local economy of Assam.
          </p>
          <p>
            It unifies comprehensive information about Assam's <strong>35 administrative districts</strong>, <strong>80+ verified nature and cultural destinations</strong>, <strong>240+ institutions</strong> (universities, colleges, historic schools, and sacred shrines), and grassroots community events under a single fast, privacy-respecting portal.
          </p>
          <div className="help-callout-box">
            <Sparkles size={16} className="text-amber-600 shrink-0" />
            <span>
              <strong>Zero Commercial Paywalls:</strong> AXOM ONE is completely free for all citizens, travelers, and local business owners. No account is required to browse, explore, or access directions.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'how-to-explore-assam',
      category: 'exploration',
      title: 'How to explore Assam & use the interactive 35-district map',
      title_as: 'অসম ভ্ৰমণ আৰু ৩৫খন জিলাৰ মানচিত্ৰ কেনেকৈ ব্যৱহাৰ কৰিব',
      summary: 'Learn how to navigate destinations across Brahmaputra and Barak valleys.',
      content: (
        <div className="help-answer-body">
          <p>
            The <Link to="/tourism" className="help-inline-link">Explore Assam (পৰ্যটন)</Link> page provides multiple intuitive discovery methods:
          </p>
          <ol className="help-numbered-list">
            <li>
              <strong>Contiguous 35-District SVG Map:</strong> Click on any district polygon (e.g. Kamrup Metropolitan, Majuli, Udalguri, Sivasagar) to filter records instantly to that specific geographical territory.
            </li>
            <li>
              <strong>Theme Filters:</strong> Use the top category buttons to filter by <em>Heritage</em>, <em>Nature & Wildlife</em>, <em>Temples & Pilgrimage</em>, or <em>Culture & Living Heritage</em>.
            </li>
            <li>
              <strong>Keyword Search:</strong> Type in any site name, river, hill, or national park name into the search bar for instant filtering.
            </li>
            <li>
              <strong>Quick-Select Locations Strip:</strong> Scroll through the alphabetical location chips below the map to jump directly to any scenic spot in Assam.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: 'district-information',
      category: 'exploration',
      title: 'How to find comprehensive district information',
      title_as: 'জিলাসমূহৰ সম্পূৰ্ণ তথ্য কেনেকৈ বিচাৰি পাব',
      summary: 'Browse administrative facts, headquarters, geography, and cultural identity.',
      content: (
        <div className="help-answer-body">
          <p>
            Visit <Link to="/districts" className="help-inline-link">Districts of Assam</Link> to browse an exhaustive roster of all 35 official administrative districts.
          </p>
          <p>
            Each district card provides:
          </p>
          <ul className="help-bullet-list">
            <li><strong>Official Headquarters:</strong> The administrative seat of the Deputy Commissioner / Autonomous Council.</li>
            <li><strong>Geographic Coordinates:</strong> Latitude and longitude of the district center.</li>
            <li><strong>Regional Highlights:</strong> Prominent rivers, tea gardens, wildlife corridors, and economic hubs.</li>
            <li><strong>Direct Portals:</strong> Authenticated links to official district websites (e.g. <code>https://udalguri.assam.gov.in</code>, <code>https://kamrup.assam.gov.in</code>).</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'destination-details-navigation',
      category: 'exploration',
      title: 'How to open destination details & use turn-by-turn directions',
      title_as: 'স্থানৰ তথ্য আৰু নেভিগেচন নিৰ্দেশনা',
      summary: 'Every destination features exact geo-coordinates, road access, and verified sources.',
      content: (
        <div className="help-answer-body">
          <p>
            When you click any destination card (such as <em>Majuli Island Sattras</em>, <em>Charaideo Moidams</em>, or <em>Bhairabkunda Confluence</em>), you open a detailed dossier:
          </p>
          <ul className="help-bullet-list">
            <li>
              <strong>Exact GPS Directions:</strong> Click <strong>Google Maps</strong> or <strong>OpenStreetMap</strong> to open GPS driving directions directly on your smartphone or vehicle navigation system.
            </li>
            <li>
              <strong>Authentic High-Resolution Photos:</strong> Real, non-copyrighted historical photography verified from public records and Wikimedia Commons.
            </li>
            <li>
              <strong>Travel Advisory:</strong> Best season to visit, entry fees, visiting hours, and proximity to airports and railway stations.
            </li>
            <li>
              <strong>Source Citations:</strong> Citations from the Archaeological Survey of India (ASI), Directorate of Tourism Assam, and respective District Administrations.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'saving-sharing-places',
      category: 'exploration',
      title: 'How to save places & share destinations with friends',
      title_as: 'প্ৰিয় স্থান সংৰক্ষণ আৰু বন্ধু-বৰ্গৰ লগত শ্বেয়াৰ কৰা',
      summary: 'Easily bookmark spots on your browser and share direct links with fellow travelers.',
      content: (
        <div className="help-answer-body">
          <p>
            AXOM ONE keeps your browsing fast and private without requiring you to register a personal account:
          </p>
          <ul className="help-bullet-list">
            <li>
              <strong>Browser Bookmarks:</strong> Simply press <code>Ctrl + D</code> (or <code>Cmd + D</code> on Mac) to bookmark any destination or district page directly to your browser's favorites.
            </li>
            <li>
              <strong>Share Button:</strong> Every destination and event details page features a <strong>Share</strong> button. Tapping it copies the clean, canonical direct URL to your clipboard for easy messaging on WhatsApp, Telegram, or email.
            </li>
            <li>
              <strong>Copy Coordinates:</strong> In the map section, click <strong>Copy Coordinates</strong> to copy exact latitude/longitude coordinates directly into your offline GPS mapping tool.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'how-to-submit-suggestions',
      category: 'contributions',
      title: 'How to submit corrections or suggest a new place',
      title_as: 'নতুন স্থানৰ পৰামৰ্শ বা ভুল সংশোধন কেনেকৈ জনাব',
      summary: 'Contribute community knowledge or notify editors of updated hours or locations.',
      content: (
        <div className="help-answer-body">
          <p>
            AXOM ONE thrives on citizen participation. You can contribute in two simple ways:
          </p>
          <ol className="help-numbered-list">
            <li>
              <strong>Suggest a Place or Business:</strong> Go to the <Link to="/submit" className="help-inline-link">Submit Listing</Link> page. Fill in the title, category, district, address, and any official website or reference you have.
            </li>
            <li>
              <strong>Report Inaccuracies:</strong> If you find an outdated telephone number, changed temple visiting hours, or wrong location, click <strong>Report</strong> in the footer or visit <Link to="/report" className="help-inline-link">Report an Inaccuracy</Link>.
            </li>
          </ol>
          <div className="help-callout-box">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>
              <strong>Editorial Review:</strong> Every citizen submission is reviewed by the editorial desk before publication to protect visitors from spam and inaccurate travel advice.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'how-information-is-verified',
      category: 'contributions',
      title: 'How information is verified on AXOM ONE',
      title_as: 'AXOM ONE-ত তথ্যসমূহ কেনেকৈ সত্যতা নিৰূপণ কৰা হয়',
      summary: 'Learn about our factual standards, government citations, and public registries.',
      content: (
        <div className="help-answer-body">
          <p>
            Information published across AXOM ONE is cross-referenced through authenticated state and national public records:
          </p>
          <ul className="help-bullet-list">
            <li><strong>Official Gazetteers & District Portals:</strong> Verified through <code>assam.gov.in</code> and <code>bodoland.gov.in</code>.</li>
            <li><strong>Tourism & Forests:</strong> Sourced from Assam Tourism Development Corporation (ATDC), Bodoland Tourism, and Assam Forest Department.</li>
            <li><strong>Archaeological Monuments:</strong> Sourced from the Archaeological Survey of India (ASI) Guwahati Circle and Directorate of Archaeology Assam.</li>
            <li><strong>Higher Education & Schools:</strong> Verified against Ministry of Education, CBSE, and State Board affiliations.</li>
          </ul>
          <p>
            Unverified community submissions are clearly badged as <em>"Pending Review"</em> or <em>"Community Contributed"</em> so visitors always know the authority level of what they are viewing.
          </p>
        </div>
      ),
    },
    {
      id: 'privacy-data-use',
      category: 'privacy',
      title: 'Privacy and data-use explanations',
      title_as: 'গোপনীয়তা আৰু তথ্যৰ সুৰক্ষা',
      summary: 'Complete client-side privacy. Zero ad trackers, zero personal profiling.',
      content: (
        <div className="help-answer-body">
          <p>
            AXOM ONE is designed with a strict <strong>Privacy-by-Default</strong> philosophy:
          </p>
          <ul className="help-bullet-list">
            <li><strong>Zero Tracking Cookies:</strong> We do not track you across other websites or sell your browsing history.</li>
            <li><strong>Local Browser Storage:</strong> Your preferences (selected language, welcome guide status, and tour completion) are stored exclusively in your own browser's <code>localStorage</code>. They are never sent to external servers.</li>
            <li><strong>No Compulsory Sign-In:</strong> Every public listing, map, festival date, and destination is 100% accessible without creating an account or providing an email address.</li>
            <li><strong>Minimal Form Data:</strong> When submitting suggestions, we request only the necessary information to verify the entity.</li>
          </ul>
          <p>
            For complete legal specifics, please consult our <Link to="/privacy" className="help-inline-link">Privacy Policy</Link> and <Link to="/terms" className="help-inline-link">Terms of Use</Link>.
          </p>
        </div>
      ),
    },
    {
      id: 'contact-support',
      category: 'general',
      title: 'Contact and support information',
      title_as: 'যোগাযোগ আৰু সহায়',
      summary: 'How to reach the editorial team for general questions and feedback.',
      content: (
        <div className="help-answer-body">
          <p>
            Have feedback, an institutional correction, or wish to contribute cultural media? Reach out to us through our official channels:
          </p>
          <ul className="help-bullet-list">
            <li>
              <strong>Online Contact Form:</strong> Visit our dedicated <Link to="/contact" className="help-inline-link">Contact & Feedback Desk</Link> to submit inquiries directly.
            </li>
            <li>
              <strong>General Corrections Portal:</strong> Submit factual updates directly via <Link to="/report" className="help-inline-link">Report Correction</Link>.
            </li>
            <li>
              <strong>Community Submissions:</strong> Post newly established landmarks or festivals at <Link to="/submit" className="help-inline-link">Submit a Listing</Link>.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  // Filter sections by search query and category
  const filteredSections = useMemo(() => {
    return helpSections.filter((section) => {
      const matchesCategory = activeCategory === 'all' || section.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        section.title.toLowerCase().includes(q) ||
        section.summary.toLowerCase().includes(q) ||
        (section.title_as && section.title_as.includes(q))
      );
    });
  }, [helpSections, activeCategory, searchQuery]);

  return (
    <div className="help-page-container">
      {/* Top Gamusa Woven Silk Accent Bar */}
      <div className="gamusa-top-woven-strip" style={{ height: '8px' }} />

      {/* Hero Header */}
      <header className="help-hero">
        <div className="help-hero-badge">
          <HelpCircle size={14} className="text-red-600" />
          <span>AXOM ONE Help Centre • সহায় কেন্দ্ৰ</span>
        </div>

        <h1 className="help-hero-title">
          How can we help you explore Assam?
        </h1>

        <div className="help-hero-tagline">
          আমাৰ অসম | আপোনাৰ প্লেটফৰ্ম • Discover Local. Connect Assam.
        </div>

        <p className="help-hero-desc">
          Find clear answers, learn how to navigate 35 administrative districts, discover verified temples and natural reserves, and learn how to contribute.
        </p>

        {/* Primary Action: Restart Interactive Website Tour */}
        <div className="help-hero-actions">
          <button
            type="button"
            onClick={restartTour}
            className="help-hero-tour-btn"
          >
            <Compass size={18} />
            <span>Launch Interactive Website Tour</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="help-search-box">
          <Search size={18} className="help-search-icon" />
          <input
            type="text"
            className="help-search-input"
            placeholder="Search guides (e.g. interactive map, districts, verified sources, submissions)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search Help Centre articles"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="help-search-clear"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>
      </header>

      {/* Category Tabs */}
      <nav className="help-category-tabs" aria-label="Help categories">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`help-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
        >
          All Topics ({helpSections.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('general')}
          className={`help-tab-btn ${activeCategory === 'general' ? 'active' : ''}`}
        >
          General & Identity
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('exploration')}
          className={`help-tab-btn ${activeCategory === 'exploration' ? 'active' : ''}`}
        >
          Maps & Exploration
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('contributions')}
          className={`help-tab-btn ${activeCategory === 'contributions' ? 'active' : ''}`}
        >
          Submissions & Verification
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('privacy')}
          className={`help-tab-btn ${activeCategory === 'privacy' ? 'active' : ''}`}
        >
          Privacy & Data
        </button>
      </nav>

      {/* Accordion List */}
      <main className="help-content-flow">
        {filteredSections.length === 0 ? (
          <div className="help-empty-results">
            <HelpCircle size={36} className="text-gray-400 mb-2" />
            <h3>No help topics found for "{searchQuery}"</h3>
            <p>Try searching with broader terms like "map", "districts", "sources", or "submit".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-outline"
              style={{ marginTop: '1rem' }}
            >
              View All Topics
            </button>
          </div>
        ) : (
          <div className="help-accordion-list">
            {filteredSections.map((section) => {
              const isExpanded = expandedSection === section.id;
              return (
                <article
                  key={section.id}
                  className={`help-accordion-item ${isExpanded ? 'expanded' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="help-accordion-trigger"
                    aria-expanded={isExpanded}
                    aria-controls={`help-body-${section.id}`}
                  >
                    <div className="help-trigger-text">
                      <h3 className="help-accordion-title">
                        {section.title}
                      </h3>
                      {section.title_as && (
                        <div className="help-accordion-title-as">
                          {section.title_as}
                        </div>
                      )}
                      <p className="help-accordion-summary">
                        {section.summary}
                      </p>
                    </div>

                    <div className="help-trigger-icon">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div
                      id={`help-body-${section.id}`}
                      className="help-accordion-body"
                    >
                      {section.content}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Bottom Assistance Banner */}
      <footer className="help-bottom-banner">
        <div className="help-bottom-content">
          <div>
            <h3 className="help-bottom-title">Still have questions or noticed an error?</h3>
            <p className="help-bottom-desc">
              Our editorial team is dedicated to keeping Assam's heritage, roads, and civic entries authentic and up to date.
            </p>
          </div>
          <div className="help-bottom-links">
            <Link to="/contact" className="help-bottom-btn primary">
              <Mail size={16} /> Contact Editorial Desk
            </Link>
            <Link to="/report" className="help-bottom-btn outline">
              <FileText size={16} /> Report an Inaccuracy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
