import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../Home';

const Academic = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Logo />
      <ScrollView>
        <View style={styles.container}>
          <RectButton
            onPress={() => navigation.navigate('Academics', {screen:'Timetable'})}
            style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>Timetable</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Academics', {screen:'AcademicSession'})}>
            <Text style={styles.studentProfileDetails}>Academic Session/Semester</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Academics', {screen:'Faculties'})}>
            <Text style={styles.studentProfileDetails}>Faculties</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Academics', {screen:'Courses'})}>
            <Text style={styles.studentProfileDetails}>Courses</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Academics', {screen:'Assignment'})}>
            <Text style={styles.studentProfileDetails}>Assignment</Text>
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Academic;
