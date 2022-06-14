import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialType = {
  zoom: number;
  center: [number, number] | null;
};
export const initialState: InitialType = {
  zoom: 15,
  center: [59.939095, 30.315868],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setCenter: (state, action: PayloadAction<[number, number] | null>) => {
      state.center = action.payload;
    },
  },
});

export const mapReducer = mapSlice.reducer;
export const mapActions = mapSlice.actions;
