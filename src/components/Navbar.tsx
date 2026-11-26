import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Search, Menu, X, Flame, Shield, Compass, BookOpen, Crown,
  User, LogOut, Sparkles, Lock, Check, ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenDarshan?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenDarshan }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [traditionsDropdownOpen, setTraditionsDropdownOpen] = useState(false);
  const traditionsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();

  // Lock body scroll when mobile navigation drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change or outside click
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
    setTraditionsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (traditionsRef.current && !traditionsRef.current.contains(e.target as Node)) {
        setTraditionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Primary top-level direct links (compact, elegant, non-colliding)
  const primaryLinks = [
    { label: 'Directory', path: '/directory' },
    { label: 'Categories', path: '/categories' },
    { label: 'Daily Sadhana', path: '/sadhana', highlight: true },
    { label: 'Sri Chakra', path: '/sri-chakra' }
  ];

  // Secondary rich lineage portals housed in the "Traditions & Shrines" dropdown
  const specializedPortals = [
    { label: 'Maa Pratyangira', path: '/pratyangira', desc: 'Sovereign protective Vidya & temple research', icon: Shield, highlight: true },
    { label: 'Odisha Shakta Parampara', path: '/odisha-heritage', desc: 'Vimala, Tara Tarini, Biraja & 64 Yoginis', icon: Compass },
    { label: 'Shakti Peethas Atlas', path: '/shakti-peethas', desc: '51 consecrated shrines & divine limbs', icon: Flame },
    { label: 'Scriptures & Agamas', path: '/scriptures', desc: 'Tantras, Puranas, Stotras & commentaries', icon: BookOpen },
    { label: 'Achara & Kula Traditions', path: '/acharas', desc: 'Dakshinachara, Vamachara & Kaulachara', icon: Sparkles },
    { label: 'Kashmir Trika & Krama', path: '/kashmir-shaivism', desc: 'Non-dual Tantric Spanda & 12 Kalis', icon: Crown }
  ];

  // All links combined for full mobile drawer
  const allNavLinks = [
    ...primaryLinks,
    ...specializedPortals
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isTraditionActive = specializedPortals.some(p => isActive(p.path));

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070605]/95 backdrop-blur-md border-b border-sacred-borderGold/30">
      {/* Top sacred mini-banner with Sri KrushnaKali Darshan trigger */}
      <div className="bg-gradient-to-r from-sacred-maroonDark via-sacred-maroon to-sacred-maroonDark text-center py-1 px-2 text-[10px] sm:text-[11px] font-devanagari text-sacred-goldLight/90 tracking-wider sm:tracking-widest border-b border-sacred-borderGold/20 flex items-center justify-center space-x-2">
        <span className="truncate">॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥ श्री आदिपराशक्ति तत्त्वज्ञानकोशः ॥</span>
        {onOpenDarshan && (
          <button
            onClick={onOpenDarshan}
            className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-sacred-dark/80 hover:bg-sacred-dark border border-sacred-gold/60 text-sacred-goldLight text-[10px] font-bold tracking-normal transition-all hover:scale-105 shadow-sacred-glow shrink-0"
            title="Take Divine Darshan of Sri KrushnaKali"
          >
            <Sparkles className="w-3 h-3 text-sacred-gold" />
            <span>कृष्णकाली दर्शनम्</span>
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group text-left min-w-0 shrink">
            <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 rounded-full border border-sacred-gold/60 bg-gradient-to-br from-[#2a080c] to-[#070605] flex items-center justify-center shadow-sacred-glow group-hover:border-sacred-gold transition-all duration-300">
              <span className="font-devanagari text-lg sm:text-2xl font-bold gold-gradient-text drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                ॐ
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="font-cinzel text-sm sm:text-xl lg:text-2xl font-extrabold tracking-wider gold-gradient-text whitespace-nowrap">
                  SHAKTA TATTVA
                </span>
              </div>
              <p className="text-[8px] sm:text-xs font-devanagari text-sacred-goldDark tracking-wider whitespace-nowrap">
                श्री आदिपराशक्ति तत्त्वज्ञानकोशः
              </p>
            </div>
          </Link>

          {/* Desktop Navigation: 4 Core Links + Traditions Dropdown (Perfect width, ZERO overflow) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 shrink-0">
            {primaryLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
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

            {/* Sacred Traditions & Portals Dropdown */}
            <div
              ref={traditionsRef}
              className="relative"
              onMouseEnter={() => setTraditionsDropdownOpen(true)}
              onMouseLeave={() => setTraditionsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setTraditionsDropdownOpen(!traditionsDropdownOpen)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                  isTraditionActive || traditionsDropdownOpen
                    ? 'text-sacred-goldLight bg-sacred-maroon/70 border border-sacred-gold/40 shadow-sacred-glow'
                    : 'text-sacred-ivoryDim hover:text-sacred-goldLight hover:bg-sacred-surfaceLight/50 border border-transparent'
                }`}
              >
                <span>Traditions & Portals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${traditionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Floating Dropdown Menu */}
              {traditionsDropdownOpen && (
                <div className="absolute left-0 mt-1 w-72 rounded-xl bg-[#0d0b09] border border-sacred-borderGold/60 shadow-[0_12px_40px_rgba(0,0,0,0.95)] p-2 z-50 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2.5 py-1 text-[10px] font-devanagari font-semibold text-sacred-goldDark border-b border-sacred-border/50 uppercase tracking-wider">
                    ॥ परम्परा तीर्थानि च ॥ (Lineages & Shrines)
                  </div>
                  {specializedPortals.map((portal) => {
                    const active = isActive(portal.path);
                    const IconComponent = portal.icon;
                    return (
                      <Link
                        key={portal.path}
                        to={portal.path}
                        onClick={() => setTraditionsDropdownOpen(false)}
                        className={`flex items-start space-x-2.5 p-2 rounded-lg transition-all ${
                          active
                            ? 'bg-sacred-maroon/80 border border-sacred-gold/40 text-sacred-goldLight'
                            : 'hover:bg-sacred-surface text-sacred-ivoryDim hover:text-sacred-goldLight'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-md bg-sacred-surface/80 border border-sacred-borderGold/30 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComponent className="w-3.5 h-3.5 text-sacred-gold" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold leading-tight">{portal.label}</div>
                          <div className="text-[10px] text-sacred-ivoryMuted truncate leading-tight mt-0.5">{portal.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Actions: Search Button + Authentication Profile + Mobile Hamburger Button */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="min-h-[40px] min-w-[40px] sm:min-h-[44px] flex items-center justify-center space-x-2 p-2 sm:px-3 sm:py-1.5 rounded-lg bg-sacred-surface border border-sacred-borderGold/40 text-sacred-ivoryDim hover:text-sacred-gold hover:border-sacred-gold/80 transition-all text-xs sm:text-sm shrink-0 shadow-sm"
              title="Search encyclopedia (Ctrl+K)"
              aria-label="Search encyclopedia"
            >
              <Search className="w-4 h-4 text-sacred-gold shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap font-medium">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-sacred-dark border border-sacred-border rounded text-sacred-ivoryMuted font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Authentication Button / User Profile */}
            {isAuthenticated && user ? (
              <div className="relative shrink-0">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="min-h-[40px] min-w-[40px] sm:min-h-[44px] flex items-center justify-center space-x-2 p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-sacred-maroon/80 border border-sacred-borderGold text-sacred-goldLight text-xs font-semibold hover:bg-sacred-maroon transition-all shadow-sacred-glow shrink-0"
                  aria-label="User Account"
                >
                  <div className="w-6 h-6 rounded-full bg-sacred-gold text-sacred-dark font-bold text-[11px] flex items-center justify-center shrink-0">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                </button>

                {/* User Dropdown Menu */}
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
                className="min-h-[40px] min-w-[40px] sm:min-h-[44px] flex items-center justify-center space-x-1.5 p-2 sm:px-3.5 sm:py-1.5 rounded-lg bg-sacred-maroon/80 border border-sacred-borderGold/60 hover:border-sacred-gold text-sacred-goldLight text-xs sm:text-sm font-semibold transition-all shadow-sacred-glow shrink-0"
                title="Sign In"
                aria-label="Sign In"
              >
                <User className="w-4 h-4 text-sacred-gold" />
                <span className="hidden sm:inline whitespace-nowrap">Sign In</span>
              </button>
            )}

            {/* Mobile / Tablet Menu Button (Prominent 3 horizontal lines, ALWAYS visible below lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-lg bg-sacred-maroon/90 text-sacred-goldLight hover:text-white border border-sacred-gold/70 hover:border-sacred-gold active:scale-95 transition-all shrink-0 shadow-sacred-glow"
              aria-label="Toggle Navigation Menu"
              title="Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-sacred-goldLight" />
              ) : (
                <Menu className="w-5 h-5 text-sacred-goldLight" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sacred-dark/98 backdrop-blur-2xl border-b border-sacred-borderGold/40 px-4 pt-3 pb-8 pb-safe space-y-2 max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 border-b border-sacred-border/60 text-xs font-devanagari text-sacred-goldLight/70 flex items-center justify-between">
            <span>विभागावली (Encyclopedia Sections)</span>
            {user && <span className="font-mono text-[10px] text-sacred-gold">Logged in as {user.name}</span>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {allNavLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center min-h-[44px] px-3.5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    active
                      ? 'text-sacred-goldLight bg-sacred-maroon border border-sacred-gold/40 shadow-sacred-glow font-bold'
                      : link.highlight
                      ? 'text-amber-300 bg-amber-950/40 border border-amber-600/30'
                      : 'text-sacred-ivoryDim hover:text-sacred-gold hover:bg-sacred-surface active:bg-sacred-surface'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-sacred-border/60 space-y-2">
            {onOpenDarshan && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDarshan();
                }}
                className="w-full min-h-[44px] py-2.5 flex items-center justify-center space-x-2 bg-gradient-to-r from-sacred-maroon via-sacred-crimson to-sacred-maroon border border-sacred-gold text-sacred-goldLight rounded-lg text-sm font-bold shadow-sacred-glow active:scale-[0.99] transition-transform"
              >
                <Sparkles className="w-4 h-4 text-sacred-gold" />
                <span>श्री कृष्णकाली साक्षात् दर्शनम् (Darshan)</span>
              </button>
            )}

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
