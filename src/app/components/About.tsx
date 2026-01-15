import { motion } from 'motion/react';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';
import gradientImage from '@/assets/bff8649efed96038e1f6339224d70791d09e859c.png';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-32 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background gradient image */}
      <div className="absolute inset-0">
        <img
          src={gradientImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay to soften gradient */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2
            className="text-black mb-16 tracking-tight"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {t.about.title}
          </h2>

          <div className="space-y-6">
            <p
              className="text-black/90 tracking-tight"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.about.intro}
            </p>

            <p
              className="text-black/80 tracking-tight"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.about.paragraph1}
            </p>

            <p
              className="text-black/80 tracking-tight"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.about.paragraph2}
            </p>

            <p
              className="text-black/80 tracking-tight"
              style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.7,
              }}
            >
              {t.about.paragraph3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}