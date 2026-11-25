import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allDevis } from '../data';
import { DeviImage } from './DeviImage';
import { Devi } from '../types';
import { Sparkles, ArrowRight, RefreshCw, Compass, BookOpen, Crown } from 'lucide-react';

const STORAGE_KEY = 'shakta_tattva_last_recommended_devi_id';

export const DynamicDeviRecommendation: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [recommendedDevi, setRecommendedDevi] = useState<Devi | null>(null);
  const [isRotating, setIsRotating] = useState(false);

  // Filter only genuine, published, fully-documented Devi profiles
  const eligibleDevis = React.useMemo(() => {
    return allDevis.filter(d =>
      Boolean(d && d.id && d.primaryName && d.shortIntro && d.classification && d.classification.length > 0)
    );
  }, []);

  const selectRandomDevi = (excludeId?: string): Devi | null => {
    if (eligibleDevis.length === 0) return null;
    if (eligibleDevis.length === 1) return eligibleDevis[0];

    const candidates = excludeId
      ? eligibleDevis.filter(d => d.id !== excludeId)
      : eligibleDevis;

    const pool = candidates.length > 0 ? candidates : eligibleDevis;
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  };

  useEffect(() => {
    const lastId = sessionStorage.getItem(STORAGE_KEY) || undefined;
    const initial = selectRandomDevi(lastId) || eligibleDevis[0] || null;

    if (initial) {
      setRecommendedDevi(initial);
      sessionStorage.setItem(STORAGE_KEY, initial.id);
    }
  }, [eligibleDevis]);

  const handleRotate = () => {
    setIsRotating(true);
    const nextDevi = selectRandomDevi(recommendedDevi?.id);
    if (nextDevi) {
      setRecommendedDevi(nextDevi);
      sessionStorage.setItem(STORAGE_KEY, nextDevi.id);
    }
    setTimeout(() => setIsRotating(false), 300);
  };

  if (!recommendedDevi) {
    return null;
  }

  // Theological reason to explore this manifestation
  const getDiscoveryReason = (devi: Devi) => {
    if (devi.philosophicalSignificance) {
      return devi.philosophicalSignificance;
    }
    return `Discover the sacred theology, mantras, and scriptural attestations of ${devi.primaryName} in the Shakta tradition.`;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#140b0e] via-[#1a0f14] to-[#0e0a0d] border-2 border-sacred-borderGold/60 p-6 sm:p-8 shadow-sacred-glow transition-all ${className}`}
    >
      {/* Background Decorative Rings */}
      <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-sacred-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-sacred-crimson/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Devi Image Area */}
        <div className="md:col-span-4 lg:col-span-3 flex justify-center">
          <div className="w-full max-w-[240px] rounded-xl overflow-hidden border border-sacred-borderGold/40 bg-sacred-dark shadow-sacred-glow group">
            <DeviImage
              imagePath={recommendedDevi.imagePath || recommendedDevi.imageAssets?.[0]?.imagePath}
              altText={recommendedDevi.primaryName}
              deviName={recommendedDevi.primaryName}
              deviId={recommendedDevi.id}
              sanskritName={recommendedDevi.sanskritName}
              fallbackType={recommendedDevi.imageAssets?.[0]?.fallbackType || 'verified'}
              size="md"
              priority={true}
            />
          </div>
        </div>

        {/* Devi Description & Context */}
        <div className="md:col-span-8 lg:col-span-9 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sacred-borderGold/30 pb-3">
            <div className="flex items-center space-x-2">
              <span className="p-1 rounded bg-sacred-maroon border border-sacred-gold/40 text-sacred-goldLight">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sacred-gold">
                Featured Divine Manifestation
              </span>
            </div>

            {/* Discover Another Devi Button */}
            <button
              onClick={handleRotate}
              disabled={isRotating}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold text-sacred-ivoryDim hover:text-sacred-gold text-[11px] font-medium transition-all"
              title="Reveal another sacred manifestation from the encyclopedia"
            >
              <RefreshCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
              <span>Discover Another Devi</span>
            </button>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sacred-maroon/80 border border-sacred-gold/40 text-sacred-goldLight">
                {recommendedDevi.classification[0]}
              </span>
              {recommendedDevi.traditions?.[0] && (
                <span className="px-2 py-0.5 rounded text-[10px] bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted">
                  {recommendedDevi.traditions[0]}
                </span>
              )}
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold gold-gradient-text">
              {recommendedDevi.primaryName}
            </h3>
            <div className="font-devanagari text-sm text-sacred-goldLight mt-0.5">
              {recommendedDevi.sanskritName}
              {recommendedDevi.odiaName && (
                <span className="font-odia ml-2 opacity-80">({recommendedDevi.odiaName})</span>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed line-clamp-3">
            {recommendedDevi.shortIntro}
          </p>

          <div className="p-3 rounded-lg bg-sacred-dark/70 border border-sacred-borderGold/20 text-xs text-sacred-ivoryMuted">
            <span className="text-sacred-gold font-semibold block text-[11px] uppercase tracking-wider mb-0.5">
              Why Explore Her Sacred Profile:
            </span>
            <p className="line-clamp-2 font-cormorant text-base text-sacred-ivoryDim">
              {getDiscoveryReason(recommendedDevi)}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to={`/devi/${recommendedDevi.id}`}
              className="px-6 py-2.5 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sacred-glow transition-all flex items-center space-x-2"
            >
              <span>Explore Devi Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/directory"
              className="px-4 py-2.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/40 text-sacred-ivory hover:text-sacred-gold hover:border-sacred-gold text-xs sm:text-sm font-medium transition-all"
            >
              Browse All 180+ Devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
