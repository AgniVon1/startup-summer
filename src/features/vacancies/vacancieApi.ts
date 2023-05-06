import {instance} from "../../common/api/instance";

export const vacanciesApi = {
  getVacancies(arg: unknown) {
    return instance.get('vacancies/');
  },
}