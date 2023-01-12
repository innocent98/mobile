import axios from 'axios';
import {Alert} from 'react-native';
import {userRequest} from './requestMethod';
import {loginFailure, loginStart, loginSuccess, logout} from './userRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data, user));
    // console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
    Alert.alert(err.response.data);
    // console.log(err.response.data)
  }
};

export const userLogout = async dispatch => {
  dispatch(logout());
};



