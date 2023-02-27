import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StudentImage} from './StudentProfile';

const DocumentInformation = ({route}) => {
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
                National Identification:{' '}
                <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                SSCE Type 1: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                SSCE Type 2: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Birth Certificate: <Text style={styles.span}>{r.name}</Text>
              </Text>
            </RectButton>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                Transcript: <Text style={styles.span}>{r.code}</Text>
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentInformation;
