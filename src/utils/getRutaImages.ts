import fs from 'fs';
import path from 'path';

export function getRutaImages(titulo: string): string[] {
  const baseDir = path.join(process.cwd(), 'public', 'Rutas');
  const dir = path.join(baseDir, titulo); // Usa directamente el título como nombre de carpeta

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .map((file) => `/Rutas/${encodeURIComponent(titulo)}/${file}`)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}