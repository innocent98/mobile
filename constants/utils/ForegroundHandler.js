import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default ForegroundHandler = () => {
  useEffect(() => {
    const unsubscribed = messaging().onMessage(async remoteMessage => {
        const {messageId, notification} = remoteMessage;
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // console.log('foreground message received', remoteMessage);

      PushNotification.localNotification({
        channelId: 'channel-id',
        messageId: messageId,
        title: notification.title,
        body: notification.body,
        soundName: 'default',
        vibrate: true,
        playSound: true,
      });
    });
    return unsubscribed;
  }, []);
  return null 
};
