import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { HSE_PRINCIPLES } from '../data/content';
import { PageId } from '../types';
import { Shield, Leaf, AlertTriangle, FileCheck, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HSEPageProps {
  onNavigate: (page: PageId) => void;
}

export const HSEPage: React.FC<HSEPageProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const getIcon = (id: string) => {
    switch (id) {
      case 'health-safety':
        return <Shield className="w-6 h-6 text-cyan-500" />;
      case 'environmental-responsibility':
        return <Leaf className="w-6 h-6 text-cyan-500" />;
      case 'risk-management':
        return <AlertTriangle className="w-6 h-6 text-cyan-500" />;
      case 'operational-standards':
        return <FileCheck className="w-6 h-6 text-cyan-500" />;
      default:
        return <Shield className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <div
      className={`min-h-screen pb-24 transition-colors duration-300 ${
        isDark ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <PageHeader
        eyebrow="HSE Policy & Standards"
        title="Safety at the core of every operation."
        subtitle="Health & Safety • Environmental Responsibility • Risk Management • Operational Standards"
        onNavigateHome={() => onNavigate('home')}
        videoFeedId="offshore-platform"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 space-y-16">
        {/* Intro */}
        <div className="max-w-3xl">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Zero compromise on human safety and environmental protection.
          </h2>
          <p
            className={`text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            In oilfield and energy services, operational excellence is indistinguishable from safety excellence.
            At EMCO Oilfield Services Ltd, our Health, Safety, and Environment (HSE) management framework is deeply
            embedded into our planning, resource dispatch, on-site supervision, and daily field execution across Nigeria.
          </p>
        </div>

        {/* 4 Pillars In-Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HSE_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className={`p-8 sm:p-10 rounded-2xl hairline-border hairline-border-hover flex flex-col justify-between ${
                isDark ? 'bg-slate-900/60' : 'bg-slate-50 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-400/20">
                    {getIcon(principle.id)}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {principle.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-500">EMCO Core Standard</span>
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
                  className={`space-y-3 pt-6 border-t ${
                    isDark ? 'border-white/5' : 'border-slate-200'
                  }`}
                >
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Key Operating Practices
                  </h4>
                  {principle.corePillars.map((pillar, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 text-xs sm:text-sm ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Directives Card */}
        <div
          className={`p-8 sm:p-12 rounded-2xl hairline-border ${
            isDark
              ? 'bg-gradient-to-br from-slate-900/90 via-[#0a1226] to-[#070d1e]'
              : 'bg-white shadow-md'
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            EMCO Field Safety Directives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div
              className={`p-6 rounded-xl border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Pre-Job Safety Analysis (JSA)
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Prior to turning a wrench or mobilizing equipment, team leads conduct mandatory JSA reviews with all crew members to evaluate step-by-step hazards.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Unconditional Stop-Work Authority
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Any team member, regardless of seniority, has the absolute right and obligation to halt work if unsafe conditions or procedural deviations are detected.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h4 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Environmental Containment
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Zero tolerance for unauthorized release of hydrocarbons or chemicals. Spill kits, secondary containments, and certified disposal trails are enforced.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div
          className={`p-8 rounded-2xl hairline-border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark ? 'bg-slate-900/80' : 'bg-slate-100 shadow-sm'
          }`}
        >
          <div>
            <h4
              className={`text-lg font-bold mb-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Need detailed HSE compliance documentation for an active tender?
            </h4>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Our safety coordinators provide comprehensive technical documentation upon request.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
          >
            Request HSE Dossier →
          </button>
        </div>
      </div>
    </div>
  );
};
