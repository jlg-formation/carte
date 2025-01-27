<script setup lang="ts">
defineProps<{
  isRunning: boolean;
}>();
</script>

<template>
  <button class="btn btn-primary">
    <span :class="isRunning && 'loading loading-spinner'">
      <slot name="icon" />
    </span>
    <span><slot></slot></span>
  </button>
</template>
