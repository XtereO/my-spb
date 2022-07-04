import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { number } from "prop-types";
import { PlannedWaterOff } from "../../types";

type InitialState = {
  plannedWaterOffs: PlannedWaterOff[];
};
const initialState: InitialState = {
  plannedWaterOffs: [],
};

const turnOffWaterSlice = createSlice({
  name: "turnOffWater",
  initialState,
  reducers: {
    setPlannedWaterOffs: (state, action: PayloadAction<PlannedWaterOff[]>) => {
      state.plannedWaterOffs = action.payload;
    },
  },
});

export const turnOffWaterReducer = turnOffWaterSlice.reducer;
export const turnOffWaterActions = turnOffWaterSlice.actions;
