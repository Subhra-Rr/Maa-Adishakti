import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, BookOpen, Shield, Sparkles, ArrowRight, UserCheck } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  title = 'Sacred Scholar Access Required',
  description = 'This section contains advanced devotional learning resources, personal reading progress, saved stotras, and personalized reflection notes. Please sign in or register to unlock your personal study dashboard.'
}) => {
  const { isAuthenticated, isLoading, openAuthModal } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-sacred-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Glassmorphism Access Barrier Panel */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#140b0e]/95 via-[#1a0f14]/90 to-[#0e0a0d]/95 backdrop-blur-xl border-2 border-sacred-borderGold/60 p-8 sm:p-12 text-center space-y-6 shadow-sacred-glow">
          <div className="w-16 h-16 rounded-full bg-sacred-maroon border-2 border-sacred-gold mx-auto flex items-center justify-center font-devanagari text-2xl text-sacred-gold shadow-sacred-glow">
            ॐ
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sacred-gold">
              ॥ साधनाविवेकः ॥ Personal Study Suite
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold gold-gradient-text">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-sacred-ivoryDim font-cormorant text-lg sm:text-xl leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left text-xs pt-4 border-t border-sacred-borderGold/30">
            <div className="p-3.5 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/20 space-y-1">
              <span className="text-sacred-gold font-bold block flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sacred-gold" />
                <span>Personal Study Notes</span>
              </span>
              <p className="text-sacred-ivoryMuted text-[11px]">
                Record private reflections on Devi profiles and stotras.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/20 space-y-1">
              <span className="text-sacred-gold font-bold block flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sacred-gold" />
                <span>Saved Devotional Verses</span>
              </span>
              <p className="text-sacred-ivoryMuted text-[11px]">
                Bookmark primary mantras and stotras for daily recitation.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/20 space-y-1">
              <span className="text-sacred-gold font-bold block flex items-center space-x-1.5">
                <UserCheck className="w-3.5 h-3.5 text-sacred-gold" />
                <span>Daily Routine Tracker</span>
              </span>
              <p className="text-sacred-ivoryMuted text-[11px]">
                Keep track of your daily devotional readings and Nitya Vidhi.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openAuthModal('login')}
              className="px-8 py-3 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sacred-glow transition-all flex items-center space-x-2"
            >
              <Lock className="w-4 h-4 text-sacred-gold" />
              <span>Sign In to Access Dashboard</span>
            </button>

            <button
              onClick={() => openAuthModal('signup')}
              className="px-6 py-3 rounded-lg bg-sacred-surface border border-sacred-borderGold/40 hover:border-sacred-gold text-sacred-ivory font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
