import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BridgeConstruction } from "../../types";

type InitialState = {
  bridges: BridgeConstruction[];
};
const initialState: InitialState = {
  bridges: [],
};

const bridgeConstructionSlice = createSlice({
  name: "bridgeConstruction",
  initialState,
  reducers: {
    setBridges: (state, action: PayloadAction<BridgeConstruction[]>) => {
      state.bridges = action.payload;
    },
  },
});

export const bridgeConstructionReducer = bridgeConstructionSlice.reducer;
export const bridgeConstructionActions = bridgeConstructionSlice.actions;
