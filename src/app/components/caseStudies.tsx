import type { ComponentType } from 'react';
import type { Language } from '@/app/data/translations';
import { AuraWeatherCase } from '@/app/components/aura/AuraWeatherCase';
import { AuraWeatherCover } from '@/app/components/aura/AuraWeatherCover';

interface CaseStudy {
  Page: ComponentType<{ language: Language }>;
  // Portada propia para la tarjeta de la grilla (si no, usa imageUrl)
  Cover?: ComponentType<{ language: Language }>;
}

// Proyectos con caso de estudio propio; los demás abren Behance
export const CASE_STUDIES: Record<string, CaseStudy> = {
  'aura-weather': { Page: AuraWeatherCase, Cover: AuraWeatherCover },
};
