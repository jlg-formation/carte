<script setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { KeyIcon } from "@heroicons/vue/24/solid";

const email = ref("");
const password = ref("");

const isFormValid = computed(() => {
  return email.value !== "" && password.value !== "";
});
</script>

<template>
  <main class="page page-center">
    <h1 class="page-title">Se connecter</h1>
    <form class="flex w-full max-w-xs flex-col gap-2">
      <label class="input input-bordered flex items-center gap-2">
        <EnvelopeIcon class="size-6 text-gray-500" />
        <input type="email" placeholder="E-mail" v-model="email" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <KeyIcon class="size-6 text-gray-500" />
        <input type="password" placeholder="Password" v-model="password" />
      </label>
      <button class="btn btn-primary" :disabled="!isFormValid">
        Se connecter
      </button>
    </form>
    <NuxtLink to="/new-account" class="btn btn-link font-normal text-black">
      Pas encore de compte ?
    </NuxtLink>
  </main>
</template>
