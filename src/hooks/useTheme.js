// ============================================================
// 📁 src/hooks/useTheme.js
// Custom hook for dark/light mode management.
// Reads from localStorage, defaults to dark mode.
// ============================================================

import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Initialize theme from localStorage (or default to 'dark')
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored : 'dark';
  });

  // Apply theme class to <html> element whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between dark and light
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
