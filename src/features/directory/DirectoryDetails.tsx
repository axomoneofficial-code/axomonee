import { getAssetUrl } from '../../utils/assetHelper';
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DirectoryItem, DirectoryStatus } from './types';
import { sanitizeExternalUrl } from '../../utils/security';
import {
  X,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Globe,
  Clock,
  Phone,
  Ticket,
  Accessibility,
  CheckCircle,
  AlertCircle,
  Copy,
  Check,
  Calendar,
  Building2,
  BookmarkCheck,
  Camera,
} from 'lucide-react';

interface DirectoryDetailsProps {
  item: DirectoryItem | null;
  onClose?: () => void;
  onStatusChange?: (id: string, newStatus: DirectoryStatus) => void;
  showAdminControls?: boolean;
}

export const DirectoryDetails: React.FC<DirectoryDetailsProps> = ({
  item,
  onClose,
  onStatusChange,
  showAdminControls = false,
}) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const googleImageSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${item?.name || ''} ${item?.locality || item?.district || ''} Assam real photos`
  )}`;

  if (!item) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="directory-details-modal-overlay" onClick={onClose}>
      <div
        className="directory-details-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Woven Gamusa Jacquard Banner */}
        <div className="directory-details-gamusa-bar" />

        {/* Modal Close Button */}
        {onClose && (
          <button
            type="button"
            className="directory-details-close-btn"
            onClick={onClose}
            title="Close details"
          >
            <X size={20} />
          </button>
        )}

        {/* Hero Photo if available */}
        {item.imageUrl && (
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', margin: '0.75rem 1.5rem 0', maxHeight: '280px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
            <img
              src={getAssetUrl(item.imageUrl)}
              alt={item.name}
              style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('hero-clean-hd.jpg')) {
                  target.src = '/images/hero-clean-hd.jpg';
                }
              }}
            />
          </div>
        )}

        <div className="directory-details-inner">
          {/* Category & Status Header */}
          <div className="directory-details-meta-header">
            <div className="flex flex-wrap items-center gap-2">
              <span className="directory-category-badge text-sm">
                <Building2 size={15} />
                <span>{item.category.toUpperCase()}</span>
              </span>
              <span className="directory-subcategory-badge">
                {item.subcategory}
              </span>
              <span className="directory-district-badge">
                <MapPin size={13} />
                <span>{item.district}</span>
              </span>
            </div>

            <div className="directory-status-wrap">
              {item.status === 'published' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle size={13} />
                  Published & Verified
                </span>
              )}
              {item.status === 'draft' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Clock size={13} />
                  Draft Record
                </span>
              )}
              {item.status === 'pending_review' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
                  <AlertCircle size={13} />
                  Under Verification
                </span>
              )}
            </div>
          </div>

          {/* Record Title */}
          <h2 className="directory-details-title">
            {language === 'as' && item.name_as ? item.name_as : item.name}
          </h2>
          {language === 'as' && item.name_as && item.name_as !== item.name && (
            <div className="text-sm text-gray-500 font-medium mb-2">{item.name}</div>
          )}

          {/* Locality Address */}
          {item.locality && (
            <div className="directory-details-location">
              <MapPin size={16} className="text-red-600 shrink-0 mt-0.5" />
              <span>
                {item.locality}, {item.district}, Assam, India
              </span>
            </div>
          )}

          {/* Verification Banner (As instructed in starter pack README) */}
          <div className="directory-verification-box">
            <div className="directory-verification-box-header">
              <ShieldCheck size={18} className="text-emerald-700 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-emerald-950">
                  Source & Official Verification Data
                </h4>
                <p className="text-xs text-emerald-800">
                  {item.verifiedFrom || 'Official Government Category Directory or Statutory Board'}
                </p>
              </div>
            </div>

            {item.sourceUrl && sanitizeExternalUrl(item.sourceUrl) && (
              <div className="directory-source-url-row">
                <span className="text-xs font-semibold text-gray-700">Official Source Document:</span>
                <a
                  href={sanitizeExternalUrl(item.sourceUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directory-source-link"
                >
                  <span className="truncate">{item.sourceUrl}</span>
                  <ExternalLink size={13} className="shrink-0" />
                </a>
              </div>
            )}

            <div className="directory-verification-footer">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar size={13} />
                Last Verified: {item.lastVerifiedAt || 'Pending editorial review'}
              </span>
              <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                <BookmarkCheck size={13} />
                Official Public Record
              </span>
            </div>
          </div>

          {/* Main Description */}
          <div className="directory-details-section">
            <h3 className="directory-section-heading">
              {language === 'as' ? 'এই প্ৰতিষ্ঠান / স্থানৰ বিষয়ে' : 'About this Institution / Landmark'}
            </h3>
            <p className="directory-details-description">
              {(language === 'as' && item.description_as) ? item.description_as : (language === 'hi' && item.description_hi ? item.description_hi : item.description)}
            </p>
          </div>

          {/* Detailed Metadata Grid */}
          <div className="directory-metadata-grid">
            {/* Website */}
            {item.website && sanitizeExternalUrl(item.website) && (
              <div className="directory-meta-card">
                <Globe size={18} className="text-red-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Official Portal</div>
                  <a
                    href={sanitizeExternalUrl(item.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-700 hover:underline flex items-center gap-1 truncate"
                  >
                    <span>{item.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </div>
              </div>
            )}

            {/* Real Pictures on Google Images */}
            <div className="directory-meta-card">
              <Camera size={18} className="text-rose-600 shrink-0" />
              <div>
                <div className="text-xs text-gray-500 font-medium">Authentic Campus & Landmark Photos</div>
                <a
                  href={googleImageSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-rose-700 hover:text-rose-800 hover:underline flex items-center gap-1 truncate"
                >
                  <span>See All Pictures on Google</span>
                  <ExternalLink size={12} className="shrink-0" />
                </a>
              </div>
            </div>

            {/* Google Search & Knowledge Card */}
            <div className="directory-meta-card">
              <svg className="shrink-0" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div>
                <div className="text-xs text-gray-500 font-medium">Google Profile & Reviews</div>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(`${item.name} ${item.locality || item.district || ''} Assam official website`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-blue-700 hover:underline flex items-center gap-1 truncate"
                >
                  <span>Search on Google</span>
                  <ExternalLink size={12} className="shrink-0" />
                </a>
              </div>
            </div>

            {/* Phone */}
            {item.phone && (
              <div className="directory-meta-card">
                <Phone size={18} className="text-red-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Contact Phone</div>
                  <div className="text-sm font-semibold text-gray-900">{item.phone}</div>
                </div>
              </div>
            )}

            {/* Opening Hours */}
            {item.openingHours && (
              <div className="directory-meta-card">
                <Clock size={18} className="text-red-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Timings / Visiting Hours</div>
                  <div className="text-sm font-semibold text-gray-900">{item.openingHours}</div>
                </div>
              </div>
            )}

            {/* Entry Fee */}
            {item.entryFee && (
              <div className="directory-meta-card">
                <Ticket size={18} className="text-red-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Entry / Admission</div>
                  <div className="text-sm font-semibold text-gray-900">{item.entryFee}</div>
                </div>
              </div>
            )}

            {/* Accessibility */}
            {item.accessibility && (
              <div className="directory-meta-card">
                <Accessibility size={18} className="text-red-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Accessibility</div>
                  <div className="text-sm font-semibold text-gray-900">{item.accessibility}</div>
                </div>
              </div>
            )}

            {/* Languages */}
            {item.language && item.language.length > 0 && (
              <div className="directory-meta-card">
                <Globe size={18} className="text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 font-medium">Language Support</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.language.map((l) => (l === 'en' ? 'English' : l === 'as' ? 'অসমীয়া (Assamese)' : l)).join(', ')}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Admin Moderation Bar */}
          {showAdminControls && onStatusChange && (
            <div className="directory-details-admin-bar">
              <span className="text-sm font-bold text-gray-800">Editorial Action:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  onClick={() => onStatusChange(item.id, 'published')}
                >
                  Publish Record
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 transition"
                  onClick={() => onStatusChange(item.id, 'draft')}
                >
                  Mark as Draft
                </button>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 text-white hover:bg-sky-700 transition"
                  onClick={() => onStatusChange(item.id, 'pending_review')}
                >
                  Send for Review
                </button>
              </div>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="directory-details-modal-footer">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="directory-action-btn-outline"
                onClick={handleCopyLink}
              >
                {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(`${item.name} ${item.locality || item.district || ''} Assam official website`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="directory-action-btn-google"
                title={`Search ${item.name} on Google`}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={googleImageSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="directory-action-btn-photos"
                title={`Search real photos of ${item.name} on Google Images`}
              >
                <Camera size={14} className="text-rose-600" />
                <span>See All Pictures</span>
                <ExternalLink size={12} />
              </a>

              {item.sourceUrl && sanitizeExternalUrl(item.sourceUrl) && (
                <a
                  href={sanitizeExternalUrl(item.sourceUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directory-action-btn-secondary"
                >
                  <ShieldCheck size={16} />
                  <span>Verify Source</span>
                </a>
              )}

              {item.website && sanitizeExternalUrl(item.website) && (
                <a
                  href={sanitizeExternalUrl(item.website)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directory-action-btn-primary"
                >
                  <span>Visit Portal</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
