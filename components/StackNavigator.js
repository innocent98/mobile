import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import MyFees from '../screens/MyFees';
import FeesDetails from './FeesDetails';
import Messenger from './Messenger';
import PaymentInfo from './PaymentInfo';
import StaffProfile from './../screens/admin/StaffProfile';
import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {styles} from '../constants/styles';
import FeesStatus from '../screens/admin/FeesStatus';
import ManageFees from '../screens/admin/ManageFees';
import ManageResults from '../screens/admin/ManageResults';
import StudentAttendance from '../screens/admin/attendance/StudentAttendance';
import StudentExamAttendance from '../screens/admin/attendance/StudentExamAttendance';
import TakeClassAttendance from '../screens/admin/attendance/TakeClassAttendance';
import TakeExamAttendance from '../screens/admin/attendance/TakeExamAttendance';
import BasicInformation from '../screens/admin/students/BasicInformation';
import ParentInformation from '../screens/admin/students/ParentInformation';
import ContactInformation from '../screens/admin/students/ContactInformation';
import DocumentInformation from '../screens/admin/students/DocumentInformation';
import StudentProfile from '../screens/admin/students/StudentProfile';
import EditStudent from '../screens/admin/students/EditStudent';
import StudentResult from '../screens/admin/students/StudentResult';
import AttendanceWeeks from '../screens/admin/attendance/AttendanceWeeks';
import EditDocumentInfo from '../screens/admin/students/EditDocumentInfo';
import EditContactInfo from '../screens/admin/students/EditContactInfo';
import EditParentInfo from '../screens/admin/students/EditParentInfo';
import EditBasicInfo from '../screens/admin/students/EditBasicInfo';
import AdmissionEnquiry from '../screens/admin/reception/AdmissionEnquiry';
import AdmissionEnquiryDetails from '../screens/admin/reception/AdmissionEnquiryDetails';
import EditAdmissionEnquiry from '../screens/admin/reception/EditAdmissionEnquiry';
import VisitorLog from '../screens/admin/reception/VisitorLog';
import EditVisitorLog from '../screens/admin/reception/EditVisitorLog';
import CallLog from '../screens/admin/reception/CallLog';
import EditCallLog from '../screens/admin/reception/EditCallLog';
import Complaint from '../screens/admin/reception/Complaint';
import EditComplaint from '../screens/admin/reception/EditComplaint';
import Timetable from '../screens/admin/academic/Timetable';
import EditTimetble from '../screens/admin/academic/EditTimetble';
import TimetableOption from '../screens/admin/academic/TimetableOption';
import Faculties from '../screens/admin/academic/Faculties';
import FacultyCourses from '../screens/admin/academic/FacultyCourses';
import Courses from '../screens/admin/academic/Courses';
import AcademicSession from '../screens/admin/academic/AcademicSession';
import Assignment from '../screens/admin/academic/Assignment';
import EditAssignment from '../screens/admin/academic/EditAssignment';
import ResultDetails from '../screens/admin/results/ResultDetails';
import ResultAttendance from '../screens/admin/results/ResultAttendance';
import ExamEditor from '../screens/admin/exam/ExamEditor';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
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
        name="Messenger"
        component={Messenger}
        options={({route}) => ({
          headerTitle: route.params.username,
        })}
      />
    </Stack.Navigator>
  );
};

