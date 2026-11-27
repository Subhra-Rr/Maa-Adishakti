import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { X, Sparkles, Shield, ExternalLink, MapPin } from 'lucide-react';
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
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [entity, onClose]);

  if (!entity || typeof document === 'undefined') return null;

  const matchingDevi = entity.deviId ? allDevis.find(d => d.id === entity.deviId) : null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm transition-all duration-200 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#1e080e] via-[#120709] to-[#0a0507] border-2 border-sacred-borderGold/90 shadow-[0_0_50px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.25)] p-4 sm:p-5 space-y-2.5 my-auto min-w-0 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-2 border-b border-sacred-borderGold/30 pb-2 min-w-0">
          <div className="space-y-0.5 min-w-0 pr-2">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-sacred-dark border border-sacred-gold/50 text-[10px] sm:text-[11px] font-mono font-bold text-sacred-goldLight max-w-full truncate">
              <Sparkles className="w-3 h-3 text-sacred-gold shrink-0" />
              <span className="truncate">{entity.categoryBadge}</span>
            </span>
            {entity.subtitle && (
              <p className="text-[10px] sm:text-[11px] text-sacred-ivoryMuted font-mono truncate">
                {entity.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1 shrink-0 rounded-full bg-sacred-dark hover:bg-sacred-maroon border border-sacred-borderGold/60 text-sacred-goldLight hover:text-white transition-all shadow-sm"
            title="Close dossier (Esc)"
            aria-label="Close dossier"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title and Devanagari Calligraphy */}
        <div className="space-y-0.5 min-w-0">
          {(matchingDevi?.sanskritName || entity.sanskritName) && (
            <div className="font-devanagari text-base sm:text-lg font-bold text-sacred-goldLight drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-tight truncate">
              {matchingDevi?.sanskritName || entity.sanskritName}
            </div>
          )}
          <h2 className="font-cinzel text-base sm:text-xl font-extrabold text-sacred-ivory leading-tight truncate">
            {entity.name}
          </h2>
        </div>

        {/* Core Attributes Grid (Compact, dense, immediately visible without scrolling) */}
        {entity.attributes && entity.attributes.length > 0 && (
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 min-w-0">
            {entity.attributes.slice(0, 6).map((attr, idx) => (
              <div
                key={idx}
                className="p-1.5 sm:p-2 rounded-lg bg-sacred-dark/90 border border-sacred-borderGold/30 hover:border-sacred-gold/60 transition-colors min-w-0"
              >
                <span className="text-[9px] font-bold uppercase tracking-wider text-sacred-gold block truncate">
                  {attr.label}
                </span>
                <span className="text-[11px] sm:text-xs text-sacred-ivory font-medium leading-tight block truncate">
                  {attr.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Concise Description / Historical Context */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-sacred-dark/70 border border-sacred-border/70 space-y-1 min-w-0">
          <div className="flex items-center space-x-1.5 text-sacred-goldDark text-[10px] font-bold uppercase tracking-wider">
            <Shield className="w-3 h-3 text-sacred-gold shrink-0" />
            <span>Sacred Significance</span>
          </div>
          <p className="text-xs text-sacred-ivoryDim font-cormorant leading-relaxed line-clamp-3">
            {entity.esotericSignificance || entity.description}
          </p>
        </div>

        {/* Scriptural Authority Citation */}
        {entity.scripturalSource && (
          <div className="text-[10px] text-sacred-ivoryMuted font-mono px-1 line-clamp-1 leading-tight">
            <strong className="text-sacred-goldDark uppercase">Scripture: </strong>
            <span>{entity.scripturalSource}</span>
          </div>
        )}

        {/* Action Controls Footer */}
        <div className="pt-2 border-t border-sacred-borderGold/30 flex items-center justify-between gap-2">
          {matchingDevi ? (
            <Link
              to={`/devi/${matchingDevi.id}`}
              onClick={onClose}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-sacred-maroon via-sacred-crimson to-sacred-maroon hover:from-amber-700 hover:to-sacred-maroon border border-sacred-gold text-sacred-goldLight hover:text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-md shrink-0"
            >
              <span>Visit Devi Profile</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </Link>
          ) : (
            <div className="text-[11px] text-sacred-goldDark font-mono flex items-center space-x-1 truncate">
              <MapPin className="w-3 h-3 text-sacred-gold shrink-0" />
              <span className="truncate">Consecrated Shakti-Sthana</span>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-4 py-1.5 sm:py-2 rounded-lg bg-sacred-dark hover:bg-sacred-surface border border-sacred-border hover:border-sacred-gold text-xs text-sacred-ivory hover:text-sacred-goldLight transition-colors shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
