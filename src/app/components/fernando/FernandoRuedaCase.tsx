import { CaseLayout, Reveal, SmallLabel, TextBlock } from '@/app/components/case/CaseLayout';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';
import { FernandoHero, FernandoTimeline, FernandoTypeMock, FR_COLORS } from './FernandoRuedaMocks';

interface FernandoRuedaCaseProps {
  language: Language;
}

const content = {
  es: {
    linkLabel: 'Ver sitio',
    descriptionLabel: 'Descripción',
    description:
      'Sitio personal de un director técnico de fútbol que está dirigiendo en Europa. Una sola página, bilingüe, pensada para que un club entienda su trayectoria y su forma de jugar sin leer un CV.',
    serviceLabel: 'Servicio',
    service: ['UX / UI Design', 'Desarrollo web', 'Contenido bilingüe'],
    yearLabel: 'Año',
    stackLabel: 'Stack',
    platformLabel: 'Plataforma',
    platform: 'Mobile & Web',
    context: {
      label: '01. Contexto',
      text: 'Un entrenador argentino que está dirigiendo en Europa necesitaba presentarse ante clubes y representantes sin depender de un PDF que se desactualiza. La idea fue darle un lugar propio, fácil de compartir y de actualizar cada vez que cambia de club.',
    },
    ux: {
      label: '02. Objetivo de UX',
      question: '¿Qué tiene que entender un club en el primer minuto?',
      items: [
        {
          title: 'Trayectoria primero',
          text: 'La carrera es el dato que más pesa, así que ocupa el centro del sitio y se recorre sin leer párrafos largos.',
        },
        {
          title: 'Español e inglés',
          text: 'Del otro lado puede haber un club de afuera. El idioma se cambia en cualquier momento y queda guardado para la próxima visita.',
        },
        {
          title: 'Contacto siempre cerca',
          text: 'La navegación es de una sola página y el contacto cierra cualquier recorrido.',
        },
      ],
    },
    architecture: {
      label: '03. Arquitectura',
      text: 'Seis secciones en una sola página, en el orden en que un club necesita la información.',
      sections: [
        { name: 'Hero', note: 'Nombre, rol y frase de entrada' },
        { name: 'Perfil', note: 'Presentación en dos columnas' },
        { name: 'Trayectoria', note: 'Línea de tiempo con detalle por club' },
        { name: 'Filosofía', note: 'Tres principios de juego' },
        { name: 'Galería', note: 'Fotos en movimiento continuo' },
        { name: 'Contacto', note: 'Formulario y redes' },
      ],
    },
    ui: {
      label: '04. Sistema visual',
      text: 'Negro y dorado, con la tipografía haciendo de imagen. El fondo oscuro deja que las fotos de cancha y los nombres de los clubes sean lo único que brilla.',
      palette: 'Paleta',
      typography: 'Tipografía',
      typeLabels: { display: 'Títulos', heading: 'Subtítulos', body: 'Texto' },
      paletteNames: ['Fondo', 'Alterno', 'Tarjeta', 'Texto', 'Dorado', 'Dorado claro'],
    },
    timeline: {
      label: '05. La línea de tiempo',
      text: 'Es la pieza central. Cada club se toca para abrir su detalle: años, categorías, país y los roles que tuvo. En escritorio se recorre en horizontal y en mobile se ve vertical.',
    },
    dev: {
      label: '06. Desarrollo',
      text: 'Lo desarrollé con HTML, CSS y JavaScript. El formulario de contacto está conectado con Formspree.',
      items: ['HTML', 'CSS', 'JavaScript', 'Formulario con Formspree'],
    },
    next: {
      label: '07. En evolución',
      text: 'Como su carrera, este sitio no está terminado. Cada club, cada temporada y cada nuevo desafío van a seguir escribiendo esta historia.',
    },
  },
  en: {
    linkLabel: 'View site',
    descriptionLabel: 'Description',
    description:
      'Personal site for a football coach currently working in Europe. A single bilingual page, built so a club can understand his career and his way of playing without reading a CV.',
    serviceLabel: 'Service',
    service: ['UX / UI Design', 'Web development', 'Bilingual content'],
    yearLabel: 'Year',
    stackLabel: 'Stack',
    platformLabel: 'Platform',
    platform: 'Mobile & Web',
    context: {
      label: '01. Context',
      text: 'An Argentine coach currently working in Europe needed to introduce himself to clubs and agents without relying on a PDF that goes out of date. The idea was to give him a place of his own, easy to share and easy to update every time he changes clubs.',
    },
    ux: {
      label: '02. UX goal',
      question: 'What should a club understand in the first minute?',
      items: [
        {
          title: 'Career first',
          text: 'His career is what matters most, so it sits at the center of the site and can be scanned without reading long paragraphs.',
        },
        {
          title: 'Spanish and English',
          text: 'A club abroad may be on the other side. Language can be switched at any point and is remembered for the next visit.',
        },
        {
          title: 'Contact always close',
          text: 'Navigation stays on a single page and contact closes every path through the site.',
        },
      ],
    },
    architecture: {
      label: '03. Architecture',
      text: 'Six sections on a single page, in the order a club needs the information.',
      sections: [
        { name: 'Hero', note: 'Name, role and opening line' },
        { name: 'Profile', note: 'Two-column introduction' },
        { name: 'Career', note: 'Timeline with detail per club' },
        { name: 'Philosophy', note: 'Three playing principles' },
        { name: 'Gallery', note: 'Photos in continuous motion' },
        { name: 'Contact', note: 'Form and social links' },
      ],
    },
    ui: {
      label: '04. Visual system',
      text: 'Black and gold, with type doing the heavy lifting. The dark ground lets the pitch photos and the club names be the only things that shine.',
      palette: 'Palette',
      typography: 'Typography',
      typeLabels: { display: 'Display', heading: 'Headings', body: 'Body' },
      paletteNames: ['Background', 'Alternate', 'Card', 'Text', 'Gold', 'Light gold'],
    },
    timeline: {
      label: '05. The timeline',
      text: 'This is the centerpiece. Tap any club to open its detail: years, age groups, country and the roles he held. On desktop it runs horizontally; on mobile it is vertical.',
    },
    dev: {
      label: '06. Development',
      text: 'I built it with HTML, CSS and JavaScript. The contact form is connected to Formspree.',
      items: ['HTML', 'CSS', 'JavaScript', 'Formspree contact form'],
    },
    next: {
      label: '07. Still evolving',
      text: 'Like his career, this site is never finished. Every club, every season and every new challenge will keep writing this story.',
    },
  },
} as const;

