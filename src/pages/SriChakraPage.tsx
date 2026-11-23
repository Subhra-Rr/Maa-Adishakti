import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveSriChakra } from '../components/InteractiveSriChakra';
import { Sparkles, Crown, Moon, Shield, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export const SriChakraPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">Sri Vidya & Sri Chakra Yantra</span>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <Sparkles className="w-3.5 h-3.5 text-sacred-gold" />
          <span>श्रीविद्या श्रीचक्र महातत्त्वम् — Srikula Knowledge System</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
          Sri Vidya & Sri Chakra Upasana
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed max-w-4xl">
          Sri Vidya is celebrated as the sovereign jewel (Vidya-Rajni) of Tantric philosophy. Centered upon Lalita Mahatripurasundari, the jewel island of Manidvipa, and the sacred geometry of the Sri Chakra, it synthesizes uncaused maternal compassion (Karuna), aesthetic beauty (Saundarya), and radical non-dual self-realization (Advaita-Jnana).
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            to="/devi/tripura-sundari"
            className="px-5 py-2.5 rounded-lg bg-sacred-maroon border border-sacred-gold text-sacred-goldLight font-bold text-xs uppercase tracking-wider shadow-sacred-glow hover:bg-sacred-crimson transition-all flex items-center space-x-2"
          >
            <span>Explore Lalita Tripura Sundari Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/categories/shodasha-nityas"
            className="px-5 py-2.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/60 text-sacred-ivory font-medium text-xs uppercase tracking-wider hover:border-sacred-gold transition-all"
          >
            The 16 Nitya Devis
          </Link>
        </div>
      </div>

      {/* Interactive Sri Chakra Explorer */}
      <InteractiveSriChakra />

      {/* Key Components of Sri Vidya Tradition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
          <div className="flex items-center space-x-2 text-sacred-gold text-sm font-bold font-cinzel">
            <Crown className="w-4 h-4" />
            <span>Manidvipa (The Jewel Island)</span>
          </div>
          <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
            Described in the Devi Bhagavata Purana and Lalita Mahatmya as the highest cosmic abode beyond Vaikuntha and Kailasha. Surrounded by concentric ramparts of metals and gemstones, at its center is the Chintamani Griha (abode of wish-fulfilling jewels) where Lalita sits on the lap of Kameshvara Shiva.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
          <div className="flex items-center space-x-2 text-sacred-gold text-sm font-bold font-cinzel">
            <Moon className="w-4 h-4" />
            <span>The 16 Nitya Devis & Lunar Cycles</span>
          </div>
          <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
            The sixteen Nityas preside over the fifteen lunar tithis of the waxing and waning moon, culminating in the 16th non-dual Kala (Maha Nitya Lalita). They reflect the continuous fluctuation of the human subtle body in harmony with the cosmos.
          </p>
          <Link to="/categories/shodasha-nityas" className="text-xs text-sacred-goldLight underline block pt-1">
            View 16 Nityas Directory &rarr;
          </Link>
        </div>

        <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
          <div className="flex items-center space-x-2 text-sacred-gold text-sm font-bold font-cinzel">
            <BookOpen className="w-4 h-4" />
            <span>Samayachara Internal Worship</span>
          </div>
          <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
            The highest contemplative mode in Sri Vidya: mental meditation on the Kundalini piercing the six chakras to unite with Paramashiva in the thousand-petaled Sahasrara lotus. Free from physical external rituals, every sensory experience is dissolved into pure bliss.
          </p>
          <Link to="/acharas" className="text-xs text-sacred-goldLight underline block pt-1">
            Compare Achara Modes &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
