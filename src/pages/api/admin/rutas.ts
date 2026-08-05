import type { APIRoute } from "astro";
import { getSupabaseAdmin, getUserFromRequest } from "../../../lib/admin";
import { invalidateCache } from "../../../lib/cache";

export const prerender = false;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const GET: APIRoute = async ({ request }) => {
  const user = await getUserFromRequest(request);
  if (!user) return json({ error: "No autorizado" }, 401);

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("rutas")
    .select("id, titulo, destino, distancia, desnivel, dificultad, portada")
    .order("titulo");

  if (error) return json({ error: error.message }, 500);
  return json(data ?? []);
};

export const POST: APIRoute = async ({ request }) => {
  const user = await getUserFromRequest(request);
  if (!user) return json({ error: "No autorizado" }, 401);

  const formData = await request.formData();
  const titulo = formData.get("titulo") as string;
  const destino = formData.get("destino") as string;
  const distancia = parseFloat(formData.get("distancia") as string);
  const desnivel = parseFloat(formData.get("desnivel") as string);
  const dificultad = formData.get("dificultad") as string;
  const wikiloc = formData.get("wikiloc") as string;
  const descripcion = formData.get("descripcion") as string;
  const gpxFile = formData.get("gpx") as File;
  const galeriaFiles = (formData.getAll("galeria") as File[]).filter((f) => f && f.size > 0);

  if (!titulo || !destino || !dificultad) {
    return json({ error: "Titulo, destino y dificultad son obligatorios" }, 400);
  }

  const supabase = getSupabaseAdmin();
  const rutaId = crypto.randomUUID();

  // Upload GPX
  let gpxFilename = "";
  if (gpxFile && gpxFile.size > 0) {
    gpxFilename = `${rutaId}.gpx`;
    const { error: gpxError } = await supabase.storage
      .from("rutas-gpx")
      .upload(gpxFilename, gpxFile, { contentType: "application/gpx+xml" });
    if (gpxError) return json({ error: `Error subiendo GPX: ${gpxError.message}` }, 500);
  }

  // Upload images: first = portada, rest = gallery
  let portadaFilename = "";
  for (let i = 0; i < galeriaFiles.length; i++) {
    const file = galeriaFiles[i];
    const ext = file.name.split(".").pop() || "webp";
    let filename: string;

    if (i === 0) {
      portadaFilename = `portada.${ext}`;
      filename = portadaFilename;
    } else {
      filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    }

    await supabase.storage
      .from("rutas-imagenes")
      .upload(`${rutaId}/${filename}`, file, { contentType: file.type });
  }

  // Insert in DB
  const { error: dbError } = await supabase.from("rutas").insert({
    id: rutaId,
    titulo,
    destino,
    distancia: isNaN(distancia) ? 0 : distancia,
    desnivel: isNaN(desnivel) ? 0 : desnivel,
    dificultad,
    gpx: gpxFilename,
    wikiloc: wikiloc || "",
    portada: portadaFilename,
    descripcion: descripcion || "",
  });

  if (dbError) return json({ error: `Error en BD: ${dbError.message}` }, 500);

  invalidateCache("rutas");
  return json({ ok: true, id: rutaId });
};

