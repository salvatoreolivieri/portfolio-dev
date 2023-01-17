import { _ as _sfc_main$2 } from "./Hero.7dcb873e.js";
import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./Markdown.c8386393.js";
import "destr";
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
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SectionHero = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-padded" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SectionHero, {
    isHomePage: "",
    placeholder: "\u{1F44B}\u{1F3FB} Hello World!",
    title: "Salvatore Olivieri",
    subtitle: "Web Software Engineer",
    text: "I am a **creative**, **humble** and **life enthusiast** Italian Web Software Engineer, with a keen passion for **algorithms** and **reality principles**. I love to **create** and **understand how things works**. I live between intersection of **philosophy**, **comunication** and **technology**. I like to **travel**, contemplate **art**, **read**, **think** and ask myself **questions** away from the noise."
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PagesHome = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PagesHome, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.061f4fbc.js.map
