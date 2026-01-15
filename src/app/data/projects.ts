export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  category: {
    es: string;
    en: string;
  };
  year: string;
  imageUrl: string;
  description: {
    es: string;
    en: string;
  };
  context: {
    es: string;
    en: string;
  };
  role: {
    es: string;
    en: string;
  };
  responsibilities: {
    es: string[];
    en: string[];
  };
  outcome: {
    es: string;
    en: string;
  };
  heroImageUrl: string;
  behanceUrl: string;
}

export const projects: Project[] = [
  {
    id: 'pausa-activa',
    title: {
      es: 'Pausa Activa',
      en: 'Pausa Activa',
    },
    category: {
      es: 'Mobile UX/UI · Wellness',
      en: 'Mobile UX/UI · Wellness',
    },
    year: '',
    imageUrl: '/pausa-activa.jpeg',
    description: {
      es: 'Diseño de una app para fomentar la actividad física recreativa.',
      en: 'App design to promote recreational physical activity.',
    },
    context: {
      es: 'En entornos laborales sedentarios, la falta de movimiento impacta en la salud y productividad. El objetivo fue crear una solución móvil intuitiva que incentive pausas cortas y efectivas.',
      en: 'In sedentary work environments, lack of movement impacts health and productivity. The goal was to create an intuitive mobile solution that encourages short and effective breaks.',
    },
    role: {
      es: 'UX/UI Designer',
      en: 'UX/UI Designer',
    },
    responsibilities: {
      es: [
        'Investigación de usuarios y benchmarking',
        'Diseño de flujos y arquitectura de información',
        'Diseño de interfaz visual (UI)',
        'Prototipado interactivo',
      ],
      en: [
        'User research and benchmarking',
        'Flow design and information architecture',
        'Visual interface design (UI)',
        'Interactive prototyping',
      ],
    },
    outcome: {
      es: 'Propuesta de diseño centrada en el bienestar, con una interfaz clara y motivadora para los usuarios.',
      en: 'Design proposal focused on wellbeing, with a clear and motivating interface for users.',
    },
    heroImageUrl: '/pausa-activa.jpeg',
    behanceUrl: 'https://www.behance.net/gallery/237381133/Pausa-Activa',
  },
  {
    id: 'airbnb-clon',
    title: {
      es: 'Clon de Airbnb',
      en: 'Airbnb Clone',
    },
    category: {
      es: 'Web UX/UI · Auto Layout',
      en: 'Web UX/UI · Auto Layout',
    },
    year: '',
    imageUrl: '/airbnb.jpeg',
    description: {
      es: 'Proyecto de práctica con auto layout.',
      en: 'Auto layout practice project.',
    },
    context: {
      es: 'Análisis detallado de la experiencia de usuario de Airbnb para identificar puntos de fricción y proponer mejoras en la claridad de la información y facilidad de reserva.',
      en: 'Detailed analysis of Airbnb user experience to identify friction points and propose improvements in information clarity and booking ease.',
    },
    role: {
      es: 'UX/UI Designer',
      en: 'UX/UI Designer',
    },
    responsibilities: {
      es: [
        'Análisis heurístico',
        'Rediseño de flujos críticos',
        'Aplicación de Design System',
        'Testing de usabilidad comparativo',
      ],
      en: [
        'Heuristic analysis',
        'Redesign of critical flows',
        'Design System application',
        'Comparative usability testing',
      ],
    },
    outcome: {
      es: 'Flujos simplificados y una arquitectura de información más robusta que mejora la tasa de conversión simulada.',
      en: 'Simplified flows and a more robust information architecture that improves simulated conversion rate.',
    },
    heroImageUrl: '/airbnb.jpeg',
    behanceUrl: 'https://www.behance.net/gallery/235867707/Clon-de-Airbnb',
  },
  {
    id: 'te-visito',
    title: {
      es: 'Te Visito',
      en: 'Te Visito',
    },
    category: {
      es: 'App Móvil · Social UX',
      en: 'Mobile App · Social UX',
    },
    year: '',
    imageUrl: '/tevisito.jpeg',
    description: {
      es: 'App para conectar personas con servicios de confianza.',
      en: 'App to connect people with trusted services.',
    },
    context: {
      es: 'La soledad en adultos mayores es una problemática creciente. Te Visito busca facilitar la conexión social mediante un sistema seguro de voluntariado y acompañamiento.',
      en: 'Loneliness in older adults is a growing problem. Te Visito seeks to facilitate social connection through a safe volunteering and companionship system.',
    },
    role: {
      es: 'Lead Product Designer',
      en: 'Lead Product Designer',
    },
    responsibilities: {
      es: [
        'Definición estratégica del producto',
        'Entrevistas a profundidad con usuarios reales',
        'Diseño de experiencia punta a punta (Service Design)',
        'Diseño visual y sistema de componentes',
      ],
      en: [
        'Strategic product definition',
        'In-depth interviews with real users',
        'End-to-end experience design (Service Design)',
        'Visual design and component system',
      ],
    },
    outcome: {
      es: 'Un ecosistema digital empático que prioriza la seguridad y la facilidad de uso para todos los rangos etarios.',
      en: 'An empathetic digital ecosystem that prioritizes safety and ease of use for all age groups.',
    },
    heroImageUrl: '/tevisito.jpeg',
    behanceUrl: 'https://www.behance.net/gallery/227053151/Te-Visito',
  },
  {
    id: 'legere',
    title: {
      es: 'Legere',
      en: 'Legere',
    },
    category: {
      es: 'E-commerce · UX Writing',
      en: 'E-commerce · UX Writing',
    },
    year: '',
    imageUrl: '/legere2.jpeg',
    description: {
      es: 'Diseño de una app para la compra y descarga de libros digitales.',
      en: 'App design for digital book purchase and download.',
    },
    context: {
      es: 'Legere nace para transformar la compra de libros online en una experiencia fluida y visualmente atractiva, integrando recomendaciones personalizadas.',
      en: 'Legere was born to transform online book buying into a fluid and visually attractive experience, integrating personalized recommendations.',
    },
    role: {
      es: 'UX/UI Designer',
      en: 'UX/UI Designer',
    },
    responsibilities: {
      es: [
        'Research de mercado y competencia',
        'Arquitectura de información compleja',
        'Diseño de interfaz minimalista y funcional',
        'Prototipado de alta fidelidad',
      ],
      en: [
        'Market and competitive research',
        'Complex information architecture',
        'Minimalist and functional interface design',
        'High-fidelity prototyping',
      ],
    },
    outcome: {
      es: 'Aumento significativo en el engagement de usuarios y una navegación fluida entre categorías y recomendaciones.',
      en: 'Significant increase in user engagement and fluid navigation between categories and recommendations.',
    },
    heroImageUrl: '/legere2.jpeg',
    behanceUrl: 'https://www.behance.net/gallery/218134191/Legere-UX-UI-Camila-Rueda',
  },
];
