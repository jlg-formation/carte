<script setup lang="ts">
import { EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/vue/24/solid";
import { useField } from "vee-validate";

const props = defineProps<{ name: string }>();

defineOptions({
  inheritAttrs: false,
});

const isVisible = ref(false);

const { value, errorMessage } = useField(() => props.name);
console.log("errorMessage: ", errorMessage);
</script>

<template>
  <label class="input input-bordered flex items-center justify-between gap-2">
    <KeyIcon class="size-6 text-gray-500" />
    <input
      v-model="value"
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
