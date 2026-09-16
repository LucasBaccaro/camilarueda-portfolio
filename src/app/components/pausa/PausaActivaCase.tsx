import { CaseLayout, Reveal, TextBlock } from '@/app/components/case/CaseLayout';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';

interface PausaActivaCaseProps {
  language: Language;
}

// Paleta tomada de la lámina y de las pantallas de la app
export const PA_COLORS = {
  pink: '#DF929E',
  pinkSoft: '#FBEBEE',
  sage: '#8CACA1',
  sageSoft: '#E4EBE9',
  yellow: '#E4C078',
  yellowSoft: '#F2DAAC',
  red: '#D13F41',
  bg: '#FAFAFA',
  // Gris tenue de las secciones, igual que en los otros casos
  section: '#F1F2F4',
  // Gris casi blanco para tarjetas y bloques que antes iban en salvia
  mist: '#F6F7F8',
  text: '#333333',
};

const POPPINS = "'Poppins', 'Segoe UI', sans-serif";

export const PA_SCREENS = '/pausa-activa/pantallas.jpg';

const content = {
  es: {
    linkLabel: 'Ver proyecto',
    descriptionLabel: 'Descripción',
    description:
      'Trabajo final de la Diplomatura en Diseño UX/UI de la UTN. Una app que ayuda a personas con rutinas exigentes a sumar actividad física a su día, priorizando la constancia por sobre el rendimiento.',
    serviceLabel: 'Servicio',
    service: ['UX Research', 'UX / UI Design', 'Prototipado'],
    yearLabel: 'Año',
    toolsLabel: 'Herramientas',
    methodLabel: 'Metodología',
    method: 'Design Thinking',
    screensAlt: 'Pantallas de la app Pausa Activa: inicio, logros, objetivos y agenda',
    problem: {
      label: '01. El problema',
      text: 'El sedentarismo es uno de los principales problemas de salud pública. Empezar a moverse no es lo difícil: lo difícil es sostenerlo.',
      stats: [
        { value: '80%', text: 'abandona su rutina de ejercicio en los primeros 3 meses' },
        { value: 'Tiempo', text: 'la principal barrera es sentir que no alcanza' },
        { value: 'Motivación', text: 'sin objetivos claros ni feedback, decae rápido' },
      ],
      question: '¿Cómo podemos ayudar a las personas a mantener una rutina de actividad física sostenible en el tiempo?',
    },
    research: {
      label: '02. Investigación',
      text: 'Hice 5 entrevistas en profundidad con personas del público objetivo, adultos de 28 a 40 años con trabajo de oficina, y analicé Strava, Nike Run Club y FitOn.',
      findings: [
        { title: 'Motivación emocional', text: 'El ejercicio se asocia al bienestar mental y a desconectar, más que a objetivos físicos.' },
        { title: 'Constancia', text: 'Las rutinas se cortan por falta de tiempo, exigencia o un entorno poco favorable.' },
        { title: 'Apoyo tecnológico', text: 'Ninguno usa apps de ejercicio, pero probarían una con recordatorios y seguimiento.' },
        { title: 'Planificación flexible', text: 'Quieren organizarse según su disponibilidad real y ver su progreso sin presión.' },
      ],
      insightLabel: 'Insight clave',
      insight:
        'Los usuarios no necesitan más disciplina, sino herramientas que se adapten a su realidad cambiante y los motiven a mantener el hábito con el menor esfuerzo posible.',
    },
    persona: {
      label: '03. Usuaria',
      name: 'Andra Torres',
      role: '27 años · Programadora',
      quote: 'Necesito algo que se adapte a mi día, no al revés.',
      goalsLabel: 'Objetivos',
      goals: ['Sentirse más energética', 'Crear un hábito sostenible'],
      painsLabel: 'Frustraciones',
      pains: ['No tiene tiempo para gimnasios', 'Le aburren las rutinas rígidas'],
    },
    definition: {
      label: '04. Definición',
      question: '¿Cómo podríamos transformar pequeños momentos del día en oportunidades de movimiento que se sientan naturales?',
      opportunity:
        'La oportunidad: una experiencia accesible y amigable, basada en micro-hábitos que no requieren equipamiento ni espacios especiales, con una gamificación que motiva sin presionar.',
    },
    architecture: {
      label: '05. Arquitectura',
      text: 'Cuatro secciones principales, pensadas para planificar, moverse y ver el progreso sin vueltas.',
      sections: [
        { name: 'Inicio', items: ['Actividad por día', 'Progreso semanal', 'Publicaciones del día'] },
        { name: 'Agenda', items: ['Rutina', 'Calendario', 'Sugerencia de actividades'] },
        { name: 'Logros', items: ['Mis logros'] },
        { name: 'Registro', items: ['Actividad del día'] },
      ],
      flowLabel: 'Flujo principal · Registro de actividad',
      flow: ['Inicio', 'Registro', 'Actividad', 'Tiempo', 'Feedback', 'Logro', 'Objetivos'],
    },
    mvp: {
      label: '06. MVP',
      text: 'Lanzar algo pequeño y útil: que las personas la sigan usando después de la primera semana.',
      features: ['Planificación flexible', 'Recordatorios', 'Registro de logros', 'Progreso visual'],
    },
    ui: {
      label: '07. Interfaz',
      text: 'Colores suaves y cálidos, ilustraciones 3D y logros para celebrar cada avance. Nada que se sienta como una exigencia.',
      palette: 'Paleta',
      paletteNames: ['Rosa', 'Salvia', 'Amarillo', 'Fondo', 'Texto'],
      typography: 'Tipografía',
    },
    learnings: {
      label: '08. Aprendizajes',
      items: [
        { title: 'Empatía primero', text: 'El contexto emocional importa tanto como los datos.' },
        { title: 'Diseño inclusivo', text: 'El ejercicio no es solo para atletas.' },
        { title: 'Iteración constante', text: 'El MVP es el inicio; el feedback guía el producto.' },
      ],
    },
  },
  en: {
    linkLabel: 'View project',
    descriptionLabel: 'Description',
    description:
      'Final project for the UX/UI Design program at UTN. An app that helps people with demanding routines add physical activity to their day, putting consistency ahead of performance.',
    serviceLabel: 'Service',
    service: ['UX Research', 'UX / UI Design', 'Prototyping'],
    yearLabel: 'Year',
    toolsLabel: 'Tools',
    methodLabel: 'Methodology',
    method: 'Design Thinking',
    screensAlt: 'Pausa Activa app screens: home, achievements, goals and schedule',
    problem: {
      label: '01. The problem',
      text: 'A sedentary lifestyle is one of the biggest public health issues. Starting to move is not the hard part: keeping it up is.',
      stats: [
        { value: '80%', text: 'drop their exercise routine within the first 3 months' },
        { value: 'Time', text: 'the main barrier is feeling there is never enough' },
        { value: 'Motivation', text: 'without clear goals or feedback, it fades fast' },
      ],
      question: 'How might we help people keep a physical activity routine that lasts over time?',
    },
    research: {
      label: '02. Research',
      text: 'I ran 5 in-depth interviews with people from the target audience, office workers aged 28 to 40, and reviewed Strava, Nike Run Club and FitOn.',
      findings: [
        { title: 'Emotional motivation', text: 'Exercise is tied to mental wellbeing and switching off, more than to physical goals.' },
        { title: 'Consistency', text: 'Routines break because of lack of time, demanding schedules or an unsupportive environment.' },
        { title: 'Tech support', text: 'None of them use fitness apps, but they would try one with reminders and tracking.' },
        { title: 'Flexible planning', text: 'They want to plan around their real availability and see progress without pressure.' },
      ],
      insightLabel: 'Key insight',
      insight:
        'Users do not need more discipline; they need tools that adapt to their changing reality and keep them motivated with the least possible effort.',
    },
    persona: {
      label: '03. User',
      name: 'Andra Torres',
      role: '27 · Software developer',
      quote: 'I need something that fits my day, not the other way around.',
      goalsLabel: 'Goals',
      goals: ['Feel more energetic', 'Build a lasting habit'],
      painsLabel: 'Frustrations',
      pains: ['No time for the gym', 'Rigid routines bore her'],
    },
    definition: {
      label: '04. Definition',
      question: 'How might we turn small moments of the day into chances to move that feel natural?',
      opportunity:
        'The opportunity: an accessible, friendly experience built on micro-habits that need no equipment or special spaces, with gamification that motivates without pressure.',
    },
    architecture: {
      label: '05. Architecture',
      text: 'Four main sections, designed to plan, move and see progress without friction.',
      sections: [
        { name: 'Home', items: ['Activity by day', 'Weekly progress', 'Posts of the day'] },
        { name: 'Schedule', items: ['Routine', 'Calendar', 'Suggested activities'] },
        { name: 'Achievements', items: ['My achievements'] },
        { name: 'Log', items: ['Today’s activity'] },
      ],
      flowLabel: 'Main flow · Activity log',
      flow: ['Home', 'Log', 'Activity', 'Time', 'Feedback', 'Achievement', 'Goals'],
    },
    mvp: {
      label: '06. MVP',
      text: 'Launch something small and useful: people should still be using it after the first week.',
      features: ['Flexible planning', 'Reminders', 'Achievement tracking', 'Visual progress'],
    },
    ui: {
      label: '07. Interface',
      text: 'Soft, warm colors, 3D illustrations and achievements that celebrate every step. Nothing that feels like pressure.',
      palette: 'Palette',
      paletteNames: ['Pink', 'Sage', 'Yellow', 'Background', 'Text'],
      typography: 'Typography',
    },
    learnings: {
      label: '08. Learnings',
      items: [
        { title: 'Empathy first', text: 'Emotional context matters as much as data.' },
        { title: 'Inclusive design', text: 'Exercise is not just for athletes.' },
        { title: 'Constant iteration', text: 'The MVP is the start; feedback shapes the product.' },
      ],
    },
  },
} as const;

