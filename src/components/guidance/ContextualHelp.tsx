import React, { useState } from 'react';
import { useGuidance } from '../../context/GuidanceContext';
import {
  HelpCircle,
  X,
  Compass,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ContextualHelpTopic {
  title: string;
  title_as?: string;
  summary: string;
  tips: { icon?: string; title: string; desc: string }[];
  verifiedNote?: string;
}

export const CONTEXTUAL_HELP_TOPICS: Record<string, ContextualHelpTopic> = {
  tourism: {
    title: 'How to Explore Assam Tourism & Landmarks',
    title_as: 'পৰ্যটন স্থান আৰু মানচিত্ৰ কেনেকৈ ব্যৱহাৰ কৰিব',
    summary: 'Discover verified natural reserves, tea trails, historical ruins, and religious shrines across all 35 administrative districts.',
    tips: [
      {
        title: 'Interactive 35-District Map',
        desc: 'Click any district polygon on the SVG map to filter destinations instantly to that exact administrative area.'
      },
      {
        title: 'Category Filtering',
        desc: 'Use the top filter pills to narrow down by Heritage, Wildlife & Nature, Temples & Pilgrimage, or Culture.'
      },
      {
        title: 'Turn-by-Turn GPS Directions',
        desc: 'Every destination page features exact geographic coordinates with one-click navigation in Google Maps or OpenStreetMap.'
      }
    ],
    verifiedNote: 'All destinations are cross-verified with Assam Tourism, Archaeological Survey of India (ASI), or official District Administrations.'
  },
  directory: {
    title: 'How to Use the Explore Verified Assam Directory',
    title_as: 'ডাইৰেক্টৰি কেনেকৈ ব্যৱহাৰ কৰিব',
    summary: 'Search and inspect verified institutions across Assam: public universities, engineering and medical colleges, historic schools, and sacred shrines.',
    tips: [
      {
        title: 'District & Category Filter',
        desc: 'Select a district (like Udalguri, Kamrup, Barpeta) and category to view verified schools, colleges, and temples.'
      },
      {
        title: 'Official Portal Links',
        desc: 'Each card includes a verified badge and a direct link to the institution\'s official website or district portal.'
      },
      {
        title: 'View Full Record Details',
        desc: 'Click "View Record" to inspect full history, accreditation status, opening hours, and contact details.'
      }
    ],
    verifiedNote: 'Directory entries are marked with a green "Published" badge and cite official sources like assam.gov.in and bodoland.gov.in.'
  },
  events: {
    title: 'How to Browse Cultural & Community Events',
    title_as: 'সাংস্কৃতিক অনুষ্ঠানৰ দিনপঞ্জী কেনেকৈ চাব',
    summary: 'Stay updated with Raas Mahotsavs, Rongali Bihu celebrations, book fairs, and traditional community gatherings across Assam.',
    tips: [
      {
        title: 'Filter by District',
        desc: 'Select your district from the dropdown to see festivals happening nearby.'
      },
      {
        title: 'Venue & Map Navigation',
        desc: 'Click "Map" or open the event to access exact temple grounds and driving directions.'
      },
      {
        title: 'Submit an Event',
        desc: 'Organizing a cultural event? Click "Submit an Event" to request free community inclusion.'
      }
    ],
    verifiedNote: 'Event dates and organizing committees are confirmed through official press releases and local festival celebration committees.'
  },
  services: {
    title: 'How to Use Local Businesses & Citizen Services',
    title_as: 'স্থানীয় ব্যৱসায় আৰু নাগৰিক সেৱা',
    summary: 'Connect with local artisans, handloom weavers, automotive repair, healthcare providers, and civic utilities.',
    tips: [
      {
        title: 'Verified vs Community Listings',
        desc: 'Verified listings display a green shield badge indicating phone/address confirmation by our team.'
      },
      {
        title: 'Direct Contact',
        desc: 'Call businesses or visit verified websites directly without intermediary fees.'
      },
      {
        title: 'Suggest Your Business',
        desc: 'Support local commerce by listing your shop or artisan enterprise for free.'
      }
    ],
    verifiedNote: 'Community-suggested businesses remain marked as "Community Submitted" until physical or telephonic verification.'
  },
  submit: {
    title: 'Guidelines for Submissions & Suggestions',
    title_as: 'পৰামৰ্শ আৰু তথ্য যোগ কৰাৰ নিয়ম',
    summary: 'Contribute to AXOM ONE! We welcome suggestions for new heritage sites, local businesses, schools, or events.',
    tips: [
      {
        title: 'Provide Accurate Details',
        desc: 'Include the exact locality, district, and verifiable official links or contact details.'
      },
      {
        title: 'Editorial Review Process',
        desc: 'To prevent spam, all submissions are reviewed by the editorial desk before being published to the public portal.'
      },
      {
        title: 'Reporting Inaccuracies',
        desc: 'If you notice outdated timings or changed addresses, please submit a correction via our dedicated /report page.'
      }
    ],
    verifiedNote: 'Your submissions help keep Assam\'s digital ecosystem fresh and accurate for all citizens.'
  }
};

interface ContextualHelpProps {
  topicKey: keyof typeof CONTEXTUAL_HELP_TOPICS;
  label?: string;
  variant?: 'button' | 'pill' | 'icon-only';
}

export const ContextualHelp: React.FC<ContextualHelpProps> = ({
  topicKey,
  label = 'How to use this page',
  variant = 'pill'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { restartTour } = useGuidance();
  const topic = CONTEXTUAL_HELP_TOPICS[topicKey];

  if (!topic) return null;

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`contextual-help-trigger ${variant}`}
        aria-label={`Open help guide: ${topic.title}`}
        title={`Help & Tips: ${topic.title}`}
      >
        <HelpCircle size={15} className="contextual-help-icon" />
        {variant !== 'icon-only' && <span>{label}</span>}
      </button>

      {/* Flyout Modal / Panel */}
      {isOpen && (
        <div
          className="contextual-help-backdrop"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contextual-help-heading"
            className="contextual-help-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gamusa Strip */}
            <div className="gamusa-top-woven-strip" style={{ height: '6px' }} />

            {/* Header */}
            <div className="contextual-help-header">
              <div>
                <span className="contextual-help-badge">Contextual Guide</span>
                <h3 id="contextual-help-heading" className="contextual-help-title">
                  {topic.title}
                </h3>
                {topic.title_as && (
                  <div className="contextual-help-title-as">{topic.title_as}</div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="contextual-help-close"
                aria-label="Close help guide"
              >
                <X size={18} />
              </button>
            </div>

            {/* Summary */}
            <p className="contextual-help-summary">{topic.summary}</p>

            {/* Tips List */}
            <div className="contextual-help-tips-list">
              {topic.tips.map((tip, idx) => (
                <div key={idx} className="contextual-help-tip-item">
                  <div className="contextual-help-tip-number">{idx + 1}</div>
                  <div>
                    <h4 className="contextual-help-tip-title">{tip.title}</h4>
                    <p className="contextual-help-tip-desc">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified vs Community Note */}
            {topic.verifiedNote && (
              <div className="contextual-help-verified-callout">
                <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
                <div>
                  <strong>Verification Assurance:</strong> {topic.verifiedNote}
                </div>
              </div>
            )}

            {/* Footer Actions */}
            <div className="contextual-help-footer">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  restartTour();
                }}
                className="contextual-help-tour-btn"
              >
                <Compass size={14} />
                <span>Restart Website Tour</span>
              </button>

              <Link
                to="/help"
                onClick={() => setIsOpen(false)}
                className="contextual-help-link"
              >
                <span>Help Centre</span>
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Reusable friendly empty state component with guidance retry
export interface GuidanceEmptyStateProps {
  title?: string;
  description?: string;
  onResetFilters?: () => void;
  resetLabel?: string;
  secondaryLink?: { to: string; label: string };
}

export const GuidanceEmptyState: React.FC<GuidanceEmptyStateProps> = ({
  title = 'No Records Found',
  description = 'Try broadening your search term or clearing the active district filter.',
  onResetFilters,
  resetLabel = 'Reset All Filters',
  secondaryLink = { to: '/help', label: 'Need help? Visit Help Centre' }
}) => {
  return (
    <div className="guidance-empty-state">
      <div className="guidance-empty-icon-wrap">
        <AlertCircle size={28} className="text-amber-600" />
      </div>
      <h3 className="guidance-empty-title">{title}</h3>
      <p className="guidance-empty-desc">{description}</p>
      
      <div className="guidance-empty-actions">
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="guidance-empty-reset-btn"
          >
            <RotateCcw size={14} />
            <span>{resetLabel}</span>
          </button>
        )}
        {secondaryLink && (
          <Link to={secondaryLink.to} className="guidance-empty-link">
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </div>
  );
};
