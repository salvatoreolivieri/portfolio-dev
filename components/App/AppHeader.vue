<script setup lang="ts">
import { navigation } from "./Navigation"

const showMenu = ref(false)

type Theme = "light" | "dark"
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
  console.log(useColorMode())
}
</script>

<template>
  <header
    class="header-wrapper md:px-0 px-4 py-4 relative flex items-center gap-2 container"
  >
    <!-- Profile Photo -->
    <div class="flex flex-1">
      <NuxtLink to="/">
        <img
          class="w-10 h-10 rounded-full"
          src="../../assets/img/salvatore-olivieri.jpg"
          alt=""
        />
      </NuxtLink>
    </div>

    <div class="flex flex-1 justify-end md:justify-center">
      <!-- Button open mobile modal -->
      <div class="pointer-events-auto md:hidden">
        <button
          @click="showMenu = true"
          class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          id="headlessui-popover-button-:Rqb6:"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
        >
          Menu<svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Navbar desktop -->
      <nav class="pointer-events-auto hidden md:block">
        <ul
          class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
        >
          <li
            v-for="({ label, path }, index) in navigation"
            :key="`navigation${index}`"
            class="px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            data-headlessui-state="open"
          >
            <NuxtLink :to="path">
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Toggle Dark Mode Button -->
    <div class="flex justify-end md:flex-1">
      <div class="pointer-events-auto">
        <button
          @click="
            setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
          type="button"
          aria-label="Toggle dark mode"
          class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        >
          <IconsDark v-if="$colorMode.value === 'light'" />
          <IconsLight v-if="$colorMode.value === 'dark'" />
        </button>
      </div>
    </div>

    <!-- Mobile Modal -->
    <div v-if="showMenu" class="md:hidden">
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
            @click="showMenu = false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
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
        </div>
        <nav class="mt-6">
          <ul
            class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
          >
            <li
              v-for="({ label, path }, index) in navigation"
              :key="`navigation${index}`"
              class="block py-2"
              data-headlessui-state="open"
            >
              <NuxtLink :to="path">
                {{ label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
