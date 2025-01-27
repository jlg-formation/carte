<script setup lang="ts">
import { EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/vue/24/solid";

const password = defineModel<string>();

const isVisible = ref(false);
</script>

<template>
  <label class="input input-bordered flex items-center justify-between gap-2">
    <KeyIcon class="size-6 text-gray-500" />
    <input
      v-model="password"
      :type="isVisible ? 'text' : 'password'"
      placeholder="Password"
      class="flex-grow"
    />
    <span @click="isVisible = !isVisible">
      <EyeIcon v-if="isVisible" class="size-6 text-gray-500" />
      <EyeSlashIcon v-else class="size-6 text-gray-500" />
    </span>
  </label>
</template>
