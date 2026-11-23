import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shaktiPeethas } from '../data/shaktiPeethas';
import { ShaktiPeetha } from '../types';
import { MapPin, Compass, Navigation, Shield, ExternalLink, Filter } from 'lucide-react';

interface InteractivePeethaMapProps {
  initialSelectedId?: string;
}

export const InteractivePeethaMap: React.FC<InteractivePeethaMapProps> = ({ initialSelectedId }) => {
  const [filterClass, setFilterClass] = useState<string>('All');
  const [filterRegion, setFilterRegion] = useState<string>('All');
  const [selectedPeetha, setSelectedPeetha] = useState<ShaktiPeetha>(
    shaktiPeethas.find(p => p.id === initialSelectedId) || shaktiPeethas[0] // Default to Vimala Peetha, Puri
  );

  const filteredPeethas = shaktiPeethas.filter(p => {
    const classMatch =
      filterClass === 'All' ||
      (filterClass === 'Adi' && p.classification === 'Adi Shakti Peetha') ||
      (filterClass === 'Maha' && (p.classification === 'Maha Shakti Peetha' || p.classification === 'Adi Shakti Peetha')) ||
      (filterClass === '51' && p.classification === '51 Shakti Peetha');

    const regionMatch =
      filterRegion === 'All' ||
      (filterRegion === 'Odisha' && p.state === 'Odisha') ||
      (filterRegion === 'East' && (p.state === 'West Bengal' || p.state === 'Assam' || p.state === 'Odisha')) ||
      (filterRegion === 'South' && (p.state === 'Tamil Nadu' || p.state === 'Karnataka' || p.state === 'Andhra Pradesh')) ||
      (filterRegion === 'North' && (p.state === 'Uttar Pradesh' || p.state === 'Himachal Pradesh' || p.state.includes('Kashmir')));

    return classMatch && regionMatch;
  });

  return (
    <div className="w-full bg-sacred-surface border border-sacred-borderGold/40 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sacred-glow">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-sacred-borderGold/30 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight mb-2">
            <Compass className="w-3.5 h-3.5 text-sacred-gold" />
            <span>पवित्र शक्तिपीठ मानचित्र — Sacred Geography</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text">
            Shakti Peetha Atlas & Directory
          </h2>
          <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg mt-1">
            Explore the sacred topography consecrated by Devi Sati’s limbs and ornaments across the subcontinent.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Classification Filter */}
          <div className="flex items-center space-x-1 bg-sacred-dark p-1 rounded-lg border border-sacred-borderGold/30 text-xs">
            {['All', 'Adi', 'Maha', '51'].map((c) => (
              <button
                key={c}
                onClick={() => setFilterClass(c)}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  filterClass === c
                    ? 'bg-sacred-gold text-sacred-dark font-bold'
                    : 'text-sacred-ivoryDim hover:text-sacred-goldLight'
                }`}
              >
                {c === 'All' ? 'All Peethas' : c === 'Adi' ? '4 Adi Peethas' : c === 'Maha' ? '18 Maha Peethas' : '51 Peethas'}
              </button>
            ))}
          </div>

          {/* Regional Filter */}
          <select
            value={filterRegion}
            onChange={(e) => setFilterRegion(e.target.value)}
            className="bg-sacred-dark border border-sacred-borderGold/40 text-sacred-ivory text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-sacred-gold"
          >
            <option value="All">All Regions</option>
            <option value="Odisha">Odisha (Special Prominence)</option>
            <option value="East">Eastern India (Bengal, Assam)</option>
            <option value="South">South India</option>
            <option value="North">North India</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Interactive Geographical Canvas / List View */}
        <div className="lg:col-span-7 bg-sacred-dark/80 border border-sacred-borderGold/30 rounded-xl p-4 flex flex-col justify-between">
          <div className="text-xs text-sacred-goldLight font-medium mb-3 flex items-center justify-between">
            <span>Showing {filteredPeethas.length} Consecrated Peetha Centers</span>
            <span className="text-[11px] text-sacred-ivoryMuted">Click any pin to inspect</span>
          </div>

          {/* Stylized Visual Geography Map Grid of Pins */}
          <div className="relative w-full h-[380px] sm:h-[420px] rounded-lg bg-gradient-to-b from-[#160609] via-[#0d0a0b] to-[#060505] border border-sacred-borderGold/40 overflow-hidden p-3 flex flex-col justify-between">
            {/* Background Map Watermark Grid */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 600 600" className="w-full h-full stroke-sacred-gold fill-none">
                <circle cx="300" cy="300" r="280" strokeDasharray="4 4" strokeWidth="0.8" />
                <circle cx="300" cy="300" r="200" strokeDasharray="2 2" strokeWidth="0.6" />
                <line x1="300" y1="20" x2="300" y2="580" strokeWidth="0.5" />
                <line x1="20" y1="300" x2="580" y2="300" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Pins Container positioned relatively based on rough normalized lat/long coords */}
            <div className="relative w-full h-full">
              {filteredPeethas.map((peetha) => {
                const isSelected = selectedPeetha.id === peetha.id;
                // Normalize lat (8 to 36) and lng (65 to 95) into percentages
                const topPercent = Math.max(8, Math.min(92, 100 - ((peetha.coordinates.lat - 8) / (36 - 8)) * 88));
                const leftPercent = Math.max(8, Math.min(92, ((peetha.coordinates.lng - 65) / (95 - 65)) * 88));

                const isAdi = peetha.classification === 'Adi Shakti Peetha';

                return (
                  <button
                    key={peetha.id}
                    onClick={() => setSelectedPeetha(peetha)}
                    style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none transition-transform duration-300 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                    title={`${peetha.name} (${peetha.devi}) - ${peetha.location}`}
                  >
                    <div
                      className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border shadow-sacred-glow ${
                        isSelected
                          ? 'bg-sacred-gold text-sacred-dark border-sacred-ivory font-bold'
                          : isAdi
                          ? 'bg-sacred-crimson text-sacred-goldLight border-sacred-gold animate-pulse'
                          : 'bg-sacred-surface text-sacred-goldLight border-sacred-borderGold'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    {/* Tooltip on hover */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 hidden group-hover:block whitespace-nowrap px-2 py-0.5 rounded bg-sacred-dark text-[10px] text-sacred-goldLight border border-sacred-borderGold/60 shadow-lg pointer-events-none">
                      {peetha.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-[10px] text-sacred-ivoryMuted bg-sacred-dark/80 px-2.5 py-1.5 rounded border border-sacred-borderGold/30">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-sacred-crimson border border-sacred-gold inline-block" />
                  <span>Adi Peetha (4)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-sacred-surface border border-sacred-borderGold inline-block" />
                  <span>Maha / 51 Peetha</span>
                </span>
              </div>
              <span className="font-devanagari text-sacred-goldDark">॥ अष्टदश महापीठानि ॥</span>
            </div>
          </div>
        </div>

        {/* Selected Peetha Detailed Dossier */}
        <div className="lg:col-span-5 bg-sacred-dark/90 border border-sacred-borderGold/50 rounded-xl p-4 sm:p-6 space-y-4 min-w-0">
          <div className="border-b border-sacred-borderGold/30 pb-3 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded border border-sacred-borderGold/60 text-sacred-goldLight bg-sacred-maroon/50 font-medium">
                {selectedPeetha.classification}
              </span>
              <span className="text-[11px] text-sacred-ivoryMuted">
                {selectedPeetha.state}, {selectedPeetha.country}
              </span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-ivory mt-2">
              {selectedPeetha.name}
            </h3>
            <div className="text-xs text-sacred-gold font-medium mt-0.5">
              Presiding Devi: <span className="text-sacred-goldLight font-bold">{selectedPeetha.devi}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded bg-sacred-surface border border-sacred-border">
              <span className="text-sacred-goldDark block text-[10px] uppercase">Associated Bhairava</span>
              <span className="text-sacred-ivory font-medium">{selectedPeetha.bhairava}</span>
            </div>
            <div className="p-2 rounded bg-sacred-surface border border-sacred-border">
              <span className="text-sacred-goldDark block text-[10px] uppercase">Body Part / Ornament</span>
              <span className="text-sacred-ivory font-medium">{selectedPeetha.bodyPartOrOrnament}</span>
            </div>
          </div>

          {/* Historical Background */}
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-sacred-gold uppercase tracking-wider mb-1">
              Historical & Traditional Background
            </h4>
            <p className="text-xs text-sacred-ivoryDim leading-relaxed font-cormorant text-base bg-sacred-surface/40 p-3 rounded border border-sacred-borderGold/20">
              {selectedPeetha.historicalBackground}
            </p>
          </div>

          {/* Scriptural Sources */}
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-sacred-gold uppercase tracking-wider mb-1.5">
              Scriptural Attestations
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedPeetha.scripturalSources.map((src, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-sacred-surface border border-sacred-border text-[10px] text-sacred-ivoryDim"
                >
                  {src}
                </span>
              ))}
            </div>
          </div>

          {/* Link to Devi profile if available */}
          {selectedPeetha.deviId && (
            <div className="pt-2">
              <Link
                to={`/devi/${selectedPeetha.deviId}`}
                className="w-full py-2 flex items-center justify-center space-x-1.5 bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-borderGold text-sacred-goldLight rounded-lg text-xs font-medium transition-all"
              >
                <span>Read Full Profile of {selectedPeetha.devi}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
