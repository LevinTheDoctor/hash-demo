export type AlgorithmName = 'SHA-256' | 'bcrypt' | 'scrypt' | 'Argon2id';

export interface HashResult {
  algorithm: AlgorithmName;
  hash: string;
  durationMs: number;
  params: string;
  error?: string;
}
