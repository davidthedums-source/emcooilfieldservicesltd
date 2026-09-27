import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { IMAGES } from '../data/content';
import { PageId } from '../types';
import { CheckCircle2, Users, Compass, Shield, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <div
      className={`min-h-screen pb-24 transition-colors duration-300 ${
        isDark ? 'bg-[#030712] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <PageHeader
        eyebrow="Talent & Careers"
        title="Build your future in energy."
        subtitle="Join an oilfield and technical services organization committed to professional mastery, engineering rigor, and uncompromised field safety."
        onNavigateHome={() => onNavigate('home')}
        videoFeedId="drilling-rig"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 space-y-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2
              className={`text-2xl sm:text-3xl font-bold leading-snug ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Excellence starts with disciplined technical professionals.
            </h2>
            <p
              className={`text-base leading-relaxed font-normal ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              At EMCO Oilfield Services Ltd, our performance is directly shaped by the character, expertise,
              and diligence of our people. From engineering consultants and site technicians to supply chain
              specialists, we build teams that take ownership of complex operational outcomes.
            </p>
            <p
              className={`text-base leading-relaxed font-normal ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              We cultivate a culture of open technical inquiry, continuous skills enhancement, and mutual accountability.
              Every member of our field force is empowered with the training, tools, and authority necessary to execute safely.
            </p>
          </div>

          <div
            className={`lg:col-span-5 rounded-2xl overflow-hidden hairline-border ${
              isDark ? 'bg-slate-950' : 'bg-white shadow-md'
            }`}
          >
            <img
              src={IMAGES.engineering}
              alt="EMCO Engineering and Field Personnel"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover object-center"
            />
          </div>
        </div>

        {/* Culture & Pillars */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Our Culture
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            What it means to work with EMCO.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`p-6 rounded-xl hairline-border ${
                isDark ? 'bg-slate-900/60' : 'bg-slate-50'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 mb-4 border border-blue-400/20">
                <Target className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Technical Rigor
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We believe that solid fundamentals and disciplined data analysis drive reliable field operations.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl hairline-border ${
                isDark ? 'bg-slate-900/60' : 'bg-slate-50'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 mb-4 border border-blue-400/20">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Safety Above All
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We never compromise personnel or environmental protection for speed or convenience.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl hairline-border ${
                isDark ? 'bg-slate-900/60' : 'bg-slate-50'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 mb-4 border border-blue-400/20">
                <Users className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Collaborative Unity
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Cross-discipline alignment between site crews, engineering coordinators, and procurement leads.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl hairline-border ${
                isDark ? 'bg-slate-900/60' : 'bg-slate-50'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-cyan-500 mb-4 border border-blue-400/20">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Continuous Growth
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Ongoing exposure to modern energy technologies, diagnostic tools, and operational challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Talent Submission Section */}
        <div
          className={`p-8 sm:p-12 rounded-2xl hairline-border ${
            isDark
              ? 'bg-gradient-to-br from-slate-900/90 via-[#0a1226] to-[#070d1e]'
              : 'bg-white shadow-md'
          }`}
        >
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest block mb-2">
              Opportunities & Candidate Registry
            </span>
            <h3
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Submit your professional credentials.
            </h3>
            <p
              className={`text-sm leading-relaxed mb-6 font-normal ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              EMCO Oilfield Services Ltd regularly reviews professional profiles for operational engagements,
              turnaround campaigns, and specialized engineering support across Nigeria. If you possess demonstrated
              experience in oilfield operations, mechanical engineering, technical instrumentation, or HSE management,
              we welcome your introduction.
            </p>

            <div
              className={`space-y-3 mb-8 text-xs sm:text-sm ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Field Engineers, Wellsite Coordinators & Production Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Instrumentation, Flow Measurement & Electrical Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>HSE Officers & Site Safety Supervisors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Procurement, Supply Chain & Marine Operations Personnel</span>
              </div>
            </div>

            <div
              className={`pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all border border-blue-400/30"
              >
                <span>Contact EMCO →</span>
              </button>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Submit an inquiry via our corporate engagement channel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
