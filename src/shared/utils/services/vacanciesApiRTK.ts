import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery";

export const vacanciesApiRTK = createApi({
  reducerPath: 'vacanciesApi',
  baseQuery,
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (arg) => {
        return {
          url: 'vacancies/',
          method: 'GET',
          params:{...arg}
        }
      }
    })
  })
})


