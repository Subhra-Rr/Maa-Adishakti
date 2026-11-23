import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allDevis, categories } from '../data';
import { Devi } from '../types';
import { Network, Sparkles, ExternalLink, ChevronRight, Layers } from 'lucide-react';

export const CategoryRelationshipExplorer: React.FC = () => {
  const [selectedDeviId, setSelectedDeviId] = useState<string>('kali');

  const selectedDevi = allDevis.find(d => d.id === selectedDeviId) || allDevis[0];

  // Find related Devis objects
  const relatedDevis = (selectedDevi.relatedDeviIds || [])
    .map(id => allDevis.find(d => d.id === id))
    .filter((d): d is Devi => d !== undefined);

  // Notable devis for quick selector
  const featuredDeviKeys = [
    { id: 'kali', name: 'Kali' },
    { id: 'tripura-sundari', name: 'Tripura Sundari' },
    { id: 'tara', name: 'Tara' },
    { id: 'pratyangira', name: 'Pratyangira' },
    { id: 'vimala-puri', name: 'Vimala (Puri)' },
    { id: 'bhuvaneshvari', name: 'Bhuvaneshvari' },
    { id: 'katyayani', name: 'Katyayani' },
    { id: 'varahi', name: 'Varahi' },
    { id: 'chhinnamasta', name: 'Chhinnamasta' }
  ];

  return (
    <div className="w-full bg-sacred-surface border border-sacred-borderGold/40 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sacred-glow">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight mb-2">
          <Network className="w-3.5 h-3.5 text-sacred-gold" />
          <span>अन्तर्सम्बन्ध मण्डल — Knowledge Network</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text">
          Interconnected Shakta Knowledge Graph
        </h2>
        <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg mt-1">
          Explore how one Devi simultaneously connects to multiple Tantras, Puranas, Kulas, Acharas, Peethas, and companion goddess mandalas.
        </p>
      </div>

      {/* Select Devi Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {featuredDeviKeys.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedDeviId(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedDeviId === item.id
                ? 'bg-sacred-gold text-sacred-dark font-bold shadow-sacred-glow'
                : 'bg-sacred-dark border border-sacred-borderGold/30 text-sacred-ivoryDim hover:border-sacred-gold/60'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Visual Interconnection Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Column: Scriptural, Kula & Achara Roots */}
        <div className="space-y-4 flex flex-col justify-between">
          {/* Classifications Node */}
          <div className="p-4 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sacred-gold block">
              Classification Clusters
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedDevi.classification.map((cls, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-sacred-maroon/60 border border-sacred-gold/30 text-xs text-sacred-goldLight font-medium"
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>

          {/* Traditions & Kulas */}
          <div className="p-4 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sacred-gold block">
              Associated Tantric Kulas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedDevi.traditions.map((trad, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-sacred-surface border border-sacred-border text-xs text-sacred-ivory"
                >
                  {trad}
                </span>
              ))}
            </div>
          </div>

          {/* Acharas */}
          <div className="p-4 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sacred-gold block">
              Permissible Achara Modes
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedDevi.acharas.map((achara, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-sacred-surfaceLight border border-sacred-border text-xs text-sacred-ivoryDim"
                >
                  {achara}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column: Central Devi Heart Node */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-gold/70 shadow-sacred-glow-lg text-center relative overflow-hidden group">
          <div className="absolute top-2 left-2 text-[10px] text-sacred-goldDark font-mono">
            ID: {selectedDevi.id}
          </div>
          <div className="w-16 h-16 rounded-full bg-sacred-dark border-2 border-sacred-gold flex items-center justify-center mb-3 shadow-sacred-glow">
            <span className="font-devanagari text-3xl font-bold gold-gradient-text">ॐ</span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold gold-gradient-text">
            {selectedDevi.primaryName}
          </h3>
          <div className="font-devanagari text-base font-semibold text-sacred-goldLight mb-1">
            {selectedDevi.sanskritName}
          </div>

          {selectedDevi.odiaName && (
            <div className="font-odia text-xs text-sacred-ivoryMuted mb-2">
              {selectedDevi.odiaName}
            </div>
          )}

          <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed line-clamp-3 mb-4">
            {selectedDevi.shortIntro}
          </p>

          <Link
            to={`/devi/${selectedDevi.id}`}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-sacred-gold text-sacred-dark font-bold text-xs uppercase tracking-wider hover:bg-sacred-goldLight transition-all shadow-sacred-glow"
          >
            <span>Open Dedicated Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Right Column: Scriptures & Interconnected Companion Devis */}
        <div className="space-y-4 flex flex-col justify-between">
          {/* Scriptural Sources */}
          <div className="p-4 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sacred-gold block">
              Primary Scriptural Roots
            </span>
            <div className="space-y-1 text-xs">
              {selectedDevi.scripturalReferences.slice(0, 3).map((ref, i) => (
                <div key={i} className="text-sacred-ivoryDim border-b border-sacred-border/40 pb-1">
                  <span className="text-sacred-goldLight font-medium">{ref.textName}</span>
                  {ref.sectionOrChapter && (
                    <span className="text-sacred-ivoryMuted block text-[11px]">{ref.sectionOrChapter}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Connected Companion Devis */}
          <div className="p-4 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sacred-gold block">
              Directly Interconnected Devis
            </span>
            <div className="space-y-1.5">
              {relatedDevis.slice(0, 4).map((rel) => (
                <button
                  key={rel.id}
                  onClick={() => setSelectedDeviId(rel.id)}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-sacred-surface border border-sacred-border hover:border-sacred-gold/50 text-left transition-all group"
                >
                  <span className="text-xs text-sacred-ivory group-hover:text-sacred-goldLight font-medium">
                    {rel.primaryName}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-sacred-borderGold group-hover:text-sacred-gold" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
