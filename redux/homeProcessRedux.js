import {createSlice} from '@reduxjs/toolkit';

const homeProcessSlice = createSlice({
  name: 'homeProcess',
  initialState: {
    data: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    homeProcessStart: state => {
      state.isFetching = true;
    },
    homeProcessSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    homeProcessFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {homeProcessStart, homeProcessSuccess, homeProcessFailure} =
  homeProcessSlice.actions;
export default homeProcessSlice.reducer;
