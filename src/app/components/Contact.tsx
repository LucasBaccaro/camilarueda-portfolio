import { motion } from 'motion/react';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';
import { Mail, Linkedin } from 'lucide-react';

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const t = translations[language];

  return (
    <section id="contact" className="min-h-screen bg-black flex items-center justify-center py-32 px-6 md:px-16">
      <div className="max-w-[900px] mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2
            className="text-white tracking-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {t.contact.title}
          </h2>
          <p
            className="text-white/60 tracking-tight max-w-[600px]"
            style={{
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.7,
            }}
          >
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="space-y-12"
        >
          {/* Email */}
          <div>
            <p
              className="text-white/40 mb-3 tracking-tight"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.02em',
              }}
            >
              {t.contact.email}
            </p>
            <a
              href={`mailto:${t.contact.emailAddress}`}
              className="group flex items-center gap-3 text-white hover:opacity-70 transition-opacity w-fit"
            >
              <Mail size={20} className="opacity-60" />
              <span
                className="tracking-tight"
                style={{
                  fontSize: 'clamp(13px, 1.4vw, 18px)',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                }}
              >
                {t.contact.emailAddress}
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div>
            <p
              className="text-white/40 mb-4 tracking-tight"
              style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.02em',
              }}
            >
              {t.contact.social}
            </p>
            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/ruedacamila"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                }}
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/ruedaca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.25-1.91.25H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.73-.253-.65-.373-1.37-.373-2.16 0-.754.125-1.46.373-2.09.253-.64.614-1.19 1.077-1.67.48-.48 1.047-.86 1.72-1.15.687-.28 1.434-.42 2.272-.42.906 0 1.68.16 2.328.48.655.32 1.19.76 1.6 1.31.42.56.718 1.21.896 1.95.186.74.256 1.54.214 2.4h-7.69c0 .84.28 1.632.71 2.065l-.05-.022zm-10.24-5.347c.4-.287.6-.798.6-1.54 0-.458-.097-.802-.29-1.035-.194-.234-.43-.4-.646-.495-.226-.096-.475-.148-.748-.148H3.463v3.647h2.153c.293 0 .62-.06.876-.174.26-.11.49-.256.69-.543v.288zm.003 5.07c.287-.114.563-.28.768-.5.206-.22.357-.472.443-.752.09-.28.127-.576.127-.89 0-.813-.21-1.42-.63-1.815-.42-.394-1.01-.59-1.776-.59H3.463v4.99h2.73c.29 0 .576-.054.84-.168.27-.11.52-.27.72-.48l-.03.205zm13.607-4.072c-.38-.622-1.044-.932-1.99-.932-.55 0-1.004.13-1.368.39-.366.26-.62.572-.766.94h4.912c-.088-.622-.41-1.076-.788-1.698v.3zm-2.19-8.16h4.932v1.223h-4.932V4.156z" />
                </svg>
                Behance
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-white/10"
        >
          <p
            className="text-white/30 tracking-tight"
            style={{
              fontSize: '13px',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            © 2025 Camila Rueda. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}