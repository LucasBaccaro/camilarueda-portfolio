import { useRef } from 'react';
import type { Language } from '@/app/data/translations';
import { AURA_SCENES, AuraIllustration, DEMO_TEXT, stageClassName, useFitScale, type AuraScene } from './AuraWeatherDemo';

// Lienzo de la portada: tarjeta de 440px con la ilustración asomando arriba
const PANEL_WIDTH = 480;
const PANEL_HEIGHT = 480;

const COVER_SCENE = AURA_SCENES.find((scene) => scene.id === 'valencia')!;

function CoverPanel({ scene, language }: { scene: AuraScene; language: Language }) {
  const panelRef = useRef<HTMLDivElement>(null);
  // Deja aire alrededor ahora que la tarjeta ocupa toda la portada
  const scale = useFitScale(panelRef, PANEL_WIDTH, PANEL_HEIGHT, 1) * 0.86;
  const t = DEMO_TEXT[language];

  return (
    <div ref={panelRef} className={stageClassName(scene)}>
      <div
        className="aw-canvas"
        style={{ transform: `translate(-50%, -50%) scale(${scale})`, width: PANEL_WIDTH, height: PANEL_HEIGHT }}
      >
        <div className="aw-card-wrapper" style={{ top: 150, left: 20 }}>
          <AuraIllustration scene={scene} />

          <div className="aw-card">
            <span className="aw-brand">Aura Weather</span>

            <div className="aw-form">
              <div className="aw-input">
                <span className="aw-placeholder">{t.placeholder}</span>
              </div>
              <div className="aw-button">{t.search}</div>
            </div>

            <div className="aw-result" style={{ animation: 'none' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuraWeatherCover({ language }: { language: Language }) {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <CoverPanel scene={COVER_SCENE} language={language} />
    </div>
  );
}
