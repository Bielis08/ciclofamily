import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, a as renderComponent } from '../chunks/astro/server_CIBjosY3.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Layout_nE-EZCNc.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_C1GrzIi0.mjs';
export { renderers } from '../renderers.mjs';

const $$MiniHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-[390px] md:h-[520px] bg-[url(/Banner.png)] bg-cover bg-opacity-5 -mt-26 mb-6 text-white"> <section class="w-full sm:w-96 text-center md:mx-0 mx-auto inline-grid relative top-24 md:top-44 md:left-[20%] backdrop-blur-sm px-7 py-5 rounded-xl backdrop-brightness-75"> <p class="mb-4 text-4xl font-semibold">Bienvenido a Ciclo Family</p> <p class="mb-8 text-xl font-medium">Descubre las mejores rutas en bicicleta para toda la familia.</p> <a class="bg-page-300 text-black mx-auto px-4 py-2 hover:bg-page-400 hover:text-white rounded-lg text-lg transition" href="/rutas">Explorar Rutas</a> </section> </header>`;
}, "D:/ciclofamily/src/components/MiniHeader.astro", void 0);

const $$PorqueCicloFamily = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-center"> <h2 class="text-3xl text-pretty text-center mb-14 font-bold text-page-400">¿Por qué elegir Ciclo Family?</h2> <div class="flex flex-col md:flex-row justify-around gap-y-8 gap-x-16 text-black"> <article class="max-w-96 mx-auto"> <h4 class="text-xl font-semibold mb-3">Rutas Seguras</h4> <p class="text-lg mx-4">Todas nuestras rutas están cuidadosamente seleccionadas para garantizar la seguridad de toda la familia.</p> </article> <article class="max-w-96 mx-auto"> <h4 class="text-xl font-semibold mb-3">Variedad de Opciones</h4> <p class="text-lg mx-4">Desde paseos tranquilos hasta rutas más desafiantes, tenemos opciones para todos los niveles.</p> </article> <article class="max-w-96 mx-auto"> <h4 class="text-xl font-semibold mb-3">Información Detallada</h4> <p class="text-lg mx-4">Proporcionamos información completa sobre cada ruta, incluyendo dificultad, duración y puntos de interés.</p> </article> </div> </section>`;
}, "D:/ciclofamily/src/components/PorqueCicloFamily.astro", void 0);

const $$RutasDestacadas = createComponent(async ($$result, $$props, $$slots) => {
  const rutas = await getCollection("rutas");
  const rutasDestacadas = rutas.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="mt-28"> <h2 class="text-3xl text-center mb-20 font-bold text-page-400">Rutas Destacadas</h2> <div class="relative w-full text-center"> <a href="/rutas" class="underline text-black hover:text-gray-700 -mt-30 md:absolute right-12 transition">Ver mas rutas ⇾</a> </div> <section class="flex text-pretty flex-wrap justify-center gap-8 mt-12 mb-16 mx-4"> ${rutasDestacadas.map((ruta) => {
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
    return renderTemplate`<article class="w-96 h-fit rounded-xl text-black bg-page-500 border-2 border-dashed border-page-400 overflow-hidden"> <img class="w-full h-52 top-0 object-cover"${addAttribute(portada, "src")}${addAttribute(`Imagen de ${titulo}`, "alt")}> <div class="m-4"> <h1 class="text-xl font-bold my-4">${titulo}</h1> <span class="flex items-center text-black font-semibold mb-4 w-fit px-2 py-1 rounded-xl bg-page-200"><img class="size-5 mr-2 -mt-[2px]" src="/icons/ubicacion.svg" alt="">${destino}</span> <section class="flex items-center justify-between my-4"> <span class="flex items-center gap-2 font-semibold">Dificultad: <img class="h-5"${addAttribute(difucultadPunto, "src")}></span> <a${addAttribute(url, "href")} class="bg-page-300 font-semibold px-4 py-2 rounded-xl hover:scale-110 transition">Ver Detalles</a> </section> </div> </article>`;
  })} </section> </section>`;
}, "D:/ciclofamily/src/components/RutasDestacadas.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ciclo Family | Rutas en bicicleta por Catalunya" }, { "default": ($$result2) => renderTemplate` <title>Ciclo Family | Las mejores rutas en bicicleta por Catalunya</title> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "MiniHeader", $$MiniHeader, {})} ${maybeRenderHead()}<main class="max-w-7xl mx-auto"> <!-- <EncuentraRuta /> --> ${renderComponent($$result2, "RutasDestacadas", $$RutasDestacadas, {})} ${renderComponent($$result2, "PorqueCicloFamily", $$PorqueCicloFamily, {})} </main> ` })}`;
}, "D:/ciclofamily/src/pages/index.astro", void 0);

const $$file = "D:/ciclofamily/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
