<script setup lang="ts">
import { KeyIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const password = ref(props.modelValue);

const handlePassword = (event: Event) => {
  password.value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", password.value);
};
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <KeyIcon class="size-6 text-gray-500" />
    <input
      :value="password"
      type="password"
      placeholder="Password"
      @input="handlePassword"
    />
  </label>
</template>
