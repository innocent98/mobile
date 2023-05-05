import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
    isUser: false,
    userProfile: null,
  },
  reducers: {
    loginStart: state => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout: state => {
      state.isFetching = false;
      state.currentUser = null;
      state.userProfile = null;
      state.isUser = false;
      state.error = false;
    },
    logoutError: state => {
      state.isFetching = false;
      state.error = true;
    },
    setIsUser: (state, action) => {
      state.isUser = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  logoutError,
  setIsUser,
  setUserProfile,
} = userSlice.actions;
export default userSlice.reducer;
