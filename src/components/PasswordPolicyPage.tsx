import {
  ShieldCheck,
  UserX,
  Repeat,
  ScrollText,
  Gauge,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { PasswordPolicyBuilder } from './PasswordPolicyBuilder';
import { useT } from '../i18n/I18nContext';
import type { Dict } from '../i18n/translations';

const BENEFIT_ICONS = [UserX, Repeat, ShieldCheck, ScrollText];

const ENTROPY_TABLE: { len: number; cls: string; bits: number; verdict: 'seconds' | 'hours' | 'centuries' | 'unbreakable' }[] = [
  { len: 6,  cls: 'a-z',                 bits: 28,  verdict: 'seconds'    },
  { len: 8,  cls: 'a-z + A-Z + 0-9',     bits: 48,  verdict: 'hours'      },
  { len: 12, cls: 'a-z + A-Z + 0-9',     bits: 71,  verdict: 'centuries'  },
  { len: 16, cls: 'a-z + A-Z + 0-9 + !', bits: 105, verdict: 'unbreakable' },
];

function SectionHeader({ chapter }: { chapter: Dict['policy']['chapters'][number] }) {
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

export function PasswordPolicyPage() {
  const { t } = useT();
  const p = t.policy;
  const C = p.chapters;

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#0E1116]">
      {/* Hero */}
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
            <span className="underline decoration-[#B91C1C] decoration-2 underline-offset-4">{p.intro.math}</span>
            {p.intro.rest}
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] sm:grid-cols-5">
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
        {/* 01 — Definition */}
        <section className="py-16">
          <SectionHeader chapter={C[0]} />
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr]">
            <p className="font-sans text-base leading-relaxed text-[#3F3D38]">{p.s01.body}</p>
            <ul className="space-y-3 font-sans text-sm text-[#0E1116]">
              {p.s01.rows.map(([label, body]) => (
                <li key={label} className="flex gap-3 border-s-2 border-[#0E1116] ps-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0E1116] min-w-[110px]">
                    {label}
                  </span>
                  <span className="text-[#3F3D38]">{body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 02 — Vorteile */}
        <section className="py-16">
          <SectionHeader chapter={C[1]} />
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] sm:grid-cols-2">
            {p.s02.items.map((item, i) => {
              const Icon = BENEFIT_ICONS[i] ?? ShieldCheck;
              return (
                <article key={item.headline} className="bg-[#F7F4ED] p-6">
                  <Icon size={20} className="text-[#B91C1C]" strokeWidth={1.6} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0E1116]">
                    {item.headline}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#3F3D38]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* 03 — Mathematik */}
        <section className="py-16">
          <SectionHeader chapter={C[2]} />
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr]">
            <div>
              <p className="font-sans text-base leading-relaxed text-[#3F3D38]">{p.s03.bodyTop}</p>

              <div className="my-6 rounded border border-[#E8E2D3] bg-white px-6 py-5 font-mono text-center text-lg text-[#0E1116]" dir="ltr">
                {p.s03.formula}
              </div>

              <p className="font-sans text-sm leading-relaxed text-[#3F3D38]">{p.s03.bodyBottom}</p>
            </div>

            <div className="rounded border border-[#0E1116] bg-white">
              <div className="border-b border-[#0E1116] bg-[#0E1116] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F7F4ED]">
                {p.s03.ledger.title}
              </div>
              <table className="w-full font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#E8E2D3] text-[#5A5750]">
                    <th className="px-3 py-2 text-start font-medium">{p.s03.ledger.len}</th>
                    <th className="px-3 py-2 text-start font-medium">{p.s03.ledger.classes}</th>
                    <th className="px-3 py-2 text-end font-medium">{p.s03.ledger.bits}</th>
                    <th className="px-3 py-2 text-end font-medium">{p.s03.ledger.brute}</th>
                  </tr>
                </thead>
                <tbody>
                  {ENTROPY_TABLE.map((row) => {
                    const danger = row.bits < 50;
                    const strong = row.bits >= 80;
                    return (
                      <tr key={row.len} className="border-b border-[#E8E2D3] last:border-b-0">
                        <td className="px-3 py-2.5 text-[#0E1116]">{row.len}</td>
                        <td className="px-3 py-2.5 text-[#3F3D38]" dir="ltr">{row.cls}</td>
                        <td className="px-3 py-2.5 text-end font-bold text-[#0E1116] tabular-nums">
                          {row.bits}
                        </td>
                        <td
                          className={`px-3 py-2.5 text-end ${
                            danger ? 'text-[#B91C1C]' : strong ? 'text-[#15803D]' : 'text-[#5A5750]'
                          }`}
                        >
                          {p.s03.verdicts[row.verdict]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 04 — Builder */}
        <section className="py-16">
          <SectionHeader chapter={C[3]} />
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#3F3D38]">{p.s04.body}</p>

          <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
            <Gauge size={12} />
            {p.s04.live}
          </div>

          <div className="mt-3">
            <PasswordPolicyBuilder />
          </div>
        </section>

        {/* 05 — Best Practices */}
        <section className="py-16">
          <SectionHeader chapter={C[4]} />
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#3F3D38]">{p.s05.body}</p>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded border border-[#E8E2D3] bg-[#E8E2D3] md:grid-cols-2">
            <div className="bg-[#F7F4ED] p-6">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#15803D]">
                {p.s05.doHeader}
              </h3>
              <ul className="mt-4 space-y-3">
                {p.s05.do.map((text) => (
                  <li key={text} className="flex gap-3 font-sans text-sm text-[#0E1116]">
                    <span className="mt-0.5 font-mono text-xs font-bold text-[#15803D]">+</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F7F4ED] p-6">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                {p.s05.dontHeader}
              </h3>
              <ul className="mt-4 space-y-3">
                {p.s05.dont.map((text) => (
                  <li key={text} className="flex gap-3 font-sans text-sm text-[#0E1116]">
                    <span className="mt-0.5 font-mono text-xs font-bold text-[#B91C1C]">−</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex items-start gap-3 rounded border border-[#0E1116] bg-[#0E1116] p-5 text-[#F7F4ED]">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#F7F4ED]" />
            <p className="font-sans text-sm leading-relaxed">
              {p.s05.footnoteWrap(
                p.s05.footnote.input,
                p.s05.footnote.storage,
              )}
            </p>
          </div>
        </section>

        <footer className="border-t border-[#E8E2D3] py-10 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
          {p.footer}
        </footer>
      </main>
    </div>
  );
}
