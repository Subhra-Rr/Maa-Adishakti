import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface VedicPageTransitionProps {
  children: React.ReactNode;
}

export const VedicPageTransition: React.FC<VedicPageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pranaProgress, setPranaProgress] = useState(0);
  const [showMandalaVeil, setShowMandalaVeil] = useState(false);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Only trigger transition if the path actually changed
    if (prevPathRef.current === location.pathname) {
      return;
    }
    prevPathRef.current = location.pathname;

    // Instantly reset scroll to top for flawless sanctum entry
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    setIsTransitioning(true);
    setShowMandalaVeil(true);
    setPranaProgress(25);

    const timer1 = setTimeout(() => {
      setPranaProgress(75);
    }, 120);

    const timer2 = setTimeout(() => {
      setPranaProgress(100);
    }, 280);

    const timer3 = setTimeout(() => {
      setIsTransitioning(false);
    }, 550);

    const timer4 = setTimeout(() => {
      setShowMandalaVeil(false);
      setPranaProgress(0);
    }, 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]);

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] overflow-x-clip">
      {/* ========================================================
          1. PRANA SUTRA: SACRED GOLDEN TOP TRANSITION THREAD
      ======================================================== */}
      {isTransitioning && (
        <div
          className="fixed top-16 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300"
          style={{ opacity: pranaProgress === 100 ? 0 : 1 }}
          aria-hidden="true"
        >
          {/* Main golden energy line */}
          <div
            className="h-[2.5px] bg-gradient-to-r from-sacred-crimson via-sacred-gold to-sacred-goldLight transition-all duration-300 ease-out shadow-[0_0_12px_rgba(240,211,118,0.9),0_0_25px_rgba(212,175,55,0.6)]"
            style={{ width: `${pranaProgress}%` }}
          >
            {/* Radiant golden Jyoti (spark tip) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_15px_#f0d376,0_0_25px_#d4af37]" />
          </div>
        </div>
      )}

      {/* ========================================================
          2. VEDIC SANCTUM MANDALA VEIL (Transient Ethereal Glow)
      ======================================================== */}
      {showMandalaVeil && (
        <div
          className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center transition-opacity duration-500 ease-out animate-vedic-veil"
          aria-hidden="true"
        >
          {/* Ambient divine Tejas aura radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.08)_0%,rgba(139,24,36,0.05)_40%,transparent_70%)]" />

          {/* Sacred 16-Petal Vedic Lotus Mandala Geometry */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 opacity-20 animate-vedic-mandala-bloom">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-sacred-gold stroke-current"
              fill="none"
              strokeWidth="0.75"
            >
              {/* Outer Sacred Rings */}
              <circle cx="100" cy="100" r="95" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="100" cy="100" r="88" opacity="0.8" />
              <circle cx="100" cy="100" r="76" opacity="0.5" />
              
              {/* 16 Petals Lotus Geometry */}
              {[...Array(16)].map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                  <path
                    key={i}
                    d="M 100 100 Q 108 50 100 24 Q 92 50 100 100"
                    transform={`rotate(${angle} 100 100)`}
                    opacity="0.7"
                  />
                );
              })}

              {/* Central Bindu & Triangles */}
              <circle cx="100" cy="100" r="28" strokeDasharray="2 2" opacity="0.9" />
              <polygon points="100,75 122,112 78,112" opacity="0.8" />
              <polygon points="100,125 122,88 78,88" opacity="0.8" />
              <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.95" />
            </svg>
          </div>
        </div>
      )}

      {/* ========================================================
          3. SANCTUM PAGE CONTENT WITH SILK-SMOOTH VEDIC ENTER
      ======================================================== */}
      <div
        key={location.pathname}
        className="w-full relative z-10 vedic-sanctum-enter"
      >
        {children}
      </div>
    </div>
  );
};
