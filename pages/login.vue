<script setup lang="ts">
import { useForm } from "vee-validate";
import { object, string } from "yup";

import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";

interface LoginForm {
  email: string;
  password: string;
}

const schema = object({
  email: string().required().email(),
  password: string().required(),
});

const authenticationStore = useAuthenticationStore();
const isConnecting = ref(false);

const { handleSubmit, errors, defineField, meta } = useForm<LoginForm>({
  validationSchema: schema,
});
const [email, emailAttrs] = defineField("email");

const onSubmit = handleSubmit(async ({ email, password }) => {
  try {
    console.log("submit");
    isConnecting.value = true;
    await authenticationStore.login(email, password);
  } catch (err) {
    console.log("err: ", err);
  } finally {
    isConnecting.value = false;
  }
});
</script>

<template>
  <ClientOnly>
    <main class="page page-center">
      <h1 class="page-title">Se connecter</h1>
      <form class="flex w-full max-w-xs flex-col gap-2" @submit="onSubmit">
        <label class="input input-bordered flex items-center gap-2">
          <EnvelopeIcon class="size-6 text-gray-500" />
          <input
            v-model="email"
            type="email"
            placeholder="E-mail"
            v-bind="emailAttrs"
          />
        </label>
        <InputPassword name="password" placeholder="Mot de passe" />
        <ButtonPrimary
          :isRunning="isConnecting"
          :disabled="isConnecting || !meta.valid"
        >
          <template #icon>
            <ArrowRightEndOnRectangleIcon class="size-6" />
          </template>
          Se connecter
        </ButtonPrimary>
      </form>
      <NuxtLink to="/new-account" class="link">
        Pas encore de compte ?
      </NuxtLink>
      <span>{{ errors }}</span>
    </main>
  </ClientOnly>
</template>
