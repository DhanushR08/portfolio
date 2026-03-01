// ============================================================
// 📁 src/components/Navbar.jsx
// Sticky navigation with:
//  • Smooth scroll links
//  • Active section highlighting via useScrollSpy
//  • Dark / light mode toggle
//  • Mobile hamburger menu
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personalInfo } from '../data/portfolioData';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  // Get currently visible section id (strip '#')
  const sectionIds    = navLinks.map(l => l.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 100);

  // Add background blur once user scrolls past 50px
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Smooth scroll handler
  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? 'backdrop-blur-xl border-b border-[var(--border)] shadow-card-dark'
            : ''}
        `}
        style={{
          background: isScrolled
            ? theme === 'dark'
              ? 'rgba(10, 15, 30, 0.85)'
              : 'rgba(248, 250, 252, 0.85)'
            : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ─── Logo ─────────────────────────────────────────── */}
            <motion.button
              onClick={() => scrollTo('#hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-primary text-lg font-bold tracking-wider"
            >
              {'<DR'}
              <span className="text-accent">{'/>'}</span>
            </motion.button>

            {/* ─── Desktop Nav Links ────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id       = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`
                      relative px-4 py-2 rounded-lg font-sans text-sm font-medium
                      transition-colors duration-200
                      ${isActive
                        ? 'text-primary'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}
                    `}
                  >
                    {link.label}
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ─── Right Controls ───────────────────────────────── */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-primary transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>

              {/* Resume CTA (desktop) */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="
                  hidden md:inline-flex items-center gap-2
                  px-4 py-2 rounded-lg border border-primary
                  text-primary text-sm font-medium font-sans
                  hover:bg-primary hover:text-surface
                  transition-all duration-200
                "
              >
                Resume
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(p => !p)}
                className="md:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-primary transition-colors"
                aria-label="Toggle mobile menu"
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              background: theme === 'dark' ? '#0A0F1E' : '#F8FAFC',
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-mono text-primary text-lg font-bold">
                {'<DR'}<span className="text-accent">{'/>'}</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[var(--text-muted)] hover:text-primary"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => scrollTo(link.href)}
                  className="
                    w-full text-center py-4 text-2xl font-display font-bold
                    text-[var(--text-primary)] hover:text-primary
                    transition-colors duration-200 border-b border-[var(--border)]
                  "
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                href={personalInfo.resumeUrl}
                download
                className="
                  mt-8 px-8 py-3 rounded-lg border border-primary
                  text-primary text-lg font-medium
                  hover:bg-primary hover:text-surface
                  transition-all duration-200
                "
              >
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
