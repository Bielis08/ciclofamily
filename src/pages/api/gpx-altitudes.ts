import type { APIRoute } from "astro";
import { getGpxAltitudes } from "../../lib/gpx-parser";
import { getGpxFileUrl } from "../../lib/utils";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const gpx = url.searchParams.get("gpx");
  if (!gpx) {
    return new Response(JSON.stringify({ error: "Missing gpx param" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const gpxFileUrl = getGpxFileUrl(gpx);
  const altitudes = await getGpxAltitudes(gpxFileUrl);

  if (!altitudes) {
    return new Response(JSON.stringify({ altMax: null, altMin: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({
      altMax: Math.round(altitudes.altMax),
      altMin: Math.round(altitudes.altMin),
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
