import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Compass, BookOpen, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050403] border-t border-sacred-borderGold/40 text-sacred-ivoryDim pt-12 sm:pt-16 pb-12 mt-12 sm:mt-16 relative overflow-hidden sacred-isolated-card">
      {/* Subtle background glow using pure CSS gradient (zero GPU blur shader lag/flicker) */}
      <div className="absolute top-0 inset-x-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(139,24,36,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sacred-borderGold/20">
          {/* Column 1: Identity & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-sacred-gold/60 bg-sacred-maroon flex items-center justify-center shadow-sacred-glow">
                <span className="font-devanagari text-xl font-bold gold-gradient-text">ॐ</span>
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold gold-gradient-text tracking-wider">
                  SHAKTA TATTVA
                </h3>
                <p className="text-xs font-devanagari text-sacred-goldDark">
                  श्री आदिपराशक्ति तत्त्वज्ञानकोशः
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sacred-ivoryDim/80 leading-relaxed font-cormorant text-base sm:text-lg">
              A comprehensive digital encyclopedia dedicated exclusively to Adi Parashakti, Maa Bhagwati, and the unbroken Shakta Parampara. Preserving authentic scriptural references, iconographic precision, temple lineages, and philosophical depth from Puranas, Agamas, Tantras, and Sri Vidya.
            </p>

            {/* Sacred Inscription Box */}
            <div className="p-3.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/30 text-xs font-devanagari text-sacred-goldLight/90 space-y-1">
              <div className="font-semibold text-sacred-gold">॥ महामन्त्र समर्पणम् ॥</div>
              <div className="tracking-wide">ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे।</div>
              <div className="text-[11px] text-sacred-ivoryMuted font-sans">
                Sarvamangalamangalye Shive Sarvarthasadhike
              </div>
            </div>
          </div>

          {/* Column 2: Major Classifications */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-sacred-gold tracking-widest uppercase border-b border-sacred-borderGold/30 pb-2">
              Classifications
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/categories/das-mahavidya" className="hover:text-sacred-gold transition-colors">
                  दशमहाविद्याः (Das Mahavidya)
                </Link>
              </li>
              <li>
                <Link to="/categories/nava-durga" className="hover:text-sacred-gold transition-colors">
                  नवदुर्गाः (Nava Durga)
                </Link>
              </li>
              <li>
                <Link to="/categories/matrikas" className="hover:text-sacred-gold transition-colors">
                  सप्त/अष्टमातृकाः (Matrikas)
                </Link>
              </li>
              <li>
                <Link to="/categories/chausath-yoginis" className="hover:text-sacred-gold transition-colors">
                  चतुःषष्टियोगिन्यः (64 Yoginis)
                </Link>
              </li>
              <li>
                <Link to="/categories/shodasha-nityas" className="hover:text-sacred-gold transition-colors">
                  षोडशनित्याः (16 Nityas)
                </Link>
              </li>
              <li>
                <Link to="/categories/dwadasha-kalis" className="hover:text-sacred-gold transition-colors">
                  द्वादशकाली (Dwadasha Kalis)
                </Link>
              </li>
              <li>
                <Link to="/categories/ashta-lakshmi" className="hover:text-sacred-gold transition-colors">
                  अष्टलक्ष्मी (Ashta Lakshmi)
                </Link>
              </li>
              <li>
                <Link to="/categories/navapatrika" className="hover:text-sacred-gold transition-colors">
                  नवपत्रिका (Navapatrika)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tantric Traditions */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-sacred-gold tracking-widest uppercase border-b border-sacred-borderGold/30 pb-2">
              Traditions & Achara
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/acharas" className="hover:text-sacred-gold transition-colors">
                  Four Acharas Overview
                </Link>
              </li>
              <li>
                <Link to="/acharas" className="hover:text-sacred-gold transition-colors">
                  Dakshinachara (Right-Hand)
                </Link>
              </li>
              <li>
                <Link to="/acharas" className="hover:text-sacred-gold transition-colors">
                  Vamachara (Left-Hand)
                </Link>
              </li>
              <li>
                <Link to="/acharas" className="hover:text-sacred-gold transition-colors">
                  Samayachara (Internal Yoga)
                </Link>
              </li>
              <li>
                <Link to="/acharas" className="hover:text-sacred-gold transition-colors">
                  Kaulachara (Kula Path)
                </Link>
              </li>
              <li>
                <Link to="/sri-chakra" className="hover:text-sacred-gold transition-colors">
                  Sri Vidya & Sri Chakra
                </Link>
              </li>
              <li>
                <Link to="/kashmir-shaivism" className="hover:text-sacred-gold transition-colors">
                  Kashmir Shaivism & Krama
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Special Archives */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-sacred-gold tracking-widest uppercase border-b border-sacred-borderGold/30 pb-2">
              Special Archives
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/pratyangira" className="hover:text-sacred-gold transition-colors">
                  <span>Maa Pratyangira Research</span>
                </Link>
              </li>
              <li>
                <Link to="/odisha-heritage" className="hover:text-sacred-gold transition-colors">
                  <span>Odisha Shakta Parampara</span>
                </Link>
              </li>
              <li>
                <Link to="/shakti-peethas" className="hover:text-sacred-gold transition-colors">
                  51 Shakti Peethas Atlas
                </Link>
              </li>
              <li>
                <Link to="/scriptures" className="hover:text-sacred-gold transition-colors">
                  Shakta Scriptural Library
                </Link>
              </li>
              <li>
                <Link to="/categories/gupta-shakti" className="hover:text-sacred-gold transition-colors">
                  Gupta Shakti Rahasya
                </Link>
              </li>
              <li>
                <Link to="/directory" className="hover:text-sacred-gold transition-colors">
                  Complete Devi Directory
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical & Scholarly Policy Notice */}
        <div className="py-6 border-b border-sacred-borderGold/20 grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-sacred-ivoryMuted">
          <div>
            <span className="text-sacred-goldLight font-medium">Research Hierarchy & Accuracy:</span> Primary Sanskrit texts, Puranas, Agamas, traditional temple records, and peer-reviewed Indological scholarship take precedence over unverified internet claims. Where interpretations diverge, variations are presented transparently.
          </div>
          <div>
            <span className="text-sacred-goldLight font-medium">Restricted Knowledge Policy:</span> Initiation-dependent Tantric mantras, secret Nyasas, and prayogas strictly belong to authorized Guru-parampara transmission. This encyclopedia presents authentic devotional, philosophical, iconographical, and historical knowledge.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sacred-ivoryMuted space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} SHAKTA TATTVA Digital Encyclopedia.</span>
            <span className="text-sacred-goldDark">॥ जय माँ आदिशक्ति ॥</span>
          </div>

          <div className="font-devanagari text-sacred-goldLight/70 text-xs">
            सर्वं खल्विदमेवाहं नान्यदस्ति सनातनम् — देवीभागवतम्
          </div>
        </div>
      </div>
    </footer>
  );
};
