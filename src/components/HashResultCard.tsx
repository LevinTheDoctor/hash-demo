import { useState } from 'react';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import type { AlgorithmName, HashResult } from '../types/hash';
import { useT } from '../i18n/I18nContext';

interface HashResultCardProps {
  result: HashResult | null;
  isLoading: boolean;
  algorithmName: AlgorithmName;
  index: number;
}

type Verdict = 'danger' | 'warn' | 'safe';

function verdictFor(ms: number): Verdict {
  if (ms < 5) return 'danger';
  if (ms < 100) return 'warn';
  return 'safe';
}

const STAMP: Record<Verdict, { color: string; border: string }> = {
  danger: { color: 'text-[#B91C1C]', border: 'border-[#B91C1C]' },
  warn:   { color: 'text-[#B45309]', border: 'border-[#B45309]' },
  safe:   { color: 'text-[#15803D]', border: 'border-[#15803D]' },
};

function splitHash(hash: string): { head: string; tail: string; middle: string } {
  if (hash.length <= 24) return { head: hash, tail: '', middle: '' };
  return {
    head: hash.slice(0, 10),
    middle: hash.slice(10, -10),
    tail: hash.slice(-10),
  };
}

export function HashResultCard({ result, isLoading, algorithmName, index }: HashResultCardProps) {
  const { t } = useT();
  const p = t.hashPage;
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    if (!result?.hash) return;
    await navigator.clipboard.writeText(result.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const verdict = result && !result.error ? verdictFor(result.durationMs) : null;
  const stampLabel = verdict === 'danger' ? p.stampDanger : verdict === 'warn' ? p.stampWarn : verdict === 'safe' ? p.stampSafe : null;

  return (
    <article className="bg-[#F7F4ED] p-6">
      {/* Receipt header strip */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-dashed border-[#5A5750]/40 pb-3">
        <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#B91C1C]">
          {p.runIndexLabel} · {String(index).padStart(2, '0')}
        </span>
        <h3 className="font-display text-lg font-semibold text-[#0E1116]">
          {algorithmName}
        </h3>
        {result && !isLoading && !result.error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5750]">
            {result.params}
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-[#E8E2D3]" />
          <div className="h-3 w-3/4 animate-pulse rounded bg-[#E8E2D3]" />
        </div>
      ) : !result ? (
        <p className="mt-4 font-sans text-sm italic text-[#5A5750]">
          {t.hashCard.empty}
        </p>
      ) : result.error ? (
        <p className="mt-4 font-mono text-sm text-[#B91C1C]">
          {t.hashCard.error}: {result.error}
        </p>
      ) : (
        <>
          {/* Stopwatch line */}
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
                {p.deltaTitle.split(' ').pop()}
              </p>
              <p
                className={`font-display text-5xl font-bold tabular-nums leading-none ${STAMP[verdict!].color}`}
                dir="ltr"
              >
                {result.durationMs.toLocaleString('en-US', {
                  maximumFractionDigits: result.durationMs < 10 ? 2 : 0,
                })}
                <span className="ml-1 font-mono text-base font-medium text-[#5A5750]">ms</span>
              </p>
            </div>
            {stampLabel && (
              <span
                className={`inline-flex shrink-0 items-center rounded border-2 ${STAMP[verdict!].border} ${STAMP[verdict!].color} px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] rotate-[-1.5deg]`}
              >
                {stampLabel}
              </span>
            )}
          </div>

          {/* Fingerprint hash */}
          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A5750]">
              {p.fingerprint}
            </p>
            {!expanded ? (
              <div className="mt-1 flex items-center gap-2 font-mono text-sm" dir="ltr">
                {(() => {
                  const s = splitHash(result.hash);
                  return (
                    <>
                      <span className="font-bold text-[#0E1116]">{s.head}</span>
                      {s.middle && (
                        <span className="text-[#5A5750]/60 select-none">··· {s.middle.length} ···</span>
                      )}
                      {s.tail && <span className="font-bold text-[#0E1116]">{s.tail}</span>}
                    </>
                  );
                })()}
              </div>
            ) : (
              <code className="mt-1 block break-all rounded border border-[#E8E2D3] bg-white px-3 py-2 font-mono text-xs text-[#0E1116]" dir="ltr">
                {result.hash}
              </code>
            )}

            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5750] hover:text-[#0E1116]"
                type="button"
              >
                {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                {expanded ? t.hashCard.collapse : t.hashCard.showFull}
              </button>
              <span className="text-[#E8E2D3]">·</span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5750] hover:text-[#0E1116]"
                type="button"
                aria-label={t.hashCard.copyAria}
              >
                {copied ? <Check size={12} className="text-[#15803D]" /> : <Copy size={12} />}
                {copied ? t.hashCard.copied : t.hashCard.copy}
              </button>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
