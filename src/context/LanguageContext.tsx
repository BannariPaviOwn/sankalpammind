import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'te' | 'ta' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Translate helper.
   * Pass English, Hindi, and optional Telugu, Tamil, Malayalam strings.
   * Falls back to English when a specific language string is missing.
   */
  t: (en: string, hi: string, te?: string, ta?: string, ml?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (en: string, hi: string, te?: string, ta?: string, ml?: string) => {
    switch (language) {
      case 'hi':
        return hi;
      case 'te':
        return te ?? hi ?? en;
      case 'ta':
        return ta ?? hi ?? en;
      case 'ml':
        return ml ?? hi ?? en;
      default:
        return en;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
