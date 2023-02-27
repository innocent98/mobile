import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {courseList} from '../../../constants/dummy';

const ResultDetails = ({route}) => {
  const {r} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topActions}>
        <View style={styles.subTopAction}>
          <TextInput placeholder="Search with course code..." style={styles.staffInput} />
        </View>
        <Text style={styles.span}>
          tap to see students who sat for the exam
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {courseList.map(course => (
            <RectButton
              style={styles.studentProfile}
              onPress={() => navigation.navigate('ResultAttendance')}
              key={course.id}>
              <Text style={styles.studentProfileDetails}>{course.code}</Text>
            </RectButton>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultDetails;
