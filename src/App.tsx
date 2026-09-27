import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HSESection } from './components/HSESection';
import { CareersSection } from './components/CareersSection';
import { OperationsGallery } from './components/OperationsGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Dedicated Subpages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { HSEPage } from './pages/HSEPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

function MainApp() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  // Sync with URL hash for clean multi-page URL routing and browser back/forward support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'services', 'capabilities', 'hse', 'careers', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, hash?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = hash || '';
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isDark
          ? 'bg-[#030712] text-slate-100 selection:bg-cyan-500/20 selection:text-white'
          : 'bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-900'
      }`}
    >
      {/* Top Navbar with Theme Switcher */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
            <ServicesSection
              onNavigate={handleNavigate}
              onSelectService={handleSelectService}
            />
            <CapabilitiesSection onNavigate={handleNavigate} />
            <OperationsGallery />
            <IndustriesSection onNavigate={handleNavigate} />
            <HSESection onNavigate={handleNavigate} />
            <CareersSection onNavigate={handleNavigate} />
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            selectedServiceId={selectedServiceId}
          />
        )}

        {currentPage === 'capabilities' && (
          <CapabilitiesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'hse' && (
          <HSEPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'careers' && (
          <CareersPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Sophisticated Dark/Adapted Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
