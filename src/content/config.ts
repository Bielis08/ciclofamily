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
        dificultad: z.string(),
        color: z.string(),
        bgcolor: z.string(),
        mapa_img: z.string(),
        desnivel_img: z.string()
    })
})

export const collections = { rutas }