const PALETTE = [PA_COLORS.pink, PA_COLORS.sage, PA_COLORS.yellow, PA_COLORS.bg, PA_COLORS.text];
const LIGHT_SWATCH = 3;
const SOFT_TINTS = [PA_COLORS.pinkSoft, PA_COLORS.sageSoft, PA_COLORS.yellowSoft];

const LIVE_URL = projects.find((project) => project.id === 'pausa-activa')?.liveUrl;

export function PausaActivaCase({ language }: PausaActivaCaseProps) {
  const t = content[language];

  return (
    <CaseLayout
      title="Pausa Activa"
      descriptionLabel={t.descriptionLabel}
      description={t.description}
      meta={[
        { label: t.serviceLabel, values: t.service },
        { label: t.yearLabel, values: ['2025'] },
        { label: t.toolsLabel, values: ['Figma', 'FigJam'] },
        { label: t.methodLabel, values: [t.method] },
      ]}
      link={{ label: t.linkLabel, href: LIVE_URL }}
      intro={
        <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/12] bg-white overflow-hidden">
          <img src={PA_SCREENS} alt={t.screensAlt} className="w-full h-full object-cover" />
        </div>
      }
    >
      {/* 01 · Problema */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: PA_COLORS.section }}>
        <TextBlock label={t.problem.label}>{t.problem.text}</TextBlock>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.problem.stats.map((stat) => (
            <div key={stat.value} className="rounded-xl p-5 bg-white" style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}>
              <p style={{ fontFamily: POPPINS, fontSize: '22px', fontWeight: 600, color: PA_COLORS.text }}>
                {stat.value}
              </p>
              <p className="mt-1" style={{ fontSize: '14px', lineHeight: 1.5, color: 'rgba(51, 51, 51, 0.7)' }}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="px-8 md:px-12 py-10" style={{ backgroundColor: PA_COLORS.pinkSoft }}>
        <p className="max-w-[560px]" style={{ fontFamily: POPPINS, fontSize: 'clamp(18px, 1.7vw, 22px)', lineHeight: 1.45, color: PA_COLORS.text }}>
          {t.problem.question}
        </p>
      </Reveal>

      {/* 02 · Investigación */}
      <Reveal className="p-8 md:p-12 bg-white">
        <TextBlock label={t.research.label}>{t.research.text}</TextBlock>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.research.findings.map((finding, index) => (
            <div
              key={finding.title}
              className="rounded-xl p-5"
              style={{ backgroundColor: index % 3 === 0 ? PA_COLORS.pinkSoft : PA_COLORS.mist }}
            >
              <p style={{ fontFamily: POPPINS, fontSize: '15px', fontWeight: 500, color: PA_COLORS.text }}>{finding.title}</p>
              <p className="mt-1" style={{ fontSize: '14px', lineHeight: 1.55, color: 'rgba(51, 51, 51, 0.75)' }}>
                {finding.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[560px]" style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.6, color: PA_COLORS.text }}>
          <span style={{ color: PA_COLORS.pink, fontWeight: 500 }}>{t.research.insightLabel}: </span>
          {t.research.insight}
        </p>
      </Reveal>

      {/* 03 · Usuaria */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center" style={{ backgroundColor: PA_COLORS.mist }}>
          <p className="mb-6 text-black/40" style={{ fontSize: '14px' }}>
            {t.persona.label}
          </p>
          <p style={{ fontFamily: POPPINS, fontSize: 'clamp(17px, 1.5vw, 21px)', fontWeight: 500, lineHeight: 1.4, color: PA_COLORS.text }}>
            “{t.persona.quote}”
          </p>
          <p className="mt-6" style={{ fontFamily: POPPINS, fontSize: '15px', fontWeight: 500, color: PA_COLORS.text }}>
            {t.persona.name}
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(51, 51, 51, 0.6)' }}>{t.persona.role}</p>
        </div>

        <div className="p-8 md:p-12 bg-white flex flex-col justify-center gap-6">
          {[
            { label: t.persona.goalsLabel, items: t.persona.goals, color: PA_COLORS.sage },
            { label: t.persona.painsLabel, items: t.persona.pains, color: PA_COLORS.red },
          ].map((group) => (
            <div key={group.label}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: group.color }}>{group.label}</p>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li key={item} style={{ fontSize: '15px', fontWeight: 300, color: PA_COLORS.text }}>
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 04 · Definición */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: PA_COLORS.section }}>
        <TextBlock label={t.definition.label}>
          <p style={{ fontFamily: POPPINS, fontSize: '20px', fontWeight: 400, lineHeight: 1.4, color: PA_COLORS.text }}>
            {t.definition.question}
          </p>
        </TextBlock>
        <p className="mt-6 max-w-[520px] pl-4" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.6, color: PA_COLORS.text, borderLeft: `2px solid ${PA_COLORS.sage}` }}>
          {t.definition.opportunity}
        </p>
      </Reveal>

      {/* 05 · Arquitectura */}
      <Reveal className="p-8 md:p-12 bg-white">
        <TextBlock label={t.architecture.label}>{t.architecture.text}</TextBlock>

        <div className="mt-8 flex justify-center">
          <span className="rounded-lg px-5 py-2" style={{ fontFamily: POPPINS, fontSize: '14px', fontWeight: 500, backgroundColor: '#F4BAC0', color: PA_COLORS.text }}>
            Pausa Activa
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {t.architecture.sections.map((section) => (
            <div key={section.name} className="rounded-xl p-4" style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}>
              <p className="text-center" style={{ fontFamily: POPPINS, fontSize: '14px', fontWeight: 500, color: PA_COLORS.text }}>
                {section.name}
              </p>
              <ul className="mt-3 space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="rounded-md px-2 py-1.5 text-center" style={{ fontSize: '12px', backgroundColor: PA_COLORS.pinkSoft, color: PA_COLORS.text }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 mb-3" style={{ fontSize: '13px', fontWeight: 500, color: '#C79A45' }}>
          {t.architecture.flowLabel}
        </p>
        <ol className="flex flex-wrap items-center gap-y-2">
          {t.architecture.flow.map((step, index) => (
            <li key={step} className="flex items-center">
              {index > 0 && (
                <span aria-hidden="true" className="mx-1.5" style={{ color: PA_COLORS.yellow }}>
                  →
                </span>
              )}
              <span className="rounded-md px-3 py-1.5" style={{ fontSize: '12px', backgroundColor: PA_COLORS.yellowSoft, color: PA_COLORS.text }}>
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* 06 · MVP */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: PA_COLORS.mist }}>
        <TextBlock label={t.mvp.label}>{t.mvp.text}</TextBlock>
        <ul className="mt-6 flex flex-wrap gap-2">
          {t.mvp.features.map((feature) => (
            <li key={feature} className="rounded-full px-4 py-1.5 bg-white" style={{ fontSize: '13px', color: PA_COLORS.text }}>
              ★ {feature}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 07 · Interfaz */}
      <Reveal className="p-8 md:p-12 pb-0 md:pb-0 bg-white">
        <TextBlock label={t.ui.label}>{t.ui.text}</TextBlock>
      </Reveal>

      <Reveal className="grid grid-cols-1 sm:grid-cols-2 bg-white">
        <div className="p-8 md:p-12">
          <p className="mb-4 text-black/40" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {t.ui.palette}
          </p>
          <div className="grid grid-cols-5 gap-2">
            {PALETTE.map((hex, index) => (
              <div key={hex}>
                <div
                  className="aspect-square rounded-lg"
                  style={{ backgroundColor: hex, border: index === LIGHT_SWATCH ? '1px solid rgba(0, 0, 0, 0.08)' : undefined }}
                />
                <p className="mt-2" style={{ fontSize: '12px', color: PA_COLORS.text }}>
                  {t.ui.paletteNames[index]}
                </p>
                <p style={{ fontSize: '10px', letterSpacing: '0.03em', color: 'rgba(51, 51, 51, 0.5)' }}>{hex}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            {SOFT_TINTS.map((hex) => (
              <span key={hex} className="h-2 flex-1 rounded-full" style={{ backgroundColor: hex }} />
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-end">
          <p className="mb-4 text-black/40" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {t.ui.typography}
          </p>
          <p style={{ fontFamily: POPPINS, fontSize: 'clamp(56px, 6vw, 84px)', fontWeight: 600, lineHeight: 1, color: PA_COLORS.pink }}>Aa</p>
          <p className="mt-3" style={{ fontFamily: POPPINS, fontSize: '15px', fontWeight: 500, color: PA_COLORS.text }}>
            Poppins
          </p>
          <p style={{ fontFamily: POPPINS, fontSize: '12px', color: 'rgba(51, 51, 51, 0.55)' }}>Regular · Medium · SemiBold · Bold</p>
        </div>
      </Reveal>

      {/* 08 · Aprendizajes */}
      <Reveal className="p-8 md:p-12" style={{ backgroundColor: PA_COLORS.pinkSoft }}>
        <p className="mb-6 text-black/40" style={{ fontSize: '14px' }}>
          {t.learnings.label}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.learnings.items.map((item, index) => (
            <div key={item.title}>
              <span className="block h-1 w-8 rounded-full mb-3" style={{ backgroundColor: [PA_COLORS.pink, PA_COLORS.sage, PA_COLORS.yellow][index] }} />
              <p style={{ fontFamily: POPPINS, fontSize: '16px', fontWeight: 500, color: PA_COLORS.text }}>{item.title}</p>
              <p className="mt-1" style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.55, color: PA_COLORS.text }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </CaseLayout>
  );
}
