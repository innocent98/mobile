import {createSlice} from '@reduxjs/toolkit';

const processSlice = createSlice({
  name: 'process',
  initialState: {
    data: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    processStart: state => {
      state.isFetching = true;
    },
    processSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    processFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {processStart, processSuccess, processFailure} =
  processSlice.actions;
export default processSlice.reducer;
