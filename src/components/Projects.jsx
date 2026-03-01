// ============================================================
// 📁 src/components/Projects.jsx
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiStar } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';
import { projects } from '../data/portfolioData';

// Filter categories
const filters = ['All', 'Frontend', 'Backend', 'Fullstack', 'Research'];

// ─────────────────────────────────────────────────────────────
// Project Card
// ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    onClick={() => onClick(project)}
    className="
      gradient-border cursor-pointer group
      bg-[var(--card-bg)] rounded-xl overflow-hidden
      border border-[var(--border)] hover:border-primary/30
      transition-colors duration-300 shadow-card-dark
    "
  >
    {/* Image */}
    <div className="relative aspect-[16/9] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full h-full object-cover
          opacity-70 group-hover:opacity-90
          group-hover:scale-105
          transition-all duration-500
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />

      <span className="absolute top-3 left-3 font-mono text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
        {project.category}
      </span>

      {project.featured && (
        <span className="absolute top-3 right-3 text-accent">
          <FiStar size={14} fill="currentColor" />
        </span>
      )}
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-display text-lg font-bold mb-2">
        {project.title}
      </h3>

      <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 4).map(t => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)]"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4 border-t border-[var(--border)] pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs hover:text-primary"
          >
            <FiGithub size={13} /> Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs hover:text-primary"
          >
            <FiExternalLink size={13} /> Live
          </a>
        )}

        <button className="ml-auto text-xs text-primary hover:underline">
          Details →
        </button>
      </div>
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────
// Project Modal
// ─────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 24 }}
      onClick={e => e.stopPropagation()}
      className="relative z-10 w-full max-w-2xl bg-[var(--card-bg)] rounded-2xl border border-[var(--border)]"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:text-primary"
      >
        <FiX size={20} />
      </button>

      {/* Modal Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <span className="font-mono text-xs text-primary">
          {project.category}
        </span>

        <h2 className="text-2xl font-bold mt-1 mb-4">
          {project.title}
        </h2>

        <p className="text-sm text-[var(--text-muted)] mb-6">
          {project.longDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-lg bg-primary/10 text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FiGithub /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          p => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section id="projects" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          label="My Work"
          title="Featured Projects"
          subtitle="Things I've built that I'm proud of."
        />

        <ScrollReveal className="flex justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={activeFilter === f ? 'btn-primary' : 'btn-outline'}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(p => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;