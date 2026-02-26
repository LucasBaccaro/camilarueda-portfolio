import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Language } from '@/app/data/translations';
import { translations } from '@/app/data/translations';
import { Menu, X, Globe } from 'lucide-react';
import { Flower } from '@/app/components/Flower';

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Navigation({ language, onLanguageChange, onNavigate, currentSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const t = translations[language];

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileNavigate = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-6 flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => onNavigate('hero')}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            className="tracking-tight transition-all cursor-pointer flex items-center"
            style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', fontFamily: 'Space Grotesk, sans-serif', color: isLogoHovered ? '#DDA7CB' : 'white' }}
          >
            CR<Flower size={9} color={isLogoHovered ? '#DDA7CB' : 'white'} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => onNavigate('work')}
              className="text-white tracking-tight transition-all hover:text-[#DDA7CB] hover:font-medium cursor-pointer"
              style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.01em', fontFamily: 'Space Grotesk, sans-serif', cursor: 'pointer' }}
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-white tracking-tight transition-all hover:text-[#DDA7CB] hover:font-medium cursor-pointer"
              style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.01em', fontFamily: 'Space Grotesk, sans-serif', cursor: 'pointer' }}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-white tracking-tight transition-all hover:text-[#DDA7CB] hover:font-medium cursor-pointer"
              style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.01em', fontFamily: 'Space Grotesk, sans-serif', cursor: 'pointer' }}
            >
              {t.nav.contact}
            </button>

            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              style={{ fontSize: '13px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              <Globe size={14} />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => handleMobileNavigate('work')}
              className="text-white text-3xl font-light tracking-tight"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => handleMobileNavigate('about')}
              className="text-white text-3xl font-light tracking-tight"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleMobileNavigate('contact')}
              className="text-white text-3xl font-light tracking-tight"
            >
              {t.nav.contact}
            </button>

            <button
              onClick={() => {
                const newLang = language === 'es' ? 'en' : 'es';
                onLanguageChange(newLang);
                // We keep it open for a moment so they see the change? 
                // No, let's just change and close.
                setIsMobileMenuOpen(false);
              }}
              className="mt-8 flex items-center gap-3 text-white transition-colors"
              style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.02em' }}
            >
              <Globe size={18} className="text-[#b19ef5]" />
              <span>{language === 'es' ? 'English' : 'Español'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}