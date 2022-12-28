<script setup lang="ts">
import { philosophy } from "./Philosophy.principles"
</script>

<template>
  <div class="philosophy-wrapper container px-4">
    <h1
      class="md:text-5xl mt-6 mb-4 md:mt-10 md:mb-6 font-bold text-3xl dark:text-zinc-100 text-zinc-800"
    >
      My Life Philosophy explained
    </h1>

    <p
      class="text-zinc-600 dark:text-zinc-200 md:text-lg mb-10 w-full md:w-10/12"
    >
      <strong>Who am I</strong> and what is the
      <strong>meaning of life</strong>? Here you can find
      <strong>my personal answer</strong> explained following four of my most
      profound <strong>paradigms</strong> and <strong>thesis</strong>.
    </p>

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
  </div>
</template>
