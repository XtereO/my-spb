import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { PlannedWaterOff } from "../../types";

export const turnOffWaterApi = createApi({
  reducerPath: "turnOffWaterApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getPlannedWaterOffCount: build.query<number, any>({
      query: ({}) => ({
        url: `water.get${window.location.search}&limit=0`,
        method: "get",
      }),
      transformResponse: (
        data: {
          response: {
            today_off: number;
          };
        },
        meta,
        arg
      ) => data.response.today_off,
    }),
    getPlannedWaterOff: build.query<
      {items: PlannedWaterOff[], total_items: number},
      { street: string; house: number | null; page: number }
    >({
      query: ({ street, house, page }) => ({
        url: `water.find${
          window.location.search
        }&limit=10&street=${street.replaceAll(" ", "")}&house=${
          house ?? ""
        }&offset=${(page - 1) * 10}`,
        method: "get",
      }),
      transformResponse: (
        data: {
          response: {
            items: PlannedWaterOff[],
            total_items: number
          };
        },
        meta,
        arg
      ) => data.response,
    }),
  }),
});

export const { useGetPlannedWaterOffQuery, useGetPlannedWaterOffCountQuery } =
  turnOffWaterApi;
