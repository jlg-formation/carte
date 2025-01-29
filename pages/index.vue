<script setup lang="ts">
import { ref, onMounted } from "vue";

const AsyncButtonCallToAction = defineAsyncComponent(
  () => import("~/components/button/ButtonCallToAction.vue"),
);

const show = ref(false);

onMounted(async () => {
  await sleep(1000);
  show.value = true;
});
</script>

<template>
  <main class="page page-center">
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Vos endroits sur des cartes.</h1>
          <p class="py-6">
            Produisez des cartes avec des lieux intéressant et partagez les !
          </p>

          <div
            class="flex h-10 items-center justify-center transition-opacity duration-[3000ms] ease-in-out"
            :class="show ? 'opacity-100' : 'opacity-0'"
          >
            <AsyncButtonCallToAction v-if="show" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
