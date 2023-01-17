import { createSlice } from "@reduxjs/toolkit";

const fontSlice = createSlice({
  name: "font",
  initialState: {
    fontSize: 16,
  },
  reducers: {
    changeFont: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { changeFont } = fontSlice.actions;
export default fontSlice.reducer;