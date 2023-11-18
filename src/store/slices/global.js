import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader:false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {

    turnLoaderOn: (state) => {
      state.loader = true;
    },
    turnLoaderOff: (state) => {
      state.loader = false;
    },

  },
})

// Action creators are generated for each case reducer function
export const { turnLoaderOn , turnLoaderOff } = globalSlice.actions

export default globalSlice.reducer