<script setup lang="ts">
import { MapIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <main class="page page-center">
    <h1 class="mb-8 text-center text-4xl font-bold">
      Indiquez vos lieus favoris sur des cartes.
    </h1>
    <NuxtLink to="/carte" class="btn btn-primary">
      <MapIcon class="size-6" />
      <span>Voir les lieux</span>
    </NuxtLink>
  </main>
</template>
