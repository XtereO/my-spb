import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const mapState = (s: AppState) => s.map;

export const getCenter = createSelector(mapState, (s) => s.center);
export const getZoom = createSelector(mapState, (s) => s.zoom);
