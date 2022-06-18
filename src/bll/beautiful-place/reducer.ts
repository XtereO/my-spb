import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BeautifulPlace } from "../../types";

type InitialState = {
  beautifulPlaces: BeautifulPlace[];
};
const initialState: InitialState = {
  beautifulPlaces: [],
};

export const beautifulPlaceSlice = createSlice({
  name: "beautifulPlace",
  initialState,
  reducers: {
    setBeautifulPlaces: (state, action: PayloadAction<BeautifulPlace[]>) => {
      state.beautifulPlaces = action.payload;
    },
  },
});

export const beautifulPlaceReducer = beautifulPlaceSlice.reducer;
export const beautifulPlaceActions = beautifulPlaceSlice.actions;
