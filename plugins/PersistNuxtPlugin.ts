import type { Pinia } from "pinia";
import { persistPiniaPlugin } from "~/stores/plugins/PersistPiniaPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  const $pinia = nuxtApp.$pinia as Pinia;
  $pinia.use(persistPiniaPlugin);
});
