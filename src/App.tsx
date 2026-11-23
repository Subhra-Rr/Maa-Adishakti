import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070605] text-[#f8f4eb] selection:bg-sacred-crimson selection:text-sacred-goldLight">
      <ScrollToTop />
      
      {/* Global Navbar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Viewport */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/directory" element={<DeviDirectoryPage />} />
          <Route path="/devi/:id" element={<DeviProfilePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryDetailPage />} />
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
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
export default App;
