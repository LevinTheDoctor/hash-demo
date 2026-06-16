import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import type { AlgorithmName, HashResult } from '../types/hash';

interface HashResultCardProps {
  result: HashResult | null;
  isLoading: boolean;
  algorithmName: AlgorithmName;
}

function durationStyle(ms: number): { color: string; label: string | null } {
  if (ms < 5) return { color: 'text-red-600', label: 'Gefährlich schnell' };
  if (ms < 500) return { color: 'text-yellow-600', label: null };
  return { color: 'text-green-600', label: 'Sicher langsam' };
}

export function HashResultCard({ result, isLoading, algorithmName }: HashResultCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!result?.hash) return;
    await navigator.clipboard.writeText(result.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{algorithmName}</h3>
        {result && !isLoading && !result.error && (
          (() => {
            const s = durationStyle(result.durationMs);
            return (
              <div className="text-right">
                <div className={`text-sm font-mono ${s.color}`}>{result.durationMs} ms</div>
                {s.label && <div className={`text-xs ${s.color}`}>{s.label}</div>}
              </div>
            );
          })()
        )}
      </div>

      {result && !isLoading && (
        <p className="mt-1 text-xs text-gray-500">{result.params}</p>
      )}

      <div className="mt-3">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-3/4 animate-pulse rounded bg-gray-200" />
          </div>
        ) : !result ? (
          <p className="text-sm text-gray-400 italic">
            Noch kein Hash – Passwort eingeben und berechnen.
          </p>
        ) : result.error ? (
          <p className="text-sm text-red-600">Fehler: {result.error}</p>
        ) : (
          <div className="flex items-center gap-2">
            <code
              title={result.hash}
              className="block flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded bg-gray-50 px-2 py-1.5 font-mono text-xs text-gray-800"
            >
              {result.hash}
            </code>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
              type="button"
              aria-label="Hash kopieren"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Kopiert' : 'Kopieren'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
