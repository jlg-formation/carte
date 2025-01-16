<script setup lang="ts">
import { MapPinIcon, PlusIcon } from "@heroicons/vue/24/solid";
import type { GPS } from "~/interfaces/GPS";

const gps = ref<GPS>({
  latitude: 0,
  longitude: 0,
});

const x = ref(0);
const y = ref(0);

const menuStyle = computed(() => {
  const result = {
    left: `${x.value}px`,
    top: `calc(${y.value}px - 3rem)`,
  };
  return result;
});

const gpsCoord = computed(() => {
  return gps.value.latitude.toFixed(5) + ", " + gps.value.longitude.toFixed(5);
});

const isMenuVisible = ref(false);

const handleContextMenu = (ev: any) => {
  console.log("ev: ", ev);
  gps.value.latitude = ev.latlng.lat;
  gps.value.longitude = ev.latlng.lng;

  x.value = ev.originalEvent.pageX;
  y.value = ev.originalEvent.pageY;

  isMenuVisible.value = true;
};

const handleClick = () => {
  isMenuVisible.value = false;
};

const copyGpsCoord = () => {
  isMenuVisible.value = false;
  navigator.clipboard.writeText(
    gps.value.latitude + ", " + gps.value.longitude,
  );
};

const placeStore = usePlaceStore();

const addPlace = () => {
  isMenuVisible.value = false;

  placeStore.add({
    gps: gps.value,
    name: "Endroit magnifique",
  });
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
    </LMap>
    <ul
      v-if="isMenuVisible"
      class="menu menu-vertical absolute z-[9999] rounded-box bg-white"
      :style="menuStyle"
    >
      <li>
        <a @click="copyGpsCoord">
          <MapPinIcon class="size-6 text-neutral-500" />
          <span>{{ gpsCoord }}</span>
        </a>
        <a @click="addPlace">
          <PlusIcon class="size-6 text-neutral-500" />
          <span>Ajouter un lieu</span>
        </a>
      </li>
    </ul>
  </div>
</template>
