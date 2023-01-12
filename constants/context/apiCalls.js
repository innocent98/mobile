import axios from 'axios';
import { Alert } from 'react-native';
import {userRequest} from './config';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({type: 'LOGIN_START'});
  try {
    const res = await userRequest.post('/auth/login', userCredential);
    dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
  } catch (err) {
    dispatch({type: 'LOGIN_FAILURE', payload: err});
    Alert.alert(err.response.data);
  }
};

export const logout = dispatch => {
  dispatch({type: 'LOGOUT'});
};
