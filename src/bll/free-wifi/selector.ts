import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const freeWifiState = (s: AppState) => s.freeWifi;
export const getWifiPage = createSelector(freeWifiState, (s) => s.page);
export const getWifiSpots = createSelector(freeWifiState, (s) => s.wifiSpots);
