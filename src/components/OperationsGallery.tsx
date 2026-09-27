import React, { useState, useEffect } from 'react';
import { OPERATIONAL_GALLERY, GalleryPhoto } from '../data/content';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Eye, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';

export const OperationsGallery: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    'All',
    'Offshore & Marine',
    'Drilling & Wellsite',
    'Technical Engineering',
    'Facility & Integrity',
  ];

  const filteredPhotos =
    selectedCategory === 'All'
      ? OPERATIONAL_GALLERY
      : OPERATIONAL_GALLERY.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for full-screen lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') {
        setActivePhoto(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
        const nextIndex = (currentIndex + 1) % filteredPhotos.length;
        setActivePhoto(filteredPhotos[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
        const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setActivePhoto(filteredPhotos[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, filteredPhotos]);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030612] border-white/5' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <EnergyBackgroundCanvas variant="particles" density={16} className="opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Operations in Focus</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 [text-wrap:balance] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              FIELD OPERATIONS IN PICTURES.
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed font-normal [text-wrap:pretty] ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Photographic documentation of EMCO Oilfield Services Ltd offshore platforms, drilling wellsites, technical engineering diagnostics, and energy infrastructure.
            </p>
          </div>

          {/* Picture Count Pill */}
          <div
            className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border ${
              isDark
                ? 'bg-white/5 border-white/10 text-cyan-300'
                : 'bg-white border-slate-200 text-blue-700 shadow-sm'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span>{OPERATIONAL_GALLERY.length} High-Resolution Photographs</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? isDark
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : isDark
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-black border border-slate-200 shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-slate-900/60 border-white/10 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10'
                  : 'bg-white border-slate-200 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Action Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-white text-xs font-medium flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View High-Res Photo</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Category Pill on Image */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide backdrop-blur-md ${
                      isDark
                        ? 'bg-[#080e22]/80 text-cyan-300 border border-white/10'
                        : 'bg-white/90 text-slate-800 border border-white/60 shadow-xs'
                    }`}
                  >
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Caption & Scope */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-1.5">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </div>

                <h3
                  className={`text-base font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {photo.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {photo.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            title="Close Preview (Esc)"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next Buttons */}
          <button
            onClick={handlePrevPhoto}
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            title="Previous Photo (Left Arrow)"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            title="Next Photo (Right Arrow)"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* High-Resolution Picture View */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[68vh] overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[68vh]"
              />
            </div>

            {/* Picture Details Bar */}
            <div className="p-6 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>{activePhoto.category}</span>
                  <span>·</span>
                  <span>{activePhoto.location}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  {activePhoto.scope}
                </p>
              </div>

              <div className="flex items-center gap-2 sm:self-center">
                <span className="text-xs text-slate-400 font-mono">
                  {filteredPhotos.findIndex((p) => p.id === activePhoto.id) + 1} of {filteredPhotos.length}
                </span>
                <div className="flex items-center gap-1 sm:hidden">
                  <button
                    onClick={handlePrevPhoto}
                    className="p-2 rounded bg-white/10 text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="p-2 rounded bg-white/10 text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
