<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  placeholder: String,
  text: String,
  isContactPage: Boolean,
  isHomePage: Boolean,
})
</script>

<template>
  <div class="flex flex-col py-8 items-center md:pt-16 w-full">
    <span class="placeholder"> {{ placeholder }}</span>

    <h1 class="title">{{ title }}</h1>
    <h3 class="subtitle">{{ subtitle }}</h3>

    <UtilityMarkdown class="paragraph" :content="text" />

    <UtilityButtonContact v-if="isContactPage" />

    <CreativeSeaMode v-if="isHomePage" />
  </div>
</template>
