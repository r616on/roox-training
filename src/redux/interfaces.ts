import { rootReducer } from "./store";

type RootReducerType = typeof rootReducer;
export type AppStoreType = ReturnType<RootReducerType>;
