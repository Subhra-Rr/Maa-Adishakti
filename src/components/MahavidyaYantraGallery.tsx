import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Maximize2, X, ExternalLink, Shield } from 'lucide-react';

interface YantraCardData {
  id: string;
  deviName: string;
  sanskritName: string;
  yantraName: string;
  imagePath: string;
  geometry: string;
  scripturalSource: string;
  tattva: string;
  bijaSignificance: string;
}

export const mahavidyaYantras: YantraCardData[] = [
  {
    id: 'kali',
    deviName: 'Maa Kali',
    sanskritName: 'श्री महाकाली',
    yantraName: 'Sri Kali Yantra (कालिकायन्त्रम्)',
    imagePath: '/images/yantras/kali_yantra.jpg',
    geometry: 'Central Bindu surrounded by 5 concentric inverted equilateral triangles, enclosed in an 8-petaled lotus (Ashta-Dala), 16-petaled lotus (Shodasha-Dala), 3 concentric boundary circles, and a 4-gated Bhupura.',
    scripturalSource: 'Kalika Purana, Todala Tantra & Mahanirvana Tantra',
    tattva: 'Kala-Tattva (Primordial Time & Non-Dual Absorption)',
    bijaSignificance: 'The five inverted triangles symbolize the five sheaths of human experience (Pancha Kosha) and five elements (Pancha Mahabhuta) dissolved back into the primordial Bindu.'
  },
  {
    id: 'tara',
    deviName: 'Maa Tara',
    sanskritName: 'श्री तारा',
    yantraName: 'Sri Tara Yantra (तारायन्त्रम्)',
    imagePath: '/images/yantras/tara_yantra.jpg',
    geometry: 'Central Bindu within a downward-pointing triangle, surrounded by an 8-petaled lotus, 3 concentric circles (Vritta-traya), and a sacred square Bhupura with four cardinal entryways.',
    scripturalSource: 'Brihad Nila Tantra & Tararahasya',
    tattva: 'Sabda-Brahman & Tarana Shakti (The Power to Ferry Across Samsara)',
    bijaSignificance: 'The single central triangle signifies the spark of divine illumination (Taraka) that carries the seeker over the turbulent ocean of existential suffering.'
  },
  {
    id: 'tripura-sundari',
    deviName: 'Maa Tripura Sundari',
    sanskritName: 'श्री त्रिपुरसुन्दरी',
    yantraName: 'Sri Chakra / Tripura Sundari Yantra (श्रीचक्रम्)',
    imagePath: '/images/yantras/tripura_sundari_yantra.jpg',
    geometry: 'Nine interlocking triangles (4 upward Shiva, 5 downward Shakti) producing 43 smaller triangles across 9 distinct concentric Avaranas, framed by 8 and 16 lotus petals and the 3-walled Bhupura.',
    scripturalSource: 'Tantraraja Tantra, Yogini Hridaya & Saundarya Lahari',
    tattva: 'Samarasya (Perfect Union of Shiva and Shakti)',
    bijaSignificance: 'Known as the King of Yantras (Yantraraja). It maps the macrocosmic cosmos and the microcosmic human nervous system to non-dual Bliss consciousness.'
  },
  {
    id: 'bhuvaneshvari',
    deviName: 'Maa Bhuvaneshvari',
    sanskritName: 'श्री भुवनेश्वरी',
    yantraName: 'Sri Bhuvaneshvari Yantra (भुवनेश्वरीयन्त्रम्)',
    imagePath: '/images/yantras/bhuvaneshvari_yantra.jpg',
    geometry: 'Central Bindu with downward triangle, enclosed by an interlocking hexagram (Shatkona), an 8-petaled lotus, 3 circular ramparts, and a four-directional earth citadel (Bhupura).',
    scripturalSource: 'Bhuvaneshvari Tantra & Devi Bhagavata Purana',
    tattva: 'Akasha-Tattva & Maya-Adhishthana (Cosmic Space and Sovereign Presence)',
    bijaSignificance: 'Represents the spacious matrix of the manifest universe. The hexagram signifies the balance of expanding kinetic life and stabilizing silent awareness.'
  },
  {
    id: 'chhinnamasta',
    deviName: 'Maa Chhinnamasta',
    sanskritName: 'श्री छिन्नमस्ता',
    yantraName: 'Sri Chhinnamasta Yantra (छिन्नमस्तायन्त्रम्)',
    imagePath: '/images/yantras/chhinnamasta_yantra.jpg',
    geometry: 'Central Bindu in an inverted triangle, intersecting with a secondary triangle to form a dynamic hexagram, surrounded by an 8-petaled lotus, concentric circular boundaries, and outer Bhupura.',
    scripturalSource: 'Chhinnamasta Tantra & Shakta Pramoda',
    tattva: 'Kundalini Udghata & Ego-Severance (Prachanda Chandika)',
    bijaSignificance: 'The self-decapitating geometry represents the piercing of the Rudra Granthi and the upward transmuted rush of Kundalini through Sushumna to Sahasrara.'
  },
  {
    id: 'bhairavi',
    deviName: 'Maa Tripura Bhairavi',
    sanskritName: 'श्री त्रिपुराभैरवी',
    yantraName: 'Sri Bhairavi Yantra (भैरवीयन्त्रम्)',
    imagePath: '/images/yantras/bhairavi_yantra.jpg',
    geometry: 'Central Bindu surrounded by a downward triangle, enclosed within a 6-pointed hexagram, an 8-petaled lotus, 3 rings, and a 4-gated fortified square citadel.',
    scripturalSource: 'Bhairavi Tantra & Rudrayamala',
    tattva: 'Tejas-Tattva & Tapas (Transformative Spiritual Fire)',
    bijaSignificance: 'The upward and downward triangles embody the cosmic cremation of mortal ignorance in the incandescent fire of inner spiritual awakening.'
  },
  {
    id: 'dhumavati',
    deviName: 'Maa Dhumavati',
    sanskritName: 'श्री धूमावती',
    yantraName: 'Sri Dhumavati Yantra (धूमावतीयन्त्रम्)',
    imagePath: '/images/yantras/dhumavati_yantra.jpg',
    geometry: 'Central Bindu within a single downward triangle, surrounded by an 8-petaled lotus, circular borders, and a stark four-portal Bhupura.',
    scripturalSource: 'Dhumavati Tantra & Prapanchasara Tantra',
    tattva: 'Pralaya & Sunyata (Cosmic Void & Pre-Creation Silence)',
    bijaSignificance: 'Dhumavati’s geometry contemplates the dissolution of all names, forms, and attachments, leading the contemplative into unconditioned void awareness.'
  },
  {
    id: 'bagalamukhi',
    deviName: 'Maa Bagalamukhi',
    sanskritName: 'श्री बगलामुखी',
    yantraName: 'Sri Bagalamukhi Yantra (बगलामुखीयन्त्रम्)',
    imagePath: '/images/yantras/bagalamukhi_yantra.jpg',
    geometry: 'Central Bindu surrounded by a downward triangle, a 6-pointed hexagram, an 8-petaled lotus, outer circles, and a fortified 4-gated yellow Bhupura.',
    scripturalSource: 'Bagalamukhi Rahasya & Sankhayana Tantra',
    tattva: 'Stambhana Shakti (The Power to Paralyze Negativity & Still Mind)',
    bijaSignificance: 'The star geometry radiates the power of divine paralysis (Stambhana) that instantly freezes egoic agitation and halts contradictory thought vrittis.'
  },
  {
    id: 'matangi',
    deviName: 'Maa Matangi',
    sanskritName: 'श्री मातङ्गी',
    yantraName: 'Sri Matangi Yantra (मातङ्गीयन्त्रम्)',
    imagePath: '/images/yantras/matangi_yantra.jpg',
    geometry: 'Central Bindu within a downward triangle, enclosed by a 6-pointed star (Shatkona), an 8-petaled lotus, a 16-petaled outer lotus, and a 4-gated Bhupura.',
    scripturalSource: 'Matangi Tantra & Brahmanda Purana',
    tattva: 'Vak-Tattva (Cosmic Speech, Artistic Genius, & Inner Intuition)',
    bijaSignificance: 'Presides over spontaneous music, creative eloquence, and the fourth stage of speech (Para Vak). Her lotus petals radiate masteries of 64 classical arts.'
  },
  {
    id: 'kamalatmika',
    deviName: 'Maa Kamalatmika',
    sanskritName: 'श्री कमलात्मिका',
    yantraName: 'Sri Kamala Yantra (कमलात्मिकायन्त्रम्)',
    imagePath: '/images/yantras/kamala_yantra.jpg',
    geometry: 'Central Bindu within an inverted triangle, framed by an 8-petaled lotus, a 16-petaled lotus, 3 concentric circles, and an outer 4-gated golden Bhupura.',
    scripturalSource: 'Kamalatmika Tantra & Vishnuyamala',
    tattva: 'Prakasha-Ananda & Srishti (The Golden Blossoming of Consciousness)',
    bijaSignificance: 'The tenth Mahavidya completes the cycle: from Kali’s pure unmanifest blackness to Kamala’s fully blossomed golden lotus manifestation of divine abundance.'
  }
];

