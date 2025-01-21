<script setup lang="ts">
const { menuStyle } = useMapDisplayState();
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
