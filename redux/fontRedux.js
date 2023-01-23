import {createSlice} from '@reduxjs/toolkit';

const fontSlice = createSlice({
  name: 'font',
  initialState: {
    fontSize: 16,
    keepSettings: false,
  },
  reducers: {
    changeFont: (state, action) => {
      state.fontSize = action.payload;
    },
    changeSettings: (state, action) => {
      state.keepSettings = action.payload;
    },
  },
});

export const {changeFont, changeSettings} = fontSlice.actions;
export default fontSlice.reducer;
