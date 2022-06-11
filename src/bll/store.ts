import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { factApi } from "./fact";
import { mainState } from "./main";

const rootReducer = combineReducers({
  main: mainState,
  [factApi.reducerPath]: factApi.reducer,
});
console.log(factApi);

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(factApi.middleware),
});

setupListeners(store.dispatch);
