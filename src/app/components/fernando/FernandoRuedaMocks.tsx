import { useState } from 'react';
import type { Language } from '@/app/data/translations';

// Tokens del sitio del entrenador (assets/css/base/variables.css)
export const FR_COLORS = {
  bg: '#0A0B0D',
  bgAlt: '#111318',
  card: '#161820',
  text: '#F0EDE8',
  accent: '#C9A84C',
  accentLight: '#E8C97A',
};

const DISPLAY = "'Bebas Neue', Impact, sans-serif";
const HEADING = "'Montserrat', 'Segoe UI', sans-serif";
const BODY = "'Inter', 'Segoe UI', sans-serif";

const HERO_TEXT = {
  es: {
    nav: ['Perfil', 'Trayectoria', 'Filosofía', 'Galería', 'Contacto'],
    tagline: 'Construyo equipos que entienden el juego, dominan el partido y compiten con una identidad clara.',
  },
  en: {
    nav: ['Profile', 'Career', 'Philosophy', 'Gallery', 'Contact'],
    tagline: 'I build teams that understand the game, control the match and compete with a clear identity.',
  },
};

// Hero del sitio: foto de fondo, degradé oscuro abajo y nombre en Bebas Neue.
// compact oculta el menú para la portada chica de la grilla.
export function FernandoHero({ language, compact = false }: { language: Language; compact?: boolean }) {
  const t = HERO_TEXT[language];

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: FR_COLORS.bg }}>
      <img
        src="/fernando-rueda/hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 12%', filter: 'saturate(0.85) brightness(0.8)' }}
      />
      {/* Mismo degradé que .hero__overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10, 11, 13, 0.35) 0%, rgba(10, 11, 13, 0.25) 30%, rgba(10, 11, 13, 0.7) 70%, rgba(10, 11, 13, 0.95) 100%)',
        }}
      />

      <div className="relative h-full flex flex-col justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-center justify-between gap-4" style={{ color: FR_COLORS.text }}>
          <span style={{ fontFamily: DISPLAY, fontSize: compact ? '18px' : '22px', letterSpacing: '0.06em' }}>FRG</span>

          {!compact && (
            <div className="hidden md:flex items-center gap-6">
              {t.nav.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: HEADING,
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(240, 237, 232, 0.8)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          <span
            className="px-2 py-1"
            style={{
              fontFamily: HEADING,
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              border: '1px solid rgba(240, 237, 232, 0.15)',
              borderRadius: 3,
            }}
          >
            <span style={{ color: language === 'es' ? FR_COLORS.accent : 'rgba(240, 237, 232, 0.4)' }}>ES</span>
            <span style={{ color: 'rgba(240, 237, 232, 0.25)' }}> | </span>
            <span style={{ color: language === 'en' ? FR_COLORS.accent : 'rgba(240, 237, 232, 0.4)' }}>EN</span>
          </span>
        </div>

        <div>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: compact ? 'clamp(34px, 4.6vw, 56px)' : 'clamp(40px, 6vw, 84px)',
              lineHeight: 0.95,
              letterSpacing: '0.01em',
              color: FR_COLORS.text,
            }}
          >
            FERNANDO
            <br />
            RUEDA GARCÍA
          </p>
          {!compact && (
            <p
              className="mt-3 max-w-[520px]"
              style={{ fontFamily: BODY, fontSize: 'clamp(12px, 1.1vw, 15px)', lineHeight: 1.5, color: 'rgba(240, 237, 232, 0.8)' }}
            >
              {t.tagline}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

type Localized = Record<Language, string>;

interface CareerEntry {
  id: string;
  crest: string;
  // Ajuste del escudo dentro del círculo, igual que en career.css
  crestPosition?: string;
  shortName: string;
  fullName: string;
  years: Localized;
  role: Localized;
  tags: Localized[];
  items: { season?: string; text: Localized }[];
}

const same = (value: string): Localized => ({ es: value, en: value });

// Datos de la trayectoria tal como están en el sitio (index.html + i18n.js).
// Para sumar un club, agregar una entrada en orden cronológico.
const CAREER: CareerEntry[] = [
  {
    id: 'nueva-chicago',
    crest: '/fernando-rueda/escudos/nueva-chicago.png',
    crestPosition: '58% 58%',
    shortName: 'Nueva Chicago',
    fullName: 'Club Atlético Nueva Chicago',
    years: same('2016–2017'),
    role: { es: 'Entrenador', en: 'Coach' },
    tags: [same('2016 – 2017'), { es: 'Reserva · Sub 19 · Sub 17 · Sub 15', en: 'Reserve · U19 · U17 · U15' }, same('Argentina')],
    items: [
      { text: { es: 'Segundo Entrenador Reserva (Filial)', en: 'Assistant Coach Reserve (B Team)' } },
      { text: { es: 'Segundo Entrenador Sub 19', en: 'Assistant Coach U19' } },
      { text: { es: 'Entrenador Sub 17', en: 'Coach U17' } },
      { text: { es: 'Entrenador Sub 15', en: 'Coach U15' } },
    ],
  },
  {
    id: 'olimpo',
    crest: '/fernando-rueda/escudos/olimpo.png',
    shortName: 'Club Olimpo',
    fullName: 'Club Olimpo',
    years: same('2017'),
    role: { es: 'Analista de Rendimiento', en: 'Performance Analyst' },
    tags: [same('2017'), { es: '1ª División', en: '1st Division' }, same('Argentina')],
    items: [{ text: { es: 'Analista de rendimiento en el primer equipo 1ª División', en: 'Performance Analyst — First Team 1st Division' } }],
  },
  {
    id: 'comunicaciones',
    crest: '/fernando-rueda/escudos/comunicaciones.png',
    crestPosition: '75% 0%',
    shortName: 'Comunicaciones',
    fullName: 'Club Comunicaciones',
    years: same('2018–2019'),
    role: { es: 'Analista Externo', en: 'External Analyst' },
    tags: [same('2018 – 2019'), { es: '2ª División', en: '2nd Division' }, same('Argentina')],
    items: [{ text: { es: 'Análisis externo aplicado al primer equipo', en: 'External analysis applied to the first team' } }],
  },
  {
    id: 'conxo-santiago',
    crest: '/fernando-rueda/escudos/conxo-santiago.png',
    shortName: 'Conxo Santiago',
    fullName: 'CD Conxo Santiago',
    years: same('2018–2019'),
    role: { es: 'Segundo Entrenador', en: 'Assistant Coach' },
    tags: [same('2018 – 2019'), { es: 'Sub 14 · Sub 16', en: 'U14 · U16' }, { es: 'España', en: 'Spain' }],
    items: [
      { text: { es: 'Segundo Entrenador Cadete A (Sub 16)', en: 'Assistant Coach U16' } },
      { text: { es: 'Segundo Entrenador Infantil A (Sub 14)', en: 'Assistant Coach U14' } },
    ],
  },
  {
    id: 'villarreal',
    crest: '/fernando-rueda/escudos/villarreal.png',
    shortName: 'Villarreal CF',
    fullName: 'Villarreal CF',
    years: { es: '2020–Hoy', en: '2020–Now' },
    role: { es: 'Entrenador', en: 'Coach' },
    tags: [
      { es: '2020 – Presente', en: '2020 – Present' },
      { es: 'Sub 10 · Sub 12 · Sub 14 · Sub 16 · Sub 19', en: 'U10 · U12 · U14 · U16 · U19' },
      { es: 'España', en: 'Spain' },
    ],
    items: [
      { season: '24/26', text: { es: 'Entrenador Juvenil C (Sub 19) · Entrenador Cadete A Roda (Sub 16)', en: 'Coach U19 · Coach U16 Roda' } },
      { season: '22/24', text: { es: 'Entrenador Infantil A Roda (Sub 14)', en: 'Coach U14 Roda' } },
      { season: '21/22', text: { es: 'Asistente Juvenil A (Sub 19)', en: 'Assistant U19' } },
      { season: '20/21', text: { es: 'Entrenador Alevín A y Benjamín A (Sub 12 y Sub 10)', en: 'Coach U12 and U10' } },
    ],
  },
];

function Crest({ entry, size, active }: { entry: CareerEntry; size: number; active: boolean }) {
  return (
    <span
      className="shrink-0 rounded-full flex items-center justify-center overflow-hidden transition-colors"
      style={{
        width: size,
        height: size,
        background: active ? FR_COLORS.accent : FR_COLORS.card,
        border: `1px solid ${active ? FR_COLORS.accent : 'rgba(240, 237, 232, 0.08)'}`,
      }}
    >
      <img
        src={entry.crest}
        alt=""
        className="w-full h-full object-contain"
        style={{ padding: 6, objectPosition: entry.crestPosition }}
        loading="lazy"
      />
    </span>
  );
}

// Línea de tiempo del sitio: se elige un club y abajo se abre su detalle
export function FernandoTimeline({ language }: { language: Language }) {
  const [activeId, setActiveId] = useState(CAREER[0].id);
  const active = CAREER.find((entry) => entry.id === activeId) ?? CAREER[0];

  return (
    <div>
      {/* Horizontal en escritorio (con scroll si no entra), vertical en mobile */}
      <div className="sm:overflow-x-auto sm:pb-2">
        <ol className="flex flex-col sm:flex-row sm:items-start sm:min-w-max">
          {CAREER.map((entry, index) => {
            const isActive = entry.id === activeId;

            return (
              <li key={entry.id} className="flex flex-col sm:flex-row sm:items-start">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="ml-[27px] w-px h-5 sm:ml-0 sm:w-4 sm:h-px sm:mt-[44px]"
                    style={{ background: 'rgba(240, 237, 232, 0.15)' }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setActiveId(entry.id)}
                  aria-pressed={isActive}
                  className="flex sm:flex-col items-center gap-4 sm:gap-2 p-2 sm:px-2 sm:py-4 rounded-md text-left sm:text-center sm:w-[112px] cursor-pointer transition-colors hover:bg-white/[0.04]"
                  style={{ color: isActive ? FR_COLORS.text : 'rgba(240, 237, 232, 0.6)' }}
                >
                  <Crest entry={entry} size={56} active={isActive} />
                  <span className="flex flex-col sm:items-center gap-1">
                    <span style={{ fontFamily: HEADING, fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', color: FR_COLORS.accent }}>
                      {entry.years[language].toUpperCase()}
                    </span>
                    <span style={{ fontFamily: HEADING, fontSize: '13px', fontWeight: 700 }}>{entry.shortName}</span>
                    <span
                      style={{
                        fontFamily: BODY,
                        fontSize: '10px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: 'rgba(240, 237, 232, 0.35)',
                      }}
                    >
                      {entry.role[language]}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Panel de detalle */}
      <div
        key={active.id}
        className="mt-6 rounded-lg p-6 md:p-8"
        style={{ background: FR_COLORS.card, border: '1px solid rgba(240, 237, 232, 0.08)' }}
        aria-live="polite"
      >
        <div className="flex items-center gap-5">
          <span
            className="shrink-0 rounded-full flex items-center justify-center overflow-hidden"
            style={{ width: 64, height: 64, background: 'rgba(201, 168, 76, 0.12)', border: '1px solid rgba(201, 168, 76, 0.3)' }}
          >
            <img
              src={active.crest}
              alt={active.fullName}
              className="w-full h-full object-contain"
              style={{ padding: 6, objectPosition: active.crestPosition }}
            />
          </span>
          <div>
            <h4 style={{ fontFamily: HEADING, fontSize: 'clamp(17px, 1.6vw, 22px)', fontWeight: 700, color: FR_COLORS.text }}>
              {active.fullName}
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span
                  key={tag.es}
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: HEADING,
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    color: FR_COLORS.accent,
                    background: 'rgba(201, 168, 76, 0.12)',
                    border: '1px solid rgba(201, 168, 76, 0.3)',
                  }}
                >
                  {tag[language]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-6 pl-5 space-y-2" style={{ borderLeft: `2px solid ${FR_COLORS.accent}` }}>
          {active.items.map((item) => (
            <li key={item.text.es} style={{ fontFamily: BODY, fontSize: '14px', lineHeight: 1.6, color: 'rgba(240, 237, 232, 0.65)' }}>
              <span style={{ color: FR_COLORS.accent }}>★ </span>
              {item.season && <span style={{ fontWeight: 600, color: FR_COLORS.text }}>{item.season} </span>}
              {item.text[language]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Muestra tipográfica con las tres familias del sitio
export function FernandoTypeMock({ labels }: { labels: { display: string; heading: string; body: string } }) {
  return (
    <div style={{ color: FR_COLORS.text }}>
      <p style={{ fontFamily: DISPLAY, fontSize: 'clamp(56px, 8vw, 104px)', lineHeight: 0.9, letterSpacing: '0.02em' }}>Aa</p>
      <div className="mt-6 space-y-3" style={{ fontSize: '12px' }}>
        <p>
          <span style={{ color: 'rgba(240, 237, 232, 0.4)' }}>{labels.display} · </span>
          <span style={{ fontFamily: DISPLAY, letterSpacing: '0.08em', fontSize: '15px' }}>BEBAS NEUE</span>
        </p>
        <p>
          <span style={{ color: 'rgba(240, 237, 232, 0.4)' }}>{labels.heading} · </span>
          <span style={{ fontFamily: HEADING, fontWeight: 600 }}>Montserrat</span>
        </p>
        <p>
          <span style={{ color: 'rgba(240, 237, 232, 0.4)' }}>{labels.body} · </span>
          <span style={{ fontFamily: BODY, fontWeight: 300 }}>Inter</span>
        </p>
      </div>
    </div>
  );
}
