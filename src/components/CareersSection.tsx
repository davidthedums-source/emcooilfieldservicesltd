import React from 'react';
import { ArrowRight, Target, Shield } from 'lucide-react';
import { PageId } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { IMAGES } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface CareersSectionProps {
  onNavigate: (page: PageId) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <section
      id="careers"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <EnergyBackgroundCanvas variant="particles" density={14} className="opacity-35" />

      {/* Background Subtle Mesh */}
      <div
        className={`absolute top-1/2 right-1/4 w-[500px] h-[300px] blur-[140px] pointer-events-none rounded-full ${
          isDark ? 'bg-blue-600/5' : 'bg-blue-200/30'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Careers Narrative */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              People & Culture
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Build your future in energy.
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed font-normal mb-8 [text-wrap:pretty] ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              EMCO Oilfield Services Ltd is powered by professionals dedicated to technical discipline, operational
              reliability, and safety excellence. We are constantly interested in connecting with skilled energy
              practitioners, certified field engineers, technical specialists, and operations managers who share our
              uncompromising focus on performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div
                className={`p-5 rounded-xl hairline-border ${
                  isDark ? 'bg-slate-900/60' : 'bg-slate-50'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className={`text-sm font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Operational Discipline
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Clear procedures, documented workflows, and high accountability across every project phase.
                </p>
              </div>

              <div
                className={`p-5 rounded-xl hairline-border ${
                  isDark ? 'bg-slate-900/60' : 'bg-slate-50'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className={`text-sm font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Safety Uncompromised
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  A workplace culture where safety is an absolute baseline, safeguarding every team member.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all border border-blue-400/30"
              >
                <span>Contact EMCO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('careers')}
                className={`px-6 py-3.5 text-sm font-medium rounded-lg border transition-colors ${
                  isDark
                    ? 'text-slate-300 hover:text-white border-white/10 hover:border-white/20'
                    : 'text-slate-700 hover:text-black border-slate-300 hover:bg-slate-100'
                }`}
              >
                <span>Read Careers Ethos</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Talent Overview Box with Real Photo */}
          <div
            className={`lg:col-span-5 rounded-2xl overflow-hidden hairline-border transition-colors ${
              isDark ? 'bg-slate-900/80' : 'bg-white shadow-md'
            }`}
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
              <img
                src={IMAGES.engineering}
                alt="EMCO field engineers and operational leadership"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? 'from-slate-900 via-slate-900/40' : 'from-white via-white/30'
                } to-transparent`}
              />
              <div className="absolute top-3 left-3">
                <span className="text-xs font-mono text-cyan-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                  Engineering & Technical Force
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Talent Engagement & Inquiry
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                While we announce specific project openings through verified corporate channels as needs arise,
                we welcome introductory inquiries and professional profiles from qualified Nigerian energy professionals.
              </p>

              <div className={`space-y-3 pt-4 border-t text-xs ${isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>Oilfield and wellsite support specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>Mechanical, piping, and electrical engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>Field technical and instrumentation technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>HSE advisors and site compliance leads</span>
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={`text-[11px] block leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  Connect directly with our corporate desk to submit credentials and explore operational alignments.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
