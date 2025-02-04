<script setup lang="ts">
import type { Place } from "~/interfaces/Place";
import { useMapDisplayStore } from "~/stores/MapDisplay.store";

const runtimeConfig = useRuntimeConfig();

const base = runtimeConfig.app.baseURL;
const marker = base + "marker-icon-2x-blue.png";
const selectedMarker = base + "marker-icon-2x-red.png";
const hoverMarker = base + "marker-icon-2x-green.png";
const shadowMarker = base + "marker-shadow.png";

const { places, selectedPlaceId } = storeToRefs(usePlaceStore());
const { hoverPlace } = storeToRefs(useMapDisplayStore());

const handleMarkerMouseover = (place: Place) => {
  hoverPlace.value = place;
};
const handleMarkerMouseout = () => {
  hoverPlace.value = undefined;
};

const getIconUrl = (place: Place) => {
  return hoverPlace.value === place
    ? hoverMarker
    : place.id === selectedPlaceId.value
      ? selectedMarker
      : marker;
};

const handleClick = () => {
  console.log("handle click");
  if (hoverPlace.value === undefined) {
    return;
  }
  selectedPlaceId.value = hoverPlace.value.id;
};
</script>

<template>
  <LMarker
    v-for="place in places"
    :key="place.id"
    :lat-lng="[place.gps.latitude, place.gps.longitude]"
    @mouseover="handleMarkerMouseover(place)"
    @mouseout="handleMarkerMouseout()"
    @click="handleClick"
  >
    <LIcon
      :icon-url="getIconUrl(place)"
      :shadow-url="shadowMarker"
      :icon-size="[25, 41]"
      :icon-anchor="[16, 37]"
    >
    </LIcon>
    <LTooltip :options="{ offset: { x: -4, y: -36 }, direction: 'top' }">
      {{ place.name }}
    </LTooltip>
  </LMarker>
</template>
