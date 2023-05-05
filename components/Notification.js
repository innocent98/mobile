import {MotiView} from 'moti';
import {Text} from 'react-native';
import {Easing} from 'react-native-reanimated';
import { styles } from '../constants/styles';

export const Notification = ({message, backgroundColor, color, from, animate}) => {
  return (
    <MotiView
      from={{top: from, opacity: 0.5}}
      animate={{top: animate, opacity: 1}}
      transition={{
        type: 'timing',
        duration: 500,
        easing: Easing.out(Easing.ease),
      }}
      style={[styles.notification, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.errorText, {color: color}]}>{message}</Text>
    </MotiView>
  );
};
