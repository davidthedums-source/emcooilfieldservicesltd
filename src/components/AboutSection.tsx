import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, HardHat, Compass } from 'lucide-react';
import { PageId } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { IMAGES } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#060b18]/70 border-white/5' : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Background Live Motion Particles */}
      <EnergyBackgroundCanvas variant="particles" density={20} className="opacity-60" />

      {/* Background Glow */}
      <div
        className={`absolute top-1/2 left-0 w-96 h-96 blur-[120px] pointer-events-none rounded-full ${
          isDark ? 'bg-blue-600/5' : 'bg-blue-300/20'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Company Overview
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Oilfield expertise,<br />
            <span className={isDark ? 'text-slate-400 font-medium' : 'text-slate-500 font-medium'}>
              built around performance.
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed [text-wrap:pretty] ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            EMCO Oilfield Services Ltd provides specialized services across Nigeria’s energy and industrial landscape.
            Our operating model is engineered to address the demanding realities of oilfield operations—prioritizing
            strict technical capability, execution reliability, operational support, safety vigilance, and dedicated client focus.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div
            className={`p-6 rounded-xl hairline-border hairline-border-hover transition-colors ${
              isDark ? 'bg-slate-900/60' : 'bg-white shadow-sm'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-cyan-500 border border-blue-400/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technical Capability
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Applying specialized engineering knowledge and rigorous diagnostic procedures to ensure field systems operate reliably.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl hairline-border hairline-border-hover transition-colors ${
              isDark ? 'bg-slate-900/60' : 'bg-white shadow-sm'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-cyan-500 border border-blue-400/20">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Operational Support
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Providing dependable field responsiveness and resource mobilization to support continuous energy and oilfield operations.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl hairline-border hairline-border-hover transition-colors ${
              isDark ? 'bg-slate-900/60' : 'bg-white shadow-sm'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-cyan-500 border border-blue-400/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Safety Culture
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Embedding strict HSE standards into daily operations to safeguard personnel, asset integrity, and the working environment.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl hairline-border hairline-border-hover transition-colors ${
              isDark ? 'bg-slate-900/60' : 'bg-white shadow-sm'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-cyan-500 border border-blue-400/20">
              <HardHat className="w-5 h-5" />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Client Focus
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Aligning our service delivery directly with client operational schedules, regulatory baselines, and quality specifications.
            </p>
          </div>
        </div>

        {/* Narrative Feature Row with Real Industrial Imagery & Theme Styling */}
        <div
          className={`rounded-2xl overflow-hidden hairline-border transition-all grid grid-cols-1 lg:grid-cols-12 ${
            isDark
              ? 'bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-[#070d1e]'
              : 'bg-white shadow-md'
          }`}
        >
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest block mb-2">
                Operational Integrity in Nigeria
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Committed to operational excellence across Nigerian energy operations
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Whether supporting upstream production, technical inspections, or industrial procurement,
                EMCO applies structured execution methodologies designed to minimize operational friction and ensure compliance.
              </p>
            </div>

            <div>
              <button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                <span>Learn More About EMCO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-auto relative overflow-hidden bg-slate-950">
            <img
              src={IMAGES.drillingRig}
              alt="Active oilfield drilling rig operations in Nigeria"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-[11px] font-mono text-cyan-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
              Active Wellsite Operations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
