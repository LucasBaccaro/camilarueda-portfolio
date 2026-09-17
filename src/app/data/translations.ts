export const translations = {
  es: {
    nav: {
      work: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      name: 'Camila Rueda',
      role: 'Diseñadora UX/UI & Desarrolladora Frontend',
      specialties: '',
      scroll: 'Scroll para explorar',
    },
    selectedWork: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Soy Camila, diseñadora UX/UI y desarrolladora frontend con base en Buenos Aires. Me encanta llevar productos de la idea a la realidad: diseñar en Figma e implementar en código.',
      paragraph1:
        'Trabajo en todo el proceso: investigación, wireframing, prototipado en Figma y desarrollo. Me interesa entender bien el problema antes de empezar a diseñar, y encontrar soluciones que equilibren lo funcional, lo estético y lo que necesita el negocio.',
      paragraph2:
        'Disfruto trabajar en equipo, compartir ideas y construir productos que tengan impacto real.',
      paragraph3:
        'Hoy busco seguir creciendo en proyectos desafiantes donde el diseño y el desarrollo tengan un rol central.',
    },
    contact: {
      title: 'Contacto',
      description: 'Disponible para proyectos freelance, colaboraciones y oportunidades profesionales.',
      email: 'Email',
      emailAddress: 'ruedaca97@gmail.com',
      social: 'Redes',
    },
    projectDetail: {
      backToWork: '← Volver a trabajo',
      context: 'Contexto',
      role: 'Rol',
      responsibilities: 'Responsabilidades',
      outcome: 'Resultado',
    },
  },
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      name: 'Camila Rueda',
      role: 'UX/UI Designer & Frontend Developer',
      specialties: '',
      scroll: 'Scroll to explore',
    },
    selectedWork: {
      title: 'Selected Work',
      viewProject: 'View project',
    },
    about: {
      title: 'About',
      intro: 'I\'m Camila, a UX/UI designer and frontend developer based in Buenos Aires. I love taking products from idea to reality: designing in Figma and implementing in code.',
      paragraph1: 'I work across the entire process: research, wireframing, prototyping in Figma and development. I believe in understanding the problem well before starting to design, and finding solutions that balance functionality, aesthetics, and business needs.',
      paragraph2: 'I enjoy working in teams, sharing ideas, and building products that have real impact.',
      paragraph3: 'Today I\'m looking to keep growing on challenging projects where design and development play a central role.',
    },
    contact: {
      title: 'Contact',
      description: 'Available for freelance projects, collaborations, and professional opportunities.',
      email: 'Email',
      emailAddress: 'ruedaca97@gmail.com',
      social: 'Social',
    },
    projectDetail: {
      backToWork: '← Back to work',
      context: 'Context',
      role: 'Role',
      responsibilities: 'Responsibilities',
      outcome: 'Outcome',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.es;