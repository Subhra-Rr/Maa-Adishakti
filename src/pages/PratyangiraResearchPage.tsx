import React from 'react';
import { Link } from 'react-router-dom';
import {
  pratyangiraTheology, pratyangiraForms,
  pratyangiraDevotionalTexts, pratyangiraTemples
} from '../data/pratyangira';
import { DeviImage } from '../components/DeviImage';
import { SacredOmFallback } from '../components/SacredOmFallback';
import { Zap, Shield, BookOpen, MapPin, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';

export const PratyangiraResearchPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-amber-300 font-semibold">Maa Bhagwati Pratyangira Research Center</span>
      </div>

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#200508] via-[#100709] to-[#080506] border-2 border-amber-600/70 p-6 sm:p-10 shadow-maroon-glow space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/50 text-xs font-devanagari text-amber-300">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>श्री प्रत्यङ्गिरा देवी महाशोध केन्द्रम् — Specialized Research Center</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text">
              श्री प्रत्यङ्गिरा देवी
            </h1>
            <div className="font-cinzel text-xl sm:text-2xl text-sacred-ivory font-semibold">
              Maa Bhagwati Pratyangira: The Lion-Faced Supreme Protectress
            </div>
            <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
              {pratyangiraTheology.primaryIdentity}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/devi/pratyangira"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center space-x-2"
              >
                <span>View Standard Devi Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs rounded-xl overflow-hidden border border-amber-600/50 bg-sacred-dark p-2 shadow-sacred-glow">
              <SacredOmFallback
                deviName="Maa Pratyangira"
                sanskritName="श्री प्रत्यङ्गिरा देवी"
                fallbackType="gupta_svarupa"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Restricted Knowledge Policy Notice */}
      <div className="p-4 sm:p-5 rounded-xl bg-amber-950/30 border border-amber-600/40 text-xs sm:text-sm text-sacred-ivoryDim space-y-2">
        <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider text-xs">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>Restricted Knowledge & Research Ethics Policy</span>
        </div>
        <p className="leading-relaxed font-cormorant text-base sm:text-lg">
          {pratyangiraTheology.restrictedKnowledgePolicy}
        </p>
      </div>

      {/* Crucial Theological Distinction: Pratyangira vs Narasimhi */}
      <div className="p-6 sm:p-8 rounded-xl bg-sacred-surface border border-sacred-borderGold/40 space-y-3">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
          Crucial Distinction: Maa Pratyangira and Matrika Narasimhi
        </h2>
        <p className="text-sm text-sacred-ivoryDim leading-relaxed font-cormorant text-lg sm:text-xl">
          {pratyangiraTheology.narasimhiDistinction}
        </p>
      </div>

      {/* Researched Tantric Classifications Table */}
      <div className="space-y-4">
        <div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold">
            Documented Tantric Classifications of Maa Pratyangira
          </h2>
          <p className="text-xs text-sacred-ivoryMuted">
            Research table documenting source-attested manifestations, iconographic variations, and evidence levels.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-sacred-borderGold/30">
          <table className="w-full text-left text-xs text-sacred-ivoryDim">
            <thead className="bg-sacred-dark text-sacred-gold uppercase font-mono tracking-wider border-b border-sacred-borderGold/30">
              <tr>
                <th className="p-3.5">Manifestation</th>
                <th className="p-3.5">Alternative Names</th>
                <th className="p-3.5">Scriptural Reference</th>
                <th className="p-3.5">Iconography Description</th>
                <th className="p-3.5">Regional Tradition</th>
                <th className="p-3.5">Confidence Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sacred-border/50 bg-sacred-surface/70">
              {pratyangiraForms.map((form) => (
                <tr key={form.id} className="hover:bg-sacred-maroon/20 transition-colors">
                  <td className="p-3.5 font-bold text-sacred-ivory whitespace-nowrap">
                    <div>{form.name}</div>
                    <div className="font-devanagari text-sacred-goldLight text-[11px]">{form.sanskritName}</div>
                  </td>
                  <td className="p-3.5 text-sacred-ivoryMuted">
                    {form.alternativeNames.join(', ')}
                  </td>
                  <td className="p-3.5 font-medium text-sacred-goldDark">
                    {form.scripturalReference}
                  </td>
                  <td className="p-3.5 max-w-xs font-cormorant text-sm leading-relaxed">
                    {form.iconographicDescription}
                  </td>
                  <td className="p-3.5 text-sacred-ivoryMuted">
                    {form.regionalAssociation}
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-sacred-dark border border-sacred-border text-emerald-300">
                      {form.confidenceLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Public Devotional Hymns */}
      <div className="space-y-6">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Publicly Attested Devotional Verses & Dhyana
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pratyangiraDevotionalTexts.map((item) => (
            <div key={item.id} className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
              <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
                {item.title}
              </h3>
              <div className="p-4 rounded-lg bg-sacred-dark text-center font-devanagari text-base font-bold text-sacred-goldLight whitespace-pre-wrap leading-relaxed border border-sacred-borderGold/20">
                {item.sanskrit}
              </div>
              <div className="text-xs text-sacred-ivoryMuted italic font-serif leading-relaxed">
                {item.transliteration}
              </div>
              <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed bg-sacred-dark/50 p-3 rounded">
                {item.meaning}
              </p>
              <div className="text-[10px] text-sacred-goldDark text-right">
                Attested in: {item.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Temple Traditions */}
      <div className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Historic Temple Traditions & Shrines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pratyangiraTemples.map((temple, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2">
              <div className="flex items-center space-x-2 text-sacred-gold text-xs font-semibold">
                <MapPin className="w-4 h-4" />
                <span>{temple.location}</span>
              </div>
              <h3 className="font-cinzel text-base font-bold text-sacred-ivory">
                {temple.name}
              </h3>
              <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
                {temple.significance}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
