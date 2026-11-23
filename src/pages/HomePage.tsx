import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Flame, Shield, Compass, BookOpen, Crown, CircleDot,
  Moon, Key, Sparkles, ChevronRight, ArrowRight, Eye, Zap, Layers, MapPin
} from 'lucide-react';
import { categories, allDevis, shaktiPeethas, odishaShaktaHeritage, scriptures } from '../data';
import { InteractiveSriChakra } from '../components/InteractiveSriChakra';
import { InteractivePeethaMap } from '../components/InteractivePeethaMap';
import { CategoryRelationshipExplorer } from '../components/CategoryRelationshipExplorer';
import { DeviImage } from '../components/DeviImage';

interface HomePageProps {
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSearch }) => {
  const [heroSearchInput, setHeroSearchInput] = useState('');
  const navigate = useNavigate();

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      navigate(`/directory?q=${encodeURIComponent(heroSearchInput.trim())}`);
    } else {
      onOpenSearch();
    }
  };

  // Featured Mahavidyas
  const featuredMahavidyas = allDevis.filter(d =>
    ['kali', 'tara', 'tripura-sundari', 'bhuvaneshvari', 'chhinnamasta', 'bhairavi', 'dhumavati', 'bagalamukhi', 'matangi', 'kamalatmika'].includes(d.id)
  );

  // Featured Nava Durgas
  const featuredNavaDurgas = allDevis.filter(d =>
    ['shailaputri', 'brahmacharini', 'chandraghanta', 'kushmanda', 'skandamata', 'katyayani', 'kalaratri', 'mahagauri', 'siddhidatri'].includes(d.id)
  );

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* ========================================================
          1. GRAND HERO SECTION
      ======================================================== */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 overflow-hidden bg-sacred-radial">
        {/* Subtle animated sacred aura rings */}
        <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-sacred-gold/15 animate-[spin_240s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full border border-sacred-crimson/20 animate-[spin_180s_linear_infinite_reverse] pointer-events-none" />
        <div className="absolute w-80 h-80 rounded-full bg-sacred-crimson/15 blur-3xl pointer-events-none" />
        <div className="absolute w-60 h-60 rounded-full bg-sacred-gold/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Sanskrit Identity Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-sacred-maroonDark/90 border border-sacred-borderGold/60 shadow-sacred-glow">
            <span className="font-devanagari text-sacred-gold font-bold">ॐ</span>
            <span className="font-devanagari text-xs sm:text-sm font-semibold tracking-wider text-sacred-goldLight">
              श्री आदिपराशक्ति तत्त्वज्ञानकोशः
            </span>
          </div>

          {/* Master Headings */}
          <div className="space-y-2">
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider gold-gradient-text drop-shadow-[0_0_35px_rgba(212,175,55,0.3)]">
              SHAKTA TATTVA
            </h1>
            <p className="font-cinzel text-base sm:text-xl md:text-2xl text-sacred-ivory tracking-widest uppercase font-semibold">
              The Divine Encyclopedia of Adi Parashakti
            </p>
          </div>

          <p className="font-cormorant text-lg sm:text-2xl text-sacred-ivoryDim max-w-2xl mx-auto leading-relaxed">
            The comprehensive digital repository of the Divine Feminine in Shakta scriptures, Puranas, Agamas, Tantras, Sri Vidya, and regional traditions.
          </p>

          {/* Main Search Bar */}
          <form onSubmit={handleHeroSearch} className="max-w-2xl mx-auto pt-2">
            <div className="relative flex items-center shadow-sacred-glow rounded-xl overflow-hidden bg-sacred-dark/95 border-2 border-sacred-borderGold/60 focus-within:border-sacred-gold transition-all">
              <Search className="w-5 h-5 text-sacred-gold ml-4 shrink-0" />
              <input
                type="text"
                value={heroSearchInput}
                onChange={(e) => setHeroSearchInput(e.target.value)}
                placeholder="Search across Devis, Sanskrit names, Mantras, Peethas, Scriptures..."
                className="w-full bg-transparent px-4 py-3.5 text-sm sm:text-base text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-sacred-gold to-sacred-goldDark text-sacred-dark font-bold px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider hover:brightness-110 transition-all shrink-0"
              >
                Explore
              </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-3 text-xs text-sacred-ivoryMuted">
              <span>Quick leads:</span>
              <button type="button" onClick={() => navigate('/devi/kali')} className="hover:text-sacred-gold underline">Kali</button>
              <span>•</span>
              <button type="button" onClick={() => navigate('/devi/tripura-sundari')} className="hover:text-sacred-gold underline">Tripura Sundari</button>
              <span>•</span>
              <button type="button" onClick={() => navigate('/pratyangira')} className="text-amber-300 hover:text-white underline font-medium">Maa Pratyangira</button>
              <span>•</span>
              <button type="button" onClick={() => navigate('/odisha-heritage')} className="text-amber-300 hover:text-white underline font-medium">Odisha Shakta</button>
              <span>•</span>
              <button type="button" onClick={() => navigate('/categories/chausath-yoginis')} className="hover:text-sacred-gold underline">64 Yoginis</button>
            </div>
          </form>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link
              to="/directory"
              className="px-6 py-3 rounded-lg bg-sacred-maroon border border-sacred-borderGold hover:border-sacred-gold text-sacred-goldLight font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sacred-glow transition-all flex items-center space-x-2"
            >
              <span>Explore All Devis ({allDevis.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/categories"
              className="px-6 py-3 rounded-lg bg-sacred-surface border border-sacred-borderGold/50 hover:border-sacred-gold text-sacred-ivory font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
            >
              Browse Major Classifications
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 overflow-x-hidden min-w-0">
        {/* ========================================================
            2. MAJOR CLASSIFICATIONS DIRECTORY OVERVIEW
        ======================================================== */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-sacred-borderGold/30 pb-4 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-sacred-gold uppercase tracking-wider">
                Classification Directory
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text mt-1">
                Sacred Categories of Maa Bhagwati
              </h2>
            </div>
            <Link
              to="/categories"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-sacred-goldLight hover:text-sacred-gold font-medium"
            >
              <span>View All 16 Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full min-w-0">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.id}
                to={`/categories/${cat.slug}`}
                className="group p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold/80 transition-all duration-300 hover:shadow-sacred-glow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="font-devanagari text-xs text-sacred-gold font-semibold">
                      {cat.sanskritName}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted">
                      {cat.deviCount} Entries
                    </span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-sacred-ivoryDim font-cormorant text-base line-clamp-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-sacred-border/60 flex items-center justify-between text-xs text-sacred-goldLight group-hover:text-sacred-gold">
                  <span>Explore category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ========================================================
            3. DEDICATED PROMINENT FEATURE: MAA PRATYANGIRA
        ======================================================== */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1d0508] via-[#100709] to-[#080506] border-2 border-amber-600/60 p-6 sm:p-10 shadow-maroon-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 overflow-visible">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-xs font-devanagari text-amber-300 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="leading-relaxed">महाविमर्श विभाग — Dedicated Research Center</span>
              </div>
              <h2 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-sacred-goldLight drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] leading-[1.3] pt-3 pb-2 tracking-wide overflow-visible">
                श्री प्रत्यङ्गिरा देवी
              </h2>
              <div className="font-cinzel text-xl text-sacred-ivory font-semibold">
                Maa Bhagwati Pratyangira Research Center
              </div>
              <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
                A dedicated, deeply researched section on the supreme lion-faced mother (Simhamukhi) and Atharvana Bhadrakali. Documenting her authentic theology, distinction from Matrika Narasimhi, researched Tantric classifications table, temple traditions of Ayyavadi and Sholinganallur, and public devotional stotras.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/pratyangira"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>Enter Pratyangira Research Center</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/devi/pratyangira"
                  className="px-5 py-3 rounded-lg bg-sacred-surface border border-sacred-borderGold text-sacred-goldLight font-medium text-xs sm:text-sm uppercase tracking-wider hover:border-sacred-gold transition-all"
                >
                  View Devi Profile
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-xl overflow-hidden border border-amber-600/40 bg-sacred-dark p-2 shadow-sacred-glow">
                <DeviImage
                  imagePath="/images/devis/pratyangira.jpg"
                  altText="Sacred representation of Maa Pratyangira"
                  deviName="Maa Pratyangira"
                  sanskritName="श्री प्रत्यङ्गिरा देवी"
                  fallbackType="gupta_svarupa"
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. DAS MAHAVIDYA SHOWCASE (10 WISDOM GODDESSES)
        ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-sacred-borderGold/30 pb-4 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-sacred-gold uppercase tracking-wider">
                दशमहाविद्या मण्डलम्
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text mt-1">
                Das Mahavidya — The Ten Transcendent Wisdoms
              </h2>
            </div>
            <Link
              to="/categories/das-mahavidya"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-sacred-goldLight hover:text-sacred-gold font-medium"
            >
              <span>Explore all 10 Mahavidyas</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full min-w-0">
            {featuredMahavidyas.map((devi) => (
              <Link
                key={devi.id}
                to={`/devi/${devi.id}`}
                className="group rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all overflow-hidden p-3 flex flex-col justify-between hover:shadow-sacred-glow"
              >
                <div className="w-full mb-3 rounded-lg overflow-hidden border border-sacred-borderGold/20">
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
                <div className="text-center">
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                    {devi.primaryName}
                  </h3>
                  <div className="font-devanagari text-xs text-sacred-goldDark mt-0.5">
                    {devi.sanskritName}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. SPECIAL ODISHA SHAKTA PARAMPARA ARCHIVE
        ======================================================== */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d090a] via-[#1a080d] to-[#070506] border-2 border-sacred-borderGold/70 p-6 sm:p-10 shadow-sacred-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
                <Compass className="w-3.5 h-3.5 text-sacred-gold" />
                <span>ଓଡ଼ିଶା ଶାକ୍ତ ପରମ୍ପରା — Odisha Shakta Heritage</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold gold-gradient-text">
                Odisha Shakta Parampara Archive
              </h2>
              <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
                Special comprehensive documentation of Odisha’s centuries-old Shakta culture: Maa Vimala of Puri (Pada Peetha), Maa Tara Tarini (Stana Peetha), Maa Biraja of Jajpur (Nabhi Gaya), Maa Samaleswari, Maa Mangala of Kakatpur, Maa Sarala of Jhankad, and the architectural marvels of Hirapur and Ranipur-Jharial circular 64 Yogini temples.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/odisha-heritage"
                  className="px-6 py-3 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sacred-glow transition-all flex items-center space-x-2"
                >
                  <span>Explore Odisha Shakta Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/devi/vimala-puri"
                  className="px-5 py-3 rounded-lg bg-sacred-surface border border-sacred-borderGold/60 text-sacred-ivory font-medium text-xs sm:text-sm uppercase tracking-wider hover:border-sacred-gold transition-all"
                >
                  Maa Vimala (Puri)
                </Link>
                <Link
                  to="/devi/tara-tarini"
                  className="px-5 py-3 rounded-lg bg-sacred-surface border border-sacred-borderGold/60 text-sacred-ivory font-medium text-xs sm:text-sm uppercase tracking-wider hover:border-sacred-gold transition-all"
                >
                  Maa Tara Tarini
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {odishaShaktaHeritage.slice(0, 4).map((temple) => {
                const imgMap: Record<string, string> = {
                  'vimala-puri': '/images/devis/vimala.jpg',
                  'tara-tarini': '/images/devis/tara_tarini.jpg',
                  'biraja-jajpur': '/images/devis/biraja.jpg',
                  'samaleswari': '/images/devis/samaleswari.jpg',
                };
                return (
                  <Link
                    key={temple.id}
                    to={`/devi/${temple.id}`}
                    className="p-3 rounded-lg bg-sacred-surface border border-sacred-borderGold/30 text-center space-y-1.5 hover:border-sacred-gold transition-all block group"
                  >
                    {imgMap[temple.id] && (
                      <div className="w-full h-24 rounded overflow-hidden border border-sacred-borderGold/30 mb-1 bg-sacred-dark">
                        <img
                          src={imgMap[temple.id]}
                          alt={temple.deviName}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <div className="font-odia text-xs text-sacred-goldLight font-semibold">
                      {temple.odiaName}
                    </div>
                    <div className="font-cinzel text-xs font-bold text-sacred-ivory">
                      {temple.deviName}
                    </div>
                    <div className="text-[10px] text-sacred-ivoryMuted">
                      {temple.location}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            6. NAVA DURGA SHOWCASE
        ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-sacred-borderGold/30 pb-4 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-sacred-gold uppercase tracking-wider">
                नवदुर्गा मण्डलम्
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text mt-1">
                Nava Durga — Nine Cosmic Manifestations
              </h2>
            </div>
            <Link
              to="/categories/nava-durga"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-sacred-goldLight hover:text-sacred-gold font-medium"
            >
              <span>Explore all 9 Nava Durgas</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 w-full min-w-0">
            {featuredNavaDurgas.map((devi, idx) => (
              <Link
                key={devi.id}
                to={`/devi/${devi.id}`}
                className="group rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all overflow-hidden p-3 flex flex-col justify-between hover:shadow-sacred-glow"
              >
                <div className="text-[10px] font-mono text-sacred-gold font-bold mb-1">
                  DAY #{idx + 1}
                </div>
                <div className="w-full mb-2.5 rounded-lg overflow-hidden border border-sacred-borderGold/20">
                  <DeviImage
                    imagePath={devi.imagePath || devi.imageAssets[0]?.imagePath}
                    altText={devi.primaryName}
                    deviName={devi.primaryName}
                    sanskritName={devi.sanskritName}
                    fallbackType="verified"
                    size="sm"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-cinzel text-xs sm:text-sm font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                    {devi.primaryName}
                  </h3>
                  <div className="font-devanagari text-[11px] text-sacred-goldDark">
                    {devi.sanskritName}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ========================================================
            7. INTERACTIVE SRI CHAKRA EXPLORER
        ======================================================== */}
        <section className="space-y-4">
          <InteractiveSriChakra />
        </section>

        {/* ========================================================
            8. INTERACTIVE SHAKTI PEETHA ATLAS
        ======================================================== */}
        <section className="space-y-4">
          <InteractivePeethaMap />
        </section>

        {/* ========================================================
            9. INTERACTIVE KNOWLEDGE RELATIONSHIP EXPLORER
        ======================================================== */}
        <section className="space-y-4">
          <CategoryRelationshipExplorer />
        </section>

        {/* ========================================================
            10. SCRIPTURAL LIBRARY & ACHARA TEASER
        ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scriptural Library Teaser */}
          <div className="p-6 sm:p-8 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4 shadow-sacred-glow">
            <div className="flex items-center space-x-2 text-xs font-devanagari text-sacred-goldLight">
              <BookOpen className="w-4 h-4 text-sacred-gold" />
              <span>शास्त्र भाण्डारम् — Scriptural Library</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
              Authentic Shakta Scriptures
            </h3>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Searchable primary Sanskrit sources: Devi Mahatmya (Durga Saptashati), Devi Bhagavata Purana, Lalita Sahasranama, Saundarya Lahari, Tantraloka, and Sharadatilaka Tantra with verified transliterations, English commentaries, and chapter references.
            </p>
            <div className="pt-2">
              <Link
                to="/scriptures"
                className="inline-flex items-center space-x-2 text-xs uppercase font-bold text-sacred-goldLight hover:text-sacred-gold tracking-wider"
              >
                <span>Enter Scriptural Library</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Achara & Tantric Traditions Teaser */}
          <div className="p-6 sm:p-8 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4 shadow-sacred-glow">
            <div className="flex items-center space-x-2 text-xs font-devanagari text-sacred-goldLight">
              <Layers className="w-4 h-4 text-sacred-gold" />
              <span>आचार दर्शनम् — The Four Acharas</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">
              Achara and Worship Traditions
            </h3>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Explore the four documented approaches of Shakta Upasana: Dakshinachara (right-hand devotional), Vamachara (left-hand esoteric), Samayachara (internal Sri Vidya yoga), and Kaulachara. Structured with scriptural comparison tables and non-dogmatic context.
            </p>
            <div className="pt-2">
              <Link
                to="/acharas"
                className="inline-flex items-center space-x-2 text-xs uppercase font-bold text-sacred-goldLight hover:text-sacred-gold tracking-wider"
              >
                <span>Explore Achara Traditions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
