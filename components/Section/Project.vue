<script lang="ts" setup>
import { technologies } from "./Technologies"
import { projectList } from "./ProjectList"
</script>

<template>
  <div class="project-wrapper">
    <h1
      class="md:text-5xl mb-1 md:mt-10 md:mb-8 font-bold text-3xl dark:text-zinc-100 text-zinc-800"
    >
      Stuff created spreading creativity and analytical thinking
    </h1>

    <p class="text-zinc-600 dark:text-zinc-200 md:text-lg mb-10">
      I have developed a lot of project and inside of each I have followed a
      conceptual idea that I want to share with you.
    </p>

    <div class="mb-10 px-4 md:px-0 gap-10 flex flex-col md:flex-row">
      <UtilityCard
        v-for="(item, index) in projectList"
        :key="`card${index}`"
        :image="item.image"
      />
      <UtilityCard
        v-for="(item, index) in projectList"
        :key="`card${index}`"
        :image="item.image"
      />
    </div>

    <h3 class="mb-4 text-xl font-bold">Technologies</h3>

    <div class="flex gap-3 flex-wrap">
      <UtilityLabel
        v-for="({ text }, index) in technologies"
        :key="`label${index}`"
        :text="text"
      />
    </div>
  </div>
</template>
