<script setup lang="ts">
import { EnvelopeIcon, IdentificationIcon } from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";
import { Form, Field } from "vee-validate";

const { isFormValid, isCreating, handleSubmit } = useNewAccount();

// const confirmNewPassword = ref("");
</script>

<template>
  <main class="page">
    <h1 class="page-title">Créer votre compte</h1>
    <Form class="flex w-full max-w-xs flex-col gap-2" @submit="handleSubmit">
      <label class="input input-bordered flex items-center gap-2">
        <EnvelopeIcon class="size-6 text-gray-500" />
        <Field name="email" type="email" placeholder="E-mail" />
      </label>
      <InputPassword
        name="newPassword"
        placeholder="Mot de passe"
        autocomplete="new-password"
      />
      <InputPassword
        name="confirmNewPassword"
        placeholder="Confirmer le mot de passe"
        autocomplete="new-password"
      />

      <label class="input input-bordered flex items-center gap-2">
        <IdentificationIcon class="size-6 text-gray-500" />
        <Field name="firstname" type="text" placeholder="Prénom" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <IdentificationIcon class="size-6 text-gray-500" />
        <Field name="lastname" type="text" placeholder="Nom" />
      </label>
      <ButtonPrimary
        :isRunning="isCreating"
        :disabled="isCreating || !isFormValid"
      >
        <template #icon>
          <ArrowRightEndOnRectangleIcon class="size-6" />
        </template>
        Créer votre compte
      </ButtonPrimary>
    </Form>
  </main>
</template>
