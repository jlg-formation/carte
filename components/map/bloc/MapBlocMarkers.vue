<script setup lang="ts">
import { useMapDisplay } from "~/composables/useMapDisplay";
import type { Place } from "~/interfaces/Place";

const runtimeConfig = useRuntimeConfig();

const base = runtimeConfig.app.baseURL;
const marker = base + "marker-icon-2x-blue.png";
const selectedMarker = base + "marker-icon-2x-green.png";
const shadowMarker = base + "marker-shadow.png";

const { places } = storeToRefs(usePlaceStore());
const { selectedPlace } = useMapDisplay();

const handleMarkerMouseover = (place: Place) => {
  selectedPlace.value = place;
};
const handleMarkerMouseout = () => {
  selectedPlace.value = undefined;
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
      :icon-url="selectedPlace === place ? selectedMarker : marker"
      :shadow-url="shadowMarker"
      :icon-size="[25, 41]"
      :iconAnchor="[16, 37]"
    >
    </LIcon>
    <LTooltip :options="{ offset: { x: -4, y: -36 }, direction: 'top' }">
      {{ place.name }}
    </LTooltip>
  </LMarker>
</template>
