<script setup lang="ts">
import { EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/vue/24/solid";

defineOptions({
  inheritAttrs: false,
});

const password = defineModel<string>();

const isVisible = ref(false);
</script>

<template>
  <label class="input input-bordered flex items-center justify-between gap-2">
    <KeyIcon class="size-6 text-gray-500" />
    <input
      v-model="password"
      :type="isVisible ? 'text' : 'password'"
      v-bind="$attrs"
      class="flex-grow"
    />
    <component
      :is="isVisible ? EyeIcon : EyeSlashIcon"
      class="size-6 cursor-pointer text-gray-500"
      @click="isVisible = !isVisible"
    />
  </label>
</template>
