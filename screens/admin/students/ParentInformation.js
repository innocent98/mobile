import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StudentImage} from './StudentProfile';

const ParentInformation = ({route}) => {
  const {r} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <StudentImage url="https://iss.lk/wp-content/uploads/2021/03/student.jpg" />
          <View style={styles.container}>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Father's Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Mother's Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Guardian's Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Parent's Nationality: <Text style={styles.span}>{r.code}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                LGA: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Phone Number 1: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Phone Number 2: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Residential Address: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Email 1: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Email 2: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Father's Religion: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Mother's Religion: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Father's Native Language: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Mother's Native Language: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParentInformation;
