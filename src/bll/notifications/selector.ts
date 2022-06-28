import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const notificationsState = (s: AppState) => s.notifications;
export const getNotifications = createSelector(notificationsState, (s) => s);
