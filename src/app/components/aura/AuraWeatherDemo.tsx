import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react';
import type { Language } from '@/app/data/translations';
import './aura-weather.css';

export type AuraBackground = 'day' | 'cream' | 'night';

export interface AuraScene {
  id: string;
  city: Record<Language, string>;
  condition: Record<Language, string>;
  temp: number;
  humidity: number;
  wind: number;
  background: AuraBackground;
  sun?: boolean;
  moon?: boolean;
  clouds?: boolean;
  rain?: boolean;
  stars?: boolean;
}

// Mismos resultados que las capturas de la app
export const AURA_SCENES: AuraScene[] = [
  { id: 'valencia', city: { es: 'Valencia', en: 'Valencia' }, condition: { es: 'Cielo claro', en: 'Clear sky' }, temp: 30, humidity: 30, wind: 5, background: 'cream', sun: true },
  { id: 'miami', city: { es: 'Miami', en: 'Miami' }, condition: { es: 'Nubes dispersas', en: 'Scattered clouds' }, temp: 31, humidity: 76, wind: 0, background: 'day', sun: true, clouds: true },
  { id: 'cape-town', city: { es: 'Ciudad Del Cabo', en: 'Cape Town' }, condition: { es: 'Lluvia ligera', en: 'Light rain' }, temp: 28, humidity: 83, wind: 7, background: 'day', clouds: true, rain: true },
  { id: 'seoul', city: { es: 'Seul', en: 'Seoul' }, condition: { es: 'Cielo claro', en: 'Clear sky' }, temp: 16, humidity: 77, wind: 2, background: 'night', moon: true, stars: true },
  { id: 'mumbai', city: { es: 'Mumbai', en: 'Mumbai' }, condition: { es: 'Lluvia ligera', en: 'Light rain' }, temp: 28, humidity: 74, wind: 5, background: 'night', moon: true, clouds: true, rain: true },
];

export const DEMO_TEXT = {
  es: {
    label: 'Animación de Aura Weather: se buscan distintas ciudades y la interfaz cambia según el clima',
    placeholder: 'Ingrese el nombre de la ciudad',
    search: 'Buscar',
    loading: 'Buscando clima...',
    humidity: 'Humedad',
    wind: 'Viento',
  },
  en: {
    label: 'Aura Weather animation: different cities are searched and the interface changes with the weather',
    placeholder: 'Enter a city name',
    search: 'Search',
    loading: 'Fetching weather...',
    humidity: 'Humidity',
    wind: 'Wind',
  },
};

const STAR_POSITIONS = [
  { top: 15, left: '20px' },
  { top: 25, right: '30px' },
  { top: 40, left: '40px' },
  { top: 35, right: '50px' },
  { top: 55, left: '25px' },
  { top: 60, right: '20px' },
  { top: 20, left: '60%' },
  { top: 50, left: '70%' },
];

const DROP_DELAYS = ['0s', '0.15s', '0.4s', '0.25s', '0.55s'];

export function stageClassName(scene: AuraScene | null) {
  const background = scene?.background ?? 'day';
  return `aw-stage is-${background}${scene?.rain ? ' is-rain' : ''}`;
}

export function AuraIllustration({ scene, style }: { scene: AuraScene | null; style?: CSSProperties }) {
  return (
    <div className="aw-illustration" style={style} aria-hidden="true">
      <div className={`aw-sun${scene?.sun ? ' is-on' : ''}`} />
      <div className={`aw-moon${scene?.moon ? ' is-on' : ''}${scene?.rain ? ' is-rain' : ''}`} />

      <div className={`aw-stars${scene?.stars ? ' is-on' : ''}`}>
        {STAR_POSITIONS.map((position, index) => (
          <span
            key={index}
            className="aw-star"
            style={{ ...position, top: `${position.top}px`, animationDelay: `${(index * 0.37) % 1.8}s` }}
          />
        ))}
      </div>

      <div className={`aw-cloud${scene?.clouds ? ' is-on' : ''}`}>
        <span className="aw-cloud-circle aw-cloud-center" />
        <span className="aw-cloud-circle aw-cloud-left" />
        <span className="aw-cloud-circle aw-cloud-right" />
      </div>

      <div className={`aw-rain${scene?.rain ? ' is-on' : ''}`}>
        {DROP_DELAYS.map((delay) => (
          <span key={delay} className="aw-drop" style={{ animationDelay: delay }} />
        ))}
      </div>
    </div>
  );
}

