import { getAssetUrl } from '../utils/assetHelper';
import React, { useState, useMemo } from 'react';

interface DestinationImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  attribution?: string;
  showAttribution?: boolean;
}

// Compute deterministic theme and motif so no two fallbacks look identical
function getDestinationVisualTheme(alt: string, category: string = 'tourism') {
  const text = (alt + ' ' + category).toLowerCase();
  
  // Categorical motif and color profiles
  if (text.includes('temple') || text.includes('devalaya') || text.includes('satra') || text.includes('mandir') || text.includes('religious') || text.includes('doul')) {
    return {
      gradient: 'linear-gradient(135deg, #7C2D12 0%, #B45309 50%, #9A3412 100%)',
      emoji: '🛕',
      tag: 'Sacred Heritage',
      textColor: '#FEF3C7',
      subColor: '#FDE68A',
    };
  }
  if (text.includes('tea') || text.includes('estate') || text.includes('garden') || text.includes('plantation')) {
    return {
      gradient: 'linear-gradient(135deg, #064E3B 0%, #15803D 50%, #166534 100%)',
      emoji: '🍃',
      tag: 'Assam Tea Country',
      textColor: '#ECFDF5',
      subColor: '#A7F3D0',
    };
  }
  if (text.includes('wildlife') || text.includes('sanctuary') || text.includes('national park') || text.includes('rhino') || text.includes('forest')) {
    return {
      gradient: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #065F46 100%)',
      emoji: '🦏',
      tag: 'Wildlife & Nature',
      textColor: '#F0FDF4',
      subColor: '#BBF7D0',
    };
  }
  if (text.includes('waterfall') || text.includes('falls') || text.includes('cascade')) {
    return {
      gradient: 'linear-gradient(135deg, #0F172A 0%, #0369A1 50%, #0891B2 100%)',
      emoji: '🌊',
      tag: 'Scenic Cascades',
      textColor: '#F0F9FF',
      subColor: '#BAE6FD',
    };
  }
  if (text.includes('river') || text.includes('lake') || text.includes('beel') || text.includes('brahmaputra') || text.includes('wetland') || text.includes('island')) {
    return {
      gradient: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 50%, #0369A1 100%)',
      emoji: '🛶',
      tag: 'River & Waters',
      textColor: '#F0F9FF',
      subColor: '#BAE6FD',
    };
  }
  if (text.includes('craft') || text.includes('handloom') || text.includes('silk') || text.includes('sualkuchi') || text.includes('bell metal') || text.includes('sarthebari')) {
    return {
      gradient: 'linear-gradient(135deg, #581C87 0%, #7E22CE 50%, #831843 100%)',
      emoji: '🏺',
      tag: 'Indigenous Craft',
      textColor: '#FAF5FF',
      subColor: '#E9D5FF',
    };
  }
  if (text.includes('fort') || text.includes('ahom') || text.includes('maidam') || text.includes('monument') || text.includes('history') || text.includes('palace')) {
    return {
      gradient: 'linear-gradient(135deg, #451A03 0%, #78350F 50%, #92400E 100%)',
      emoji: '🏰',
      tag: 'Historic Monument',
      textColor: '#FEF3C7',
      subColor: '#FDE68A',
    };
  }
  if (text.includes('bihu') || text.includes('festival') || text.includes('dance') || text.includes('culture')) {
    return {
      gradient: 'linear-gradient(135deg, #991B1B 0%, #DC2626 50%, #B91C1C 100%)',
      emoji: '🥁',
      tag: 'Cultural Festival',
      textColor: '#FEF2F2',
      subColor: '#FECACA',
    };
  }

  // Deterministic dynamic hue derivation for completely unique palettes
  const hash = Array.from(alt).reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 360, 0);
  return {
    gradient: `linear-gradient(135deg, hsl(${hash}, 70%, 18%) 0%, hsl(${(hash + 35) % 360}, 65%, 28%) 100%)`,
    emoji: '✨',
    tag: category ? category.replace(/-/g, ' ').toUpperCase() : 'ASSAM HERITAGE',
    textColor: '#FFFFFF',
    subColor: '#E2E8F0',
  };
}

export const DestinationImage: React.FC<DestinationImageProps> = ({
  src,
  alt,
  className = '',
  category = 'tourism',
  attribution,
  showAttribution = false,
}) => {
  const [errorStep, setErrorStep] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const visualTheme = useMemo(() => getDestinationVisualTheme(alt, category), [alt, category]);

  // Direct source first, fallback to proxy for external wikimedia if needed
  const getOptimizedSrc = (originalUrl: string, step: number): string => {
    if (!originalUrl || originalUrl.trim() === '') return '';
    if (step === 0) {
      return getAssetUrl(originalUrl);
    }
    if (step === 1) {
      if (originalUrl.includes('upload.wikimedia.org')) {
        return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl)}&w=800&fit=cover&output=webp`;
      }
      return '';
    }
    return '';
  };

  const currentSrc = getOptimizedSrc(src, errorStep);

  const handleError = () => {
    setErrorStep((prev) => prev + 1);
  };

  // If image fails or does not exist, render a distinct, authentic cultural card visual
  if (errorStep >= 2 || !currentSrc) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center p-4 text-center select-none`}
        data-category={category}
        style={{
          background: visualTheme.gradient,
          color: visualTheme.textColor,
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          minHeight: '180px',
        }}
      >
        {/* Authentic Assamese Gamusa woven border along the top edge */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundImage: `url('${getAssetUrl('/images/gamusa-pattern.png')}')`,
            backgroundSize: 'auto 4px',
            backgroundRepeat: 'repeat-x',
          }}
        />

        {/* Category Pill */}
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: visualTheme.subColor,
            background: 'rgba(0, 0, 0, 0.25)',
            padding: '2px 8px',
            borderRadius: '999px',
            marginBottom: '0.4rem',
          }}
        >
          {visualTheme.tag}
        </span>

        {/* Distinctive Cultural Motif */}
        <span style={{ fontSize: '2.5rem', marginBottom: '0.35rem', lineHeight: 1 }}>
          {visualTheme.emoji}
        </span>

        {/* Destination Name */}
        <h4
          style={{
            fontSize: '0.95rem',
            fontWeight: 800,
            color: visualTheme.textColor,
            margin: '0 0 0.25rem 0',
            maxWidth: '92%',
            lineHeight: 1.25,
            textShadow: '0 1px 3px rgba(0,0,0,0.4)',
          }}
        >
          {alt}
        </h4>

        <span style={{ fontSize: '0.7rem', color: visualTheme.subColor, opacity: 0.9 }}>
          অসমৰ গৌৰৱ • Assam Verified Heritage
        </span>

        {showAttribution && attribution && (
          <div className="tourism-card-attribution">{attribution}</div>
        )}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #E5E7EB 0%, #F3F4F6 50%, #E5E7EB 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.4s ease',
        }}
      />
      {attribution && showAttribution && (
        <div className="tourism-card-attribution" title={attribution}>
          {attribution}
        </div>
      )}
    </div>
  );
};

