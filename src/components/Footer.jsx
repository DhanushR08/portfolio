// ============================================================
// 📁 src/components/Footer.jsx
// Minimal footer with copyright + back-to-top button.
// ============================================================

import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <span className="font-mono text-primary text-base font-bold">
            {'<DR'}<span className="text-accent">{'/>'}</span>
          </span>

          {/* Copyright */}
          <p className="font-sans text-[var(--text-muted)] text-sm text-center">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind CSS.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl
              border border-[var(--border)] text-[var(--text-muted)]
              hover:border-primary/40 hover:text-primary
              font-sans text-xs transition-colors duration-200
            "
            aria-label="Back to top"
          >
            <FiArrowUp size={13} />
            Back to top
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
