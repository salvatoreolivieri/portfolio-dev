<script setup lang="ts">
import { philosophy } from "../Pages/Philosophy.principles"
</script>

<template>
  <ol class="relative border-l border-gray-200 dark:border-gray-700 mx-2">
    <li
      v-for="({ subtitle, title, text }, index) in philosophy"
      :key="`philosophy${index}`"
      class="mb-10 ml-4"
    >
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >{{ subtitle }}</time
      >
      <div class="relative">
        <h3
          class="text-2xl max-w-max font-semibold text-gray-900 my-2 dark:text-white creative-underline"
        >
          {{ title }}
        </h3>
      </div>
      <div class="w-full md:w-[80%]">
        <UtilityMarkdown
          class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          :content="text"
          inline
        />
      </div>
    </li>
  </ol>
</template>
