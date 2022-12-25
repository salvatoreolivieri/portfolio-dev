<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="hero-section-wrapper container px-4 md:px-6">
      <div class="flex flex-col py-8 items-center md:pt-16 md:pb-20 w-full">
        <span
          class="mb-4 md:mb-6 text-xs md:text-sm dark:text-zinc-100 text-zinc-800"
          >📩 Email me!</span
        >
        <h1
          class="md:text-6xl mb-1 md:mb-3 font-bold text-3xl dark:text-zinc-100 text-zinc-800"
        >
          Write cool stuff
        </h1>
        <h3
          class="text-lg md:text-4xl text-gray-300 dark:text-gray-500 mb-6 md:mb-10"
        >
          Be kind and creative
        </h3>

        <p class="text-zinc-600 dark:text-zinc-200 text-center md:text-lg mb-4">
          I embrace the wonders of diversity and I am always open to exchanging perspectives and points of view. Contact me to talk about a tech project, to explore philosophical topics, to tell me about some existential doubts that keep you up at night or just to explain me something crazy enough that it is worth sharing.
        </p>

        <!-- <UtilityButton text="Explore my philosophy" path="/philosophy" /> -->

        <div
          class="mt-2 w-28 bg-[#F4867E] rounded-full flex justify-center items-center h-28 talk-wrapper border border-white"
        >
          <a href="mailto:salvatoreolivierii@outlook.it" target="_blank"
            ><div style="transform: translate(0px, 0px)">
              <img
                class="w-20 h-20"
                src="../../assets/img/lets-talk.png"
                alt="talk button"
              />
              <div style="opacity: 0; transform: scale(3, 3)"></div></div
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
