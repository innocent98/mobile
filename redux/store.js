import {configureStore, combineReducers} from '@reduxjs/toolkit';
import themeReducer from './themeRedux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fontReducer from './fontRedux';
import onBoardReducer from './onBoardRedux';
import userReducer from './userRedux';
import processReducer from './processRedux';
import topComponentReducer from './topComponentRedux';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  font: fontReducer,
  onBoard: onBoardReducer,
  user: userReducer,
  process: processReducer,
  slide: topComponentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export let persistor = persistStore(store);
