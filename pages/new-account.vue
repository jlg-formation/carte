<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";

const {
  email,
  newPassword,
  lastname,
  firstname,
  isFormValid,
  isCreating,
  handleSubmit,
} = useNewAccount();

const confirmNewPassword = ref("");
</script>

<template>
  <main class="page">
    <h1 class="page-title">Créer votre compte</h1>
    <form class="flex w-full max-w-xs flex-col gap-2">
      <label class="input input-bordered flex items-center gap-2">
        <EnvelopeIcon class="size-6 text-gray-500" />
        <input v-model="email" type="email" placeholder="E-mail" />
      </label>
      <InputPassword
        v-model="newPassword"
        placeholder="Mot de passe"
        autocomplete="new-password"
      />
      <InputPassword
        v-model="confirmNewPassword"
        placeholder="Confirmer le mot de passe"
        autocomplete="new-password"
      />
      <label class="input input-bordered flex items-center gap-2">
        <EnvelopeIcon class="size-6 text-gray-500" />
        <input v-model="firstname" type="text" placeholder="Prénom" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <EnvelopeIcon class="size-6 text-gray-500" />
        <input v-model="lastname" type="text" placeholder="Nom" />
      </label>
      <ButtonPrimary
        :isRunning="isCreating"
        :disabled="isCreating || !isFormValid"
        @click.prevent="handleSubmit"
      >
        <template #icon>
          <ArrowRightEndOnRectangleIcon class="size-6" />
        </template>
        Créer votre compte
      </ButtonPrimary>
    </form>
  </main>
</template>
