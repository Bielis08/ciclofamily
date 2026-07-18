const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;

export function getDificultadColor(dificultad: string): string {
  if (dificultad === "Moderada") return "/PuntosNaranja.webp";
  if (dificultad === "Difícil") return "/PuntosRojo.webp";
  return "/PuntosVerde.webp";
}

export function getRutaImageUrl(rutaId: string, filename: string): string {
  return `${supabaseUrl}/storage/v1/object/public/rutas-imagenes/${rutaId}/${filename}`;
}

export function getGpxFileUrl(filename: string): string {
  return `${supabaseUrl}/storage/v1/object/public/rutas-gpx/${filename}`;
}
