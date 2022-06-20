import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { beautifulPlaceApi, beautifulPlaceReducer } from "./beautiful-place";
import {
  bridgeConstructionApi,
  bridgeConstructionReducer,
} from "./bridge-construction";
import { factApi, factReducer } from "./fact";
import { freeWifiApi, freeWifiReducer } from "./free-wifi";
import { mainReducer } from "./main";
import { mapReducer } from "./map";
import { turnOffWaterApi } from "./turn-off-water";
import { turnOffWaterReducer } from "./turn-off-water";

const rootReducer = combineReducers({
  main: mainReducer,
  map: mapReducer,
  fact: factReducer,
  freeWifi: freeWifiReducer,
  turnOffWater: turnOffWaterReducer,
  beautifulPlace: beautifulPlaceReducer,
  bridgeConstruction: bridgeConstructionReducer,
  [factApi.reducerPath]: factApi.reducer,
  [freeWifiApi.reducerPath]: freeWifiApi.reducer,
  [turnOffWaterApi.reducerPath]: turnOffWaterApi.reducer,
  [beautifulPlaceApi.reducerPath]: beautifulPlaceApi.reducer,
  [bridgeConstructionApi.reducerPath]: bridgeConstructionApi.reducer,
});

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      factApi.middleware,
      freeWifiApi.middleware,
      turnOffWaterApi.middleware,
      beautifulPlaceApi.middleware,
      bridgeConstructionApi.middleware
    ),
});

setupListeners(store.dispatch);
