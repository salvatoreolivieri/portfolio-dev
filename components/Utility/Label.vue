<script setup lang="ts">
defineProps({
  text: String,
})
</script>

<template>
  <span
    class="cursor-default inline-flex items-center text-sm text-gray-900 bg-white rounded-lg hover:text-[#f4867e] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-[#f4867e] dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10 ring-1 font-bold shadow-lg py-2 px-4 dark:group-hover:stroke-zinc-400"
  >
    {{ text }}
  </span>
</template>
