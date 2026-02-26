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
    id: 'luca-studio',
    title: {
      es: 'Luca Studio',
      en: 'Luca Studio',
    },
    category: {
      es: 'Branding · UX/UI · Agencia Digital',
      en: 'Branding · UX/UI · Digital Agency',
    },
    year: '',
    imageUrl: '/luca-studio.jpg',
    description: {
      es: 'Diseño de identidad y experiencia digital para una agencia de soluciones digitales.',
      en: 'Identity and digital experience design for a digital solutions agency.',
    },
    context: {
      es: 'Luca Studio es una agencia de soluciones digitales que necesitaba una identidad visual sólida y una experiencia de usuario coherente para comunicar su propuesta de valor de forma clara y profesional.',
      en: 'Luca Studio is a digital solutions agency that needed a strong visual identity and a coherent user experience to communicate their value proposition clearly and professionally.',
    },
    role: {
      es: 'UX/UI Designer',
      en: 'UX/UI Designer',
    },
    responsibilities: {
      es: [
        'Definición de identidad visual y branding',
        'Diseño de experiencia y flujos de usuario',
        'Diseño de interfaz web',
        'Prototipado de alta fidelidad',
      ],
      en: [
        'Visual identity and branding definition',
        'User experience and flow design',
        'Web interface design',
        'High-fidelity prototyping',
      ],
    },
    outcome: {
      es: 'Una identidad digital coherente y una interfaz que refleja los valores de la agencia, mejorando su presencia online y la percepción de marca.',
      en: 'A coherent digital identity and interface that reflects the agency\'s values, improving their online presence and brand perception.',
    },
    heroImageUrl: '/luca-studio.jpg',
    behanceUrl: 'https://www.behance.net/gallery/244101671/Luca-Studio-Agencia-de-soluciones-digitales',
  },
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
