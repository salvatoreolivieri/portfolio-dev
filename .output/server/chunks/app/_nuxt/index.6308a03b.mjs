import { _ as _sfc_main$7 } from './SubHero.272366aa.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Esc.a9989e42.mjs';
import { _ as _sfc_main$6 } from './Markdown.c8386393.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'markdown-it';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center text-sm bg-white rounded-lg focus:z-10 dark:bg-zinc-800 dark:text-zinc-200 ring-1 ring-zinc-900/5 font-bold shadow-lg py-2 px-4 dark:group-hover:stroke-zinc-40 hover:bg-gray-100 hover:text-gray-900" }, _attrs))}>${ssrInterpolate(__props.text)}</span>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Label.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Link.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    class: "bi bi-github",
    viewBox: "0 0 16 16"
  }, _attrs))}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Github.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    name: String,
    concept: String,
    image: String,
    technologies: Array,
    path: String,
    github: String
  },
  setup(__props) {
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilityLabel = _sfc_main$5;
      const _component_UtilityButtonEsc = __nuxt_component_0;
      const _component_UtilityMarkdown = _sfc_main$6;
      const _component_IconsLink = __nuxt_component_3;
      const _component_IconsGithub = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[100px] ring-1 ring-zinc-100 rounded-lg max-w-[350px] md:min-h-[175px] relative" }, _attrs))}><img class="cursor-pointer rounded-lg h-full w-full"${ssrRenderAttr("src", __props.image)} alt="">`);
      _push(ssrRenderComponent(_component_UtilityLabel, {
        onClick: ($event) => showModal.value = true,
        class: "absolute w-36 justify-center -bottom-4 left-[50%] -translate-x-1/2 cursor-pointer ring-1 ring-zinc-100 text-gray-900 dark:ring-zinc-100",
        text: "Discover Project"
      }, null, _parent));
      if (unref(showModal)) {
        _push(`<div class="fixed flex justify-center items-center inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100 p-4 overflow-scroll"><div class="relative w-full h-full max-w-2xl md:h-auto"><div class="relative bg-white rounded-lg shadow dark:bg-zinc-900 ring-1 ring-zinc-900/5 dark:ring-zinc-800"><div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(__props.name)}</h3>`);
        _push(ssrRenderComponent(_component_UtilityButtonEsc, {
          onClick: ($event) => showModal.value = false
        }, null, _parent));
        _push(`</div><div class="p-6"><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">`);
        _push(ssrRenderComponent(_component_UtilityMarkdown, {
          inline: "",
          content: __props.concept
        }, null, _parent));
        _push(` <br></p>`);
        if (__props.technologies) {
          _push(`<div class="flex gap-3 flex-wrap"><!--[-->`);
          ssrRenderList(__props.technologies, (technology, index2) => {
            _push(ssrRenderComponent(_component_UtilityLabel, {
              key: `technology${index2}`,
              text: technology
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center p-6 space-x-3 border-t border-gray-200 rounded-b dark:border-gray-600">`);
        if (__props.path) {
          _push(`<a target="_blank"${ssrRenderAttr("href", __props.path)} class="text-zinc-700 hover:text-zinc-800 bg-[#f4867e] hover:bg-[#f4867e]/80 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#f4867e]/90 dark:hover:bg-[#f4867e] flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_IconsLink, null, null, _parent));
          _push(` Visit</a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.github) {
          _push(`<a target="_blank" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-bold px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 flex items-center gap-2"${ssrRenderAttr("href", __props.github)}>`);
          _push(ssrRenderComponent(_component_IconsGithub, null, null, _parent));
          _push(` Github </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Utility/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const technologies = [
  {
    text: "Javascript"
  },
  {
    text: "Typescript"
  },
  {
    text: "NodeJs"
  },
  {
    text: "VueJs"
  },
  {
    text: "NuxtJs"
  },
  {
    text: "11ty"
  },
  {
    text: "CSS"
  },
  {
    text: "SCSS"
  },
  {
    text: "Tailwind CSS"
  },
  {
    text: "Bootstrap"
  },
  {
    text: "HTML"
  },
  {
    text: "PHP"
  },
  {
    text: "Laravel"
  }
];
const projectList = [
  {
    title: {
      label: "Cool Project"
    },
    projects: [
      {
        name: "Italian Philosophy Blog (salvatoreolivieri.net)",
        concept: `In 2017, I got a question mark tattoo on my right middle finger. It was the first time I thought about creating this blog and helping as many people as possible to ask the right questions and change their lives.

        This blog is the home of my introspective processes and the refuge of confused people, lost in oblivion and without a half.
        
        It was designed not to give any dogmatic answer, but to encourage the reader to ask questions.
        
        It was conceived to give life to a real digital museum: A place full of vintage, creative and counter-intuitive works of art.
        
        I wanted to create a space where art, philosophy and spiritual awareness could coexist and give visitors a sense of belonging.`,
        image: "/img/salvatore-olivieri-blog.png",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "11ty"],
        path: "https://salvatoreolivieri.net/"
      },
      {
        name: "Arcade Mania",
        concept: `One of my first frontend project where I have developed six vintage game (available only Desktop). Happy to share it spontaneously to remember where I came from.`,
        image: "/img/arcade-mania.png",
        technologies: ["HTML", "CSS", "Javascript"],
        path: "https://arcade-mania.netlify.app/",
        github: "https://github.com/salvatoreolivieri/arcade-games"
      }
    ]
  },
  {
    title: {
      label: "Famous Website Reproduction."
    },
    projects: [
      {
        name: "Netflix",
        concept: "Frontend replication of the famous Netflix streaming digital platform.",
        image: "/img/Netflix.png",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "VueJs"],
        github: "https://github.com/salvatoreolivieri/netflix-replication"
      },
      {
        name: "WhatsApp Web",
        concept: "Frontend replication of WhatsApp Web Platform (also with dark mode feature).",
        image: "/img/WhatsappWeb-Dark.png",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "VueJs"],
        github: "https://github.com/salvatoreolivieri/whatsapp-replication"
      },
      {
        name: "Spotify Web",
        concept: "Frontend replication of Spotify Web.",
        image: "/img/Spotify.png",
        technologies: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/salvatoreolivieri/spotifyweb-replication"
      },
      {
        name: "Discord",
        concept: "Frontend replication of Discord Website Homepage.",
        image: "/img/Discord.png",
        technologies: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/salvatoreolivieri/discord-replication"
      },
      {
        name: "DC Comics",
        concept: "Frontend replication of DC Comics Website Homepage.",
        image: "/img/DC-Comics.png",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
        github: "https://github.com/salvatoreolivieri/dc-comics-replication"
      },
      {
        name: "Dropbox",
        concept: "Frontend replication of Dropbox Website Homepage.",
        image: "/img/Dropbox.png",
        technologies: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/salvatoreolivieri/dropbox-replication"
      },
      {
        name: "Playstation",
        concept: "Frontend replication of Playstation Website Homepage.",
        image: "/img/Playstation.png",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
        github: "https://github.com/salvatoreolivieri/playstation-replication"
      }
    ]
  },
  {
    title: {
      label: "BluePrint Ready To Use"
    },
    projects: [
      {
        name: "Nuxt Blueprint",
        concept: `Here you can find a simple Nuxt + TailwindCSS blueprint Project Configuration ready to use for professional project. Feel free to use it to your own creation.`,
        image: "/img/nuxt_tailwind.png",
        technologies: ["NuxtJs", "Tailwind CSS"],
        github: "https://github.com/salvatoreolivieri/nuxt-blueprint"
      },
      {
        name: "11ty Blueprint",
        concept: `Here you can find a simple 11ty blueprint Project Configuration ready to use for personal project. Feel free to use it to your own creation`,
        image: "/img/11ty.png",
        technologies: ["11ty"],
        github: "https://github.com/salvatoreolivieri/eleventy-blueprint"
      }
    ]
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Project",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionSubHero = _sfc_main$7;
      const _component_UtilityCard = _sfc_main$2;
      const _component_UtilityLabel = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-padded-sm" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionSubHero, {
        title: "Stuff created spreading creativity",
        text: "In this page you can find **all the project I have developed**. Each project is a **peace of me** created with **joy** and **enthusiasm**."
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(projectList), ({ projects, title }, index2) => {
        _push(`<div><h3 class="mb-4 text-2xl font-bold dark:text-zinc-100 text-zinc-800">${ssrInterpolate(title.label)}</h3><div class="mb-20 md:px-0 gap-10 flex flex-wrap flex-col md:flex-row"><!--[-->`);
        ssrRenderList(projects, (item, index22) => {
          _push(ssrRenderComponent(_component_UtilityCard, mergeProps({
            key: `card${index22}`
          }, item), null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--><h3 class="mb-4 text-2xl font-bold dark:text-zinc-100 text-zinc-800"> Technologies Used Daily </h3><div class="flex gap-3 flex-wrap mb-10"><!--[-->`);
      ssrRenderList(unref(technologies), ({ text }, index2) => {
        _push(ssrRenderComponent(_component_UtilityLabel, {
          key: `label${index2}`,
          text,
          class: "text-gray-500"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/Project.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PagesProject = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PagesProject, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.6308a03b.mjs.map
