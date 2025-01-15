<script setup>
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
console.log("route: ", route);

const isLoginPage = computed(() => route.name === "login");
</script>

<template>
  <template v-if="!isLoginPage">
    <NuxtLink to="/login" class="btn btn-neutral btn-sm mx-2 rounded-full">
      <ArrowRightEndOnRectangleIcon class="size-6" />
      <span>Connexion</span>
    </NuxtLink>
  </template>
</template>
