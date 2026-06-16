import {
  BookOpen,
  KeyRound,
  ShieldCheck,
  ServerCog,
  Sparkles,
  ScrollText,
} from 'lucide-react';
import { useT } from '../i18n/I18nContext';
import type { Dict } from '../i18n/translations';

const OPTION_ICONS = [KeyRound, ServerCog, Sparkles];
const TIP_ICONS = [KeyRound, ShieldCheck, ScrollText, Sparkles];

function SectionHeader({ chapter }: { chapter: { num: string; kicker: string; title: string } }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-[#E8E2D3] pb-3">
      <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#B91C1C]">
        {chapter.num}
      </span>
      <div className="flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
          {chapter.kicker}
        </p>
        <h2 className="font-display text-2xl font-semibold text-[#0E1116] sm:text-3xl">
          {chapter.title}
        </h2>
      </div>
    </div>
  );
}

export function PasswordManagerPage() {
  const { t } = useT();
  const m: Dict['manager'] = t.manager;
  const C = m.chapters;

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#0E1116]">
      {/* Hero */}
      <section className="border-b border-[#E8E2D3]">
        <div className="mx-auto max-w-5xl px-4 pt-14 pb-12 sm:px-6">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
            <BookOpen size={12} />
            <span>{m.kicker}</span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#0E1116] sm:text-6xl">
            {m.h1Line1}<br />
            {m.h1Line2}
          </h1>

          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-[#3F3D38]">
            {m.intro.lead}{' '}
            <span className="underline decoration-[#B91C1C] decoration-2 underline-offset-4">
              {m.intro.em}
            </span>
            {m.intro.tail}
          </p>

          <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] sm:grid-cols-4">
            {C.map((c) => (
              <li key={c.num} className="bg-[#F7F4ED] px-4 py-4">
                <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#B91C1C]">
                  {c.num}
                </p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug text-[#0E1116]">
                  {c.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* 01 — Why a manager */}
        <section className="py-16">
          <SectionHeader chapter={{ num: C[0].num, kicker: m.s01.kicker, title: m.s01.title }} />
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#3F3D38]">
            {m.s01.body}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] md:grid-cols-3">
            {m.s01.pillars.map((item) => (
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

        {/* 02 — Private options */}
        <section className="py-16">
          <SectionHeader chapter={{ num: C[1].num, kicker: m.s02.kicker, title: m.s02.title }} />
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#3F3D38]">
            {m.s02.body}
          </p>

          <div className="mt-8 space-y-6">
            {m.s02.options.map((opt, i) => {
              const Icon = OPTION_ICONS[i] ?? KeyRound;
              return (
                <article
                  key={opt.headline}
                  className="rounded border border-[#E8E2D3] bg-white"
                >
                  <header className="flex items-baseline gap-3 border-b border-[#E8E2D3] px-5 py-4">
                    <Icon size={16} className="text-[#B91C1C]" strokeWidth={1.6} />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-[#0E1116]">
                        {opt.headline}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
                        {opt.tagline}
                      </p>
                    </div>
                  </header>
                  <div className="px-5 py-5">
                    <p className="font-sans text-sm leading-relaxed text-[#3F3D38]">
                      {opt.body}
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] md:grid-cols-2">
                      <div className="bg-[#F7F4ED] p-4">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#15803D]">
                          {m.s02.proHeader}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {opt.pros.map((p) => (
                            <li key={p} className="flex gap-2 font-sans text-sm text-[#0E1116]">
                              <span className="mt-0.5 font-mono text-xs font-bold text-[#15803D]">+</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#F7F4ED] p-4">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                          {m.s02.conHeader}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {opt.cons.map((c) => (
                            <li key={c} className="flex gap-2 font-sans text-sm text-[#0E1116]">
                              <span className="mt-0.5 font-mono text-xs font-bold text-[#B91C1C]">−</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 03 — Vendor comparison */}
        <section className="py-16">
          <SectionHeader chapter={{ num: C[2].num, kicker: m.s03.kicker, title: m.s03.title }} />
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#3F3D38]">
            {m.s03.body}
          </p>

          <div className="mt-8 overflow-hidden rounded border border-[#0E1116] bg-white">
            <div className="border-b border-[#0E1116] bg-[#0E1116] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F7F4ED]">
              {m.s03.tableTitle}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#E8E2D3] text-[#5A5750]">
                    <th className="px-3 py-2.5 text-start font-medium">{m.s03.cols.feature}</th>
                    <th className="px-3 py-2.5 text-start font-medium">{m.s03.cols.bitwarden}</th>
                    <th className="px-3 py-2.5 text-start font-medium">{m.s03.cols.onepassword}</th>
                    <th className="px-3 py-2.5 text-start font-medium">{m.s03.cols.nordpass}</th>
                  </tr>
                </thead>
                <tbody>
                  {m.s03.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-[#E8E2D3] last:border-b-0 align-top">
                      <td className="px-3 py-2.5 font-bold text-[#0E1116]">{row.feature}</td>
                      <td className="px-3 py-2.5 text-[#3F3D38]">{row.bitwarden}</td>
                      <td className="px-3 py-2.5 text-[#3F3D38]">{row.onepassword}</td>
                      <td className="px-3 py-2.5 text-[#3F3D38]">{row.nordpass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 max-w-3xl font-sans text-sm leading-relaxed text-[#0E1116]">
            {m.s03.verdict}
          </p>
        </section>

        {/* 04 — Hygiene */}
        <section className="py-16">
          <SectionHeader chapter={{ num: C[3].num, kicker: m.s04.kicker, title: m.s04.title }} />
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[#3F3D38]">
            {m.s04.body}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] sm:grid-cols-2">
            {m.s04.tips.map((tip, i) => {
              const Icon = TIP_ICONS[i] ?? ShieldCheck;
              return (
                <article key={tip.headline} className="bg-[#F7F4ED] p-6">
                  <Icon size={20} className="text-[#B91C1C]" strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0E1116]">
                    {tip.headline}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#3F3D38]">
                    {tip.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <footer className="border-t border-[#E8E2D3] py-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
          {m.footer}
        </footer>
      </main>
    </div>
  );
}
