<script setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon, KeyIcon } from "@heroicons/vue/24/solid";

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
      <label class="input input-bordered flex items-center gap-2">
        <KeyIcon class="size-6 text-gray-500" />
        <input v-model="password" type="password" placeholder="Password" />
      </label>
      <button
        class="btn btn-primary"
        :disabled="isConnecting || !isFormValid"
        @click.prevent="handleSubmit"
      >
        <span :class="isConnecting && 'loading loading-spinner'">
          <ArrowRightEndOnRectangleIcon class="size-6" />
        </span>
        <span>Se connecter</span>
      </button>
    </form>
    <NuxtLink to="/new-account" class="link"> Pas encore de compte ? </NuxtLink>
  </main>
</template>
