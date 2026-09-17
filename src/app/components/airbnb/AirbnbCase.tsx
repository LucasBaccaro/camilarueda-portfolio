import { CaseLayout, Reveal, TextBlock } from '@/app/components/case/CaseLayout';
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
      'Clon de Airbnb hecho en Figma como práctica de Auto Layout. El proyecto replica la estructura y componentes de la versión anterior de Airbnb, enfocándose en dominar la flexibilidad y escalabilidad del Auto Layout.',
    serviceLabel: 'Servicio',
    service: ['UI Design', 'Auto Layout', 'Design System'],
    yearLabel: 'Año',
    stackLabel: 'Herramienta',
    platformLabel: 'Plataforma',
    platform: 'Web',
    context: {
      label: '01. Objetivo',
      text: 'Práctica de Auto Layout en Figma. El objetivo fue replicar la interfaz de Airbnb manteniendo la lógica de componentes y su comportamiento responsivo. Una forma de aprender cómo los componentes se adaptan a diferentes tamaños sin perder consistencia.',
    },
    exploration: {
      label: '02. Exploración',
      text: 'Se analizó la estructura de Airbnb: grid de tarjetas, componentes reutilizables, sistemas de navegación y filtros. Cada elemento fue replicado usando Auto Layout para que se adaptara automáticamente a cambios de contenido y tamaño.',
    },
    components: {
      label: '03. Componentes',
      text: 'Botones, tarjetas, inputs, badges y navegación. Todos construidos con Auto Layout para garantizar que se escalen correctamente sin necesidad de ajustes manuales.',
    },
    learnings: {
      label: '04. Aprendizajes',
      text: 'El dominio de Auto Layout resultó clave para crear un sistema flexible. Aprendí cómo manejar espaciado responsivo, alineación y cómo los componentes padre se adaptan al contenido hijo.',
    },
  },
  en: {
    linkLabel: 'View on Figma',
    descriptionLabel: 'Description',
    description:
      'Airbnb clone built in Figma as an Auto Layout practice. The project replicates the structure and components of the previous Airbnb version, focusing on mastering Auto Layout flexibility and scalability.',
    serviceLabel: 'Service',
    service: ['UI Design', 'Auto Layout', 'Design System'],
    yearLabel: 'Year',
    stackLabel: 'Tool',
    platformLabel: 'Platform',
    platform: 'Web',
    context: {
      label: '01. Objective',
      text: 'Auto Layout practice in Figma. The goal was to replicate the Airbnb interface while maintaining component logic and responsive behavior. A way to learn how components adapt to different sizes without losing consistency.',
    },
    exploration: {
      label: '02. Exploration',
      text: 'Airbnb structure was analyzed: card grids, reusable components, navigation systems and filters. Each element was replicated using Auto Layout to automatically adapt to content and size changes.',
    },
    components: {
      label: '03. Components',
      text: 'Buttons, cards, inputs, badges and navigation. All built with Auto Layout to ensure they scale correctly without manual adjustments.',
    },
    learnings: {
      label: '04. Learnings',
      text: 'Mastering Auto Layout proved key to creating a flexible system. I learned how to handle responsive spacing, alignment, and how parent components adapt to child content.',
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
      title="Airbnb Clone"
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
      {/* 01 · Objetivo */}
      <Reveal className="bg-[#F5F5F5] p-8 md:p-12">
        <TextBlock label={t.context.label}>{t.context.text}</TextBlock>
      </Reveal>

      {/* 02 · Exploración */}
      <Reveal className="bg-white p-8 md:p-12">
        <TextBlock label={t.exploration.label}>{t.exploration.text}</TextBlock>
      </Reveal>

      {/* Detalles de diseño */}
      <Reveal className="bg-white overflow-hidden">
        <img src={SCREENSHOTS[2].src} alt={SCREENSHOTS[2].alt} className="w-full h-auto" loading="lazy" />
      </Reveal>

      {/* 04 · Componentes */}
      <Reveal className="bg-white p-8 md:p-12">
        <TextBlock label={t.components.label}>{t.components.text}</TextBlock>
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
