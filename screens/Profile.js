import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {COLORS, SHADOWS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={{width: '90%'}}>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>My Details</Text>
            <Text style={styles.textTitle}>
              Enrollment ID:{' '}
              <Text style={styles.textSubtitle}>IAEC/ADM/19/10589</Text>
            </Text>
            <Text style={styles.textTitle}>
              Name:{' '}
              <Text style={styles.textSubtitle}>ADEBAYO VICTOR OLUWATOSIN</Text>
            </Text>
            <Text style={styles.textTitle}>
              Course: <Text style={styles.textSubtitle}>COMPUTER SCIENCE</Text>
            </Text>
            <Text style={styles.textTitle}>
              Batch:{' '}
              <Text style={styles.textSubtitle}>
                400 LEVEL ( SUMMER 2021/2022 )
              </Text>
            </Text>
            <Text style={styles.textTitle}>
              Batch Status:{' '}
              <Text style={styles.textSubtitle}>Current Batch</Text>
            </Text>
            <Text style={styles.textTitle}>
              Students Level:{' '}
              <Text style={styles.textSubtitle}>400 SECOND</Text>
            </Text>
            <Text style={styles.textTitle}>
              Students Email:{' '}
              <Text style={styles.textSubtitle}>tosinadebayo55@gmail.com</Text>
            </Text>
            <Text style={styles.textTitle}>
              ID Card: <Icon name="print" size={24} color={COLORS.secondary} />
            </Text>
            <Text style={styles.textTitle}>
              Admission Detail:{' '}
              <Icon name="print" size={24} color={COLORS.secondary} />
            </Text>
            <Text style={styles.detailsTitle}>Certificates</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  detailsContainer: {
    flexDirection: 'column',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.background,
    borderRadius: SIZES.font,
    marginTop: 20,
    padding: 15,
    paddingBottom: 30,
    ...SHADOWS.dark
  },
  detailsTitle: {
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    textAlign: 'center',
    padding: 10,
    width: '100%',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: SIZES.large,
    marginTop: 20,
  },
  textTitle: {
    color: '#000',
    fontFamily: 'RobotoSlab-Bold',
    marginTop: 20,
    fontSize: SIZES.medium,
  },
  textSubtitle: {color: '#000', fontFamily: 'RobotoSlab-Regular'},
});

export default Profile;