const PALETTE = [FR_COLORS.bg, FR_COLORS.bgAlt, FR_COLORS.card, FR_COLORS.text, FR_COLORS.accent, FR_COLORS.accentLight];
const LIGHT_SWATCHES = [3, 5];

const LIVE_URL = projects.find((project) => project.id === 'fernando-rueda')?.liveUrl;

export function FernandoRuedaCase({ language }: FernandoRuedaCaseProps) {
  const t = content[language];

  return (
    <CaseLayout
      title="Fernando Rueda"
      descriptionLabel={t.descriptionLabel}
      description={t.description}
      meta={[
        { label: t.serviceLabel, values: t.service },
        { label: t.yearLabel, values: ['2026'] },
        { label: t.stackLabel, values: ['HTML', 'CSS', 'JavaScript'] },
        { label: t.platformLabel, values: [t.platform] },
      ]}
      link={{ label: t.linkLabel, href: LIVE_URL }}
      intro={
        <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/12]">
          <FernandoHero language={language} />
        </div>
      }
    >
      {/* 01 · Contexto */}
      <Reveal className="bg-[#F1F2F4] p-8 md:p-12 min-h-[300px] flex items-center">
        <TextBlock label={t.context.label}>{t.context.text}</TextBlock>
      </Reveal>

      {/* 02 · Objetivo de UX */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: FR_COLORS.bgAlt }}>
        <TextBlock label={t.ux.label} dark>
          <p style={{ fontSize: '20px', lineHeight: 1.35, letterSpacing: '-0.02em', color: FR_COLORS.text }}>{t.ux.question}</p>
        </TextBlock>

        <ul className="mt-8 border-t" style={{ borderColor: 'rgba(240, 237, 232, 0.1)' }}>
          {t.ux.items.map((item) => (
            <li key={item.title} className="py-5 border-b sm:flex sm:gap-8" style={{ borderColor: 'rgba(240, 237, 232, 0.1)' }}>
              <p className="sm:w-[180px] shrink-0" style={{ fontSize: '15px', color: FR_COLORS.accent }}>
                {item.title}
              </p>
              <p
                className="mt-1 sm:mt-0 max-w-[420px]"
                style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.6, color: 'rgba(240, 237, 232, 0.75)' }}
              >
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 03 · Arquitectura */}
      <Reveal className="bg-[#F1F2F4] p-8 md:p-12">
        <TextBlock label={t.architecture.label}>{t.architecture.text}</TextBlock>

        <ol className="mt-8 border-t border-black/10">
          {t.architecture.sections.map((section, index) => (
            <li
              key={section.name}
              className="grid grid-cols-[28px_minmax(0,1fr)] sm:grid-cols-[28px_140px_minmax(0,1fr)] items-baseline gap-x-4 py-4 border-b border-black/10"
            >
              <span className="text-black/30" style={{ fontSize: '12px' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-black" style={{ fontSize: '17px', letterSpacing: '-0.01em' }}>
                {section.name}
              </span>
              <span className="col-start-2 sm:col-start-3 text-black/45" style={{ fontSize: '14px' }}>
                {section.note}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* 04 · Sistema visual: un solo bloque oscuro para que no se vean cortes entre muestras */}
      <Reveal style={{ backgroundColor: FR_COLORS.bg }}>
        <div className="p-8 md:p-12">
          <TextBlock label={t.ui.label} dark>
            {t.ui.text}
          </TextBlock>
        </div>

        <div className="px-8 md:px-12 pb-8 md:pb-12">
          <p className="mb-4" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240, 237, 232, 0.5)' }}>
            {t.ui.palette}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {PALETTE.map((hex, index) => {
              const isLight = LIGHT_SWATCHES.includes(index);

              return (
                <div
                  key={hex}
                  className="aspect-[3/4] flex flex-col justify-end p-3 rounded-md"
                  style={{ backgroundColor: hex, border: '1px solid rgba(240, 237, 232, 0.08)' }}
                >
                  <span style={{ fontSize: '13px', color: isLight ? '#0A0B0D' : FR_COLORS.text }}>{t.ui.paletteNames[index]}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.04em',
                      color: isLight ? 'rgba(10, 11, 13, 0.5)' : 'rgba(240, 237, 232, 0.45)',
                    }}
                  >
                    {hex}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative p-8 md:p-12 pt-16 min-h-[340px] flex items-end" style={{ backgroundColor: FR_COLORS.card }}>
          <SmallLabel dark>{t.ui.typography}</SmallLabel>
          <FernandoTypeMock labels={t.ui.typeLabels} />
        </div>
      </Reveal>

      {/* 05 · Línea de tiempo */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: FR_COLORS.bgAlt }}>
        <TextBlock label={t.timeline.label} dark>
          {t.timeline.text}
        </TextBlock>
        <div className="mt-10">
          <FernandoTimeline language={language} />
        </div>
      </Reveal>

      {/* 06 · Desarrollo */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: FR_COLORS.bg }}>
        <TextBlock label={t.dev.label} dark>
          {t.dev.text}
        </TextBlock>
        <ul className="mt-8 flex flex-wrap gap-2">
          {t.dev.items.map((item) => (
            <li
              key={item}
              className="rounded-full px-3 py-1"
              style={{ fontSize: '12px', border: '1px solid rgba(240, 237, 232, 0.15)', color: 'rgba(240, 237, 232, 0.65)' }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 07 · Próximos pasos */}
      <Reveal className="bg-[#F1F2F4] p-8 md:p-12 min-h-[280px] flex items-center">
        <TextBlock label={t.next.label}>{t.next.text}</TextBlock>
      </Reveal>
    </CaseLayout>
  );
}
