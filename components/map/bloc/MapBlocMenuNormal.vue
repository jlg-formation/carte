<script setup lang="ts">
import {
  CheckIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  PlusIcon,
} from "@heroicons/vue/24/solid";

const { lastHoveredPlace, isAdding, name, isInvalid, gpsCoord, isPending } =
  storeToRefs(useMapDisplayStore());
const { addPlace, addPlace2 } = useMapDisplayHandlers();
const { copyGpsCoord } = useMapDisplayClipboardStore();
</script>

<template>
  <template v-if="!lastHoveredPlace">
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
      <form v-else class="flex" @submit.prevent="addPlace2">
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
