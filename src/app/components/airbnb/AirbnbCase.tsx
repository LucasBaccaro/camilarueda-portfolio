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
    palette: {
      label: '03. Paleta de colores',
      text: 'La paleta de Airbnb se basa en tonos cálidos y el icónico rojo rosa. Los colores neutros mantienen claridad en la información, mientras que el rojo destaca llamadas a la acción.',
    },
    components: {
      label: '04. Componentes',
      text: 'Botones, tarjetas, inputs, badges y navegación. Todos construidos con Auto Layout para garantizar que se escalen correctamente sin necesidad de ajustes manuales.',
    },
    learnings: {
      label: '05. Aprendizajes',
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
    palette: {
      label: '03. Color Palette',
      text: 'The Airbnb palette is based on warm tones and the iconic red-pink. Neutral colors maintain clarity in information, while red highlights calls to action.',
    },
    components: {
      label: '04. Components',
      text: 'Buttons, cards, inputs, badges and navigation. All built with Auto Layout to ensure they scale correctly without manual adjustments.',
    },
    learnings: {
      label: '05. Learnings',
      text: 'Mastering Auto Layout proved key to creating a flexible system. I learned how to handle responsive spacing, alignment, and how parent components adapt to child content.',
    },
  },
} as const;

const PALETTE = [
  { hex: '#FF5A5F', dark: true, name: 'Rojo Airbnb' },
  { hex: '#FFFFFF', dark: false, name: 'Blanco' },
  { hex: '#F5F5F5', dark: false, name: 'Gris Claro' },
  { hex: '#222222', dark: true, name: 'Gris Oscuro' },
];

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

      {/* Paleta */}
      <Reveal className="relative grid grid-cols-4">
        <SmallLabel>
          {language === 'es' ? 'PALETA' : 'PALETTE'}
        </SmallLabel>
        {PALETTE.map((color) => (
          <div
            key={color.hex}
            className="aspect-[3/4] flex flex-col justify-end p-3 md:p-5"
            style={{ backgroundColor: color.hex }}
          >
            <span className={color.dark ? 'text-white' : 'text-black/80'} style={{ fontSize: '14px' }}>
              {language === 'es' ? (color.name === 'Rojo Airbnb' ? 'Rojo' : color.name === 'Blanco' ? 'Blanco' : color.name === 'Gris Claro' ? 'Gris Claro' : 'Gris Oscuro') : color.name}
            </span>
            <span className={color.dark ? 'text-white/60' : 'text-black/45'} style={{ fontSize: '11px', letterSpacing: '0.04em' }}>
              {color.hex}
            </span>
          </div>
        ))}
      </Reveal>

      {/* 03 · Paleta de colores */}
      <Reveal className="bg-[#F5F5F5] p-8 md:p-12">
        <TextBlock label={t.palette.label}>{t.palette.text}</TextBlock>
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