export const MahavidyaYantraGallery: React.FC = () => {
  const [selectedYantra, setSelectedYantra] = useState<YantraCardData | null>(null);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sacred-borderGold/40 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon/70 border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sacred-gold" />
            <span>दशमहाविद्या महायन्त्र मण्डलम् — Authentic Tantric Sacred Geometry</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold gold-gradient-text">
            The 10 Mahavidya Exact Yantras
          </h2>
          <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg mt-1 max-w-3xl">
            Each of the Ten Mahavidyas possesses an exact, authentic geometrical mandala documented in authoritative Tantric Agamas. Click any Yantra to inspect its authentic sacred geometry, scriptural foundations, and metaphysical significance.
          </p>
        </div>
      </div>

      {/* Grid of 10 Yantras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {mahavidyaYantras.map((yantra) => (
          <div
            key={yantra.id}
            onClick={() => setSelectedYantra(yantra)}
            className="group cursor-pointer rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-sacred-glow"
          >
            {/* Yantra Image Frame */}
            <div className="relative aspect-square w-full overflow-hidden bg-sacred-dark border-b border-sacred-borderGold/30 p-2 flex items-center justify-center">
              <img
                src={yantra.imagePath}
                alt={yantra.yantraName}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 right-2 p-1.5 rounded-md bg-sacred-dark/80 border border-sacred-gold/40 text-sacred-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-devanagari text-xs text-sacred-goldDark font-semibold block">
                  {yantra.sanskritName}
                </span>
                <h3 className="font-cinzel text-sm font-bold text-sacred-ivory group-hover:text-sacred-goldLight transition-colors">
                  {yantra.deviName}
                </h3>
                <p className="text-[11px] text-sacred-ivoryMuted font-cormorant text-sm line-clamp-2 mt-1">
                  {yantra.geometry}
                </p>
              </div>

              <div className="pt-2 border-t border-sacred-border/60 flex items-center justify-between text-[11px] text-sacred-goldDark">
                <span className="truncate">{yantra.tattva.split(' ')[0]}</span>
                <span className="font-sans text-sacred-gold font-semibold group-hover:underline">Inspect &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Inspection Modal */}
      {selectedYantra && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sacred-dark/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-2xl bg-sacred-surface border-2 border-sacred-borderGold/70 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-sacred-borderGold/40 bg-sacred-dark">
              <div>
                <span className="font-devanagari text-sm font-bold text-sacred-goldLight">
                  {selectedYantra.sanskritName} • {selectedYantra.yantraName}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-extrabold gold-gradient-text">
                  {selectedYantra.deviName} Yantra Geometry
                </h3>
              </div>
              <button
                onClick={() => setSelectedYantra(null)}
                className="p-2 rounded-lg bg-sacred-surface border border-sacred-border hover:border-sacred-gold text-sacred-ivoryDim hover:text-sacred-gold transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Large Image Frame */}
                <div className="rounded-xl overflow-hidden border border-sacred-borderGold/60 bg-sacred-dark p-3 flex items-center justify-center shadow-sacred-glow">
                  <img
                    src={selectedYantra.imagePath}
                    alt={selectedYantra.yantraName}
                    className="max-h-80 w-auto object-contain"
                  />
                </div>

                {/* Technical & Tantric Breakdown */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-sacred-gold mb-1 font-sans">
                      Geometrical Composition
                    </h4>
                    <p className="text-xs sm:text-sm text-sacred-ivory font-cormorant text-base sm:text-lg leading-relaxed">
                      {selectedYantra.geometry}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-sacred-gold mb-1 font-sans">
                      Metaphysical Tattva & Significance
                    </h4>
                    <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
                      {selectedYantra.bijaSignificance}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-sacred-dark/80 border border-sacred-borderGold/30 text-xs space-y-1">
                    <div className="text-sacred-goldLight font-semibold">
                      Scriptural Authority:
                    </div>
                    <div className="text-sacred-ivoryMuted">
                      {selectedYantra.scripturalSource}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-sacred-borderGold/30 bg-sacred-dark flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-sacred-ivoryMuted">
                Tattva: <strong className="text-sacred-goldLight">{selectedYantra.tattva}</strong>
              </span>
              <div className="flex items-center space-x-3">
                <Link
                  to={`/devi/${selectedYantra.id}`}
                  onClick={() => setSelectedYantra(null)}
                  className="px-4 py-2 rounded-lg bg-sacred-maroon border border-sacred-gold text-sacred-goldLight font-bold text-xs uppercase tracking-wider shadow-sacred-glow hover:bg-sacred-crimson transition-all flex items-center space-x-1.5"
                >
                  <span>Explore {selectedYantra.deviName} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setSelectedYantra(null)}
                  className="px-4 py-2 rounded-lg bg-sacred-surface border border-sacred-border text-sacred-ivoryDim hover:text-sacred-gold text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
