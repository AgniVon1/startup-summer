import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {baseQuery} from "./baseQuery";

export const cataloguesApi = createApi({
  reducerPath: 'cataloguesApi',
  baseQuery,
  endpoints: (builder) => ({
    fetchCatalogues: builder.query({
      query: () => ({
        url: 'catalogues/',
        method: 'GET',
      })
    }),
  })
})


