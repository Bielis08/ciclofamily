import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "sb-auth-token=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
    },
  });
};
