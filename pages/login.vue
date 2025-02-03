<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/solid";
import ButtonPrimary from "~/components/button/ButtonPrimary.vue";

const { onSubmit, errors, meta, email, emailAttrs, isConnecting, errorMsg } =
  useLoginPage();
</script>

<template>
  <ClientOnly>
    <main class="page page-center">
      <h1 class="page-title">Se connecter</h1>
      <form class="flex w-full max-w-xs flex-col" @submit="onSubmit">
        <label class="flex flex-col">
          <div class="input input-bordered flex items-center gap-2">
            <EnvelopeIcon class="size-6 text-gray-500" />
            <input
              v-model="email"
              type="email"
              placeholder="E-mail"
              v-bind="emailAttrs"
            />
          </div>
          <span class="flex h-8 items-start text-error">{{
            errors.email
          }}</span>
        </label>
        <label class="flex flex-col">
          <InputPassword name="password" placeholder="Mot de passe" />
          <span class="flex h-8 items-start text-error">{{
            errors.password
          }}</span>
        </label>

        <div class="flex h-8 items-center justify-center text-error">
          {{ errorMsg }}
        </div>
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
    </main>
  </ClientOnly>
</template>
