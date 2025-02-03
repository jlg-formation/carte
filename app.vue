<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const base = runtimeConfig.app.baseURL;

useHead({
  title: "Carte : Mes endroits préférés",
  meta: [
    {
      name: "description",
      content: "Localise tes endroits préférés sur une carte.",
    },
  ],
  link: [
    {
      rel: "shortcut icon",
      href: base + "logo.svg",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