export const PUT: APIRoute = async ({ request }) => {
  const user = await getUserFromRequest(request);
  if (!user) return json({ error: "No autorizado" }, 401);

  const formData = await request.formData();
  const rutaId = formData.get("id") as string;
  if (!rutaId) return json({ error: "ID de ruta requerido" }, 400);

  const supabase = getSupabaseAdmin();
  const updates: Record<string, unknown> = {};

  const titulo = formData.get("titulo") as string;
  const destino = formData.get("destino") as string;
  const distancia = formData.get("distancia") as string;
  const desnivel = formData.get("desnivel") as string;
  const dificultad = formData.get("dificultad") as string;
  const wikiloc = formData.get("wikiloc") as string;
  const descripcion = formData.get("descripcion") as string;

  if (titulo) updates.titulo = titulo;
  if (destino) updates.destino = destino;
  if (distancia) updates.distancia = parseFloat(distancia);
  if (desnivel) updates.desnivel = parseFloat(desnivel);
  if (dificultad) updates.dificultad = dificultad;
  if (wikiloc !== null) updates.wikiloc = wikiloc;
  if (descripcion !== null) updates.descripcion = descripcion;

  // Upload new GPX
  const gpxFile = formData.get("gpx") as File;
  if (gpxFile && gpxFile.size > 0) {
    const gpxFilename = `${rutaId}.gpx`;
    await supabase.storage.from("rutas-gpx").remove([gpxFilename]);
    const { error: gpxError } = await supabase.storage
      .from("rutas-gpx")
      .upload(gpxFilename, gpxFile, { contentType: "application/gpx+xml" });
    if (gpxError) return json({ error: `Error subiendo GPX: ${gpxError.message}` }, 500);
    updates.gpx = gpxFilename;
  }

  // Delete images marked for removal
  const deleteImages = formData.get("deleteImages") as string;
  if (deleteImages) {
    const toDelete = deleteImages.split(",").filter(Boolean);
    if (toDelete.length > 0) {
      await supabase.storage.from("rutas-imagenes").remove(toDelete);
    }
  }

  // Reorder existing images
  const imageOrder = formData.get("imageOrder") as string;
  const orderFilenames = imageOrder ? imageOrder.split(",").filter(Boolean) : [];

  if (orderFilenames.length > 0) {
    // Download all existing images that are in the order list
    const downloads: { originalName: string; bytes: Uint8Array; ext: string }[] = [];
    for (const name of orderFilenames) {
      const { data: fileData } = await supabase.storage
        .from("rutas-imagenes")
        .download(`${rutaId}/${name}`);
      if (fileData) {
        const bytes = new Uint8Array(await fileData.arrayBuffer());
        const ext = name.split(".").pop() || "webp";
        downloads.push({ originalName: name, bytes, ext });
      }
    }

    // Delete all existing images
    const { data: existingFiles } = await supabase.storage.from("rutas-imagenes").list(rutaId);
    if (existingFiles && existingFiles.length > 0) {
      const paths = existingFiles.map((f) => `${rutaId}/${f.name}`);
      await supabase.storage.from("rutas-imagenes").remove(paths);
    }

    // Re-upload in new order: first = portada, rest = gallery
    let newPortada = "";
    for (let i = 0; i < downloads.length; i++) {
      const { bytes, ext } = downloads[i];
      let filename: string;
      if (i === 0) {
        filename = `portada.${ext}`;
        newPortada = filename;
      } else {
        filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      }
      const buf = new ArrayBuffer(bytes.length); new Uint8Array(buf).set(bytes); const blob = new Blob([buf]);
      await supabase.storage
        .from("rutas-imagenes")
        .upload(`${rutaId}/${filename}`, blob, { contentType: `image/${ext}` });
    }
    updates.portada = newPortada;
  } else {
    // No images left
    updates.portada = "";
  }

  // Upload new images (after reordering)
  const galeriaFiles = (formData.getAll("galeria") as File[]).filter((f) => f && f.size > 0);
  for (const file of galeriaFiles) {
    const ext = file.name.split(".").pop() || "webp";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    await supabase.storage
      .from("rutas-imagenes")
      .upload(`${rutaId}/${filename}`, file, { contentType: file.type });
  }

  // If there were no existing images and we just uploaded new ones, set first as portada
  if (orderFilenames.length === 0 && galeriaFiles.length > 0 && !updates.portada) {
    const { data: allFiles } = await supabase.storage.from("rutas-imagenes").list(rutaId);
    const sorted = (allFiles ?? []).sort((a, b) => a.name.localeCompare(b.name));
    if (sorted.length > 0) {
      // Rename first to portada
      const first = sorted[0];
      const ext = first.name.split(".").pop() || "webp";
      const newPortadaName = `portada.${ext}`;
      if (first.name !== newPortadaName) {
        const { data: fileData } = await supabase.storage
          .from("rutas-imagenes")
          .download(`${rutaId}/${first.name}`);
        if (fileData) {
          await supabase.storage.from("rutas-imagenes").remove([`${rutaId}/${first.name}`]);
          await supabase.storage
            .from("rutas-imagenes")
            .upload(`${rutaId}/${newPortadaName}`, fileData, { contentType: fileData.type });
        }
      }
      updates.portada = newPortadaName;
    }
  }

  // Update DB
  const { error: dbError } = await supabase.from("rutas").update(updates).eq("id", rutaId);
  if (dbError) return json({ error: `Error en BD: ${dbError.message}` }, 500);

  invalidateCache("rutas");
  return json({ ok: true });
};

export const DELETE: APIRoute = async ({ request }) => {
  const user = await getUserFromRequest(request);
  if (!user) return json({ error: "No autorizado" }, 401);

  const { rutaId } = await request.json();
  if (!rutaId) return json({ error: "ID de ruta requerido" }, 400);

  const supabase = getSupabaseAdmin();

  // Get ruta data to know filenames
  const { data: ruta } = await supabase.from("rutas").select("gpx, portada").eq("id", rutaId).single();

  // Delete storage files
  if (ruta?.gpx) {
    await supabase.storage.from("rutas-gpx").remove([ruta.gpx]);
  }

  // List and delete all images
  const { data: images } = await supabase.storage.from("rutas-imagenes").list(rutaId);
  if (images && images.length > 0) {
    const paths = images.map((img) => `${rutaId}/${img.name}`);
    await supabase.storage.from("rutas-imagenes").remove(paths);
  }

  // Delete DB record
  const { error } = await supabase.from("rutas").delete().eq("id", rutaId);
  if (error) return json({ error: error.message }, 500);

  invalidateCache("rutas");
  return json({ ok: true });
};