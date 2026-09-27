import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES, COMPANY_INFO, IMAGES } from '../data/content';
import { PageId } from '../types';
import { Check, ArrowRight, Wrench, Cpu, Compass, Truck, Layers, Building2, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedServiceId || SERVICES[0].id);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'oilfield-services':
        return IMAGES.drillingRig;
      case 'technical-services':
        return IMAGES.maintenance;
      case 'engineering-support':
        return IMAGES.engineering;
      case 'procurement-supply':
        return IMAGES.pipelineValves;
      case 'project-support':
        return IMAGES.facility;
      case 'industrial-support':
        return IMAGES.marine;
      default:
        return IMAGES.hero;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'oilfield-services':
        return <Wrench className="w-5 h-5 text-cyan-500" />;
      case 'technical-services':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'engineering-support':
        return <Compass className="w-5 h-5 text-cyan-500" />;
      case 'procurement-supply':
        return <Truck className="w-5 h-5 text-cyan-500" />;
      case 'project-support':
        return <Layers className="w-5 h-5 text-cyan-500" />;
      case 'industrial-support':
        return <Building2 className="w-5 h-5 text-cyan-500" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-500" />;
    }
  };

  const currentService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <div
      className={`min-h-screen pb-24 transition-colors duration-300 ${
        isDark ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <PageHeader
        eyebrow="Solutions & Scope"
        title="Services designed for energy operations."
        subtitle="Explore EMCO's full portfolio of field-proven oilfield services, technical engineering, procurement, and industrial maintenance solutions."
        onNavigateHome={() => onNavigate('home')}
        videoFeedId="drilling-rig"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16">
        {/* Service Segmented Navigation Bar */}
        <div
          className={`flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          {SERVICES.map((s, idx) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-400/50 shadow-md shadow-blue-500/20'
                    : isDark
                    ? 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:border-white/15'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-black hover:bg-slate-200'
                }`}
              >
                <span>0{idx + 1}.</span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div
          className={`rounded-2xl hairline-border shadow-2xl mb-16 overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-slate-900/90 via-[#0a1226] to-[#070d1e]'
              : 'bg-white shadow-md'
          }`}
        >
          {/* Service Banner Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
            <img
              src={getServiceImage(currentService.id)}
              alt={`${currentService.title} operations`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                isDark ? 'from-slate-900 via-slate-900/40' : 'from-white via-white/30'
              } to-transparent`}
            />
            <div className="absolute bottom-6 left-6 sm:left-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                {getServiceIcon(currentService.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-1 drop-shadow">
                  {currentService.operationalFocus}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow">
                  {currentService.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                EMCO Operational Service Specification
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Inquire for {currentService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Overview text */}
              <div className="lg:col-span-6 space-y-6">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Service Scope Overview
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {currentService.fullDesc}
                </p>
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    isDark
                      ? 'bg-white/[0.02] border-white/5 text-slate-400'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  All field engagements are executed in compliance with EMCO's Health, Safety, and Environmental (HSE) risk management protocols.
                </div>
              </div>

              {/* Scope & Deliverables */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <h3
                    className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Operational Activities Included
                  </h3>
                  <div className="space-y-3">
                    {currentService.scope.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-lg border ${
                          isDark
                            ? 'bg-slate-950/50 border-white/5'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span
                          className={`text-xs sm:text-sm font-medium ${
                            isDark ? 'text-slate-300' : 'text-slate-800'
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Technical Deliverables
                  </h3>
                  <div className="space-y-2.5">
                    {currentService.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 text-xs sm:text-sm ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Matrix of All 6 Services */}
        <div className="pt-8">
          <div className="max-w-2xl mb-8">
            <h3
              className={`text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              All EMCO Energy Service Offerings
            </h3>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Review our complete spectrum of services or contact our technical team for custom project scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-200 border ${
                  activeTab === s.id
                    ? isDark
                      ? 'bg-blue-950/40 border-cyan-400/50'
                      : 'bg-blue-50 border-blue-500 shadow-sm'
                    : isDark
                    ? 'bg-slate-900/40 border-white/5 hover:border-white/15'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {getServiceIcon(s.id)}
                  </div>
                  <span className="text-xs font-mono text-cyan-500">View</span>
                </div>
                <h4
                  className={`text-base font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {s.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed mb-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {s.shortDesc}
                </p>
                <span className="text-[11px] font-mono text-cyan-500 font-medium">
                  {s.operationalFocus}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div
          className={`mt-16 p-8 rounded-2xl hairline-border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark
              ? 'bg-gradient-to-r from-blue-950/40 to-slate-900'
              : 'bg-slate-100 shadow-sm'
          }`}
        >
          <div>
            <h4
              className={`text-lg font-bold mb-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Require an operational proposal or service inquiry?
            </h4>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Speak directly with EMCO Oilfield Services Ltd.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.phoneHref}
              className={`inline-flex items-center gap-2 text-xs font-mono font-bold px-4 py-2.5 rounded-lg border transition-colors ${
                isDark
                  ? 'text-cyan-300 bg-white/5 border-white/10 hover:border-cyan-400/40'
                  : 'text-slate-800 bg-white border-slate-300 hover:border-blue-400'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Send Enquiry →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
