import React from 'react';
import { HSE_PRINCIPLES, IMAGES } from '../data/content';
import { Shield, Leaf, AlertTriangle, FileCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { useTheme } from '../context/ThemeContext';

interface HSESectionProps {
  onNavigate: (page: PageId) => void;
}

export const HSESection: React.FC<HSESectionProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const getIcon = (id: string) => {
    switch (id) {
      case 'health-safety':
        return <Shield className="w-5 h-5 text-cyan-500" />;
      case 'environmental-responsibility':
        return <Leaf className="w-5 h-5 text-cyan-500" />;
      case 'risk-management':
        return <AlertTriangle className="w-5 h-5 text-cyan-500" />;
      case 'operational-standards':
        return <FileCheck className="w-5 h-5 text-cyan-500" />;
      default:
        return <Shield className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section
      id="hse"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050814] border-white/5' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <EnergyBackgroundCanvas variant="particles" density={16} className="opacity-40" />

      {/* Background Subtle Gradient */}
      <div
        className={`absolute top-1/3 right-10 w-96 h-96 blur-[120px] pointer-events-none rounded-full ${
          isDark ? 'bg-blue-600/5' : 'bg-blue-300/20'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Health, Safety & Environment
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Safety at the core of every operation.
          </h2>
          <p
            className={`text-base leading-relaxed font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            At EMCO Oilfield Services Ltd, the health and safety of our personnel, the protection of our operational
            ecosystems, and disciplined adherence to industry-standard risk management protocols govern every field task
            we execute.
          </p>
        </div>

        {/* 4 HSE Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {HSE_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className={`p-8 rounded-2xl hairline-border hairline-border-hover transition-all duration-200 ${
                isDark ? 'bg-slate-900/50' : 'bg-white shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  {getIcon(principle.id)}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {principle.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-500">EMCO Safety Framework</span>
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 font-normal ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {principle.description}
              </p>

              <div
                className={`space-y-3 pt-4 border-t ${
                  isDark ? 'border-white/5' : 'border-slate-200'
                }`}
              >
                {principle.corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Safety Commitment Banner with Real Field Photography */}
        <div
          className={`rounded-2xl overflow-hidden hairline-border transition-all grid grid-cols-1 md:grid-cols-12 ${
            isDark
              ? 'bg-gradient-to-r from-blue-950/40 to-slate-900/90'
              : 'bg-white shadow-md'
          }`}
        >
          <div className="md:col-span-8 p-8 flex flex-col justify-between">
            <div>
              <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Stop-Work Authority Policy
              </h4>
              <p className={`text-sm leading-relaxed max-w-2xl mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Every EMCO personnel and affiliated contractor holds unconditional authority and responsibility to halt any activity if safety conditions are compromised.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('hse')}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                <span>Read Full HSE Policy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="md:col-span-4 h-48 md:h-auto relative overflow-hidden bg-slate-950">
            <img
              src={IMAGES.engineerInspection}
              alt="Certified engineers adhering to EMCO HSE protocols on facility deck"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-cyan-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
              Safety-First Field Oversight
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
