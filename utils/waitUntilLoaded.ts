import type { _ActionsTree, _GettersTree, StateTree, Store } from "pinia";

export const waitUntilLoaded = async (
  store: Store<string, StateTree, _GettersTree<StateTree>, _ActionsTree>,
) => {
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
