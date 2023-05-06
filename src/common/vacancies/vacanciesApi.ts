import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const templesAuthorizationToken = "v3.r.137531724.82489bfda86b13c1942e97e222eac8b7c58b0388.da8771cc611499c852b898b93607de0e0bc59678"
const templesAppId = "v3.r.137531724.eb92e81f12e4e72b2a876c25f1ceae414dd58127.2280b7f2dfb25c8cb3165bb198bb1cb2c5aef204"
const secretKey = "GEU4nvd3rej*jeh.eqp"
export const vacanciesApi = createApi({
  reducerPath: 'vacanciesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    prepareHeaders: (headers, {getState}) => {
      // const token = (getState() as RootState).auth.token
      headers.set('Authorization', `Bearer ${templesAuthorizationToken}`)
      headers.set("X-Api-App-Id", templesAppId)
      headers.set("x-secret-key", secretKey)
      return headers
    },
  }),
  endpoints: (builder) => ({
    fetchAllVacancies: builder.query({
      query: () => ({
        url: 'vacancies/',
        method: 'GET',
      })
    }),
    getVacancies: builder.query({
      query: (arg) => {
       // const {published, keyword, payment_from, payment_to, catalogues} = arg
        return {
          url: 'vacancies/',
          method: 'GET',
          params:{...arg}
        }
      }
    })
  })
})


