import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, Sparkles, Compass, Shield, ExternalLink, Flame } from 'lucide-react';
import { SacredOmFallback } from './SacredOmFallback';
import { allDevis } from '../data';

export interface TopicBriefEntity {
  id?: string;
  number?: number | string;
  name: string;
  sanskritName?: string;
  categoryBadge: string;
  subtitle?: string;
  imagePath?: string;
  fallbackType?: 'verified' | 'classical_om';
  attributes: { label: string; value: string; highlight?: boolean }[];
  description: string;
  esotericSignificance?: string;
  philosophicalMeaning?: string;
  scripturalSource?: string;
  mantraOrSloka?: {
    title?: string;
    sanskrit?: string;
    transliteration?: string;
    meaning?: string;
  };
  deviId?: string; // If there is a full Devi profile route /devi/:id
  templeSite?: string;
}

interface TopicDossierModalProps {
  entity: TopicBriefEntity | null;
  onClose: () => void;
}

export const TopicDossierModal: React.FC<TopicDossierModalProps> = ({ entity, onClose }) => {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (entity) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [entity, onClose]);

  if (!entity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md transition-all duration-300 animate-in fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-[calc(100vw-1.5rem)] sm:w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#1c080d] via-[#100709] to-[#0a0507] border-2 border-sacred-borderGold/80 shadow-2xl shadow-amber-950/60 p-4 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200 my-auto min-w-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-2 border-b border-sacred-borderGold/30 pb-3 min-w-0">
          <div className="space-y-1 min-w-0 pr-2">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-sacred-dark border border-sacred-gold/40 text-[10px] sm:text-[11px] font-mono font-bold text-sacred-goldLight max-w-full truncate">
              <Sparkles className="w-3 h-3 text-sacred-gold shrink-0" />
              <span className="truncate">{entity.categoryBadge}</span>
            </span>
            {entity.subtitle && (
              <p className="text-[11px] sm:text-xs text-sacred-ivoryMuted font-mono pt-0.5 break-words">
                {entity.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 shrink-0 rounded-full bg-sacred-dark/90 hover:bg-sacred-maroon border border-sacred-borderGold/40 text-sacred-ivory hover:text-white transition-colors"
            title="Close dossier (Esc)"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and Devanagari Calligraphy */}
        <div className="space-y-1.5 min-w-0">
          {entity.sanskritName && (
            <div className="font-devanagari text-xl sm:text-2xl md:text-3xl font-bold text-sacred-goldLight drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] leading-relaxed pt-1 pb-1 break-words">
              {entity.sanskritName}
            </div>
          )}
          <h2 className="font-cinzel text-lg sm:text-2xl md:text-3xl font-extrabold text-sacred-ivory break-words">
            {entity.name}
          </h2>
        </div>

        {/* Visual Embellishment / Sacred Iconography */}
        <div className="w-full h-28 sm:h-36 rounded-xl overflow-hidden border border-sacred-borderGold/30 bg-sacred-dark">
          <SacredOmFallback
            deviName={entity.name}
            sanskritName={entity.sanskritName}
            fallbackType="verified"
            size="md"
          />
        </div>

        {/* Key Attributes & Iconographic Parameters Grid */}
        {entity.attributes && entity.attributes.length > 0 && (
          <div className="space-y-2 min-w-0">
            <h4 className="font-cinzel text-xs uppercase tracking-wider font-bold text-sacred-goldDark flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-sacred-gold shrink-0" />
              <span>Sacred Iconographic & Doctrinal Attributes</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 min-w-0">
              {entity.attributes.map((attr, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-sacred-dark/80 border border-sacred-borderGold/25 hover:border-sacred-gold/50 transition-colors min-w-0 break-words"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sacred-gold block mb-0.5">
                    {attr.label}
                  </span>
                  <span className="text-xs text-sacred-ivory leading-snug">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* In-depth Descriptive Brief */}
        <div className="space-y-1.5 min-w-0">
          <h4 className="font-cinzel text-xs uppercase tracking-wider font-bold text-sacred-goldDark flex items-center space-x-1.5">
            <Compass className="w-3.5 h-3.5 text-sacred-gold shrink-0" />
            <span>Sacred Form & Detailed Dossier</span>
          </h4>
          <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed bg-sacred-dark/50 p-3.5 sm:p-4 rounded-xl border border-sacred-border/60 break-words">
            {entity.description}
          </p>
        </div>

        {/* Esoteric & Philosophical Significance */}
        {entity.esotericSignificance && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-sacred-maroon/60 via-sacred-dark to-sacred-dark border border-sacred-gold/40 space-y-1 min-w-0">
            <h4 className="font-cinzel text-xs uppercase tracking-wider font-bold text-sacred-goldLight flex items-center space-x-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Esoteric & Tantric Significance</span>
            </h4>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed break-words">
              {entity.esotericSignificance}
            </p>
          </div>
        )}

        {/* Sacred Sloka or Mantra Section (if present) */}
        {entity.mantraOrSloka && entity.mantraOrSloka.sanskrit && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-sacred-dark/90 border border-sacred-gold/30 space-y-1.5 text-center min-w-0">
            {entity.mantraOrSloka.title && (
              <span className="text-[10px] uppercase font-bold text-sacred-gold tracking-widest block">
                {entity.mantraOrSloka.title}
              </span>
            )}
            <div className="font-devanagari text-xs sm:text-base text-sacred-goldLight leading-relaxed pt-0.5 break-words">
              {entity.mantraOrSloka.sanskrit}
            </div>
            {entity.mantraOrSloka.meaning && (
              <p className="text-[11px] sm:text-xs text-sacred-ivoryMuted font-cormorant text-sm italic pt-1 border-t border-sacred-border/40 break-words">
                {entity.mantraOrSloka.meaning}
              </p>
            )}
          </div>
        )}

        {/* Scriptural Foundations */}
        {entity.scripturalSource && (
          <div className="pt-2.5 border-t border-sacred-borderGold/30 flex items-start space-x-2 text-xs text-sacred-ivoryMuted min-w-0">
            <BookOpen className="w-4 h-4 text-sacred-gold shrink-0 mt-0.5" />
            <div className="min-w-0 break-words">
              <strong className="text-sacred-goldDark uppercase text-[10px] block">
                Scriptural Foundations & Classical Citations:
              </strong>
              <span>{entity.scripturalSource}</span>
            </div>
          </div>
        )}

        {/* Action Controls Footer */}
        <div className="pt-3 border-t border-sacred-borderGold/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {(() => {
            const matchingDevi = entity.deviId ? allDevis.find(d => d.id === entity.deviId) : null;
            if (matchingDevi) {
              return (
                <Link
                  to={`/devi/${matchingDevi.id}`}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-sacred-maroon to-sacred-dark hover:from-amber-700 hover:to-sacred-maroon border border-sacred-gold text-sacred-goldLight hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md text-center"
                >
                  <span>Explore Dedicated Profile & Mantras</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </Link>
              );
            }
            return (
              <div className="text-[11px] text-sacred-ivoryMuted font-mono text-center sm:text-left">
                Classical Traditional Documentation
              </div>
            );
          })()}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-sacred-dark border border-sacred-border hover:border-sacred-gold text-xs text-sacred-ivory hover:text-sacred-goldLight transition-colors text-center"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
