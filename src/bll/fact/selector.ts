import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const factState = (s: AppState) => s.fact;
export const getFact = createSelector(factState, (s) => s);
