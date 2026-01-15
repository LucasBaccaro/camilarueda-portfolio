import { motion } from 'motion/react';
import type { Project } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';

interface ProjectCardProps {
  project: Project;
  language: Language;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, language, onClick, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-black/5 mb-6 rounded-[10px]" style={{ aspectRatio: '16/10' }}>
        <motion.img
          src={project.imageUrl}
          alt={project.title[language]}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/20"
        />
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <motion.h3
            className="text-white tracking-tight transition-opacity group-hover:opacity-70"
            style={{
              fontSize: 'clamp(20px, 2vw, 28px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            {project.title[language]}
          </motion.h3>
          <span
            className="text-white/40 tracking-tight whitespace-nowrap"
            style={{
              fontSize: '14px',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          className="text-white/50 tracking-tight"
          style={{
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: 1.6,
          }}
        >
          {project.category[language]}
        </p>

        <p
          className="text-white/60 tracking-tight mt-3"
          style={{
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: 1.6,
          }}
        >
          {project.description[language]}
        </p>
      </div>
    </motion.article>
  );
}
