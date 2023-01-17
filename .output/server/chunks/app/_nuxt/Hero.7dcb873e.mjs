import { _ as _sfc_main$3 } from './Markdown.c8386393.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("lets-talk.13e0a1c8.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse mt-4 w-32 bg-[#F4867E] rounded-full flex justify-center items-center h-32 talk-wrapper border border-white" }, _attrs))}><a href="mailto:salvatoreolivierii@outlook.it" target="_blank"><div style="${ssrRenderStyle({ "transform": "translate(0px, 0px)" })}"><img class="w-24 h-24"${ssrRenderAttr("src", _imports_0)} alt="talk button"><div style="${ssrRenderStyle({ "opacity": "0", "transform": "scale(3, 3)" })}"></div></div></a></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Button/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SeaMode",
  __ssrInlineRender: true,
  setup(__props) {
    const showAnimation = ref(false);
    setTimeout(() => {
      showAnimation.value = true;
    }, 100);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-ed60e715><div data-v-ed60e715><label class="switch" data-v-ed60e715><input type="checkbox"${ssrIncludeBooleanAttr(unref(showAnimation)) ? " checked" : ""} disabled data-v-ed60e715><span class="slider" data-v-ed60e715><div class="fish" data-v-ed60e715><div class="body" data-v-ed60e715></div><div class="eye" data-v-ed60e715></div><div class="tail" data-v-ed60e715></div></div></span><span class="wave" data-v-ed60e715></span><div class="boat" data-v-ed60e715><div class="bottom" data-v-ed60e715></div><div class="mast" data-v-ed60e715></div><div class="rectangle-sm" data-v-ed60e715></div><div class="rectangle-lg" data-v-ed60e715></div></div><div class="sky" data-v-ed60e715><div class="sun" data-v-ed60e715><div class="outer" data-v-ed60e715></div><div class="inner" data-v-ed60e715></div></div><div class="cloud cloud1" data-v-ed60e715><div class="rect" data-v-ed60e715></div><div class="circle circle-lg" data-v-ed60e715></div><div class="circle circle-sm" data-v-ed60e715></div></div><div class="cloud cloud2" data-v-ed60e715><div class="rect" data-v-ed60e715></div><div class="circle circle-lg" data-v-ed60e715></div><div class="circle circle-sm" data-v-ed60e715></div></div></div></label></div><svg viewBox="0 0 180 100" width="100%" data-v-ed60e715><filter width="100%" height="100%" x="0%" y="0%" id="wave" data-v-ed60e715><feTurbulence type="fractalNoise" baseFrequency="0.000001" id="turbulence" numOctaves="1" result="turbulence" data-v-ed60e715><animate id="noiseAnimate" attributeName="baseFrequency" values="0.095,0.000001;0.025,0.2;" dur="1.4s" repeatCount="indefinite" data-v-ed60e715></animate></feTurbulence><feDisplacementMap in="SourceGraphic" in2="warpOffset" scale="6" dy="100px" xChannelSelector="R" yChannelSelector="G" data-v-ed60e715></feDisplacementMap><feGaussianBlur stdDeviation="0.5" data-v-ed60e715></feGaussianBlur></filter></svg></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Creative/SeaMode.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ed60e715"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    title: String,
    subtitle: String,
    placeholder: String,
    text: String,
    isContactPage: Boolean,
    isHomePage: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilityMarkdown = _sfc_main$3;
      const _component_UtilityButtonContact = __nuxt_component_1;
      const _component_CreativeSeaMode = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col py-8 items-center md:pt-16 w-full" }, _attrs))}><span class="placeholder">${ssrInterpolate(__props.placeholder)}</span><h1 class="title">${ssrInterpolate(__props.title)}</h1><h3 class="subtitle">${ssrInterpolate(__props.subtitle)}</h3>`);
      _push(ssrRenderComponent(_component_UtilityMarkdown, {
        class: "paragraph text-center",
        content: __props.text
      }, null, _parent));
      if (__props.isContactPage) {
        _push(ssrRenderComponent(_component_UtilityButtonContact, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.isHomePage) {
        _push(ssrRenderComponent(_component_CreativeSeaMode, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Hero.7dcb873e.mjs.map
