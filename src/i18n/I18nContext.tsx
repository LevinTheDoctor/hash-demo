import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LANG_META, TRANSLATIONS, type Dict, type Lang } from './translations';

interface I18nValue {
  lang: Lang;
  t: Dict;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = 'hashlab.lang';

function loadInitial(): Lang {
  const stored = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Lang | null;
  if (stored && stored in TRANSLATIONS) return stored;
  return 'de';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(loadInitial);

  useEffect(() => {
    const meta = LANG_META[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      t: TRANSLATIONS[lang],
      setLang: (next) => {
        setLangState(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
      },
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useT must be used inside <I18nProvider>');
  return ctx;
}
