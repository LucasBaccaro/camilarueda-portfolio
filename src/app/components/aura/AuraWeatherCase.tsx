import { CaseLayout, Reveal, SmallLabel, TextBlock } from '@/app/components/case/CaseLayout';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';
import { AuraIllustration, AuraWeatherDemo, AURA_SCENES, stageClassName } from './AuraWeatherDemo';

interface AuraWeatherCaseProps {
  language: Language;
}

const content = {
  es: {
    linkLabel: 'Ver app',
    descriptionLabel: 'Descripción',
    description:
      'Aura Weather es una app del clima hecha en React que consume la API de OpenWeatherMap. Buscás una ciudad y la interfaz se adapta a lo que devuelve la API: sol, nubes, lluvia, día o noche.',
    serviceLabel: 'Servicio',
    service: ['Frontend React', 'Integración de API', 'UI Design'],
    yearLabel: 'Año',
    stackLabel: 'Stack',
    platformLabel: 'Plataforma',
    platform: 'Mobile & Web',
    context: {
      label: '01. Contexto',
      text: 'Aura Weather nació como práctica de React: manejar estado, componentes y, sobre todo, integrar una API real. El diseño fue el soporte para que esa lógica se viera.',
    },
    challenge: {
      label: '02. Desafío',
      question: '¿Cómo mostrar datos del clima en tiempo real de forma simple?',
      text: 'Integré la API de OpenWeatherMap para traer, en cada búsqueda, la temperatura, la humedad, el viento y el estado del cielo de cualquier ciudad. Lo más difícil fue manejar esa respuesta asíncrona y sus errores, y convertirla en una interfaz que se entienda desde el primer momento.',
    },
    moodboard: {
      label: '03. Moodboard',
      text: 'Una base calma y casi vacía, donde el clima aporta el color. Formas simples, luz difusa y vidrio esmerilado.',
      palette: 'Paleta',
      elements: 'Elementos',
      typography: 'Tipografía',
      material: 'Material',
      keywords: ['Calma', 'Luz difusa', 'Minimal', 'Atmósfera', 'Suave'],
      elementNames: ['Sol', 'Nubes', 'Lluvia', 'Luna y estrellas'],
      paletteNames: ['Niebla', 'Crema', 'Arena', 'Sol', 'Luna', 'Lluvia', 'Tinta', 'Noche'],
      sample: { condition: 'Cielo claro', humidity: 'Humedad', wind: 'Viento' },
    },
    states: {
      label: '04. Estados',
      text: 'La misma tarjeta, diferentes climas. Búsqueda de distintas ciudades en el mismo momento.',
      alts: [
        'Pantalla inicial de búsqueda',
        'Valencia, cielo claro',
        'Seúl, cielo claro de noche',
        'Miami, nubes dispersas',
        'Mumbai, lluvia ligera de noche',
        'Ciudad del Cabo, lluvia ligera',
      ],
    },
    learnings: {
      label: '05. Aprendizajes',
      text: 'Consumir una API externa, manejar respuestas asíncronas y errores, y traducir datos en estados visuales. También confirmé algo que traigo del diseño: la lógica se entiende mejor cuando se ve.',
    },
  },
  en: {
    linkLabel: 'View app',
    descriptionLabel: 'Description',
    description:
      'Aura Weather is a React weather app powered by the OpenWeatherMap API. Search for a city and the interface adapts to what the API returns: sun, clouds, rain, day or night.',
    serviceLabel: 'Service',
    service: ['React Frontend', 'API Integration', 'UI Design'],
    yearLabel: 'Year',
    stackLabel: 'Stack',
    platformLabel: 'Platform',
    platform: 'Mobile & Web',
    context: {
      label: '01. Context',
      text: 'Aura Weather started as a React practice: handling state, components and, above all, integrating a real API. The design was there to make that logic visible.',
    },
    challenge: {
      label: '02. Challenge',
      question: 'How do you show real-time weather data in a simple way?',
      text: 'I integrated the OpenWeatherMap API to fetch, on every search, the temperature, humidity, wind and sky conditions of any city. The hardest part was handling that async response and its errors, and turning it into an interface you understand from the very first moment.',
    },
    moodboard: {
      label: '03. Moodboard',
      text: 'A calm, almost empty base where the weather brings the color. Simple shapes, diffused light and frosted glass.',
      palette: 'Palette',
      elements: 'Elements',
      typography: 'Typography',
      material: 'Material',
      keywords: ['Calm', 'Diffused light', 'Minimal', 'Atmosphere', 'Soft'],
      elementNames: ['Sun', 'Clouds', 'Rain', 'Moon & stars'],
      paletteNames: ['Mist', 'Cream', 'Sand', 'Sun', 'Moon', 'Rain', 'Ink', 'Night'],
      sample: { condition: 'Clear sky', humidity: 'Humidity', wind: 'Wind' },
    },
    states: {
      label: '04. States',
      text: 'The same card, different kinds of weather. Searching different cities at the same moment.',
      alts: [
        'Initial search screen',
        'Valencia, clear sky',
        'Seoul, clear sky at night',
        'Miami, scattered clouds',
        'Mumbai, light rain at night',
        'Cape Town, light rain',
      ],
    },
    learnings: {
      label: '05. Learnings',
      text: 'Consuming an external API, handling async responses and errors, and turning data into visual states. It also confirmed something I bring from design: logic is easier to understand when you can see it.',
    },
  },
} as const;

