<script setup lang="ts">
import { PhoneIcon } from "@heroicons/vue/24/solid";

const phone = usePhoneRef("0123456789");
</script>

<template>
  <form>
    <label class="input input-bordered flex w-44 items-center gap-2">
      <span>
        <PhoneIcon class="size-6 text-gray-400" />
      </span>
      <input v-model="phone" type="text" class="grow" placeholder="Téléphone" />
    </label>
  </form>
</template>
