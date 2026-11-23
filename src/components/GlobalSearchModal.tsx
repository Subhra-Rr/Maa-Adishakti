import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Flame, MapPin, BookOpen, Crown, CircleDot, ChevronRight } from 'lucide-react';
import { allDevis, categories, shaktiPeethas, scriptures, sixtyFourYoginis } from '../data';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle global escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Devis
  const matchedDevis = q
    ? allDevis.filter(
        d =>
          d.primaryName.toLowerCase().includes(q) ||
          d.sanskritName.toLowerCase().includes(q) ||
          (d.odiaName && d.odiaName.toLowerCase().includes(q)) ||
          d.alternateNames.some(a => a.toLowerCase().includes(q)) ||
          d.classification.some(c => c.toLowerCase().includes(q))
      ).slice(0, 6)
    : allDevis.slice(0, 4);

  // Search Categories
  const matchedCategories = q
    ? categories.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.sanskritName.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  // Search Shakti Peethas
  const matchedPeethas = q
    ? shaktiPeethas.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.devi.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.state.toLowerCase().includes(q) ||
          p.bodyPartOrOrnament.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  // Search Scriptures
  const matchedScriptures = q
    ? scriptures.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.sanskritTitle.toLowerCase().includes(q) ||
          s.subject.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  // Search 64 Yoginis
  const matchedYoginis = q
    ? sixtyFourYoginis.filter(
        y =>
          y.name.toLowerCase().includes(q) ||
          y.sanskritName.toLowerCase().includes(q) ||
          y.vahana.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  const hasResults =
    matchedDevis.length > 0 ||
    matchedCategories.length > 0 ||
    matchedPeethas.length > 0 ||
    matchedScriptures.length > 0 ||
    matchedYoginis.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-sacred-surface border border-sacred-borderGold/60 rounded-xl shadow-sacred-glow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-sacred-borderGold/30 bg-sacred-dark">
          <Search className="w-5 h-5 text-sacred-gold mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Devis, Sanskrit names, Categories, Peethas, Scriptures..."
            className="w-full bg-transparent text-sacred-ivory placeholder-sacred-ivoryMuted text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-sacred-ivoryMuted hover:text-sacred-gold mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs bg-sacred-surfaceLight border border-sacred-border rounded text-sacred-ivoryDim hover:text-sacred-gold"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
          {!hasResults && q && (
            <div className="text-center py-12 text-sacred-ivoryMuted text-sm">
              No entries found matching &ldquo;<span className="text-sacred-gold">{query}</span>&rdquo;.
              <div className="text-xs text-sacred-ivoryMuted/70 mt-1">
                Try searching in English, Sanskrit Devanagari, or sacred category names.
              </div>
            </div>
          )}

          {/* Categories */}
          {matchedCategories.length > 0 && (
            <div>
              <div className="text-[11px] font-cinzel text-sacred-gold font-semibold tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                <Crown className="w-3.5 h-3.5" />
                <span>Categories</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedCategories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(`/categories/${c.slug}`)}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-sacred-dark/80 hover:bg-sacred-maroon/40 border border-sacred-borderGold/20 hover:border-sacred-gold/60 text-left transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-sacred-ivory group-hover:text-sacred-goldLight">
                        {c.name}
                      </div>
                      <div className="text-[11px] font-devanagari text-sacred-goldDark">
                        {c.sanskritName}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-sacred-borderGold group-hover:text-sacred-gold" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Devis */}
          {matchedDevis.length > 0 && (
            <div>
              <div className="text-[11px] font-cinzel text-sacred-gold font-semibold tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>Devi Profiles ({matchedDevis.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedDevis.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => handleSelect(`/devi/${d.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-sacred-dark/60 hover:bg-sacred-maroon/50 border border-sacred-borderGold/20 hover:border-sacred-gold/60 text-left transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-sacred-maroon border border-sacred-borderGold/40 flex items-center justify-center font-devanagari text-sacred-gold text-sm shrink-0">
                        ॐ
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-sm text-sacred-ivory group-hover:text-sacred-goldLight">
                            {d.primaryName}
                          </span>
                          <span className="font-devanagari text-xs text-sacred-goldDark">
                            {d.sanskritName}
                          </span>
                        </div>
                        <div className="text-xs text-sacred-ivoryMuted line-clamp-1 mt-0.5">
                          {d.shortIntro}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-sacred-goldDark/70 hidden sm:block shrink-0 ml-2">
                      {d.classification[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Shakti Peethas */}
          {matchedPeethas.length > 0 && (
            <div>
              <div className="text-[11px] font-cinzel text-sacred-gold font-semibold tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Shakti Peethas</span>
              </div>
              <div className="space-y-1.5">
                {matchedPeethas.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(`/shakti-peethas?select=${p.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-sacred-dark/60 hover:bg-sacred-maroon/40 border border-sacred-borderGold/20 hover:border-sacred-gold/60 text-left transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-sacred-ivory group-hover:text-sacred-goldLight">
                        {p.name} — {p.devi}
                      </div>
                      <div className="text-[11px] text-sacred-ivoryMuted">
                        {p.location}, {p.state} • Body Part: {p.bodyPartOrOrnament}
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded border border-sacred-borderGold/40 text-sacred-goldLight bg-sacred-surface">
                      {p.classification}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scriptures */}
          {matchedScriptures.length > 0 && (
            <div>
              <div className="text-[11px] font-cinzel text-sacred-gold font-semibold tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Scriptures</span>
              </div>
              <div className="space-y-1.5">
                {matchedScriptures.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelect(`/scriptures?text=${s.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-sacred-dark/60 hover:bg-sacred-maroon/40 border border-sacred-borderGold/20 hover:border-sacred-gold/60 text-left transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-sacred-ivory group-hover:text-sacred-goldLight">
                        {s.title}
                      </div>
                      <div className="text-[11px] font-devanagari text-sacred-goldDark">
                        {s.sanskritTitle} • {s.category}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-sacred-borderGold group-hover:text-sacred-gold" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 64 Yoginis */}
          {matchedYoginis.length > 0 && (
            <div>
              <div className="text-[11px] font-cinzel text-sacred-gold font-semibold tracking-wider uppercase mb-2 flex items-center space-x-1.5">
                <CircleDot className="w-3.5 h-3.5" />
                <span>Chausath Yoginis</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedYoginis.map((y) => (
                  <button
                    key={y.id}
                    onClick={() => handleSelect(`/categories/chausath-yoginis?yogini=${y.id}`)}
                    className="p-2 rounded-lg bg-sacred-dark/60 hover:bg-sacred-maroon/40 border border-sacred-borderGold/20 hover:border-sacred-gold/60 text-left transition-all group flex items-center space-x-2.5"
                  >
                    <span className="text-xs font-mono text-sacred-gold">#{y.number}</span>
                    <div>
                      <div className="font-semibold text-xs text-sacred-ivory group-hover:text-sacred-goldLight">
                        {y.name} ({y.sanskritName})
                      </div>
                      <div className="text-[10px] text-sacred-ivoryMuted">
                        Vahana: {y.vahana}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-sacred-dark border-t border-sacred-borderGold/30 text-xs text-sacred-ivoryMuted flex items-center justify-between">
          <span>Search in English or Devanagari Sanskrit</span>
          <span className="font-devanagari text-sacred-goldDark">॥ ॐ तत्सत् ॥</span>
        </div>
      </div>
    </div>
  );
};
