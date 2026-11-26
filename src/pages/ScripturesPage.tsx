import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { scriptures } from '../data/scriptures';
import { allDevis } from '../data';
import { BookOpen, Search, Copy, Check, ChevronRight, Layers, Sparkles, ExternalLink } from 'lucide-react';

export const ScripturesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const targetId = searchParams.get('id') || (location.hash ? location.hash.replace('#', '') : null);

  useEffect(() => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [targetId]);

  const categoriesList = ['All', 'Puranic', 'Tantric & Agamic', 'Devotional & Stotras', 'Kashmir Shaivism & Philosophical'];

  const filteredScriptures = scriptures.filter(s => {
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.sanskritTitle.toLowerCase().includes(q) ||
      s.subject.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">Shakta Scriptural Library</span>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <BookOpen className="w-3.5 h-3.5 text-sacred-gold" />
          <span>शाक्त शास्त्र भाण्डारम् — Classical Textual Repository</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
          Shakta Scriptural Library
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed max-w-4xl">
          An authentic, categorized digital library of primary Sanskrit texts, Puranas, Agamas, Tantras, Stotras, and Kashmir Shaivism treatises. No fabricated verses; only verified traditional editions and scholastic citations.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="p-4 sm:p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-sacred-gold absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search across scriptures by title, author, subject, or philosophical theme..."
            className="w-full bg-sacred-dark border border-sacred-borderGold/40 rounded-lg pl-12 pr-4 py-2.5 text-sm text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-sacred-gold text-sacred-dark font-bold shadow-sacred-glow'
                  : 'bg-sacred-dark border border-sacred-border text-sacred-ivoryDim hover:border-sacred-gold/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Scripture Jump Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-sacred-borderGold/20 text-xs">
          <span className="text-[11px] uppercase tracking-wider text-sacred-goldDark font-semibold mr-1">
            Jump to Text:
          </span>
          {scriptures.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(s.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-all ${
                targetId === s.id
                  ? 'bg-sacred-maroon border border-sacred-gold text-sacred-goldLight font-bold shadow-sacred-glow'
                  : 'bg-sacred-dark/80 border border-sacred-border/60 text-sacred-ivoryDim hover:text-sacred-gold hover:border-sacred-gold/50'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
            </a>
          ))}
        </div>
      </div>

      {/* Scriptures List */}
      <div className="space-y-8">
        {filteredScriptures.map((item) => {
          const isTarget = targetId === item.id;
          return (
            <div
              key={item.id}
              id={item.id}
              className={`p-6 sm:p-8 rounded-2xl bg-sacred-surface space-y-5 transition-all scroll-mt-24 sacred-isolated-card vedic-card vedic-shimmer ${
                isTarget
                  ? 'border-2 border-sacred-gold shadow-[0_0_35px_rgba(212,175,55,0.35)] ring-1 ring-sacred-goldLight/50'
                  : 'border border-sacred-borderGold/40 shadow-sacred-glow'
              }`}
            >
              {isTarget && (
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/90 border border-sacred-gold text-sacred-goldLight text-xs font-bold shadow-sacred-glow animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 text-sacred-gold" />
                  <span>Featured Scripture Focus</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-sacred-borderGold/30 pb-4 gap-3">
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-sacred-maroon border border-sacred-gold/40 text-sacred-goldLight font-bold uppercase">
                    {item.category}
                  </span>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-sacred-ivory mt-2">
                    {item.title}
                  </h2>
                  <div className="font-devanagari text-lg text-sacred-goldLight font-semibold">
                    {item.sanskritTitle}
                  </div>
                </div>

              <div className="text-xs text-sacred-ivoryMuted space-y-1 md:text-right">
                <div><strong className="text-sacred-goldDark">Attribution:</strong> {item.authorOrAttribution}</div>
                <div><strong className="text-sacred-goldDark">Period:</strong> {item.approximatePeriod}</div>
                <div><strong className="text-sacred-goldDark">Section:</strong> {item.sectionInfo}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
              {item.summary}
            </p>

            {/* Key Sanskrit Excerpts */}
            {item.excerpts && item.excerpts.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="font-cinzel text-sm font-bold text-sacred-gold uppercase tracking-wider">
                  Key Scriptural Excerpts & Verses
                </h3>
                <div className="space-y-4">
                  {item.excerpts.map((exc, idx) => {
                    const excId = `${item.id}-exc-${idx}`;
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-xl bg-sacred-dark/90 border border-sacred-borderGold/30 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-cinzel text-xs font-bold text-sacred-goldLight">
                            {exc.title}
                          </span>
                          <button
                            onClick={() => handleCopy(`${exc.sanskrit}\n\n${exc.transliteration}\n\nTranslation: ${exc.translation}`, excId)}
                            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-sacred-surface border border-sacred-border hover:border-sacred-gold text-sacred-ivoryDim hover:text-sacred-gold text-xs transition-all"
                            title="Copy Sanskrit and translation"
                          >
                            {copiedId === excId ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Sanskrit */}
                        <div className="p-3.5 rounded-lg bg-sacred-surface text-center font-devanagari text-base sm:text-lg font-bold text-sacred-goldLight whitespace-pre-wrap leading-relaxed border border-sacred-borderGold/20">
                          {exc.sanskrit}
                        </div>

                        {/* Transliteration */}
                        <div className="text-xs text-sacred-ivoryMuted italic font-serif leading-relaxed px-1">
                          {exc.transliteration}
                        </div>

                        {/* Translation */}
                        <p className="text-xs text-sacred-ivory font-cormorant text-base leading-relaxed bg-sacred-surface/40 p-2.5 rounded">
                          {exc.translation}
                        </p>

                        <div className="text-[10px] text-sacred-goldDark/70 text-right">
                          Context: {exc.context}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Associated Devis */}
            {item.relevantDevis && item.relevantDevis.length > 0 && (
              <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[11px] font-semibold text-sacred-goldDark">Associated Sacred Devis:</span>
                {item.relevantDevis.map((dId) => {
                  const devi = allDevis.find((d) => d.id === dId);
                  if (!devi) return null;
                  return (
                    <Link
                      key={dId}
                      to={`/devi/${dId}`}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-sacred-maroon/60 border border-sacred-borderGold/40 text-[11px] text-sacred-goldLight hover:border-sacred-gold hover:bg-sacred-maroon transition-all"
                    >
                      <span>{devi.primaryName}</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-1 opacity-70" />
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Recognized Editions */}
            <div className="pt-2 border-t border-sacred-border/60 flex flex-wrap items-center justify-between text-[11px] text-sacred-ivoryMuted gap-2">
              <span className="font-medium text-sacred-goldDark">Standard Academic & Traditional Editions:</span>
              <span>{item.sourcesAndEditions.join(' • ')}</span>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
