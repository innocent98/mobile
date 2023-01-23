import {createStackNavigator} from '@react-navigation/stack';
import {useNavigationState} from '@react-navigation/native';
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
import FontResize from './components/settings/FontResize';
import {useState} from 'react';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
      }}>
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={{headerTitle: 'Paramètres'}}
      />
      <Stack.Screen
        name="FontResize"
        component={FontResize}
        options={{headerTitle: "Réglage de l'application"}}
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
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
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
        component={SettingsNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SearchNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
      }}>
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
        component={SettingsNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CategoryNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);

  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
      }}>
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
        component={SettingsNavigator}
        options={{headerShown: false}}
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
          
          const state = useNavigationState(state => state);
          const routeName = state.routeNames[state.index];

          switch (route.name) {
            case 'HomePage':
              return (
                <Image
                  source={
                    routeName === route.name
                      ? require('./assets/tab1.png')
                      : require('./assets/tab1w.png')
                  }
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
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.primary,
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

const OnBoard = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoard" component={Welcome} />
    </Stack.Navigator>
  );
};

const MainApp = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const isBoarded = useSelector(state => state.onBoard.isBoarded);

  const dispatch = useDispatch();

  const handleTheme = () => {
    if (isDark) {
      dispatch(defaultTheme(false));
    } else {
      dispatch(changeTheme(true));
    }
  };

  if (isBoarded) return <TabNavigator />;
  return <OnBoard />;
};

export default MainApp;
