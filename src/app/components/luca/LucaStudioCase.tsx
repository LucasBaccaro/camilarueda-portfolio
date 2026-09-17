import { Brain, Code, MessageSquare, Smartphone, Sparkles, Target, Zap } from 'lucide-react';
import { CaseLayout, Reveal, TextBlock } from '@/app/components/case/CaseLayout';
import { projects } from '@/app/data/projects';
import type { Language } from '@/app/data/translations';

interface LucaStudioCaseProps {
  language: Language;
}

// Tokens de la web de Luca Studio (LUCASTUDIO-V3/src/styles/theme.css) y del UI kit
export const LS_COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  lime: '#C4FF0D',
  beige: '#F1ECE4',
  night: '#0F121C',
  text: '#F5F5F7',
  muted: '#B4B4B8',
};

const PLAYFAIR = "'Playfair Display', Georgia, serif";
const INTER = "'Inter', 'Segoe UI', sans-serif";

export const LS_IMAGES = {
  cards: '/luca-studio/tarjetas.jpg',
  desktop: '/luca-studio/web-desktop.jpg',
  mobile: '/luca-studio/web-mobile.jpg',
};

const content = {
  es: {
    linkLabel: 'Ver sitio',
    descriptionLabel: 'Descripción',
    description:
      'Luca Studio es un estudio de software que diseña y desarrolla productos digitales, webs y automatizaciones con IA. Diseñé su identidad visual y su sitio web.',
    serviceLabel: 'Servicio',
    service: ['Identidad visual', 'Diseño web', 'UI Design'],
    yearLabel: 'Año',
    toolsLabel: 'Herramientas',
    platformLabel: 'Plataforma',
    platform: 'Web & Mobile',
    cardsAlt: 'Tarjetas de presentación de Luca Studio con el logo y un código QR en verde lima',
    context: {
      label: '01. Contexto',
      text: 'Un estudio de software necesitaba una marca a la altura de lo que construye: clara, profesional y reconocible. El objetivo fue crear la identidad desde cero y llevarla a una web simple, moderna y funcional.',
    },
    identity: {
      label: '02. Identidad visual',
      text: 'Un logotipo que combina una serif clásica con una sans geométrica: la solidez de un estudio y la precisión de la tecnología. La línea verde lima es el detalle que la vuelve reconocible.',
      tagline: 'Soluciones digitales con propósito',
      versions: ['Principal', 'Sobre lima', 'Sobre beige'],
    },
    system: {
      label: '03. Sistema visual',
      text: 'Negro profundo como base y un único color de acento, el verde lima, reservado para lo que tiene que llamar la atención: acciones, íconos y detalles.',
      palette: 'Paleta',
      paletteNames: ['Deep Black', 'Cloud White', 'Acid Lime', 'Soft Beige', 'Night Mode'],
      typography: 'Tipografía',
      typeRoles: { display: 'Logo y títulos destacados', body: 'Interfaz y textos' },
      components: 'Componentes',
      buttons: 'Botones',
      primary: 'Charlemos',
      hover: 'Hover',
      icons: 'Íconos de servicios',
    },
    web: {
      label: '04. Diseño web',
      text: 'La web comunica la propuesta de valor en segundos: jerarquía clara, secciones bien definidas, microinteracciones sutiles y el verde lima guiando la atención hacia el contacto.',
      desktopAlt: 'Sitio web de Luca Studio en una laptop',
    },
    mobile: {
      label: '05. Mobile',
      text: 'Pensada mobile-first: los mismos componentes se adaptan a pantallas chicas sin perder jerarquía ni coherencia con la versión de escritorio.',
      mobileAlt: 'Sitio web de Luca Studio en un celular',
    },
    result: {
      label: '06. Resultado',
      text: 'Una marca con personalidad y una presencia digital alineada a su propósito, lista para escalar a redes, presentaciones y nuevos productos.',
    },
  },
  en: {
    linkLabel: 'View site',
    descriptionLabel: 'Description',
    description:
      'Luca Studio is a software studio that designs and builds digital products, websites and AI automations. I designed its visual identity and its website.',
    serviceLabel: 'Service',
    service: ['Visual identity', 'Web design', 'UI Design'],
    yearLabel: 'Year',
    toolsLabel: 'Tools',
    platformLabel: 'Platform',
    platform: 'Web & Mobile',
    cardsAlt: 'Luca Studio business cards with the logo and a lime green QR code',
    context: {
      label: '01. Context',
      text: 'A software studio needed a brand that matched what it builds: clear, professional and recognizable. The goal was to create the identity from scratch and carry it into a simple, modern and functional website.',
    },
    identity: {
      label: '02. Visual identity',
      text: 'A logotype that pairs a classic serif with a geometric sans: the solidity of a studio and the precision of technology. The lime green line is the detail that makes it recognizable.',
      tagline: 'Digital solutions with purpose',
      versions: ['Primary', 'On lime', 'On beige'],
    },
    system: {
      label: '03. Visual system',
      text: 'Deep black as the base and a single accent color, lime green, saved for what needs attention: actions, icons and details.',
      palette: 'Palette',
      paletteNames: ['Deep Black', 'Cloud White', 'Acid Lime', 'Soft Beige', 'Night Mode'],
      typography: 'Typography',
      typeRoles: { display: 'Logo and featured titles', body: 'Interface and body text' },
      components: 'Components',
      buttons: 'Buttons',
      primary: "Let's talk",
      hover: 'Hover',
      icons: 'Service icons',
    },
    web: {
      label: '04. Web design',
      text: 'The site gets the value proposition across in seconds: clear hierarchy, well-defined sections, subtle microinteractions and lime green guiding attention toward contact.',
      desktopAlt: 'Luca Studio website on a laptop',
    },
    mobile: {
      label: '05. Mobile',
      text: 'Designed mobile-first: the same components adapt to small screens without losing hierarchy or consistency with the desktop version.',
      mobileAlt: 'Luca Studio website on a phone',
    },
    result: {
      label: '06. Result',
      text: 'A brand with personality and a digital presence aligned with its purpose, ready to scale to social media, presentations and new products.',
    },
  },
} as const;

