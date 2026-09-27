import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <footer
      className={`border-t py-16 relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[#030611] border-white/10 text-slate-400'
          : 'bg-slate-900 border-slate-800 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand & Contact Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <div className="text-xl font-bold tracking-tight text-white mb-1">
                EMCO Oilfield Services Ltd
              </div>
              <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Oilfield Services & Energy Solutions
              </div>
            </div>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Phone:</span>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-mono font-bold text-white hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Email:</span>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="font-mono font-medium text-white hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-slate-400 hover:text-white transition-colors"
              >
                Company
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="text-left text-slate-400 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate('capabilities')}
                className="text-left text-slate-400 hover:text-white transition-colors"
              >
                Capabilities
              </button>
              <button
                onClick={() => onNavigate('hse')}
                className="text-left text-slate-400 hover:text-white transition-colors"
              >
                HSE
              </button>
              <button
                onClick={() => onNavigate('careers')}
                className="text-left text-slate-400 hover:text-white transition-colors"
              >
                Careers
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
              <span className="text-xs text-slate-500">Theme:</span>
              <ThemeSwitcher compact={true} />
            </div>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Operational Inquiries
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Connect directly with our engineering and procurement team for technical requirements.
              </p>
            </div>

            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="group w-full inline-flex items-center justify-between px-4 py-3 text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-600 rounded-lg border border-blue-400/30 transition-all shadow-md"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Oilfield Services Nigeria</span>
            <span>·</span>
            <span>Operational Integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