const PALETTE = [
  { hex: '#E2E8F0', dark: false },
  { hex: '#F5EDE3', dark: false },
  { hex: '#D4A574', dark: false },
  { hex: '#FF6B35', dark: true },
  { hex: '#D1DCE6', dark: false },
  { hex: '#3B82F6', dark: true },
  { hex: '#1E293B', dark: true },
  { hex: '#0B0F17', dark: true },
];

// position: encuadre vertical para que la tarjeta quede centrada al recortar
const SCREENSHOTS = [
  { src: '/aura-weather/auraweather.jpeg', position: 'center 80%' },
  { src: '/aura-weather/soleado.jpeg', position: 'center 12%' },
  { src: '/aura-weather/noche.jpeg', position: 'center 2%' },
  { src: '/aura-weather/nublado.jpeg', position: 'center 14%' },
  { src: '/aura-weather/lluvianoche.jpeg', position: 'center 4%' },
  { src: '/aura-weather/lluvia.jpeg', position: 'center 0%' },
];

const LIVE_URL = projects.find((project) => project.id === 'aura-weather')?.liveUrl;

export function AuraWeatherCase({ language }: AuraWeatherCaseProps) {
  const t = content[language];
  const [valencia, miami, capeTown, seoul] = AURA_SCENES;
  const elementScenes = [
    valencia,
    { ...miami, sun: false },
    capeTown,
    seoul,
  ];

  return (
    <CaseLayout
      title="Aura Weather"
      descriptionLabel={t.descriptionLabel}
      description={t.description}
      meta={[
        { label: t.serviceLabel, values: t.service },
        { label: t.yearLabel, values: ['2026'] },
        { label: t.stackLabel, values: ['React', 'Vite', 'OpenWeatherMap'] },
        { label: t.platformLabel, values: [t.platform] },
      ]}
      link={{ label: t.linkLabel, href: LIVE_URL }}
      intro={
        <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/12]">
          <AuraWeatherDemo language={language} />
        </div>
      }
    >
      {/* 01 · Contexto */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-[#F1F2F4] flex items-center p-8 md:p-12 min-h-[320px]">
          <TextBlock label={t.context.label}>{t.context.text}</TextBlock>
        </div>
        <div className="bg-[#E2E8F0] aspect-[4/5] overflow-hidden">
          {/* Recorta el aire de arriba para centrar la tarjeta */}
          <img
            src={SCREENSHOTS[0].src}
            alt={t.states.alts[0]}
            className="w-full h-full object-cover"
            style={{ objectPosition: SCREENSHOTS[0].position }}
            loading="lazy"
          />
        </div>
      </Reveal>

      {/* 02 · Desafío */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2">
        <div
          className="aspect-[4/5] overflow-hidden flex items-center justify-center order-2 sm:order-1"
          style={{ background: 'linear-gradient(180deg, #faf4ed 0%, #f5ede3 100%)' }}
        >
          <img src={SCREENSHOTS[1].src} alt={t.states.alts[1]} className="h-full w-auto max-w-none" loading="lazy" />
        </div>
        <div className="bg-[#FAF4ED] flex items-center p-8 md:p-12 min-h-[320px] order-1 sm:order-2">
          <TextBlock label={t.challenge.label}>
            <p className="text-[#1E293B] mb-4" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.35, letterSpacing: '-0.02em' }}>
              {t.challenge.question}
            </p>
            <p>{t.challenge.text}</p>
          </TextBlock>
        </div>
      </Reveal>

      {/* 04 · Moodboard */}
      <Reveal className="bg-[#F1F2F4] p-8 md:p-12">
        <TextBlock label={t.moodboard.label}>{t.moodboard.text}</TextBlock>
      </Reveal>

      {/* Paleta */}
      <Reveal className="relative grid grid-cols-4">
        <SmallLabel>{t.moodboard.palette}</SmallLabel>
        {PALETTE.map((color, index) => (
          <div
            key={color.hex}
            className="aspect-[3/4] flex flex-col justify-end p-3 md:p-5"
            style={{ backgroundColor: color.hex }}
          >
            <span className={color.dark ? 'text-white' : 'text-black/80'} style={{ fontSize: '14px' }}>
              {t.moodboard.paletteNames[index]}
            </span>
            <span className={color.dark ? 'text-white/60' : 'text-black/45'} style={{ fontSize: '11px', letterSpacing: '0.04em' }}>
              {color.hex}
            </span>
          </div>
        ))}
      </Reveal>

      {/* Elementos */}
      <Reveal className="grid grid-cols-2">
        {elementScenes.map((scene, index) => (
          <div key={scene.id} className={`${stageClassName(scene)} relative aspect-square sm:aspect-[4/3]`}>
            {index === 0 && <SmallLabel>{t.moodboard.elements}</SmallLabel>}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[260px] h-[180px] scale-[0.55] sm:scale-75 xl:scale-100">
                <AuraIllustration scene={scene} style={{ top: 0 }} />
              </div>
            </div>
            <p
              className={`absolute bottom-4 left-5 ${scene.background === 'night' ? 'text-white/60' : 'text-black/45'}`}
              style={{ fontSize: '13px' }}
            >
              {t.moodboard.elementNames[index]}
            </p>
          </div>
        ))}
      </Reveal>

      {/* Tipografía y material */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative bg-[#F1F2F4] p-8 md:p-12 flex flex-col justify-end min-h-[380px]">
          <SmallLabel>{t.moodboard.typography}</SmallLabel>
          <p className="text-[#1E293B] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '96px', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.04em' }}>
            Aa
          </p>
          <p className="text-black/40 mb-6" style={{ fontSize: '13px' }}>
            Inter · SF Pro Display
          </p>
          <div className="space-y-3 text-[#1E293B]" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.28em', fontWeight: 600, color: '#8C93A0' }}>AURA WEATHER</p>
            <p style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>Valencia</p>
            <p className="flex items-baseline gap-3">
              <span style={{ fontSize: '18px', color: '#475569' }}>{t.moodboard.sample.condition}</span>
              <span style={{ fontSize: '36px', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>30°C</span>
            </p>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              {t.moodboard.sample.humidity}: <strong>30%</strong> · {t.moodboard.sample.wind}: <strong>5 km/h</strong>
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[380px]" style={{ background: 'linear-gradient(180deg, #faf4ed 0%, #f5ede3 100%)' }}>
          <SmallLabel>{t.moodboard.material}</SmallLabel>
          <div
            className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[160px] h-[160px] rounded-full"
            style={{
              background: 'linear-gradient(180deg, #ff8c53 0%, #ff6b35 100%)',
              boxShadow: '0 0 60px rgba(255, 107, 53, 0.45), 0 0 120px rgba(255, 139, 83, 0.3)',
            }}
          />
          <div
            className="absolute left-8 right-8 bottom-10 top-[45%] rounded-[36px] flex flex-col justify-center px-7"
            style={{
              background: 'rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(25px) saturate(140%)',
              WebkitBackdropFilter: 'blur(25px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
            }}
          >
            <p className="text-[#1E293B]" style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em' }}>
              Glassmorphism
            </p>
            <p className="text-[#64748B] mt-1" style={{ fontSize: '13px', lineHeight: 1.6 }}>
              blur 25px · saturate 140%
              <br />
              radius 40px · white 45%
            </p>
          </div>
        </div>
      </Reveal>

      {/* Palabras clave */}
      <Reveal className="bg-[#E2E8F0] px-8 md:px-12 py-10 flex flex-wrap gap-x-8 gap-y-3">
        {t.moodboard.keywords.map((word) => (
          <span
            key={word}
            className="text-[#1E293B]"
            style={{ fontSize: 'clamp(24px, 2.4vw, 36px)', fontWeight: 400, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {word}
          </span>
        ))}
      </Reveal>

      {/* 04 · Estados */}
      <section className="bg-[#FAF4ED]">
        <Reveal className="p-8 md:p-12">
          <TextBlock label={t.states.label}>
            {t.states.text}
          </TextBlock>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-3">
          {SCREENSHOTS.map((shot, index) => (
            <div key={shot.src} className="aspect-[3/4] overflow-hidden">
              <img
                src={shot.src}
                alt={t.states.alts[index]}
                className="w-full h-full object-cover"
                style={{ objectPosition: shot.position }}
                loading="lazy"
              />
            </div>
          ))}
        </Reveal>
      </section>

      {/* 05 · Aprendizajes */}
      <Reveal className="bg-[#0A0D14] p-8 md:p-12 min-h-[280px] flex items-center">
        <TextBlock label={t.learnings.label} dark>
          {t.learnings.text}
        </TextBlock>
      </Reveal>
    </CaseLayout>
  );
}
