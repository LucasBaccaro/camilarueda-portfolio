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
  behanceUrl?: string;
  // Sitio o app publicada; se muestra como link en el caso de estudio
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'aura-weather',
    title: {
      es: 'Aura Weather',
      en: 'Aura Weather',
    },
    category: {
      es: 'Frontend React · Integración de API · UI',
      en: 'React Frontend · API Integration · UI',
    },
    year: '2026',
    imageUrl: '/aura-weather/soleado.jpeg',
    description: {
      es: 'App del clima en React conectada a la API de OpenWeatherMap, con una interfaz que cambia según el clima de cada búsqueda.',
      en: 'React weather app connected to the OpenWeatherMap API, with an interface that changes with the weather of each search.',
    },
    context: {
      es: 'Práctica de React e integración de API, con un diseño pensado para hacer visible la lógica.',
      en: 'React and API integration practice, with a design meant to make the logic visible.',
    },
    role: {
      es: 'Diseño y desarrollo frontend',
      en: 'Design and frontend development',
    },
    responsibilities: {
      es: ['Desarrollo en React', 'Integración con OpenWeatherMap', 'Diseño de interfaz y estados'],
      en: ['React development', 'OpenWeatherMap integration', 'Interface and states design'],
    },
    outcome: {
      es: 'Una app responsive que traduce datos del clima en estados visuales.',
      en: 'A responsive app that turns weather data into visual states.',
    },
    heroImageUrl: '/aura-weather/soleado.jpeg',
    liveUrl: 'https://aura-weather-murex.vercel.app/',
  },
  {
    id: 'fernando-rueda',
    title: {
      es: 'Fernando Rueda',
      en: 'Fernando Rueda',
    },
    category: {
      es: 'UX/UI · Desarrollo web · Bilingüe',
      en: 'UX/UI · Web development · Bilingual',
    },
    year: '2026',
    imageUrl: '/fernando-rueda/hero.jpg',
    description: {
      es: 'Sitio personal de un director técnico de fútbol: una sola página, bilingüe, con su trayectoria y su forma de jugar.',
      en: 'Personal site for a football coach: a single bilingual page with his career and his way of playing.',
    },
    context: {
      es: 'Presentarse ante clubes y representantes sin depender de un CV en PDF.',
      en: 'Introducing himself to clubs and agents without relying on a PDF CV.',
    },
    role: {
      es: 'Diseño UX/UI y desarrollo web',
      en: 'UX/UI design and web development',
    },
    responsibilities: {
      es: ['Arquitectura de contenido', 'Diseño de interfaz', 'Desarrollo en HTML, CSS y JavaScript'],
      en: ['Content architecture', 'Interface design', 'Development in HTML, CSS and JavaScript'],
    },
    outcome: {
      es: 'Un sitio bilingüe que se actualiza cada vez que cambia de club.',
      en: 'A bilingual site that gets updated every time he changes clubs.',
    },
    heroImageUrl: '/fernando-rueda/hero.jpg',
    liveUrl: 'https://www.fernandoruedagarcia.com',
  },
  {
    id: 'luca-studio',
    title: {
      es: 'Luca Studio',
      en: 'Luca Studio',
    },
    category: {
      es: 'Identidad visual · Diseño web · Estudio de software',
      en: 'Visual identity · Web design · Software studio',
    },
    year: '2026',
    imageUrl: '/luca-studio.jpg',
    description: {
      es: 'Identidad visual y sitio web para un estudio de software.',
      en: 'Visual identity and website for a software studio.',
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
    liveUrl: 'https://www.lucastudio.tech',
    behanceUrl: 'https://www.behance.net/gallery/244101671/Luca-Studio-Agencia-de-soluciones-digitales',
  },
  {
    id: 'pausa-activa',
    title: {
      es: 'Pausa Activa',
      en: 'Pausa Activa',
    },
    category: {
      es: 'UX Research · UX/UI Mobile · Bienestar',
      en: 'UX Research · Mobile UX/UI · Wellness',
    },
    year: '2025',
    imageUrl: '/pausa-activa/pantallas.jpg',
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
    heroImageUrl: '/pausa-activa/pantallas.jpg',
    liveUrl: 'https://www.figma.com/design/IJBdFiyDbyoEagbhkFWeeE/Pausa-activa-App?node-id=0-1',
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
];
