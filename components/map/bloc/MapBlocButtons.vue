<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/solid";

const placeStore = usePlaceStore();

const scrollToSelectedPlace = () => {
  if (placeStore.selectedPlaceId === undefined) {
    return;
  }
  const elt = window.document.getElementById(placeStore.selectedPlaceId);
  if (elt === null) {
    return;
  }
  elt.scrollIntoView();
};
</script>

<template>
  <nav class="flex gap-2">
    <button class="btn btn-sm" @click="placeStore.importJson()">
      <ArrowDownTrayIcon class="size-6" />
      <span>Import</span>
    </button>
    <button class="btn btn-sm" @click="placeStore.exportJson()">
      <ArrowUpTrayIcon class="size-6" />
      <span>Export</span>
    </button>
    <button
      class="btn btn-sm"
      title="Scroll to selected place"
      @click="scrollToSelectedPlace"
    >
      <ArrowUpTrayIcon class="size-6" />
    </button>
  </nav>
</template>
