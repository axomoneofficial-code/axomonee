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

        {/* Card Footer Actions: Direct Verified Portal Link */}
        <div className="directory-item-footer">
          {item.website ? (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="directory-btn-website"
              title={`Visit official site of ${item.name}`}
            >
              <Globe size={14} />
              <span>Website</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-xs text-gray-400 italic">No external link</span>
          )}

          <button
            type="button"
            className="directory-btn-details"
            onClick={() => onSelect?.(item)}
          >
            <span>View Record</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};
