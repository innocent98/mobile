import {createSlice} from '@reduxjs/toolkit';

const topComponentSlice = createSlice({
  name: 'slide',
  initialState: {
    components: ["Actualites", "Culture"],
  },
  reducers: {
    changeComponent: (state, action) => {
      state.components = action.payload;
    },
  },
});

export const {changeComponent} = topComponentSlice.actions;
export default topComponentSlice.reducer;
