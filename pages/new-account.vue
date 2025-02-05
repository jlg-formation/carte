<script setup lang="ts">
import {
  EnvelopeIcon,
  IdentificationIcon,
  FaceSmileIcon,
} from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import { Field } from "vee-validate";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";

const {
  meta,
  isSubmitting,
  onSubmit,
  errors,
  isFieldTouched,
  errorMsg,
  isValidating,
  values,
} = useNewAccount();
</script>

<template>
  <!-- eslint-disable max-lines -->
  <main class="page">
    <h1 class="page-title">Créer votre compte</h1>
    <form class="flex w-full max-w-xs flex-col gap-2" @submit="onSubmit">
      <label class="flex flex-col">
        <div class="input input-bordered flex items-center gap-2">
          <EnvelopeIcon class="size-6 text-gray-500" />
          <Field
            name="email"
            type="email"
            placeholder="E-mail"
            :validateOnInput="true"
          />
        </div>
        <span class="flex h-8 items-start pt-1">
          <span v-if="isValidating" class="flex items-center">
            <span class="loading loading-ring"></span>
            Verification du mail...
          </span>
          <template v-else>
            <span v-if="errors.email" class="flex items-center text-error">
              {{ errors.email }}
            </span>
            <span
              v-else-if="values.email"
              class="flex items-center gap-1 text-success"
            >
              <span>{{ values.email }} est libre.</span>
              <FaceSmileIcon class="size-5" />
            </span>
          </template>
        </span>
      </label>
      <label class="flex flex-col">
        <InputPassword
          name="newPassword"
          placeholder="Mot de passe"
          autocomplete="new-password"
        />
        <span class="flex h-8 items-start text-error">{{
          errors.newPassword
        }}</span>
      </label>
      <label class="flex flex-col">
        <InputPassword
          name="confirmNewPassword"
          placeholder="Confirmer le mot de passe"
          autocomplete="new-password"
        />
        <span class="flex h-8 items-start text-error">
          <span v-show="isFieldTouched('confirmNewPassword')">
            {{ errors.confirmNewPassword }}
          </span>
        </span>
      </label>
      <label class="flex flex-col">
        <div class="input input-bordered flex items-center gap-2">
          <IdentificationIcon class="size-6 text-gray-500" />
          <Field name="firstname" type="text" placeholder="Prénom" />
        </div>
        <span class="flex h-8 items-start text-error">{{
          errors.firstname
        }}</span>
      </label>
      <label class="flex flex-col">
        <div class="input input-bordered flex items-center gap-2">
          <IdentificationIcon class="size-6 text-gray-500" />
          <Field name="lastname" type="text" placeholder="Nom" />
        </div>
        <span class="flex h-8 items-start text-error">{{
          errors.lastname
        }}</span>
      </label>
      <div class="flex h-8 items-center justify-center text-error">
        {{ errorMsg }}
      </div>
      <ButtonPrimary
        :isRunning="isSubmitting"
        :disabled="isSubmitting || !meta.valid"
      >
        <template #icon>
          <ArrowRightEndOnRectangleIcon class="size-6" />
        </template>
        Créer votre compte
      </ButtonPrimary>
    </form>
  </main>
</template>
