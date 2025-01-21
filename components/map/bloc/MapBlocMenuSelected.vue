<script setup lang="ts">
import { PencilIcon, PlusIcon } from "@heroicons/vue/24/solid";

const { selectedPlace, isUpdating, name } = useMapDisplayState();
const { removePlace, updatePlace, updatePlace2 } = useMapDisplayHandlers();
</script>

<template>
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
</template>
