import React, { useState, useEffect } from 'react';
import { SacredOmFallback } from './SacredOmFallback';
import { FallbackType, VerificationStatus } from '../types';

export const DEVI_IMAGE_REGISTRY: Record<string, string> = {
  // Das Mahavidyas
  'kali': '/images/devis/kali.jpg',
  'tara': '/images/devis/tara.jpg',
  'tripura-sundari': '/images/devis/tripura-sundari.jpg',
  'bhuvaneshvari': '/images/devis/bhuvaneshvari.jpg',
  'chhinnamasta': '/images/devis/chhinnamasta.jpg',
  'bhairavi': '/images/devis/bhairavi.jpg',
  'dhumavati': '/images/devis/dhumavati.jpg',
  'bagalamukhi': '/images/devis/bagalamukhi.jpg',
  'matangi': '/images/devis/matangi.jpg',
  'kamalatmika': '/images/devis/kamala.jpg',
  'kamala': '/images/devis/kamala.jpg',

  // Nava Durga
  'shailaputri': '/images/devis/shailaputri.jpg',
  'brahmacharini': '/images/devis/brahmacharini.jpg',
  'chandraghanta': '/images/devis/chandraghanta.jpg',
  'kushmanda': '/images/devis/kushmanda.jpg',
  'skandamata': '/images/devis/skandamata.jpg',
  'katyayani': '/images/devis/katyayani.jpg',
  'kalaratri': '/images/devis/kalaratri.jpg',
  'mahagauri': '/images/devis/mahagauri.jpg',
  'siddhidatri': '/images/devis/siddhidatri.jpg',

  // Tridevi
  'mahasaraswati': '/images/devis/mahasaraswati.jpg',
  'mahalakshmi': '/images/devis/mahalakshmi.jpg',
  'mahakali': '/images/devis/mahakali.jpg',

  // Pancha Prakriti
  'durga-prakriti': '/images/devis/durga.jpg',
  'durga': '/images/devis/durga.jpg',
  'radha': '/images/devis/radha.jpg',
  'lakshmi-prakriti': '/images/devis/lakshmi.jpg',
  'lakshmi': '/images/devis/lakshmi.jpg',
  'saraswati-prakriti': '/images/devis/saraswati.jpg',
  'saraswati': '/images/devis/saraswati.jpg',
  'savitri-prakriti': '/images/devis/savitri.jpg',
  'savitri': '/images/devis/savitri.jpg',
  'gayatri': '/images/devis/savitri.jpg',

  // Ashta Matrikas
  'brahmani': '/images/devis/brahmani.jpg',
  'maheshwari': '/images/devis/maheshwari.jpg',
  'kaumari': '/images/devis/kaumari.jpg',
  'vaishnavi': '/images/devis/vaishnavi.jpg',
  'varahi': '/images/devis/varahi.jpg',
  'indrani': '/images/devis/indrani.jpg',
  'chamunda': '/images/devis/chamunda.jpg',
  'narasimhi': '/images/devis/narasimhi.jpg',

  // Pratyangira
  'pratyangira': '/images/devis/pratyangira.jpg',
  'pratyangira-devi': '/images/devis/pratyangira.jpg',

  // Odisha Shakta Parampara
  'vimala-puri': '/images/devis/vimala.jpg',
  'vimala': '/images/devis/vimala.jpg',
  'tara-tarini': '/images/devis/tara_tarini.jpg',
  'taratarini': '/images/devis/tara_tarini.jpg',
  'biraja-jajpur': '/images/devis/biraja.jpg',
  'biraja': '/images/devis/biraja.jpg',
  'samaleswari': '/images/devis/samaleswari.jpg',
  'mangala-kakatpur': '/images/devis/mangala.jpg',
  'mangala': '/images/devis/mangala.jpg',
  'sarala-jhankad': '/images/devis/sarala.jpg',
  'sarala': '/images/devis/sarala.jpg',
  'charchika': '/images/devis/charchika.jpg',
  'guhyakali': '/images/devis/guhyakali.jpg',
};

export function resolveDeviImagePath(explicitPath?: string, deviName?: string, altText?: string, deviId?: string): string | undefined {
  if (explicitPath && explicitPath.trim() !== '') {
    return explicitPath;
  }
  
  if (deviId && DEVI_IMAGE_REGISTRY[deviId]) {
    return DEVI_IMAGE_REGISTRY[deviId];
  }

  const searchTerms = [deviId, deviName, altText].filter(Boolean) as string[];
  for (const term of searchTerms) {
    const clean = term.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const [key, path] of Object.entries(DEVI_IMAGE_REGISTRY)) {
      const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (clean.includes(cleanKey) || cleanKey.includes(clean)) {
        return path;
      }
    }
  }

  return undefined;
}

interface DeviImageProps {
  imagePath?: string;
  altText: string;
  deviName?: string;
  deviId?: string;
  sanskritName?: string;
  fallbackType?: FallbackType | VerificationStatus;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  attribution?: string;
  source?: string;
}

export const DeviImage: React.FC<DeviImageProps> = ({
  imagePath: explicitImagePath,
  altText,
  deviName,
  deviId,
  sanskritName,
  fallbackType = 'image_unavailable',
  size = 'md',
  className = '',
  attribution,
  source
}) => {
  const resolvedPath = resolveDeviImagePath(explicitImagePath, deviName, altText, deviId);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Reset error and load state whenever the resolved image path changes
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
    setRetryCount(0);
  }, [resolvedPath]);

  const handleImageError = () => {
    if (retryCount < 1) {
      // Retry once after brief delay to handle dev-server / HMR lag
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
      }, 300);
    } else {
      setHasError(true);
    }
  };

  // If no image path is resolved or error occurred, render the sacred Om fallback
  if (!resolvedPath || hasError) {
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
        key={`${resolvedPath}-${retryCount}`}
        src={resolvedPath}
        alt={altText}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
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
