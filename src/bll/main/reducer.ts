import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PANEL_ROUTES } from "../../consts";
import { Platform, Snackbar, Theme } from "../../types";

type InitialState = {
  theme: Theme;
  platform: Platform;
  snackbar: Snackbar | null;
  activePanel: PANEL_ROUTES;
  userCoordinates: [number, number] | null;
};
export const initialState: InitialState = {
  theme: "light",
  platform: "mobile",
  snackbar: null,
  activePanel: PANEL_ROUTES.HOME,
  userCoordinates: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setPlatform: (state, action: PayloadAction<Platform>) => {
      state.platform = action.payload;
    },
    setActivePanel: (state, action: PayloadAction<PANEL_ROUTES>) => {
      state.activePanel = action.payload;
    },
    setUserCoordinates: (
      state,
      action: PayloadAction<[number, number] | null>
    ) => {
      state.userCoordinates = action.payload;
    },
    setSnackbar: (state, action: PayloadAction<Snackbar | null>) => {
      state.snackbar = action.payload;
    },
  },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;
