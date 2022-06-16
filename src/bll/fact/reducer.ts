import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fact } from "../../types";

type InitialState = Fact;
const initialState: InitialState = {
  title: "",
  date: "",
  date_txt: "",
  text: "",
};

const factSlice = createSlice({
  name: "fact",
  initialState,
  reducers: {
    setFact: (state, action: PayloadAction<Fact>) => {
      Object.keys(action.payload).forEach((key) => {
        //@ts-ignore
        state[key] = action.payload[key];
      });
    },
  },
});

export const factReducer = factSlice.reducer;
export const factActions = factSlice.actions;
