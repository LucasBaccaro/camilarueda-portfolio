import { motion } from 'motion/react';
import type { Project } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  language: Language;
  onClose: () => void;
}

export function ProjectDetail({ project, language, onClose }: ProjectDetailProps) {
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      {/* Fixed back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onClick={onClose}
        className="fixed top-8 left-8 md:left-16 z-50 flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
        style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.01em' }}
      >
        <ArrowLeft size={18} />
        {t.projectDetail.backToWork}
      </motion.button>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full h-[60vh] md:h-[80vh] bg-black/5 overflow-hidden"
      >
        <img
          src={project.heroImageUrl}
          alt={project.title[language]}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-8 md:px-16 py-24">
        {/* Title and Category */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <p
            className="text-black/40 mb-4 tracking-tight"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            {project.category[language]} · {project.year}
          </p>
          <h1
            className="text-black tracking-tight"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            {project.title[language]}
          </h1>
        </motion.div>

        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2
            className="text-black mb-4 tracking-tight"
            style={{
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {t.projectDetail.context}
          </h2>
          <p
            className="text-black/70 tracking-tight"
            style={{
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.7,
            }}
          >
            {project.context[language]}
          </p>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h2
            className="text-black mb-4 tracking-tight"
            style={{
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {t.projectDetail.role}
          </h2>
          <p
            className="text-black/70 tracking-tight"
            style={{
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.7,
            }}
          >
            {project.role[language]}
          </p>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-black mb-4 tracking-tight"
            style={{
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {t.projectDetail.responsibilities}
          </h2>
          <ul className="space-y-3">
            {project.responsibilities[language].map((resp, index) => (
              <li
                key={index}
                className="text-black/70 tracking-tight flex items-start gap-3"
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.7,
                }}
              >
                <span className="text-black/30 mt-2">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-24"
        >
          <h2
            className="text-black mb-4 tracking-tight"
            style={{
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            {t.projectDetail.outcome}
          </h2>
          <p
            className="text-black/70 tracking-tight"
            style={{
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.7,
            }}
          >
            {project.outcome[language]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
