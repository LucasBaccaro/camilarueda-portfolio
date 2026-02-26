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
      <div className="relative mb-6" style={{ aspectRatio: '16/10' }}>
        <div className="w-full h-full overflow-hidden">
          <motion.img
            src={project.imageUrl}
            alt={project.title[language]}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/20"
        />

        {/* Marco pincel hand-drawn */}
        <svg
          viewBox="0 0 480 300"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          {/* Trazo superior */}
          <path d="M 2,2 C 60,0 120,4 180,1 C 240,-1 300,3 360,1 C 410,-1 450,3 478,2"
            fill="none" stroke="#EBDECB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Trazo inferior */}
          <path d="M 2,298 C 60,295 120,299 180,297 C 240,294 300,298 360,296 C 415,294 450,298 478,297"
            fill="none" stroke="#EBDECB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Trazo izquierdo */}
          <path d="M 2,2 C 0,50 4,100 1,150 C -1,200 3,250 2,298"
            fill="none" stroke="#EBDECB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Trazo derecho */}
          <path d="M 478,2 C 481,55 477,110 480,160 C 483,210 478,255 478,298"
            fill="none" stroke="#EBDECB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Trazos finos secundarios */}
          <path d="M 2,6 C 60,4 120,8 180,5 C 240,3 300,7 360,5 C 415,3 450,7 478,6"
            fill="none" stroke="#EBDECB" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M 2,294 C 60,291 120,295 180,293 C 240,290 300,294 360,292 C 415,290 450,294 478,293"
            fill="none" stroke="#EBDECB" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M 6,2 C 4,55 8,110 5,160 C 3,210 7,255 6,298"
            fill="none" stroke="#EBDECB" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M 474,2 C 477,55 473,110 476,160 C 479,210 474,255 474,298"
            fill="none" stroke="#EBDECB" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
        </svg>
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
