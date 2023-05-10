import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Vacancy} from "../../../shared/API/vacancies/models";
import {API} from "../../../shared";
export const initialState: {
  isLoading:boolean,
  vacancy:Partial<Vacancy>
} = {
  isLoading:true,
  vacancy:{}
};

const VACANCY_LIST_KEY = "vacancy";

const vacancyModel = createSlice({
  name: VACANCY_LIST_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVacancy.fulfilled, (state, action) => {
        state.vacancy = action.payload.data
        state.isLoading = false
      })
  }
});

export const getVacancy = createAsyncThunk(
  `${VACANCY_LIST_KEY}/get`,
  async (params: API.vacancies.GetVacancyParams, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    const res = await API.vacancies.getVacancy(params)
    const data = res.data
    return {data}
  })
export const vacancyActions = {
  getVacancy
}
export const {reducer: vacancyReducer} = vacancyModel