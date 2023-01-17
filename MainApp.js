import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {changeTheme, defaultTheme} from './redux/themeRedux';
import {useSelector, useDispatch} from 'react-redux';
import Home from './screens/Home';
import NewsDetails from './screens/NewsDetails';
import Abonnement from './screens/Abonnement';
import Category from './screens/Category';
import {COLORS} from './constants/theme';
import {Image} from 'react-native';
import {styles} from './constants/styles';
import Search from './screens/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: 'Paramètres'}}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: isDark ? COLORS.dark.background : COLORS.light.background},
        headerTintColor: isDark  ? COLORS.light.background : COLORS.dark.background,
        headerTitleStyle: {color: isDark ? COLORS.light.background : COLORS.dark.background},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Abonnement"
        component={Abonnement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Paramètres',
        }}
      />
    </Stack.Navigator>
  );
};

const SearchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Abonnement"
        component={Abonnement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: 'Paramètres'}}
      />
    </Stack.Navigator>
  );
};

const CategoryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Tab.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Abonnement"
        component={Abonnement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: 'Paramètres'}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'HomePage':
              return (
                <Image
                  source={require('./assets/tab1w.png')}
                  style={styles.tabImg}
                />
              );
              break;
            case 'SearchPage':
              iconName = 'search';
              break;
            case 'CategoryPage':
              iconName = 'menu';
              break;

            default:
              'HomePage';
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: COLORS.light.primary,
        tabBarInactiveTintColor: COLORS.light.background,
        tabBarStyle: {
          backgroundColor: COLORS.light.primary,
          paddingHorizontal: 40,
          height: 60,
          maxWidth: '100%',
        },
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarActiveBackgroundColor: COLORS.dark.textSoft,
        tabBarItemStyle: {height: '80%', borderRadius: 10, marginTop: 5},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'A LA UNE',
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CategoryPage"
        component={CategoryNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

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

  return <TabNavigator />;
};

export default MainApp;
