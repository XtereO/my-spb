import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { number } from "prop-types";
import { PlannedWaterOff } from "../../types";

type InitialState = {
  page: number;
  plannedWaterOffs: PlannedWaterOff[];
};
const initialState: InitialState = {
  page: 1,
  plannedWaterOffs: [],
};

const turnOffWaterSlice = createSlice({
  name: "turnOffWater",
  initialState,
  reducers: {
    setPlannedWaterOffs: (state, action: PayloadAction<PlannedWaterOff[]>) => {
      state.plannedWaterOffs = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const turnOffWaterReducer = turnOffWaterSlice.reducer;
export const turnOffWaterActions = turnOffWaterSlice.actions;
