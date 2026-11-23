import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Flame, Shield, Compass, BookOpen, Crown } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Directory', path: '/directory' },
    { label: 'Categories', path: '/categories' },
    { label: 'Maa Pratyangira', path: '/pratyangira', highlight: true },
    { label: 'Odisha Shakta', path: '/odisha-heritage', highlight: true },
    { label: 'Sri Chakra', path: '/sri-chakra' },
    { label: 'Shakti Peethas', path: '/shakti-peethas' },
    { label: 'Scriptures', path: '/scriptures' },
    { label: 'Achara & Kula', path: '/acharas' },
    { label: 'Kashmir Trika', path: '/kashmir-shaivism' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070605]/95 backdrop-blur-md border-b border-sacred-borderGold/30">
      {/* Top sacred mini-banner */}
      <div className="bg-gradient-to-r from-sacred-maroonDark via-sacred-maroon to-sacred-maroonDark text-center py-1 px-2 text-[10px] sm:text-[11px] font-devanagari text-sacred-goldLight/90 tracking-wider sm:tracking-widest border-b border-sacred-borderGold/20 truncate">
        ॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥ श्री आदिपराशक्ति तत्त्वज्ञानकोशः ॥
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group text-left min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border border-sacred-gold/60 bg-gradient-to-br from-[#2a080c] to-[#070605] flex items-center justify-center shadow-sacred-glow group-hover:border-sacred-gold transition-all duration-300">
              <span className="font-devanagari text-xl sm:text-2xl font-bold gold-gradient-text drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                ॐ
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-cinzel text-base sm:text-2xl font-extrabold tracking-wider gold-gradient-text truncate">
                  SHAKTA TATTVA
                </span>
              </div>
              <p className="text-[9px] sm:text-xs font-devanagari text-sacred-goldDark tracking-wider truncate">
                श्री आदिपराशक्ति तत्त्वज्ञानकोशः
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium tracking-wide transition-all ${
                    active
                      ? 'text-sacred-goldLight bg-sacred-maroon/70 border border-sacred-gold/40 shadow-sacred-glow'
                      : link.highlight
                      ? 'text-amber-300 hover:text-white bg-amber-950/30 border border-amber-600/30 hover:border-amber-500/60'
                      : 'text-sacred-ivoryDim hover:text-sacred-goldLight hover:bg-sacred-surfaceLight/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Search Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/40 text-sacred-ivoryDim hover:text-sacred-gold hover:border-sacred-gold/80 transition-all text-xs sm:text-sm"
              title="Search encyclopedia (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-sacred-gold" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-sacred-dark border border-sacred-border rounded text-sacred-ivoryMuted">
                ⌘K
              </kbd>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-sacred-surface text-sacred-ivoryDim hover:text-sacred-gold border border-sacred-borderGold/30"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sacred-dark border-b border-sacred-borderGold/40 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <div className="pb-2 border-b border-sacred-border/60 text-xs font-devanagari text-sacred-goldLight/70">
            विभागावली (Encyclopedia Sections)
          </div>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium tracking-wide transition-all ${
                  active
                    ? 'text-sacred-goldLight bg-sacred-maroon border border-sacred-gold/40'
                    : link.highlight
                    ? 'text-amber-300 bg-amber-950/40 border border-amber-600/30'
                    : 'text-sacred-ivoryDim hover:text-sacred-gold hover:bg-sacred-surface'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-sacred-border/60 flex justify-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-2.5 flex items-center justify-center space-x-2 bg-sacred-maroon border border-sacred-borderGold text-sacred-goldLight rounded-lg text-sm"
            >
              <Search className="w-4 h-4" />
              <span>Search All Devis & Scriptures</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
