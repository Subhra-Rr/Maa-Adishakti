import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { allDevis, categories } from '../data';
import { DeviImage } from '../components/DeviImage';
import { Search, Filter, X, ArrowUpDown, ChevronRight, Layers } from 'lucide-react';

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
  }, [queryParam]);

  // Unique list of traditions and acharas
  const allTraditions = useMemo(() => {
    const set = new Set<string>();
    allDevis.forEach(d => d.traditions?.forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const allAcharas = ['Dakshinachara', 'Vamachara', 'Samayachara', 'Kaulachara'];

  // Filtered Devis
  const filteredDevis = useMemo(() => {
    return allDevis.filter(devi => {
      // Search text match
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        devi.primaryName.toLowerCase().includes(q) ||
        devi.sanskritName.toLowerCase().includes(q) ||
        (devi.odiaName && devi.odiaName.toLowerCase().includes(q)) ||
        devi.alternateNames.some(a => a.toLowerCase().includes(q)) ||
        devi.shortIntro.toLowerCase().includes(q) ||
        devi.philosophicalSignificance.toLowerCase().includes(q);

      // Category match
      const matchesCategory =
        selectedCategory === 'All' ||
        devi.classification.some(c =>
          c.toLowerCase().includes(selectedCategory.toLowerCase())
        );

      // Tradition match
      const matchesTradition =
        selectedTradition === 'All' ||
        devi.traditions.some(t =>
          t.toLowerCase().includes(selectedTradition.toLowerCase())
        );

      // Achara match
      const matchesAchara =
        selectedAchara === 'All' ||
        devi.acharas.includes(selectedAchara as any);

      return matchesSearch && matchesCategory && matchesTradition && matchesAchara;
    });
  }, [searchTerm, selectedCategory, selectedTradition, selectedAchara]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTradition('All');
    setSelectedAchara('All');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <span>॥ सर्वदेवीमण्डलम् ॥ Complete Devi Knowledge Directory</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text">
          Complete Devi Directory
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
          Search and filter every recognized manifestation of Adi Parashakti across all Tantric traditions, Puranas, Kulas, and regional lineages.
        </p>
      </div>

      {/* Control Panel: Search & Filters */}
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
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
          {/* Category Filter */}
          <div>
            <label className="block text-sacred-goldLight mb-1 font-medium">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory rounded-lg p-2.5 focus:outline-none focus:border-sacred-gold"
            >
              <option value="All">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} ({c.sanskritName})
                </option>
              ))}
            </select>
          </div>

          {/* Tradition Filter */}
          <div>
            <label className="block text-sacred-goldLight mb-1 font-medium">Tradition / Kula</label>
            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory rounded-lg p-2.5 focus:outline-none focus:border-sacred-gold"
            >
              <option value="All">All Traditions</option>
              {allTraditions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Achara Filter */}
          <div>
            <label className="block text-sacred-goldLight mb-1 font-medium">Achara Mode</label>
            <select
              value={selectedAchara}
              onChange={(e) => setSelectedAchara(e.target.value)}
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory rounded-lg p-2.5 focus:outline-none focus:border-sacred-gold"
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
              className="w-full p-2.5 rounded-lg bg-sacred-dark border border-sacred-border hover:border-sacred-gold/60 text-sacred-ivoryDim hover:text-sacred-gold transition-all text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Active Results Summary */}
        <div className="pt-2 flex items-center justify-between text-xs text-sacred-ivoryMuted border-t border-sacred-border/60">
          <span>
            Displaying <strong className="text-sacred-goldLight">{filteredDevis.length}</strong> of{' '}
            <strong className="text-sacred-goldLight">{allDevis.length}</strong> Devis
          </span>
          {(searchTerm || selectedCategory !== 'All' || selectedTradition !== 'All' || selectedAchara !== 'All') && (
            <span className="text-sacred-goldDark">Filters Active</span>
          )}
        </div>
      </div>

      {/* Devi Cards Grid */}
      {filteredDevis.length === 0 ? (
        <div className="text-center py-20 bg-sacred-surface rounded-xl border border-sacred-borderGold/30 p-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-sacred-maroon border border-sacred-borderGold mx-auto flex items-center justify-center font-devanagari text-xl text-sacred-gold">
            ॐ
          </div>
          <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">No Matching Devis Found</h3>
          <p className="text-xs text-sacred-ivoryMuted max-w-md mx-auto">
            Try adjusting your search keywords or resetting your classification and tradition filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-sacred-maroon border border-sacred-gold text-sacred-goldLight rounded-lg text-xs font-semibold"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDevis.map((devi) => (
            <Link
              key={devi.id}
              to={`/devi/${devi.id}`}
              className="group rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-sacred-glow"
            >
              {/* Image Area with authentic or Sacred Om fallback */}
              <div className="p-3 pb-0">
                <div className="rounded-lg overflow-hidden border border-sacred-borderGold/20">
                  <DeviImage
                    imagePath={devi.imagePath || devi.imageAssets[0]?.imagePath}
                    altText={devi.primaryName}
                    deviName={devi.primaryName}
                    deviId={devi.id}
                    sanskritName={devi.sanskritName}
                    fallbackType={devi.imageAssets[0]?.fallbackType || 'verified'}
                    size="sm"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-sacred-maroon/60 border border-sacred-gold/30 text-sacred-goldLight">
                      {devi.classification[0]}
                    </span>
                    {devi.traditions[0] && (
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
          ))}
        </div>
      )}
    </div>
  );
};
