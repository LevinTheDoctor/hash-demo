import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react';
import { useT } from '../i18n/I18nContext';

interface HashInputProps {
  onSubmit: (password: string) => void;
  isLoading: boolean;
}

export function HashInput({ onSubmit, isLoading }: HashInputProps) {
  const { t } = useT();
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!password || isLoading) return;
    onSubmit(password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded border border-[#0E1116] bg-white p-4 sm:flex-row sm:items-stretch"
    >
      <div className="relative flex-1">
        <input
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t.hashInput.placeholder}
          className="w-full bg-transparent px-1 py-3 font-mono text-base text-[#0E1116] placeholder:text-[#5A5750]/70 focus:outline-none"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute end-0 top-1/2 -translate-y-1/2 rounded p-1.5 text-[#5A5750] hover:text-[#0E1116]"
          aria-label={show ? t.hashInput.hide : t.hashInput.show}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      <button
        type="submit"
        disabled={!password || isLoading}
        className="inline-flex items-center justify-center gap-2 rounded bg-[#0E1116] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F7F4ED] transition hover:bg-[#B91C1C] disabled:cursor-not-allowed disabled:bg-[#E8E2D3] disabled:text-[#5A5750]"
      >
        {isLoading
          ? <><Loader2 size={14} className="animate-spin" />{t.hashInput.loading}</>
          : <>{t.hashInput.submit}<ArrowRight size={14} /></>}
      </button>
    </form>
  );
}
