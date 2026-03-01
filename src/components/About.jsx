// ============================================================
// 📁 src/components/About.jsx
// About section with profile image, summary, and stat cards.
// ============================================================

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiExternalLink } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';
import { personalInfo, aboutStats, aboutSummary, certifications } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          label="About Me"
          title="Who I Am"
          subtitle="A little bit about my journey and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left: Profile Image ──────────────────────────── */}
          <ScrollReveal direction="left">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Image container with decorative border */}
              <div className="relative">
                {/* Decorative offset box */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/30" />
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/30" />

                {/* Avatar — replace src with your photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[var(--card-bg)] border border-[var(--border)]">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      /* Fallback to initials if no image */
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback initials */}
                  <div
                    className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20"
                  >
                    <span className="font-display text-7xl font-bold gradient-text">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="
                  absolute -bottom-6 -right-6 glass rounded-xl px-4 py-3
                  border border-[var(--border)] shadow-card-dark
                "
              >
                <span className="font-mono text-primary text-xs">{'<Available />'}</span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ─── Right: Bio & Stats ───────────────────────────── */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Heading */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                  {personalInfo.name}
                </h3>
                <p className="font-mono text-primary text-sm">// {personalInfo.role}</p>
              </div>

              {/* Location & Email */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                  <FiMapPin size={14} className="text-primary flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                  <FiMail size={14} className="text-primary flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Summary */}
              <p className="text-[var(--text-muted)] font-sans text-sm md:text-base leading-relaxed whitespace-pre-line">
                {aboutSummary}
              </p>

              {/* Stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {aboutStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="
                      glass rounded-xl p-4 text-center border border-[var(--border)]
                      hover:border-primary/40 transition-colors duration-300
                    "
                  >
                    <span className="text-2xl mb-1 block">{stat.icon}</span>
                    <span className="font-display text-2xl font-bold text-primary block">{stat.value}</span>
                    <span className="font-sans text-xs text-[var(--text-muted)] leading-tight">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Certifications mini list */}
              <div>
                <h4 className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">
                  Certifications
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-primary mt-0.5">▸</span>
                      <div>
                        <span className="text-[var(--text-primary)] font-medium">{cert.name}</span>
                        <span className="text-[var(--text-muted)] text-xs block">{cert.issuer} · {cert.validity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="https://github.com/DhanushR08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 text-sm font-medium
                    text-primary hover:text-primary-light transition-colors
                  "
                >
                  View GitHub Profile <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default About;
