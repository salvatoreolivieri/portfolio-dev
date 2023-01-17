import { defineComponent, computed, h, useSSRContext } from "vue";
import { u as useNuxtApp } from "../server.mjs";
import "destr";
const _sfc_main = defineComponent({
  props: {
    content: {
      type: String,
      required: true
    },
    inline: { type: Boolean, required: false, default: true },
    tag: { type: String, required: false, default: "p" }
  },
  setup(props) {
    const { $markdown } = useNuxtApp();
    const markdownContent = computed(
      () => props.inline ? $markdown && $markdown.renderInline(props.content) : $markdown && $markdown.render(props.content)
    );
    const renderedTag = computed(() => !props.inline ? "div" : props.tag);
    return () => h(renderedTag.value, {
      class: props.inline ? "utils-markdown" : "utils-markdown whitespace-pre-line",
      innerHTML: markdownContent.value
    });
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Markdown.c8386393.js.map
