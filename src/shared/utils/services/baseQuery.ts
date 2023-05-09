import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {firebaseConfig} from "../../../app";

export const baseQuery = fetchBaseQuery({
  baseUrl:firebaseConfig.baseURL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${firebaseConfig.authorizationKey}`)
    headers.set("X-Api-App-Id", firebaseConfig.appId)
    headers.set("x-secret-key", firebaseConfig.secretKey)
    return headers
  },
})