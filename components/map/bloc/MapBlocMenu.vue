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
        <a v-if="!isUpdating" @click="updatePlace">
          <PencilIcon class="size-6 text-neutral-500" />
          <span>Editer le nom</span>
        </a>
        <form v-else @submit.prevent="updatePlace2(selectedPlace)">
          <input
            v-model="name"
            v-focus
            placeholder="Nom"
            type="text"
            class="input input-sm input-bordered"
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
        <a v-if="!isAdding" @click="addPlace">
          <PlusIcon class="size-6 text-neutral-500" />
          <span>Ajouter un lieu</span>
        </a>
        <form v-else @submit.prevent="addPlace2">
          <input
            v-model="name"
            v-focus
            placeholder="Nom"
            type="text"
            class="input input-sm input-bordered"
            required
          />
        </form>
      </li>
    </template>
  </ul>
</template>
