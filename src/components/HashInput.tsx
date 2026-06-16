import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

interface HashInputProps {
  onSubmit: (password: string) => void;
  isLoading: boolean;
}

export function HashInput({ onSubmit, isLoading }: HashInputProps) {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!password || isLoading) return;
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <input
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort eingeben…"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-sm shadow-sm focus:border-gray-900 focus:outline-none"
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-500 hover:text-gray-900"
          aria-label={show ? 'Passwort verbergen' : 'Passwort anzeigen'}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      <button
        type="submit"
        disabled={!password || isLoading}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {isLoading && <Loader2 size={16} className="animate-spin" />}
        {isLoading ? 'Hashe…' : 'Hash berechnen'}
      </button>
    </form>
  );
}
