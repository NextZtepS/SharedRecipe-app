import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.499c3a87.js","_app/immutable/chunks/firebase.3e9f43ea.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.df132f49.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/handleExplore.fa2474a6.js"];
export const stylesheets = [];
export const fonts = [];
