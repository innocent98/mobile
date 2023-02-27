import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {StudentImage} from './students/StudentProfile';

const StaffProfile = ({route}) => {
  const {r} = route.params;
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
                Student Level: <Text style={styles.span}>{r.level}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Gender: <Text style={styles.span}>{r.sex}</Text>
              </Text>
            </RectButton>

            <RectButton style={styles.disableStudent}>
              <Text style={styles.studentProfileDetails}>
                Disable Staff's portal
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StaffProfile;
