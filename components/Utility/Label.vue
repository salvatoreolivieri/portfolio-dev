<script setup lang="ts">
defineProps({
  text: String,
})
</script>

<template>
  <span
    class="cursor-default inline-flex items-center text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#f4867e] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-[#f4867e] dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 font-bold shadow-lg py-2 px-4"
  >
    {{ text }}
  </span>
</template>
