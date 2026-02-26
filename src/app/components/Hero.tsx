import { motion } from 'motion/react';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';
import { Flower } from '@/app/components/Flower';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-16 text-center"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <h1
            className="mb-6 tracking-tight text-white inline-flex items-center justify-center gap-3"
            style={{
              fontSize: 'clamp(48px, 8vw, 120px)',
              fontWeight: 400,
              letterSpacing: '-0.06em',
              lineHeight: 0.95,
            }}
          >
            {t.hero.name}
            <Flower size={22} color="white" />
          </h1>
          <p
            className="tracking-tight"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 32px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#DDA7CB',
            }}
          >
            {t.hero.role}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="mt-12"
        >
          <p
            className="text-white/70 tracking-tight"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            {t.hero.specialties}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p
          className="tracking-tight"
          style={{
            color: '#EBDECB',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.05em',
            fontFamily: 'Space Grotesk, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          {t.hero.scroll}
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5L10 15M10 15L14 11M10 15L6 11"
              stroke="#EBDECB"
              strokeOpacity="0.9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
