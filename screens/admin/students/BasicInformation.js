import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StudentImage} from './StudentProfile';

const BasicInformation = ({route}) => {
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
                First Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Middle Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Last Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Matric No: <Text style={styles.span}>{r.code}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Gender: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Date of Birth: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Place of Birth: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Nationality: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                LGA: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Religion: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Native Language: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Blood Group: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Disability: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicInformation;
