<script setup lang="ts">
const placeStore = usePlaceStore();
const { places } = storeToRefs(placeStore);
</script>

<template>
  <div v-for="place in places" :key="place.id" class="rounded-lg border p-2">
    <div class="font-bold">{{ place.name }}</div>
    <div>
      {{
        `${place.gps.latitude.toFixed(5)}, ${place.gps.longitude.toFixed(5)}`
      }}
    </div>
  </div>
</template>
