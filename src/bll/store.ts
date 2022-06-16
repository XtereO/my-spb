import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bridgeConstructionApi } from "./bridge-construction";
import { factApi, factReducer } from "./fact";
import { mainReducer } from "./main";
import { mapReducer } from "./map";

const rootReducer = combineReducers({
  main: mainReducer,
  map: mapReducer,
  fact: factReducer,
  [factApi.reducerPath]: factApi.reducer,
  [bridgeConstructionApi.reducerPath]: bridgeConstructionApi.reducer,
});

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      factApi.middleware,
      bridgeConstructionApi.middleware
    ),
});

setupListeners(store.dispatch);
