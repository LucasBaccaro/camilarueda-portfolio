import { motion } from 'motion/react';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-32 px-6 md:px-16 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

        {/* Texto a la izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1"
        >
          <h2
            className="text-white mb-12 tracking-tight"
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
              className="text-white/90 tracking-tight"
              style={{
                fontSize: 'clamp(15px, 1.6vw, 19px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                lineHeight: 1.75,
              }}
            >
              Soy Camila, diseñadora UX/UI con base en Buenos Aires. Me gusta crear productos digitales claros, simples y lindos de usar, prestando atención tanto a la experiencia como a los detalles visuales.
            </p>

            <p
              className="text-white/75 tracking-tight"
              style={{
                fontSize: 'clamp(15px, 1.6vw, 19px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                lineHeight: 1.75,
              }}
            >
              Trabajo en todo el proceso de diseño: desde pensar la estructura y los flujos hasta diseñar la interfaz final. Me interesa entender bien el problema antes de empezar a diseñar, y encontrar soluciones que equilibren lo funcional, lo estético y lo que necesita el negocio.
            </p>

            <p
              className="text-white/75 tracking-tight"
              style={{
                fontSize: 'clamp(15px, 1.6vw, 19px)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                lineHeight: 1.75,
              }}
            >
              Disfruto trabajar en equipo, compartir ideas y construir productos que tengan impacto real. Hoy busco seguir creciendo como diseñadora y sumarme a proyectos desafiantes donde el diseño tenga un rol central.
            </p>
          </div>
        </motion.div>

        {/* Foto a la derecha con marco pincel hand-drawn */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="flex-shrink-0 relative"
          style={{ width: 'clamp(220px, 28vw, 360px)' }}
        >
          <div className="relative">
            <img
              src="/Foto.jpeg"
              alt="Camila Rueda"
              className="w-full object-cover block"
              style={{ aspectRatio: '3/4', objectPosition: 'top' }}
            />
            {/* Marco SVG pincel hand-drawn superpuesto — pegado al borde */}
            <svg
              viewBox="0 0 360 480"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full"
              style={{ pointerEvents: 'none', top: 0, left: 0 }}
            >
              {/* Trazo superior */}
              <path
                d="M 2,2 C 40,0 80,4 120,1 C 160,-2 200,3 240,1 C 280,-1 320,3 358,2"
                fill="none" stroke="#EBDECB" strokeWidth="4"
                strokeLinecap="round" strokeLinejoin="round"
              />
              {/* Trazo inferior */}
              <path
                d="M 2,478 C 50,475 90,480 130,477 C 170,474 210,479 250,476 C 295,473 325,478 358,477"
                fill="none" stroke="#EBDECB" strokeWidth="4"
                strokeLinecap="round" strokeLinejoin="round"
              />
              {/* Trazo izquierdo */}
              <path
                d="M 2,2 C 0,60 4,120 1,180 C -2,240 3,300 1,360 C -1,410 3,445 2,478"
                fill="none" stroke="#EBDECB" strokeWidth="4"
                strokeLinecap="round" strokeLinejoin="round"
              />
              {/* Trazo derecho */}
              <path
                d="M 358,2 C 361,60 357,120 360,180 C 363,240 358,300 361,360 C 364,410 359,445 358,478"
                fill="none" stroke="#EBDECB" strokeWidth="4"
                strokeLinecap="round" strokeLinejoin="round"
              />
              {/* Segundo trazo fino — efecto pincel doble */}
              <path
                d="M 2,6 C 40,4 80,8 120,5 C 160,2 200,7 240,5 C 280,3 320,7 358,6"
                fill="none" stroke="#EBDECB" strokeWidth="1.2" strokeOpacity="0.45"
                strokeLinecap="round"
              />
              <path
                d="M 2,474 C 50,471 90,476 130,473 C 170,470 215,475 255,472 C 295,469 328,474 358,473"
                fill="none" stroke="#EBDECB" strokeWidth="1.2" strokeOpacity="0.45"
                strokeLinecap="round"
              />
              <path
                d="M 6,2 C 4,60 8,120 5,180 C 2,240 7,300 5,360 C 3,410 7,445 6,478"
                fill="none" stroke="#EBDECB" strokeWidth="1.2" strokeOpacity="0.45"
                strokeLinecap="round"
              />
              <path
                d="M 354,2 C 357,60 353,120 356,180 C 359,240 354,300 357,360 C 360,410 355,445 354,478"
                fill="none" stroke="#EBDECB" strokeWidth="1.2" strokeOpacity="0.45"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
