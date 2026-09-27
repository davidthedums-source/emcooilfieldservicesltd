import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CAPABILITIES, COMPANY_INFO, IMAGES } from '../data/content';
import { PageId } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CapabilitiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <div
      className={`min-h-screen pb-24 transition-colors duration-300 ${
        isDark ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <PageHeader
        eyebrow="Core Competencies"
        title="One team. Multiple capabilities."
        subtitle="Oilfield Services • Engineering • Technical Support • Procurement • Project Support • Industrial Operations"
        onNavigateHome={() => onNavigate('home')}
        videoFeedId="pipeline-engineering"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 space-y-16">
        {/* Intro */}
        <div className="max-w-3xl">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            An integrated operating capability built for the Nigerian energy landscape.
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            EMCO Oilfield Services Ltd unifies multidisciplinary capabilities under a single standard of
            operational discipline. Rather than coordinating disjointed third-party vendors, operators benefit
            from integrated execution across field technical support, engineering analysis, material supply,
            and heavy industrial maintenance.
          </p>
        </div>

        {/* 6 Capabilities In-Depth Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className={`p-8 rounded-2xl hairline-border hairline-border-hover transition-all duration-200 flex flex-col justify-between ${
                isDark ? 'bg-slate-900/60' : 'bg-slate-50 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider font-semibold">
                    Capability 0{idx + 1}
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    EMCO Certified Framework
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {cap.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 font-normal ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {cap.summary}
                </p>

                <div
                  className={`space-y-3 pt-4 border-t mb-6 ${
                    isDark ? 'border-white/5' : 'border-slate-200'
                  }`}
                >
                  {cap.keyAspects.map((aspect, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 text-xs sm:text-sm ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{aspect}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Available across Nigeria
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
                >
                  <span>Engage Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Offshore & Field Operations Section with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
          <div
            className={`rounded-2xl overflow-hidden hairline-border ${
              isDark ? 'bg-slate-950' : 'bg-white shadow-md'
            }`}
          >
            <img
              src={IMAGES.marine}
              alt="Marine and offshore capabilities by EMCO Oilfield Services"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover object-center"
            />
            <div
              className={`p-6 border-t ${
                isDark ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
              }`}
            >
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider block mb-1">
                Marine & Offshore Capability
              </span>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Offshore support, platform maintenance logistics, and marine vessel support operations.
              </p>
            </div>
          </div>

          <div
            className={`rounded-2xl overflow-hidden hairline-border ${
              isDark ? 'bg-slate-950' : 'bg-white shadow-md'
            }`}
          >
            <img
              src={IMAGES.facility}
              alt="Industrial operations and facility support by EMCO Oilfield Services"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover object-center"
            />
            <div
              className={`p-6 border-t ${
                isDark ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
              }`}
            >
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider block mb-1">
                Industrial Facilities & Terminals
              </span>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Terminal maintenance, pressure vessel inspection, piping alignment, and continuous facility upkeep.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`p-8 sm:p-12 rounded-2xl hairline-border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark
              ? 'bg-gradient-to-r from-blue-950/60 to-slate-900'
              : 'bg-slate-100 shadow-sm'
          }`}
        >
          <div>
            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Discuss specific operational capabilities with EMCO
            </h3>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Reach our technical coordinators at {COMPANY_INFO.phone}.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
          >
            Contact EMCO →
          </button>
        </div>
      </div>
    </div>
  );
};
