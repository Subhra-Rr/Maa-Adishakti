import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { shaktiPeethas } from '../data/shaktiPeethas';
import { InteractivePeethaMap } from '../components/InteractivePeethaMap';
import { TopicDossierModal, TopicBriefEntity } from '../components/TopicDossierModal';
import { MapPin, Compass, Search, ExternalLink, ChevronRight } from 'lucide-react';

export const ShaktiPeethasPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectId = searchParams.get('select') || undefined;
  const [filterText, setFilterText] = useState('');
  const [activeModalEntity, setActiveModalEntity] = useState<TopicBriefEntity | null>(null);

  const filteredPeethas = shaktiPeethas.filter(p =>
    !filterText ||
    p.name.toLowerCase().includes(filterText.toLowerCase()) ||
    p.devi.toLowerCase().includes(filterText.toLowerCase()) ||
    p.location.toLowerCase().includes(filterText.toLowerCase()) ||
    p.state.toLowerCase().includes(filterText.toLowerCase()) ||
    p.bodyPartOrOrnament.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">Shakti Peethas & Sacred Geography</span>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <MapPin className="w-3.5 h-3.5 text-sacred-gold" />
          <span>पवित्र शक्तिपीठ भूगोल कोशः — Sacred Topography</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
          Shakti Peethas of the Subcontinent
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed max-w-4xl">
          According to the Puranas, when Lord Shiva carried the sacred body of Devi Sati across the skies in grief, Sudarshana Chakra fragmented her divine limbs and ornaments, sanctifying 51 sacred geographical centers across India, Nepal, Pakistan, Bangladesh, and Sri Lanka, each consecrated with a paired Bhairava. Click any Peetha card to read its full briefing dossier.
        </p>
      </div>

      {/* Interactive Map Component */}
      <InteractivePeethaMap initialSelectedId={selectId} />

      {/* Complete Tabular Directory */}
      <div className="space-y-4 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sacred-borderGold/30 pb-3">
          <div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
              Complete Consecrated Peetha Catalog ({filteredPeethas.length})
            </h2>
            <p className="text-xs text-sacred-ivoryMuted">
              Details of Devi, Bhairava, sacred body part/ornament, and geographic coordinates. Click any card to expand.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Search Peethas by name, state, body part..."
              className="w-full bg-sacred-dark border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-1.5 text-xs text-sacred-ivory focus:outline-none focus:border-sacred-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full min-w-0">
          {filteredPeethas.map((peetha) => (
            <div
              key={peetha.id}
              onClick={() => setActiveModalEntity({
                id: peetha.id,
                name: peetha.name,
                sanskritName: peetha.devi,
                categoryBadge: `${peetha.classification} • ${peetha.state}`,
                subtitle: `Presiding Devi: ${peetha.devi} • Bhairava: ${peetha.bhairava}`,
                attributes: [
                  { label: 'Classification', value: peetha.classification },
                  { label: 'Presiding Devi', value: peetha.devi },
                  { label: 'Associated Bhairava', value: peetha.bhairava },
                  { label: 'Body Part / Sacred Ornament', value: peetha.bodyPartOrOrnament },
                  { label: 'Sacred Location', value: peetha.location },
                  { label: 'State / Region', value: peetha.state },
                ],
                description: peetha.historicalBackground,
                esotericSignificance: `According to Shakta Tantric scriptures, this holy shrine marks the exact location where Devi Sati's ${peetha.bodyPartOrOrnament.toLowerCase()} fell upon the earth. The spot is consecrated by the divine pair of ${peetha.devi} and ${peetha.bhairava} Bhairava, forming a permanent node of cosmic spiritual energy (Shakti-Sthana).`,
                scripturalSource: 'Devi Bhagavata Purana (7.30), Shiva Purana, Kalika Purana (Ch. 18), & Tantrachudamani',
                deviId: peetha.deviId,
              })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveModalEntity({
                    id: peetha.id,
                    name: peetha.name,
                    sanskritName: peetha.devi,
                    categoryBadge: `${peetha.classification} • ${peetha.state}`,
                    subtitle: `Presiding Devi: ${peetha.devi} • Bhairava: ${peetha.bhairava}`,
                    attributes: [
                      { label: 'Classification', value: peetha.classification },
                      { label: 'Presiding Devi', value: peetha.devi },
                      { label: 'Associated Bhairava', value: peetha.bhairava },
                      { label: 'Body Part / Sacred Ornament', value: peetha.bodyPartOrOrnament },
                      { label: 'Sacred Location', value: peetha.location },
                      { label: 'State / Region', value: peetha.state },
                    ],
                    description: peetha.historicalBackground,
                    esotericSignificance: `According to Shakta Tantric scriptures, this holy shrine marks the exact location where Devi Sati's ${peetha.bodyPartOrOrnament.toLowerCase()} fell upon the earth. The spot is consecrated by the divine pair of ${peetha.devi} and ${peetha.bhairava} Bhairava, forming a permanent node of cosmic spiritual energy (Shakti-Sthana).`,
                    scripturalSource: 'Devi Bhagavata Purana (7.30), Shiva Purana, Kalika Purana (Ch. 18), & Tantrachudamani',
                    deviId: peetha.deviId,
                  });
                }
              }}
              className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold hover:shadow-sacred-glow hover:scale-[1.01] transition-all duration-300 space-y-3 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-sacred-maroon border border-sacred-gold/30 text-sacred-goldLight">
                    {peetha.classification}
                  </span>
                  <span className="text-xs text-sacred-ivoryMuted">{peetha.state}</span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                  {peetha.name}
                </h3>

                <div className="text-xs space-y-1 text-sacred-ivoryDim bg-sacred-dark/70 p-2.5 rounded border border-sacred-border">
                  <div><strong className="text-sacred-goldDark">Presiding Devi:</strong> {peetha.devi}</div>
                  <div><strong className="text-sacred-goldDark">Associated Bhairava:</strong> {peetha.bhairava}</div>
                  <div><strong className="text-sacred-goldDark">Body Part / Ornament:</strong> {peetha.bodyPartOrOrnament}</div>
                  <div><strong className="text-sacred-goldDark">Location:</strong> {peetha.location}</div>
                </div>

                <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed line-clamp-2">
                  {peetha.historicalBackground}
                </p>
              </div>

              <div className="pt-2 border-t border-sacred-border/60 flex items-center justify-between text-xs text-sacred-gold group-hover:text-sacred-goldLight font-medium">
                <span>Open Peetha Dossier</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Peetha Dossier Modal */}
      <TopicDossierModal
        entity={activeModalEntity}
        onClose={() => setActiveModalEntity(null)}
      />
    </div>
  );
};
