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

  // Navapatrika Devis (Sacred Botanical & Puranic Forms)
  'patrika-kartiki': '/images/devis/kartiki.jpg',
  'kartiki': '/images/devis/kartiki.jpg',
  'patrika-shiva': '/images/devis/shiva_nabapatrika.jpg',
  'shiva-nabapatrika': '/images/devis/shiva_nabapatrika.jpg',
  'shiva_nabapatrika': '/images/devis/shiva_nabapatrika.jpg',
  'patrika-raktadantika': '/images/devis/raktadantika.jpg',
  'raktadantika': '/images/devis/raktadantika.jpg',
  'patrika-shokarahita': '/images/devis/shokarahita.jpg',
  'shokarahita': '/images/devis/shokarahita.jpg',

  // Shodasha Nitya Devis (Sri Vidya Sacred Lunar Forms)
  'kameshvari-nitya': '/images/devis/kameshwari.jpg',
  'kameshwari': '/images/devis/kameshwari.jpg',
  'kameshvari': '/images/devis/kameshwari.jpg',
  'bhagamalini': '/images/devis/bhagamalini.jpg',
  'nityaklinna': '/images/devis/nityaklinna.jpg',
  'bherunda': '/images/devis/bherunda.jpg',
  'vahnivasini': '/images/devis/vahnivasini.jpg',
  'mahavajreshvari': '/images/devis/mahavajreshwari.jpg',
  'mahavajreshwari': '/images/devis/mahavajreshwari.jpg',
  'shivaduti-nitya': '/images/devis/shivaduti.jpg',
  'shivaduti': '/images/devis/shivaduti.jpg',
  'tvarita': '/images/devis/tvarita.jpg',
  'kulasundari': '/images/devis/kulasundari.jpg',
  'nitya': '/images/devis/nitya.jpg',
  'nilapataka': '/images/devis/nilapataka.jpg',
  'vijaya-nitya': '/images/devis/vijaya_nitya.jpg',
  'jvalamalini': '/images/devis/jvalamalini.jpg',
  'chitra': '/images/devis/chitra.jpg',
  'chitra-nitya': '/images/devis/chitra.jpg',

  // Shodasha Matrikas (Vedic Mothers)
  'matrika-gauri': '/images/devis/matrika_gauri.jpg',
  'matrika-padma': '/images/devis/matrika_padma.jpg',
  'matrika-shachi': '/images/devis/matrika_shachi.jpg',
  'matrika-sachi': '/images/devis/matrika_shachi.jpg',
  'matrika-medha': '/images/devis/matrika_medha.jpg',
  'matrika-vijaya': '/images/devis/matrika_vijaya.jpg',
  'matrika-jaya': '/images/devis/matrika_jaya.jpg',
  'matrika-swadha': '/images/devis/matrika_swadha.jpg',
  'matrika-dhriti': '/images/devis/matrika_dhriti.jpg',
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

// Global in-memory cache to ensure images that loaded once appear INSTANTLY across all page navigations
const globalLoadedImages = new Set<string>();

export function preloadDeviImages(paths: string[]) {
  if (typeof window === 'undefined') return;
  paths.forEach(src => {
    if (!src || globalLoadedImages.has(src)) return;
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
    img.onload = () => globalLoadedImages.add(src);
  });
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
  priority?: boolean;
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
  source,
  priority = false
}) => {
  const resolvedPath = resolveDeviImagePath(explicitImagePath, deviName, altText, deviId);
  const isInitiallyCached = Boolean(resolvedPath && globalLoadedImages.has(resolvedPath));
  
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(isInitiallyCached);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = React.useRef<HTMLImageElement>(null);

  const isHighPriority = priority || size === 'hero' || size === 'lg';

  // Instant check for cached images in browser memory or disk
  React.useEffect(() => {
    if (resolvedPath && globalLoadedImages.has(resolvedPath)) {
      setIsLoaded(true);
      return;
    }
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      if (resolvedPath) globalLoadedImages.add(resolvedPath);
      setIsLoaded(true);
    }
  }, [resolvedPath]);

  // Reset state if resolvedPath changes
  React.useEffect(() => {
    const cached = Boolean(resolvedPath && globalLoadedImages.has(resolvedPath));
    setHasError(false);
    setIsLoaded(cached);
    setRetryCount(0);
  }, [resolvedPath]);

  const handleImageLoad = () => {
    if (resolvedPath) {
      globalLoadedImages.add(resolvedPath);
    }
    setIsLoaded(true);
  };

  const handleImageError = () => {
    if (retryCount < 1) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
      }, 200);
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
    sm: 'aspect-[3/4] w-full min-h-[220px] max-h-72',
    md: 'aspect-[3/4] w-full min-h-[280px] max-h-80',
    lg: 'aspect-[3/4] w-full min-h-[380px] sm:min-h-[460px] md:min-h-[500px]',
    hero: 'aspect-[3/4] w-full min-h-[420px] sm:min-h-[500px]'
  };

  return (
    <div className={`relative w-full ${heightClasses[size]} overflow-hidden rounded-lg bg-sacred-dark border border-sacred-borderGold/40 group flex items-center justify-center ${className}`}>
      {/* Subtle non-blocking placeholder shimmer only while downloading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-sacred-dark/70 to-sacred-surface animate-pulse" />
      )}

      {/* Atmospheric ambient backdrop of the artwork ensuring zero letterbox jarring */}
      <img
        src={resolvedPath}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110 pointer-events-none transition-opacity duration-300 ${
          isLoaded ? 'opacity-30' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-sacred-dark/35 pointer-events-none" />

      {/* Main Sacred Deity Image — perfectly resized with zero distortion and zero crop */}
      <img
        ref={imgRef}
        key={`${resolvedPath}-${retryCount}`}
        src={resolvedPath}
        alt={altText}
        loading={isHighPriority ? 'eager' : 'lazy'}
        // @ts-ignore - modern browser high-priority hint
        fetchpriority={isHighPriority ? 'high' : 'auto'}
        decoding="async"
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`relative z-10 max-w-full max-h-full w-auto h-auto object-contain object-center p-1 transition-all duration-300 group-hover:scale-[1.03] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Decorative inner golden border */}
      <div className="absolute inset-0 z-20 pointer-events-none border border-sacred-gold/30 rounded-lg" />
      
      {/* Attribution / Source overlay if available */}
      {(attribution || source) && (
        <div className="absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-sacred-dark/95 via-sacred-dark/60 to-transparent p-2.5 text-[11px] text-sacred-ivoryDim flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span>{attribution || 'Traditional Archive'}</span>
          <span className="text-sacred-goldLight font-medium">{source}</span>
        </div>
      )}
    </div>
  );
};
