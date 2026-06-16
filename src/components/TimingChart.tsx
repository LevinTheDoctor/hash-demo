import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import type { HashResult, AlgorithmName } from '../types/hash';

ChartJS.register(CategoryScale, LinearScale, LogarithmicScale, BarElement, Tooltip);

interface TimingChartProps {
  results: HashResult[];
}

const COLORS: Record<AlgorithmName, string> = {
  'SHA-256': '#E24B4A',
  bcrypt: '#378ADD',
  scrypt: '#1D9E75',
  Argon2id: '#639922',
};

const ORDER: AlgorithmName[] = ['SHA-256', 'bcrypt', 'scrypt', 'Argon2id'];

export function TimingChart({ results }: TimingChartProps) {
  if (results.length !== 4) return null;

  const ordered = ORDER.map((name) => results.find((r) => r.algorithm === name)!);

  const data = {
    labels: ordered.map((r) => r.algorithm),
    datasets: [
      {
        data: ordered.map((r) => Math.max(r.durationMs, 0.1)),
        backgroundColor: ordered.map((r) => COLORS[r.algorithm]),
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { x: number } }) => `${Math.round(ctx.parsed.x)} ms`,
        },
      },
    },
    scales: {
      x: {
        type: 'logarithmic' as const,
        ticks: {
          callback: (value: number | string) => {
            const v = typeof value === 'number' ? value : Number(value);
            if (v < 1000) return `${v} ms`;
            return `${v / 1000} s`;
          },
        },
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
