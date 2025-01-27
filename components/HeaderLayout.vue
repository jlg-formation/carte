<script setup lang="ts">
import AuthConnection from "./authentication/AuthConnection.vue";
</script>

<template>
  <header class="flex h-12 items-center justify-between bg-gray-100 pr-2">
    <NuxtLink
      to="/"
      class="flex items-center gap-2 rounded-lg px-2 hover:bg-gray-200"
    >
      <img src="/logo.svg" alt="Logo" class="h-6 md:h-10" />
      <span class="font-bold md:text-xl">Cartes</span>
    </NuxtLink>
    <AuthConnection />
    <ThemeSwitcher />
  </header>
</template>
