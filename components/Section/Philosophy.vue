<script setup lang="ts">
import { philosophy } from "./PhilosophyPrinciples"
</script>

<template>
  <div class="philosophy-wrapper">
    <h1
      class="md:text-5xl mb-1 md:mt-10 md:mb-8 font-bold text-3xl dark:text-zinc-100 text-zinc-800"
    >
      My Life Philosophy explained
    </h1>

    <p class="text-zinc-600 dark:text-zinc-200 md:text-lg mb-10">
      Who am I and what is the meaning of life? Here you can find my personal
      answer explained following four of my most profound paradigms and
      thesis.<br /><br />
      Let’s dive into it.
    </p>

    <ol class="relative border-l border-gray-200 dark:border-gray-700 mx-2">
      <li
        v-for="({ subtitle, title }, index) in philosophy"
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
        <h3 class="text-2xl font-semibold text-gray-900 my-2 dark:text-white">
          {{ title }}
        </h3>
        <p
          class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
        >
        text goes here
      </p>
      </li>
    </ol>
  </div>
</template>
