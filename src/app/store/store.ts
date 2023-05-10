import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {vacanciesApiRTK} from "../../shared/utils/services/vacanciesApiRTK";
import {appStatusReducer} from "../../entites/model/appStatus/appStatus";
import {vacanciesReducer} from "../../entites/model/vacancies/vacancies";
import thunkMiddleware from 'redux-thunk'
import {vacancyReducer} from "../../entites/model/vacancy/vacancy";

const RootReducer = combineReducers({
  appStatus : appStatusReducer,
  vacancies : vacanciesReducer,
  vacancy: vacancyReducer,
  [vacanciesApiRTK.reducerPath]: vacanciesApiRTK.reducer,
})
export const store = configureStore(
  {
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(vacanciesApiRTK.middleware).prepend(thunkMiddleware)
  }
)

setupListeners(store.dispatch)



