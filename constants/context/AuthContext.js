import {createContext, useEffect, useReducer} from 'react';
import AuthReducer from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const user = JSON.stringify(AsyncStorage.getItem('user'));

const INITIAL_STATE = {
  user: JSON.parse(user) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    AsyncStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
