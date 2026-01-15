export const translations = {
  es: {
    nav: {
      work: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      name: 'Camila Rueda',
      role: 'Diseñadora UX/UI',
      specialties: '',
      scroll: 'Scroll para explorar',
    },
    selectedWork: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Soy Camila Rueda, diseñadora UX/UI enfocada en crear experiencias digitales claras, funcionales y centradas en las personas.',
      paragraph1:
        'Diseño interfaces y productos digitales combinando necesidades de usuario, objetivos de negocio y criterio visual. Me interesa especialmente trabajar en soluciones escalables, donde la estrategia, la usabilidad y el diseño se integran de manera coherente.',
      paragraph2:
        'A lo largo de mi recorrido profesional participé en proyectos digitales de distintos contextos, lo que fortaleció mi disciplina de trabajo, mi capacidad de aprendizaje rápido y un enfoque analítico para resolver problemas complejos y transformarlos en experiencias simples e intuitivas. Trabajo en las distintas etapas del proceso de diseño, desde la definición de flujos hasta el diseño de interfaces y la entrega final.',
      paragraph3:
        'Actualmente busco seguir creciendo como diseñadora UX/UI y colaborar en equipos multidisciplinarios en el desarrollo de productos digitales con impacto real.',
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
      role: 'UX/UI Designer',
      specialties: '',
      scroll: 'Scroll to explore',
    },
    selectedWork: {
      title: 'Selected Work',
      viewProject: 'View project',
    },
    about: {
      title: 'About',
      intro: 'I\'m a UX/UI Designer specialized in digital product design, focused on functional interfaces, coherent visual systems, and user-centered experiences.',
      paragraph1: 'My approach combines strategic thinking, visual sensibility, and technical execution. I work from research and problem definition to interface design, prototyping, and collaboration with development.',
      paragraph2: 'I\'ve worked in multidisciplinary teams designing real digital products in business contexts, prioritizing clarity, usability, and scalability.',
      paragraph3: 'My goal is to create solutions that work, that are understandable, and that provide value to both users and product teams.',
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