<script setup lang="ts">
import type L from "leaflet";
import { useMapDisplayStore } from "~/stores/MapDisplay.store";
import MapBlocMarkers from "./bloc/MapBlocMarkers.vue";

const { hoverPlace, selectedPlace, mouse, gps, isMenuVisible, isAdding } =
  storeToRefs(useMapDisplayStore());

const handleContextMenu = (ev: L.LeafletMouseEvent) => {
  gps.value.latitude = ev.latlng.lat;
  gps.value.longitude = ev.latlng.lng;

  mouse.value.x = ev.originalEvent.pageX;
  mouse.value.y = ev.originalEvent.pageY;

  selectedPlace.value = hoverPlace.value;
  isMenuVisible.value = true;
};

const handleClick = () => {
  isMenuVisible.value = false;
  isAdding.value = false;
};
</script>

<template>
  <div class="h-full">
    <LMap
      :zoom="6"
      :center="[47.21322, -1.559482]"
      :use-global-leaflet="false"
      class="h-full"
      :options="{
        zoomControl: false,
      }"
      @contextmenu="handleContextMenu"
      @click="handleClick"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <MapBlocMarkers />
    </LMap>
    <MapBlocMenu v-if="isMenuVisible" />
  </div>
</template>
