import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface FlowingLinesProps {
  opacity?: number;
  className?: string;
}

export const FlowingLines: React.FC<FlowingLinesProps> = ({
  className = '',
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="w-full h-full opacity-30"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="emcoEnergyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#06b6d4' : '#0284c7'} stopOpacity="0.4" />
            <stop offset="50%" stopColor={isDark ? '#3b82f6' : '#2563eb'} stopOpacity="0.2" />
            <stop offset="100%" stopColor={isDark ? '#6366f1' : '#4f46e5'} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="emcoEnergyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#38bdf8' : '#0ea5e9'} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isDark ? '#1e40af' : '#1d4ed8'} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dynamic flowing curved paths with subtle continuous SVG stroke-dash animations */}
        <path
          d="M-100 250 C 300 120, 800 380, 1540 180"
          stroke="url(#emcoEnergyGrad1)"
          strokeWidth="1.5"
          fill="none"
          className="animate-[dash_15s_linear_infinite]"
          strokeDasharray="16 12"
        />
        <path
          d="M-100 320 C 400 450, 950 120, 1540 290"
          stroke="url(#emcoEnergyGrad2)"
          strokeWidth="1.2"
          fill="none"
          className="animate-[dash_20s_linear_infinite]"
          strokeDasharray="20 16"
        />
        <path
          d="M-100 180 C 500 220, 750 80, 1540 380"
          stroke={isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.1)'}
          strokeWidth="1"
          fill="none"
          strokeDasharray="8 8"
        />
      </svg>
    </div>
  );
};
