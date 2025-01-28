import type { PiniaStore } from "~/interfaces/PiniaStore";

export const waitUntilLoaded = async (store: PiniaStore) => {
  return new Promise<void>((resolve) => {
    if (store._ready) {
      resolve();
      return;
    }
    document.body.addEventListener(store.$id + "_ready", () => {
      resolve();
    });
  });
};
