import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from './screens/Profile';
import MyCourse from './screens/MyCourse';
import MyResults from './screens/MyResults';
import CourseRegistration from './screens/CourseRegistration';
import Project from './screens/Project';
import ELibrary from './screens/E-Library';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {COLORS, SIZES} from './constants';
import {
  ChatNavigator,
  FeesNavigator,
  HomeNavigator,
} from './components/StackNavigator';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Logout from './components/Logout';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {userRequest} from './redux/requestMethod';
import axios from 'axios';
import {BorderlessButton} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const cancelToken = axios.CancelToken.source();
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);

  // get notifications
  useEffect(() => {
    const getNotification = async () => {
      try {
        const res = await userRequest.get(`/messages/notification/all`, {
          cancelToken: cancelToken.token,
        });
        setNotifications(res.data);
      } catch (error) {}
    };
    getNotification();
    return () => {
      cancelToken.cancel();
    };
  }, [setNotifications]);

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={HomeNavigator}
        options={{
          headerTitle: 'Dashboard',
          drawerIcon: () => (
            <Icon name="dashboard" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My Profile',
          drawerIcon: () => (
            <Icon name="account-circle" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Courses"
        component={MyCourse}
        options={{
          title: 'My Courses',
          drawerIcon: () => (
            <Icon name="book" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Results"
        component={MyResults}
        options={{
          title: 'My Results',
          drawerIcon: () => (
            <Icon name="bar-chart" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Fees"
        component={FeesNavigator}
        options={{
          title: 'My Fees',
          drawerIcon: () => (
            <Icon
              name="account-balance-wallet"
              size={24}
              color={COLORS.secondary}
            />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="CourseRegistration"
        component={CourseRegistration}
        options={{
          title: 'Course Registration',
          drawerIcon: () => (
            <Icon name="school" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Project"
        component={Project}
        options={{
          title: 'Final Year Project',
          drawerIcon: () => (
            <Icon name="work" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Library"
        component={ELibrary}
        options={{
          title: 'E-Library',
          drawerIcon: () => (
            <Icon name="local-library" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          title: 'Messenger',
          drawerIcon: () => (
            <Icon name="chat" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Dashboard', {
                  screen: 'Notification',
                  params: {notifications},
                })
              }>
              <View style={styles.header}>
                <Icon name="notifications" size={28} color={COLORS.secondary} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications.length}</Text>
                </View>
              </View>
            </BorderlessButton>
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Logout',
          drawerIcon: () => (
            <Icon name="logout" size={24} color={COLORS.secondary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MainApp = () => {
  const user = useSelector(state => state.user.currentUser);

  return user ? <DrawerNavigator /> : <Login />;
};

const styles = StyleSheet.create({
  header: {marginRight: 20, position: 'relative'},
  badge: {
    backgroundColor: COLORS.primary,
    width: 15,
    height: 15,
    borderRadius: SIZES.font,
    position: 'absolute',
    borderWidth: 1,
    borderColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.base,
    textAlign: 'center',
  },
});

export default MainApp;
