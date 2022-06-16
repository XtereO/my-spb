import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { Date, Fact } from "../../types";

export const factApi = createApi({
  reducerPath: "factApi",
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: (build) => ({
    getFact: build.query<Fact, Date>({
      query: ({ day, month }) => ({
        url: `facts.get?day=${day}&month=${month}&${window.location.search.slice(
          1
        )}`,
        method: "get",
      }),
      transformResponse: (data: { response: Fact }, meta, arg) => data.response,
    }),
  }),
});

export const { useGetFactQuery } = factApi;
