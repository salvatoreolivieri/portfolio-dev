<script setup lang="ts">
type Theme = "light" | "dark"

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
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
        <IconsDark />
        <IconsLight />
      </button>
    </div>
  </div>
</template>
