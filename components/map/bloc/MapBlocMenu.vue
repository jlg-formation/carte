<script setup lang="ts">
import { MapPinIcon, PlusIcon } from "@heroicons/vue/24/solid";

const { menuStyle, selectedPlace, isAdding, name, gpsCoord } =
  useMapDisplayState();
const { copyGpsCoord, addPlace, addPlace2 } = useMapDisplayHandlers();
</script>

<template>
  <ul
    class="menu menu-vertical absolute z-[9999] w-60 rounded-box bg-white"
    :style="menuStyle"
  >
    <MapBlocMenuSelected />
    <template v-if="!selectedPlace">
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
