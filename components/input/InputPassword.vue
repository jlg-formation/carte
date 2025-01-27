<script setup lang="ts">
import { KeyIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{
  (e: "update:model-value", modelValue: string): void;
}>();

const password = ref(props.modelValue);

watch(password, (value) => {
  emit("update:model-value", value);
});
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <KeyIcon class="size-6 text-gray-500" />
    <input v-model="password" type="password" placeholder="Password" />
  </label>
</template>
