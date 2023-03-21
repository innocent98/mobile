/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import MainApp from './MainApp';
import {
  NotificationServices,
  requestUserPermission,
} from './constants/utils/PushNotifications';
import ForegroundHandler from './constants/utils/ForegroundHandler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);

  // handle send push notification
  // Set up message payload
  const payload = {
    notification: {
      title: 'New message',
      body: 'You have a new message from John Doe',
    },
  };

  // Set up options for sending the message
  const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 24 hours
  };

  // Set the target device registration token
  const [registrationToken, setRegistrationToken] = useState('');
  const fcm = async () => {
    setRegistrationToken(await AsyncStorage.getItem('fcmToken'));
    // console.log(registrationToken);
  };
  useEffect(() => {
    fcm();
  });

  // Set up the request headers
  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'key=AAAAxBYBZPs:APA91bGcUKfAAVBo72v6g731ruOIMcwa1v7WjyeD8S8S3uBjjkTCrGw89wkBvL3ksHTIWxbf89Rx61Y5t_ImWhl7fkwYOotWV3fU53tOfmd0EDtlcWx6BFh9TCEYIjJOd8j0S_8xXjtj',
  };

  // Set up the request body
  const body = {
    notification: payload.notification,
    to: registrationToken,
    priority: options.priority,
    time_to_live: options.timeToLive,
  };

  // Send the message to the FCM API
  axios
    .post('https://fcm.googleapis.com/fcm/send', body, {headers})
    .then(response => {
      // console.log('Successfully sent message:', response.data);
    })
    .catch(error => {
      // console.log('Error sending message:', error.response.data);
    });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ForegroundHandler />
          <MainApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
