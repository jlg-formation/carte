<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/solid";

const placeStore = usePlaceStore();
</script>

<template>
  <nav class="flex gap-2">
    <button class="btn" @click="placeStore.importJson()">
      <ArrowDownTrayIcon class="size-6" />
      <span>Import</span>
    </button>
    <button class="btn" @click="placeStore.exportJson()">
      <ArrowUpTrayIcon class="size-6" />
      <span>Export</span>
    </button>
  </nav>
</template>
