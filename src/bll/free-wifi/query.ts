import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { FreeWifi } from "../../types";

export const freeWifiApi = createApi({
  reducerPath: "freeWifiApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getFreeWifi: build.query<FreeWifi[], { page: number }>({
      query: ({ page }) => ({
        method: "get",
        url: `wifi.get${window.location.search}&page=${page}`,
      }),
      transformResponse: (
        data: { response: { results: FreeWifi[] } },
        meta,
        arg
      ) => data.response.results,
    }),
  }),
});

export const { useGetFreeWifiQuery } = freeWifiApi;
