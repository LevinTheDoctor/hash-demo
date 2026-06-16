import { useT } from '../i18n/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export type Route = 'hash' | 'policy';

interface NavBarProps {
  route: Route;
  onNavigate: (route: Route) => void;
}

export function NavBar({ route, onNavigate }: NavBarProps) {
  const { t } = useT();
  const links: { id: Route; label: string; vol: string }[] = [
    { id: 'hash',   label: t.nav.hash,   vol: 'Vol. 02' },
    { id: 'policy', label: t.nav.policy, vol: 'Vol. 01' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E2D3] bg-[#F7F4ED]/90 backdrop-blur supports-[backdrop-filter]:bg-[#F7F4ED]/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate('hash')}
          className="flex items-baseline gap-2 text-left"
        >
          <span className="font-display text-base font-bold tracking-tight text-[#0E1116]">
            {t.nav.brand}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B91C1C]">
            Field Guide
          </span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center">
            {links.map(({ id, label, vol }) => {
              const active = route === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onNavigate(id)}
                  className={`group relative flex items-baseline gap-2 px-3 py-1.5 text-left transition-colors ${
                    active ? 'text-[#0E1116]' : 'text-[#5A5750] hover:text-[#0E1116]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span
                    className={`font-mono text-[10px] font-bold tracking-[0.2em] ${
                      active ? 'text-[#B91C1C]' : 'text-[#5A5750]/70'
                    }`}
                  >
                    {vol}
                  </span>
                  <span className="font-sans text-sm font-medium">{label}</span>
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[17px] h-[2px] bg-[#0E1116]" />
                  )}
                </button>
              );
            })}
          </nav>
          <span className="mx-1 h-5 w-px bg-[#E8E2D3]" />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
