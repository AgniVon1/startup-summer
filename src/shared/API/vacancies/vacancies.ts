import {instance} from "../instance";
import {AxiosPromise} from "axios";
import {Vacancy} from "./models";

const BASE_URL = "vacancies/"


export type GetVacanciesListParams = {
  page?: string,
  count?: string,
  keyword?: string
  payment_from?:string,
  payment_to?: string,
};

export type VacanciesResponse = {
  objects:Vacancy[],
  total:number,
};
export const getVacanciesList = (params?: GetVacanciesListParams):AxiosPromise<VacanciesResponse> => instance.get(BASE_URL,{params});

