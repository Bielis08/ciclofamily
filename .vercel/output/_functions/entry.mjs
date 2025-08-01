import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D1SNLWwr.mjs';
import { manifest } from './manifest_Dq5AX4bJ.mjs';

const serverIslandMap = new Map([
	['Carrusel', () => import('./chunks/Carrusel_CUW2Bud4.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contacto.astro.mjs');
const _page2 = () => import('./pages/rutas/_id_.astro.mjs');
const _page3 = () => import('./pages/rutas.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contacto.astro", _page1],
    ["src/pages/rutas/[id].astro", _page2],
    ["src/pages/rutas.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "63d11999-4784-4e7a-96b8-a127ae92d340",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
