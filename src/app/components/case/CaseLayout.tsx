import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';

interface MetaGroup {
  label: string;
  values: readonly string[];
}

interface CaseLayoutProps {
  title: string;
  descriptionLabel: string;
  description: string;
  meta: MetaGroup[];
  // Link al proyecto publicado; no todos los proyectos lo tienen
  link?: { label: string; href?: string };
  // Pieza destacada arriba de todo: animación, portada o maqueta
  intro: ReactNode;
  children: ReactNode;
}

// Columna izquierda fija con los datos del proyecto y bloques con scroll a la derecha
export function CaseLayout({ title, descriptionLabel, description, meta, link, intro, children }: CaseLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      <main className="pt-[73px] lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] max-w-[1600px] mx-auto lg:pr-16">
        <aside className="px-6 md:px-16 pt-14 pb-12 lg:pt-[7vh] lg:sticky lg:top-[73px] lg:self-start lg:h-[calc(100vh-73px)]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h1
              className="text-black mb-[4vh]"
              style={{ fontSize: 'clamp(40px, min(4.2vw, 8vh), 68px)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              {title}
            </h1>

            <p className="text-black/40 mb-2" style={{ fontSize: '14px' }}>
              {descriptionLabel}
            </p>
            <p
              className="text-black max-w-[460px] mb-[4vh]"
              style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', fontWeight: 400, lineHeight: 1.45, letterSpacing: '-0.01em' }}
            >
              {description}
            </p>

            <dl className="grid grid-cols-2 gap-x-10 gap-y-[3vh] max-w-[400px]" style={{ fontSize: '13px', letterSpacing: '0.01em' }}>
              {meta.map((group) => (
                <div key={group.label}>
                  <dt className="text-black/40 mb-2">{group.label}</dt>
                  {group.values.map((value) => (
                    <dd key={value} className="text-black uppercase leading-tight">
                      {value}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>

            {link?.href && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-[4vh] inline-flex items-center gap-2 border-b border-black pb-1 text-black hover:text-[#DDA7CB] hover:border-[#DDA7CB] transition-colors"
                style={{ fontSize: '15px', letterSpacing: '-0.01em', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {link.label}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </motion.div>
        </aside>

        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            {intro}
          </motion.div>
          {children}
        </div>
      </main>
    </motion.div>
  );
}

export function Reveal({
  children,
  className = '',
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function TextBlock({ label, children, dark = false }: { label: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className="max-w-[440px]">
      <p className={`mb-3 ${dark ? 'text-white/45' : 'text-black/40'}`} style={{ fontSize: '14px', letterSpacing: '0.01em' }}>
        {label}
      </p>
      <div
        className={dark ? 'text-white/85' : 'text-black/80'}
        style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.6, letterSpacing: '-0.01em' }}
      >
        {children}
      </div>
    </div>
  );
}

export function SmallLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`absolute top-5 left-5 z-10 ${dark ? 'text-white/50' : 'text-black/40'}`}
      style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
    >
      {children}
    </p>
  );
}
