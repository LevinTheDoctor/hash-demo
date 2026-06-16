import { Zap, Repeat, MemoryStick, Shield } from 'lucide-react';
import type { AlgorithmName } from '../types/hash';

interface Entry {
  name: AlgorithmName;
  color: string;
  icon: typeof Zap;
  tagline: string;
  how: string;
  verdict: string;
  verdictTone: 'bad' | 'ok' | 'good';
}

const ENTRIES: Entry[] = [
  {
    name: 'SHA-256',
    color: '#E24B4A',
    icon: Zap,
    tagline: 'Schnelle kryptografische Prüfsumme',
    how: 'Das Passwort wird in 512-Bit-Blöcke zerlegt und in 64 Runden durch Bit-Rotationen, XOR und modulare Addition zu einem 256-Bit-Digest verdichtet. Ein einziger Durchlauf, kein Salt, kein einstellbarer Aufwand – auf einer GPU sind Milliarden Versuche pro Sekunde möglich.',
    verdict: 'Für Datei-Integrität gut, für Passwörter ungeeignet.',
    verdictTone: 'bad',
  },
  {
    name: 'bcrypt',
    color: '#378ADD',
    icon: Repeat,
    tagline: 'Iterierte Blowfish-Key-Schedule',
    how: 'Basiert auf dem Blowfish-Verfahren: Aus Passwort und 128-Bit-Salt wird ein Schlüssel-Schedule berechnet und 2^rounds-mal neu aufgesetzt (rounds=10 → 1024 Runden). Jede Erhöhung von rounds verdoppelt die Rechenzeit – Angreifer und Verteidiger zahlen denselben Preis.',
    verdict: 'Solider Klassiker, aber kaum speicher-intensiv – GPU/ASIC-Angriffe bleiben effektiv.',
    verdictTone: 'ok',
  },
  {
    name: 'scrypt',
    color: '#1D9E75',
    icon: MemoryStick,
    tagline: 'Speicher-hartes Key-Stretching',
    how: 'Füllt einen großen RAM-Bereich (über N und r konfigurierbar) mit pseudozufälligen Blöcken und liest danach in unvorhersehbarer Reihenfolge wieder daraus. Wer parallelisieren will, braucht pro Versuch denselben Speicher – auf GPUs/ASICs wird das schnell zum Flaschenhals.',
    verdict: 'Gut gegen GPU-Cracking, etwas älter als Argon2.',
    verdictTone: 'good',
  },
  {
    name: 'Argon2id',
    color: '#639922',
    icon: Shield,
    tagline: 'Gewinner der Password Hashing Competition 2015',
    how: 'Hybride Variante aus Argon2i (datenunabhängig, resistent gegen Seitenkanäle) und Argon2d (datenabhängig, resistent gegen Time-Memory-Trade-offs). Drei Parameter steuern Rechenzeit (t), Speicher (m) und Parallelität (p) – ideal an die jeweilige Hardware anpassbar.',
    verdict: 'Aktuelle Empfehlung von OWASP und IETF (RFC 9106).',
    verdictTone: 'good',
  },
];

const TONE: Record<Entry['verdictTone'], string> = {
  bad: 'text-red-600',
  ok: 'text-yellow-700',
  good: 'text-green-700',
};

export function AlgorithmExplainer() {
  return (
    <div className="space-y-4">
      {ENTRIES.map((e) => {
        const Icon = e.icon;
        return (
          <div
            key={e.name}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: e.color }}
              >
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900">{e.name}</h3>
                <p className="text-xs text-gray-500">{e.tagline}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{e.how}</p>
            <p className={`mt-2 text-xs font-medium ${TONE[e.verdictTone]}`}>
              {e.verdict}
            </p>
          </div>
        );
      })}
    </div>
  );
}
