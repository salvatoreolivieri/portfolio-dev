<script setup lang="ts">
defineProps({
  text: String,
})
</script>

<template>
  <span
    class="inline-flex items-center text-sm bg-white rounded-lg focus:z-10 dark:bg-zinc-800 dark:text-zinc-200 ring-1 ring-zinc-900/5 font-bold shadow-lg py-2 px-4 dark:group-hover:stroke-zinc-40 hover:bg-gray-100 hover:text-gray-900"
  >
    {{ text }}
  </span>
</template>
