import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AuthModal } from './components/AuthModal';
import { ProtectedRoute } from './components/ProtectedRoute';
import { KrushnaKaliEntrance } from './components/KrushnaKaliEntrance';
import { VedicPageTransition } from './components/VedicPageTransition';
import { VedicAmbientAura } from './components/VedicAmbientAura';

// Pages
import { HomePage } from './pages/HomePage';
import { DeviDirectoryPage } from './pages/DeviDirectoryPage';
import { DeviProfilePage } from './pages/DeviProfilePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { PratyangiraResearchPage } from './pages/PratyangiraResearchPage';
import { OdishaHeritagePage } from './pages/OdishaHeritagePage';
import { ShaktiPeethasPage } from './pages/ShaktiPeethasPage';
import { SriChakraPage } from './pages/SriChakraPage';
import { ScripturesPage } from './pages/ScripturesPage';
import { AcharasPage } from './pages/AcharasPage';
import { KashmirShaivismPage } from './pages/KashmirShaivismPage';
import { DailySadhanaPage } from './pages/DailySadhanaPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showEntrance, setShowEntrance] = useState<boolean>(() => {
    try {
      return !sessionStorage.getItem('krushnakali_darshan_completed');
    } catch {
      return true;
    }
  });

  const handleEnterSanctum = () => {
    try {
      sessionStorage.setItem('krushnakali_darshan_completed', 'true');
    } catch {}
    setShowEntrance(false);
  };

  const handleOpenDarshan = () => {
    setShowEntrance(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070605] text-[#f8f4eb] selection:bg-sacred-crimson selection:text-sacred-goldLight relative">
      <ScrollToTop />
      
      {/* Subtle Vedic Ambient Golden Prana Motes in Deep Background */}
      <VedicAmbientAura />

      {/* Sri KrushnaKali Welcoming Sacred Entrance Portal & Pushpa-Vrishti Darshan */}
      {showEntrance && (
        <KrushnaKaliEntrance onEnter={handleEnterSanctum} />
      )}

      {/* Global Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDarshan={handleOpenDarshan}
      />

      {/* Main Content Viewport with Vedic Sacred Page Transitions */}
      <main className="flex-1 relative z-10">
        <VedicPageTransition>
          <Routes>
            <Route path="/" element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} />} />
            <Route path="/directory" element={<DeviDirectoryPage />} />
            <Route path="/devi/:id" element={<DeviProfilePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:slug" element={<CategoryDetailPage />} />
            <Route path="/sadhana" element={<ProtectedRoute><DailySadhanaPage /></ProtectedRoute>} />
            <Route path="/pratyangira" element={<PratyangiraResearchPage />} />
            <Route path="/odisha-heritage" element={<OdishaHeritagePage />} />
            <Route path="/shakti-peethas" element={<ShaktiPeethasPage />} />
            <Route path="/sri-chakra" element={<SriChakraPage />} />
            <Route path="/scriptures" element={<ScripturesPage />} />
            <Route path="/acharas" element={<AcharasPage />} />
            <Route path="/kashmir-shaivism" element={<KashmirShaivismPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} />} />
          </Routes>
        </VedicPageTransition>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Global Glassmorphism Auth Modal */}
      <AuthModal />
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
