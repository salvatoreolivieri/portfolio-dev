<script setup lang="ts">
defineProps({
  title: String,
  text: String,
})
</script>

<template>
  <h1 class="title-md">{{ title }}</h1>

  <UtilityMarkdown :content="text" class="paragraph md:w-10/12 w-full" />
</template>
