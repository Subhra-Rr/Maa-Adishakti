import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  spiritualInterests: string[];
  joinedDate: string;
  savedStotras: string[];
  bookmarks: string[];
  personalNotes: Record<string, string>; // stotraId or deviId -> note content
  completedRoutines: string[]; // dates of completed daily sadhana
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, passwordPlain: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, passwordPlain: string, spiritualInterests?: string[]) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>;
  resetPassword: (email: string, resetCode: string, newPasswordPlain: string) => Promise<{ success: boolean; error?: string }>;
  toggleSaveStotra: (stotraId: string) => void;
  toggleBookmark: (itemId: string) => void;
  savePersonalNote: (key: string, note: string) => void;
  toggleRoutineStep: (stepId: string) => void;
  isAuthModalOpen: boolean;
  openAuthModal: (mode?: 'login' | 'signup' | 'forgot') => void;
  closeAuthModal: () => void;
  authModalMode: 'login' | 'signup' | 'forgot' | 'reset';
  setAuthModalMode: (mode: 'login' | 'signup' | 'forgot' | 'reset') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'shakta_tattva_registered_users';
const SESSION_STORAGE_KEY = 'shakta_tattva_active_session';
const RESET_CODES_KEY = 'shakta_tattva_reset_tokens';

// Cryptographic hash using browser's native Web Crypto API
async function sha256(message: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

interface StoredUserRecord {
  profile: UserProfile;
  passwordHash: string;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'forgot' | 'reset'>('login');

  // Load existing session and seed default educational researcher account
  useEffect(() => {
    async function initAuth() {
      try {
        const storedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
        let storedUsers: Record<string, StoredUserRecord> = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};

        // Seed verified demonstration scholar account if not present
        const demoEmail = 'scholar@shaktatattva.org';
        if (!storedUsers[demoEmail]) {
          const demoHash = await sha256('ShaktaDevi@108');
          storedUsers[demoEmail] = {
            profile: {
              id: 'user-demo-scholar',
              name: 'Dr. Ananda Sharma',
              email: demoEmail,
              spiritualInterests: ['Sri Vidya', 'Kalikula', 'Kashmir Krama', 'Devi Mahatmya'],
              joinedDate: '2026-01-15',
              savedStotras: ['devi-sukta', 'argala-stotram', 'kali-dhyana'],
              bookmarks: ['kali', 'tripura-sundari', 'pratyangira'],
              personalNotes: {
                'kali': 'Meditation on Karpuradi Stotram reveals the dissolution of temporal ego in unconditioned light.',
                'devi-sukta': 'Vak Ambhrini hymn in Rigveda represents the earliest direct divine revelation of Adi Parashakti.'
              },
              completedRoutines: [new Date().toISOString().split('T')[0]]
            },
            passwordHash: demoHash
          };
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(storedUsers));
        }

        // Check active session
        const activeSessionRaw = localStorage.getItem(SESSION_STORAGE_KEY);
        if (activeSessionRaw) {
          const session = JSON.parse(activeSessionRaw);
          // 30 days session validity
          if (Date.now() - session.timestamp < 30 * 24 * 60 * 60 * 1000) {
            const userRecord = storedUsers[session.email];
            if (userRecord) {
              setUser(userRecord.profile);
            }
          } else {
            localStorage.removeItem(SESSION_STORAGE_KEY);
          }
        }
      } catch (err) {
        console.error('Failed to initialize authentic auth session:', err);
      } finally {
        setIsLoading(false);
      }
    }

    initAuth();
  }, []);

  const openAuthModal = (mode: 'login' | 'signup' | 'forgot' = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // Real Login with SHA-256 verification
  const login = async (emailRaw: string, passwordPlain: string) => {
    const email = emailRaw.toLowerCase().trim();
    if (!email || !passwordPlain) {
      return { success: false, error: 'Please enter both your email address and password.' };
    }

    const storedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
    const storedUsers: Record<string, StoredUserRecord> = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};

    const userRecord = storedUsers[email];
    if (!userRecord) {
      return { success: false, error: 'No account registered with this email address. Please sign up.' };
    }

    const inputHash = await sha256(passwordPlain);
    if (inputHash !== userRecord.passwordHash) {
      return { success: false, error: 'Incorrect password. Please verify and try again.' };
    }

    // Set active session
    setUser(userRecord.profile);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
      email,
      token: `shakta_session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      timestamp: Date.now()
    }));

    closeAuthModal();
    return { success: true };
  };

  // Real Sign-Up with password hashing and validation
  const signup = async (name: string, emailRaw: string, passwordPlain: string, spiritualInterests: string[] = []) => {
    const email = emailRaw.toLowerCase().trim();
    if (!name.trim()) {
      return { success: false, error: 'Please provide your name.' };
    }
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }
    if (passwordPlain.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters long for security.' };
    }

    const storedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
    const storedUsers: Record<string, StoredUserRecord> = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};

    if (storedUsers[email]) {
      return { success: false, error: 'An account with this email already exists. Please log in.' };
    }

    const passwordHash = await sha256(passwordPlain);
    const newProfile: UserProfile = {
      id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email,
      spiritualInterests: spiritualInterests.length > 0 ? spiritualInterests : ['General Shakta Devotion'],
      joinedDate: new Date().toISOString().split('T')[0],
      savedStotras: [],
      bookmarks: [],
      personalNotes: {},
      completedRoutines: []
    };

    storedUsers[email] = { profile: newProfile, passwordHash };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(storedUsers));

    // Automatically sign in
    setUser(newProfile);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
      email,
      token: `shakta_session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      timestamp: Date.now()
    }));

    closeAuthModal();
    return { success: true };
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_STORAGE_KEY);
  };

  // Forgot password token generation
  const forgotPassword = async (emailRaw: string) => {
    const email = emailRaw.toLowerCase().trim();
    const storedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
    const storedUsers: Record<string, StoredUserRecord> = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};

    if (!storedUsers[email]) {
      return { success: false, message: 'If an account exists for this email, a reset verification code has been generated.' };
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit code
    const resetTokensRaw = localStorage.getItem(RESET_CODES_KEY);
    const resetTokens = resetTokensRaw ? JSON.parse(resetTokensRaw) : {};
    resetTokens[email] = { code: resetCode, expires: Date.now() + 15 * 60 * 1000 };
    localStorage.setItem(RESET_CODES_KEY, JSON.stringify(resetTokens));

    return {
      success: true,
      message: `A verification code has been issued. For local verification, your sacred recovery code is: ${resetCode}`
    };
  };

  // Reset password verification
  const resetPassword = async (emailRaw: string, resetCode: string, newPasswordPlain: string) => {
    const email = emailRaw.toLowerCase().trim();
    if (newPasswordPlain.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters long.' };
    }

    const resetTokensRaw = localStorage.getItem(RESET_CODES_KEY);
    const resetTokens = resetTokensRaw ? JSON.parse(resetTokensRaw) : {};
    const record = resetTokens[email];

    if (!record || record.code !== resetCode.trim() || Date.now() > record.expires) {
      return { success: false, error: 'Invalid or expired recovery verification code.' };
    }

    const storedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
    const storedUsers: Record<string, StoredUserRecord> = storedUsersRaw ? JSON.parse(storedUsersRaw) : {};

    if (!storedUsers[email]) {
      return { success: false, error: 'User record not found.' };
    }

    const newHash = await sha256(newPasswordPlain);
    storedUsers[email].passwordHash = newHash;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(storedUsers));

    // Clear reset token
    delete resetTokens[email];
    localStorage.setItem(RESET_CODES_KEY, JSON.stringify(resetTokens));

    // Sign in with new credentials
    setUser(storedUsers[email].profile);
    closeAuthModal();
    return { success: true };
  };

  const updateCurrentUserProfile = (updater: (prev: UserProfile) => UserProfile) => {
    if (!user) return;
    const updated = updater(user);
    setUser(updated);

    const storedUsersRaw = localStorage.getItem(USERS_STORAGE_KEY);
    if (storedUsersRaw) {
      const storedUsers: Record<string, StoredUserRecord> = JSON.parse(storedUsersRaw);
      if (storedUsers[user.email]) {
        storedUsers[user.email].profile = updated;
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(storedUsers));
      }
    }
  };

  const toggleSaveStotra = (stotraId: string) => {
    if (!user) {
      openAuthModal('login');
      return;
    }
    updateCurrentUserProfile(prev => {
      const exists = prev.savedStotras.includes(stotraId);
      return {
        ...prev,
        savedStotras: exists
          ? prev.savedStotras.filter(id => id !== stotraId)
          : [...prev.savedStotras, stotraId]
      };
    });
  };

  const toggleBookmark = (itemId: string) => {
    if (!user) {
      openAuthModal('login');
      return;
    }
    updateCurrentUserProfile(prev => {
      const exists = prev.bookmarks.includes(itemId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter(id => id !== itemId)
          : [...prev.bookmarks, itemId]
      };
    });
  };

  const savePersonalNote = (key: string, note: string) => {
    if (!user) {
      openAuthModal('login');
      return;
    }
    updateCurrentUserProfile(prev => ({
      ...prev,
      personalNotes: {
        ...prev.personalNotes,
        [key]: note
      }
    }));
  };

  const toggleRoutineStep = (stepId: string) => {
    if (!user) {
      openAuthModal('login');
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    const key = `${today}_${stepId}`;
    updateCurrentUserProfile(prev => {
      const exists = prev.completedRoutines.includes(key);
      return {
        ...prev,
        completedRoutines: exists
          ? prev.completedRoutines.filter(k => k !== key)
          : [...prev.completedRoutines, key]
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        signup,
        logout,
        forgotPassword,
        resetPassword,
        toggleSaveStotra,
        toggleBookmark,
        savePersonalNote,
        toggleRoutineStep,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalMode,
        setAuthModalMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
