<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/solid";

const placeStore = usePlaceStore();
const { places } = storeToRefs(placeStore);

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
  <div class="flex flex-col gap-2 pt-4">
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
    <div v-for="place in places" :key="place.id" class="rounded-lg border p-2">
      <div class="font-bold">{{ place.name }}</div>
      <div>
        {{
          `${place.gps.latitude.toFixed(5)}, ${place.gps.longitude.toFixed(5)}`
        }}
      </div>
    </div>
  </div>
</template>
