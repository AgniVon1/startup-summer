import {instance} from "../../shared/API/instance";

export const vacanciesApi = {
  getVacancies(arg: unknown) {
    return instance.get('vacancies/');
  },
}