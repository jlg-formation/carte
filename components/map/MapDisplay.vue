<script setup lang="ts">
import type L from "leaflet";
import { useMapDisplayStore } from "~/stores/MapDisplay.store";
import MapBlocMarkers from "./bloc/MapBlocMarkers.vue";
import type { PointExpression } from "leaflet";

const LIGHT_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const DARK_URL =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";

const { hoverPlace, lastHoveredPlace, gps, isMenuVisible, isAdding } =
  storeToRefs(useMapDisplayStore());
const mouse = useMouse();
const { panToSelectedPlaceLastDate, selectedPlace } =
  storeToRefs(usePlaceStore());

const theme = inject<Ref<string>>("theme");
const url = computed(() => (theme?.value === "dark" ? DARK_URL : LIGHT_URL));
const handleContextMenu = (ev: L.LeafletMouseEvent) => {
  gps.value.latitude = ev.latlng.lat;
  gps.value.longitude = ev.latlng.lng;
  mouse.update(ev.originalEvent);
  lastHoveredPlace.value = hoverPlace.value;
  isMenuVisible.value = true;
};
const handleClick = () => {
  isMenuVisible.value = false;
  isAdding.value = false;
};

const center = ref<PointExpression>([47.21322, -1.559482]);
watch(panToSelectedPlaceLastDate, () => {
  console.log("about to pan to ...");
  if (selectedPlace.value === undefined) {
    return;
  }
  const gps = selectedPlace.value.gps;
  center.value = [gps.latitude, gps.longitude];
});
</script>

<template>
  <div class="h-full">
    <LMap
      :zoom="6"
      :center
      :use-global-leaflet="false"
      class="h-full"
      :options="{
        zoomControl: false,
      }"
      @contextmenu="handleContextMenu"
      @click="handleClick"
    >
      <LTileLayer
        :url="url"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <MapBlocMarkers />
    </LMap>
    <MapBlocMenu v-if="isMenuVisible" />
  </div>
</template>