type Phase = 'idle' | 'typing' | 'pressed' | 'loading' | 'result';

const CANVAS_WIDTH = 520;
const CANVAS_HEIGHT = 540;

// Escala un lienzo de medidas fijas para que entre en su contenedor.
// Usa clientWidth/Height para no reaccionar a transforms como el hover de la portada.
export function useFitScale(ref: RefObject<HTMLElement | null>, width: number, height: number, max: number) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resize = () => setScale(Math.min(element.clientWidth / width, element.clientHeight / height, max));
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, width, height, max]);

  return scale;
}

export function AuraWeatherDemo({ language, className = '' }: { language: Language; className?: string }) {
  const t = DEMO_TEXT[language];
  const languageRef = useRef(language);
  languageRef.current = language;
  const stageRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const [scene, setScene] = useState<AuraScene | null>(null);
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');

  const scale = useFitScale(stageRef, CANVAS_WIDTH, CANVAS_HEIGHT, 1.15) * 0.94;

  // Pausa la animación cuando no está en pantalla
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // Secuencia: escribir ciudad → buscar → cargar → mostrar clima
  useEffect(() => {
    let cancelled = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        let remaining = ms;
        let last = performance.now();
        const tick = () => {
          if (cancelled) return;
          const now = performance.now();
          if (visibleRef.current && !document.hidden) remaining -= now - last;
          last = now;
          if (remaining <= 0) resolve();
          else window.setTimeout(tick, 40);
        };
        tick();
      });

    const run = async () => {
      while (!cancelled) {
        setScene(null);
        setTyped('');
        setPhase('idle');
        await wait(1800);

        for (const next of AURA_SCENES) {
          if (cancelled) return;

          // Lee el idioma actual en cada búsqueda para no reiniciar la animación
          const city = next.city[languageRef.current];
          setPhase('typing');
          if (reducedMotion) {
            setTyped(city);
          } else {
            for (let i = 1; i <= city.length; i++) {
              setTyped(city.slice(0, i));
              await wait(85 + Math.random() * 70);
              if (cancelled) return;
            }
          }

          await wait(380);
          setPhase('pressed');
          await wait(200);
          setPhase('loading');
          await wait(900);
          if (cancelled) return;

          setTyped('');
          setScene(next);
          setPhase('result');
          await wait(3400);
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const isInputActive = phase === 'typing' || phase === 'pressed';

  return (
    <div
      ref={stageRef}
      className={`${stageClassName(scene)} ${className}`}
      role="img"
      aria-label={t.label}
    >
      <div
        className="aw-canvas"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
        }}
      >
        <div className="aw-card-wrapper">
          <AuraIllustration scene={scene} />

          <div className="aw-card">
            <span className="aw-brand">Aura Weather</span>

            <div className="aw-form">
              <div className={`aw-input${isInputActive ? ' is-focused' : ''}`}>
                {typed ? (
                  <span>{typed}</span>
                ) : (
                  <span className="aw-placeholder">{t.placeholder}</span>
                )}
                {isInputActive && <span className="aw-caret" />}
              </div>
              <div className={`aw-button${phase === 'pressed' ? ' is-pressed' : ''}`}>
                {phase === 'loading' ? '...' : t.search}
              </div>
            </div>

            <div className="aw-body">
              {phase === 'loading' && (
                <div className="aw-loading">
                  <div className="aw-spinner" />
                  <p className="aw-status">{t.loading}</p>
                </div>
              )}

              {phase !== 'loading' && scene && (
                <div key={scene.id} className="aw-result">
                  <h3 className="aw-city">{scene.city[language]}</h3>
                  <div className="aw-temp-row">
                    <span className="aw-condition">{scene.condition[language]}</span>
                    <span className="aw-temp">{scene.temp}°C</span>
                  </div>
                  <div className="aw-metrics">
                    {t.humidity}: <strong>{scene.humidity}%</strong>
                    <span className="aw-divider">•</span>
                    {t.wind}: <strong>{scene.wind} km/h</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
