import { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { SelectedWork } from '@/app/components/SelectedWork';
import { ProjectDetail } from '@/app/components/ProjectDetail';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [currentSection, setCurrentSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    setSelectedProjectId(null);
    setCurrentSection(section);

    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project?.behanceUrl) {
      window.open(project.behanceUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProjectId(projectId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : null;

  // Observer to track current section
  useState(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['hero', 'work', 'about', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  });

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        language={language}
        onClose={handleCloseProject}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />

      <Hero language={language} />
      <SelectedWork language={language} onProjectClick={handleProjectClick} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
}
