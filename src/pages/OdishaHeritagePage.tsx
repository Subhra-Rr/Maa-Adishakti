import React from 'react';
import { Link } from 'react-router-dom';
import { odishaShaktaHeritage } from '../data/odishaShakta';
import { Compass, MapPin, ExternalLink, ArrowRight, BookOpen, Crown, ChevronRight } from 'lucide-react';

export const OdishaHeritagePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">Odisha Shakta Parampara</span>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-[#1c080d] via-[#100709] to-[#080506] border-2 border-sacred-borderGold/70 shadow-sacred-glow space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-maroon border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <Compass className="w-3.5 h-3.5 text-sacred-gold" />
          <span>ଓଡ଼ିଶା ଶାକ୍ତ ସଂସ୍କୃତି ଓ ପୀଠାବଳୀ — Sacred Heritage of Utkala</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
          Odisha Shakta Parampara
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed max-w-4xl">
          Odisha (historic Utkala and Kalinga) holds a uniquely sacred position in Indian Shakta history. Home to two of the four original Adi Shakti Peethas (Maa Vimala of Puri and Maa Tara Tarini of Ganjam), the ancient Nabhi Peetha of Maa Biraja at Jajpur, and two of only four surviving circular Chausath Yogini hypaethral shrines in India (Hirapur and Ranipur-Jharial).
        </p>
      </div>

      {/* Prominent Odishan Temples & Goddess Profiles Grid */}
      <div className="space-y-6">
        <div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
            Major Sacred Peethas & Temples of Odisha
          </h2>
          <p className="text-xs text-sacred-ivoryMuted">
            Explore the historical, architectural, and Tantric significance of Odisha’s principal Shakti shrines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {odishaShaktaHeritage.map((temple) => (
            <div
              key={temple.id}
              className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 hover:border-sacred-gold transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-sacred-glow"
            >
              <div className="space-y-3">
                {temple.id === 'biraja-jajpur' && (
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-sacred-borderGold/30 mb-2">
                    <img src="/images/temples/biraja_jajpur.jpg" alt="Maa Biraja Temple, Jajpur" className="w-full h-full object-cover" />
                  </div>
                )}
                {temple.id === 'tara-tarini' && (
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-sacred-borderGold/30 mb-2">
                    <img src="/images/temples/tara_tarini.jpg" alt="Maa Tara Tarini Temple, Ganjam" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-odia text-sm font-bold text-sacred-goldLight">
                    {temple.odiaName}
                  </span>
                  {temple.isPeetha && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sacred-maroon border border-sacred-gold/40 text-sacred-goldLight">
                      Shakti Peetha
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-cinzel text-lg font-bold text-sacred-ivory">
                    {temple.deviName}
                  </h3>
                  <div className="text-xs text-sacred-goldDark font-medium">
                    {temple.templeName}
                  </div>
                  <div className="text-[11px] text-sacred-ivoryMuted flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-sacred-gold" />
                    <span>{temple.location}, {temple.district} District</span>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-sacred-ivoryDim bg-sacred-dark/60 p-2.5 rounded border border-sacred-border">
                  <div><strong className="text-sacred-goldDark">Historical Era:</strong> {temple.historicalEra}</div>
                  <div><strong className="text-sacred-goldDark">Architecture:</strong> {temple.architecturalStyle}</div>
                  {temple.peethaDetails && (
                    <div className="text-amber-300 font-medium">
                      <strong>Peetha:</strong> {temple.peethaDetails}
                    </div>
                  )}
                </div>

                <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                  {temple.significance}
                </p>

                {/* Major Festivals */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-mono text-sacred-goldDark block mb-1">
                    Major Festivals:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {temple.festivals.map((f, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-sacred-dark border border-sacred-border text-[10px] text-sacred-ivoryMuted">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link to Devi profile if available */}
              <div className="pt-3 border-t border-sacred-border/60">
                <Link
                  to={`/devi/${temple.id}`}
                  className="w-full py-2 flex items-center justify-center space-x-1.5 bg-sacred-dark hover:bg-sacred-maroon/60 border border-sacred-borderGold/40 text-sacred-goldLight rounded-lg text-xs font-semibold transition-all group"
                >
                  <span>Read Profile of {temple.deviName}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Feature: The 64 Yogini Temples of Odisha */}
      <div className="p-6 sm:p-8 rounded-xl bg-sacred-surface border-2 border-sacred-borderGold/50 space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
          The Circular Hypaethral Yogini Shrines of Odisha
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg">
          <div className="p-4 rounded-lg bg-sacred-dark/70 border border-sacred-border space-y-3">
            <div className="w-full h-44 rounded-lg overflow-hidden border border-sacred-borderGold/30">
              <img
                src="/images/temples/hirapur_yogini.jpg"
                alt="Chausath Yogini Temple, Hirapur, Odisha"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
              Hirapur 64 Yogini Temple (near Bhubaneswar)
            </h3>
            <p className="leading-relaxed">
              Constructed in the 9th century by Queen Hira Devi of the Bhauma-Kara dynasty. Built without a roof (hypaethral) out of coarse sandstone, the circular inner wall houses 64 exquisitely sculpted chlorite statues of the Yoginis standing upon diverse animal mounts. The central Chandi Mandapa enshrines dancing Bhairava figures.
            </p>
            <Link to="/categories/chausath-yoginis" className="text-xs font-sans text-sacred-gold underline block pt-1">
              View All 64 Yoginis Catalogued from Hirapur &rarr;
            </Link>
          </div>

          <div className="p-4 rounded-lg bg-sacred-dark/70 border border-sacred-border space-y-2">
            <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
              Ranipur-Jharial Yogini Enclosure (Balangir)
            </h3>
            <p className="leading-relaxed">
              Perched atop a vast granite outcrop in Western Odisha, this Somavamsi-era circular open-air temple houses sandstone dancing yoginis surrounding an eight-armed, three-faced dancing Nataraja Bhairava. It served as a premier center of Kaula-Kapalika Tantric sadhana under the stars.
            </p>
            <Link to="/categories/chausath-yoginis" className="text-xs font-sans text-sacred-gold underline block pt-1">
              Explore 64 Yogini Tradition &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
