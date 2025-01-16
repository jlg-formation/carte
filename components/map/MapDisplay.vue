<script setup lang="ts">
const lat = ref(0);
const lng = ref(0);

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
  return lat.value.toFixed(5) + ", " + lng.value.toFixed(5);
});

const isMenuVisible = ref(false);

const handleContextMenu = (ev: any) => {
  console.log("ev: ", ev);
  lat.value = ev.latlng.lat;
  lng.value = ev.latlng.lng;
  console.log(lat.value + ", " + lng.value);

  x.value = ev.originalEvent.pageX;
  y.value = ev.originalEvent.pageY;

  isMenuVisible.value = true;
};

const handleClick = () => {
  isMenuVisible.value = false;
};

const copyGpsCoord = () => {
  isMenuVisible.value = false;
  navigator.clipboard.writeText(lat.value + ", " + lng.value);
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
        <a @click="copyGpsCoord">{{ gpsCoord }}</a>
      </li>
    </ul>
  </div>
</template>
