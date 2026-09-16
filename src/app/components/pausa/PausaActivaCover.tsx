import type { Language } from '@/app/data/translations';
import { PA_SCREENS } from './PausaActivaCase';

export function PausaActivaCover(_props: { language: Language }) {
  return (
    <div className="w-full h-full bg-white" aria-hidden="true">
      <img src={PA_SCREENS} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
