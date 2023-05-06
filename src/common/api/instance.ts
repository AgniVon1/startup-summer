import axios from "axios";
import {AppId, Authorization, baseURL, secretKey} from "./constants";

export const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${Authorization}`,
    "X-Api-App-Id" : AppId,
    "x-secret-key" : secretKey,
  }
})

