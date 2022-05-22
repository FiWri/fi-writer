import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute, Route } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
declare let self: ServiceWorkerGlobalScope;

const CACHE_PREFIX = 'fi-writer';
const CACHE_VERSION = 'v1';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

precacheAndRoute(self.__WB_MANIFEST); // self.__WB_MANIFEST is default injection point

/* ---------------------------- clean old assets ---------------------------- */
cleanupOutdatedCaches();

/* ------------------------------ Handle fonts ------------------------------ */
// A new route that matches same-origin image requests and handles
// them with the cache-first, falling back to network strategy:
const fontCache = `${CACHE_PREFIX}_fonts_${CACHE_VERSION}`;
const fontRoute = new Route(({ request, sameOrigin }) => {
  return sameOrigin && request.destination === 'font';
}, new CacheFirst({ cacheName: fontCache }));

/* ----------------------------- Register routes ---------------------------- */
registerRoute(fontRoute);
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')));
