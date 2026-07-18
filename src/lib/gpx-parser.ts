import { XMLParser } from "fast-xml-parser";
import { getCached, setCached } from "./cache";

export interface GpxAltitude {
  altMax: number;
  altMin: number;
}

const CACHE_PREFIX = "gpx:alt:";
const CACHE_TTL = 3_600_000;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

function parseEle(raw: unknown): number | null {
  if (typeof raw === "number") return raw;
  if (typeof raw === "string") {
    const n = Number(raw);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}

function extractElevations(node: unknown): number[] {
  const elevations: number[] = [];

  function walk(n: unknown): void {
    if (!n || typeof n !== "object") return;
    const obj = n as Record<string, unknown>;

    const ele = parseEle(obj.ele);
    if (ele !== null) {
      elevations.push(ele);
      return;
    }

    for (const key of Object.keys(obj)) {
      const child = obj[key];
      if (!child || typeof child !== "object") continue;
      if (Array.isArray(child)) {
        child.forEach(walk);
      } else {
        walk(child);
      }
    }
  }

  walk(node);
  return elevations;
}

export async function getGpxAltitudes(gpxUrl: string): Promise<GpxAltitude | null> {
  const cacheKey = CACHE_PREFIX + gpxUrl;
  const cached = getCached<GpxAltitude>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(gpxUrl, { redirect: "follow" });
    if (!response.ok) return null;

    const xml = await response.text();
    const data = parser.parse(xml);

    const elevations = extractElevations(data);
    if (elevations.length === 0) return null;

    const altMax = Math.max(...elevations);
    const altMin = Math.min(...elevations);

    const result: GpxAltitude = { altMax, altMin };
    setCached(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.error("Error parsing GPX:", error);
    return null;
  }
}
