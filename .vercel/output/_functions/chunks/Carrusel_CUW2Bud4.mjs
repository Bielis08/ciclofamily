import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as renderComponent } from './astro/server_CIBjosY3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Izquierda = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Izquierda;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-caret-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"></path></svg>`;
}, "D:/ciclofamily/src/icons/Izquierda.astro", void 0);

const $$Astro$1 = createAstro();
const $$Derecha = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Derecha;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-caret-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"></path></svg>`;
}, "D:/ciclofamily/src/icons/Derecha.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Carrusel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carrusel;
  const { images } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="carrusel-container" class="relative w-full max-w-2xl h-[450px] mx-auto overflow-hidden transition-all duration-500"> ', ' <!-- Botones --> <button id="prev" class="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-page-200/70 rounded-full z-10">', '</button> <button id="next" class="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-page-200/70 rounded-full z-10">', `</button> </div> <script type="module">
  const images = document.querySelectorAll('.carrusel-img');
  const container = document.getElementById('carrusel-container');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let current = 0;
  let autorollActivo = true;
  let autorollID = null;

  function actualizarCarrusel() {
    images.forEach((img, i) => {
      img.style.opacity = i === current ? '1' : '0';
    });
  }

  function detenerAutoroll() {
    if (autorollActivo) {
      clearInterval(autorollID);
      autorollActivo = false;
    }
  }

  nextBtn.addEventListener('click', () => {
    detenerAutoroll();
    current = (current + 1) % images.length;
    actualizarCarrusel();
  });

  prevBtn.addEventListener('click', () => {
    detenerAutoroll();
    current = (current - 1 + images.length) % images.length;
    actualizarCarrusel();
  });

  autorollID = setInterval(() => {
    if (autorollActivo) {
      current = (current + 1) % images.length;
      actualizarCarrusel();
    }
  }, 4000);

  // Inicializaci\xF3n
  window.addEventListener('load', ajustarAlturaFija);
  window.addEventListener('resize', ajustarAlturaFija);
<\/script>`])), maybeRenderHead(), images.map((img, index) => renderTemplate`<img${addAttribute(img, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} class="carrusel-img absolute inset-0 h-full w-auto max-w-full rounded-lg object-contain mx-auto transition-opacity duration-700 ease-in-out"${addAttribute(`opacity: ${index === 0 ? "1" : "0"}`, "style")} loading="lazy">`), renderComponent($$result, "Izquierda", $$Izquierda, { "class": "m-2" }), renderComponent($$result, "Derecha", $$Derecha, { "class": "m-2" }));
}, "D:/ciclofamily/src/components/Carrusel.astro", void 0);

const $$file = "D:/ciclofamily/src/components/Carrusel.astro";
const $$url = undefined;

export { $$Carrusel as default, $$file as file, $$url as url };
