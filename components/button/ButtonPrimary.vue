<script setup lang="ts">
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";

defineProps<{
  isRunning: boolean;
}>();
</script>

<template>
  <button class="btn btn-primary">
    <span :class="isRunning && 'loading loading-spinner'">
      <ArrowRightEndOnRectangleIcon class="size-6" />
    </span>
    <span><slot></slot></span>
  </button>
</template>
