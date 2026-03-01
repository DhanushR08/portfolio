// ============================================================
// 📁 src/components/LoadingScreen.jsx
// Animated loading screen shown briefly before the portfolio
// renders. Creates a memorable first impression.
// ============================================================

import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ y: ['-100%', '100vh'] }}
          transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
        />
      </div>

      {/* Logo / name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-10 relative z-10"
      >
        <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3 block">
          {'<'}initializing{' />'}
        </span>
        <h1 className="font-display text-5xl font-bold text-white">
          {personalInfo.name}
        </h1>
        <p className="font-mono text-[var(--text-muted)] text-sm mt-2">
          {personalInfo.role}
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="w-64 h-px bg-surface-border relative z-10 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
        />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs text-[var(--text-muted)] mt-4 relative z-10"
      >
        Loading portfolio...
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
