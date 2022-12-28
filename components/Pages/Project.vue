<script lang="ts" setup>
import { technologies } from "./Project.technologies"
import { projectList } from "./Project.list"
</script>

<template>
  <div class="container-padded-sm">
    <SectionSubHero
      title="Stuff created spreading creativity"
      text="In this page you can find **all the project I have developed**. Each project is a **peace of me** created with **joy** and **enthusiasm**."
    />

    <div
      v-for="({ projects, title }, index) in projectList"
      :key="`project${index}`"
    >
      <h3 class="mb-4 text-2xl font-bold dark:text-zinc-100 text-zinc-800">
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

    <h3 class="mb-4 text-2xl font-bold dark:text-zinc-100 text-zinc-800">
      Technologies Used Daily
    </h3>

    <div class="flex gap-3 flex-wrap mb-10">
      <UtilityLabel
        v-for="({ text }, index) in technologies"
        :key="`label${index}`"
        :text="text"
        class="text-gray-500"
      />
    </div>
  </div>
</template>
