import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CIBjosY3.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_C1GrzIi0.mjs';
import { $ as $$Layout, a as $$Header } from '../chunks/Layout_nE-EZCNc.mjs';
export { renderers } from '../renderers.mjs';

const $$ContainerRutas = createComponent(async ($$result, $$props, $$slots) => {
  const rutas = await getCollection("rutas");
  return renderTemplate`${maybeRenderHead()}<section> <h2 class="text-4xl text-center mt-20 lg:my-20 font-bold text-page-400">Rutas</h2> <!-- <Buscador class="h-10 w-48 md:w-96" /> --> <section class="flex flex-wrap justify-center mx-4 gap-8 mt-24"> ${rutas.map((ruta) => {
    const { slug, data } = ruta;
    const { url, portada, titulo, destino, distancia, dificultad, alt_max } = data;
    let difucultadPunto = "";
    if (dificultad === "F\xE1cil") {
      difucultadPunto = "/PuntosVerde.png";
    } else if (dificultad === "Moderada") {
      difucultadPunto = "/PuntosNaranja.png";
    } else {
      difucultadPunto = "/PuntosRojo.png";
    }
    return renderTemplate`<a${addAttribute(url, "href")} class="max-w-96 h-fit rounded-xl bg-page-500 border-page-400 border-dashed border-2 hover:scale-105 transition text-black"> <img class="w-full h-52 rounded-t-xl top-0 object-cover"${addAttribute(portada, "src")}${addAttribute(`Imagen de ${titulo}`, "alt")}> <div class="m-4"> <h1 class="text-xl font-bold mt-8 mb-4">${titulo}</h1> <span class="flex items-center font-semibold mb-4 w-fit px-2 py-1 rounded-xl bg-page-200"><img class="size-5 mr-2" src="/icons/ubicacion.svg">${destino}</span> <section class="flex items-center justify-between my-4"> <span class="flex"><img class="size-5 mr-1" src="/icons/ubicacion.svg"> Distancia: <span class="font-semibold flex ml-1">${distancia} Km</span></span> <span class="flex items-center"><img class="size-8 mr-2" src="/icons/dificultad.svg"><img class="h-5"${addAttribute(difucultadPunto, "src")} alt=""></span> </section> <span class="flex"><img class="size-6 mr-1" src="/icons/desnivel.svg">Desnivel: <span class="font-semibold ml-1">${alt_max} m</span></span> </div> </a>`;
  })} </section> </section>`;
}, "D:/ciclofamily/src/components/ContainerRutas.astro", void 0);

const $$Rutas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ciclo Family | Todas las rutas en bicicleta por Catalunya" }, { "default": ($$result2) => renderTemplate` <title>Ciclo Family | Descubre todas las rutas en bicicleta por Catalunya</title> ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="max-w-7xl mx-auto mt-40"> ${renderComponent($$result2, "ContainerRutas", $$ContainerRutas, {})} </main> ` })}`;
}, "D:/ciclofamily/src/pages/rutas.astro", void 0);

const $$file = "D:/ciclofamily/src/pages/rutas.astro";
const $$url = "/rutas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Rutas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
