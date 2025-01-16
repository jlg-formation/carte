<script setup lang="ts">
const lat = ref(0);
const lng = ref(0);

const handleMouseMove = (ev: any) => {
  console.log("handleMouseMove");
  lat.value = ev.latlng.lat;
  lng.value = ev.latlng.lng;
};

const handleContextMenu = () => {
  alert(lat.value + ", " + lng.value);
};
</script>

<template>
  <LMap
    :zoom="6"
    :center="[47.21322, -1.559482]"
    :use-global-leaflet="false"
    class="h-full"
    :options="{
      zoomControl: false,
    }"
    @mousemove="handleMouseMove"
    @contextmenu="handleContextMenu"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      layer-type="base"
      name="OpenStreetMap"
    />
  </LMap>
</template>
