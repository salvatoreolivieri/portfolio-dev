<script setup lang="ts">
const showMenu = ref(false)
</script>

<template>
  <header class="header-wrapper">
    <UtilityAvatar />

    <div class="flex flex-1 justify-end md:justify-center">
      <UtilityButtonMenu @onOpen="showMenu = $event" />

      <UtilityNavbar />
    </div>

    <UtilityButtonToggleDarkMode />

    <UtilityModalNavigation v-if="showMenu" @onClose="showMenu = $event" />
  </header>
</template>
