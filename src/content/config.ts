import { defineCollection, z } from "astro:content";

const rutas = defineCollection({
    schema: z.object({
        titulo: z.string(),
        url: z.string(),
        portada: z.string(),
        destino: z.string(),
        distancia: z.number(),
        desnivel: z.number(),
        alt_max: z.number(),
        alt_min: z.number(),
        gpx: z.string(),
        wikiloc: z.string(),
        dificultad: z.string(),
    })
})

export const collections = { rutas }