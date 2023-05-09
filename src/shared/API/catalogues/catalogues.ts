import {AxiosPromise} from "axios";
import {instance} from "../instance";

const BASE_URL = "catalogues/"
export const getCatalogList = (arg: unknown):AxiosPromise<unknown>  => {
  return instance.get(BASE_URL);
}
