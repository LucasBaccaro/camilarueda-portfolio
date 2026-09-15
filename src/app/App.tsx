import { useEffect, useRef, useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { SelectedWork } from '@/app/components/SelectedWork';
import { ProjectDetail } from '@/app/components/ProjectDetail';
import { CASE_STUDIES } from '@/app/components/caseStudies';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';

// Los casos de estudio viven en #/proyectos/<id> para poder compartir el link
const PROJECT_HASH_PREFIX = '#/proyectos/';

const getProjectIdFromHash = () => {
  const { hash } = window.location;
  if (!hash.startsWith(PROJECT_HASH_PREFIX)) return null;
  const id = hash.slice(PROJECT_HASH_PREFIX.length);
  return id in CASE_STUDIES ? id : null;
};

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [currentSection, setCurrentSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(getProjectIdFromHash);
  const pendingSection = useRef<string | null>(null);

  // Al salir de un proyecto, baja a la sección pedida cuando ya está renderizada
  useEffect(() => {
    if (selectedProjectId || !pendingSection.current) return;
    document.getElementById(pendingSection.current)?.scrollIntoView();
    pendingSection.current = null;
  }, [selectedProjectId]);

  // Botón atrás / adelante del navegador
  useEffect(() => {
    const handleHashChange = () => {
      const id = getProjectIdFromHash();
      setSelectedProjectId(id);
      if (id) {
        window.scrollTo({ top: 0 });
      } else {
        pendingSection.current = 'work';
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);

    if (selectedProjectId) {
      // Desde un proyecto: quita el hash y espera a que se rendericen las secciones
      if (getProjectIdFromHash()) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      pendingSection.current = section;
      setSelectedProjectId(null);
      return;
    }

    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project && project.id in CASE_STUDIES) {
      window.location.hash = `${PROJECT_HASH_PREFIX}${projectId}`;
    } else if (project?.behanceUrl) {
      window.open(project.behanceUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProjectId(projectId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  const CaseStudyPage = selectedProject ? CASE_STUDIES[selectedProject.id]?.Page : undefined;

  let content;
  if (CaseStudyPage) {
    content = <CaseStudyPage language={language} />;
  } else if (selectedProject) {
    content = <ProjectDetail project={selectedProject} language={language} />;
  } else {
    content = (
      <>
        <Hero language={language} />
        <SelectedWork language={language} onProjectClick={handleProjectClick} />
        <About language={language} />
        <Contact language={language} />
      </>
    );
  }

  // La topbar queda fija en todas las pantallas
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={handleNavigate}
        currentSection={currentSection}
      />
      {content}
    </div>
  );
}
