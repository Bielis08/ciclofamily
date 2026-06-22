import type { ImageMetadata } from "astro";

const rutaImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/Rutas/**/*.{webp}', { eager: true });

export function getRutaImages(titulo: string): ImageMetadata[] {
  const folderName = titulo;
  const prefix = `/src/assets/Rutas/${folderName}/`;

  return Object.entries(rutaImages)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod.default);
}

export function getPortadaImage(titulo: string, portadaPath: string): ImageMetadata | undefined {
  const fileName = portadaPath.split('/').pop();
  if (!fileName) return undefined;

  // The source files are now .webp, but frontmatter may still reference .png/.jpg
  const webpName = fileName.replace(/\.(png|jpe?g)$/i, '.webp');

  const prefix = `/src/assets/Rutas/${titulo}/`;
  const entry = Object.entries(rutaImages).find(
    ([path]) => path.startsWith(prefix) && (path.endsWith(fileName) || path.endsWith(webpName))
  );

  return entry?.[1].default;
}