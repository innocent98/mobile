import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';


import SplashScreen from 'react-native-splash-screen';
import {changeTheme, defaultTheme} from './redux/themeRedux';
import {useSelector, useDispatch} from 'react-redux';

const MainApp = () => {
  const isDark = useSelector(state => state.theme.isDark);

  const dispatch = useDispatch();

  const handleTheme = () => {
    if (isDark) {
      dispatch(defaultTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: isDark ? '#222' : 'gray', flex: 1}}>
      <Text onPress={handleTheme}>Hello theme</Text>
    </SafeAreaView>
  );
};

export default MainApp;
