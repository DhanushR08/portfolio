// ============================================================
// 📁 src/components/ui/SectionTitle.jsx
// Reusable section heading with animated underline accent.
// ============================================================

import { motion } from 'framer-motion';

const SectionTitle = ({ label, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      {/* Eyebrow label */}
      <span className="font-mono text-sm text-primary tracking-[0.2em] uppercase mb-3 block">
        {'// '}{label}
      </span>

      {/* Main heading */}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-4">
        {title}
      </h2>

      {/* Animated gradient underline */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px w-12 bg-[var(--border)]" />
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
        <div className="h-px w-12 bg-[var(--border)]" />
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="text-[var(--text-muted)] max-w-xl mx-auto font-sans text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
