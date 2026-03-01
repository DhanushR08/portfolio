/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode via class toggle on <html> element
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Custom Color Palette ───────────────────────────────────────────────
      colors: {
        primary: {
          DEFAULT: '#00D4FF', // Electric cyan — main accent
          dark:    '#00A8CC',
          light:   '#7EEEFF',
        },
        accent: {
          DEFAULT: '#FF6B35', // Warm amber/orange — secondary accent
          dark:    '#E55A25',
          light:   '#FF9166',
        },
        surface: {
          DEFAULT:  '#0A0F1E', // Deep navy — dark bg
          elevated: '#111827', // Slightly lighter panels
          card:     '#1A2235', // Card bg in dark mode
          border:   '#1E2D40', // Border color in dark mode
        },
      },
      // ─── Custom Fonts ────────────────────────────────────────────────────────
      fontFamily: {
        mono:    ['"Space Mono"', 'monospace'],     // Headings, code-style text
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'], // Body text
        display: ['"Syne"', 'sans-serif'],           // Hero large text
      },
      // ─── Custom Animations ───────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'scan': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%':      { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease forwards',
        'fade-in':    'fade-in 0.8s ease forwards',
        'blink':      'blink 1s step-end infinite',
        'float':      'float 4s ease-in-out infinite',
        'scan':       'scan 8s linear infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
      },
      // ─── Box Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        'glow':       '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-lg':    '0 0 40px rgba(0, 212, 255, 0.4)',
        'card-dark':  '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-light': '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
