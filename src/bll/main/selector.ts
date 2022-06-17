import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const mainState = (state: AppState) => state.main;

export const getTheme = createSelector(mainState, (s) => s.theme);
export const getPlatform = createSelector(mainState, (s) => s.platform);
export const getActivePanel = createSelector(mainState, (s) => s.activePanel);
export const getUserCoordinates = createSelector(
  mainState,
  (s) => s.userCoordinates
);
