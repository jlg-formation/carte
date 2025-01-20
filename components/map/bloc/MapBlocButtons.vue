<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/solid";

const placeStore = usePlaceStore();

const handleImport = async () => {
  console.log("handleImport");
  await placeStore.importJson();
};
const handleExport = async () => {
  console.log("handleExport");
  await placeStore.exportJson();
};
</script>

<template>
  <nav class="flex gap-2">
    <button class="btn" @click="handleImport">
      <ArrowDownTrayIcon class="size-6" />
      <span>Import</span>
    </button>
    <button class="btn" @click="handleExport">
      <ArrowUpTrayIcon class="size-6" />
      <span>Export</span>
    </button>
  </nav>
</template>
