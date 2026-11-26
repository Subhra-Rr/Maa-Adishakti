import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { allDevis, categories } from '../data';
import { DeviImage } from '../components/DeviImage';
import { Devi } from '../types';
import {
  Search, Filter, X, ArrowUpDown, ChevronRight, Layers,
  Compass, Flame, Sparkles, BookOpen, AlertCircle, HelpCircle, Check
} from 'lucide-react';

export const DeviDirectoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'All';
  const traditionParam = searchParams.get('tradition') || 'All';
  const acharaParam = searchParams.get('achara') || 'All';

  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedTradition, setSelectedTradition] = useState(traditionParam);
  const [selectedAchara, setSelectedAchara] = useState(acharaParam);

  // Sync state if URL query param changes
  React.useEffect(() => {
    if (queryParam) setSearchTerm(queryParam);
    if (categoryParam) setSelectedCategory(categoryParam);
    if (traditionParam) setSelectedTradition(traditionParam);
    if (acharaParam) setSelectedAchara(acharaParam);
  }, [queryParam, categoryParam, traditionParam, acharaParam]);

  // Standardized traditions list derived from database + canonical lineages
  const allTraditions = useMemo(() => {
    const canonical = [
      'Kalikula',
      'Srikula',
      'Sri Vidya',
      'Kashmir Krama',
      'Kashmir Shaivism',
      'Trika',
      'Kaula',
      'Kaula Tantra',
      'Atharvana Tantra',
      'Agama Tantra',
      'Vedic Shakta',
      'Brahminical Tantra',
      'Odisha Shakta',
      'Puranic Shakta',
      'Kundalini Yoga',
      'Vaishnava-Shakta Synthesis',
      'Chinachara',
      'Folk-Tantric Synthesis'
    ];
    const set = new Set<string>(canonical);
    allDevis.forEach(d => d.traditions?.forEach(t => {
      if (t && t.length > 2) set.add(t);
    }));
    return Array.from(set).sort();
  }, []);

  const allAcharas = ['Dakshinachara', 'Vamachara', 'Samayachara', 'Kaulachara'];

  // Helper matchers
  const matchesSearch = (devi: Devi, term: string) => {
    if (!term) return true;
    const q = term.toLowerCase().trim();
    return (
      devi.primaryName.toLowerCase().includes(q) ||
      devi.sanskritName.toLowerCase().includes(q) ||
      (devi.odiaName && devi.odiaName.toLowerCase().includes(q)) ||
      devi.alternateNames.some(a => a.toLowerCase().includes(q)) ||
      devi.shortIntro.toLowerCase().includes(q) ||
      devi.philosophicalSignificance.toLowerCase().includes(q) ||
      devi.nameMeaning.toLowerCase().includes(q)
    );
  };

  const matchesCategory = (devi: Devi, catName: string) => {
    if (catName === 'All') return true;
    const targetCat = categories.find(c => c.name === catName || c.slug === catName);
    const catSearch = (targetCat?.name || catName).toLowerCase();
    const slugSearch = (targetCat?.slug || catName).toLowerCase();

    // Check direct classification tags or category deviIds
    return (
      devi.classification.some(c => {
        const clean = c.toLowerCase();
        return (
          clean.includes(catSearch) ||
          catSearch.includes(clean) ||
          clean.includes(slugSearch) ||
          slugSearch.includes(clean)
        );
      }) ||
      (targetCat?.deviIds && targetCat.deviIds.includes(devi.id))
    );
  };

  const matchesTradition = (devi: Devi, tradName: string) => {
    if (tradName === 'All') return true;
    const q = tradName.toLowerCase();
    return devi.traditions.some(t => {
      const clean = t.toLowerCase();
      return clean.includes(q) || q.includes(clean);
    });
  };

  const matchesAchara = (devi: Devi, acharaName: string) => {
    if (acharaName === 'All') return true;
    const q = acharaName.toLowerCase();
    return devi.acharas.some(a => a.toLowerCase().includes(q));
  };

  // 1. EXACT INTERSECTION MATCHES
  const exactMatches = useMemo(() => {
    return allDevis.filter(devi =>
      matchesSearch(devi, searchTerm) &&
      matchesCategory(devi, selectedCategory) &&
      matchesTradition(devi, selectedTradition) &&
      matchesAchara(devi, selectedAchara)
    );
  }, [searchTerm, selectedCategory, selectedTradition, selectedAchara]);

  // 2. DIMENSIONAL RESULTS WHEN EXACT INTERSECTION IS EMPTY
  const categoryOnlyMatches = useMemo(() => {
    if (selectedCategory === 'All') return [];
    return allDevis.filter(d => matchesSearch(d, searchTerm) && matchesCategory(d, selectedCategory));
  }, [searchTerm, selectedCategory]);

  const traditionOnlyMatches = useMemo(() => {
    if (selectedTradition === 'All') return [];
    return allDevis.filter(d => matchesSearch(d, searchTerm) && matchesTradition(d, selectedTradition));
  }, [searchTerm, selectedTradition]);

  const acharaOnlyMatches = useMemo(() => {
    if (selectedAchara === 'All') return [];
    return allDevis.filter(d => matchesSearch(d, searchTerm) && matchesAchara(d, selectedAchara));
  }, [searchTerm, selectedAchara]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTradition('All');
    setSelectedAchara('All');
    setSearchParams({});
  };

  const isFiltered = searchTerm || selectedCategory !== 'All' || selectedTradition !== 'All' || selectedAchara !== 'All';
  const hasMultipleFilters = [selectedCategory !== 'All', selectedTradition !== 'All', selectedAchara !== 'All'].filter(Boolean).length >= 2;

  // Theological context explanation for multi-filter mismatch
  const getMismatchExplanation = () => {
    const parts: string[] = [];
    if (selectedCategory !== 'All') {
      parts.push(`"${selectedCategory}" represents a specific cosmic clustering (e.g. botanical offerings or lunar rays)`);
    }
    if (selectedTradition !== 'All') {
      parts.push(`"${selectedTradition}" denotes an independent textual lineage`);
    }
    if (selectedAchara !== 'All') {
      parts.push(`"${selectedAchara}" is a distinct ritual posture`);
    }
    return parts.join('; while ');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 overflow-x-hidden min-w-0">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <span>॥ सर्वदेवीमण्डलम् ॥ Complete Devi Knowledge Directory</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text">
          Complete Devi Directory
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
          Explore all 180+ documented manifestations of Adi Parashakti across Tantric traditions, Puranas, Kulas, Sri Vidya, and regional lineages.
        </p>
      </div>

      {/* Control Panel: Search & 3 Filters */}
      <div className="p-4 sm:p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 shadow-sacred-glow space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-sacred-gold absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Devi name, Sanskrit, Odia, alternate titles, or philosophical keywords..."
            className="w-full bg-sacred-dark border border-sacred-borderGold/50 rounded-lg pl-12 pr-10 py-3 text-sm text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-sacred-ivoryMuted hover:text-sacred-gold"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 3 Dropdown Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Dropdown 1: Category Filter */}
          <div>
            <label className="block text-sacred-goldLight mb-1 font-medium flex items-center justify-between">
              <span>Category</span>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="text-[10px] text-sacred-gold hover:underline"
                >
                  Clear
                </button>
              )}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory rounded-lg p-2.5 focus:outline-none focus:border-sacred-gold transition-colors"
            >
              <option value="All">All Categories ({allDevis.length} Devis)</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.sanskritName})
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown 2: Tradition / Kula Filter */}
          <div>
            <label className="block text-sacred-goldLight mb-1 font-medium flex items-center justify-between">
              <span>Tradition / Kula</span>
              {selectedTradition !== 'All' && (
                <button
                  onClick={() => setSelectedTradition('All')}
                  className="text-[10px] text-sacred-gold hover:underline"
                >
                  Clear
                </button>
              )}
            </label>
            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory rounded-lg p-2.5 focus:outline-none focus:border-sacred-gold transition-colors"
            >
              <option value="All">All Traditions</option>
              {allTraditions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown 3: Achara Mode Filter */}
          <div>
            <label className="block text-sacred-goldLight mb-1 font-medium flex items-center justify-between">
              <span>Achara Mode</span>
              {selectedAchara !== 'All' && (
                <button
                  onClick={() => setSelectedAchara('All')}
                  className="text-[10px] text-sacred-gold hover:underline"
                >
                  Clear
                </button>
              )}
            </label>
            <select
              value={selectedAchara}
              onChange={(e) => setSelectedAchara(e.target.value)}
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory rounded-lg p-2.5 focus:outline-none focus:border-sacred-gold transition-colors"
            >
              <option value="All">All Acharas</option>
              {allAcharas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Action */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              disabled={!isFiltered}
              className={`w-full p-2.5 rounded-lg border transition-all text-xs font-semibold flex items-center justify-center space-x-1.5 ${
                isFiltered
                  ? 'bg-sacred-maroon border-sacred-gold text-sacred-goldLight hover:bg-sacred-crimson cursor-pointer shadow-sacred-glow'
                  : 'bg-sacred-dark/60 border-sacred-border/60 text-sacred-ivoryMuted cursor-not-allowed opacity-60'
              }`}
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>

        {/* Active Filter Chips & Results Count */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs border-t border-sacred-border/60">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-sacred-ivoryMuted">Active Filters:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sacred-maroon/80 border border-sacred-gold/40 text-sacred-goldLight text-[11px]">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} className="ml-1.5 hover:text-white">
                  &times;
                </button>
              </span>
            )}
            {selectedTradition !== 'All' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sacred-surface border border-sacred-gold/40 text-sacred-goldLight text-[11px]">
                Tradition: {selectedTradition}
                <button onClick={() => setSelectedTradition('All')} className="ml-1.5 hover:text-white">
                  &times;
                </button>
              </span>
            )}
            {selectedAchara !== 'All' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sacred-dark border border-sacred-gold/40 text-sacred-goldLight text-[11px]">
                Achara: {selectedAchara}
                <button onClick={() => setSelectedAchara('All')} className="ml-1.5 hover:text-white">
                  &times;
                </button>
              </span>
            )}
            {!isFiltered && (
              <span className="text-sacred-ivoryMuted italic">None (Displaying all documented profiles)</span>
            )}
          </div>

          <div className="text-sacred-ivoryDim">
            Found <strong className="text-sacred-gold font-bold">{exactMatches.length}</strong> matching{' '}
            {exactMatches.length === 1 ? 'Devi' : 'Devis'} in registry
          </div>
        </div>
      </div>

      {/* ========================================================
          1. EXACT INTERSECTION RESULTS GRID
      ======================================================== */}
      {exactMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-2">
            <div className="flex items-center space-x-2 text-sm text-sacred-goldLight font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Direct Verified Matches ({exactMatches.length})</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full min-w-0">
            {exactMatches.map((devi) => (
              <DeviCard key={devi.id} devi={devi} />
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          2. MULTI-FILTER SCRIPTURAL DISCOVERY & EXPLANATION
      ======================================================== */}
      {exactMatches.length === 0 && (
        <div className="space-y-8">
          {/* Honest, respectful theological notice */}
          <div className="p-6 sm:p-8 rounded-2xl bg-sacred-surface border-2 border-sacred-borderGold/50 shadow-sacred-glow space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-sacred-maroon border border-sacred-gold flex items-center justify-center font-devanagari text-lg text-sacred-gold shrink-0 mt-0.5">
                ॐ
              </div>
              <div className="space-y-2">
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-sacred-ivory">
                  No Direct Scriptural Intersection for All Selected Filters
                </h3>
                <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
                  No single Devi manifestation in the verified textual archives simultaneously combines{' '}
                  {selectedCategory !== 'All' && <strong className="text-sacred-goldLight">Category: {selectedCategory}</strong>}
                  {selectedCategory !== 'All' && selectedTradition !== 'All' && ', '}
                  {selectedTradition !== 'All' && <strong className="text-sacred-goldLight">Tradition: {selectedTradition}</strong>}
                  {(selectedCategory !== 'All' || selectedTradition !== 'All') && selectedAchara !== 'All' && ', and '}
                  {selectedAchara !== 'All' && <strong className="text-sacred-goldLight">Achara: {selectedAchara}</strong>}.
                </p>
                <div className="p-3.5 rounded-lg bg-sacred-dark/80 border border-sacred-borderGold/30 text-xs text-sacred-ivoryMuted">
                  <span className="text-sacred-gold block font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Theological Context:
                  </span>
                  {getMismatchExplanation()}. In authentic Shakta Shastras, distinct ritual classifications govern different dimensions of Upasana rather than merging indiscriminately.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight rounded-lg font-semibold transition-all"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Dimensional Explorations: Category Devis */}
          {selectedCategory !== 'All' && categoryOnlyMatches.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-sacred-borderGold/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-sacred-gold uppercase">Dimension: Category</span>
                  <h3 className="font-cinzel text-xl font-bold gold-gradient-text">
                    Devis in &ldquo;{selectedCategory}&rdquo; ({categoryOnlyMatches.length})
                  </h3>
                </div>
                <button
                  onClick={() => { setSelectedTradition('All'); setSelectedAchara('All'); }}
                  className="text-xs text-sacred-goldLight hover:underline font-medium"
                >
                  Filter only by {selectedCategory}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full min-w-0">
                {categoryOnlyMatches.slice(0, 8).map((devi) => (
                  <DeviCard key={devi.id} devi={devi} />
                ))}
              </div>
            </div>
          )}

          {/* Dimensional Explorations: Tradition Devis */}
          {selectedTradition !== 'All' && traditionOnlyMatches.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-sacred-borderGold/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-sacred-gold uppercase">Dimension: Tradition / Kula</span>
                  <h3 className="font-cinzel text-xl font-bold gold-gradient-text">
                    Devis in &ldquo;{selectedTradition}&rdquo; ({traditionOnlyMatches.length})
                  </h3>
                </div>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedAchara('All'); }}
                  className="text-xs text-sacred-goldLight hover:underline font-medium"
                >
                  Filter only by {selectedTradition}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full min-w-0">
                {traditionOnlyMatches.slice(0, 8).map((devi) => (
                  <DeviCard key={devi.id} devi={devi} />
                ))}
              </div>
            </div>
          )}

          {/* Dimensional Explorations: Achara Devis */}
          {selectedAchara !== 'All' && acharaOnlyMatches.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-sacred-borderGold/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-sacred-gold uppercase">Dimension: Achara Mode</span>
                  <h3 className="font-cinzel text-xl font-bold gold-gradient-text">
                    Devis associated with &ldquo;{selectedAchara}&rdquo; ({acharaOnlyMatches.length})
                  </h3>
                </div>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedTradition('All'); }}
                  className="text-xs text-sacred-goldLight hover:underline font-medium"
                >
                  Filter only by {selectedAchara}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full min-w-0">
                {acharaOnlyMatches.slice(0, 8).map((devi) => (
                  <DeviCard key={devi.id} devi={devi} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Reusable sacred Devi card component
const DeviCard: React.FC<{ devi: Devi }> = ({ devi }) => {
  return (
    <Link
      to={`/devi/${devi.id}`}
      className="group rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-sacred-glow vedic-card vedic-shimmer"
    >
      {/* Image Area with authentic or Sacred Om fallback */}
      <div className="p-3 pb-0">
        <div className="rounded-lg overflow-hidden border border-sacred-borderGold/20">
          <DeviImage
            imagePath={devi.imagePath || devi.imageAssets?.[0]?.imagePath}
            altText={devi.primaryName}
            deviName={devi.primaryName}
            deviId={devi.id}
            sanskritName={devi.sanskritName}
            fallbackType={devi.imageAssets?.[0]?.fallbackType || 'verified'}
            size="sm"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Classification & Tradition Badges */}
          <div className="flex flex-wrap gap-1 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-sacred-maroon/60 border border-sacred-gold/30 text-sacred-goldLight">
              {devi.classification[0]}
            </span>
            {devi.traditions?.[0] && (
              <span className="px-2 py-0.5 rounded text-[10px] bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted">
                {devi.traditions[0]}
              </span>
            )}
          </div>

          <h3 className="font-cinzel text-base sm:text-lg font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
            {devi.primaryName}
          </h3>
          <div className="font-devanagari text-xs text-sacred-goldDark">
            {devi.sanskritName}
            {devi.odiaName && (
              <span className="font-odia ml-1.5 opacity-80">({devi.odiaName})</span>
            )}
          </div>

          <p className="text-xs text-sacred-ivoryDim font-cormorant text-base line-clamp-3 leading-relaxed mt-2">
            {devi.shortIntro}
          </p>
        </div>

        <div className="pt-3 border-t border-sacred-border/60 flex items-center justify-between text-xs text-sacred-goldLight font-medium group-hover:text-sacred-gold">
          <span>Open Sacred Profile</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
