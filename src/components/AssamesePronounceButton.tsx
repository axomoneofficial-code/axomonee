import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import {
  playAssameseAudio,
  getAssamesePhonetics,
} from '../utils/audioPronounceService';

interface AssamesePronounceButtonProps {
  text: string;
  englishTitle?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  className?: string;
}

export const AssamesePronounceButton: React.FC<AssamesePronounceButtonProps> = ({
  text,
  englishTitle,
  size = 'md',
  showBadge = true,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  if (!text || text.trim() === '') return null;

  const phonetic = getAssamesePhonetics(text, englishTitle);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (isPlaying) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      return;
    }

    setShowTooltip(true);
    playAssameseAudio(
      text,
      englishTitle,
      () => setIsPlaying(true),
      () => {
        setIsPlaying(false);
        setTimeout(() => setShowTooltip(false), 2200);
      }
    );
  };

  const iconSizes = {
    sm: 13,
    md: 15,
    lg: 18,
  };

  return (
    <div
      className={`pronounce-btn-wrapper size-${size} ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => {
        if (!isPlaying) setShowTooltip(false);
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        className={`pronounce-speaker-btn ${isPlaying ? 'is-playing' : ''}`}
        title={`Listen to native Assamese pronunciation of "${text}"`}
        aria-label={`Listen to Assamese pronunciation for ${text}`}
      >
        <Volume2 size={iconSizes[size]} className={`speaker-icon ${isPlaying ? 'animate-wiggle' : ''}`} />
        
        {/* Animated sound ripple rings when playing */}
        {isPlaying && (
          <span className="sound-ripple-wave">
            <span className="wave-ring" />
          </span>
        )}
      </button>

      {/* Phonetic Pronunciation Badge / Tooltip */}
      {showBadge && (showTooltip || isPlaying) && phonetic && (
        <div className={`pronounce-phonetic-badge animate-scaleUp ${isPlaying ? 'active-speaking' : ''}`}>
          <div className="flex items-center gap-1.5">
            <Sparkles size={11} className="text-red-500 shrink-0" />
            <span className="phonetic-text">[{phonetic}]</span>
          </div>
          <div className="phonetic-hint">🗣️ প্ৰাকৃতিক মানৱ কণ্ঠ • Natural Human Pronunciation</div>
        </div>
      )}
    </div>
  );
};
