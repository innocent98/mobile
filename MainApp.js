import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from './screens/Profile';
import MyCourse from './screens/MyCourse';
import MyResults from './screens/MyResults';
import CourseRegistration from './screens/CourseRegistration';
import Project from './screens/Project';
import ELibrary from './screens/E-Library';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS, SIZES} from './constants';
import {
  AcademicNavigator,
  AttendanceManagementNavigator,
  ChatNavigator,
  ExamAndRecordNavigator,
  FeesManagementNavigator,
  FeesNavigator,
  HomeNavigator,
  OnlineExamNavigator,
  ReceptionNavigator,
  StaffProfileNavigator,
  StudentProfileNavigator,
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
import Fees from './screens/admin/Fees';
import Hostel from './screens/admin/Hostel';
import Reception from './screens/admin/reception/Reception';
import Academic from './screens/admin/academic/Academic';
import Students from './screens/admin/students/Students';
import Staffs from './screens/admin/Staffs';
import AttendanceOption from './screens/admin/attendance/AttendanceOption';
import Chat from './screens/Chat';
import Notification from './components/Notification';
import Results from './screens/admin/results/Results';
import Exam from './screens/admin/exam/Exam';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  const user = useSelector(state => state.user.currentUser);
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
    <Drawer.Navigator initialRouteName="Dashboard">
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
                navigation.navigate('Notification', {notifications})
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
      {!user && (
        <>
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'My Profile',
              drawerIcon: () => (
                <Icon
                  name="account-circle"
                  size={24}
                  color={COLORS.secondary}
                />
              ),
              headerRight: () => (
                <BorderlessButton
                  onPress={() =>
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
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
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
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
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
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
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
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
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
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
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
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
                    navigation.navigate('Notification', {notifications})
                  }>
                  <View style={styles.header}>
                    <Icon
                      name="notifications"
                      size={28}
                      color={COLORS.secondary}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {notifications.length}
                      </Text>
                    </View>
                  </View>
                </BorderlessButton>
              ),
            }}
          />
          <Drawer.Screen
            name="ExamRegistration"
            component={Fees}
            options={{
              title: 'Exam Registration',
              drawerIcon: () => (
                <Icon
                  name="account-balance-wallet"
                  size={24}
                  color={COLORS.secondary}
                />
              ),
            }}
          />
        </>
      )}

      {/* admin */}
      <Drawer.Screen
        name="Reception"
        component={Reception}
        options={{
          title: 'Reception',
          drawerIcon: () => (
            <Icon name="support-agent" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Students"
        component={Students}
        options={{
          title: 'Students Management',
          drawerIcon: () => (
            <Icon name="school" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Staffs"
        component={Staffs}
        options={{
          title: 'Staffs Management',
          drawerIcon: () => (
            <Icon name="people" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Academic"
        component={Academic}
        options={{
          title: 'Academics',
          drawerIcon: () => (
            <Icon name="school" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exams&Records"
        component={Results}
        options={{
          title: 'Exams & Records',
          drawerIcon: () => (
            <Icon name="bar-chart" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="FeesStructures"
        component={Fees}
        options={{
          title: 'Fees Management',
          drawerIcon: () => (
            <Icon
              name="account-balance-wallet"
              size={24}
              color={COLORS.secondary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Attendance"
        component={AttendanceOption}
        options={{
          title: 'Attendance Management',
          drawerIcon: () => (
            <Icon name="poll" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exam"
        component={Exam}
        options={{
          title: 'Online Examination Management',
          drawerIcon: () => (
            <Icon name="post-add" size={24} color={COLORS.secondary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Hostel"
        component={Hostel}
        options={{
          title: 'Hostel Management',
          drawerIcon: () => (
            <Icon name="apartment" size={24} color={COLORS.secondary} />
          ),
        }}
      />

      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Messenger',
          drawerIcon: () => (
            <Icon name="chat" size={24} color={COLORS.secondary} />
          ),
          headerRight: () => (
            <BorderlessButton
              onPress={() =>
                navigation.navigate('Notification', {notifications})
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

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Receptionist"
        component={ReceptionNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Academics"
        component={AcademicNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Student"
        component={StudentProfileNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StaffProfileNavigator"
        component={StaffProfileNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExamAndRecord"
        component={ExamAndRecordNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeesManagement"
        component={FeesManagementNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AttendanceManagement"
        component={AttendanceManagementNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExamManagement"
        component={OnlineExamNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Chats"
        component={ChatNavigator}
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

const MainApp = () => {
  const user = useSelector(state => state.user.currentUser);

  return user ? <StackNavigator /> : <Login />;
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
