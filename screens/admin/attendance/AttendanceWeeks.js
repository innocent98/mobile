import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {weeks} from '../../../constants/dummy';

const AttendanceWeeks = ({route}) => {
  const {course} = route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topActions}>
        <Text style={styles.span}>select attendance week</Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container}>
            {weeks.map(week => (
              <RectButton
                style={styles.studentProfile}
                onPress={() =>
                  navigation.navigate('TakeClassAttendance', {week, course})
                }
                key={week.id}>
                <Text style={styles.studentProfileDetails}>{week.week}</Text>
              </RectButton>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceWeeks;
