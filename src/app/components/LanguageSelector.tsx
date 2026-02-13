import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, languageNames, languageFlags } from '../translations';
import { Globe } from 'lucide-react';

export function LanguageSelector({ variant = 'header' }: { variant?: 'header' | 'mobile' }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['fr', 'en', 'it', 'nl', 'de'];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isMobile = variant === 'mobile';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          isMobile 
            ? 'text-foreground hover:bg-secondary w-full justify-start' 
            : 'text-white hover:bg-white/20'
        }`}
        aria-label="Select language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">
          {languageNames[language]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                language === lang ? 'bg-blue-50' : ''
              }`}
            >
              <span className="text-xl">{languageFlags[lang]}</span>
              <span className="text-sm font-medium">{languageNames[lang]}</span>
              {language === lang && (
                <svg
                  className="w-4 h-4 ml-auto"
                  style={{ color: '#305CDE' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}