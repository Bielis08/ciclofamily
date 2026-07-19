# Ciclo Family

Sitio web para **encontrar rutas en bicicleta para familias** por la zona del **Vallès Occidental** (actualmente), en Catalunya.

🔗 **Demo en vivo:** [ciclofamily.vercel.app](https://ciclofamily.vercel.app)

---

## Características principales

- **Rutas de cicloturismo familiar** con información detallada (distancia, desnivel, dificultad)
- **SEO optimizado** con Structured Data JSON-LD, Open Graph y sitemap automático
- **Diseño responsive** (mobile-first) con TailwindCSS v4
- **Galería de imágenes** de cada ruta
- **Descarga de archivos GPX** para navegación GPS
- **Formulario de contacto** integrado con FormSubmit.co
- **Analytics** con Vercel Analytics + Umami

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| [Astro](https://astro.build) | 7.1.0 | Framework SSR (Server-Side Rendering) |
| [TypeScript](https://www.typescriptlang.org) | 5.6.3 | Tipado estático |
| [TailwindCSS](https://tailwindcss.com) | 4.1.11 | Framework CSS utility-first |
| [Supabase](https://supabase.com) | 2.108.2 | Base de datos PostgreSQL + Storage |
| [Vercel](https://vercel.com) | — | Despliegue y hosting |
| [pnpm](https://pnpm.io) | — | Gestor de paquetes |

---

## Arquitectura

```
src/
├── assets/          # Imágenes importables (Logo, Banner, etc.)
├── components/      # Componentes Astro (Header, Footer, tarjetas de rutas, etc.)
├── icons/           # Componentes de iconos SVG
├── layouts/         # Layout maestro con meta tags y analytics
├── lib/             # Servicios, utilidades y lógica de negocio
│   ├── supabase.ts      # Cliente de Supabase
│   ├── rutas.ts         # Consultas a la tabla "rutas"
│   ├── utils.ts         # Funciones utilitarias
│   ├── cache.ts         # Sistema de caché en memoria
│   ├── gpx-parser.ts    # Parser de archivos GPX
│   └── markdown.ts      # Procesador Markdown
├── pages/           # Rutas de la aplicación
│   ├── index.astro          # Página de inicio
│   ├── rutas.astro          # Listado de todas las rutas
│   ├── rutas/[id].astro     # Detalle de ruta individual
│   ├── contacto.astro       # Formulario de contacto
│   └── api/gpx-altitudes.ts # API para extraer altitudes de GPX
└── styles/          # Hojas de estilo globales
```

---

## Requisitos previos

- **Node.js** >= 18
- **pnpm** (recomendado) o npm
- Cuenta en [Supabase](https://supabase.com) con un proyecto configurado

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/ciclofamily.git
cd ciclofamily

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Supabase

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`.

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PUBLIC_SUPABASE_URL` | URL de tu proyecto Supabase | `https://xxxxx.supabase.co` |
| `PUBLIC_SUPABASE_ANON_KEY` | Anon key de Supabase (acceso público de lectura) | `eyJhbGciOiJIUzI1NiIs...` |

> **Nota:** Estas variables son públicas (`PUBLIC_`) ya que se usan en el cliente para el Storage de Supabase.

---

## Scripts disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `dev` | `pnpm dev` | Servidor de desarrollo con hot reload |
| `build` | `pnpm build` | Verificación de tipos + build de producción |
| `preview` | `pnpm preview` | Vista previa del build de producción localmente |

---

## API Endpoints

### `GET /api/gpx-altitudes?gpx=<filename>`

Extrae las altitudes máximas y mínimas de un archivo GPX almacenado en Supabase Storage.

**Parámetros:**
- `gpx` (query): Nombre del archivo GPX

**Respuesta:**
```json
{
  "altMax": 850,
  "altMin": 120
}
```

---

## Despliegue

El proyecto está configurado para desplegarse automáticamente en **Vercel**:

1. Conecta el repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Cada push a `main` despliega automáticamente

**Configuración de Vercel** (en `astro.config.mjs`):
- Adapter: `@astrojs/vercel`
- `maxDuration`: 30 segundos
- `memory`: 512 MB

---

## Estructura de la base de datos

**Tabla `rutas`:**

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID | Identificador único |
| `titulo` | text | Nombre de la ruta |
| `destino` | text | Destino de la ruta |
| `distancia` | numeric | Distancia en km |
| `desnivel` | numeric | Desnivel acumulado en m |
| `dificultad` | text | Fácil / Moderada / Difícil |
| `gpx` | text | Nombre del archivo GPX |
| `wikiloc` | text | Enlace a Wikiloc |
| `portada` | text | URL de imagen de portada |
| `descripcion` | text | Descripción en Markdown |

**Storage Buckets:**
- `rutas-imagenes`: Imágenes de cada ruta (`/{rutaId}/{filename}`)
- `rutas-gpx`: Archivos GPX de las rutas

---

## Contribuir

1. Crea un branch para tu feature (`git checkout -b feature/nueva-funcionalidad`)
2. Haz commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
3. Push al branch (`git push origin feature/nueva-funcionalidad`)
4. Abre un Pull Request

---

## Licencia

MIT
