<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
const theme = inject("theme");
</script>

<template>
  <span class="btn btn-sm" @click="theme = theme === 'dark' ? 'light' : 'dark'">
    <MoonIcon v-if="theme === 'dark'" class="size-6" />
    <SunIcon v-else class="size-6" />
  </span>
</template>
