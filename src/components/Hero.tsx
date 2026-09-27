import React, { useState } from 'react';
import { ArrowRight, Phone, Camera, Eye, Maximize2, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/content';
import { PageId } from '../types';
import { LiveBackgroundVideo } from './LiveBackgroundVideo';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const heroPictures = [
    {
      id: 'hero-platform',
      title: 'Offshore Energy Platform',
      tag: 'Offshore Asset',
      image: IMAGES.hero,
      location: 'Gulf of Guinea Deepwater',
      caption: 'Platform deck integrity, structural monitoring & well utility upkeep.',
    },
    {
      id: 'hero-wellhead',
      title: 'High-Pressure Wellhead Control',
      tag: 'Technical Services',
      image: IMAGES.wellheadControl,
      location: 'Surface Wellhead Block',
      caption: 'Manifold diagnostics, precision instrumentation & pressure integrity.',
    },
    {
      id: 'hero-vessel',
      title: 'Offshore Marine Support Vessel',
      tag: 'Marine Logistics',
      image: IMAGES.offshoreVessel,
      location: 'Coastal Operational Channel',
      caption: 'Heavy logistics, supply coordination & emergency intervention support.',
    },
    {
      id: 'hero-drilling',
      title: 'Wellsite Drilling Operations',
      tag: 'Upstream Production',
      image: IMAGES.drillingRig,
      location: 'Onshore Exploration Block',
      caption: 'Continuous drilling support, rotary machinery servicing & mud logistics.',
    },
    {
      id: 'hero-engineer',
      title: 'Engineering Constructability Review',
      tag: 'Engineering Support',
      image: IMAGES.engineerInspection,
      location: 'Processing Deck Terminal',
      caption: 'On-site multidisciplinary supervision & safety-critical evaluations.',
    },
  ];

  const [activePicIdx, setActivePicIdx] = useState(0);
  const [modalPic, setModalPic] = useState<(typeof heroPictures)[0] | null>(null);

  const activePicture = heroPictures[activePicIdx];

  const handleScrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Live Video Background with Layered Continuous Animations and Controls */}
      <LiveBackgroundVideo
        showControls={true}
        showSelector={true}
        initialFeedId="offshore-platform"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand, Headline, and CTAs */}
          <div className="lg:col-span-7">
            {/* Subtle brand trust line */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className={isDark ? 'text-cyan-400' : 'text-blue-700'}>
                EMCO Oilfield Services Ltd
              </span>
              <span aria-hidden="true" className={isDark ? 'text-slate-600' : 'text-slate-400'}>·</span>
              <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Nigeria</span>
              <span aria-hidden="true" className={isDark ? 'text-slate-600' : 'text-slate-400'}>·</span>
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Energy Operations</span>
            </div>

            {/* Marquee Headline */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              ENGINEERING PERFORMANCE.{' '}
              <span className="block mt-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                POWERING ENERGY.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              className={`text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl [text-wrap:pretty] ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {COMPANY_INFO.supportingCopy}
            </p>

            {/* Action Button Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => onNavigate('services')}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-200 border border-blue-400/40 hover:translate-y-[-1px]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToGallery}
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-colors border ${
                  isDark
                    ? 'text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border-white/15'
                    : 'text-slate-800 hover:text-black bg-white hover:bg-slate-100 border-slate-300 shadow-xs'
                }`}
              >
                <Camera className="w-4 h-4 text-cyan-500" />
                <span>View Field Pictures</span>
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-bold rounded-lg border transition-all ${
                  isDark
                    ? 'text-cyan-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-cyan-500/40'
                    : 'text-blue-700 hover:text-blue-900 bg-blue-50/80 hover:bg-blue-100 border-blue-200'
                }`}
                title="Call EMCO Oilfield Services"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-500" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Clean Sub-Hero Service Scope Bar */}
            <div
              className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-3 gap-5 text-xs ${
                isDark ? 'border-white/10 text-slate-400' : 'border-slate-300 text-slate-600'
              }`}
            >
              <div>
                <div className={`font-semibold text-sm mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Upstream & Production
                </div>
                <div>Field integrity, wellsite coordination, and facility upkeep.</div>
              </div>
              <div>
                <div className={`font-semibold text-sm mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Technical & Engineering
                </div>
                <div>Multidisciplinary diagnostics and constructability reviews.</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className={`font-semibold text-sm mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Industrial & Supply
                </div>
                <div>Material traceability and specialized supply logistics.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Operational Picture Showcase Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl overflow-hidden border shadow-2xl backdrop-blur-xl transition-all ${
                isDark
                  ? 'bg-slate-900/80 border-white/15 shadow-black/50'
                  : 'bg-white/95 border-slate-200 shadow-xl shadow-slate-300/40'
              }`}
            >
              {/* Picture Header with Live Badge */}
              <div className="p-4 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-500">
                    Operations in Focus
                  </span>
                </div>

                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    isDark ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  Photo {activePicIdx + 1} of {heroPictures.length}
                </span>
              </div>

              {/* Main Featured Picture */}
              <div className="relative aspect-[16/11] bg-slate-950 overflow-hidden group cursor-pointer"
                   onClick={() => setModalPic(activePicture)}>
                <img
                  src={activePicture.image}
                  alt={activePicture.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Picture Overlay Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide backdrop-blur-md ${
                      isDark
                        ? 'bg-[#080e22]/85 text-cyan-300 border border-white/15'
                        : 'bg-white/90 text-slate-900 border border-white/80 shadow-xs'
                    }`}
                  >
                    {activePicture.tag}
                  </span>
                </div>

                {/* Inspect Picture Zoom Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalPic(activePicture);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  title="Expand Picture"
                  aria-label="Expand Picture"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Bottom Gradient with Location */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <p className="text-sm font-bold truncate">{activePicture.title}</p>
                  <p className="text-[11px] text-slate-300 truncate">{activePicture.caption}</p>
                </div>
              </div>

              {/* Thumbnail Strip to Switch Pictures */}
              <div className="p-3.5 border-t border-black/5 dark:border-white/10">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {heroPictures.map((pic, idx) => {
                    const isSelected = idx === activePicIdx;
                    return (
                      <button
                        key={pic.id}
                        onClick={() => setActivePicIdx(idx)}
                        className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all focus:outline-none ${
                          isSelected
                            ? 'ring-2 ring-blue-600 scale-105'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                        title={pic.title}
                      >
                        <img
                          src={pic.image}
                          alt={pic.title}
                          className="w-14 h-11 object-cover"
                        />
                      </button>
                    );
                  })}

                  <button
                    onClick={handleScrollToGallery}
                    className={`flex-shrink-0 h-11 px-2.5 rounded-lg border text-[11px] font-semibold flex items-center gap-1 transition-colors ${
                      isDark
                        ? 'border-white/10 hover:bg-white/5 text-cyan-300'
                        : 'border-slate-200 hover:bg-slate-100 text-blue-700'
                    }`}
                    title="View All Pictures in Gallery"
                  >
                    <span>All</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Picture Lightbox Modal */}
      {modalPic && (
        <div
          onClick={() => setModalPic(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setModalPic(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            title="Close Preview"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[70vh]">
              <img
                src={modalPic.image}
                alt={modalPic.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="p-5 bg-slate-900 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{modalPic.tag} · {modalPic.location}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{modalPic.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{modalPic.caption}</p>
              </div>

              <button
                onClick={() => {
                  setModalPic(null);
                  handleScrollToGallery();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 whitespace-nowrap"
              >
                Open Full Gallery →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

