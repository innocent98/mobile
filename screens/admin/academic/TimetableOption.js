import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const TimetableOption = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.attendanceOption}>
        <Text style={styles.title}>Select Time</Text>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('EditTimetable', {time: '8:00 - 10:00'})
          }>
          <Text style={styles.buttonText}>8:00 - 10:00</Text>
        </RectButton>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('EditTimetable', {time: '10:00 - 12:00'})
          }>
          <Text style={styles.buttonText}>10:00 - 12:00</Text>
        </RectButton>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('EditTimetable', {time: '12:00 - 14:00'})
          }>
          <Text style={styles.buttonText}>12:00 - 14:00</Text>
        </RectButton>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('EditTimetable', {time: '14:00 - 16:00'})
          }>
          <Text style={styles.buttonText}>14:00 - 16:00</Text>
        </RectButton>
        <RectButton
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('EditTimetable', {time: '16:00 - 18:00'})
          }>
          <Text style={styles.buttonText}>16:00 - 18:00</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default TimetableOption;
