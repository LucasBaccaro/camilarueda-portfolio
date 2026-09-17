import { motion } from 'motion/react';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';
import { Mail, Linkedin, Github } from 'lucide-react';

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
                href="https://github.com/ruedaca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                }}
              >
                <Github size={18} />
                GitHub
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