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
      transformResponse: (data: { response: Notifications }, meta, arg) => {
        return data.response;
      },
    }),
    setAddress: build.mutation<Notifications, Address>({
      query: ({ city, district, street, house, korpus, liter }: Address) => ({
        url: `users.setAddress${window.location.search}&city=${city}&district=${district}&street=${street}&house=${house}&korpus=${korpus}&liter=${liter}`,
        method: "get",
      }),
      transformResponse: (data: { response: Notifications }, meta, arg) => {
        return data.response;
      },
    }),
    enableNotifications: build.mutation<{ response: boolean }, any>({
      query: (data: any) => ({
        url: `users.enableNotifications${window.location.search}`,
        method: "get",
      }),
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useEnableNotificationsMutation,
  useSetAddressMutation,
} = notificationsApi;
