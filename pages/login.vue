<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";

const email = ref("");
const password = ref("");

const isFormValid = computed(() => {
  return email.value !== "" && password.value !== "";
});

const authenticationStore = useAuthenticationStore();

const isConnecting = ref(false);

const handleSubmit = async () => {
  try {
    console.log("submit");
    isConnecting.value = true;
    await authenticationStore.login(email.value, password.value);
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isConnecting.value = false;
  }
};
</script>

<template>
  <main class="page page-center">
    <h1 class="page-title">Se connecter</h1>
    <form class="flex w-full max-w-xs flex-col gap-2">
      <label class="input input-bordered flex items-center gap-2">
        <EnvelopeIcon class="size-6 text-gray-500" />
        <input v-model="email" type="email" placeholder="E-mail" />
      </label>
      <InputPassword v-model="password" />
      <ButtonPrimary
        :isRunning="isConnecting"
        :disabled="isConnecting || !isFormValid"
        @click.prevent="handleSubmit"
      >
        Se connecter
      </ButtonPrimary>
    </form>
    <NuxtLink to="/new-account" class="link"> Pas encore de compte ? </NuxtLink>
    <span>Password: {{ password }}</span>
  </main>
</template>
