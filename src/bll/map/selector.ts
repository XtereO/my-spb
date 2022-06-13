import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const mapState = (s: AppState) => s.map;

export const getKey = createSelector(mapState, (s) => s.key);
export const getCenter = createSelector(mapState, (s) => s.center);
export const getMapZoom = createSelector(mapState, (s) => s.mapZoom);
export const getLanguage = createSelector(mapState, (s) => s.language);
