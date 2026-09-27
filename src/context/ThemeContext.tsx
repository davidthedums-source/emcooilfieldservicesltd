import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'black' | 'white' | 'auto';
export type ResolvedTheme = 'black' | 'white';

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'emco_theme_preference';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (saved && ['black', 'white', 'auto'].includes(saved)) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'white'; // The default theme is WHITE
  });

  // Calculate resolved theme:
  // When AUTO is selected, the website should use WHITE by default or respond to system mode
  const getResolvedTheme = (mode: ThemeMode): ResolvedTheme => {
    if (mode === 'black') return 'black';
    if (mode === 'white') return 'white';
    // For 'auto': default to white
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'black';
    }
    return 'white';
  };

  const resolvedTheme = getResolvedTheme(theme);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }

    const root = document.documentElement;
    if (resolvedTheme === 'black') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'black');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'white');
      root.style.colorScheme = 'light';
    }
  }, [theme, resolvedTheme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
