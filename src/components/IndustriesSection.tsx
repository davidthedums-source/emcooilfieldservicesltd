import React from 'react';
import { INDUSTRIES, IMAGES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { useTheme } from '../context/ThemeContext';

interface IndustriesSectionProps {
  onNavigate: (page: PageId) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const industryImages: Record<string, string> = {
    'oil-gas': IMAGES.drillingRig,
    energy: IMAGES.hero,
    engineering: IMAGES.engineering,
    'industrial-operations': IMAGES.pipelineValves,
    'marine-offshore': IMAGES.marine,
    infrastructure: IMAGES.facility,
  };

  return (
    <section
      id="industries"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      <EnergyBackgroundCanvas variant="particles" density={18} className="opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Sectors & Applications
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Supporting the industries that power progress.
          </h2>
          <p
            className={`text-base leading-relaxed font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            EMCO provides specialized operational and engineering support tailored to the technical requirements
            and demanding uptime constraints of high-stakes industrial operations across Nigeria.
          </p>
        </div>

        {/* 6 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const displayImg = industryImages[ind.id] || ind.image;
            return (
              <div
                key={ind.id}
                className={`group relative rounded-xl overflow-hidden hairline-border hairline-border-hover flex flex-col justify-between transition-colors ${
                  isDark ? 'bg-slate-900/60' : 'bg-slate-50/80 shadow-sm'
                }`}
              >
                {/* Image Frame */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={displayImg}
                    alt={`${ind.title} operations by EMCO Oilfield Services`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Scrim */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDark ? 'from-slate-900 via-slate-900/40' : 'from-slate-50 via-slate-50/30'
                    } to-transparent`}
                  />

                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-cyan-300 border border-white/10">
                      {ind.focusArea}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3
                      className={`text-lg font-bold mb-2 group-hover:text-cyan-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {ind.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-normal mb-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {ind.desc}
                    </p>
                  </div>

                  <div
                    className={`pt-4 border-t flex items-center justify-between ${
                      isDark ? 'border-white/5' : 'border-slate-200'
                    }`}
                  >
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Operational Readiness
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
                    >
                      <span>Consult</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
