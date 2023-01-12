import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export const StudentImage = ({url}) => {
  return (
    <View style={styles.studentImageContainer}>
      <FastImage
        style={styles.studentImage}
        source={{
          uri: url,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const StudentProfile = ({route}) => {
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
                Student Name: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Matric No: <Text style={styles.span}>{r.code}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Student Current Level:{' '}
                <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Department: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Faculty: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Date of Admission: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton onPress={() => navigation.navigate('BasicInformation', {r})} style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Basic Information
              </Text>
            </RectButton>
            <RectButton onPress={() => navigation.navigate('ParentInformation', {r})} style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Parent's Information
              </Text>
            </RectButton>
            <RectButton onPress={() => navigation.navigate('ContactInformation', {r})} style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Contact Information
              </Text>
            </RectButton>
            <RectButton onPress={() => navigation.navigate('DocumentInformation', {r})} style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Document Information
              </Text>
            </RectButton>
            <RectButton
              style={styles.studentProfile}
              onPress={() => navigation.navigate('ManageFees')}>
              <Text style={styles.studentProfileDetails}>Manage Fees</Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text
                style={styles.studentProfileDetails}
                onPress={() => navigation.navigate('ManageResults')}>
                Manage Results
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Manage Attendance
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                registered Courses
              </Text>
            </RectButton>
            <RectButton style={styles.disableStudent}>
              <Text style={styles.studentProfileDetails}>
                Disable Student's portal
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentProfile;
