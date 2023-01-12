import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../screens/Chat';
import Home from '../screens/Home';
import MyFees from '../screens/MyFees';
import FeesDetails from './FeesDetails';
import Messenger from './Messenger';
import Notification from './Notification';
import PaymentInfo from './PaymentInfo';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerTitle: 'Notification'}}
      />
    </Stack.Navigator>
  );
};

export const FeesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyFees"
        component={MyFees}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{headerTitle: 'Fees'}}
      />
      <Stack.Screen
        name="FeesDetails"
        component={FeesDetails}
        options={{headerTitle: 'Fees Details'}}
      />
    </Stack.Navigator>
  );
};

export const ChatNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messenger"
        component={Messenger}
        options={({route}) => ({
          headerTitle: route.params.username,
        })}
      />
    </Stack.Navigator>
  );
};
