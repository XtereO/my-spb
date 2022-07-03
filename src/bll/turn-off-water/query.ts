import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { PlannedWaterOff } from "../../types";

export const turnOffWaterApi = createApi({
  reducerPath: "turnOffWaterApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getPlannedWaterOff: build.query<
      { items: PlannedWaterOff[]; today_off: number; max_page: number },
      { page: number }
    >({
      query: ({ page }) => ({
        url: `water.get${window.location.search}&page=${page}`,
        method: "get",
      }),
      transformResponse: (
        data: {
          response: {
            items: PlannedWaterOff[];
            today_off: number;
            max_page: number;
          };
        },
        meta,
        arg
      ) => data.response,
    }),
  }),
});

export const { useGetPlannedWaterOffQuery } = turnOffWaterApi;
