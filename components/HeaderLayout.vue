<script setup lang="ts">
import AuthConnection from "./authentication/AuthConnection.vue";

const runtimeConfig = useRuntimeConfig();

const base = runtimeConfig.app.baseURL;
</script>

<template>
  <Teleport to="head">
    <link rel="shortcut icon" :href="base + 'logo.svg'" />
  </Teleport>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
  />
  <header class="flex h-12 items-center justify-between bg-base-200 pr-2">
    <NuxtLink
      to="/"
      class="flex items-center gap-2 rounded-lg px-2 hover:bg-base-300"
    >
      <svg viewBox="0 0 128 128" class="h-10">
        <g fill="currentColor">
          <path
            d="M83,125.5l43-22.1V0.5L83,22.5l-39-20L1,24.6v103l43-22.1L83,125.5z M87,29.4l31-15.9v85l-31,15.9V29.4z M48,13.5l31,15.9   v85L48,98.6V13.5z M40,98.6L9,114.5v-85l31-15.9V98.6z"
          />
        </g>
      </svg>
      <span class="font-bold md:text-xl">Cartes</span>
    </NuxtLink>
    <div>
      <AuthConnection />
      <ThemeSwitcher />
    </div>
  </header>
</template>
