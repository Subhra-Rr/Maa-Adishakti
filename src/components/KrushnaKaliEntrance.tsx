import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles, ArrowRight, Flower, Volume2, VolumeX, Eye } from 'lucide-react';

interface KrushnaKaliEntranceProps {
  onEnter: () => void;
}

interface Petal {
  id: number;
  left: number; // percentage (0-100)
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  rotation: number; // deg
  color: string;
  swayAmount: number; // px
  petalType: 'hibiscus' | 'marigold' | 'lotus';
}

export const KrushnaKaliEntrance: React.FC<KrushnaKaliEntranceProps> = ({ onEnter }) => {
  const [stage, setStage] = useState<'emerging' | 'revealed' | 'entering'>('emerging');
  const [showInfo, setShowInfo] = useState(false);

  // Generate randomized falling flower petals
  const petals: Petal[] = useMemo(() => {
    const colors = [
      '#e11d48', // Crimson Red
      '#be123c', // Deep Hibiscus
      '#fbbf24', // Sacred Golden Marigold
      '#f59e0b', // Deep Saffron Marigold
      '#fda4af', // Lotus Pink
      '#d97706', // Antique Gold
    ];

    return Array.from({ length: 38 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 4.5 + Math.random() * 5.5,
      delay: Math.random() * 4,
      rotation: Math.random() * 360,
      color: colors[i % colors.length],
      swayAmount: 20 + Math.random() * 40,
      petalType: i % 3 === 0 ? 'hibiscus' : i % 3 === 1 ? 'marigold' : 'lotus',
    }));
  }, []);

  // Progression of the divine emergence animation
  useEffect(() => {
    // Stage 1: Divine radiance emerges
    const revealTimer = setTimeout(() => {
      setStage('revealed');
    }, 800);

    return () => clearTimeout(revealTimer);
  }, []);

  const handleEnterClick = () => {
    setStage('entering');
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050403] overflow-hidden transition-all duration-700 ${
        stage === 'entering' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        width: '100vw',
        height: '100dvh',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Sri KrushnaKali Welcome Darshan"
    >
      {/* ========================================================
          1. SACRED BACKGROUND AURA & RADIANCE
      ======================================================== */}
      {/* Deep celestial radial backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22080d_0%,#110406_45%,#050403_100%)]" />

      {/* Pulsing Sacred Golden Radiance Halo behind Maa */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[480px] lg:w-[620px] h-[300px] sm:h-[480px] lg:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,rgba(230,106,31,0.2)_40%,transparent_75%)] animate-pulse blur-2xl" />
        <div className="absolute w-[220px] sm:w-[360px] lg:w-[480px] h-[220px] sm:h-[360px] lg:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(240,211,118,0.45)_0%,rgba(139,24,36,0.3)_60%,transparent_80%)] blur-xl" />
      </div>

      {/* Mystical Sacred Rays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.15)_30deg,transparent_60deg,rgba(240,211,118,0.2)_90deg,transparent_120deg,rgba(212,175,55,0.15)_150deg,transparent_180deg,rgba(240,211,118,0.2)_210deg,transparent_240deg,rgba(212,175,55,0.15)_270deg,transparent_300deg,rgba(240,211,118,0.2)_330deg,transparent_360deg)] animate-[spin_60s_linear_infinite]" />
      </div>

      {/* ========================================================
          2. FALLING FLOWER PETALS (PUSHPA-VRISHTI)
      ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute top-[-40px]"
            style={{
              left: `${petal.left}%`,
              animation: `petalFall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            <div
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 1.3}px`,
                backgroundColor: petal.color,
                borderRadius:
                  petal.petalType === 'hibiscus'
                    ? '50% 0 50% 50%'
                    : petal.petalType === 'marigold'
                    ? '40% 60% 70% 30% / 40% 50% 60% 50%'
                    : '60% 40% 50% 50% / 60% 30% 70% 40%',
                boxShadow: `0 0 10px ${petal.color}90`,
                transform: `rotate(${petal.rotation}deg)`,
                opacity: 0.85,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
              }}
            />
          </div>
        ))}
      </div>

      {/* ========================================================
          3. TOP FLOATING SACRED HEADER & QUICK SKIP
      ======================================================== */}
      <div className="absolute top-3 sm:top-5 inset-x-0 px-4 sm:px-8 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-sacred-dark/80 border border-sacred-gold/40 shadow-sacred-glow backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-sacred-gold animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[11px] sm:text-xs font-devanagari text-sacred-goldLight font-bold tracking-wider">
            ॥ श्री कृष्णकाली साक्षात् दर्शनम् ॥
          </span>
        </div>

        <button
          onClick={handleEnterClick}
          className="px-3 py-1 rounded-full bg-sacred-dark/80 hover:bg-sacred-maroon/80 border border-sacred-borderGold/60 hover:border-sacred-gold text-sacred-ivoryDim hover:text-sacred-goldLight text-xs font-cinzel transition-all shadow-md backdrop-blur-md"
          title="Direct entry to encyclopedia"
        >
          Skip to Portal &rarr;
        </button>
      </div>

      {/* ========================================================
          4. CENTRAL DIVINE APPARITION OF SRI KRUSHNAKALI
      ======================================================== */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full px-4 text-center mt-6 sm:mt-4">
        {/* Divine Form Container with Ethereal Vignette Mask */}
        <div
          className={`relative transition-all duration-1000 ease-out flex items-center justify-center ${
            stage === 'emerging'
              ? 'opacity-0 scale-75 blur-md translate-y-6'
              : 'opacity-100 scale-100 blur-0 translate-y-0'
          }`}
        >
          {/* Luminous Outer Halo Border */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-sacred-gold via-amber-500 to-sacred-crimson opacity-30 blur-xl animate-pulse" />

          {/* The Apparition Image with seamless organic mask and golden backlight */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-sacred-gold/60 via-sacred-borderGold/40 to-[#2a080c] shadow-[0_0_50px_rgba(212,175,55,0.45)]">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#070605] flex items-center justify-center max-h-[50vh] sm:max-h-[56vh] md:max-h-[60vh]">
              {/* Ethereal edge feathering vignette */}
              <img
                src="/images/devis/krushnakali.jpg"
                alt="Sri KrushnaKali - Divine Non-Dual Manifestation of Adi Parashakti"
                className="max-h-[48vh] sm:max-h-[54vh] md:max-h-[58vh] w-auto object-contain drop-shadow-[0_0_25px_rgba(240,211,118,0.5)] select-none pointer-events-none transition-transform duration-700 hover:scale-105"
              />

              {/* Shimmer light beam across the divine form */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3.5s_infinite] pointer-events-none" />

              {/* Gentle bottom edge gradient blend so it does not look like a hard photo box */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070605] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#070605]/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ========================================================
            5. SACRED TITLES & NON-DUAL PHILOSOPHY
        ======================================================== */}
        <div
          className={`mt-4 sm:mt-5 space-y-1.5 transition-all duration-700 delay-300 ${
            stage === 'emerging' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-gradient-text tracking-wider">
              Sri KrushnaKali
            </h1>
          </div>

          <div className="font-devanagari text-sm sm:text-base text-sacred-goldLight font-bold">
            ॥ श्री कृष्णकाली साक्षात् महास्वरूपम् ॥
          </div>

          <p className="text-xs sm:text-sm text-sacred-ivoryDim font-cormorant text-base sm:text-lg leading-snug max-w-md mx-auto line-clamp-2 sm:line-clamp-none">
            The Supreme Non-Dual Revelation where Lord Krishna and Maa Mahakali reveal their undivided essence — uniting the cosmic flute with the divine sword.
          </p>

          <div className="font-devanagari text-[11px] sm:text-xs text-sacred-goldDark italic pt-0.5">
            यः श्यामः सैव कृष्णा च यः कृष्णः सैव कालिकाम्। (One Supreme Consciousness)
          </div>
        </div>

        {/* ========================================================
            6. "ENTER SANCTUM" ACTION BUTTON
        ======================================================== */}
        <div
          className={`mt-4 sm:mt-5 transition-all duration-700 delay-500 w-full max-w-xs ${
            stage === 'emerging' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <button
            onClick={handleEnterClick}
            className="w-full group relative overflow-hidden py-3 sm:py-3.5 px-6 rounded-xl bg-gradient-to-r from-sacred-maroon via-sacred-crimson to-sacred-maroon hover:from-amber-700 hover:via-sacred-maroon hover:to-amber-800 border-2 border-sacred-gold text-sacred-goldLight hover:text-white font-cinzel font-bold text-sm sm:text-base uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] transition-all transform active:scale-95 flex items-center justify-center space-x-2.5"
          >
            {/* Shimmer sheen over button */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <Sparkles className="w-4 h-4 text-sacred-goldLight group-hover:rotate-45 transition-transform" />
            <span>प्रवेश करें • Enter Sanctum</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="text-[10px] sm:text-[11px] text-sacred-ivoryMuted font-mono mt-2">
            Touch to enter Shakta Tattva Encyclopedia
          </div>
        </div>
      </div>

      {/* ========================================================
          7. CSS ANIMATIONS INLINE STYLES FOR FLOWER SHOWER
      ======================================================== */}
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translate3d(0, -30px, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          90% {
            opacity: 0.85;
          }
          100% {
            transform: translate3d(var(--sway, 30px), 105vh, 0) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
