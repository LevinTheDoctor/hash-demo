import bcrypt from 'bcryptjs';
import { scrypt as scryptWasm, argon2id as argon2idWasm } from 'hash-wasm';
import type { HashResult } from '../types/hash';

const randomSalt = (bytes: number): Uint8Array =>
  crypto.getRandomValues(new Uint8Array(bytes));

export async function hashSha256(password: string): Promise<HashResult> {
  const start = performance.now();
  try {
    const encoded = new TextEncoder().encode(password);
    const buffer = await crypto.subtle.digest('SHA-256', encoded);
    const hex = Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return {
      algorithm: 'SHA-256',
      hash: hex,
      durationMs: Math.round(performance.now() - start),
      params: 'Web Crypto API, kein Salt, kein Work-Factor',
    };
  } catch (e) {
    return { algorithm: 'SHA-256', hash: '', durationMs: 0, params: '', error: String(e) };
  }
}

export async function hashBcrypt(password: string): Promise<HashResult> {
  const start = performance.now();
  try {
    const hash = await bcrypt.hash(password, 10);
    return {
      algorithm: 'bcrypt',
      hash,
      durationMs: Math.round(performance.now() - start),
      params: 'rounds=10, Salt integriert',
    };
  } catch (e) {
    return { algorithm: 'bcrypt', hash: '', durationMs: 0, params: '', error: String(e) };
  }
}

export async function hashScrypt(password: string): Promise<HashResult> {
  const start = performance.now();
  try {
    const salt = randomSalt(16);
    const hash = await scryptWasm({
      password,
      salt,
      costFactor: 16384,
      blockSize: 8,
      parallelism: 1,
      hashLength: 32,
      outputType: 'hex',
    });
    return {
      algorithm: 'scrypt',
      hash,
      durationMs: Math.round(performance.now() - start),
      params: 'N=16384, r=8, p=1 (WASM)',
    };
  } catch (e) {
    return { algorithm: 'scrypt', hash: '', durationMs: 0, params: '', error: String(e) };
  }
}

export async function hashArgon2id(password: string): Promise<HashResult> {
  const start = performance.now();
  try {
    const salt = randomSalt(16);
    const hash = await argon2idWasm({
      password,
      salt,
      parallelism: 1,
      iterations: 3,
      memorySize: 32768,
      hashLength: 32,
      outputType: 'encoded',
    });
    return {
      algorithm: 'Argon2id',
      hash,
      durationMs: Math.round(performance.now() - start),
      params: 't=3, m=32 MB, p=1 (WASM, PHC-Format)',
    };
  } catch (e) {
    return { algorithm: 'Argon2id', hash: '', durationMs: 0, params: '', error: String(e) };
  }
}

export async function hashAll(password: string): Promise<HashResult[]> {
  const results: HashResult[] = [];
  results.push(await hashSha256(password));
  results.push(await hashBcrypt(password));
  results.push(await hashScrypt(password));
  results.push(await hashArgon2id(password));
  return results;
}
