import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Video, Radio, Layers, VolumeX, Check } from 'lucide-react';
import { EnergyBackgroundCanvas } from './EnergyBackgroundCanvas';
import { FlowingLines } from './FlowingLines';
import { useTheme } from '../context/ThemeContext';
import { IMAGES } from '../data/content';

export interface VideoFeedOption {
  id: string;
  name: string;
  category: string;
  url: string;
  poster: string;
  location: string;
  description: string;
}

export const LIVE_FEEDS: VideoFeedOption[] = [
  {
    id: 'offshore-platform',
    name: 'Offshore Production Platform',
    category: 'Marine & Offshore Asset',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Pelatar_minyak_dilihat_di_kawasan_dekat_Pantai_di_Miri.webm',
    poster: IMAGES.hero,
    location: 'Offshore Gulf of Guinea Operations',
    description: 'High-uptime production facility, subsea connections & deck utilities',
  },
  {
    id: 'drilling-rig',
    name: 'Wellsite & Drilling Rig',
    category: 'Field Operations',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Exploratory_drilling_at_South32_Hermosa_project.webm',
    poster: IMAGES.drillingRig,
    location: 'Upstream Operational Wellhead',
    description: 'Continuous rotary drilling, downhole diagnostics & pressure monitoring',
  },
  {
    id: 'pipeline-engineering',
    name: 'Pipeline & Fabrication Engineering',
    category: 'Technical Services',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Welding_a_water_supply_pipe.webm',
    poster: IMAGES.pipelineValves,
    location: 'Terminal Flowline Infrastructure',
    description: 'High-specification welding, non-destructive testing & spool assembly',
  },
];

interface LiveBackgroundVideoProps {
  className?: string;
  showControls?: boolean;
  showSelector?: boolean;
  compactOverlay?: boolean;
  initialFeedId?: string;
  children?: React.ReactNode;
}

