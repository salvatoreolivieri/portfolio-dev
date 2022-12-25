<script setup lang="ts">
defineProps({
  text: String,
})
</script>

<template>
  <button class="px-8 py-3 rounded-lg bg-[#171F2B] text-[#6586C1]">
    {{ text }}
  </button>
</template>

<style scoped lang="scss"></style>
