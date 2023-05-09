import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {useQuery} from "react-query";
import {Vacancy} from "../../shared/API/vacancies/models";
import {AxiosResponse} from "axios";
import {API} from "../../shared";


type Data = {
  objects:Vacancy[],
  total:number,
}
export const initialState: {
  data:Data
  queryConfig:API.vacancies.GetVacanciesListParams
} = {
  data:{
    objects: [] ,
    total:0,
  },
  queryConfig:{}
};

const VACANCY_LIST_KEY = "vacancy";
export const taskModel = createSlice({
  name: VACANCY_LIST_KEY,
  initialState,
  reducers: {
    setTasksList: (state, { payload }: PayloadAction<Data>) => {
      state.data = payload;
    },
  },
});

export const getTasksListAsync =
  (params?: API.vacancies.GetVacanciesListParams) => (dispatch: Dispatch) =>
    useQuery<AxiosResponse<API.vacancies.VacanciesResponse>>(
      VACANCY_LIST_KEY,
      () => API.vacancies.getVacanciesList(params), {
        onSuccess: ({ data }) => dispatch(taskModel.actions.setTasksList(data)),
        onError: () => console.log("Opps")
      }
    );

