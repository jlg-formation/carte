import localforage from "localforage";
import type { PiniaPlugin } from "pinia";
import type { PiniaStore } from "~/interfaces/PiniaStore";
import { clone } from "~/utils/clone";

const sendEvent = (store: PiniaStore) => {
  document.body.dispatchEvent(new Event(store.$id + "_ready"));
  store._ready = true;
};

export const persistPiniaPlugin: PiniaPlugin = ({ store }) => {
  if (isSSR()) {
    return;
  }
  store._ready = false;
  (async () => {
    const key = `piniaState.${store.$id}`;

    const obj: object | null = await localforage.getItem(key);

    if (obj === null) {
      localforage.setItem(key, clone(store.$state));
    } else {
      store.$patch(obj);
    }
    sendEvent(store);
    store.$subscribe((mutation, state) => {
      (async () => {
        await localforage.setItem(key, clone(state));
      })();
    });
  })();
};
