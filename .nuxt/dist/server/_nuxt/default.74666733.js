import { _ as _export_sfc, a as __nuxt_component_0$2, b as __nuxt_component_1$1 } from "../server.mjs";
import { useSSRContext, mergeProps, withCtx, createVNode, defineComponent, unref, createTextVNode, toDisplayString, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "destr";
import { _ as __nuxt_component_0$3 } from "./Esc.a9989e42.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "markdown-it";
import "defu";
const _imports_0 = "" + globalThis.__buildAssetsURL("salvatore-olivieri.924c1f7d.jpg");
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-1" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="Salvatore Olivieri"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "w-12 h-12 rounded-full",
            src: _imports_0,
            alt: "Salvatore Olivieri"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Avatar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  emits: ["onOpen"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto md:hidden" }, _attrs))}><button class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button"> Menu<svg viewBox="0 0 8 6" aria-hidden="true" class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"><path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Button/Menu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const navigation = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Projects",
    path: "/projects"
  },
  {
    label: "Philosophy",
    path: "/philosophy"
  },
  {
    label: "Contact",
    path: "/contact"
  }
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto hidden md:block" }, _attrs))}><ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"><!--[-->`);
      ssrRenderList(unref(navigation), ({ label, path }, index) => {
        _push(`<li class="px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" data-headlessui-state="open">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: path }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Navbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    class: "h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block hidden [@media(prefers-color-scheme:dark)] :group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
  }, _attrs))}><path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Dark.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true",
    class: "h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 block [@media (prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
  }, _attrs))}><path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path><path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Light.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ToggleDarkMode",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsDark = __nuxt_component_0;
      const _component_IconsLight = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-end md:flex-1" }, _attrs))}><div class="pointer-events-auto"><button type="button" aria-label="Toggle dark mode" class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">`);
      _push(ssrRenderComponent(_component_IconsDark, null, null, _parent));
      _push(ssrRenderComponent(_component_IconsLight, null, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Button/ToggleDarkMode.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ModalNavigation",
  __ssrInlineRender: true,
  emits: ["onClose"],
  setup(__props, { emit }) {
    const handleClose = (value) => {
      emit("onClose", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilityButtonEsc = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:hidden" }, _attrs))}><div class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100" id="headlessui-popover-overlay-:r1m:" aria-hidden="true" data-headlessui-state="open"></div><div class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"><div class="flex flex-row-reverse items-center justify-between">`);
      _push(ssrRenderComponent(_component_UtilityButtonEsc, {
        onClick: ($event) => handleClose(false)
      }, null, _parent));
      _push(`<h2 class="text-lg font-bold dark:text-zinc-100 text-zinc-800"> Navigation </h2></div><nav class="mt-6"><ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"><!--[-->`);
      ssrRenderList(unref(navigation), ({ label, path }, index) => {
        _push(`<li class="py-2" data-headlessui-state="open">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "w-full block",
          onClick: ($event) => handleClose(false),
          to: path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/ModalNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const showMenu = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilityAvatar = __nuxt_component_0$1;
      const _component_UtilityButtonMenu = _sfc_main$7;
      const _component_UtilityNavbar = _sfc_main$6;
      const _component_UtilityButtonToggleDarkMode = _sfc_main$3;
      const _component_UtilityModalNavigation = _sfc_main$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UtilityAvatar, null, null, _parent));
      _push(`<div class="flex flex-1 justify-end md:justify-center">`);
      _push(ssrRenderComponent(_component_UtilityButtonMenu, {
        onOnOpen: ($event) => showMenu.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_UtilityNavbar, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UtilityButtonToggleDarkMode, null, null, _parent));
      if (unref(showMenu)) {
        _push(ssrRenderComponent(_component_UtilityModalNavigation, {
          onOnClose: ($event) => showMenu.value = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$1;
  const _component_NuxtPage = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-zinc-900 bg-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default.74666733.js.map
