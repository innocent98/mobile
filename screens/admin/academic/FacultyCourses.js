import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../Home';

const FacultyCourses = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Logo />

      <ScrollView>
        <View style={styles.container}>
          {item.courses.map(course => (
            <RectButton style={styles.studentProfile} key={course.id}>
              <Text style={styles.studentProfileDetails}>{course}</Text>
            </RectButton>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FacultyCourses;
