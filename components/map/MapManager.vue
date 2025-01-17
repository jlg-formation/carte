<script setup lang="ts">
const { places } = storeToRefs(usePlaceStore());
</script>

<template>
  <div class="flex flex-col gap-2 pt-4">
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
