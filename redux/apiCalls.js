import {processFailure, processStart, processSuccess} from './processRedux';
import {userRequest} from './requestMethod';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  logoutError,
  setIsUser,
} from './userRedux';

export const login = async (dispatch, user, setMessage, navigation) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data, user));
    dispatch(setIsUser(true));
    navigation.navigate('Setting');
    // console.log(res.data);
  } catch (err) {
    dispatch(loginFailure(err?.response?.data));
    setMessage(err?.response?.data?.error);
    // console.log(err.response.data.error);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }
};

export const userLogout = async (dispatch, navigation) => {
  try {
    // await userRequest.post('/auth/logout');
    dispatch(logout());
    navigation.navigate('Setting');
  } catch (err) {
    console.log(err)
    dispatch(logoutError());
  }
};

export const makeGet = async (dispatch, url, setMessage, setMessage2) => {
  dispatch(processStart());
  try {
    const res = await userRequest.get(url);
    setMessage(res.data.data);
    setMessage2(res.data.data);
    dispatch(processSuccess());
  } catch (err) {
    dispatch(processFailure());
    // console.log(err.response.data);
  }
};

export const makeGet2 = async (dispatch, url, setMessage) => {
  dispatch(processStart());
  try {
    const res = await userRequest.get(url);
    setMessage(res.data);
    dispatch(processSuccess());
  } catch (err) {
    dispatch(processFailure());
    // console.log(err.response.data);
  }
};

export const makePost = async (dispatch, url, info, setMessage) => {
  dispatch(processStart());
  try {
    const res = await userRequest.post(url, info);
    setMessage(
      'Utilisateur enregistré avec succès, continuez à vous connecter',
    );
    setTimeout(() => {
      setMessage('');
    }, 2000);
    dispatch(processSuccess());
    // console.log(res);
  } catch (err) {
    // setMessage("Le compte utilisateur avec l'adresse e-mail existe déjà");
    // setMessage(err?.response?.data?.errors);
    setTimeout(() => {
      setMessage('');
    }, 2000);
    dispatch(processFailure());
    console.log(err.response.data.errors);
    // console.log(err);
  }
};
