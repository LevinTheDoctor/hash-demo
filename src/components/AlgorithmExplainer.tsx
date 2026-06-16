import type { AlgorithmName } from '../types/hash';
import { useT } from '../i18n/I18nContext';

type Tone = 'bad' | 'ok' | 'good';

interface Entry {
  name: AlgorithmName;
  num: string;
  key: 'sha256' | 'bcrypt' | 'scrypt' | 'argon';
  verdictTone: Tone;
}

const ENTRIES: Entry[] = [
  { name: 'SHA-256',  num: '01', key: 'sha256', verdictTone: 'bad'  },
  { name: 'bcrypt',   num: '02', key: 'bcrypt', verdictTone: 'ok'   },
  { name: 'scrypt',   num: '03', key: 'scrypt', verdictTone: 'good' },
  { name: 'Argon2id', num: '04', key: 'argon',  verdictTone: 'good' },
];

const TONE: Record<Tone, string> = {
  bad:  'text-[#B91C1C] border-[#B91C1C]',
  ok:   'text-[#B45309] border-[#B45309]',
  good: 'text-[#15803D] border-[#15803D]',
};

export function AlgorithmExplainer() {
  const { t } = useT();
  const labels = t.hashPage.algoLabels;

  return (
    <div className="space-y-12">
      {ENTRIES.map((e, idx) => {
        const copy = t.algos[e.key];
        return (
          <article key={e.name} className={idx > 0 ? 'border-t border-[#E8E2D3] pt-12' : ''}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[140px_1fr]">
              {/* Left: chapter number */}
              <div>
                <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#B91C1C]">
                  {e.num}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#0E1116]">
                  {e.name}
                </h3>
                <p className="mt-1 font-sans text-xs leading-snug text-[#5A5750]">
                  {copy.tagline}
                </p>
              </div>

              {/* Right: content */}
              <div>
                <p className="font-sans text-base leading-relaxed text-[#3F3D38]">
                  {copy.how}
                </p>

                {/* Metadata ledger */}
                <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <MetaRow label={labels.year}     value={copy.year} />
                  <MetaRow label={labels.designer} value={copy.designer} />
                  <MetaRow label={labels.params}   value={copy.params} />
                  <MetaRow label={labels.used}     value={copy.used} />
                </dl>

                {/* Verdict stamp */}
                <p
                  className={`mt-6 inline-block border-l-2 ${TONE[e.verdictTone]} ps-3 font-mono text-[11px] font-bold uppercase tracking-[0.15em]`}
                >
                  {copy.verdict}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[#E8E2D3] pt-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5750]">
        {label}
      </dt>
      <dd className="mt-1 font-sans text-sm text-[#0E1116]">{value}</dd>
    </div>
  );
}
