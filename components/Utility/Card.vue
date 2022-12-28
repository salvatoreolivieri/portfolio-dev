<script setup lang="ts">
defineProps({
  name: String,
  concept: String,
  image: String,
  technologies: Array,
  path: String,
  github: String,
})

const showModal = ref(false)
</script>

<template>
  <div
    class="w-full min-h-[100px] ring-1 ring-zinc-100 rounded-lg max-w-[350px] md:min-h-[175px] relative"
  >
    <img class="rounded-lg h-full w-full" :src="image" alt="" />

    <UtilityLabel
      @click="showModal = true"
      class="absolute w-36 justify-center -bottom-4 left-[50%] -translate-x-1/2 cursor-pointer ring-1 ring-zinc-100 text-gray-900"
      text="Discover Project"
    />

    <!-- Main modal -->
    <div
      v-if="showModal"
      class="fixed flex justify-center items-center inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100 p-4 overflow-scroll"
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow dark:bg-zinc-900 ring-1 ring-zinc-900/5 dark:ring-zinc-800"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ name }}
            </h3>
            <button
              @click="showModal = false"
              id="esc"
              class="esc text-xs w-10 text-gray-400 p-1 bg-gray-50 rounded-md dark:bg-zinc-800/90 dark:text-zinc-200 ring-[#dee2e6] ring-1 dark:ring-zinc-900/5"
            >
              esc
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              <UtilityMarkdown inline :content="concept" /> <br />
            </p>
            <div class="flex gap-3 flex-wrap">
              <UtilityLabel
                v-for="(technology, index) in technologies"
                :key="`technology${index}`"
                :text="technology"
              />
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-3 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <a
              target="_blank"
              v-if="path"
              :href="path"
              class="text-zinc-800 bg-[#f4867e] hover:bg-[#f4867e]/80 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#f4867e]/90 dark:hover:bg-[#f4867e] flex items-center gap-2"
            >
              <IconsLink />
              Visit</a
            >

            <a
              v-if="github"
              target="_blank"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-bold px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 flex items-center gap-2"
              :href="github"
            >
              <IconsGithub />
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
