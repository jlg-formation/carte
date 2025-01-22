<script setup lang="ts">
import { MapPinIcon, PlusIcon } from "@heroicons/vue/24/solid";

const { selectedPlace, isAdding, name, isInvalid, gpsCoord } =
  storeToRefs(useMapDisplayStore());
const { addPlace, addPlace2 } = useMapDisplayHandlers();
const { copyGpsCoord } = useMapDisplayClipboardStore();
</script>

<template>
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
          :class="{ 'input-error': isInvalid }"
          required
        />
      </form>
    </li>
  </template>
</template>
