import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { PlannedWaterOff } from "../../types";

export const turnOffWaterApi = createApi({
  reducerPath: "turnOffWaterApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getPlannedWaterOff: build.query<PlannedWaterOff[], any>({
      query: () => ({
        url: `water.get${window.location.search}`,
        method: "get",
      }),
      transformResponse: (data: { response: PlannedWaterOff[] }, meta, arg) =>
        data.response,
    }),
  }),
});

export const { useGetPlannedWaterOffQuery } = turnOffWaterApi;
