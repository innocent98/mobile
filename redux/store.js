import {configureStore, combineReducers} from '@reduxjs/toolkit';
import themeReducer from './themeRedux';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fontReducer from './fontRedux';
import onBoardReducer from './onBoardRedux';
import userReducer from './userRedux';
import processReducer from './processRedux';
import homeProcessReducer from './/homeProcessRedux';
import topComponentReducer from './topComponentRedux';
import dataReducer from './data'
import isPDFOpenedReducer from './isPDFOpenedRedux'

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
  data: dataReducer,
  isOpened: isPDFOpenedReducer,
  homeProcess: homeProcessReducer
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
