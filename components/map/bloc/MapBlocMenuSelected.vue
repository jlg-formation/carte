<script setup lang="ts">
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import { useMapDisplayStore } from "~/stores/MapDisplay.store";

const { selectedPlace, isUpdating, name } = storeToRefs(useMapDisplayStore());
const { removePlace, updatePlace, updatePlace2 } = useMapDisplayHandlers();
</script>

<template>
  <template v-if="selectedPlace">
    <li>
      <a @click="removePlace(selectedPlace)">
        <TrashIcon class="size-6 text-neutral-500" />
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
</template>
