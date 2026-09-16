import type { Language } from '@/app/data/translations';
import { FernandoHero } from './FernandoRuedaMocks';

export function FernandoRuedaCover({ language }: { language: Language }) {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <FernandoHero language={language} compact />
    </div>
  );
}
