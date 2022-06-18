import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const beautifulPlaceState = (s: AppState) => s.beautifulPlace;
export const getBeautifulPlaces = createSelector(
  beautifulPlaceState,
  (s) => s.beautifulPlaces
);
