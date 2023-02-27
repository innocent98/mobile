import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AttendanceOption = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.attendanceOption}>
        <Text style={styles.title}>Select Attendance To Take</Text>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('AttendanceManagement', {
              screen: 'StudentAttendance',
            })
          }>
          <Text style={styles.buttonText}>Class Attendance</Text>
        </RectButton>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('AttendanceManagement', {
              screen: 'StudentExamAttendance',
            })
          }>
          <Text style={styles.buttonText}>Exam Attendance</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default AttendanceOption;
