import React, { useState } from 'react';
import { ArrowRight, Wrench, Cpu, Compass, Truck, Layers, Building2, ChevronRight, Check } from 'lucide-react';
import { SERVICES, IMAGES } from '../data/content';
import { PageId, ServiceItem } from '../types';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { useTheme } from '../context/ThemeContext';

interface ServicesSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
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

  return (
    <section
      id="services"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030712] border-white/5' : 'bg-white border-slate-200'
      }`}
    >
      {/* Background Animated Canvas with technical grid wave pattern */}
      <EnergyBackgroundCanvas variant="grid" density={24} className="opacity-50" />

      {/* Background accents */}
      <div
        className={`absolute top-0 right-1/4 w-[500px] h-[500px] blur-[140px] pointer-events-none rounded-full ${
          isDark ? 'bg-blue-600/5' : 'bg-blue-200/25'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              Capabilities & Offerings
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Services designed for energy operations.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <span>View All Service Specifications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Services Grid with Real Company Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-xl overflow-hidden hairline-border hairline-border-hover transition-all duration-300 ${
                isDark ? 'bg-slate-900/50' : 'bg-slate-50/70 shadow-sm'
              }`}
            >
              <div>
                {/* Realistic Oilfield Photo Header for each service */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                  <img
                    src={getServiceImage(service.id)}
                    alt={`${service.title} - EMCO Oilfield Services`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDark ? 'from-slate-900 via-slate-900/40' : 'from-slate-50 via-slate-50/30'
                    } to-transparent`}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center border border-white/10">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Service Title */}
                  <h3
                    className={`text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 font-normal ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Scope Highlights */}
                  <div
                    className={`space-y-2 mb-6 border-t pt-4 ${
                      isDark ? 'border-white/5' : 'border-slate-200'
                    }`}
                  >
                    {service.scope.slice(0, 3).map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2.5 text-xs leading-snug ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div
                className={`p-6 pt-3 border-t flex items-center justify-between ${
                  isDark ? 'border-white/5' : 'border-slate-200'
                }`}
              >
                <span
                  className={`text-xs font-medium tracking-wide ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  {service.operationalFocus}
                </span>
                <button
                  onClick={() => {
                    if (onSelectService) {
                      onSelectService(service.id);
                    } else {
                      setActiveModalService(service);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`relative max-w-2xl w-full border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-[#0d162e] border-white/10 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            <div
              className={`flex items-start justify-between mb-6 pb-4 border-b ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <div>
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider block mb-1">
                  EMCO Service Specification
                </span>
                <h3 className="text-2xl font-bold">{activeModalService.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className={`p-1.5 rounded-lg transition-colors ${
                  isDark
                    ? 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10'
                    : 'text-slate-600 hover:text-black bg-slate-100 hover:bg-slate-200'
                }`}
              >
                ✕
              </button>
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 font-normal ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {activeModalService.fullDesc}
            </p>

            <div className="mb-6">
              <h4
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Scope of Operations
              </h4>
              <div className="space-y-2">
                {activeModalService.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Key Technical Deliverables
              </h4>
              <div className="space-y-2">
                {activeModalService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`pt-4 border-t flex items-center justify-between ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setActiveModalService(null)}
                className={`text-xs font-medium ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onNavigate('contact');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
              >
                <span>Request Service Engagement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
