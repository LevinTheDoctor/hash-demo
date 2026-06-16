import { useEffect, useRef, useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useT } from '../i18n/I18nContext';
import { LANG_META, type Lang } from '../i18n/translations';

const ORDER: Lang[] = ['de', 'ar', 'uk'];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useT();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded px-2 py-1.5 text-[#5A5750] hover:text-[#0E1116]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
      >
        <Globe size={13} />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">{lang}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 mt-2 min-w-[180px] overflow-hidden rounded border border-[#0E1116] bg-[#F7F4ED] shadow-[3px_3px_0_0_#0E1116]"
        >
          {ORDER.map((code) => {
            const meta = LANG_META[code];
            const active = code === lang;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => { setLang(code); setOpen(false); }}
                  className={`flex w-full items-center justify-between gap-3 border-b border-[#E8E2D3] px-3 py-2.5 text-sm last:border-b-0 ${
                    active ? 'bg-[#E8E2D3]/50 text-[#0E1116]' : 'text-[#3F3D38] hover:bg-[#E8E2D3]/40'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#B91C1C]">{code}</span>
                    <span className="font-sans">{meta.native}</span>
                  </span>
                  {active && <Check size={13} className="text-[#0E1116]" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
