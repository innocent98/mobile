import {Text, View} from 'react-native';
import {styles} from '../constants/styles';

export const Notification = ({
  message,
  backgroundColor,
  color,
  from,
  animate,
}) => {
  return (
    <View style={[styles.notification, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.errorText, {color: color}]}>{message}</Text>
    </View>
  );
};
