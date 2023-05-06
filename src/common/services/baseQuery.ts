import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {AppId, Authorization, baseUrl, secretKey,} from "../api/constants";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, {getState}) => {
    // const token = (getState() as RootState).auth.token
    headers.set('Authorization', `Bearer ${Authorization}`)
    headers.set("X-Api-App-Id", AppId)
    headers.set("x-secret-key", secretKey)
    return headers
  },
})