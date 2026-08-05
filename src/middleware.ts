import { defineMiddleware } from "astro:middleware";
import { getUserFromRequest } from "./lib/admin";

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;

  if (!path.startsWith("/admin")) {
    return next();
  }

  if (path === "/admin" || path === "/admin/") {
    const user = await getUserFromRequest(context.request);
    if (user) {
      return context.redirect("/admin/rutas");
    }
    return next();
  }

  const user = await getUserFromRequest(context.request);
  if (!user) {
    return context.redirect("/admin");
  }

  context.locals.user = user;
  return next();
});
