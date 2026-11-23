import React, { useState } from 'react';
import { SacredOmFallback } from './SacredOmFallback';
import { FallbackType, VerificationStatus } from '../types';

interface DeviImageProps {
  imagePath?: string;
  altText: string;
  deviName?: string;
  sanskritName?: string;
  fallbackType?: FallbackType | VerificationStatus;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  attribution?: string;
  source?: string;
}

export const DeviImage: React.FC<DeviImageProps> = ({
  imagePath,
  altText,
  deviName,
  sanskritName,
  fallbackType = 'image_unavailable',
  size = 'md',
  className = '',
  attribution,
  source
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If no image path is provided or an error occurred loading it, render SacredOmFallback
  if (!imagePath || hasError) {
    return (
      <SacredOmFallback
        deviName={deviName}
        sanskritName={sanskritName}
        fallbackType={fallbackType}
        size={size}
        className={className}
      />
    );
  }

  const heightClasses = {
    sm: 'h-48 sm:h-52',
    md: 'h-64 sm:h-72',
    lg: 'h-80 sm:h-96 md:h-[430px]',
    hero: 'h-96 sm:h-[480px]'
  };

  return (
    <div className={`relative w-full ${heightClasses[size]} overflow-hidden rounded-lg bg-sacred-surface border border-sacred-borderGold/40 group ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-sacred-dark/80">
          <div className="w-8 h-8 rounded-full border-2 border-sacred-gold border-t-transparent animate-spin" />
        </div>
      )}
      <img
        src={imagePath}
        alt={altText}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Decorative inner golden border */}
      <div className="absolute inset-0 pointer-events-none border border-sacred-gold/30 rounded-lg" />
      
      {/* Attribution / Source overlay if available */}
      {(attribution || source) && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-sacred-dark/95 via-sacred-dark/60 to-transparent p-2.5 text-[11px] text-sacred-ivoryDim flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span>{attribution || 'Traditional Archive'}</span>
          <span className="text-sacred-goldLight font-medium">{source}</span>
        </div>
      )}
    </div>
  );
};
