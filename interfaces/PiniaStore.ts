import type { _ActionsTree, _GettersTree, StateTree, Store } from "pinia";

export type PiniaStore = Store<
  string,
  StateTree,
  _GettersTree<StateTree>,
  _ActionsTree
>;
