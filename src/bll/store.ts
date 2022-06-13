import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { factApi } from "./fact";
import { mainReducer } from "./main";
import { mapReducer } from "./map";

const rootReducer = combineReducers({
  main: mainReducer,
  map: mapReducer,
  [factApi.reducerPath]: factApi.reducer,
});

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(factApi.middleware),
});

setupListeners(store.dispatch);
