<script setup lang="ts">
defineProps({
  text: String,
  path: String,
})
</script>

<template>
  <button
    class="hover:underline dark:text-zinc-200 dark:hover:text-zinc-90 flex gap-2 "
  >
    <NuxtLink class="text-[#F4867E]" :to="path">
      {{ text }}
    </NuxtLink>

    <IconsArrowRight />
  </button>
</template>

<style scoped lang="scss"></style>
