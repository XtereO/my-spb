import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FreeWifi } from "../../types";

type InitialState = {
  page: number;
  wifiSpots: FreeWifi[];
};
const initialState: InitialState = {
  page: 1,
  wifiSpots: [],
};

const freeWifiSlice = createSlice({
  name: "freeWifi",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setWifiSpots: (state, action: PayloadAction<FreeWifi[]>) => {
      state.wifiSpots = action.payload;
    },
  },
});

export const freeWifiReducer = freeWifiSlice.reducer;
export const freeWifiActions = freeWifiSlice.actions;
