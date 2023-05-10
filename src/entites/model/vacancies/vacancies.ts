import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Vacancy} from "../../../shared/API/vacancies/models";
import {API} from "../../../shared";



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

const VACANCY_LIST_KEY = "vacancies";

const vacanciesModel = createSlice({
  name: VACANCY_LIST_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVacanciesList.fulfilled, (state, action) => {
        state.data = action.payload.data
      })
  }
});

export const getVacanciesList = createAsyncThunk(
  `${VACANCY_LIST_KEY}/get`,
  async (params: API.vacancies.GetVacanciesListParams, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    const res = await API.vacancies.getVacanciesList(params)
    const data = res.data
    return {data}
  })
export const vacanciesActions = {
  getVacanciesList
}
export const {reducer: vacanciesReducer} = vacanciesModel