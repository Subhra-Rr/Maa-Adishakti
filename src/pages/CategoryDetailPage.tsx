import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  categories, allDevis, sixtyFourYoginis, shodashaNityas,
  dwadashaKalis, ashtaLakshmiList, navapatrikaList,
  shodashaMatrikasList, chakraYoginis, ashtaVashinis, sixteenNityaKalas
} from '../data';
import { DeviImage } from '../components/DeviImage';
import { SacredOmFallback } from '../components/SacredOmFallback';
import { TopicDossierModal, TopicBriefEntity } from '../components/TopicDossierModal';
import { ArrowLeft, Crown, Sparkles, ChevronRight, Search, BookOpen, Layers, ExternalLink } from 'lucide-react';

export const CategoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchFilter, setSearchFilter] = useState('');
  const [activeModalEntity, setActiveModalEntity] = useState<TopicBriefEntity | null>(null);

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
  const linkedDevis = useMemo(() => {
    if (category.deviIds && category.deviIds.length > 0) {
      return category.deviIds
        .map(id => allDevis.find(d => d.id === id))
        .filter((d): d is typeof allDevis[0] => d !== undefined);
    }
    return allDevis.filter(devi =>
      devi.classification.some(c =>
        c.toLowerCase().includes(category.name.toLowerCase()) ||
        category.name.toLowerCase().includes(c.toLowerCase()) ||
        c.toLowerCase().includes(category.slug.toLowerCase())
      )
    );
  }, [category]);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-12 overflow-x-hidden min-w-0">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4 min-w-0 truncate">
        <Link to="/" className="hover:text-sacred-gold shrink-0">Home</Link>
        <span>/</span>
        <Link to="/categories" className="hover:text-sacred-gold shrink-0">Categories</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold truncate">{category.name}</span>
      </div>

      {/* Category Dossier Banner */}
      <div className="p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-4 min-w-0 break-words">
        <div className="flex flex-wrap items-center justify-between gap-2 min-w-0">
          <span className="px-3 py-1 rounded-full bg-sacred-dark/80 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
            {category.sanskritName}
          </span>
          <span className="text-xs font-mono font-bold text-sacred-goldLight bg-sacred-maroon/80 px-3 py-1 rounded border border-sacred-gold/30">
            {category.deviCount} Documented Manifestations
          </span>
        </div>

        <div className="min-w-0">
          <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text break-words">
            {category.name}
          </h1>
          <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-base sm:text-xl leading-relaxed mt-2 max-w-4xl break-words">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-sacred-borderGold/30 text-xs min-w-0">
          <div className="min-w-0">
            <span className="text-sacred-goldDark uppercase font-bold block mb-1">Traditional Context</span>
            <p className="text-sacred-ivoryDim break-words">{category.traditionalContext}</p>
          </div>
          <div className="min-w-0">
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
                All 64 individual Yoginis documented from the 9th-century Hirapur Chausath Yogini Temple epigraphy. Click any card to open the in-depth brief.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full min-w-0">
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
                  onClick={() => setActiveModalEntity({
                    id: yogini.id,
                    number: yogini.number,
                    name: yogini.name,
                    sanskritName: yogini.sanskritName,
                    categoryBadge: `Chausath Yogini #${yogini.number}`,
                    subtitle: `Hirapur Shaktipitha • Mount: ${yogini.vahana}`,
                    attributes: [
                      { label: 'Yogini Number', value: `#${yogini.number} of 64` },
                      { label: 'Mount (Vahana)', value: yogini.vahana },
                      { label: 'Weapons & Ayudhas', value: yogini.weapons.join(', ') },
                      { label: 'Temple Epigraphy', value: yogini.templeSite },
                      { label: 'Iconographic Form', value: yogini.iconographyDescription },
                    ],
                    description: yogini.iconographyDescription,
                    esotericSignificance: yogini.significance,
                    scripturalSource: 'Kaulajnana Nirnaya (Matsyendranath), Agni Purana & Hirapur Circular Temple Inscriptions',
                  })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveModalEntity({
                        id: yogini.id,
                        number: yogini.number,
                        name: yogini.name,
                        sanskritName: yogini.sanskritName,
                        categoryBadge: `Chausath Yogini #${yogini.number}`,
                        subtitle: `Hirapur Shaktipitha • Mount: ${yogini.vahana}`,
                        attributes: [
                          { label: 'Yogini Number', value: `#${yogini.number} of 64` },
                          { label: 'Mount (Vahana)', value: yogini.vahana },
                          { label: 'Weapons & Ayudhas', value: yogini.weapons.join(', ') },
                          { label: 'Temple Epigraphy', value: yogini.templeSite },
                          { label: 'Iconographic Form', value: yogini.iconographyDescription },
                        ],
                        description: yogini.iconographyDescription,
                        esotericSignificance: yogini.significance,
                        scripturalSource: 'Kaulajnana Nirnaya (Matsyendranath), Agni Purana & Hirapur Circular Temple Inscriptions',
                      });
                    }
                  }}
                  className="p-4 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold hover:shadow-sacred-glow hover:scale-[1.01] transition-all duration-200 cursor-pointer space-y-3 flex flex-col justify-between group"
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

                    <h3 className="font-cinzel text-base font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
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

                  <div>
                    <p className="text-[11px] text-sacred-ivoryMuted font-cormorant text-sm leading-relaxed border-t border-sacred-border/60 pt-2 line-clamp-2">
                      {yogini.significance}
                    </p>
                    <div className="mt-2 pt-2 border-t border-sacred-border/40 flex items-center justify-between text-[11px] text-sacred-gold group-hover:text-sacred-goldLight font-medium">
                      <span>Open Sacred Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full min-w-0">
              {chakraYoginis.map((cy) => (
                <div
                  key={cy.id}
                  onClick={() => setActiveModalEntity({
                    id: cy.id,
                    name: `${cy.yoginiName} (${cy.chakra.split(' ')[0]} Yogini)`,
                    sanskritName: cy.sanskritName,
                    categoryBadge: `Kundalini Subtle Anatomy • ${cy.sanskritChakra}`,
                    subtitle: cy.chakra,
                    deviId: allDevis.some(d => d.id === cy.id || d.id === cy.id.replace('chakra-', '')) ? cy.id.replace('chakra-', '') : undefined,
                    attributes: [
                      { label: 'Subtle Center (Chakra)', value: cy.chakra },
                      { label: 'Sanskrit Name', value: cy.sanskritChakra },
                      { label: 'Governed Bodily Dhatu', value: cy.dhatuGoverned },
                      { label: 'Complexion & Radiance', value: cy.colorAndComplexion },
                      { label: 'Weapons & Mudras', value: cy.weapons.join(', ') },
                    ],
                    description: cy.iconography,
                    esotericSignificance: cy.esotericSignificance,
                    scripturalSource: cy.sourceText,
                  })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveModalEntity({
                        id: cy.id,
                        name: `${cy.yoginiName} (${cy.chakra.split(' ')[0]} Yogini)`,
                        sanskritName: cy.sanskritName,
                        categoryBadge: `Kundalini Subtle Anatomy • ${cy.sanskritChakra}`,
                        subtitle: cy.chakra,
                        deviId: allDevis.some(d => d.id === cy.id || d.id === cy.id.replace('chakra-', '')) ? cy.id.replace('chakra-', '') : undefined,
                        attributes: [
                          { label: 'Subtle Center (Chakra)', value: cy.chakra },
                          { label: 'Sanskrit Name', value: cy.sanskritChakra },
                          { label: 'Governed Bodily Dhatu', value: cy.dhatuGoverned },
                          { label: 'Complexion & Radiance', value: cy.colorAndComplexion },
                          { label: 'Weapons & Mudras', value: cy.weapons.join(', ') },
                        ],
                        description: cy.iconography,
                        esotericSignificance: cy.esotericSignificance,
                        scripturalSource: cy.sourceText,
                      });
                    }
                  }}
                  className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold hover:shadow-sacred-glow hover:scale-[1.01] transition-all duration-200 cursor-pointer space-y-3 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-sacred-gold">{cy.sanskritChakra}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sacred-maroon border border-sacred-gold/30 text-sacred-goldLight">
                        {cy.dhatuGoverned}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-cinzel text-lg font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                        {cy.yoginiName} ({cy.sanskritName})
                      </h3>
                      <div className="text-xs text-sacred-ivoryMuted">{cy.chakra}</div>
                    </div>

                    <div className="text-xs space-y-1.5 text-sacred-ivoryDim bg-sacred-dark/60 p-2.5 rounded border border-sacred-border mt-2">
                      <div><strong className="text-sacred-goldDark">Complexion:</strong> {cy.colorAndComplexion}</div>
                      <div><strong className="text-sacred-goldDark">Weapons:</strong> {cy.weapons.join(', ')}</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed line-clamp-2">
                      {cy.esotericSignificance}
                    </p>

                    <div className="mt-2 pt-2 border-t border-sacred-border/40 flex items-center justify-between text-[11px] text-sacred-gold group-hover:text-sacred-goldLight font-medium">
                      <span>Open Sacred Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full min-w-0">
              {ashtaVashinis.map((v) => (
                <div
                  key={v.id}
                  onClick={() => setActiveModalEntity({
                    id: v.id,
                    number: v.number,
                    name: v.name,
                    sanskritName: v.sanskritName,
                    categoryBadge: `Speech Shakti (Vak-Devata) #${v.number}`,
                    subtitle: v.speechAspect,
                    attributes: [
                      { label: 'Order', value: `#${v.number} of 8 Ashta Vashinis` },
                      { label: 'Speech Aspect', value: v.speechAspect },
                      { label: 'Sri Chakra Enclosure', value: v.sriChakraAvarana },
                    ],
                    description: v.significance,
                    esotericSignificance: 'The eight Vashini deities reside in the Sarvarogahara Chakra (the inner eight triangles) of the Sri Yantra. They are the composers of the divine Lalita Sahasranama and govern the transformation of cosmic vibration (Nada) into articulated Sanskrit phonemes (Matrikas).',
                    scripturalSource: 'Vamakeshvara Tantra, Lalita Sahasranama Phalasruti, & Nityashodashikarnava',
                  })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveModalEntity({
                        id: v.id,
                        number: v.number,
                        name: v.name,
                        sanskritName: v.sanskritName,
                        categoryBadge: `Speech Shakti (Vak-Devata) #${v.number}`,
                        subtitle: v.speechAspect,
                        attributes: [
                          { label: 'Order', value: `#${v.number} of 8 Ashta Vashinis` },
                          { label: 'Speech Aspect', value: v.speechAspect },
                          { label: 'Sri Chakra Enclosure', value: v.sriChakraAvarana },
                        ],
                        description: v.significance,
                        esotericSignificance: 'The eight Vashini deities reside in the Sarvarogahara Chakra (the inner eight triangles) of the Sri Yantra. They are the composers of the divine Lalita Sahasranama and govern the transformation of cosmic vibration (Nada) into articulated Sanskrit phonemes (Matrikas).',
                        scripturalSource: 'Vamakeshvara Tantra, Lalita Sahasranama Phalasruti, & Nityashodashikarnava',
                      });
                    }
                  }}
                  className="p-4 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold hover:shadow-sacred-glow hover:scale-[1.01] transition-all duration-200 cursor-pointer space-y-2 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-sacred-gold">#{v.number}</span>
                      <span className="text-[10px] text-sacred-ivoryMuted">Vak-Devata</span>
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                      {v.name}
                    </h3>
                    <div className="font-devanagari text-xs text-sacred-goldDark">{v.sanskritName}</div>
                  </div>

                  <div>
                    <p className="text-xs text-sacred-ivoryDim font-cormorant text-sm leading-relaxed line-clamp-2">
                      {v.significance}
                    </p>
                    <div className="mt-2 pt-2 border-t border-sacred-border/40 flex items-center justify-between text-[11px] text-sacred-gold group-hover:text-sacred-goldLight font-medium">
                      <span>Open Brief</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 16 Nitya Kalas */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
              Sixteen Nitya Kalas & Sanskrit Vowels
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center w-full min-w-0">
              {sixteenNityaKalas.map((k) => (
                <div
                  key={k.number}
                  onClick={() => setActiveModalEntity({
                    id: `kala-${k.number}`,
                    number: k.number,
                    name: `${k.name} Nitya Kala`,
                    sanskritName: k.vowel,
                    categoryBadge: `Lunar Kala #${k.number} • Matrika Vowel`,
                    subtitle: `The ${k.number}th Divine Ray of Parashakti`,
                    attributes: [
                      { label: 'Vowel (Svara)', value: k.vowel },
                      { label: 'Order', value: `#${k.number} of 16 Chandra Kalas` },
                      { label: 'Spiritual Resonance', value: k.meaning },
                    ],
                    description: 'The Sixteen Nitya Kalas are the primordial digits of the spiritual moon (Chandra-mandala) residing within the Sahasrara Chakra. Each Kala vibrates with one of the sixteen Sanskrit vowels (Svaras), transmitting the supreme nectar of immortality (Amrita) through the subtle body nadis.',
                    esotericSignificance: k.meaning,
                    scripturalSource: 'Tantraraja Tantra, Goraksha Samhita, & Sharadatilaka',
                  })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveModalEntity({
                        id: `kala-${k.number}`,
                        number: k.number,
                        name: `${k.name} Nitya Kala`,
                        sanskritName: k.vowel,
                        categoryBadge: `Lunar Kala #${k.number} • Matrika Vowel`,
                        subtitle: `The ${k.number}th Divine Ray of Parashakti`,
                        attributes: [
                          { label: 'Vowel (Svara)', value: k.vowel },
                          { label: 'Order', value: `#${k.number} of 16 Chandra Kalas` },
                          { label: 'Spiritual Resonance', value: k.meaning },
                        ],
                        description: 'The Sixteen Nitya Kalas are the primordial digits of the spiritual moon (Chandra-mandala) residing within the Sahasrara Chakra. Each Kala vibrates with one of the sixteen Sanskrit vowels (Svaras), transmitting the supreme nectar of immortality (Amrita) through the subtle body nadis.',
                        esotericSignificance: k.meaning,
                        scripturalSource: 'Tantraraja Tantra, Goraksha Samhita, & Sharadatilaka',
                      });
                    }
                  }}
                  className="p-2.5 rounded-lg bg-sacred-dark border border-sacred-borderGold/20 hover:border-sacred-gold hover:shadow-sacred-glow hover:scale-105 transition-all duration-200 cursor-pointer space-y-1 group"
                >
                  <div className="font-devanagari text-base font-bold text-sacred-goldLight group-hover:scale-110 transition-transform">{k.vowel}</div>
                  <div className="font-cinzel text-xs font-semibold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">{k.name}</div>
                  <div className="text-[10px] text-sacred-ivoryMuted line-clamp-1">{k.meaning}</div>
                </div>
              ))}
            </div>
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
              Invoked in Vedic Samskaras, Yajnas, and Shanti Karmas; completely distinct from Sapta/Ashta Matrikas. Click any card to expand full dossier.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 w-full min-w-0">
            {shodashaMatrikasList.map((sm) => (
              <div
                key={sm.number}
                onClick={() => setActiveModalEntity({
                  id: `shodasha-${sm.number}`,
                  number: sm.number,
                  name: `${sm.name} Matrika`,
                  sanskritName: sm.sanskrit,
                  categoryBadge: `Vedic Samskara Matrika #${sm.number}`,
                  subtitle: sm.role,
                  attributes: [
                    { label: 'Order', value: `#${sm.number} of 16 Ritual Mothers` },
                    { label: 'Sanskrit Name', value: sm.sanskrit },
                    { label: 'Ritual Role', value: sm.role },
                    { label: 'Tradition', value: 'Vedic Shanti Karma & Samskara Pujan' },
                  ],
                  description: `${sm.name} (${sm.sanskrit}) is one of the sixteen protective mothers invoked at the commencement of every Vedic rite, wedding, sacred thread ceremony (Upanayana), and Yajna. Unlike the martial Sapta/Ashta Matrikas of Devi Mahatmya who destroy asuras on the battlefield, the Shodasha Matrikas bestow auspicious domestic blessings, mental peace, and lineage purity.`,
                  esotericSignificance: sm.role,
                  scripturalSource: 'Bhavishya Purana, Prayoga Ratna, & Grihya Sutras',
                })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveModalEntity({
                      id: `shodasha-${sm.number}`,
                      number: sm.number,
                      name: `${sm.name} Matrika`,
                      sanskritName: sm.sanskrit,
                      categoryBadge: `Vedic Samskara Matrika #${sm.number}`,
                      subtitle: sm.role,
                      attributes: [
                        { label: 'Order', value: `#${sm.number} of 16 Ritual Mothers` },
                        { label: 'Sanskrit Name', value: sm.sanskrit },
                        { label: 'Ritual Role', value: sm.role },
                        { label: 'Tradition', value: 'Vedic Shanti Karma & Samskara Pujan' },
                      ],
                      description: `${sm.name} (${sm.sanskrit}) is one of the sixteen protective mothers invoked at the commencement of every Vedic rite, wedding, sacred thread ceremony (Upanayana), and Yajna. Unlike the martial Sapta/Ashta Matrikas of Devi Mahatmya who destroy asuras on the battlefield, the Shodasha Matrikas bestow auspicious domestic blessings, mental peace, and lineage purity.`,
                      esotericSignificance: sm.role,
                      scripturalSource: 'Bhavishya Purana, Prayoga Ratna, & Grihya Sutras',
                    });
                  }
                }}
                className="p-3 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold hover:shadow-sacred-glow hover:scale-105 transition-all duration-200 cursor-pointer text-center space-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-sacred-gold">#{sm.number}</div>
                  <div className="font-devanagari text-base font-bold text-sacred-goldLight group-hover:scale-105 transition-transform">{sm.sanskrit}</div>
                  <div className="font-cinzel text-xs font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">{sm.name}</div>
                </div>
                <p className="text-[10px] text-sacred-ivoryMuted leading-tight pt-1 border-t border-sacred-border/40 line-clamp-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full min-w-0">
            {linkedDevis.map((devi) => (
              <Link
                key={devi.id}
                to={`/devi/${devi.id}`}
                className="group rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-sacred-glow p-3.5 vedic-card vedic-shimmer"
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

      {/* Global Interactive Topic Dossier Modal */}
      <TopicDossierModal
        entity={activeModalEntity}
        onClose={() => setActiveModalEntity(null)}
      />
    </div>
  );
};
