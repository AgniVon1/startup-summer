import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl, secretKey, templesAppId, templesAuthorizationToken} from "./constants";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, {getState}) => {
    // const token = (getState() as RootState).auth.token
    headers.set('Authorization', `Bearer ${templesAuthorizationToken}`)
    headers.set("X-Api-App-Id", templesAppId)
    headers.set("x-secret-key", secretKey)
    return headers
  },
})