import React from 'react';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { Moon, Sun, Sparkles } from 'lucide-react';

interface ThemeSwitcherProps {
  compact?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ compact = false }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const options: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    {
      mode: 'black',
      label: 'Black',
      icon: <Moon className="w-3.5 h-3.5" />,
    },
    {
      mode: 'white',
      label: 'White',
      icon: <Sun className="w-3.5 h-3.5" />,
    },
    {
      mode: 'auto',
      label: 'Auto',
      icon: <Sparkles className="w-3 h-3" />,
    },
  ];

  const isDark = resolvedTheme === 'black';

  return (
    <div
      role="radiogroup"
      aria-label="Theme mode switcher"
      className={`inline-flex items-center p-0.5 rounded-lg border transition-colors ${
        isDark
          ? 'bg-slate-900/80 border-white/10'
          : 'bg-slate-100 border-slate-300 shadow-inner'
      }`}
    >
      {options.map((opt) => {
        const isSelected = theme === opt.mode;
        return (
          <button
            key={opt.mode}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => setTheme(opt.mode)}
            title={`Switch to ${opt.label} theme`}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all duration-200 focus:outline-none ${
              isSelected
                ? isDark
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'bg-white text-slate-900 shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            {opt.icon}
            {!compact && <span>{opt.label}</span>}
          </button>
        );
      })}
    </div>
  );
};
