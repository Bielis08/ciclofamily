import { supabase } from "./supabase";
import { getCached, setCached } from "./cache";

export interface RutaBasica {
  id: string;
  titulo: string;
  destino: string;
  distancia: number;
  dificultad: string;
  alt_max: number;
  portada: string;
}

export interface RutaCompleta extends RutaBasica {
  desnivel: number;
  alt_min: number;
  gpx: string;
  wikiloc: string;
  descripcion: string;
}

const CACHE_KEY_ALL = "rutas:all";

export async function getAllRutas(): Promise<RutaBasica[]> {
  const cached = getCached<RutaBasica[]>(CACHE_KEY_ALL);
  if (cached) return cached;

  if (!supabase) return [];

  try {
    const { data } = await supabase
      .from("rutas")
      .select("id, titulo, destino, distancia, dificultad, alt_max, portada")
      .order("titulo");
    const rutas = data ?? [];
    setCached(CACHE_KEY_ALL, rutas, 300_000);
    return rutas;
  } catch (error) {
    console.error("Error al obtener rutas:", error);
    return [];
  }
}

export async function getRutaById(id: string): Promise<RutaCompleta | null> {
  const cacheKey = `ruta:${id}`;
  const cached = getCached<RutaCompleta>(cacheKey);
  if (cached) return cached;

  if (!supabase) return null;

  try {
    const { data } = await supabase
      .from("rutas")
      .select("id, titulo, destino, distancia, desnivel, alt_max, alt_min, gpx, wikiloc, dificultad, portada, descripcion")
      .eq("id", id)
      .single();
    if (data) setCached(cacheKey, data, 600_000);
    return data;
  } catch (error) {
    console.error("Error al obtener ruta:", error);
    return null;
  }
}