export const StudentProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentProfile"
        component={StudentProfile}
        options={({route, navigation}) => ({
          headerTitle: route.params.r.name,
          headerRight: () => (
            <RectButton
              onPress={() =>
                navigation.navigate('EditStudent', {r: route.params.r})
              }
              style={styles.editStaffBtn}>
              <Text style={styles.editStaff}>Edit</Text>
            </RectButton>
          ),
        })}
      />
      <Stack.Screen
        name="EditStudent"
        component={EditStudent}
        options={({route}) => ({
          headerTitle: route.params.r.name,
        })}
      />
      <Stack.Screen
        name="EditBasicInfo"
        component={EditBasicInfo}
        options={({route}) => ({
          headerTitle: route.params.r.name,
        })}
      />
      <Stack.Screen
        name="EditParentInfo"
        component={EditParentInfo}
        options={({route}) => ({
          headerTitle: route.params.r.name,
        })}
      />
      <Stack.Screen
        name="EditContactInfo"
        component={EditContactInfo}
        options={({route}) => ({
          headerTitle: route.params.r.name,
        })}
      />
      <Stack.Screen
        name="EditDocumentInfo"
        component={EditDocumentInfo}
        options={({route}) => ({
          headerTitle: route.params.r.name,
        })}
      />
      <Stack.Screen
        name="BasicInformation"
        component={BasicInformation}
        options={({route, navigation}) => ({
          headerTitle: 'Basic Information',
          headerRight: () => (
            <RectButton
              onPress={() =>
                navigation.navigate('EditBasicInfo', {r: route.params.r})
              }
              style={styles.editStaffBtn}>
              <Text style={styles.editStaff}>Edit</Text>
            </RectButton>
          ),
        })}
      />
      <Stack.Screen
        name="ParentInformation"
        component={ParentInformation}
        options={({route, navigation}) => ({
          headerTitle: 'Parent Information',
          headerRight: () => (
            <RectButton
              onPress={() =>
                navigation.navigate('EditParentInfo', {r: route.params.r})
              }
              style={styles.editStaffBtn}>
              <Text style={styles.editStaff}>Edit</Text>
            </RectButton>
          ),
        })}
      />
      <Stack.Screen
        name="ContactInformation"
        component={ContactInformation}
        options={({route, navigation}) => ({
          headerTitle: 'Contact Information',
          headerRight: () => (
            <RectButton
              onPress={() =>
                navigation.navigate('EditContactInfo', {r: route.params.r})
              }
              style={styles.editStaffBtn}>
              <Text style={styles.editStaff}>Edit</Text>
            </RectButton>
          ),
        })}
      />
      <Stack.Screen
        name="DocumentInformation"
        component={DocumentInformation}
        options={({route, navigation}) => ({
          headerTitle: 'Document Information',
          headerRight: () => (
            <RectButton
              onPress={() =>
                navigation.navigate('EditDocumentInfo', {r: route.params.r})
              }
              style={styles.editStaffBtn}>
              <Text style={styles.editStaff}>Edit</Text>
            </RectButton>
          ),
        })}
      />
      <Stack.Screen
        name="ManageFees"
        component={ManageFees}
        options={{headerTitle: 'Fees List'}}
      />
      <Stack.Screen
        name="ManageResults"
        component={ManageResults}
        options={{headerTitle: 'Student Results'}}
      />
      <Stack.Screen
        name="StudentResult"
        component={StudentResult}
        options={({route}) => ({
          headerTitle: route.params.result.type,
        })}
      />
    </Stack.Navigator>
  );
};

export const StaffProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StaffProfile"
        component={StaffProfile}
        options={({route}) => ({
          headerTitle: route.params.r.name,
          headerRight: () => (
            <RectButton style={styles.editStaffBtn}>
              <Text style={styles.editStaff}>Edit</Text>
            </RectButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const ExamAndRecordNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResultDetails"
        component={ResultDetails}
        options={({route}) => ({
          headerTitle: 'Courses Registered For Exam',
        })}
      />
      <Stack.Screen
        name="ResultAttendance"
        component={ResultAttendance}
        options={({route}) => ({
          headerTitle: 'Exam Attendance',
        })}
      />
    </Stack.Navigator>
  );
};

export const FeesManagementNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeesStatus"
        component={FeesStatus}
        options={({route}) => ({
          headerTitle: `${route.params.r.type} ${route.params.r.acY}`,
        })}
      />
    </Stack.Navigator>
  );
};

