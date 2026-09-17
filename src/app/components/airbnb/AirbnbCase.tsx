import { CaseLayout, Reveal, SmallLabel, TextBlock } from '@/app/components/case/CaseLayout';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';

interface AirbnbCaseProps {
  language: Language;
}

const content = {
  es: {
    linkLabel: 'Ver en Figma',
    descriptionLabel: 'Descripción',
    description:
      'Rediseño de la interfaz de Airbnb enfocado en mejorar la experiencia de búsqueda y reserva. Análisis detallado de los puntos de fricción y propuesta de flujos simplificados con mejor arquitectura de información.',
    serviceLabel: 'Servicio',
    service: ['UX/UI Design', 'Análisis heurístico', 'Prototipado'],
    yearLabel: 'Año',
    stackLabel: 'Herramienta',
    platformLabel: 'Plataforma',
    platform: 'Web',
    context: {
      label: '01. Contexto',
      text: 'Este proyecto fue una práctica de Auto Layout en Figma, tomando como referencia la versión anterior de Airbnb. El objetivo fue analizar la experiencia actual y proponer mejoras en la claridad de la información y facilidad de reserva.',
    },
    challenge: {
      label: '02. Desafío',
      question: '¿Cómo mejorar la experiencia de búsqueda y reserva en Airbnb?',
      text: 'El rediseño se enfocó en simplificar los flujos críticos, reorganizar la información de forma más intuitiva y crear una interfaz más clara. Se aplicó un Design System consistente para mantener coherencia en toda la aplicación.',
    },
    userFlows: {
      label: '03. Flujos de usuario',
      text: 'Se identificaron los flujos principales: búsqueda de alojamiento, filtrado de resultados, visualización de detalles y proceso de reserva. Cada flujo fue optimizado para reducir pasos y mejorar la claridad.',
    },
    designSystem: {
      label: '04. Design System',
      text: 'Aplicación de componentes reutilizables, tipografía coherente y una paleta de colores consistente. El uso de Auto Layout en Figma facilitó la adaptación a diferentes tamaños de pantalla.',
    },
    learnings: {
      label: '05. Aprendizajes',
      text: 'El dominio de Auto Layout permitió crear diseños flexibles y escalables. También confirmé que una buena arquitectura de información es fundamental para reducir la fricción en flujos complejos.',
    },
  },
  en: {
    linkLabel: 'View on Figma',
    descriptionLabel: 'Description',
    description:
      'Airbnb interface redesign focused on improving search and booking experience. Detailed analysis of friction points and proposal for simplified flows with better information architecture.',
    serviceLabel: 'Service',
    service: ['UX/UI Design', 'Heuristic analysis', 'Prototyping'],
    yearLabel: 'Year',
    stackLabel: 'Tool',
    platformLabel: 'Platform',
    platform: 'Web',
    context: {
      label: '01. Context',
      text: 'This project was an Auto Layout practice in Figma, using the previous version of Airbnb as reference. The goal was to analyze the current experience and propose improvements in information clarity and booking ease.',
    },
    challenge: {
      label: '02. Challenge',
      question: 'How to improve the search and booking experience on Airbnb?',
      text: 'The redesign focused on simplifying critical flows, reorganizing information more intuitively, and creating a clearer interface. A consistent Design System was applied to maintain coherence throughout the application.',
    },
    userFlows: {
      label: '03. User Flows',
      text: 'Main flows were identified: accommodation search, result filtering, detail visualization, and booking process. Each flow was optimized to reduce steps and improve clarity.',
    },
    designSystem: {
      label: '04. Design System',
      text: 'Application of reusable components, consistent typography, and a consistent color palette. The use of Auto Layout in Figma facilitated adaptation to different screen sizes.',
    },
    learnings: {
      label: '05. Learnings',
      text: 'Mastering Auto Layout allowed creating flexible and scalable designs. It also confirmed that good information architecture is fundamental to reducing friction in complex flows.',
    },
  },
} as const;

const SCREENSHOTS = [
  { src: '/airbnb/mockup.png', alt: 'Mockup de web y mobile' },
  { src: '/airbnb/wireframe.png', alt: 'Flujos y wireframes' },
  { src: '/airbnb/details.png', alt: 'Detalles de diseño' },
];

const LIVE_URL = projects.find((project) => project.id === 'airbnb-clon')?.behanceUrl;

export function AirbnbCase({ language }: AirbnbCaseProps) {
  const t = content[language];

  return (
    <CaseLayout
      title="Airbnb Redesign"
      descriptionLabel={t.descriptionLabel}
      description={t.description}
      meta={[
        { label: t.serviceLabel, values: t.service },
        { label: t.yearLabel, values: ['2025'] },
        { label: t.stackLabel, values: ['Figma'] },
        { label: t.platformLabel, values: [t.platform] },
      ]}
      link={{ label: t.linkLabel, href: LIVE_URL }}
      intro={
        <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/12]">
          <img
            src={SCREENSHOTS[0].src}
            alt={SCREENSHOTS[0].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      }
    >
      {/* 01 · Contexto */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-[#F5F5F5] flex items-center p-8 md:p-12 min-h-[320px]">
          <TextBlock label={t.context.label}>{t.context.text}</TextBlock>
        </div>
        <div className="bg-[#EFEFEF] aspect-[4/5] overflow-hidden">
          <img
            src={SCREENSHOTS[0].src}
            alt={SCREENSHOTS[0].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* 02 · Desafío */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden flex items-center justify-center order-2 sm:order-1 bg-white">
          <img src={SCREENSHOTS[1].src} alt={SCREENSHOTS[1].alt} className="h-full w-auto max-w-none" loading="lazy" />
        </div>
        <div className="bg-[#FAFAFA] flex items-center p-8 md:p-12 min-h-[320px] order-1 sm:order-2">
          <TextBlock label={t.challenge.label}>
            <p className="text-[#1E293B] mb-4" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.35, letterSpacing: '-0.02em' }}>
              {t.challenge.question}
            </p>
            <p>{t.challenge.text}</p>
          </TextBlock>
        </div>
      </Reveal>

      {/* 03 · Flujos de usuario */}
      <Reveal className="bg-[#F5F5F5] p-8 md:p-12">
        <TextBlock label={t.userFlows.label}>{t.userFlows.text}</TextBlock>
      </Reveal>

      {/* Wireframes */}
      <Reveal className="bg-white overflow-hidden">
        <img src={SCREENSHOTS[1].src} alt={SCREENSHOTS[1].alt} className="w-full h-auto" loading="lazy" />
      </Reveal>

      {/* 04 · Design System */}
      <Reveal className="bg-[#F5F5F5] p-8 md:p-12">
        <TextBlock label={t.designSystem.label}>{t.designSystem.text}</TextBlock>
      </Reveal>

      {/* Detalles de diseño */}
      <Reveal className="bg-white overflow-hidden">
        <img src={SCREENSHOTS[2].src} alt={SCREENSHOTS[2].alt} className="w-full h-auto" loading="lazy" />
      </Reveal>

      {/* 05 · Aprendizajes */}
      <Reveal className="bg-[#0A0D14] p-8 md:p-12 min-h-[280px] flex items-center">
        <TextBlock label={t.learnings.label} dark>
          {t.learnings.text}
        </TextBlock>
      </Reveal>
    </CaseLayout>
  );
}
