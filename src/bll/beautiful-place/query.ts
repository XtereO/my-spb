import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { BeautifulPlace } from "../../types";

export const beautifulPlaceApi = createApi({
  reducerPath: "beautifulPlaceApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getBeautifulPlaces: build.query<BeautifulPlace[], any>({
      query: () => ({
        method: "get",
        url: `places.get${window.location.search}`,
      }),
      transformResponse: (data: { response: BeautifulPlace[] }, meta, arg) =>
        data.response,
    }),
  }),
});

export const { useGetBeautifulPlacesQuery } = beautifulPlaceApi;
