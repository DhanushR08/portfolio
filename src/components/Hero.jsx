// ============================================================
// 📁 src/components/Hero.jsx
// Full-screen hero section featuring:
//  • Animated name reveal
//  • Typewriter role switcher
//  • CTA buttons (Resume download + View Projects)
//  • Social icons
//  • Floating background orbs
// ============================================================

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo } from '../data/portfolioData';

// Social icon config — update hrefs in personalInfo
const socials = [
  { Icon: FiGithub,   href: personalInfo.github,   label: 'GitHub'   },
  { Icon: FiLinkedin, href: personalInfo.linkedin,  label: 'LinkedIn' },
  { Icon: FiTwitter,  href: personalInfo.twitter,   label: 'Twitter'  },
];

// Roles to cycle through in typewriter
const roles = [
  'Full Stack Developer',
  'React Enthusiast',
  'Java Developer',
  'UI/UX Explorer',
  'Problem Solver',
];

// Stagger children animation helper
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const typedRole = useTypewriter(roles, 75, 45, 2200);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Background Orbs ────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Large cyan orb — top left */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)' }}
        />
        {/* Orange orb — bottom right */}
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06] dark:opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)' }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ─── Hero Content ───────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Eyebrow chip */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span className="
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-primary/30 bg-primary/5
            font-mono text-primary text-sm tracking-wider
          ">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-none mb-4"
        >
          <span className="text-[var(--text-primary)]">Hi, I'm </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div variants={item} className="flex items-center justify-center gap-2 mb-6 h-10">
          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-[var(--text-muted)]">
            {typedRole}
          </span>
          <span className="cursor-blink" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-sans text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ y: -3, boxShadow: '0 0 30px rgba(0,212,255,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
              bg-primary text-surface font-semibold font-sans text-sm
              shadow-glow transition-all duration-200
            "
          >
            <HiDownload size={18} />
            Download Resume
          </motion.a>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
              border border-primary/50 text-primary font-semibold font-sans text-sm
              hover:border-primary hover:bg-primary/5
              transition-all duration-200
            "
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="flex items-center justify-center gap-5">
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1, color: '#00D4FF' }}
              whileTap={{ scale: 0.9 }}
              className="text-[var(--text-muted)] transition-colors duration-200 hover:text-primary"
            >
              <Icon size={22} />
            </motion.a>
          ))}

          {/* Divider */}
          <span className="w-px h-6 bg-[var(--border)]" />

          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ color: '#00D4FF' }}
            className="font-mono text-xs text-[var(--text-muted)] hover:text-primary transition-colors"
          >
            {personalInfo.email}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ─── Scroll Down Indicator ───────────────────────────── */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="
          absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          text-[var(--text-muted)] hover:text-primary
          transition-colors duration-200 group
        "
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest uppercase opacity-70 group-hover:opacity-100">
          scroll
        </span>
        <FiArrowDown size={16} />
      </motion.button>
    </section>
  );
};

export default Hero;
