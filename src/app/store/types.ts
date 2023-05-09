import {store} from "./store";

export type RootStateType = ReturnType<typeof store.getState>
export type RootStoreType = typeof store
export type RootDispatchType = typeof store.dispatch
