<script setup lang="ts">
import { Form, Field, type SubmissionHandler } from "vee-validate";

import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";

interface LoginForm {
  email: string;
  password: string;
}

const isFormValid = computed(() => {
  return true;
});

const authenticationStore = useAuthenticationStore();

const isConnecting = ref(false);

const handleSubmit = (async ({ email, password }: LoginForm) => {
  try {
    console.log("submit");
    isConnecting.value = true;
    await authenticationStore.login(email, password);
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isConnecting.value = false;
  }
}) as unknown as SubmissionHandler;
</script>

<template>
  <ClientOnly>
    <main class="page page-center">
      <h1 class="page-title">Se connecter</h1>
      <Form class="flex w-full max-w-xs flex-col gap-2" @submit="handleSubmit">
        <label class="input input-bordered flex items-center gap-2">
          <EnvelopeIcon class="size-6 text-gray-500" />
          <Field name="email" type="email" placeholder="E-mail" />
        </label>
        <InputPassword name="password" placeholder="Mot de passe" />
        <ButtonPrimary
          :isRunning="isConnecting"
          :disabled="isConnecting || !isFormValid"
        >
          <template #icon>
            <ArrowRightEndOnRectangleIcon class="size-6" />
          </template>
          Se connecter
        </ButtonPrimary>
      </Form>
      <NuxtLink to="/new-account" class="link">
        Pas encore de compte ?
      </NuxtLink>
    </main>
  </ClientOnly>
</template>
