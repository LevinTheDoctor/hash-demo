import { useEffect, useState } from 'react';
import { BookOpen, FlaskConical, Gauge } from 'lucide-react';
import { HashInput } from './components/HashInput';
import { HashResultCard } from './components/HashResultCard';
import { TimingChart } from './components/TimingChart';
import { AlgorithmExplainer } from './components/AlgorithmExplainer';
import { NavBar, type Route } from './components/NavBar';
import { PasswordPolicyPage } from './components/PasswordPolicyPage';
import { PasswordManagerPage } from './components/PasswordManagerPage';
import { hashAll } from './lib/hashers';
import type { AlgorithmName, HashResult } from './types/hash';
import { I18nProvider, useT } from './i18n/I18nContext';

const ALGORITHMS: AlgorithmName[] = ['SHA-256', 'bcrypt', 'scrypt', 'Argon2id'];

function parseRoute(): Route {
  if (window.location.hash === '#/policy') return 'policy';
  if (window.location.hash === '#/manager') return 'manager';
  return 'hash';
}

function HashPage() {
  const { t } = useT();
  const p = t.hashPage;
  const [results, setResults] = useState<HashResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (password: string) => {
    setIsLoading(true);
    setResults([]);
    const r = await hashAll(password);
    setResults(r);
    setIsLoading(false);
  };

  const sha = results.find((r) => r.algorithm === 'SHA-256');
  const argon = results.find((r) => r.algorithm === 'Argon2id');
  const ratio =
    sha && argon && sha.durationMs > 0
      ? Math.round(argon.durationMs / Math.max(sha.durationMs, 0.1))
      : null;

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#0E1116]">
      {/* Hero — Vol. 02 */}
      <section className="border-b border-[#E8E2D3]">
        <div className="mx-auto max-w-5xl px-4 pt-14 pb-12 sm:px-6">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
            <BookOpen size={12} />
            <span>{p.kicker}</span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#0E1116] sm:text-6xl">
            {p.h1Line1}<br />
            {p.h1Line2}
          </h1>

          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-[#3F3D38]">
            {p.lead}{' '}
            <span className="underline decoration-[#B91C1C] decoration-2 underline-offset-4">
              {p.leadEm}
            </span>
            .
          </p>

          {/* Algorithm index strip */}
          <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] sm:grid-cols-4">
            {ALGORITHMS.map((name, i) => (
              <li key={name} className="bg-[#F7F4ED] px-4 py-4">
                <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#B91C1C]">
                  0{i + 1}
                </p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug text-[#0E1116]">
                  {name}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Properties — three columns */}
        <section className="py-16">
          <div className="flex items-baseline gap-4 border-b border-[#E8E2D3] pb-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#B91C1C]">
              §
            </span>
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
                {p.propsKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#0E1116] sm:text-3xl">
                {p.propsTitle}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] md:grid-cols-3">
            {p.props.map((item) => (
              <article key={item.num} className="bg-[#F7F4ED] p-6">
                <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#B91C1C]">
                  {item.num}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-[#0E1116]">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#3F3D38]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Workshop */}
        <section className="py-16">
          <div className="flex items-baseline gap-4 border-b border-[#E8E2D3] pb-3">
            <FlaskConical size={16} className="text-[#B91C1C]" />
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
                {p.workshopKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#0E1116] sm:text-3xl">
                {p.workshopTitle}
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#3F3D38]">
            {p.workshopHint}
          </p>

          <div className="mt-6">
            <HashInput onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          {/* Receipts */}
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3]">
            {ALGORITHMS.map((name, i) => (
              <HashResultCard
                key={name}
                index={i + 1}
                algorithmName={name}
                result={results.find((r) => r.algorithm === name) ?? null}
                isLoading={isLoading}
              />
            ))}
          </div>

          {results.length === 4 && (
            <div className="mt-12">
              <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
                <Gauge size={12} />
                <span>{p.deltaKicker}</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#0E1116]">
                {p.deltaTitle}
              </h3>

              <div className="mt-4 rounded border border-[#E8E2D3] bg-white p-5">
                <TimingChart results={results} />
              </div>

              {ratio !== null && ratio > 1 && (
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#0E1116]">
                  {p.deltaCaption(ratio.toLocaleString())}
                </p>
              )}
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-[#5A5750]">
                {p.deltaScaleNote}
              </p>
            </div>
          )}
        </section>

        {/* Algorithm explainer */}
        <section className="py-16">
          <div className="flex items-baseline gap-4 border-b border-[#E8E2D3] pb-3">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#B91C1C]">
              ¶
            </span>
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
                {p.algoEntryKicker}
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#0E1116] sm:text-3xl">
                {p.algoTitle}
              </h2>
              <p className="mt-2 font-sans text-sm text-[#5A5750]">
                {p.algoSubtitle}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <AlgorithmExplainer />
          </div>
        </section>

        <footer className="border-t border-[#E8E2D3] py-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
          Hash-Lab Field Guide · {p.kicker.split('·').pop()?.trim()}
        </footer>
      </main>
    </div>
  );
}

function AppShell() {
  const [route, setRoute] = useState<Route>(parseRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (next: Route) => {
    window.location.hash =
      next === 'policy' ? '#/policy' : next === 'manager' ? '#/manager' : '#/';
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="font-sans bg-[#F7F4ED] min-h-screen">
      <NavBar route={route} onNavigate={navigate} />
      {route === 'policy' ? (
        <PasswordPolicyPage />
      ) : route === 'manager' ? (
        <PasswordManagerPage />
      ) : (
        <HashPage />
      )}
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}
