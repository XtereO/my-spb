import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../consts";
import { BridgeConstruction } from "../../types";

export const bridgeConstructionApi = createApi({
  reducerPath: "bridgeConstructionApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getBridgeConstructions: build.query<BridgeConstruction[], any>({
      query: () => ({
        url: `bridges.get${window.location.search}`,
        method: "get",
      }),
      transformResponse: (
        data: { response: { results: BridgeConstruction[] } },
        mata,
        arg
      ) => data.response.results,
    }),
  }),
});

export const { useGetBridgeConstructionsQuery } = bridgeConstructionApi;
