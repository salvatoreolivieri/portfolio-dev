<script setup lang="ts">
import { navigation } from "../App/AppHeader.navigation"

const emit = defineEmits<{ (e: "onClose", value: boolean): void }>()

const handleClose = (value: boolean) => {
  emit("onClose", value)
}
</script>

<template>
  <div class="md:hidden">
    <div
      class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
      id="headlessui-popover-overlay-:r1m:"
      aria-hidden="true"
      data-headlessui-state="open"
    ></div>
    <div
      class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
    >
      <div class="flex flex-row-reverse items-center justify-between">
        <UtilityButtonEsc @click="handleClose(false)" />

        <h2 class="text-lg font-bold dark:text-zinc-100 text-zinc-800">
          Navigation
        </h2>
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
            <NuxtLink @click="handleClose(false)" :to="path">
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
