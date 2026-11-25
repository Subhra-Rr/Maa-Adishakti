import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Search, Menu, X, Flame, Shield, Compass, BookOpen, Crown,
  User, LogOut, Sparkles, Lock, Check
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();

  // Lock body scroll when mobile navigation drawer is active
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Directory', path: '/directory' },
    { label: 'Categories', path: '/categories' },
    { label: 'Daily Sadhana', path: '/sadhana', highlight: true },
    { label: 'Maa Pratyangira', path: '/pratyangira', highlight: true },
    { label: 'Odisha Shakta', path: '/odisha-heritage' },
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
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group text-left shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border border-sacred-gold/60 bg-gradient-to-br from-[#2a080c] to-[#070605] flex items-center justify-center shadow-sacred-glow group-hover:border-sacred-gold transition-all duration-300">
              <span className="font-devanagari text-xl sm:text-2xl font-bold gold-gradient-text drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                ॐ
              </span>
            </div>
            <div className="shrink-0">
              <div className="flex items-center space-x-2">
                <span className="font-cinzel text-base sm:text-xl xl:text-2xl font-extrabold tracking-wider gold-gradient-text whitespace-nowrap">
                  SHAKTA TATTVA
                </span>
              </div>
              <p className="text-[9px] sm:text-xs font-devanagari text-sacred-goldDark tracking-wider whitespace-nowrap">
                श्री आदिपराशक्ति तत्त्वज्ञानकोशः
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 2xl:px-2.5 py-1.5 rounded-md text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
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

          {/* Actions: Search Button + Authentication Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="min-h-[44px] flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/40 text-sacred-ivoryDim hover:text-sacred-gold hover:border-sacred-gold/80 transition-all text-xs sm:text-sm"
              title="Search encyclopedia (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-sacred-gold shrink-0" />
              <span className="hidden md:inline whitespace-nowrap">Search...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-sacred-dark border border-sacred-border rounded text-sacred-ivoryMuted">
                ⌘K
              </kbd>
            </button>

            {/* Authentication Button / User Profile */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="min-h-[44px] flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-sacred-maroon/80 border border-sacred-borderGold text-sacred-goldLight text-xs font-semibold hover:bg-sacred-maroon transition-all shadow-sacred-glow"
                >
                  <div className="w-5 h-5 rounded-full bg-sacred-gold text-sacred-dark font-bold text-[10px] flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-sacred-dark border border-sacred-borderGold/50 shadow-2xl p-2 space-y-1 z-50 text-xs">
                    <div className="p-2 border-b border-sacred-border/60">
                      <div className="font-cinzel font-bold text-sacred-ivory truncate">{user.name}</div>
                      <div className="text-[10px] text-sacred-goldDark truncate">{user.email}</div>
                    </div>

                    <Link
                      to="/sadhana"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-2.5 py-2 rounded-lg text-sacred-ivoryDim hover:text-sacred-gold hover:bg-sacred-surface transition-all"
                    >
                      <Sparkles className="w-4 h-4 text-sacred-gold" />
                      <span>My Sadhana Dashboard</span>
                    </Link>

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center space-x-2 px-2.5 py-2 rounded-lg text-red-300 hover:text-red-200 hover:bg-red-950/40 transition-all text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sacred-maroon/70 border border-sacred-borderGold/60 hover:border-sacred-gold text-sacred-goldLight text-xs sm:text-sm font-semibold transition-all shadow-sacred-glow"
                title="Sign in for personalized study and stotra bookmarks"
              >
                <User className="w-3.5 h-3.5 text-sacred-gold" />
                <span>Sign In</span>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg bg-sacred-surface text-sacred-ivoryDim hover:text-sacred-gold border border-sacred-borderGold/30"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-sacred-dark/95 backdrop-blur-xl border-b border-sacred-borderGold/40 px-4 pt-3 pb-8 pb-safe space-y-2 max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 border-b border-sacred-border/60 text-xs font-devanagari text-sacred-goldLight/70 flex items-center justify-between">
            <span>विभागावली (Encyclopedia Sections)</span>
            {user && <span className="font-mono text-[10px] text-sacred-gold">Logged in as {user.name}</span>}
          </div>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center min-h-[44px] px-3.5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all ${
                  active
                    ? 'text-sacred-goldLight bg-sacred-maroon border border-sacred-gold/40 shadow-sacred-glow'
                    : link.highlight
                    ? 'text-amber-300 bg-amber-950/40 border border-amber-600/30'
                    : 'text-sacred-ivoryDim hover:text-sacred-gold hover:bg-sacred-surface active:bg-sacred-surface'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-sacred-border/60 space-y-2">
            {!isAuthenticated ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('login');
                }}
                className="w-full min-h-[44px] py-2.5 flex items-center justify-center space-x-2 bg-sacred-maroon border border-sacred-gold text-sacred-goldLight rounded-lg text-sm font-bold shadow-sacred-glow active:scale-[0.99] transition-transform"
              >
                <User className="w-4 h-4" />
                <span>Sign In / Register</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  logout();
                }}
                className="w-full min-h-[44px] py-2.5 flex items-center justify-center space-x-2 bg-sacred-dark border border-red-500/40 text-red-300 rounded-lg text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out ({user?.name})</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full min-h-[44px] py-2.5 flex items-center justify-center space-x-2 bg-sacred-surface border border-sacred-borderGold text-sacred-ivory rounded-lg text-sm"
            >
              <Search className="w-4 h-4 text-sacred-gold" />
              <span>Search All Devis & Scriptures</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
