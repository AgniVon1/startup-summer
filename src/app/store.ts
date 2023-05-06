import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./appSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {setupListeners} from "@reduxjs/toolkit/query";
import {vacanciesApiRTK} from "../common/services/vacanciesApiRTK";


const RootReducer = combineReducers({
  app: appReducer,
  [vacanciesApiRTK.reducerPath]: vacanciesApiRTK.reducer,
//  [cataloguesApiRTK.reducerPath]: cataloguesApiRTK.reducer
})
export const store = configureStore(
  {
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(vacanciesApiRTK.middleware)
        //.concat(cataloguesApiRTK.middleware)
  }
)
setupListeners(store.dispatch)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export type RootState = ReturnType<typeof store.getState>
//export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch



