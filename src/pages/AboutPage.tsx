import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_INFO, IMAGES } from '../data/content';
import { PageId } from '../types';
import { ShieldCheck, Cpu, HardHat, Compass, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <div
      className={`min-h-screen pb-24 transition-colors duration-300 ${
        isDark ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <PageHeader
        eyebrow="Corporate Profile"
        title="Oilfield expertise, built around performance."
        subtitle="EMCO Oilfield Services Ltd delivers dependable engineering, technical execution, and industrial support to Nigeria's high-demand energy sector."
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 space-y-20">
        {/* Core Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            className={`lg:col-span-7 space-y-6 leading-relaxed text-base ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl font-bold leading-snug ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Operational reliability rooted in technical capability.
            </h2>
            <p>
              In Nigeria’s complex energy sector, success depends on field uptime, equipment integrity,
              and strict adherence to safety and operational guidelines. EMCO Oilfield Services Ltd was
              established to deliver professional technical and operational support that meets these
              exact requirements without operational compromises.
            </p>
            <p>
              Our team approaches every client requirement with disciplined engineering assessment,
              rigorous risk profiling, and a focus on long-term equipment reliability. By integrating
              field operations with structured procurement and technical supervision, we enable energy
              producers to mitigate downtime and execute maintenance turnarounds with high confidence.
            </p>
          </div>

          <div
            className={`lg:col-span-5 rounded-2xl overflow-hidden hairline-border shadow-2xl relative ${
              isDark ? 'bg-slate-900/60' : 'bg-slate-50'
            }`}
          >
            <img
              src={IMAGES.drillingRig}
              alt="EMCO Technical and Drilling Rig Services in Nigeria"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover object-center"
            />
            <div
              className={`p-6 border-t ${
                isDark ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
              }`}
            >
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider block mb-1">
                Field Excellence
              </span>
              <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Technical inspections, drilling rig support, and facility supervision.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Foundational Pillars */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Operating Ethos
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            How we approach energy operations.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-8 rounded-2xl hairline-border ${
                isDark ? 'bg-slate-900/50' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 border border-blue-400/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Technical Capability
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                We prioritize sound engineering fundamentals, accurate diagnostics, and calibrated field tools.
                Our personnel undergo continuous technical alignment to handle evolving upstream and midstream operational technologies.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl hairline-border ${
                isDark ? 'bg-slate-900/50' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 border border-blue-400/20">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Operational Support & Agility
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Oilfield challenges are dynamic. We structure our field teams and equipment logistics to provide
                responsive support, whether addressing unexpected field bottlenecks or planned turnaround cycles.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl hairline-border ${
                isDark ? 'bg-slate-900/50' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 border border-blue-400/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Safety & Risk Culture
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Safety is not an overlay—it is the foundation of our execution. We operate strict pre-task
                hazard reviews and empower every field team member with unconditional Stop-Work Authority.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl hairline-border ${
                isDark ? 'bg-slate-900/50' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 border border-blue-400/20">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Client-Centric Alignment
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                We operate as an extension of our clients' operating teams, aligning our timelines, quality
                assurance steps, and reporting protocols directly with the operator’s production targets.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className={`p-8 sm:p-12 rounded-2xl hairline-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
            isDark
              ? 'bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-[#070d1e]'
              : 'bg-slate-100 shadow-sm'
          }`}
        >
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to discuss an operational requirement?
            </h3>
            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Connect directly with EMCO Oilfield Services Ltd to consult on technical services, engineering, or procurement support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
            >
              Contact EMCO →
            </button>
            <a
              href={COMPANY_INFO.phoneHref}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold rounded-lg border transition-colors ${
                isDark
                  ? 'text-cyan-300 border-white/10 hover:border-cyan-400/40 bg-white/5'
                  : 'text-slate-800 border-slate-300 hover:border-blue-400 bg-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
