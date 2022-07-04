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
      PlannedWaterOff[],
      { street: string; house: number | null }
    >({
      query: ({ street, house }) => ({
        url: `water.find${
          window.location.search
        }&limit=10&street=${street.replaceAll(" ", "")}&house=${house ?? ""}`,
        method: "get",
      }),
      transformResponse: (
        data: {
          response: {
            items: PlannedWaterOff[];
          };
        },
        meta,
        arg
      ) => data.response.items,
    }),
  }),
});

export const { useGetPlannedWaterOffQuery, useGetPlannedWaterOffCountQuery } =
  turnOffWaterApi;
