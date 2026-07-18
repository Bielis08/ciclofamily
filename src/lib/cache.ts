import fs from "node:fs";
import path from "node:path";
import os from "node:os";

interface CacheEntry<T> {
  data: T;
  expiry: number;
}

const CACHE_DIR = path.join(os.tmpdir(), "ciclofamily-cache");
const DEFAULT_TTL = 60_000;

function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function getCachePath(key: string): string {
  const safe = key.replace(/[^a-zA-Z0-9_-]/g, "_");
  return path.join(CACHE_DIR, `${safe}.json`);
}

export function getCached<T>(key: string): T | null {
  try {
    const filePath = getCachePath(key);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() > entry.expiry) {
      fs.unlinkSync(filePath);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

export function setCached<T>(key: string, data: T, ttl = DEFAULT_TTL): void {
  try {
    ensureCacheDir();
    const entry: CacheEntry<T> = { data, expiry: Date.now() + ttl };
    fs.writeFileSync(getCachePath(key), JSON.stringify(entry), "utf-8");
  } catch {
    // silently fail if filesystem is not available
  }
}

export function invalidateCache(prefix: string): void {
  try {
    ensureCacheDir();
    const files = fs.readdirSync(CACHE_DIR);
    for (const file of files) {
      if (file.startsWith(prefix.replace(/[^a-zA-Z0-9_-]/g, "_"))) {
        fs.unlinkSync(path.join(CACHE_DIR, file));
      }
    }
  } catch {
    // silently fail
  }
}
