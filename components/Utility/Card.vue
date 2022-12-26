<script setup lang="ts">
defineProps({
  name: String,
  concept: String,
  image: String,
  technologies: Array,
  path: String,
  comingSoon: Boolean,
})

const showModal = ref(true)
</script>

<template>
  <div
    class="w-full min-h-[100px] border border-zinc-800 dark:border-zinc-100 rounded-lg max-w-[400px] md:min-h-[200px] relative"
  >
    <img
      class="rounded-lg"
      src="../../assets/img/salvatore-olivieri-blog.png"
      alt=""
    />
    <UtilityLabel
      @click="showModal = true"
      class="absolute w-36 justify-center -bottom-4 left-[50%] -translate-x-1/2"
      text="Discover Project"
    />

    <!-- <div v-if="showModal" class="md:hidden">
      <div
        class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
        id="headlessui-popover-overlay-:r1m:"
        aria-hidden="true"
        data-headlessui-state="open"
      ></div>
      <div
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
        id="headlessui-popover-panel-:Rqb6H1:"
        tabindex="-1"
        data-headlessui-state="open"
      >
        <div class="flex flex-row-reverse items-center justify-between">
          <svg
            @click="showModal = false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6 text-zinc-500 dark:text-zinc-400 cursor-pointer"
          >
            <path
              d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h2 class="text-lg font-bold">Navigation</h2>
        </div>
        <nav class="mt-6">
          <ul
            class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
          >
            name:
            {{
              name
            }}, concept:
            {{
              concept
            }}, technologies:
            {{
              technologies
            }},
          </ul>
        </nav>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss"></style>
