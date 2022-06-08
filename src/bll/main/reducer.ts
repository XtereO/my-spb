import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PANEL_ROUTES } from "../../consts";
import { Platform, Theme } from "../../types";

type InitialState = {
  theme: Theme;
  platform: Platform;
  activePanel: PANEL_ROUTES;
};
export const initialState: InitialState = {
  theme: "light",
  platform: "mobile",
  activePanel: PANEL_ROUTES.HOME,
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
  },
});

export const mainState = mainSlice.reducer;
export const mainActions = mainSlice.actions;
