import React from 'react';
import { Link } from 'react-router-dom';
import { dwadashaKalis } from '../data/dwadashaKalis';
import { Eye, Infinity, Sparkles, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export const KashmirShaivismPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-sacred-ivoryMuted border-b border-sacred-borderGold/30 pb-4">
        <Link to="/" className="hover:text-sacred-gold">Home</Link>
        <span>/</span>
        <span className="text-sacred-goldLight font-semibold">Kashmir Shaivism & Krama Philosophy</span>
      </div>

      {/* Hero Banner */}
      <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-sacred-maroon via-sacred-dark to-sacred-surface border-2 border-sacred-borderGold/60 shadow-sacred-glow space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark border border-sacred-gold/40 text-xs font-devanagari text-sacred-goldLight">
          <Infinity className="w-3.5 h-3.5 text-sacred-gold" />
          <span>काश्मीर शैव-शाक्त दर्शनम् — Non-Dual Trika & Krama</span>
        </div>
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold gold-gradient-text">
          Kashmiri Shaivism & Krama
        </h1>
        <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed max-w-4xl">
          In non-dual Kashmir Shaivism, Shakti is not a subordinate or separate entity, but the supreme self-awareness (Vimarsha) and unconditioned kinetic autonomy (Svatantrya) of Shiva (Prakasha). Without Shakti, consciousness is inert (Shava); with Shakti, every vibration of the universe is recognized as the spontaneous play of the Divine.
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            to="/categories/dwadasha-kalis"
            className="px-5 py-2.5 rounded-lg bg-sacred-maroon border border-sacred-gold text-sacred-goldLight font-bold text-xs uppercase tracking-wider shadow-sacred-glow hover:bg-sacred-crimson transition-all flex items-center space-x-2"
          >
            <span>Explore the 12 Krama Kalis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/scriptures"
            className="px-5 py-2.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/60 text-sacred-ivory font-medium text-xs uppercase tracking-wider hover:border-sacred-gold transition-all"
          >
            Tantraloka & Scriptural Treatises
          </Link>
        </div>
      </div>

      {/* Trika Shaktis Trinity: Para, Parapara, Apara */}
      <div className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          The Trika Shaktis — The Threefold Goddess Trinity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
            <span className="font-mono text-xs text-sacred-gold font-bold">1. ABHEDA (Non-Duality)</span>
            <h3 className="font-cinzel text-xl font-bold text-sacred-ivory">Para Devi (परा)</h3>
            <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
              The supreme, unconditioned non-dual consciousness. She represents pure transcendence before subject and object separate. Dwells at the center spike of the Trika trident in immaculate crystalline white.
            </p>
            <Link to="/devi/para" className="text-xs text-sacred-goldLight underline block pt-1">
              Read Para Profile &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
            <span className="font-mono text-xs text-sacred-gold font-bold">2. BHEDABHEDA (Unity-in-Diversity)</span>
            <h3 className="font-cinzel text-xl font-bold text-sacred-ivory">Parapara Devi (परापरा)</h3>
            <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
              The intermediate threshold where consciousness perceives unity and multiplicity simultaneously like a reflection in a mirror. Dwells at the right spike of the trident in rosy golden dawn.
            </p>
            <Link to="/devi/parapara" className="text-xs text-sacred-goldLight underline block pt-1">
              Read Parapara Profile &rarr;
            </Link>
          </div>

          <div className="p-6 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-3">
            <span className="font-mono text-xs text-sacred-gold font-bold">3. BHEDA (Multiplicity Transfigured)</span>
            <h3 className="font-cinzel text-xl font-bold text-sacred-ivory">Apara Devi (अपरा)</h3>
            <p className="text-xs text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
              The immanent power operating through worldly sensory experience. Through her grace, everyday reality is recognized as the vibrating body of God rather than an illusion to be escaped.
            </p>
            <Link to="/devi/apara" className="text-xs text-sacred-goldLight underline block pt-1">
              Read Apara Profile &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Core Philosophical Concepts */}
      <div className="space-y-4">
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-sacred-gold border-b border-sacred-borderGold/30 pb-2">
          Pillars of Kashmiri Shakta-Shaiva Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2">
            <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
              Spanda (The Cosmic Pulsation)
            </h3>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Expounded in the Spanda Karika, Spanda is the eternal throb or kinetic vibration of consciousness. Unlike static Advaita Vedanta, Kashmir Shaivism asserts that consciousness is eternally dynamic, pulsating continuously between projection (Unmesha) and withdrawal (Nimesha).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2">
            <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
              Pratyabhijna (Spontaneous Self-Recognition)
            </h3>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Liberation is not an attainment of something distant, but the immediate recognition (Pratyabhijna) of one’s own eternal nature as Shiva-Shakti, like a maiden who recognizes her beloved when he reveals his true identity.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2">
            <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
              Svatantrya (Absolute Autonomy)
            </h3>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              Consciousness is sovereignly free; it creates the universe without external material cause, simply out of its own playful free will (Lila).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-sacred-surface border border-sacred-borderGold/30 space-y-2">
            <h3 className="font-cinzel text-base font-bold text-sacred-goldLight">
              Krama (The Sequential Dissolution of Cognition)
            </h3>
            <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-relaxed">
              The Krama school traces how consciousness projects itself into twelve successive phases of Kali, moving from initial perception (Srishti Kali) to total ineffable transcendence (Mahabhairava Chandograghora Kali).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
