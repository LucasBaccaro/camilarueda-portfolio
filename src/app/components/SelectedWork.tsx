import { motion } from 'motion/react';
import { ProjectCard } from '@/app/components/ProjectCard';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';

interface SelectedWorkProps {
  language: Language;
  onProjectClick: (projectId: string) => void;
}

export function SelectedWork({ language, onProjectClick }: SelectedWorkProps) {
  const t = translations[language];

  return (
    <section id="work" className="min-h-screen bg-black py-32 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-24"
        >
          <h2
            className="text-white tracking-tight"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {t.selectedWork.title}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-x-16 md:gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              onClick={() => onProjectClick(project.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
