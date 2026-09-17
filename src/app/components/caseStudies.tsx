import type { ComponentType } from 'react';
import type { Language } from '@/app/data/translations';
import { AuraWeatherCase } from '@/app/components/aura/AuraWeatherCase';
import { AuraWeatherCover } from '@/app/components/aura/AuraWeatherCover';
import { AirbnbCase } from '@/app/components/airbnb/AirbnbCase';
import { FernandoRuedaCase } from '@/app/components/fernando/FernandoRuedaCase';
import { FernandoRuedaCover } from '@/app/components/fernando/FernandoRuedaCover';
import { LucaStudioCase } from '@/app/components/luca/LucaStudioCase';
import { PausaActivaCase } from '@/app/components/pausa/PausaActivaCase';
import { PausaActivaCover } from '@/app/components/pausa/PausaActivaCover';

interface CaseStudy {
  Page: ComponentType<{ language: Language }>;
  // Portada propia para la tarjeta de la grilla (si no, usa imageUrl)
  Cover?: ComponentType<{ language: Language }>;
}

// Proyectos con caso de estudio propio; los demás abren Behance
export const CASE_STUDIES: Record<string, CaseStudy> = {
  'aura-weather': { Page: AuraWeatherCase, Cover: AuraWeatherCover },
  'airbnb-clon': { Page: AirbnbCase },
  'fernando-rueda': { Page: FernandoRuedaCase, Cover: FernandoRuedaCover },
  'luca-studio': { Page: LucaStudioCase },
  'pausa-activa': { Page: PausaActivaCase, Cover: PausaActivaCover },
};
