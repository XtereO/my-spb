import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { mainState } from "./main";

const rootReducer = combineReducers({
  main: mainState,
});
type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
