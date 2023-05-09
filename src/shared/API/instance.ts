import axios from "axios";
import {firebaseConfig} from "../../app";

export const instance = axios.create({
  baseURL: firebaseConfig.baseURL,
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${firebaseConfig.authorizationKey}`,
    "X-Api-App-Id" : firebaseConfig.appId,
    "x-secret-key" : firebaseConfig.secretKey,
  }
})

