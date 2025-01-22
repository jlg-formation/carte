<script setup lang="ts">
import type { Place } from "~/interfaces/Place";
import { useMapDisplayStore } from "~/stores/MapDisplay.store";

const runtimeConfig = useRuntimeConfig();

const base = runtimeConfig.app.baseURL;
const marker = base + "marker-icon-2x-blue.png";
const selectedMarker = base + "marker-icon-2x-green.png";
const shadowMarker = base + "marker-shadow.png";

const { places } = storeToRefs(usePlaceStore());
const { hoverPlace } = storeToRefs(useMapDisplayStore());

const handleMarkerMouseover = (place: Place) => {
  hoverPlace.value = place;
};
const handleMarkerMouseout = () => {
  hoverPlace.value = undefined;
};
</script>

<template>
  <LMarker
    v-for="place in places"
    :key="place.gps.latitude"
    :lat-lng="[place.gps.latitude, place.gps.longitude]"
    @mouseover="handleMarkerMouseover(place)"
    @mouseout="handleMarkerMouseout()"
  >
    <LIcon
      :icon-url="hoverPlace === place ? selectedMarker : marker"
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
