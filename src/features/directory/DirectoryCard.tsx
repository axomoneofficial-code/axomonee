import { getAssetUrl } from '../../utils/assetHelper';
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DirectoryItem, DirectoryStatus } from './types';
import { sanitizeExternalUrl, getSafeHostname } from '../../utils/security';
import {
  MapPin,
  ExternalLink,
  ShieldCheck,
  Clock,
  AlertCircle,
  FileText,
  ChevronRight,
  Globe,
  GraduationCap,
  Landmark,
  Church,
  Trees,
  Palette,
  CheckCircle,
} from 'lucide-react';

interface DirectoryCardProps {
  item: DirectoryItem;
  onSelect?: (item: DirectoryItem) => void;
  showAdminControls?: boolean;
  onStatusChange?: (id: string, newStatus: DirectoryStatus) => void;
}

export const DirectoryCard: React.FC<DirectoryCardProps> = ({
  item,
  onSelect,
  showAdminControls = false,
  onStatusChange,
}) => {
  const { language } = useLanguage();

  // Category icon resolver
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap size={15} />;
      case 'heritage':
        return <Landmark size={15} />;
      case 'temples-spiritual':
        return <Church size={15} />;
      case 'nature-wildlife':
        return <Trees size={15} />;
      case 'museums-culture':
        return <Palette size={15} />;
      case 'public-services':
        return <ShieldCheck size={15} />;
      default:
        return <FileText size={15} />;
    }
  };

  // Status badge styling
  const renderStatusBadge = () => {
    switch (item.status) {
      case 'published':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle size={12} />
            Published
          </span>
        );
      case 'draft':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock size={12} />
            Draft
          </span>
        );
      case 'pending_review':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
            <AlertCircle size={12} />
            Review
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            Rejected
          </span>
        );
      case 'archived':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
            Archived
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <article className="directory-item-card">
      {/* Top jacquard Gamusa strip accent */}
      <div className="directory-item-gamusa-accent" />

      {/* Media Header: Authentic Photograph or Dignified Category Banner */}
      <div
        className="directory-item-media"
        style={{
          height: '160px',
          overflow: 'hidden',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #F1F5F9',
          cursor: onSelect ? 'pointer' : 'default',
          position: 'relative',
        }}
        onClick={() => onSelect?.(item)}
      >
        {item.imageUrl ? (
          <img
            src={getAssetUrl(item.imageUrl)}
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
            loading="lazy"
            onError={(e) => {
              // Gracefully switch to fallback illustration if image fails
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}

        <div
          className="directory-item-media-fallback"
          style={{
            display: item.imageUrl ? 'none' : 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%)',
            color: '#64748B',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gamusa-red, #DC2626)',
              marginBottom: '0.45rem',
            }}
          >
            {getCategoryIcon(item.category)}
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155' }}>
            {item.subcategory || item.category}
          </span>
          <span style={{ fontSize: '0.725rem', color: '#64748B' }}>
            {item.locality || item.district}
          </span>
        </div>
      </div>

      <div className="directory-item-body">
        {/* Category & Status Header */}
        <div className="directory-item-header">
          <div className="directory-item-tags">
            <span className="directory-category-badge">
              {getCategoryIcon(item.category)}
              <span>{item.subcategory || item.category}</span>
            </span>
            {item.district && (
              <span className="directory-district-badge">
                <MapPin size={12} />
                <span>{item.district}</span>
              </span>
            )}
          </div>
          <div className="directory-status-wrap">
            {renderStatusBadge()}
          </div>
        </div>

        {/* Title */}
        <h3
          className="directory-item-title"
          onClick={() => onSelect?.(item)}
          title={item.name}
        >
          {language === 'as' && item.name_as ? item.name_as : item.name}
        </h3>
        {language === 'as' && item.name_as && item.name_as !== item.name && (
          <div className="text-xs text-gray-500 font-medium mb-1">{item.name}</div>
        )}

        {/* Locality info */}
        {item.locality && (
          <div className="directory-item-locality">
            <MapPin size={13} className="text-red-600 shrink-0" />
            <span>{item.locality}</span>
          </div>
        )}

        {/* Description snippet */}
        <p className="directory-item-desc">
          {(language === 'as' && item.description_as) ? item.description_as : (language === 'hi' && item.description_hi ? item.description_hi : item.description)}
        </p>

        {/* Verification Source Note */}
        {item.sourceUrl && sanitizeExternalUrl(item.sourceUrl) && (
          <div className="directory-source-note">
            <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
            <span className="truncate">
              Source: <a href={sanitizeExternalUrl(item.sourceUrl)} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700">{item.verifiedFrom || getSafeHostname(item.sourceUrl)}</a>
            </span>
          </div>
        )}

        {/* Admin controls inline if enabled */}
        {showAdminControls && onStatusChange && (
          <div className="directory-admin-inline-bar">
            <span className="text-xs font-semibold text-gray-600">Quick Status:</span>
            <select
              value={item.status}
              onChange={(e) => onStatusChange(item.id, e.target.value as DirectoryStatus)}
              className="directory-admin-status-select"
            >
              <option value="draft">Draft</option>
              <option value="pending_review">Pending Review</option>
              <option value="published">Published</option>
              <option value="rejected">Rejected</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        )}

        {/* Card Footer Actions: Verified Website, Google Search, and View Record */}
        <div className="directory-item-footer">
          <div className="directory-footer-links">
            {item.website && sanitizeExternalUrl(item.website) ? (
              <a
                href={sanitizeExternalUrl(item.website)}
                target="_blank"
                rel="noopener noreferrer"
                className="directory-btn-website"
                title={`Visit official site of ${item.name}`}
              >
                <Globe size={13} />
                <span>Website</span>
                <ExternalLink size={11} />
              </a>
            ) : null}

            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(`${item.name} ${item.locality || item.district || ''} Assam official website`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="directory-btn-google"
              title={`Search ${item.name} on Google`}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
              <ExternalLink size={11} />
            </a>
          </div>

          <button
            type="button"
            className="directory-btn-details"
            onClick={() => onSelect?.(item)}
            title={`View record for ${item.name}`}
          >
            <span>View Record</span>
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
};
