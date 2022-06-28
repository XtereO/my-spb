import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notifications } from "../../types";

type InitialState = Notifications;
const initialState: InitialState = {
  id: "",
  address: {
    city: "",
    district: "",
    street: "",
    house: "",
    korpus: "",
    liter: "",
  },
  notifications: false,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<Notifications>) => {
      Object.keys(action.payload).forEach((key: string) => {
        //@ts-ignore
        state[key] = action.payload[key];
      });
    },
  },
});

export const notificationsReducer = notificationsSlice.reducer;
export const notificationsActions = notificationsSlice.actions;
