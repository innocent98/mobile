import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {userRequest} from '../../redux/requestMethod';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    // console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  // console.log('old fmcToken:', fcmToken);
  let device_name = await AsyncStorage.getItem('device_name');
  // console.log(device_name)
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        const info = {
          fcm: fcmToken,
          device_name,
        };
        // console.log('generated fcmToken:', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
        const res = await userRequest.post('/fcms', info);
        // console.log(res.data)
      }
    } catch (error) {
      // console.log(error);
    }
  }
  return fcmToken;
};

export const NotificationServices = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    // console.log(
    //   'Notification caused app to open from background state:',
    //   remoteMessage.notification,
    // );
    navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        // console.log(
        //   'Notification caused app to open from quit state:',
        //   remoteMessage.notification,
        // );
      }
    });
};
