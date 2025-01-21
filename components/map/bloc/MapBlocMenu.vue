<script setup lang="ts">
import { MapPinIcon, PencilIcon, PlusIcon } from "@heroicons/vue/24/solid";

const { menuStyle, selectedPlace, isAdding, isUpdating, name, gpsCoord } =
  useMapDisplayState();
const {
  removePlace,
  updatePlace,
  updatePlace2,
  copyGpsCoord,
  addPlace,
  addPlace2,
} = useMapDisplayHandlers();
</script>

<template>
  <ul
    class="menu menu-vertical absolute z-[9999] w-60 rounded-box bg-white"
    :style="menuStyle"
  >
    <template v-if="selectedPlace">
      <li>
        <a @click="removePlace(selectedPlace)">
          <PlusIcon class="size-6 text-neutral-500" />
          <span>Supprimer le lieu</span>
        </a>
      </li>
      <li>
        <a @click="updatePlace" v-if="!isUpdating">
          <PencilIcon class="size-6 text-neutral-500" />
          <span>Editer le nom</span>
        </a>
        <form @submit.prevent="updatePlace2(selectedPlace)" v-else>
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
</template>
