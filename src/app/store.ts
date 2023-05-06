import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./appSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {vacanciesApi} from "../features/services/vacanciesApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {cataloguesApi} from "../features/services/cataloguesApi";

const RootReducer = combineReducers({
  //app: appReducer,
  [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  [cataloguesApi.reducerPath]: cataloguesApi.reducer
})
export const store = configureStore(
  {
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(vacanciesApi.middleware).concat(cataloguesApi.middleware)
  }
)
setupListeners(store.dispatch)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export type RootState = ReturnType<typeof store.getState>
//export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch



