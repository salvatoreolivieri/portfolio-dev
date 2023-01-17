import { _ as _sfc_main$1 } from "./Markdown.c8386393.js";
import { defineComponent, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubHero",
  __ssrInlineRender: true,
  props: {
    title: String,
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilityMarkdown = _sfc_main$1;
      _push(`<!--[--><h1 class="title-md">${ssrInterpolate(__props.title)}</h1>`);
      _push(ssrRenderComponent(_component_UtilityMarkdown, {
        content: __props.text,
        class: "paragraph md:w-10/12 w-full"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section/SubHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SubHero.272366aa.js.map
