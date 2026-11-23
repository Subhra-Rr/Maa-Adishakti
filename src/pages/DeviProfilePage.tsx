import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allDevis } from '../data';
import { DeviImage } from '../components/DeviImage';
import {
  Flame, Shield, Compass, BookOpen, Crown, Copy, Check,
  Share2, ArrowLeft, ExternalLink, ChevronRight, Sparkles, AlertCircle
} from 'lucide-react';

export const DeviProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const devi = allDevis.find(d => d.id === id);

  if (!devi) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-sacred-maroon border border-sacred-borderGold mx-auto flex items-center justify-center font-devanagari text-2xl text-sacred-gold">
          ॐ
        </div>
        <h1 className="font-cinzel text-2xl font-bold text-sacred-ivory">Devi Profile Not Found</h1>
        <p className="text-xs text-sacred-ivoryMuted">
          The requested Devi identifier &ldquo;{id}&rdquo; was not found in the encyclopedic database.
        </p>
        <Link
          to="/directory"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-sacred-maroon border border-sacred-gold text-sacred-goldLight rounded-lg text-xs uppercase tracking-wider font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Directory</span>
        </Link>
      </div>
    );
  }

  const handleCopyText = (text: string, itemId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(itemId);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${devi.primaryName} — SHAKTA TATTVA`,
        text: `Explore the sacred profile of ${devi.primaryName} (${devi.sanskritName}) in SHAKTA TATTVA Encyclopedia.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Page link copied to clipboard!');
    }
  };

  // Find related Devis objects
  const relatedDevis = (devi.relatedDeviIds || [])
    .map(relId => allDevis.find(d => d.id === relId))
    .filter((d): d is typeof devi => d !== undefined);

  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sacred-borderGold/30 pb-4">
        <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted">
          <Link to="/" className="hover:text-sacred-gold">Home</Link>
          <span>/</span>
          <Link to="/directory" className="hover:text-sacred-gold">Directory</Link>
          <span>/</span>
          <span className="text-sacred-goldLight font-semibold">{devi.primaryName}</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Reading Font Size Toggle */}
          <div className="flex items-center space-x-1 bg-sacred-surface border border-sacred-border rounded-lg p-1 text-xs">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded ${fontSize === 'normal' ? 'bg-sacred-maroon text-sacred-goldLight font-bold' : 'text-sacred-ivoryMuted'}`}
              title="Standard Font Size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded ${fontSize === 'large' ? 'bg-sacred-maroon text-sacred-goldLight font-bold' : 'text-sacred-ivoryMuted'}`}
              title="Enlarged Font Size"
            >
              A+
            </button>
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sacred-surface border border-sacred-border hover:border-sacred-gold text-sacred-ivoryDim hover:text-sacred-gold text-xs transition-all"
            title="Share this profile"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          1. IDENTITY HEADER & IMAGE BANNER
      ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-sacred-surface border border-sacred-borderGold/40 rounded-2xl p-6 sm:p-8 shadow-sacred-glow">
        <div className="md:col-span-7 space-y-4">
          {/* Classification & Evidence Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {devi.classification.map((cls, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-sacred-maroon/80 border border-sacred-gold/40 text-sacred-goldLight"
              >
                {cls}
              </span>
            ))}
            <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-950/40 border border-emerald-600/40 text-emerald-300">
              {devi.evidenceStatus}
            </span>
          </div>

          {/* Primary Titles */}
          <div>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text">
              {devi.primaryName}
            </h1>
            <div className="flex flex-wrap items-baseline gap-3 mt-1.5">
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-sacred-goldLight">
                {devi.sanskritName}
              </span>
              {devi.odiaName && (
                <span className="font-odia text-base sm:text-lg text-sacred-ivoryDim">
                  ({devi.odiaName})
                </span>
              )}
            </div>
          </div>

          {/* Alternative Names */}
          {devi.alternateNames && devi.alternateNames.length > 0 && (
            <div className="text-xs text-sacred-ivoryMuted">
              <span className="text-sacred-goldDark font-semibold uppercase tracking-wider block sm:inline mr-1">
                Alternative Names:
              </span>
              <span>{devi.alternateNames.join(' • ')}</span>
            </div>
          )}

          {/* Name Meaning Box */}
          <div className="p-3.5 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg">
            <span className="text-sacred-goldLight font-bold font-sans uppercase text-xs block mb-1">
              Etymological & Spiritual Meaning
            </span>
            {devi.nameMeaning}
          </div>
        </div>

        {/* Visual Image Area (Authentic Image or Sacred Om Fallback) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-xl overflow-hidden border border-sacred-borderGold/60 bg-sacred-dark shadow-sacred-glow">
            <DeviImage
              imagePath={devi.imagePath || devi.imageAssets[0]?.imagePath}
              altText={devi.primaryName}
              deviName={devi.primaryName}
              deviId={devi.id}
              sanskritName={devi.sanskritName}
              fallbackType={devi.imageAssets[0]?.fallbackType || 'verified'}
              attribution={devi.imageAssets[0]?.attribution}
              source={devi.imageAssets[0]?.source}
              size="lg"
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          2. INTRODUCTION & THEOLOGICAL POSITION
      ======================================================== */}
      <section className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Theological & Philosophical Position
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-sacred-surface border border-sacred-border space-y-2">
            <h3 className="font-cinzel text-sm font-bold text-sacred-goldLight uppercase tracking-wider">
              Introduction
            </h3>
            <p className="text-sm text-sacred-ivoryDim leading-relaxed font-cormorant text-lg">
              {devi.shortIntro}
            </p>
          </div>
          <div className="p-5 rounded-xl bg-sacred-surface border border-sacred-border space-y-2">
            <h3 className="font-cinzel text-sm font-bold text-sacred-goldLight uppercase tracking-wider">
              Philosophical Significance
            </h3>
            <p className="text-sm text-sacred-ivoryDim leading-relaxed font-cormorant text-lg">
              {devi.philosophicalSignificance}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SCRIPTURAL REFERENCES
      ======================================================== */}
      <section className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Scriptural References & Attestations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {devi.scripturalReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-sacred-surface border border-sacred-borderGold/20 space-y-1"
            >
              <div className="flex items-center justify-between text-[10px] text-sacred-gold">
                <span className="uppercase tracking-wider font-semibold">{ref.sourceType}</span>
                <span className="text-sacred-ivoryMuted">{ref.originalLanguage}</span>
              </div>
              <div className="font-semibold text-xs sm:text-sm text-sacred-ivory">
                {ref.textName}
              </div>
              {ref.sectionOrChapter && (
                <div className="text-[11px] text-sacred-ivoryMuted">
                  {ref.sectionOrChapter}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. ICONOGRAPHY & ATTRIBUTES
      ======================================================== */}
      <section className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Sacred Iconography & Attributes
        </h2>
        <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-sacred-dark border border-sacred-border">
              <span className="text-sacred-goldDark block text-[10px] uppercase">Number of Arms</span>
              <span className="text-sacred-ivory font-bold text-sm">{devi.iconography.arms}</span>
            </div>
            <div className="p-3 rounded-lg bg-sacred-dark border border-sacred-border">
              <span className="text-sacred-goldDark block text-[10px] uppercase">Vahana (Mount)</span>
              <span className="text-sacred-ivory font-bold text-sm">{devi.iconography.vahana}</span>
            </div>
            <div className="p-3 rounded-lg bg-sacred-dark border border-sacred-border">
              <span className="text-sacred-goldDark block text-[10px] uppercase">Complexion</span>
              <span className="text-sacred-ivory font-bold text-sm">{devi.iconography.complexion}</span>
            </div>
            <div className="p-3 rounded-lg bg-sacred-dark border border-sacred-border">
              <span className="text-sacred-goldDark block text-[10px] uppercase">Asana (Posture)</span>
              <span className="text-sacred-ivory font-bold text-sm">{devi.iconography.asana}</span>
            </div>
          </div>

          {/* Weapons & Emblems */}
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-sacred-gold uppercase tracking-wider mb-2">
              Weapons, Emblems & Implements
            </h4>
            <div className="flex flex-wrap gap-2">
              {devi.iconography.weaponsAndAttributes.map((w, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-sacred-dark border border-sacred-borderGold/30 text-xs text-sacred-ivory"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          {/* Crown, Ornaments & Symbolism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-sacred-dark/60 border border-sacred-border">
              <span className="text-sacred-goldLight font-bold uppercase text-[10px] block mb-1">
                Crown & Vestments
              </span>
              <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                {devi.iconography.crownAndOrnaments}
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-sacred-dark/60 border border-sacred-border">
              <span className="text-sacred-goldLight font-bold uppercase text-[10px] block mb-1">
                Esoteric Symbolism
              </span>
              <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                {devi.iconography.symbolism}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WORSHIP TRADITIONS & ACHARA
      ======================================================== */}
      <section className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Worship Traditions, Kula & Achara
        </h2>
        <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sacred-goldDark uppercase text-xs font-bold block mb-1.5">
                Permissible Achara Approaches
              </span>
              <div className="flex flex-wrap gap-1.5">
                {devi.acharas.map((a, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-sacred-maroon/60 border border-sacred-borderGold/40 text-sacred-goldLight font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sacred-goldDark uppercase text-xs font-bold block mb-1.5">
                Associated Lineages & Traditions
              </span>
              <div className="flex flex-wrap gap-1.5">
                {devi.traditions.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-sacred-dark border border-sacred-border text-sacred-ivory"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {devi.worshipTraditions.regionalPractices && (
            <div className="pt-2 border-t border-sacred-border/60">
              <span className="text-sacred-goldLight font-bold text-xs uppercase block mb-1.5">
                Regional Practices & Major Festivals
              </span>
              <ul className="list-disc list-inside space-y-1 text-sacred-ivoryDim">
                {devi.worshipTraditions.regionalPractices.map((prac, i) => (
                  <li key={i}>{prac}</li>
                ))}
              </ul>
            </div>
          )}

          {devi.worshipTraditions.sampradayaNotes && (
            <div className="p-3 rounded-lg bg-sacred-dark border border-sacred-borderGold/20 text-xs text-sacred-ivoryMuted">
              <strong className="text-sacred-gold">Sampradaya Note:</strong> {devi.worshipTraditions.sampradayaNotes}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          6. MANTRA & STOTRA LIBRARY (WITH COPY BUTTON)
      ======================================================== */}
      {devi.mantraStotra && devi.mantraStotra.length > 0 && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-sacred-borderGold/30 pb-2 gap-2">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Mantra & Devotional Stotra Library
            </h2>
            <span className="text-xs text-sacred-ivoryMuted">
              Publicly Attested Devotional Verses
            </span>
          </div>

          <div className="space-y-5">
            {devi.mantraStotra.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-3 relative group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-sacred-maroon border border-sacred-gold/40 text-sacred-goldLight">
                      {item.type}
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-sacred-ivory">
                      {item.title}
                    </h3>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyText(`${item.sanskrit}\n\n${item.transliteration}\n\nMeaning: ${item.meaning}`, item.id)}
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-sacred-dark border border-sacred-border hover:border-sacred-gold text-sacred-ivoryDim hover:text-sacred-gold text-xs transition-all"
                    title="Copy Sanskrit and translation"
                  >
                    {copiedId === item.id ? (
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

                {/* Original Sanskrit Devanagari */}
                <div className="p-4 rounded-lg bg-sacred-dark/90 border border-sacred-borderGold/30 text-center">
                  <pre className="font-devanagari text-base sm:text-lg md:text-xl font-bold text-sacred-goldLight whitespace-pre-wrap leading-relaxed">
                    {item.sanskrit}
                  </pre>
                </div>

                {/* Transliteration */}
                <div className="text-xs sm:text-sm text-sacred-ivoryMuted italic font-serif leading-relaxed px-1">
                  {item.transliteration}
                </div>

                {/* Meaning */}
                <div className="p-3 rounded-lg bg-sacred-dark/50 border border-sacred-border text-xs sm:text-sm text-sacred-ivory leading-relaxed font-cormorant text-base sm:text-lg">
                  <span className="text-sacred-goldDark font-sans text-xs font-bold block mb-1">
                    English Meaning & Commentary
                  </span>
                  {item.meaning}
                </div>

                <div className="text-[11px] text-sacred-goldDark/70 text-right">
                  Source: {item.source}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          7. YANTRA GEOMETRY (IF DOCUMENTED)
      ======================================================== */}
      {devi.yantra && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-sacred-borderGold/30 pb-2 gap-2">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Sacred Yantra & Exact Tantric Geometry
            </h2>
            <Link
              to="/sri-chakra"
              className="text-xs text-sacred-goldLight hover:underline font-cinzel"
            >
              View 10 Mahavidya Yantra Gallery &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 shadow-sacred-glow">
            <div className={`grid grid-cols-1 ${devi.yantra.imagePath ? 'md:grid-cols-12 gap-8 items-center' : 'gap-4'}`}>
              {/* Yantra Image Display */}
              {devi.yantra.imagePath && (
                <div className="md:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-xs aspect-square rounded-xl overflow-hidden border-2 border-sacred-borderGold/60 bg-sacred-dark p-3 flex items-center justify-center shadow-sacred-glow group">
                    <img
                      src={devi.yantra.imagePath}
                      alt={devi.yantra.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 inset-x-2 text-center pointer-events-none">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-sacred-dark/90 border border-sacred-gold/40 text-[10px] text-sacred-goldLight">
                        Authentic Agamic Geometry
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Yantra Details */}
              <div className={`${devi.yantra.imagePath ? 'md:col-span-7' : ''} space-y-3.5`}>
                <div className="flex items-baseline space-x-3">
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-sacred-goldLight">
                    {devi.yantra.name}
                  </h3>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-sacred-gold font-sans block">
                    Geometrical Configuration:
                  </span>
                  <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
                    {devi.yantra.geometricalDescription}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-sacred-gold font-sans block">
                    Documented Spiritual Significance:
                  </span>
                  <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
                    {devi.yantra.documentedSignificance}
                  </p>
                </div>

                <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-sacred-goldDark border-t border-sacred-border/60">
                  <span>Scriptural Source: <strong className="text-sacred-ivoryDim">{devi.yantra.scripturalReference}</strong></span>
                  <span className="font-semibold text-sacred-goldLight font-devanagari">॥ यन्त्रं मन्त्रमयं प्रोक्तम् ॥</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          8. RELATED DEVIS & COMPANIONS
      ======================================================== */}
      {relatedDevis.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
            Directly Connected Manifestations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {relatedDevis.map((rel) => (
              <Link
                key={rel.id}
                to={`/devi/${rel.id}`}
                className="p-3 rounded-xl bg-sacred-surface border border-sacred-borderGold/20 hover:border-sacred-gold transition-all text-center space-y-2 group"
              >
                <div className="font-cinzel text-sm font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                  {rel.primaryName}
                </div>
                <div className="font-devanagari text-xs text-sacred-goldDark">
                  {rel.sanskritName}
                </div>
                <div className="text-[10px] text-sacred-ivoryMuted">
                  {rel.classification[0]}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
