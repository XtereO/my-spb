import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const bridgeConstructionState = (s: AppState) => s.bridgeConstruction;
export const getBridges = createSelector(
  bridgeConstructionState,
  (s) => s.bridges
);
