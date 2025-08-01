import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as addAttribute, a as renderComponent, k as renderScript, l as renderSlot, n as renderHead } from './astro/server_CIBjosY3.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="-mt-1 mx-0 mb-20 min-h-6"> <header class="hidden fixed bg-page-200 md:flex justify-between items-center px-12 py-2 max-w-[1500px] rounded-xl shadow-lg mx-auto top-1 left-0 right-0 z-10"> <a href="/"><h1 class="text-4xl font-semibold flex items-center"><img class="size-20 mr-4 rounded-full" src="/Logo.png" alt="Logo de Ciclo Family"> Ciclo Family</h1></a> <nav class="flex gap-x-4"> <a class="font-medium hover:underline transition hover:text-black hover:bg-page-300 text-xl rounded-xl px-4 py-2" href="/">Inicio</a> <a class="font-medium hover:underline transition hover:text-black hover:bg-page-300 text-xl rounded-xl px-4 py-2" href="/rutas">Rutas</a> <a class="font-medium hover:underline transition hover:text-black hover:bg-page-300 text-xl rounded-xl px-4 py-2" href="/contacto">Contacto</a> </nav> </header> <header class="md:hidden fixed bg-page-200 flex-col z-10 justify-between items-center px-4 py-2 w-full xl shadow-lg top-0 left-0 right-0"> <div class="flex justify-between"> <a href="/"><h1 class="text-2xl font-semibold flex items-center"><img class="size-14 mr-4 rounded-full" src="/Logo.png" alt="Logo de Ciclo Family"> Ciclo Family</h1></a> <img id="menu" class="transition cursor-pointer" src="/icons/menu.svg" alt="Menu"> </div> <nav id="navbar" class="grid text-center h-0 overflow-hidden place-content-center gap-x-4 transition-all"> <a class="font-medium hover:underline transition hover:text-black hover:bg-page-300 text-xl rounded-xl px-4 py-2" href="/">Inicio</a> <a class="font-medium hover:underline transition hover:text-black hover:bg-page-300 text-xl rounded-xl px-4 py-2" href="/rutas">Rutas</a> <a class="font-medium hover:underline transition hover:text-black hover:bg-page-300 text-xl rounded-xl px-4 py-2" href="/contacto">Contacto</a> </nav> </header> </section> <script type="module">
    function initMenu() {
        const menubtn = document.getElementById('menu');
        const navbar = document.getElementById('navbar');
        let isOpen = false;

        menubtn.addEventListener('click', function () {
            if (!isOpen) {
                navbar.classList.remove('h-0');
                navbar.classList.add('h-32');
                menubtn.src = '/icons/close.svg';
                isOpen = true;
            } else {
                navbar.classList.remove('h-32');
                navbar.classList.add('h-0');
                menubtn.src = '/icons/menu.svg';
                isOpen = false;
            }
        });
    }
    document.addEventListener('DOMContentLoaded', initMenu);
    document.addEventListener('astro:after-swap', initMenu);
<\/script>`])), maybeRenderHead());
}, "D:/ciclofamily/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Email;
  return renderTemplate`${maybeRenderHead()}<svg width="64px" height="64px"${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}, "D:/ciclofamily/src/icons/email.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-6 mt-12 bg-[#141414] flex md:flex-row flex-col sm:gap-y-4 md:gap-y-8 justify-around items-center"> <div class="text-center"> <span class="text-white text-base md:text-xl">¿Tienes alguna duda?<br>¡Contacta con nosotros!</span> </div> <div class="flex justify-center"> <a class="my-8 group md:my-0 w-60 xl:w-72 py-3 font-semibold text-lg lg:text-xl hover:bg-page-400 hover:text-white transition-all flex justify-center items-center bg-page-300 rounded-lg" href="mailto:ciclofamilyinfo@gmail.com?subject=Consulta%20sobre%20Ciclofamily" target="_blank">Enviar Mensaje${renderComponent($$result, "Email", $$Email, { "class": "size-8 ml-2 stroke-black group-hover:stroke-white transition" })}</a> </div> <div class="flex justify-center items-center text-white"> <span class="text-base md:text-xl">Siguenos en</span> <a class="ml-2 bg-page-400 hover:bg-page-400/40 px-2 py-1 rounded-xl transition-all" href="https://es.wikiloc.com/wikiloc/user.do?id=3811112" target="_blank"><img class="w-20 md:w-auto" src="/Wikiloc.png" alt="Logo de Wikiloc"></a> </div> </section>`;
}, "D:/ciclofamily/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/ciclofamily/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/ciclofamily/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "D:/ciclofamily/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/ciclofamily/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "D:/ciclofamily/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/ciclofamily/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html class="bg-page-100" lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><meta name="google-site-verification" content="G5nl4VQUvHU_DD7UoGnpyiq8y4RJS9RGQ0JikrB8G_M"><link rel="icon" href="/favicon.jpg"><title>', "</title>", "</head> <body> <!-- <Header /> --> ", " ", " ", " ", " ", `  <script type="module">
  function initCarruseles() {
    document.querySelectorAll('[data-carrusel]').forEach((el) => {
      const images = el.querySelectorAll('img');
      let current = 0;

      function showImage(i) {
        images.forEach((img, idx) => {
          img.style.opacity = idx === i ? '1' : '0';
        });
      }

      const prev = el.querySelector('[data-prev]');
      const next = el.querySelector('[data-next]');

      prev?.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
      });

      next?.addEventListener('click', () => {
        current = (current + 1) % images.length;
        showImage(current);
      });

      showImage(current);
    });
  }

  window.addEventListener('astro:after-swap', () => {
    initCarruseles();
  });

  window.addEventListener('DOMContentLoaded', () => {
    initCarruseles();
  });
<\/script></body></html>`])), title, renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderComponent($$result, "SpeedInsights", $$Index$1, {}), renderComponent($$result, "Analytics", $$Index, {}));
}, "D:/ciclofamily/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Header as a };
