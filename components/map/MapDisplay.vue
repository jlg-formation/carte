<script setup lang="ts">
import { MapPinIcon, PencilIcon, PlusIcon } from "@heroicons/vue/24/solid";
import type { GPS } from "~/interfaces/GPS";
import type { Place } from "~/interfaces/Place";
import MapBlocMarkers from "./bloc/MapBlocMarkers.vue";
import { useMapDisplay } from "~/composables/useMapDisplay";

const { selectedPlace } = useMapDisplay();

const gps = ref<GPS>({
  latitude: 0,
  longitude: 0,
});

const x = ref(0);
const y = ref(0);

const menuStyle = computed(() => {
  const width = window.innerWidth;
  const menuWidth = 240;
  const left = x.value + menuWidth > width ? x.value - menuWidth : x.value;

  const result = {
    left: `${left}px`,
    top: `calc(${y.value}px - 3rem)`,
  };
  return result;
});

const gpsCoord = computed(() => {
  return gps.value.latitude.toFixed(5) + ", " + gps.value.longitude.toFixed(5);
});

const isMenuVisible = ref(false);

const handleContextMenu = (ev: any) => {
  console.log("handleContextMenu ev: ", ev);
  gps.value.latitude = ev.latlng.lat;
  gps.value.longitude = ev.latlng.lng;

  x.value = ev.originalEvent.pageX;
  y.value = ev.originalEvent.pageY;

  menuPlace.value = selectedPlace.value;

  isMenuVisible.value = true;
};

const handleClick = () => {
  isMenuVisible.value = false;
  isAdding.value = false;
};

const copyGpsCoord = () => {
  isMenuVisible.value = false;
  navigator.clipboard.writeText(
    gps.value.latitude + ", " + gps.value.longitude,
  );
};

const placeStore = usePlaceStore();

const isAdding = ref(false);

const addPlace = async () => {
  isAdding.value = true;
};

const name = ref("");

const addPlace2 = async () => {
  if (name.value === "") {
    return;
  }
  isMenuVisible.value = false;
  isAdding.value = false;
  await placeStore.add({
    gps: { ...gps.value },
    name: name.value,
  });
  name.value = "";
};

const isUpdating = ref(false);
const updatePlace = async (menuPlace: Place) => {
  isUpdating.value = true;
};

const updatePlace2 = async (menuPlace: Place) => {
  if (name.value === "") {
    return;
  }

  isMenuVisible.value = false;
  isUpdating.value = false;
  menuPlace.name = name.value;
  await placeStore.update(menuPlace);
  name.value = "";
};

const removePlace = async (place: Place) => {
  console.log("removePlace");
  isMenuVisible.value = false;

  await placeStore.remove([place.id]);
  console.log("removed");
  selectedPlace.value = undefined;
};

const menuPlace = ref<Place | undefined>(undefined);
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
    <ul
      v-if="isMenuVisible"
      class="menu menu-vertical absolute z-[9999] w-60 rounded-box bg-white"
      :style="menuStyle"
    >
      <template v-if="menuPlace">
        <li>
          <a @click="removePlace(menuPlace)">
            <PlusIcon class="size-6 text-neutral-500" />
            <span>Supprimer le lieu</span>
          </a>
        </li>
        <li>
          <a @click="updatePlace(menuPlace)" v-if="!isUpdating">
            <PencilIcon class="size-6 text-neutral-500" />
            <span>Editer le nom</span>
          </a>
          <form @submit.prevent="updatePlace2(menuPlace)" v-else>
            <input
              placeholder="Nom"
              v-focus
              type="text"
              class="input input-sm input-bordered"
              v-model="name"
              required
            />
          </form>
        </li>
      </template>
      <template v-else>
        <li>
          <a @click="copyGpsCoord">
            <MapPinIcon class="size-6 text-neutral-500" />
            <span>{{ gpsCoord }}</span>
          </a>
        </li>
        <li>
          <a @click="addPlace" v-if="!isAdding">
            <PlusIcon class="size-6 text-neutral-500" />
            <span>Ajouter un lieu</span>
          </a>
          <form @submit.prevent="addPlace2" v-else>
            <input
              placeholder="Nom"
              v-focus
              type="text"
              class="input input-sm input-bordered"
              v-model="name"
              required
            />
          </form>
        </li>
      </template>
    </ul>
  </div>
</template>
