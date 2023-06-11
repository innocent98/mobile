import {createSlice} from '@reduxjs/toolkit';

const isPDFOpenedSlice = createSlice({
  name: 'isOpened',
  initialState: {
    file: [],
  },
  reducers: {
    setFile: (state, action) => {
      state.file.push(action.payload);
    },
  },
});

export const {setFile} = isPDFOpenedSlice.actions;
export default isPDFOpenedSlice.reducer;
