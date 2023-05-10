import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {log} from "util";

type StatusAppType = 'idle' | 'failed' | 'succeeded' | 'loading'

type AppInitialState = {
  isInit: boolean
  isLoading:boolean,
  status: StatusAppType,
  error: string | null,
  infoMessage: string | null,
}

const initialState: AppInitialState = {
  isInit: true,
  isLoading: false,
  status: 'idle',
  error: null,
  infoMessage: null,
}

const appStatus = createSlice({
  name: 'appStatus',
  initialState,
  reducers: {
    initialization: (state, action: PayloadAction<{ isInit: boolean }>) => {
      state.isInit = action.payload.isInit
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.status = 'loading'
          state.isLoading = true
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          const { payload, error } = action
          if (payload) {
            if (payload.showGlobalError) {
              state.error = payload.data.messages.length ? payload.data.messages[0] : 'Some error occurred'
            }
          } else {
            state.error = error.message ? error.message : 'Some error occurred'
          }
          state.status = 'failed'
          state.isLoading = false
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.status = 'succeeded'
          state.isLoading = false
        }
      )
  }

})
export const {reducer: appStatusReducer, actions: appStatusActions} = appStatus
