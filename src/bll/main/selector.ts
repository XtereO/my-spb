import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const mainState = (state: AppState) => state.main;

export const getTheme = createSelector(mainState, s => s.theme);
