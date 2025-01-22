<script setup lang="ts">
import { useMapDisplayStore } from "~/stores/MapDisplay.store";

const { menuStyle } = storeToRefs(useMapDisplayStore());
</script>

<template>
  <ul
    class="menu menu-vertical absolute z-[9999] w-60 rounded-box bg-white"
    :style="menuStyle"
  >
    <MapBlocMenuSelected />
    <MapBlocMenuNormal />
  </ul>
</template>
