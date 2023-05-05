import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: {},
    data2: {},
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setData2: (state, action) => {
      state.data2 = action.payload;
    },
  },
});

export const {setData, setData2} = dataSlice.actions;
export default dataSlice.reducer;
