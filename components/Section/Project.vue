<script lang="ts" setup>
import { technologies } from "./Technologies"
import { projectList } from "./ProjectList"
</script>

<template>
  <div class="project-wrapper pb-10">
    <h1
      class="md:text-5xl mt-6 mb-4 md:mt-10 md:mb-6 font-bold text-3xl dark:text-zinc-100 text-zinc-800"
    >
      Stuff created spreading creativity
    </h1>

    <p class="text-zinc-600 dark:text-zinc-200 md:text-lg mb-10">
      In this page you can find
      <strong>all the project I have developed</strong>. Each project is a
      <strong>peace of me</strong> created created with <strong>joy</strong> and
      <strong>enthusiasm</strong>.
    </p>

    <div
      v-for="({ projects, title }, index) in projectList"
      :key="`project${index}`"
    >
      <h3 class="mb-4 text-xl font-bold dark:text-zinc-100 text-zinc-800">
        {{ title.label }}
      </h3>

      <div class="mb-20 md:px-0 gap-10 flex flex-wrap flex-col md:flex-row">
        <UtilityCard
          v-for="(item, index) in projects"
          :key="`card${index}`"
          v-bind="item"
        />
      </div>
    </div>

    <h3 class="mb-4 text-xl font-bold dark:text-zinc-100 text-zinc-800">
      Technologies Used Daily
    </h3>

    <div class="flex gap-3 flex-wrap">
      <UtilityLabel
        v-for="({ text }, index) in technologies"
        :key="`label${index}`"
        :text="text"
        class="text-gray-500"
      />
    </div>
  </div>
</template>
