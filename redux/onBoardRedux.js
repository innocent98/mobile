import {createSlice} from '@reduxjs/toolkit';

const onBoardsSlice = createSlice({
  name: 'onBoard',
  initialState: {
    isBoarded: false,
  },
  reducers: {
    changeBoard: (state, action) => {
      state.isBoarded = action.payload;
    },
  },
});

export const {changeBoard} = onBoardsSlice.actions;
export default onBoardsSlice.reducer;
