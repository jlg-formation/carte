<script setup lang="ts">
import {
  PencilIcon,
  TrashIcon,
  CheckIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/solid";
import { useMapDisplayStore } from "~/stores/MapDisplay.store";

const { selectedPlace, isUpdating, name, isInvalid, isPending } =
  storeToRefs(useMapDisplayStore());
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
      <form v-else class="flex" @submit.prevent="updatePlace2(selectedPlace)">
        <span
          class="input input-sm input-bordered flex flex-grow items-center justify-between gap-0"
          :class="{ 'input-error': isInvalid }"
        >
          <input
            v-model="name"
            v-focus
            placeholder="Nom"
            type="text"
            required
            class="w-32"
          />
          <span v-if="isPending" class="loading loading-ring loading-xs"></span>
          <template v-else>
            <ExclamationCircleIcon
              v-if="isInvalid"
              class="size-5 text-red-400"
            />
            <CheckIcon v-else class="size-5 text-gray-400" />
          </template>
        </span>
        <button class="hidden" :disabled="isInvalid || isPending"></button>
      </form>
    </li>
  </template>
</template>
