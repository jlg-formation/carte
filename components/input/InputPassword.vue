<script setup lang="ts">
import { KeyIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{ password: string }>();
const emit = defineEmits<{
  (e: "change", password: string): void;
}>();

const password = ref(props.password);

const handlePassword = (event: Event) => {
  password.value = (event.target as HTMLInputElement).value;
  emit("change", password.value);
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
