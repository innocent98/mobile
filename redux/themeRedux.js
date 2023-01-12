import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.isDark = action.payload;
    },
    defaultTheme: (state, action) => {
        state.isDark = action.payload;
      },
  },
});

export const { changeTheme, defaultTheme } = themeSlice.actions;
export default themeSlice.reducer;