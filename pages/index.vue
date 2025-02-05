<script setup lang="ts">
const AsyncButtonCallToAction = defineAsyncComponent(async () => {
  await sleep(3000);
  const result = await import("~/components/button/ButtonCallToAction.vue");
  return result;
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
          <div class="h-10">
            <Transition
              mode="out-in"
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
              enter-active-class="transition duration-300"
              leave-active-class="transition duration-300"
            >
              <KeepAlive>
                <Suspense>
                  <AsyncButtonCallToAction />
                  <template #fallback>
                    <span class="flex items-center justify-center gap-2">
                      <span class="loading loading-ring"></span>
                      <span>Loading...</span>
                    </span>
                  </template>
                </Suspense>
              </KeepAlive>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
