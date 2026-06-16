import { useState, useCallback, useEffect } from 'react';
import { RefreshCw, Copy, Check, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import { useT } from '../i18n/I18nContext';
import type { Dict } from '../i18n/translations';

interface Policy {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  digits: boolean;
  special: boolean;
}

const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SPECIAL = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function getCharset(policy: Policy): string {
  return (
    (policy.lowercase ? LOWER : '') +
    (policy.uppercase ? UPPER : '') +
    (policy.digits ? DIGITS : '') +
    (policy.special ? SPECIAL : '')
  );
}

function entropyBits(policy: Policy): number {
  const size = getCharset(policy).length;
  if (size === 0) return 0;
  return policy.length * Math.log2(size);
}

interface StrengthInfo {
  label: string;
  color: string;
  bg: string;
  barWidth: string;
}

function strengthInfo(bits: number, b: Dict['builder']): StrengthInfo {
  if (bits < 28) return { label: b.strengthVeryWeak,   color: 'text-red-600',     bg: 'bg-red-500',     barWidth: 'w-1/5' };
  if (bits < 40) return { label: b.strengthWeak,        color: 'text-orange-600',  bg: 'bg-orange-500',  barWidth: 'w-2/5' };
  if (bits < 60) return { label: b.strengthMedium,      color: 'text-yellow-600',  bg: 'bg-yellow-500',  barWidth: 'w-3/5' };
  if (bits < 80) return { label: b.strengthStrong,      color: 'text-green-600',   bg: 'bg-green-500',   barWidth: 'w-4/5' };
  return            { label: b.strengthVeryStrong,    color: 'text-emerald-600', bg: 'bg-emerald-500', barWidth: 'w-full' };
}

interface DurationLabels {
  unbreakable: string;
  lt1s: string;
  sec: string;
  min: string;
  hours: string;
  days: string;
  years: string;
  mYears: string;
  bYears: string;
  locale: string;
}

function formatDuration(seconds: number, d: DurationLabels): string {
  if (!isFinite(seconds) || seconds > 1e30) return d.unbreakable;
  if (seconds < 1) return d.lt1s;
  const fmt = (n: number) => Math.round(n).toLocaleString(d.locale);
  if (seconds < 60) return `${fmt(seconds)} ${d.sec}`;
  if (seconds < 3600) return `${fmt(seconds / 60)} ${d.min}`;
  if (seconds < 86400) return `${fmt(seconds / 3600)} ${d.hours}`;
  if (seconds < 86400 * 365) return `${fmt(seconds / 86400)} ${d.days}`;
  const years = seconds / (86400 * 365.25);
  if (years < 1e6) return `${fmt(years)} ${d.years}`;
  if (years < 1e9) return `${(years / 1e6).toFixed(1)} ${d.mYears}`;
  if (years < 1e12) return `${(years / 1e9).toFixed(1)} ${d.bYears}`;
  return d.unbreakable;
}

function crackTime(policy: Policy, attemptsPerSec: number, d: DurationLabels): string {
  const size = getCharset(policy).length;
  if (size === 0) return '—';
  const combinations = Math.pow(size, policy.length);
  const seconds = combinations / 2 / attemptsPerSec;
  return formatDuration(seconds, d);
}

function pickRandom(chars: string): string {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return chars[arr[0] % chars.length];
}

function generatePassword(policy: Policy): string {
  const charset = getCharset(policy);
  if (!charset || policy.length === 0) return '';

  const required: string[] = [];
  if (policy.lowercase) required.push(pickRandom(LOWER));
  if (policy.uppercase) required.push(pickRandom(UPPER));
  if (policy.digits) required.push(pickRandom(DIGITS));
  if (policy.special) required.push(pickRandom(SPECIAL));

  const remaining = Math.max(0, policy.length - required.length);
  const rest = Array.from({ length: remaining }, () => pickRandom(charset));

  const all = [...required, ...rest];
  const indices = new Uint32Array(all.length);
  crypto.getRandomValues(indices);
  for (let i = all.length - 1; i > 0; i--) {
    const j = indices[i] % (i + 1);
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.join('');
}

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none ${
          checked ? 'bg-gray-900' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform ${
            checked ? 'translate-x-5 rtl:-translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}

const LOCALE_MAP: Record<string, string> = { de: 'de', ar: 'ar', uk: 'uk' };

export function PasswordPolicyBuilder() {
  const { t, lang } = useT();
  const b = t.builder;

  const durationLabels: DurationLabels = {
    unbreakable: b.crackUnbreakable,
    lt1s: b.crackLt1s,
    sec: lang === 'de' ? 'Sek.' : lang === 'ar' ? 'ث' : 'с',
    min: lang === 'de' ? 'Min.' : lang === 'ar' ? 'د' : 'хв',
    hours: lang === 'de' ? 'Std.' : lang === 'ar' ? 'س' : 'год',
    days: lang === 'de' ? 'Tage' : lang === 'ar' ? 'يوم' : 'днів',
    years: lang === 'de' ? 'Jahre' : lang === 'ar' ? 'سنة' : 'років',
    mYears: lang === 'de' ? 'Mio. Jahre' : lang === 'ar' ? 'مليون سنة' : 'млн років',
    bYears: lang === 'de' ? 'Mrd. Jahre' : lang === 'ar' ? 'مليار سنة' : 'млрд років',
    locale: LOCALE_MAP[lang] ?? 'de',
  };

  const SCENARIOS = [
    { label: b.online,         sub: b.onlineSub,         speed: 10 },
    { label: b.offlineBcrypt,  sub: b.offlineBcryptSub,  speed: 100_000 },
    { label: b.offlineSha,     sub: b.offlineShaSub,     speed: 100_000_000_000 },
  ];

  const [policy, setPolicy] = useState<Policy>({
    length: 12,
    lowercase: true,
    uppercase: true,
    digits: true,
    special: false,
  });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const set = useCallback(<K extends keyof Policy>(key: K, value: Policy[K]) => {
    setPolicy((p) => ({ ...p, [key]: value }));
  }, []);

  const generate = useCallback(() => {
    setPassword(generatePassword(policy));
  }, [policy]);

  useEffect(() => {
    setPassword(generatePassword(policy));
  }, [policy]);

  const bits = entropyBits(policy);
  const strength = strengthInfo(bits, b);
  const charsetSize = getCharset(policy).length;
  const atLeastOne = policy.lowercase || policy.uppercase || policy.digits || policy.special;

  const handleCopy = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 bg-gray-50 px-5 py-4">
        <h3 className="font-semibold text-gray-900">{b.title}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{b.subtitle}</p>
      </div>

      <div className="p-5 space-y-6">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">{b.length}</label>
            <span className="text-2xl font-bold text-gray-900 tabular-nums">{policy.length}</span>
          </div>
          <input
            type="range"
            min={4}
            max={64}
            value={policy.length}
            onChange={(e) => set('length', Number(e.target.value))}
            className="w-full accent-gray-900"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>4</span>
            <span>64</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Toggle checked={policy.lowercase} onChange={(v) => set('lowercase', v)} label={b.lowercase} />
          <Toggle checked={policy.uppercase} onChange={(v) => set('uppercase', v)} label={b.uppercase} />
          <Toggle checked={policy.digits}    onChange={(v) => set('digits', v)}    label={b.digits} />
          <Toggle checked={policy.special}   onChange={(v) => set('special', v)}   label={b.special} />
        </div>

        {!atLeastOne && (
          <p className="text-xs text-red-500">{b.pickAtLeastOne}</p>
        )}

        {atLeastOne && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">
                {b.charset}: <strong>{charsetSize}</strong> · {b.entropy}: <strong>{bits.toFixed(0)} Bit</strong>
              </span>
              <span className={`text-xs font-semibold ${strength.color}`}>{strength.label}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-100">
              <div className={`h-2 rounded-full transition-all duration-300 ${strength.bg} ${strength.barWidth}`} />
            </div>
          </div>
        )}

        {atLeastOne && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">{b.crackTime}</p>
            <div className="rounded-lg border border-gray-100 divide-y divide-gray-100 text-sm">
              {SCENARIOS.map((s) => {
                const time = crackTime(policy, s.speed, durationLabels);
                const isDangerous =
                  time === durationLabels.lt1s ||
                  time.endsWith(' ' + durationLabels.sec) ||
                  time.endsWith(' ' + durationLabels.min);
                return (
                  <div key={s.label + s.speed} className="flex items-center justify-between px-3 py-2.5 gap-2">
                    <div>
                      <p className="font-medium text-gray-800">{s.label}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {isDangerous
                        ? <ShieldX size={14} className="text-red-500" />
                        : bits >= 60
                        ? <ShieldCheck size={14} className="text-green-500" />
                        : <ShieldAlert size={14} className="text-yellow-500" />}
                      <span className={`font-mono text-xs font-semibold ${isDangerous ? 'text-red-600' : 'text-gray-700'}`}>
                        {time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {atLeastOne && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{b.generated}</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 break-all rounded bg-white border border-gray-200 px-3 py-2 font-mono text-sm text-gray-900 leading-relaxed">
                {password || '—'}
              </code>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={generate}
                className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 font-medium"
              >
                <RefreshCw size={13} />
                {b.regenerate}
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 font-medium"
              >
                {copied ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
                {copied ? b.copied : b.copy}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
