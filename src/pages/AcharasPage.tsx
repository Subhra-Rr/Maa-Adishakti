import React from 'react';
import { Link } from 'react-router-dom';
import { acharaComparisons } from '../data/acharas';
import { Layers, Shield, BookOpen, AlertCircle, ArrowRight, Check } from 'lucide-react';

export const AcharasPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">Achara and Shakta Worship Traditions</span>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <Layers className="w-3.5 h-3.5 text-sacred-gold" />
          <span>शाक्त आचार मीमांसा — The Four Modes of Upasana</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
          Achara and Shakta Traditions
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed max-w-4xl">
          Shakta Tantra recognizes that human temperaments (Adhikara) vary across spiritual evolution. Rather than prescribing a rigid monoculture, the tradition codifies four comprehensive approaches to worship: Dakshinachara (the devotional right-hand path), Vamachara (the radical left-hand path), Samayachara (internal non-dual yogic contemplation), and Kaulachara (the living lineage synthesis).
        </p>
      </div>

      {/* Mandatory Non-Dogmatic Classification Principle Notice */}
      <div className="p-5 rounded-xl bg-sacred-surface border-l-4 border-l-sacred-gold border-y border-r border-sacred-borderGold/30 space-y-2">
        <div className="flex items-center space-x-2 text-sacred-gold font-bold text-xs uppercase tracking-wider">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Non-Dogmatic Classification Principle: A Singular Devi Can Have Multiple Acharas</span>
        </div>
        <p className="text-xs sm:text-sm text-sacred-ivoryDim leading-relaxed font-cormorant text-base sm:text-lg">
          In authentic Shakta scholarship, no Devi is dogmatically imprisoned inside only one Achara. A single deity such as Maa Kali, Tara, or Lalita Tripura Sundari may be worshipped through gentle Vedic-Sattvic devotion (Dakshinachara), profound inner Kundalini yoga (Samayachara), or esoteric transformative rites (Vamachara and Kaulachara) depending upon the Sampradaya, Guru-parampara, and the spiritual capacity of the practitioner.
        </p>
      </div>

      {/* The Four Acharas Detailed Deep Dives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {acharaComparisons.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-sacred-surface border border-sacred-borderGold/40 space-y-4 shadow-sacred-glow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-3">
                <div>
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-ivory">
                    {item.achara}
                  </h2>
                  <div className="font-devanagari text-base font-semibold text-sacred-goldLight">
                    {item.sanskritName}
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-sacred-dark border border-sacred-borderGold/40 text-sacred-gold">
                  Mode #{idx + 1}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-sacred-goldDark tracking-wider block mb-1">
                  Philosophical Approach:
                </span>
                <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
                  {item.philosophicalApproach}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-sacred-goldDark tracking-wider block mb-1">
                  Worship Framework & Ritual Practice:
                </span>
                <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed bg-sacred-dark/60 p-3 rounded border border-sacred-border">
                  {item.worshipFramework}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-sacred-goldDark tracking-wider block mb-1">
                  Subtle & Symbolic Meaning:
                </span>
                <p className="text-xs text-sacred-ivoryMuted font-cormorant text-base leading-relaxed">
                  {item.subtleOrSymbolicMeaning}
                </p>
              </div>

              {/* Traditionally Associated Devis */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono text-sacred-goldDark tracking-wider block mb-1.5">
                  Frequently Associated Devis:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.traditionallyAssociatedDevis.map((devi, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-sacred-maroon/50 border border-sacred-borderGold/30 text-xs text-sacred-goldLight"
                    >
                      {devi}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-sacred-border/60 text-[11px] text-sacred-ivoryMuted">
              <strong>Lineage Notes:</strong> {item.regionalOrLineageVariations}
            </div>
          </div>
        ))}
      </div>

      {/* Comprehensive Structured Comparison Table */}
      <div className="space-y-4 pt-6">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Structured Comparison Matrix
        </h2>

        <div className="overflow-x-auto rounded-xl border border-sacred-borderGold/30">
          <table className="w-full text-left text-xs text-sacred-ivoryDim">
            <thead className="bg-sacred-dark text-sacred-gold uppercase font-mono tracking-wider border-b border-sacred-borderGold/30">
              <tr>
                <th className="p-3.5">Achara</th>
                <th className="p-3.5">Orientation</th>
                <th className="p-3.5">Primary Scriptures</th>
                <th className="p-3.5">Associated Devis</th>
                <th className="p-3.5">Lineage Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sacred-border/50 bg-sacred-surface/70">
              {acharaComparisons.map((c, idx) => (
                <tr key={idx} className="hover:bg-sacred-maroon/20 transition-colors">
                  <td className="p-3.5 font-bold text-sacred-ivory whitespace-nowrap">
                    <div>{c.achara.split(' ')[0]}</div>
                    <div className="font-devanagari text-sacred-goldLight text-[11px]">{c.sanskritName}</div>
                  </td>
                  <td className="p-3.5 max-w-xs font-cormorant text-sm leading-relaxed">
                    {c.philosophicalApproach}
                  </td>
                  <td className="p-3.5 text-sacred-ivoryMuted">
                    {c.primaryScriptures.join(', ')}
                  </td>
                  <td className="p-3.5 text-sacred-goldLight">
                    {c.traditionallyAssociatedDevis.slice(0, 5).join(', ')}
                  </td>
                  <td className="p-3.5 text-sacred-ivoryMuted">
                    {c.regionalOrLineageVariations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