export const AttendanceManagementNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentAttendance"
        component={StudentAttendance}
        options={{
          headerTitle: 'Class Attendance',
        }}
      />
      <Stack.Screen
        name="StudentExamAttendance"
        component={StudentExamAttendance}
        options={{
          headerTitle: 'Exam Attendance',
        }}
      />
      <Stack.Screen
        name="AttendanceWeeks"
        component={AttendanceWeeks}
        options={({route}) => ({
          headerTitle: `${route.params.course.code}`,
        })}
      />
      <Stack.Screen
        name="TakeClassAttendance"
        component={TakeClassAttendance}
        options={({route}) => ({
          headerTitle: `${route.params.course.code}`,
        })}
      />
      <Stack.Screen
        name="TakeExamAttendance"
        component={TakeExamAttendance}
        options={({route}) => ({
          headerTitle: `${route.params.course.code}`,
        })}
      />
    </Stack.Navigator>
  );
};

export const ReceptionNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdmissionEnquiry"
        component={AdmissionEnquiry}
        options={({route}) => ({
          headerTitle: 'Admission Enquiry',
        })}
      />
      <Stack.Screen
        name="AdmissionEnquiryDetails"
        component={AdmissionEnquiryDetails}
        options={({route}) => ({
          headerTitle: 'Admission Enquiry',
        })}
      />
      <Stack.Screen
        name="EditAdmissionEnquiry"
        component={EditAdmissionEnquiry}
        options={({route}) => ({
          headerTitle: 'Admission Enquiry',
        })}
      />
      <Stack.Screen
        name="VisitorLog"
        component={VisitorLog}
        options={({route}) => ({
          headerTitle: 'Visitor Log',
        })}
      />
      <Stack.Screen
        name="EditVisitorLog"
        component={EditVisitorLog}
        options={({route}) => ({
          headerTitle: 'Visitor Log',
        })}
      />
      <Stack.Screen
        name="CallLog"
        component={CallLog}
        options={({route}) => ({
          headerTitle: 'Call Log',
        })}
      />
      <Stack.Screen
        name="EditCallLog"
        component={EditCallLog}
        options={({route}) => ({
          headerTitle: 'Call Log',
        })}
      />
      <Stack.Screen
        name="Complaint"
        component={Complaint}
        options={({route}) => ({
          headerTitle: 'Complaint',
        })}
      />
      <Stack.Screen
        name="EditComplaint"
        component={EditComplaint}
        options={({route}) => ({
          headerTitle: 'Complaint',
        })}
      />
    </Stack.Navigator>
  );
};

export const AcademicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Timetable"
        component={Timetable}
        options={({route}) => ({
          headerTitle: 'Timetable',
        })}
      />
      <Stack.Screen
        name="TimetableOption"
        component={TimetableOption}
        options={({route}) => ({
          headerTitle: 'Timetable',
        })}
      />
      <Stack.Screen
        name="EditTimetable"
        component={EditTimetble}
        options={({route}) => ({
          headerTitle: 'Timetable',
        })}
      />
      <Stack.Screen
        name="Faculties"
        component={Faculties}
        options={({route}) => ({
          headerTitle: 'Faculties',
        })}
      />
      <Stack.Screen
        name="FacultyCourses"
        component={FacultyCourses}
        options={({route}) => ({
          headerTitle: route.params.item.faculty,
        })}
      />
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={({route}) => ({
          headerTitle: 'Courses',
        })}
      />
      <Stack.Screen
        name="AcademicSession"
        component={AcademicSession}
        options={({route}) => ({
          headerTitle: 'Academic Session',
        })}
      />
      <Stack.Screen
        name="Assignment"
        component={Assignment}
        options={({route}) => ({
          headerTitle: 'Assessment',
        })}
      />
      <Stack.Screen
        name="EditAssignment"
        component={EditAssignment}
        options={({route}) => ({
          headerTitle: 'Assessment',
        })}
      />
    </Stack.Navigator>
  );
};

export const OnlineExamNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExamEditor"
        component={ExamEditor}
        options={({route}) => ({
          headerTitle: 'Online Examination',
        })}
      />
    </Stack.Navigator>
  );
};
