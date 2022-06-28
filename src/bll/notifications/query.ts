import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { Address, Notifications } from "../../types";

export const notificationsApi = createApi({
  reducerPath: "notificationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getNotifications: build.query<Notifications, any>({
      query: () => ({ url: `users.get${window.location.search}` }),
      transformResponse: (data: { response: [Notifications] }, meta, arg) => {
        return data.response[0];
      },
    }),
    enableNotifications: build.mutation<{ response: boolean }, Address>({
      query: (data:Address) => ({
        url: `users.enableNotifications${window.location.search}`,
        method: "post",
        data
      }),
    }),
  }),
});

export const { useGetNotificationsQuery, useEnableNotificationsMutation } =
  notificationsApi;
