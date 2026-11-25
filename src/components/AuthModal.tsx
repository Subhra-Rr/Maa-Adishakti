import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Lock, Mail, User, Shield, Sparkles, Key, Check, AlertCircle, ArrowRight } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalMode,
    setAuthModalMode,
    login,
    signup,
    forgotPassword,
    resetPassword
  } = useAuth();

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Sri Vidya', 'Kalikula']);
  const [resetCode, setResetCode] = useState('');

  // UI feedback states
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const interestsList = [
    'Sri Vidya & Sri Chakra',
    'Kalikula & Krama',
    'Das Mahavidyas',
    'Nava Durga & Navapatrika',
    'Chausath Yogini Traditions',
    'Odisha Shakta Heritage',
    'Maa Pratyangira Upasana',
    'Sadhana & Devotional Stotras'
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    const res = await login(email, password);
    setIsSubmitting(false);

    if (!res.success) {
      setErrorMessage(res.error || 'Failed to sign in.');
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    const res = await signup(name, email, password, selectedInterests);
    setIsSubmitting(false);

    if (!res.success) {
      setErrorMessage(res.error || 'Failed to create account.');
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    const res = await forgotPassword(email);
    setIsSubmitting(false);

    setSuccessMessage(res.message);
    if (res.success) {
      setTimeout(() => {
        setAuthModalMode('reset');
      }, 1800);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    const res = await resetPassword(email, resetCode, password);
    setIsSubmitting(false);

    if (!res.success) {
      setErrorMessage(res.error || 'Failed to reset password.');
    } else {
      setSuccessMessage('Password has been securely reset. Logging you in...');
    }
  };

  const fillDemoScholar = () => {
    setEmail('scholar@shaktatattva.org');
    setPassword('ShaktaDevi@108');
    setErrorMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Translucent Backdrop with refined blur */}
      <div
        className="fixed inset-0 bg-[#070506]/85 backdrop-blur-md transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Glassmorphism Panel */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#110c0e]/95 backdrop-blur-xl border border-sacred-borderGold/60 shadow-[0_0_50px_rgba(212,175,55,0.18)] p-5 sm:p-8 space-y-6 text-sacred-ivory max-h-[90vh] max-h-[90dvh] overflow-y-auto z-10 my-auto">
        {/* Subtle Decorative Golden Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-sacred-gold/5 rounded-br-full blur-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-sacred-crimson/15 rounded-tl-full blur-2xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-sacred-borderGold/30 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-sacred-maroon border border-sacred-gold flex items-center justify-center font-devanagari text-sm text-sacred-gold">
              ॐ
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-sacred-gold block uppercase">
                ॥ शाक्त तत्त्व संधानम् ॥
              </span>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold gold-gradient-text">
                {authModalMode === 'login' && 'Sign In to Shakta Tattva'}
                {authModalMode === 'signup' && 'Create Sacred Scholar Account'}
                {authModalMode === 'forgot' && 'Account Recovery'}
                {authModalMode === 'reset' && 'Set New Sacred Password'}
              </h2>
            </div>
          </div>

          <button
            onClick={closeAuthModal}
            className="p-1 rounded-lg text-sacred-ivoryMuted hover:text-sacred-gold hover:bg-sacred-surface transition-all"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switch Tabs */}
        {authModalMode !== 'forgot' && authModalMode !== 'reset' && (
          <div className="grid grid-cols-2 p-1 rounded-xl bg-sacred-dark/80 border border-sacred-borderGold/30 text-xs font-semibold">
            <button
              type="button"
              onClick={() => { setAuthModalMode('login'); setErrorMessage(null); setSuccessMessage(null); }}
              className={`py-2 rounded-lg transition-all ${
                authModalMode === 'login'
                  ? 'bg-sacred-maroon text-sacred-goldLight shadow-sacred-glow font-bold'
                  : 'text-sacred-ivoryMuted hover:text-sacred-ivory'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setAuthModalMode('signup'); setErrorMessage(null); setSuccessMessage(null); }}
              className={`py-2 rounded-lg transition-all ${
                authModalMode === 'signup'
                  ? 'bg-sacred-maroon text-sacred-goldLight shadow-sacred-glow font-bold'
                  : 'text-sacred-ivoryMuted hover:text-sacred-ivory'
              }`}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Alerts / Error feedback */}
        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs flex items-start space-x-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* ========================================================
            1. SIGN IN FORM
        ======================================================== */}
        {authModalMode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="scholar@shaktatattva.org"
                  className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-2.5 text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sacred-goldLight font-medium">Password</label>
                <button
                  type="button"
                  onClick={() => { setAuthModalMode('forgot'); setErrorMessage(null); }}
                  className="text-[11px] text-sacred-goldDark hover:text-sacred-gold hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-2.5 text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold uppercase tracking-wider shadow-sacred-glow transition-all flex items-center justify-center space-x-2"
            >
              <span>{isSubmitting ? 'Authenticating...' : 'Sign In to Study Suite'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick Demo Credentials Assistant */}
            <div className="pt-2 text-center border-t border-sacred-border/60">
              <span className="text-[11px] text-sacred-ivoryMuted block mb-1">Evaluating the platform?</span>
              <button
                type="button"
                onClick={fillDemoScholar}
                className="text-xs text-sacred-gold hover:underline font-medium inline-flex items-center space-x-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Fill Demo Scholar Account (Dr. Ananda Sharma)</span>
              </button>
            </div>
          </form>
        )}

        {/* ========================================================
            2. SIGN UP FORM
        ======================================================== */}
        {authModalMode === 'signup' && (
          <form onSubmit={handleSignupSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">Full Name / Title</label>
              <div className="relative">
                <User className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Subhradeet Sabat"
                  className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-2 text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-2 text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">
                Password (min 8 characters)
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-2 text-sacred-ivory placeholder-sacred-ivoryMuted focus:outline-none focus:border-sacred-gold"
                />
              </div>
            </div>

            {/* Spiritual & Research Interests */}
            <div>
              <label className="block text-sacred-goldLight mb-1.5 font-medium">
                Primary Research / Devotional Focus (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1 bg-sacred-dark/60 rounded-lg border border-sacred-border">
                {interestsList.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-2 py-1 rounded text-[10px] transition-all ${
                      selectedInterests.includes(interest)
                        ? 'bg-sacred-maroon border border-sacred-gold text-sacred-goldLight font-bold'
                        : 'bg-sacred-surface border border-sacred-border text-sacred-ivoryMuted hover:text-sacred-ivory'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold uppercase tracking-wider shadow-sacred-glow transition-all flex items-center justify-center space-x-2 mt-2"
            >
              <span>{isSubmitting ? 'Creating Account...' : 'Create Account & Begin'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* ========================================================
            3. FORGOT PASSWORD FORM
        ======================================================== */}
        {authModalMode === 'forgot' && (
          <form onSubmit={handleForgotSubmit} className="space-y-4 text-xs">
            <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
              Enter your registered email address below. A 6-digit cryptographic verification code will be generated to safely reset your credentials.
            </p>

            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">Registered Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-sacred-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg pl-9 pr-3 py-2.5 text-sacred-ivory focus:outline-none focus:border-sacred-gold"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setAuthModalMode('login')}
                className="flex-1 py-2.5 rounded-lg bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted hover:text-sacred-ivory"
              >
                Back to Sign In
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-2.5 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold uppercase tracking-wider shadow-sacred-glow"
              >
                {isSubmitting ? 'Generating...' : 'Send Reset Code'}
              </button>
            </div>
          </form>
        )}

        {/* ========================================================
            4. RESET PASSWORD FORM
        ======================================================== */}
        {authModalMode === 'reset' && (
          <form onSubmit={handleResetSubmit} className="space-y-4 text-xs">
            <p className="text-sacred-ivoryDim font-cormorant text-base leading-relaxed">
              Enter the 6-digit recovery code generated for <strong className="text-sacred-gold">{email}</strong> and specify your new password.
            </p>

            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">6-Digit Verification Code</label>
              <input
                type="text"
                required
                maxLength={6}
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                placeholder="123456"
                className="w-full text-center tracking-widest font-mono text-base bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg py-2.5 text-sacred-goldLight focus:outline-none focus:border-sacred-gold"
              />
            </div>

            <div>
              <label className="block text-sacred-goldLight mb-1 font-medium">New Password (min 8 chars)</label>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-sacred-dark/90 border border-sacred-borderGold/40 rounded-lg px-3 py-2.5 text-sacred-ivory focus:outline-none focus:border-sacred-gold"
              />
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setAuthModalMode('login')}
                className="flex-1 py-2.5 rounded-lg bg-sacred-dark border border-sacred-border text-sacred-ivoryMuted hover:text-sacred-ivory"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-2.5 rounded-lg bg-sacred-maroon hover:bg-sacred-crimson border border-sacred-gold text-sacred-goldLight font-bold uppercase tracking-wider shadow-sacred-glow"
              >
                {isSubmitting ? 'Resetting...' : 'Update Password'}
              </button>
            </div>
          </form>
        )}

        {/* Footer Spiritual Notice */}
        <div className="text-center pt-2 border-t border-sacred-border/60 text-[10px] text-sacred-ivoryMuted">
          <span>Protected research session • Zero plaintext credentials • End-to-end client cryptographic hashing</span>
        </div>
      </div>
    </div>
  );
};
