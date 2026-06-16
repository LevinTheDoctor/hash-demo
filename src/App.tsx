import { useState } from 'react';
import { HashInput } from './components/HashInput';
import { HashResultCard } from './components/HashResultCard';
import { TimingChart } from './components/TimingChart';
import { hashAll } from './lib/hashers';
import type { AlgorithmName, HashResult } from './types/hash';

const ALGORITHMS: AlgorithmName[] = ['SHA-256', 'bcrypt', 'scrypt', 'Argon2id'];

export default function App() {
  const [results, setResults] = useState<HashResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (password: string) => {
    setIsLoading(true);
    setResults([]);
    const r = await hashAll(password);
    setResults(r);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Hash Demo Logo" className="h-12 w-12" />
          <h1 className="text-3xl font-bold tracking-tight">
            Hash-Algorithmen im Vergleich
          </h1>
        </div>
        <p className="mt-3 text-gray-600">
          SHA-256 ist eine schnelle Prüfsummen-Funktion und für Passwörter ungeeignet –
          moderne GPUs probieren damit Milliarden Kandidaten pro Sekunde. bcrypt, scrypt
          und Argon2id sind absichtlich langsam und speicher-hungrig.
        </p>

        <div className="mt-8">
          <HashInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {ALGORITHMS.map((name) => (
            <HashResultCard
              key={name}
              algorithmName={name}
              result={results.find((r) => r.algorithm === name) ?? null}
              isLoading={isLoading}
            />
          ))}
        </div>

        {results.length === 4 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Zeitmessung</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <TimingChart results={results} />
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Hinweis: bcrypt und Argon2id laufen hier als WASM/JS im Browser.
              Server-seitige native Implementierungen sind schneller, aber das
              Verhältnis zu SHA-256 bleibt gleich.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
