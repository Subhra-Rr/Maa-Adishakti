import React from 'react';
import { FallbackType, VerificationStatus } from '../types';

interface SacredOmFallbackProps {
  deviName?: string;
  sanskritName?: string;
  fallbackType?: FallbackType | VerificationStatus;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const SacredOmFallback: React.FC<SacredOmFallbackProps> = ({
  deviName,
  sanskritName,
  fallbackType = 'image_unavailable',
  size = 'md',
  className = ''
}) => {
  const getBadgeText = () => {
    switch (fallbackType) {
      case 'gupta_svarupa':
        return { text: 'गुप्त स्वरूप', desc: 'Esoteric / Concealed Form', color: 'border-amber-600/40 text-amber-300 bg-amber-950/40' };
      case 'iconography_varies':
        return { text: 'विविध रूपात्मक', desc: 'Iconography Varies', color: 'border-yellow-600/40 text-yellow-300 bg-yellow-950/40' };
      case 'not_publicly_documented':
        return { text: 'अप्रकट प्रमाण', desc: 'Not Publicly Documented', color: 'border-rose-900/40 text-rose-300 bg-rose-950/40' };
      case 'verified':
        return { text: 'शास्त्रोक्त स्वरूप', desc: 'Verified Iconography', color: 'border-emerald-600/40 text-emerald-300 bg-emerald-950/40' };
      case 'image_unavailable':
      default:
        return { text: 'प्रत्यक्ष चित्र अनुपलब्ध', desc: 'Image Not Publicly Verified', color: 'border-sacred-borderGold text-sacred-ivoryDim bg-sacred-surface/60' };
    }
  };

  const badge = getBadgeText();

  const sizeClasses = {
    sm: 'h-48 text-xs',
    md: 'h-64 sm:h-72 text-sm',
    lg: 'h-80 sm:h-96 text-base',
    hero: 'h-96 sm:h-[480px] text-lg'
  };

  const omSize = {
    sm: 'text-5xl',
    md: 'text-7xl sm:text-8xl',
    lg: 'text-8xl sm:text-9xl',
    hero: 'text-9xl sm:text-[10rem]'
  };

  return (
    <div
      className={`relative w-full ${sizeClasses[size]} overflow-hidden rounded-lg bg-gradient-to-b from-[#140608] via-[#0d090a] to-[#070506] border border-sacred-borderGold/40 flex flex-col items-center justify-center p-6 text-center select-none shadow-sacred-glow ${className}`}
      role="img"
      aria-label={`Sacred representation for ${deviName || 'Devi'}`}
    >
      {/* Background Sacred Geometric Mandala SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] animate-[spin_180s_linear_infinite]">
          {/* Concentric rings and lotus petals */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="#d4af37" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="5 5" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#d4af37" strokeWidth="1.2" />
          <polygon points="200,30 347,285 53,285" fill="none" stroke="#8b1824" strokeWidth="0.75" />
          <polygon points="200,370 53,115 347,115" fill="none" stroke="#d4af37" strokeWidth="0.75" />
          <polygon points="200,60 321,270 79,270" fill="none" stroke="#c27938" strokeWidth="0.5" />
          <polygon points="200,340 79,130 321,130" fill="none" stroke="#c27938" strokeWidth="0.5" />
          {/* Ray accents */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="200"
              y1="40"
              x2="200"
              y2="60"
              stroke="#d4af37"
              strokeWidth="1.5"
              transform={`rotate(${deg} 200 200)`}
            />
          ))}
        </svg>
      </div>

      {/* Subtle radial crimson glow behind Om */}
      <div className="absolute w-44 h-44 rounded-full bg-sacred-crimson/20 blur-3xl pointer-events-none" />
      <div className="absolute w-32 h-32 rounded-full bg-sacred-gold/15 blur-2xl pointer-events-none" />

      {/* Ornamental Frame Corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-sacred-gold/70" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-sacred-gold/70" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-sacred-gold/70" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-sacred-gold/70" />

      {/* Sacred Om Symbol with Golden Shimmer */}
      <div className="relative z-10 flex flex-col items-center">
        <span
          className={`font-devanagari ${omSize[size]} font-bold gold-gradient-text drop-shadow-[0_0_20px_rgba(212,175,55,0.45)] leading-none transition-transform duration-500 hover:scale-105`}
        >
          ॐ
        </span>

        {/* Devi Name if provided */}
        {(sanskritName || deviName) && (
          <div className="mt-3 text-center">
            {sanskritName && (
              <div className="font-devanagari text-sacred-goldLight font-medium text-lg sm:text-xl drop-shadow-sm">
                {sanskritName}
              </div>
            )}
            {deviName && (
              <div className="font-cinzel text-sacred-ivory tracking-widest text-xs sm:text-sm uppercase mt-0.5 opacity-90">
                {deviName}
              </div>
            )}
          </div>
        )}

        {/* Status Badge */}
        <div
          className={`mt-4 inline-flex flex-col items-center px-3 py-1 rounded border ${badge.color} backdrop-blur-sm transition-all`}
        >
          <span className="font-devanagari font-semibold text-xs tracking-wide">
            {badge.text}
          </span>
          <span className="text-[10px] text-sacred-ivoryMuted uppercase tracking-wider mt-0.5">
            {badge.desc}
          </span>
        </div>
      </div>

      {/* Subtle bottom sacred mantra watermark */}
      <div className="absolute bottom-2.5 text-[9px] font-devanagari text-sacred-goldDark/50 tracking-wider pointer-events-none">
        ॥ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ॥
      </div>
    </div>
  );
};