export const LiveBackgroundVideo: React.FC<LiveBackgroundVideoProps> = ({
  className = '',
  showControls = true,
  showSelector = true,
  compactOverlay = false,
  initialFeedId = 'offshore-platform',
  children,
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  const [activeFeed, setActiveFeed] = useState<VideoFeedOption>(() => {
    return LIVE_FEEDS.find((f) => f.id === initialFeedId) || LIVE_FEEDS[0];
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // When active feed changes, reload video
  useEffect(() => {
    setIsVideoLoaded(false);
    setHasVideoError(false);

    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay might be restricted; video is muted so usually plays, but handle cleanly
            setIsPlaying(false);
          });
      }
    }
  }, [activeFeed.url]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleSelectFeed = (feed: VideoFeedOption) => {
    setActiveFeed(feed);
    setSelectorOpen(false);
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* 1. Underlying Poster Image (Instant visual fallback while video initializes) */}
      <img
        src={activeFeed.poster}
        alt={activeFeed.name}
        className={`absolute inset-0 w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-20' : 'opacity-100'
        } animate-[subtle-zoom_30s_infinite_alternate_ease-in-out]`}
      />

      {/* 2. Live Looping Video Element */}
      {!hasVideoError && (
        <video
          ref={videoRef}
          key={activeFeed.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={activeFeed.poster}
          onLoadedData={() => setIsVideoLoaded(true)}
          onPlaying={() => {
            setIsVideoLoaded(true);
            setIsPlaying(true);
          }}
          onError={() => {
            setHasVideoError(true);
            setIsVideoLoaded(false);
          }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-85' : 'opacity-0'
          }`}
        >
          <source src={activeFeed.url} type="video/webm" />
        </video>
      )}

      {/* 3. Theme-Tailored Multilayer Scrim for Maximum Contrast & Pristine Legibility */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? compactOverlay
              ? 'bg-gradient-to-r from-[#030712]/95 via-[#030712]/80 to-[#030712]/90'
              : 'bg-gradient-to-r from-[#030712]/92 via-[#060e22]/85 to-[#030712]/80'
            : compactOverlay
            ? 'bg-gradient-to-r from-white/96 via-white/85 to-white/90'
            : 'bg-gradient-to-r from-white/94 via-slate-50/85 to-white/80'
        }`}
      />

      {/* Top and Bottom Vignettes for Natural Blending */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/70'
            : 'bg-gradient-to-t from-white via-transparent to-slate-100/70'
        }`}
      />

      {/* Subtle Digital Grid Pattern */}
      <div className="absolute inset-0 stripe-grid-pattern opacity-25" />

      {/* 4. Live Background Animations: Particles, Energy Trajectories, and Flowing Lines */}
      <EnergyBackgroundCanvas variant="hero" density={30} className="opacity-70" />
      <FlowingLines className="opacity-45" />

      {/* 5. Animated Glowing Ambient Energy Accents */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] blur-[130px] rounded-full pointer-events-none transition-colors duration-500 animate-[subtle-float_12s_infinite_ease-in-out] ${
          isDark ? 'bg-blue-600/15' : 'bg-blue-400/20'
        }`}
      />
      <div
        className={`absolute bottom-10 right-10 w-[450px] h-[280px] blur-[110px] rounded-full pointer-events-none transition-colors duration-500 animate-[subtle-float_16s_infinite_ease-in-out_reverse] ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/15'
        }`}
      />

      {/* Children Layer if needed */}
      {children}

      {/* 6. Interactive Live Feed & Playback Controller (Positioned in bottom corner of hero) */}
      {showControls && (
        <div className="absolute bottom-6 right-6 md:right-10 z-20 pointer-events-auto flex flex-col items-end gap-2">
          {/* Feed Selector Popup Drawer */}
          {selectorOpen && (
            <div
              className={`w-72 md:w-80 rounded-xl p-3 border shadow-2xl backdrop-blur-xl mb-2 animate-in fade-in zoom-in-95 duration-150 ${
                isDark
                  ? 'bg-[#080e22]/95 border-white/15 text-white'
                  : 'bg-white/95 border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 dark:border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-500 font-semibold flex items-center gap-1.5">
                  <Video className="w-3 h-3" /> Select Live Video Feed
                </span>
                <span className="text-[10px] text-slate-400 font-mono">3 Streams</span>
              </div>

              <div className="space-y-1.5">
                {LIVE_FEEDS.map((feed) => {
                  const isCurrent = feed.id === activeFeed.id;
                  return (
                    <button
                      key={feed.id}
                      onClick={() => handleSelectFeed(feed)}
                      className={`w-full text-left p-2 rounded-lg transition-all flex items-start gap-2.5 ${
                        isCurrent
                          ? isDark
                            ? 'bg-blue-600/25 border border-cyan-400/40 text-white'
                            : 'bg-blue-50 border border-blue-200 text-blue-900'
                          : isDark
                          ? 'hover:bg-white/5 border border-transparent text-slate-300'
                          : 'hover:bg-slate-100 border border-transparent text-slate-700'
                      }`}
                    >
                      <img
                        src={feed.poster}
                        alt={feed.name}
                        className="w-12 h-10 object-cover rounded mt-0.5 flex-shrink-0 border border-black/10 dark:border-white/10"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-xs font-semibold truncate">{feed.name}</p>
                          {isCurrent && (
                            <Check className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 dark:text-slate-400 truncate">
                          {feed.category}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Controller Floating Bar */}
          <div
            className={`inline-flex items-center gap-2 p-1.5 pl-3 rounded-full border shadow-xl backdrop-blur-md transition-all ${
              isDark
                ? 'bg-[#080e22]/90 border-white/15 text-white'
                : 'bg-white/90 border-slate-200 text-slate-800'
            }`}
          >
            {/* Live Indicator Pulsing Dot */}
            <div className="flex items-center gap-2 pr-1">
              <span className="relative flex h-2 w-2">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isPlaying ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
                {isPlaying ? 'LIVE VIDEO' : 'PAUSED'}
              </span>
            </div>

            {/* Current Active Feed Badge */}
            <div className="hidden sm:block text-[11px] font-medium max-w-[150px] truncate opacity-80 border-l border-slate-200 dark:border-white/10 pl-2">
              {activeFeed.name}
            </div>

            {/* Feed Selector Toggle */}
            {showSelector && (
              <button
                onClick={() => setSelectorOpen(!selectorOpen)}
                className={`p-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 focus:outline-none ${
                  selectorOpen
                    ? isDark
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'bg-blue-100 text-blue-700'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-black hover:bg-slate-100'
                }`}
                title="Switch Live Video Stream"
                aria-label="Switch Live Video Stream"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="text-[10px] hidden md:inline">Feeds</span>
              </button>
            )}

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`p-1.5 rounded-full transition-colors focus:outline-none ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
              title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
              aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            {/* Muted Indicator (Informational) */}
            <span
              className="p-1 text-slate-400 dark:text-slate-500"
              title="Ambient Video Audio Muted"
            >
              <VolumeX className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
