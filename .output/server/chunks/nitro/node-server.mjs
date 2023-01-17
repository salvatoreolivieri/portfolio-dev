globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _cH3N8k0Boq = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _cH3N8k0Boq
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-oRl+bHk0DODXmnU+NesYV1wCk28\"",
    "mtime": "2023-01-17T12:03:49.413Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"efb8-u2gvRNc2sm+E6/DMtU4i6FH2cr0\"",
    "mtime": "2023-01-17T12:03:49.395Z",
    "size": 61368,
    "path": "../public/favicon.png"
  },
  "/_nuxt/Esc.8dcc8d35.js": {
    "type": "application/javascript",
    "etag": "\"149-h8XRgrU+/GRIwNeB5C/0YvuE53Q\"",
    "mtime": "2023-01-17T12:03:49.347Z",
    "size": 329,
    "path": "../public/_nuxt/Esc.8dcc8d35.js"
  },
  "/_nuxt/Hero.386db7a9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1910-pkIvGa2iA2gA4ghXacoUOZfOS14\"",
    "mtime": "2023-01-17T12:03:49.347Z",
    "size": 6416,
    "path": "../public/_nuxt/Hero.386db7a9.css"
  },
  "/_nuxt/Hero.vue_vue_type_script_setup_true_lang.e6000bea.js": {
    "type": "application/javascript",
    "etag": "\"cb1-h6YfutGdbBAiitrKOQXrvFlRe6I\"",
    "mtime": "2023-01-17T12:03:49.346Z",
    "size": 3249,
    "path": "../public/_nuxt/Hero.vue_vue_type_script_setup_true_lang.e6000bea.js"
  },
  "/_nuxt/Markdown.c0a533a6.js": {
    "type": "application/javascript",
    "etag": "\"1ce-pD6ZqLCDK+i62RZU/tFbFjtldjA\"",
    "mtime": "2023-01-17T12:03:49.345Z",
    "size": 462,
    "path": "../public/_nuxt/Markdown.c0a533a6.js"
  },
  "/_nuxt/SubHero.vue_vue_type_script_setup_true_lang.f68a2390.js": {
    "type": "application/javascript",
    "etag": "\"17d-l8V+/KaBNd+1lqiMcEU4eMfrtrk\"",
    "mtime": "2023-01-17T12:03:49.345Z",
    "size": 381,
    "path": "../public/_nuxt/SubHero.vue_vue_type_script_setup_true_lang.f68a2390.js"
  },
  "/_nuxt/composables.50465e4a.js": {
    "type": "application/javascript",
    "etag": "\"61-Ph2sOJQf/jxOm2AdcDrErW80DQw\"",
    "mtime": "2023-01-17T12:03:49.344Z",
    "size": 97,
    "path": "../public/_nuxt/composables.50465e4a.js"
  },
  "/_nuxt/default.8cd27457.js": {
    "type": "application/javascript",
    "etag": "\"1680-HUUfMBQE4p0oyHcm/Lx4A8jrYdU\"",
    "mtime": "2023-01-17T12:03:49.344Z",
    "size": 5760,
    "path": "../public/_nuxt/default.8cd27457.js"
  },
  "/_nuxt/entry.39dd9560.js": {
    "type": "application/javascript",
    "etag": "\"3d0df-8SbD0FFQPN67bl551FuGrMZCfX4\"",
    "mtime": "2023-01-17T12:03:49.343Z",
    "size": 250079,
    "path": "../public/_nuxt/entry.39dd9560.js"
  },
  "/_nuxt/entry.6b45c8bd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5060-5qqqoEN2qg2ZJeLaFbs1AUTqUMA\"",
    "mtime": "2023-01-17T12:03:49.342Z",
    "size": 20576,
    "path": "../public/_nuxt/entry.6b45c8bd.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-01-17T12:03:49.342Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.63324849.js": {
    "type": "application/javascript",
    "etag": "\"8cf-sG58vKAryAfD+akVzDA8pNWlJe8\"",
    "mtime": "2023-01-17T12:03:49.341Z",
    "size": 2255,
    "path": "../public/_nuxt/error-404.63324849.js"
  },
  "/_nuxt/error-500.9d135529.js": {
    "type": "application/javascript",
    "etag": "\"778-jDw7OG26rRQYIfKa4dE1cmdE8D0\"",
    "mtime": "2023-01-17T12:03:49.341Z",
    "size": 1912,
    "path": "../public/_nuxt/error-500.9d135529.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-01-17T12:03:49.340Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.31722c30.js": {
    "type": "application/javascript",
    "etag": "\"4ad-Ak0FToPPDjfxJixtTDq4ED4+rko\"",
    "mtime": "2023-01-17T12:03:49.340Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.31722c30.js"
  },
  "/_nuxt/index.28d8ca3a.js": {
    "type": "application/javascript",
    "etag": "\"358-lfQA2zvXTw7Fl9iKda77jk3VyzM\"",
    "mtime": "2023-01-17T12:03:49.339Z",
    "size": 856,
    "path": "../public/_nuxt/index.28d8ca3a.js"
  },
  "/_nuxt/index.40b61a35.js": {
    "type": "application/javascript",
    "etag": "\"24a8-/vLMHCaS76qQZ/tSCVw4YKUe3ng\"",
    "mtime": "2023-01-17T12:03:49.338Z",
    "size": 9384,
    "path": "../public/_nuxt/index.40b61a35.js"
  },
  "/_nuxt/index.63f180d4.js": {
    "type": "application/javascript",
    "etag": "\"2456-VKSYubebteAlbtIorrg0FDZBsf0\"",
    "mtime": "2023-01-17T12:03:49.337Z",
    "size": 9302,
    "path": "../public/_nuxt/index.63f180d4.js"
  },
  "/_nuxt/index.7a05d0b7.js": {
    "type": "application/javascript",
    "etag": "\"3ad-PwwbX40nBLDdmvs/JjLBrhvJzkI\"",
    "mtime": "2023-01-17T12:03:49.337Z",
    "size": 941,
    "path": "../public/_nuxt/index.7a05d0b7.js"
  },
  "/_nuxt/lets-talk.13e0a1c8.png": {
    "type": "image/png",
    "etag": "\"9d66-zdB+NCFbpmtWkjQdmg6TTCEYAgg\"",
    "mtime": "2023-01-17T12:03:49.336Z",
    "size": 40294,
    "path": "../public/_nuxt/lets-talk.13e0a1c8.png"
  },
  "/_nuxt/salvatore-olivieri.924c1f7d.jpg": {
    "type": "image/jpeg",
    "etag": "\"f354-5aHWTO9ropA+V+YyiD8WIW0Gpx8\"",
    "mtime": "2023-01-17T12:03:49.334Z",
    "size": 62292,
    "path": "../public/_nuxt/salvatore-olivieri.924c1f7d.jpg"
  },
  "/img/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2004-ADOacHhX6VMN11etxbGAESTnZNc\"",
    "mtime": "2023-01-17T12:03:49.394Z",
    "size": 8196,
    "path": "../public/img/.DS_Store"
  },
  "/img/11ty.png": {
    "type": "image/png",
    "etag": "\"33f3-Fs3hqBoZhzX4hGO5eqbXtCk5YA8\"",
    "mtime": "2023-01-17T12:03:49.376Z",
    "size": 13299,
    "path": "../public/img/11ty.png"
  },
  "/img/DC-Comics.png": {
    "type": "image/png",
    "etag": "\"10b8a9-Pi5v4r0fUN5S4ERUm9NBWrCtQXY\"",
    "mtime": "2023-01-17T12:03:49.373Z",
    "size": 1095849,
    "path": "../public/img/DC-Comics.png"
  },
  "/img/Discord.png": {
    "type": "image/png",
    "etag": "\"4344b-oqDBasGYAxSI0HzOMaYo0yOu/6Q\"",
    "mtime": "2023-01-17T12:03:49.371Z",
    "size": 275531,
    "path": "../public/img/Discord.png"
  },
  "/img/Dropbox.png": {
    "type": "image/png",
    "etag": "\"161dc-p2YIni4nQcnpgKaWjTSV+hy8Hq0\"",
    "mtime": "2023-01-17T12:03:49.370Z",
    "size": 90588,
    "path": "../public/img/Dropbox.png"
  },
  "/img/Netflix.png": {
    "type": "image/png",
    "etag": "\"149e61-zbApgvtVQYTJhj5R2KkAN2OGkug\"",
    "mtime": "2023-01-17T12:03:49.368Z",
    "size": 1351265,
    "path": "../public/img/Netflix.png"
  },
  "/img/Playstation.png": {
    "type": "image/png",
    "etag": "\"deadb-8yDP/oV2hgJyM3a+CBSNHj4dVwo\"",
    "mtime": "2023-01-17T12:03:49.366Z",
    "size": 912091,
    "path": "../public/img/Playstation.png"
  },
  "/img/Spotify.png": {
    "type": "image/png",
    "etag": "\"72560-U0Rbir9ic6LVyhII4mH6Z2pamKA\"",
    "mtime": "2023-01-17T12:03:49.363Z",
    "size": 468320,
    "path": "../public/img/Spotify.png"
  },
  "/img/WhatsappWeb-Dark.png": {
    "type": "image/png",
    "etag": "\"6ae49-3Lh3i22q6UEX68ubobNrNf+kQXk\"",
    "mtime": "2023-01-17T12:03:49.361Z",
    "size": 437833,
    "path": "../public/img/WhatsappWeb-Dark.png"
  },
  "/img/arcade-mania.png": {
    "type": "image/png",
    "etag": "\"a5b0-k8jGTPqkkU7w6RjnnpUpqeMuSDw\"",
    "mtime": "2023-01-17T12:03:49.360Z",
    "size": 42416,
    "path": "../public/img/arcade-mania.png"
  },
  "/img/lets-talk.png": {
    "type": "image/png",
    "etag": "\"284d-knoxzBy/TFFMEeuhSC8uWzadCL8\"",
    "mtime": "2023-01-17T12:03:49.359Z",
    "size": 10317,
    "path": "../public/img/lets-talk.png"
  },
  "/img/nuxt3.png": {
    "type": "image/png",
    "etag": "\"f74-LVBdxlriVF/5aS5aeTfMRJrr1LY\"",
    "mtime": "2023-01-17T12:03:49.357Z",
    "size": 3956,
    "path": "../public/img/nuxt3.png"
  },
  "/img/nuxt_tailwind.png": {
    "type": "image/png",
    "etag": "\"1879-+5bkIpc/qQte9F2JAXL1B7nNRTw\"",
    "mtime": "2023-01-17T12:03:49.356Z",
    "size": 6265,
    "path": "../public/img/nuxt_tailwind.png"
  },
  "/img/order-chaos-linked.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e6a-ZbTIBe7ojGBjz/CVYgSo4zGvFEQ\"",
    "mtime": "2023-01-17T12:03:49.355Z",
    "size": 15978,
    "path": "../public/img/order-chaos-linked.jpg"
  },
  "/img/order-chaos-separate.jpg": {
    "type": "image/jpeg",
    "etag": "\"43cb-7HUBrGY6D8XXa/HVuoM9PA0e3fw\"",
    "mtime": "2023-01-17T12:03:49.353Z",
    "size": 17355,
    "path": "../public/img/order-chaos-separate.jpg"
  },
  "/img/personality.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ce2-dkZNoDt3BPrwsCXIIgIzIGlTaBI\"",
    "mtime": "2023-01-17T12:03:49.352Z",
    "size": 36066,
    "path": "../public/img/personality.jpg"
  },
  "/img/salvatore-olivieri-blog.png": {
    "type": "image/png",
    "etag": "\"a754e-8w5RNv+0xkasUxYbxP8UrGyE0Mw\"",
    "mtime": "2023-01-17T12:03:49.351Z",
    "size": 685390,
    "path": "../public/img/salvatore-olivieri-blog.png"
  },
  "/img/salvatore-olivieri.jpg": {
    "type": "image/jpeg",
    "etag": "\"2bf83-9O6N1Nxg+TwjRGI+svLh6NRIusg\"",
    "mtime": "2023-01-17T12:03:49.350Z",
    "size": 180099,
    "path": "../public/img/salvatore-olivieri.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Y3j5Vk = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Y3j5Vk, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Y3j5Vk, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
