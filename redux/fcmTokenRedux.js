import {createSlice} from '@reduxjs/toolkit';

const fcmTokenSlice = createSlice({
  name: 'fcmToken',
  initialState: {
    fcmToken: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.fcmToken = action.payload;
    },
  },
});

export const {setToken} = fcmTokenSlice.actions;
export default fcmTokenSlice.reducer;
