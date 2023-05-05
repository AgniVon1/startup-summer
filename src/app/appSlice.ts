import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type StatusAppType = 'idle' | 'failed' | 'succeeded' | 'loading'

type AppInitialState = {
  isInit: boolean
  isLoading: false,
  status: StatusAppType,
  error: string | null,
  infoMessage: string | null,
}

const initialState: AppInitialState = {
  isInit: false,
  isLoading: false,
  status: 'idle',
  error: null,
  infoMessage: null,
}
const appSlice = createSlice({
  name: 'app',
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
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.status = 'succeeded'
        }
      )
  }

})
export const {reducer: appReducer, actions: appActions} = appSlice
