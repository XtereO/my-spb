import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialType = {
  mapZoom: number;
  key: string;
  center: [number, number] | null;
  language: string;
};
export const initialState: InitialType = {
  mapZoom: 4,
  key: "arUeAowC1FEah9pdjNoUJDMGAWGlIxWF",
  center: [30, 60],
  language: "ru-RU",
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapZoom: (state, action: PayloadAction<number>) => {
      state.mapZoom = action.payload;
    },
    setCenter: (state, action: PayloadAction<[number, number] | null>) => {
      state.center = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const mapReducer = mapSlice.reducer;
export const mapActions = mapSlice.actions;
