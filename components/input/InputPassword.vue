<script setup lang="ts">
import { KeyIcon } from "@heroicons/vue/24/solid";

const password = defineModel<string>();
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <KeyIcon class="size-6 text-gray-500" />
    <input v-model="password" type="password" placeholder="Password" />
  </label>
</template>
