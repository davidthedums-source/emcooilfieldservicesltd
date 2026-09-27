import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LiveBackgroundVideo } from './LiveBackgroundVideo';
import { useTheme } from '../context/ThemeContext';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  onNavigateHome: () => void;
  videoFeedId?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  onNavigateHome,
  videoFeedId = 'offshore-platform',
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <div
      className={`pt-32 pb-16 relative overflow-hidden border-b transition-colors duration-300 ${
        isDark
          ? 'bg-[#030611] border-white/5'
          : 'bg-white border-slate-200'
      }`}
    >
      {/* Live Video Background with Layered Motion for Subpages */}
      <LiveBackgroundVideo
        showControls={false}
        showSelector={false}
        compactOverlay={true}
        initialFeedId={videoFeedId}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-500 hover:text-cyan-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Overview</span>
        </button>

        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-3">
            {eyebrow}
          </div>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight [text-wrap:balance] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-base sm:text-lg leading-relaxed font-normal [text-wrap:pretty] ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