const PALETTE = [LS_COLORS.black, LS_COLORS.white, LS_COLORS.lime, LS_COLORS.beige, LS_COLORS.night];
const LIGHT_SWATCHES = [1, 2, 3];
const SERVICE_ICONS = [Code, Smartphone, Brain, MessageSquare];
const VALUE_ICONS = [Zap, Target, Sparkles];

const LIVE_URL = projects.find((project) => project.id === 'luca-studio')?.liveUrl;

// Logotipo armado con las tipografías de la marca
function LucaLogo({ color, lineColor, size = 1 }: { color: string; lineColor: string; size?: number }) {
  return (
    <div className="flex flex-col items-center" style={{ color }}>
      <span style={{ fontFamily: PLAYFAIR, fontSize: 64 * size, fontWeight: 600, lineHeight: 1, letterSpacing: '-0.01em' }}>Luca</span>
      <span style={{ fontFamily: INTER, fontSize: 17 * size, fontWeight: 500, letterSpacing: '0.18em', marginTop: 4 * size }}>STUDIO</span>
      <span style={{ width: 52 * size, height: Math.max(2, 2 * size), background: lineColor, marginTop: 14 * size }} />
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245, 245, 247, 0.45)' }}>
      {children}
    </p>
  );
}

export function LucaStudioCase({ language }: LucaStudioCaseProps) {
  const t = content[language];

  return (
    <CaseLayout
      title="Luca Studio"
      descriptionLabel={t.descriptionLabel}
      description={t.description}
      meta={[
        { label: t.serviceLabel, values: t.service },
        { label: t.yearLabel, values: ['2026'] },
        { label: t.toolsLabel, values: ['Figma'] },
        { label: t.platformLabel, values: [t.platform] },
      ]}
      link={{ label: t.linkLabel, href: LIVE_URL }}
      intro={
        <div className="aspect-[4/5] sm:aspect-[5/4] overflow-hidden" style={{ backgroundColor: '#3a3a3a' }}>
          <img src={LS_IMAGES.cards} alt={t.cardsAlt} className="w-full h-full object-cover" />
        </div>
      }
    >
      {/* 01 · Contexto */}
      <Reveal className="p-8 md:p-12 min-h-[280px] flex items-center" style={{ backgroundColor: LS_COLORS.black }}>
        <TextBlock label={t.context.label} dark>
          {t.context.text}
        </TextBlock>
      </Reveal>

      {/* 02 · Identidad visual */}
      <Reveal className="bg-[#F1F2F4] p-8 md:p-12">
        <TextBlock label={t.identity.label}>
          {t.identity.text}
        </TextBlock>
      </Reveal>

      <Reveal className="flex flex-col items-center justify-center py-20 md:py-28 px-6" style={{ backgroundColor: LS_COLORS.black }}>
        <LucaLogo color={LS_COLORS.white} lineColor={LS_COLORS.lime} size={1.4} />
      </Reveal>

      {/* 03 · Sistema visual */}
      <Reveal style={{ backgroundColor: LS_COLORS.night, borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="p-8 md:p-12">
          <TextBlock label={t.system.label} dark>
            {t.system.text}
          </TextBlock>
        </div>

        {/* Paleta en franjas: el lima ocupa menos lugar porque es solo acento */}
        <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', backgroundColor: LS_COLORS.black }}>
          <div className="px-8 md:px-12 pt-8 pb-4">
            <SectionLabel>{t.system.palette}</SectionLabel>
          </div>
          <div className="grid grid-cols-[3fr_2fr_1.2fr_2fr_2fr] h-[180px] overflow-hidden">
            {PALETTE.map((hex, index) => {
              const isLight = LIGHT_SWATCHES.includes(index);

              return (
                <div key={hex} className="flex flex-col justify-end p-3 md:p-4 min-w-0" style={{ backgroundColor: hex }}>
                  <span className="truncate" style={{ fontSize: '12px', color: isLight ? '#000000' : LS_COLORS.text }}>
                    {t.system.paletteNames[index]}
                  </span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.04em', color: isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(245, 245, 247, 0.45)' }}>
                    {hex}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
          {/* Tipografía */}
          <div className="p-8 md:p-12 sm:border-r" style={{ backgroundColor: LS_COLORS.black, borderColor: 'rgba(255, 255, 255, 0.08)' }}>
            <SectionLabel>{t.system.typography}</SectionLabel>
            <div className="flex items-baseline gap-4">
              <span style={{ fontFamily: PLAYFAIR, fontSize: '64px', fontWeight: 600, lineHeight: 1, color: LS_COLORS.white }}>Aa</span>
              <div>
                <p style={{ fontFamily: PLAYFAIR, fontSize: '18px', fontWeight: 600, color: LS_COLORS.white }}>Playfair Display</p>
                <p style={{ fontSize: '12px', color: LS_COLORS.muted }}>{t.system.typeRoles.display}</p>
              </div>
            </div>
            <div className="mt-6 flex items-baseline gap-4">
              <span style={{ fontFamily: INTER, fontSize: '64px', fontWeight: 600, lineHeight: 1, color: LS_COLORS.lime }}>Aa</span>
              <div>
                <p style={{ fontFamily: INTER, fontSize: '18px', fontWeight: 600, color: LS_COLORS.white }}>Inter</p>
                <p style={{ fontSize: '12px', color: LS_COLORS.muted }}>{t.system.typeRoles.body}</p>
              </div>
            </div>
          </div>

          {/* Componentes */}
          <div className="p-8 md:p-12" style={{ backgroundColor: LS_COLORS.black }}>
            <SectionLabel>{t.system.components}</SectionLabel>
            <p className="mb-3" style={{ fontSize: '12px', color: LS_COLORS.muted }}>
              {t.system.buttons}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full px-6 py-3" style={{ fontFamily: INTER, fontSize: '14px', fontWeight: 600, backgroundColor: LS_COLORS.lime, color: '#0A0A0F' }}>
                {t.system.primary}
              </span>
              <span
                className="rounded-full px-6 py-3"
                style={{
                  fontFamily: INTER,
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: 'rgba(196, 255, 13, 0.9)',
                  color: '#0A0A0F',
                  transform: 'scale(1.03)',
                  boxShadow: '0 0 24px rgba(196, 255, 13, 0.35)',
                }}
              >
                {t.system.hover}
              </span>
            </div>

            <p className="mt-8 mb-3" style={{ fontSize: '12px', color: LS_COLORS.muted }}>
              {t.system.icons}
            </p>
            <div className="flex flex-wrap gap-3">
              {SERVICE_ICONS.map((Icon, index) => (
                <span
                  key={index}
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#1A1A24', border: '1px solid rgba(196, 255, 13, 0.15)', color: LS_COLORS.lime }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
              ))}
              {VALUE_ICONS.map((Icon, index) => (
                <span
                  key={`value-${index}`}
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ border: '1px solid rgba(196, 255, 13, 0.35)', color: LS_COLORS.lime, boxShadow: '0 0 18px rgba(196, 255, 13, 0.18)' }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* 04 · Diseño web */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-[2fr_3fr]" style={{ backgroundColor: LS_COLORS.black }}>
        <div className="p-8 md:p-12 flex items-center">
          <TextBlock label={t.web.label} dark>
            {t.web.text}
          </TextBlock>
        </div>
        <div className="overflow-hidden flex items-center pl-6 sm:pl-0 py-8">
          <img src={LS_IMAGES.desktop} alt={t.web.desktopAlt} className="w-full h-auto" loading="lazy" />
        </div>
      </Reveal>

      {/* 05 · Mobile */}
      <Reveal className="grid grid-cols-1 sm:grid-cols-2" style={{ backgroundColor: LS_COLORS.black, borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
        <div className="flex items-center justify-center py-10 order-2 sm:order-1">
          <img src={LS_IMAGES.mobile} alt={t.mobile.mobileAlt} className="h-[420px] md:h-[520px] w-auto" loading="lazy" />
        </div>
        <div className="p-8 md:p-12 flex items-center order-1 sm:order-2">
          <TextBlock label={t.mobile.label} dark>
            {t.mobile.text}
          </TextBlock>
        </div>
      </Reveal>

      {/* 06 · Resultado */}
      <Reveal className="bg-[#F1F2F4] p-8 md:p-12 min-h-[260px] flex items-center">
        <TextBlock label={t.result.label}>{t.result.text}</TextBlock>
      </Reveal>
    </CaseLayout>
  );
}
