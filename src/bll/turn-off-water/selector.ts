import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const turnOffWaterState = (s: AppState) => s.turnOffWater;
export const getPlannedWaterOffs = createSelector(
  turnOffWaterState,
  (s) => s.plannedWaterOffs
);
export const getPlannedWaterOffPage = createSelector(
  turnOffWaterState,
  (s) => s.page
);
