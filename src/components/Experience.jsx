// ============================================================
// 📁 src/components/Experience.jsx
// Experience section with an animated vertical timeline.
// ============================================================

import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';
import { experience, achievements } from '../data/portfolioData';

// ─── Single timeline entry ────────────────────────────────────
const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}>
      {/* ─── Content card ─────────────────────────── */}
      <ScrollReveal
        direction={isLeft ? 'left' : 'right'}
        delay={index * 0.15}
        className="flex-1 md:max-w-[calc(50%-2rem)]"
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="gradient-border bg-[var(--card-bg)] rounded-xl p-6 shadow-card-dark border border-[var(--border)]"
        >
          {/* Type badge */}
          <span className={`
            inline-block font-mono text-xs px-2.5 py-1 rounded-full mb-3
            ${item.type === 'Internship'
              ? 'bg-primary/15 text-primary border border-primary/25'
              : 'bg-accent/15 text-accent border border-accent/25'}
          `}>
            {item.type}
          </span>

          <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-1">
            {item.role}
          </h3>
          <p className="text-primary font-medium text-sm mb-1">{item.company}</p>
          <p className="font-mono text-xs text-[var(--text-muted)] mb-4">{item.duration}</p>

          {/* Bullet achievements */}
          <ul className="space-y-2">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <span className="text-primary mt-1 flex-shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </ScrollReveal>

      {/* ─── Centre dot (hidden on mobile) ────────── */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
          className="w-4 h-4 rounded-full bg-primary shadow-glow border-2 border-surface z-10"
        />
      </div>

      {/* ─── Empty spacer for opposite side ───────── */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          label="Experience"
          title="My Journey"
          subtitle="Where I've worked and studied."
        />

        {/* ─── Timeline ──────────────────────────────── */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="flex flex-col gap-12 md:gap-16">
            {experience.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ─── Achievements ──────────────────────────── */}
        <ScrollReveal className="mt-24">
          <h3 className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest text-center mb-8">
            Achievements & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="
                  flex items-start gap-4 p-5 rounded-xl
                  bg-[var(--card-bg)] border border-[var(--border)]
                  hover:border-accent/40 transition-colors duration-300
                "
              >
                <span className="text-2xl flex-shrink-0">🏆</span>
                <div>
                  <h4 className="font-display text-base font-semibold text-[var(--text-primary)] mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Experience;
