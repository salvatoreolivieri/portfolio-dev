<script setup lang="ts"></script>

<template>
  <div>
    <!-- <h1 class="heading-1 font-bold text-5xl h-full">Dont be a stranger!</h1> -->

    <SectionHero />

  </div>
</template>

<style scoped lang="scss">
.heading-1 {
  margin-right: 1rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#b0f3f1),
    to(#ffcfdf)
  );
  line-height: 1.1;
  background-image: -webkit-linear-gradient(left, #b0f3f1, #ffcfdf);
  background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>
