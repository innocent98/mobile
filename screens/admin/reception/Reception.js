import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../Home';

const Reception = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Logo />
      <ScrollView>
        <View style={styles.container}>
          <RectButton
            onPress={() => navigation.navigate('Receptionist',{screen:'AdmissionEnquiry'})}
            style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>Admission Enquiry</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Receptionist',{screen:'VisitorLog'})}>
            <Text style={styles.studentProfileDetails}>Visitor Log</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Receptionist',{screen:'CallLog'})}>
            <Text style={styles.studentProfileDetails}>Call Log</Text>
          </RectButton>
          <RectButton style={styles.studentProfile} onPress={() => navigation.navigate('Receptionist',{screen:'Complaint'})}>
            <Text style={styles.studentProfileDetails}>Complaint</Text>
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reception;
