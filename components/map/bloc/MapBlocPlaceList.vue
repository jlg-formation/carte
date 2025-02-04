<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/solid";

const placeStore = usePlaceStore();
const { places } = storeToRefs(placeStore);

const removePlace = async (id: string) => {
  await placeStore.remove([id]);
};
</script>

<template>
  <div
    v-for="place in places"
    :key="place.id"
    class="group flex items-center justify-between rounded-lg border p-2 hover:bg-base-200 active:bg-base-300"
  >
    <div class="flex flex-col">
      <div class="font-bold">{{ place.name }}</div>
      <div>
        {{
          `${place.gps.latitude.toFixed(5)}, ${place.gps.longitude.toFixed(5)}`
        }}
      </div>
    </div>
    <div
      class="invisible cursor-pointer p-2 text-gray-500 hover:text-neutral group-hover:visible"
      @click="removePlace(place.id)"
    >
      <TrashIcon class="size-6" />
    </div>
  </div>
</template>
