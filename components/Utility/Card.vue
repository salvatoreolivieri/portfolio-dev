<script setup lang="ts">
defineProps({
  name: String,
  concept: String,
  image: String,
  technologies: Array,
  path: String,
  comingSoon: Boolean,
})
</script>

<template>
  <div
    class="min-w-[200px] min-h-[100px] border border-zinc-800 rounded-lg"
  ></div>
</template>

<style scoped lang="scss"></style>
