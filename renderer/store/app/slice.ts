import { createSlice, Slice } from '@reduxjs/toolkit'

import { fetchStoreConfig } from './actions'

export const slice: Slice = createSlice({
  name: 'app',
  initialState: {
    storeConfig: null
  },
  reducers: {
    setAppConfig: (state: any, { payload }) => {
      state.storeConfig = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreConfig.fulfilled, (state: any, { payload }) => {
        state.setAppConfig = payload
      })
      .addCase(fetchStoreConfig.rejected, (state: any) => {
        state.setAppConfig = null
      })
  }
})
