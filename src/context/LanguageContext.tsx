import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDictionary, translations } from '../i18n/translations';

export interface LanguageOption {
  code: Language;
  label: string;
  sublabel: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'as', label: 'অসমীয়া', sublabel: 'Assamese' },
  { code: 'en', label: 'English', sublabel: 'English' },
  { code: 'hi', label: 'हिन्दी', sublabel: 'Hindi' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'axom_language_pref';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === 'en' || saved === 'as' || saved === 'hi')) {
        return saved;
      }
    } catch {
      // ignore storage access issues
    }
    // Default to Assamese or English; let's check
    return 'as';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore storage error
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.en,
    languages: LANGUAGE_OPTIONS,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
