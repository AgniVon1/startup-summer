import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {vacanciesApiRTK} from "../../shared/API/services/vacanciesApiRTK";

const RootReducer = combineReducers({
 // app: appReducer, // loadModel.reducer?
  [vacanciesApiRTK.reducerPath]: vacanciesApiRTK.reducer,
})
export const store = configureStore(
  {
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(vacanciesApiRTK.middleware)
  }
)

setupListeners(store.dispatch)



