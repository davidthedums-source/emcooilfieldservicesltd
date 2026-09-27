import React, { useState } from 'react';
import { CAPABILITIES, IMAGES } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { useTheme } from '../context/ThemeContext';

interface CapabilitiesSectionProps {
  onNavigate: (page: PageId) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onNavigate }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const capabilityImages = [
    IMAGES.drillingRig,
    IMAGES.engineering,
    IMAGES.maintenance,
    IMAGES.pipelineValves,
    IMAGES.facility,
    IMAGES.marine,
  ];

  return (
    <section
      id="capabilities"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050814] border-white/5' : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Background Animated Energy Waves */}
      <EnergyBackgroundCanvas variant="waves" density={22} className="opacity-45" />

      {/* Stripe-style gradient radial */}
      <div
        className={`absolute bottom-0 left-1/3 w-[600px] h-[400px] blur-[160px] pointer-events-none rounded-full ${
          isDark ? 'bg-cyan-600/5' : 'bg-cyan-400/15'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Core Competencies
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            One team. Multiple capabilities.
          </h2>
          {/* Exact required display line with clean typographic separators */}
          <p
            className={`text-sm sm:text-base font-medium tracking-wide [text-wrap:balance] ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Oilfield Services <span className="text-cyan-500 mx-1.5">•</span> Engineering{' '}
            <span className="text-cyan-500 mx-1.5">•</span> Technical Support{' '}
            <span className="text-cyan-500 mx-1.5">•</span> Procurement{' '}
            <span className="text-cyan-500 mx-1.5">•</span> Project Support{' '}
            <span className="text-cyan-500 mx-1.5">•</span> Industrial Operations
          </p>
        </div>

        {/* Interactive Capability Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Capability Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {CAPABILITIES.map((cap, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? isDark
                        ? 'bg-blue-600/20 border-cyan-400/50 shadow-md shadow-blue-500/10'
                        : 'bg-white border-blue-600 shadow-sm shadow-blue-500/10'
                      : isDark
                      ? 'bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/70'
                      : 'bg-slate-100/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isSelected
                          ? isDark
                            ? 'text-cyan-400 font-semibold'
                            : 'text-blue-600 font-bold'
                          : isDark
                          ? 'text-slate-500'
                          : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-base font-semibold transition-colors ${
                        isSelected
                          ? isDark
                            ? 'text-white'
                            : 'text-slate-900'
                          : isDark
                          ? 'text-slate-300 group-hover:text-white'
                          : 'text-slate-700 group-hover:text-black'
                      }`}
                    >
                      {cap.title}
                    </span>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      isSelected
                        ? 'bg-cyan-500 scale-125'
                        : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Capability Focus Card with Real Image Integration */}
          <div
            className={`lg:col-span-7 rounded-2xl overflow-hidden hairline-border relative transition-colors ${
              isDark
                ? 'bg-gradient-to-br from-slate-900/90 via-[#0a1226] to-[#070d1e]'
                : 'bg-white shadow-md'
            }`}
          >
            {/* Visual Image Banner for active capability */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
              <img
                src={capabilityImages[selectedIdx] || IMAGES.hero}
                alt={`${CAPABILITIES[selectedIdx].title} by EMCO Oilfield Services`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? 'from-slate-900 via-slate-900/50' : 'from-white via-white/40'
                } to-transparent`}
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono text-cyan-300 bg-black/60 backdrop-blur-sm px-3 py-1 rounded border border-white/10 uppercase tracking-widest">
                  Capability 0{selectedIdx + 1} / 06
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 pt-4">
              <div
                className={`flex items-center justify-between mb-4 pb-3 border-b ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                <h3
                  className={`text-2xl sm:text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {CAPABILITIES[selectedIdx].title}
                </h3>
                <span
                  className={`text-xs font-medium ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  EMCO Integrated Framework
                </span>
              </div>

              <p
                className={`text-base leading-relaxed mb-6 font-normal ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {CAPABILITIES[selectedIdx].summary}
              </p>

              <div className="mb-8">
                <h4
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Operational Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CAPABILITIES[selectedIdx].keyAspects.map((aspect, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-lg border ${
                        isDark
                          ? 'bg-white/[0.02] border-white/5'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span
                        className={`text-xs leading-relaxed font-medium ${
                          isDark ? 'text-slate-300' : 'text-slate-800'
                        }`}
                      >
                        {aspect}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}
              >
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Coordinated with cross-functional energy engineering teams.
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 py-2.5 px-4 rounded-md transition-colors shadow-sm"
                >
                  <span>Engage Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
