import React, { useState } from 'react';
import { sriChakraAvaranas, AvaranaInfo } from '../data/sriChakra';
import { Sparkles, Info, Shield, Compass, BookOpen } from 'lucide-react';

export const InteractiveSriChakra: React.FC = () => {
  const [selectedAvarana, setSelectedAvarana] = useState<AvaranaInfo>(sriChakraAvaranas[8]); // Default to Central Bindu
  const [hoveredAvarana, setHoveredAvarana] = useState<number | null>(null);

  return (
    <div className="w-full bg-sacred-surface border border-sacred-borderGold/40 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sacred-glow">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight mb-3">
          <Sparkles className="w-3.5 h-3.5 text-sacred-gold" />
          <span>श्रीचक्रावरण रहस्यम् — The Nine Sacred Enclosures</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-gradient-text">
          Interactive Sri Chakra Explorer
        </h2>
        <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg mt-2">
          Click or select any of the nine Avaranas below to explore its sacred geometry, presiding Yoginis, mudras, associated bijas, and esoteric non-dual meaning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Sri Chakra SVG Visualizer */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-xl bg-gradient-to-b from-[#140608] via-[#090807] to-[#040303] border border-sacred-borderGold/50 p-4 flex items-center justify-center shadow-sacred-glow select-none">
            {/* SVG Representation of Sri Chakra with Interactive Regions */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <defs>
                <radialGradient id="binduGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffeb99" stopOpacity="1" />
                  <stop offset="50%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b1824" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* 1. Trailokyamohana (Outer Bhupura Square with 4 Gates) */}
              <g
                onClick={() => setSelectedAvarana(sriChakraAvaranas[0])}
                onMouseEnter={() => setHoveredAvarana(1)}
                onMouseLeave={() => setHoveredAvarana(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* 3 Concentric Square Lines */}
                <rect
                  x="20" y="20" width="460" height="460"
                  fill={selectedAvarana.number === 1 ? 'rgba(139, 24, 36, 0.25)' : 'none'}
                  stroke={selectedAvarana.number === 1 || hoveredAvarana === 1 ? '#f0d376' : '#a18120'}
                  strokeWidth={selectedAvarana.number === 1 ? '3' : '1.5'}
                />
                <rect x="35" y="35" width="430" height="430" fill="none" stroke="#a18120" strokeWidth="1" strokeDasharray="6 3" />
                <rect x="50" y="50" width="400" height="400" fill="none" stroke="#d4af37" strokeWidth="1.2" />

                {/* Bhupura Portals (North, South, East, West) */}
                <path d="M 220 20 L 220 5 L 280 5 L 280 20 Z" fill="#d4af37" opacity="0.6" />
                <path d="M 220 480 L 220 495 L 280 495 L 280 480 Z" fill="#d4af37" opacity="0.6" />
                <path d="M 20 220 L 5 220 L 5 280 L 20 280 Z" fill="#d4af37" opacity="0.6" />
                <path d="M 480 220 L 495 220 L 495 280 L 480 280 Z" fill="#d4af37" opacity="0.6" />
              </g>

              {/* 2. Sarvashaparipuraka (16 Petals Lotus Ring) */}
              <g
                onClick={() => setSelectedAvarana(sriChakraAvaranas[1])}
                onMouseEnter={() => setHoveredAvarana(2)}
                onMouseLeave={() => setHoveredAvarana(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <circle
                  cx="250" cy="250" r="185"
                  fill={selectedAvarana.number === 2 ? 'rgba(139, 24, 36, 0.2)' : 'none'}
                  stroke={selectedAvarana.number === 2 || hoveredAvarana === 2 ? '#f0d376' : '#d4af37'}
                  strokeWidth={selectedAvarana.number === 2 ? '2.5' : '1.5'}
                />
                {/* 16 Petals represented as radial markers */}
                {[...Array(16)].map((_, i) => {
                  const angle = (i * 360) / 16;
                  return (
                    <g key={i} transform={`rotate(${angle} 250 250)`}>
                      <path
                        d="M 250 65 Q 240 100 250 115 Q 260 100 250 65 Z"
                        fill={selectedAvarana.number === 2 ? '#8b1824' : '#221810'}
                        stroke="#d4af37"
                        strokeWidth="0.8"
                        opacity={selectedAvarana.number === 2 ? 0.9 : 0.6}
                      />
                    </g>
                  );
                })}
              </g>

              {/* 3. Sarvasankshobhana (8 Petals Lotus Ring) */}
              <g
                onClick={() => setSelectedAvarana(sriChakraAvaranas[2])}
                onMouseEnter={() => setHoveredAvarana(3)}
                onMouseLeave={() => setHoveredAvarana(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <circle
                  cx="250" cy="250" r="135"
                  fill={selectedAvarana.number === 3 ? 'rgba(139, 24, 36, 0.2)' : 'none'}
                  stroke={selectedAvarana.number === 3 || hoveredAvarana === 3 ? '#f0d376' : '#d4af37'}
                  strokeWidth={selectedAvarana.number === 3 ? '2.5' : '1.5'}
                />
                {/* 8 Petals */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  return (
                    <g key={i} transform={`rotate(${angle} 250 250)`}>
                      <path
                        d="M 250 115 Q 235 150 250 165 Q 265 150 250 115 Z"
                        fill={selectedAvarana.number === 3 ? '#8b1824' : '#2d1815'}
                        stroke="#f0d376"
                        strokeWidth="1"
                        opacity={selectedAvarana.number === 3 ? 0.95 : 0.7}
                      />
                    </g>
                  );
                })}
              </g>

              {/* Central Interlocking Triangles System (Avaranas 4, 5, 6, 7, 8) */}
              <g className="transition-all duration-300">
                {/* 4. Chaturdashara (14-angled star) */}
                <polygon
                  points="250,140 330,285 170,285"
                  fill="none"
                  stroke={selectedAvarana.number === 4 ? '#f0d376' : '#d4af37'}
                  strokeWidth={selectedAvarana.number === 4 ? '3' : '1.2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[3])}
                  className="cursor-pointer"
                />
                <polygon
                  points="250,360 170,215 330,215"
                  fill="none"
                  stroke={selectedAvarana.number === 4 ? '#f0d376' : '#d4af37'}
                  strokeWidth={selectedAvarana.number === 4 ? '3' : '1.2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[3])}
                  className="cursor-pointer"
                />

                {/* 5. Bahir-Dashara (Outer 10 triangles) */}
                <polygon
                  points="250,165 315,280 185,280"
                  fill="none"
                  stroke={selectedAvarana.number === 5 ? '#f0d376' : '#b87333'}
                  strokeWidth={selectedAvarana.number === 5 ? '3' : '1.2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[4])}
                  className="cursor-pointer"
                />
                <polygon
                  points="250,335 185,220 315,220"
                  fill="none"
                  stroke={selectedAvarana.number === 5 ? '#f0d376' : '#b87333'}
                  strokeWidth={selectedAvarana.number === 5 ? '3' : '1.2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[4])}
                  className="cursor-pointer"
                />

                {/* 6. Antar-Dashara (Inner 10 triangles) */}
                <polygon
                  points="250,185 300,270 200,270"
                  fill="none"
                  stroke={selectedAvarana.number === 6 ? '#f0d376' : '#c24b08'}
                  strokeWidth={selectedAvarana.number === 6 ? '3' : '1.2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[5])}
                  className="cursor-pointer"
                />
                <polygon
                  points="250,315 200,230 300,230"
                  fill="none"
                  stroke={selectedAvarana.number === 6 ? '#f0d376' : '#c24b08'}
                  strokeWidth={selectedAvarana.number === 6 ? '3' : '1.2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[5])}
                  className="cursor-pointer"
                />

                {/* 7. Ashtakona (Eight-angled figure) */}
                <polygon
                  points="250,205 285,260 215,260"
                  fill="none"
                  stroke={selectedAvarana.number === 7 ? '#f0d376' : '#e65100'}
                  strokeWidth={selectedAvarana.number === 7 ? '3' : '1.5'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[6])}
                  className="cursor-pointer"
                />
                <polygon
                  points="250,295 215,240 285,240"
                  fill="none"
                  stroke={selectedAvarana.number === 7 ? '#f0d376' : '#e65100'}
                  strokeWidth={selectedAvarana.number === 7 ? '3' : '1.5'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[6])}
                  className="cursor-pointer"
                />

                {/* 8. Trikona (Innermost Inverted Triangle) */}
                <polygon
                  points="250,285 220,230 280,230"
                  fill={selectedAvarana.number === 8 ? 'rgba(139, 24, 36, 0.4)' : 'rgba(80, 10, 15, 0.2)'}
                  stroke={selectedAvarana.number === 8 || hoveredAvarana === 8 ? '#f0d376' : '#ff4d6d'}
                  strokeWidth={selectedAvarana.number === 8 ? '3' : '2'}
                  onClick={() => setSelectedAvarana(sriChakraAvaranas[7])}
                  className="cursor-pointer"
                />
              </g>

              {/* 9. Sarvanandamaya (Central Bindu) */}
              <circle
                cx="250" cy="250" r="10"
                fill="url(#binduGlow)"
                stroke="#fff1b8"
                strokeWidth={selectedAvarana.number === 9 ? '2.5' : '1'}
                onClick={() => setSelectedAvarana(sriChakraAvaranas[8])}
                onMouseEnter={() => setHoveredAvarana(9)}
                onMouseLeave={() => setHoveredAvarana(null)}
                className="cursor-pointer animate-pulse"
              />
            </svg>

            {/* Current Active Label Overlay */}
            <div className="absolute bottom-3 inset-x-0 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-sacred-dark/90 border border-sacred-gold/50 text-[11px] font-medium text-sacred-goldLight">
                Active: Avarana {selectedAvarana.number} — {selectedAvarana.name}
              </span>
            </div>
          </div>

          {/* Quick Enclosure Selector Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-4 max-w-md">
            {sriChakraAvaranas.map((av) => (
              <button
                key={av.id}
                onClick={() => setSelectedAvarana(av)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  selectedAvarana.number === av.number
                    ? 'bg-sacred-gold text-sacred-dark font-bold shadow-sacred-glow'
                    : 'bg-sacred-surface border border-sacred-borderGold/30 text-sacred-ivoryDim hover:border-sacred-gold/60'
                }`}
              >
                {av.number}. {av.sanskritName.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Avarana Detailed Data Card */}
        <div className="lg:col-span-6 bg-sacred-dark/80 border border-sacred-borderGold/40 rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex items-start justify-between border-b border-sacred-borderGold/30 pb-3">
            <div>
              <span className="text-xs font-mono font-bold text-sacred-gold">
                AVARANA #{selectedAvarana.number} OF 9
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-ivory mt-0.5">
                {selectedAvarana.name}
              </h3>
              <div className="font-devanagari text-sacred-goldLight text-base">
                {selectedAvarana.sanskritName}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-sacred-ivoryMuted block">
                Seed Bija
              </span>
              <span className="font-devanagari text-lg font-bold text-sacred-goldLight">
                {selectedAvarana.associatedBija}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-sacred-surface/80 border border-sacred-border">
              <span className="text-sacred-goldLight font-medium block mb-0.5">Sacred Geometry:</span>
              <span className="text-sacred-ivoryDim">{selectedAvarana.geometry}</span>
            </div>
            <div className="p-2.5 rounded bg-sacred-surface/80 border border-sacred-border">
              <span className="text-sacred-goldLight font-medium block mb-0.5">Presiding Shaktis:</span>
              <span className="text-sacred-ivoryDim">{selectedAvarana.presidingYoginiType}</span>
            </div>
            <div className="p-2.5 rounded bg-sacred-surface/80 border border-sacred-border">
              <span className="text-sacred-goldLight font-medium block mb-0.5">Associated Mudra:</span>
              <span className="text-sacred-ivoryDim">{selectedAvarana.mudra}</span>
            </div>
            <div className="p-2.5 rounded bg-sacred-surface/80 border border-sacred-border">
              <span className="text-sacred-goldLight font-medium block mb-0.5">Spiritual Station:</span>
              <span className="text-sacred-ivoryDim">{selectedAvarana.spiritualStage}</span>
            </div>
          </div>

          {/* Philosophical Meaning */}
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-sacred-gold uppercase tracking-wider mb-1">
              Philosophical & Esoteric Significance
            </h4>
            <p className="text-xs sm:text-sm text-sacred-ivory leading-relaxed font-cormorant text-base sm:text-lg bg-sacred-surface/50 p-3 rounded border border-sacred-borderGold/20">
              {selectedAvarana.philosophicalMeaning}
            </p>
          </div>

          {/* Enclosed Deities & Shaktis */}
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-sacred-gold uppercase tracking-wider mb-2">
              Attendant Deities in this Enclosure ({selectedAvarana.deitiesInEnclosure.length})
            </h4>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
              {selectedAvarana.deitiesInEnclosure.map((deity, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-sacred-maroon/40 border border-sacred-borderGold/30 text-[11px] text-sacred-ivoryDim"
                >
                  {deity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
