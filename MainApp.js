import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import Home from './screens/Home';
import NewsDetails from './screens/NewsDetails';
import Abonnement from './screens/Abonnement';
import Category from './screens/Category';
import {COLORS} from './constants/theme';
import {Dimensions, Image, Platform} from 'react-native';
import {styles} from './constants/styles';
import Search from './screens/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './screens/Settings';
import FontResize from './components/settings/FontResize';
import Welcome from './screens/Welcome';
import Register from './components/settings/Register';
import Login from './components/settings/Login';
import SingleSearch from './screens/SingleSearch';
import VideoLists from './components/VideoLists';
import Profile from './screens/Profile';
import Bookmark from './components/Bookmark';
import Journal from './screens/Journal';
import ReadPDF from './screens/PDF';
import {useState} from 'react';
import ServiceLists from './components/ServiceLists';
import {BorderlessButton} from 'react-native-gesture-handler';
import ServiceDet from './components/ServiceDet';
import Contact from './components/settings/Contact';
import Success from './components/Success';
import Error from './components/Error';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomBackIcon = ({color, navigation}) => {
  return (
    <BorderlessButton
      style={styles.iconsBtn}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={24} color={color} />
    </BorderlessButton>
  );
};

const SettingsNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
          borderBottomColor: COLORS.light.backgroundSoft,
          borderBottomWidth: 1,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
        headerLeft: () =>
          Platform.OS === 'android' ? (
            <CustomBackIcon
              navigation={navigation}
              color={isDark ? COLORS.light.background : COLORS.dark.background}
            />
          ) : null,
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
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitle: 'Créer un compte'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: "S'identifier"}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerTitle: '', headerShown: false}}
      />
      <Stack.Screen
        name="CategoryPage"
        component={CategoryNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
          borderBottomColor: COLORS.light.backgroundSoft,
          borderBottomWidth: 1,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
        headerLeft: () =>
          Platform.OS === 'android' ? (
            <CustomBackIcon
              navigation={navigation}
              color={isDark ? COLORS.light.background : COLORS.dark.background}
            />
          ) : null,
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
        name="Bookmark"
        component={Bookmark}
        options={{headerShown: true, headerTitle: 'Favoris'}}
      />
      <Stack.Screen
        name="Abonnement"
        component={Abonnement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Error"
        component={Error}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoLists"
        component={VideoLists}
        options={{headerShown: true, headerTitle: 'Nos Videos'}}
      />
      <Stack.Screen
        name="ServiceLists"
        component={ServiceLists}
        options={{headerShown: true, headerTitle: 'Nos Services'}}
      />
      <Stack.Screen
        name="ServiceDet"
        component={ServiceDet}
        options={{headerShown: false, headerTitle: 'Services'}}
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
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
          borderBottomColor: COLORS.light.backgroundSoft,
          borderBottomWidth: 1,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
        headerLeft: () =>
          Platform.OS === 'android' ? (
            <CustomBackIcon
              navigation={navigation}
              color={isDark ? COLORS.light.background : COLORS.dark.background}
            />
          ) : null,
      }}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleSearch"
        component={SingleSearch}
        options={{headerShown: true, headerTitle: 'Recherche'}}
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

const CategoryNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
          borderBottomColor: COLORS.light.backgroundSoft,
          borderBottomWidth: 1,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
        headerLeft: () =>
          Platform.OS === 'android' ? (
            <CustomBackIcon
              navigation={navigation}
              color={isDark ? COLORS.light.background : COLORS.dark.background}
            />
          ) : null,
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

const JournalNavigator = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const [horizontal, setHorizontal] = useState(false);
  const navigation = useNavigation();

  const handleHorizontal = () => {
    setHorizontal(!horizontal);
  };

  return (
    <Stack.Navigator
      initialRouteName="Journal"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.background,
          borderBottomColor: COLORS.light.backgroundSoft,
          borderBottomWidth: 1,
        },
        headerTintColor: isDark
          ? COLORS.light.background
          : COLORS.dark.background,
        headerTitleStyle: {
          color: isDark ? COLORS.light.background : COLORS.dark.background,
        },
        headerLeft: () =>
          Platform.OS === 'android' ? (
            <CustomBackIcon
              navigation={navigation}
              color={isDark ? COLORS.light.background : COLORS.dark.background}
            />
          ) : null,
      }}>
      <Tab.Screen
        name="Journal"
        component={Journal}
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
      <Stack.Screen
        name="ReadPDF"
        component={ReadPDF}
        options={({route}) => ({
          headerShown: false,
          headerTitle: route?.params?.data?.title,
          headerRight: () => (
            <Icon
              name={horizontal ? 'swap-vert' : 'swap-horiz'}
              size={30}
              style={{marginHorizontal: 5}}
              onPress={handleHorizontal}
            />
          ),
        })}
        initialParams={{horizontal}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const user = useSelector(state => state.user.currentUser);
  const isDark = useSelector(state => state.theme.isDark);
  const itemHeight = Dimensions.get('window').height;

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
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
            case 'JournalPage':
              iconName = 'menu-book';
              break;

            default:
              'HomePage';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: COLORS.light.primary,
        tabBarInactiveTintColor: COLORS.light.background,
        tabBarStyle: {
          backgroundColor: isDark
            ? COLORS.dark.background
            : COLORS.light.primary,
          paddingHorizontal: 40,
          height: itemHeight * 0.1,
          maxWidth: '100%',
          borderTopColor: COLORS.light.backgroundSoft,
          borderTopWidth: 1,
        },
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarActiveBackgroundColor: COLORS.dark.textSoft,
        tabBarItemStyle: {
          height: '80%',
          maxWidth: '50%',
          borderRadius: 10,
          marginTop: 5,
          flexDirection: 'column',
        },
        tabBarShowLabel: true,
      })}>
      <Tab.Screen
        name="HomePage"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'A la une',
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchNavigator}
        options={{headerShown: false, tabBarLabel: 'Recherche'}}
      />
      <Tab.Screen
        name="JournalPage"
        component={user ? JournalNavigator : SettingsNavigator}
        options={{headerShown: false, tabBarLabel: 'Journal'}}
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
  const isBoarded = useSelector(state => state.onBoard.isBoarded);

  if (isBoarded) return <TabNavigator />;
  return <OnBoard />;
};

export default MainApp;
