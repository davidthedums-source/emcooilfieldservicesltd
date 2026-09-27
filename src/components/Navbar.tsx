import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageId; hash?: string }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Pictures', id: 'home', hash: 'gallery' },
    { label: 'HSE', id: 'hse' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: PageId, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId, hash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#070d1e]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Zone 1: Single element Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left text-xl font-bold tracking-tight flex items-center gap-1.5 focus:outline-none"
          aria-label="EMCO Oilfield Services Ltd Home"
        >
          <span
            className={`font-extrabold tracking-wider transition-colors ${
              isDark
                ? 'bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:to-cyan-300'
                : 'text-slate-900 group-hover:text-blue-600'
            }`}
          >
            EMCO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-90 group-hover:scale-125 transition-transform" />
        </button>

        {/* Zone 2: Clean text Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-7 text-sm font-medium ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {navItems.map((item) => {
            const isActive = item.hash
              ? currentPage === 'home' && window.location.hash === `#${item.hash}`
              : currentPage === item.id && (!window.location.hash || window.location.hash === '#' || window.location.hash === '#home');
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id, item.hash)}
                className={`relative py-1 transition-colors whitespace-nowrap focus:outline-none ${
                  isActive
                    ? isDark
                      ? 'text-white font-semibold'
                      : 'text-blue-600 font-semibold'
                    : isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions + Theme Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme switcher */}
          <ThemeSwitcher compact={true} />

          <a
            href={COMPANY_INFO.phoneHref}
            className={`inline-flex items-center gap-2 text-xs font-mono transition-colors py-1.5 px-3 rounded-md border ${
              isDark
                ? 'text-slate-300 hover:text-cyan-300 border-white/10 bg-white/[0.04]'
                : 'text-slate-700 hover:text-blue-600 border-slate-200 bg-slate-50'
            }`}
            title="Call EMCO Oilfield Services"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-500" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all duration-200 border border-blue-400/30 shadow-sm hover:shadow-blue-500/25 hover:shadow-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button + Quick Theme Switcher */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSwitcher compact={true} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none rounded-md border ${
              isDark
                ? 'text-slate-300 hover:text-white border-white/10 bg-white/5'
                : 'text-slate-700 hover:text-black border-slate-200 bg-slate-100'
            }`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 ${
            isDark
              ? 'bg-[#070d1e]/98 border-white/10'
              : 'bg-white/98 border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = item.hash
                ? currentPage === 'home' && window.location.hash === `#${item.hash}`
                : currentPage === item.id && (!window.location.hash || window.location.hash === '#');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id, item.hash)}
                  className={`text-left text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? isDark
                        ? 'bg-blue-600/20 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                        : 'bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600'
                      : isDark
                      ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div
              className={`pt-4 border-t flex flex-col gap-3 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between py-1">
                <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Theme Mode:
                </span>
                <ThemeSwitcher compact={false} />
              </div>

              <a
                href={COMPANY_INFO.phoneHref}
                className={`flex items-center justify-center gap-2.5 text-sm font-mono py-2.5 px-3 rounded-md border ${
                  isDark
                    ? 'text-cyan-300 bg-white/5 border-white/10 hover:border-cyan-400/40'
                    : 'text-slate-800 bg-slate-100 border-slate-200 hover:border-blue-300'
                }`}
              >
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors shadow-sm"
              >
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
