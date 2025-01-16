<script setup lang="ts">
import { MapIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <main class="page page-center">
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Vos endroits sur des cartes.</h1>
          <p class="py-6">
            Produisez des cartes avec des lieux intéressant et partagez les !
          </p>

          <NuxtLink to="/carte" class="btn btn-primary">
            <MapIcon class="size-6" />
            <span>Voir les lieux</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
