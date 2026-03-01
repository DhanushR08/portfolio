// ============================================================
// 📁 src/components/Skills.jsx
// Skills section with category tabs and animated progress bars.
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';
import { skills } from '../data/portfolioData';

// Category tab config
const categories = [
  { id: 'frontend', label: 'Frontend',  emoji: '🖥️' },
  { id: 'backend',  label: 'Backend',   emoji: '⚙️' },
  { id: 'database', label: 'Database',  emoji: '🗄️' },
  { id: 'tools',    label: 'Tools',     emoji: '🛠️' },
];

// Single skill row with animated progress bar
const SkillRow = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="group"
  >
    {/* Label row */}
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-lg">{skill.icon}</span>
        <span className="font-sans text-sm font-medium text-[var(--text-primary)] group-hover:text-primary transition-colors">
          {skill.name}
        </span>
      </div>
      <span className="font-mono text-xs text-[var(--text-muted)]">{skill.level}%</span>
    </div>

    {/* Progress track */}
    <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const currentSkills = skills[activeTab] ?? [];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          label="Technical Skills"
          title="What I Work With"
          subtitle="Technologies and tools I've been using to build things."
        />

        {/* ─── Category Tabs ───────────────────────────────── */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, label, emoji }) => (
            <motion.button
              key={id}
              onClick={() => setActiveTab(id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl
                font-sans text-sm font-medium transition-all duration-200
                ${activeTab === id
                  ? 'bg-primary text-surface shadow-glow'
                  : 'bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--border)] hover:border-primary/40 hover:text-primary'}
              `}
            >
              <span>{emoji}</span>
              {label}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* ─── Skills Grid ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto"
          >
            {currentSkills.map((skill, i) => (
              <SkillRow key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── All Badges (overview) ───────────────────────── */}
        <ScrollReveal delay={0.3} className="mt-20 text-center">
          <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest mb-6">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {Object.values(skills).flat().map((skill) => (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.08, color: '#00D4FF', borderColor: '#00D4FF' }}
                className="
                  px-3 py-1.5 rounded-lg border border-[var(--border)]
                  bg-[var(--card-bg)] text-[var(--text-muted)]
                  font-mono text-xs cursor-default transition-colors duration-200
                "
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Skills;
