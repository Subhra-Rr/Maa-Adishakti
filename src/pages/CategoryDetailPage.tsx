import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  categories, allDevis, sixtyFourYoginis, shodashaNityas,
  dwadashaKalis, ashtaLakshmiList, navapatrikaList,
  shodashaMatrikasList, chakraYoginis, ashtaVashinis, sixteenNityaKalas
} from '../data';
import { DeviImage } from '../components/DeviImage';
import { SacredOmFallback } from '../components/SacredOmFallback';
import { ArrowLeft, Crown, Sparkles, ChevronRight, Search, BookOpen, Layers } from 'lucide-react';

export const CategoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchFilter, setSearchFilter] = useState('');

  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-cinzel text-2xl font-bold text-sacred-ivory">Category Not Found</h1>
        <p className="text-xs text-sacred-ivoryMuted">The category &ldquo;{slug}&rdquo; does not exist.</p>
        <Link to="/categories" className="text-sacred-gold underline text-xs">
          Return to Categories Directory
        </Link>
      </div>
    );
  }

  // Find standard Devi entries linked to this category
  const linkedDevis = allDevis.filter(devi =>
    devi.classification.some(c =>
      c.toLowerCase().includes(category.name.toLowerCase()) ||
      category.name.toLowerCase().includes(c.toLowerCase()) ||
      c.toLowerCase().includes(category.slug.toLowerCase())
    ) ||
    (category.deviIds && category.deviIds.includes(devi.id))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <Link to="/categories" className="hover:text-sacred-gold">Categories</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">{category.name}</span>
      </div>

      {/* Category Dossier Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-sacred-dark/80 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
            {category.sanskritName}
          </span>
          <span className="text-xs font-mono font-bold text-sacred-goldLight bg-sacred-maroon/80 px-3 py-1 rounded border border-sacred-gold/30">
            {category.deviCount} Documented Manifestations
          </span>
        </div>

        <div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text">
            {category.name}
          </h1>
          <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed mt-2 max-w-4xl">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-sacred-borderGold/30 text-xs">
          <div>
            <span className="text-sacred-goldDark uppercase font-bold block mb-1">Traditional Context</span>
            <p className="text-sacred-ivoryDim">{category.traditionalContext}</p>
          </div>
          <div>
            <span className="text-sacred-goldDark uppercase font-bold block mb-1">Scriptural Foundations</span>
            <div className="flex flex-wrap gap-1.5">
              {category.scripturalFoundations.map((src, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-sacred-ivoryDim">
                  {src}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          SPECIAL DIRECTORY: CHAUSATH YOGINIS (64 INDIVIDUAL ENTRIES)
      ======================================================== */}
      {slug === 'chausath-yoginis' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sacred-borderGold/30 pb-4">
            <div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
                The 64 Yogini Directory (Hirapur Tradition, Odisha)
              </h2>
              <p className="text-xs text-sacred-ivoryMuted">
                All 64 individual Yoginis documented from the 9th-century Hirapur Chausath Yogini Temple epigraphy.
              </p>
            </div>
            {/* Filter Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search within 64 Yoginis..."
                className="w-full bg-sacred-dark border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-1.5 text-xs text-sacred-ivory focus:outline-none focus:border-sacred-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sixtyFourYoginis
              .filter(y =>
                !searchFilter ||
                y.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                y.sanskritName.toLowerCase().includes(searchFilter.toLowerCase()) ||
                y.vahana.toLowerCase().includes(searchFilter.toLowerCase())
              )
              .map((yogini) => (
                <div
                  key={yogini.id}
                  className="p-4 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-full bg-sacred-maroon border border-sacred-borderGold/40 text-[11px] font-mono font-bold text-sacred-goldLight flex items-center justify-center">
                        {yogini.number}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-sacred-goldDark">
                        {yogini.templeSite.split(',')[0]}
                      </span>
                    </div>

                    <div className="w-full h-36 mb-2 rounded-lg overflow-hidden border border-sacred-borderGold/20">
                      <SacredOmFallback
                        deviName={yogini.name}
                        sanskritName={yogini.sanskritName}
                        fallbackType="verified"
                        size="sm"
                      />
                    </div>

                    <h3 className="font-cinzel text-base font-bold text-sacred-ivory">
                      {yogini.name}
                    </h3>
                    <div className="font-devanagari text-xs text-sacred-goldLight">
                      {yogini.sanskritName}
                    </div>

                    <div className="mt-2 text-xs space-y-1">
                      <div className="text-sacred-ivoryDim">
                        <strong className="text-sacred-goldDark">Mount (Vahana):</strong> {yogini.vahana}
                      </div>
                      <div className="text-sacred-ivoryDim line-clamp-2">
                        <strong className="text-sacred-goldDark">Weapons:</strong> {yogini.weapons.join(', ')}
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-sacred-ivoryMuted font-cormorant text-sm leading-relaxed border-t border-sacred-border/60 pt-2">
                    {yogini.significance}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* ========================================================
          SPECIAL DIRECTORY: SHODASHA NITYAS (16 INDIVIDUAL ENTRIES)
      ======================================================== */}
      {slug === 'shodasha-nityas' && (
        <div className="space-y-6">
          <div className="border-b border-sacred-borderGold/30 pb-3">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              The 16 Nitya Devis of Sri Vidya
            </h2>
            <p className="text-xs text-sacred-ivoryMuted">
              Presiding over the sixteen lunar days (Tithis) and the enclosures of the Sri Chakra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shodashaNityas.map((nitya) => (
              <div
                key={nitya.id}
                className="p-4 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-sacred-maroon border border-sacred-gold/40 text-[11px] font-mono font-bold text-sacred-goldLight flex items-center justify-center">
                    {nitya.number}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-sacred-goldLight">
                    {nitya.tithi.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <h3 className="font-cinzel text-base font-bold text-sacred-ivory">
                    {nitya.name}
                  </h3>
                  <div className="font-devanagari text-xs text-sacred-goldDark">
                    {nitya.sanskritName}
                  </div>
                </div>

                <div className="text-xs space-y-1 text-sacred-ivoryDim">
                  <div>
                    <strong className="text-sacred-goldDark text-[10px] block uppercase">Sri Chakra Placement:</strong>
                    <span className="text-[11px]">{nitya.sriChakraPlacement}</span>
                  </div>
                  <div>
                    <strong className="text-sacred-goldDark text-[10px] block uppercase">Attributes:</strong>
                    <span className="text-[11px] line-clamp-2">{nitya.mudraOrAttribute}</span>
                  </div>
                </div>

                <p className="text-xs text-sacred-ivoryMuted font-cormorant text-sm leading-relaxed border-t border-sacred-border/60 pt-2">
                  {nitya.philosophicalMeaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          SPECIAL DIRECTORY: DWADASHA KALIS (12 INDIVIDUAL ENTRIES)
      ======================================================== */}
      {slug === 'dwadasha-kalis' && (
        <div className="space-y-6">
          <div className="border-b border-sacred-borderGold/30 pb-3">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              The Twelve Kalis of Kashmiri Krama Philosophy
            </h2>
            <p className="text-xs text-sacred-ivoryMuted">
              Documenting the continuous cycles of projection, sustenance, withdrawal, and the ineffable ground of consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dwadashaKalis.map((kali) => (
              <div
                key={kali.id}
                className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-sacred-maroon border border-sacred-gold/40 text-[11px] font-mono font-bold text-sacred-goldLight flex items-center justify-center">
                    {kali.number}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-sacred-goldLight">
                    {kali.kramaFunction}
                  </span>
                </div>

                <div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-sacred-ivory">
                    {kali.name}
                  </h3>
                  <div className="font-devanagari text-xs text-sacred-goldDark">
                    {kali.sanskritName}
                  </div>
                </div>

                <div className="text-xs text-sacred-goldLight bg-sacred-dark/80 p-2 rounded border border-sacred-border">
                  <strong className="block text-[10px] uppercase text-sacred-goldDark">Epistemological Phase:</strong>
                  {kali.phaseOfConsciousness}
                </div>

                <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                  {kali.philosophicalSignificance}
                </p>

                <div className="text-[10px] text-sacred-ivoryMuted border-t border-sacred-border/60 pt-2">
                  Sources: {kali.scripturalSource}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          SPECIAL DIRECTORY: GUPTA SHAKTI (CHAKRA YOGINIS & VASHINIS)
      ======================================================== */}
      {slug === 'gupta-shakti' && (
        <div className="space-y-12">
          {/* 7 Chakra Yoginis */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
              The Seven Chakra Yoginis (Kundalini Subtle Anatomy)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {chakraYoginis.map((cy) => (
                <div
                  key={cy.id}
                  className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sacred-gold">{cy.sanskritChakra}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-maroon border border-sacred-gold/30 text-sacred-goldLight">
                      {cy.dhatuGoverned}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">
                      {cy.yoginiName} ({cy.sanskritName})
                    </h3>
                    <div className="text-xs text-sacred-ivoryMuted">{cy.chakra}</div>
                  </div>

                  <div className="text-xs space-y-1.5 text-sacred-ivoryDim bg-sacred-dark/60 p-2.5 rounded border border-sacred-border">
                    <div><strong className="text-sacred-goldDark">Complexion:</strong> {cy.colorAndComplexion}</div>
                    <div><strong className="text-sacred-goldDark">Weapons:</strong> {cy.weapons.join(', ')}</div>
                  </div>

                  <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                    {cy.esotericSignificance}
                  </p>

                  <div className="text-[10px] text-sacred-ivoryMuted border-t border-sacred-border/60 pt-2">
                    Source: {cy.sourceText}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Ashta Vashinis */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
              Ashta Vashinis — The Eight Speech Shaktis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ashtaVashinis.map((v) => (
                <div key={v.id} className="p-4 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-sacred-gold">#{v.number}</span>
                    <span className="text-[10px] text-sacred-ivoryMuted">Vak-Devata</span>
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-sacred-ivory">{v.name}</h3>
                  <div className="font-devanagari text-xs text-sacred-goldDark">{v.sanskritName}</div>
                  <p className="text-xs text-sacred-ivoryDim font-cormorant text-sm leading-relaxed">{v.significance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 16 Nitya Kalas */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
              Sixteen Nitya Kalas & Sanskrit Vowels
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center">
              {sixteenNityaKalas.map((k) => (
                <div key={k.number} className="p-2.5 rounded-lg bg-sacred-dark border border-sacred-borderGold/20 space-y-1">
                  <div className="font-devanagari text-base font-bold text-sacred-goldLight">{k.vowel}</div>
                  <div className="font-cinzel text-xs font-semibold text-sacred-ivory">{k.name}</div>
                  <div className="text-[10px] text-sacred-ivoryMuted">{k.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          SPECIAL DIRECTORY: ASHTA LAKSHMI (8 FORMS)
      ======================================================== */}
      {slug === 'ashta-lakshmi' && (
        <div className="space-y-6">
          <div className="border-b border-sacred-borderGold/30 pb-3">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Ashta Lakshmi — The Eight Sovereign Auspicious Forms
            </h2>
            <p className="text-xs text-sacred-ivoryMuted">
              Presiding over spiritual liberation, material wealth, grain, valor, lineage, and victory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ashtaLakshmiList.map((lakshmi) => (
              <div
                key={lakshmi.id}
                className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all space-y-3"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono text-sacred-gold block">{lakshmi.formType}</span>
                  <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">{lakshmi.name}</h3>
                  <div className="font-devanagari text-xs text-sacred-goldDark">{lakshmi.sanskritName}</div>
                </div>

                <div className="text-xs space-y-1 text-sacred-ivoryDim">
                  <div><strong className="text-sacred-goldDark">Attributes:</strong> {lakshmi.mudraAndAttributes}</div>
                  <div><strong className="text-sacred-goldDark">Blessing:</strong> {lakshmi.blessingBestowed}</div>
                </div>

                <p className="text-xs text-sacred-ivoryMuted font-cormorant text-base leading-relaxed border-t border-sacred-border/60 pt-2">
                  {lakshmi.significance}
                </p>

                <div className="p-2 rounded bg-sacred-dark text-[10px] font-devanagari text-sacred-goldLight/80 text-center">
                  {lakshmi.sloka}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          SPECIAL DIRECTORY: NAVAPATRIKA (9 SACRED PLANTS)
      ======================================================== */}
      {slug === 'navapatrika' && (
        <div className="space-y-6">
          <div className="border-b border-sacred-borderGold/30 pb-3">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Navapatrika Devis — Bengal & Odisha Durga Puja Tradition
            </h2>
            <p className="text-xs text-sacred-ivoryMuted">
              The nine sacred plants personifying nine distinct forms of Durga tied into Kola Bou on Saptami dawn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {navapatrikaList.map((np) => (
              <div
                key={np.id}
                className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-sacred-maroon border border-sacred-gold/40 text-[11px] font-mono font-bold text-sacred-goldLight flex items-center justify-center">
                    {np.number}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-sacred-goldDark font-mono italic">
                    {np.botanicalName}
                  </span>
                </div>

                <div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-sacred-ivory">{np.deviName}</h3>
                  <div className="font-devanagari text-xs text-sacred-goldLight">{np.sanskritName}</div>
                </div>

                <div className="text-xs text-sacred-goldLight bg-sacred-dark/80 p-2.5 rounded border border-sacred-border">
                  <strong className="block text-[10px] uppercase text-sacred-goldDark">Sacred Plant Association:</strong>
                  {np.plantAssociation}
                </div>

                <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                  {np.ritualSignificance}
                </p>

                <div className="text-[11px] text-sacred-ivoryMuted border-t border-sacred-border/60 pt-2">
                  <strong className="text-sacred-goldDark">Cosmic Symbolism:</strong> {np.symbolism}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          SPECIAL DIRECTORY: SHODASHA MATRIKAS (16 RITUAL MATRIKAS)
      ======================================================== */}
      {slug === 'shodasha-matrikas' && (
        <div className="space-y-6">
          <div className="border-b border-sacred-borderGold/30 pb-3">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Shodasha Matrikas — The Sixteen Ritual Samskara Mothers
            </h2>
            <p className="text-xs text-sacred-ivoryMuted">
              Invoked in Vedic Samskaras, Yajnas, and Shanti Karmas; completely distinct from Sapta/Ashta Matrikas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {shodashaMatrikasList.map((sm) => (
              <div
                key={sm.number}
                className="p-3 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 text-center space-y-1.5"
              >
                <div className="text-[10px] font-mono text-sacred-gold">#{sm.number}</div>
                <div className="font-devanagari text-base font-bold text-sacred-goldLight">{sm.sanskrit}</div>
                <div className="font-cinzel text-xs font-bold text-sacred-ivory">{sm.name}</div>
                <p className="text-[10px] text-sacred-ivoryMuted leading-tight pt-1 border-t border-sacred-border/40">
                  {sm.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          LINKED INDIVIDUAL DEVI PROFILES (IF AVAILABLE)
      ======================================================== */}
      {linkedDevis.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-sacred-borderGold/30">
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
            Dedicated Devi Profiles in this Category ({linkedDevis.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {linkedDevis.map((devi) => (
              <Link
                key={devi.id}
                to={`/devi/${devi.id}`}
                className="group rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-sacred-glow p-3.5"
              >
                <div className="w-full mb-3 rounded-lg overflow-hidden border border-sacred-borderGold/20">
                  <DeviImage
                    altText={devi.primaryName}
                    deviName={devi.primaryName}
                    sanskritName={devi.sanskritName}
                    fallbackType={devi.imageAssets[0]?.fallbackType || 'verified'}
                    size="sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-cinzel text-base font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                    {devi.primaryName}
                  </h3>
                  <div className="font-devanagari text-xs text-sacred-goldDark">
                    {devi.sanskritName}
                  </div>
                  <p className="text-xs text-sacred-ivoryDim font-cormorant text-base line-clamp-2 leading-relaxed">
                    {devi.shortIntro}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-sacred-border/60 flex items-center justify-between text-xs text-sacred-goldLight group-hover:text-sacred-gold">
                  <span>Open Sacred Profile</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
