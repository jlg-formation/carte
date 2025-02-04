<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/solid";

const placeStore = usePlaceStore();
const { places, panToSelectedPlaceLastDate } = storeToRefs(placeStore);

const removePlace = async (id: string) => {
  await placeStore.remove([id]);
};

const selectPlace = (id: string) => {
  placeStore.select(id);

  if (placeStore.selectedPlaceId) {
    panToSelectedPlaceLastDate.value = new Date();
  }
};
</script>

<template>
  <div
    v-for="place in places"
    :id="place.id"
    :key="place.id"
    class="group flex items-center justify-between rounded-lg border p-2 active:bg-base-300"
    :class="
      place.id === placeStore.selectedPlaceId
        ? 'bg-base-300 hover:bg-base-300'
        : 'hover:bg-base-200'
    "
  >
    <div
      class="flex flex-grow cursor-pointer flex-col"
      @click="selectPlace(place.id)"
    >
      <div class="font-bold">{{ place.name }}</div>
      <div>
        {{
          `${place.gps.latitude.toFixed(5)}, ${place.gps.longitude.toFixed(5)}`
        }}
      </div>
    </div>
    <div
      class="invisible cursor-pointer rounded-full border border-gray-500 p-2 text-gray-500 hover:border-base-content hover:text-base-content group-hover:visible"
      @click="removePlace(place.id)"
    >
      <TrashIcon class="size-6" />
    </div>
  </div>
</template>
