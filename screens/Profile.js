import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './../constants/styles';

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <Text style={styles.detailsTitle}>My Details</Text>
              <Text style={styles.textTitle}>
                Enrollment ID:{' '}
                <Text style={styles.textSubtitle}>IAEC/ADM/19/10589</Text>
              </Text>
              <Text style={styles.textTitle}>
                Name:{' '}
                <Text style={styles.textSubtitle}>
                  ADEBAYO VICTOR OLUWATOSIN
                </Text>
              </Text>
              <Text style={styles.textTitle}>
                Course:{' '}
                <Text style={styles.textSubtitle}>COMPUTER SCIENCE</Text>
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
                <Text style={styles.textSubtitle}>300 SECOND</Text>
              </Text>
              <Text style={styles.textTitle}>
                Students Email:{' '}
                <Text style={styles.textSubtitle}>
                  tosinadebayo55@gmail.com
                </Text>
              </Text>
              <Text style={styles.textTitle}>
                ID Card:{' '}
                <Icon name="print" size={24} color={COLORS.secondary} />
              </Text>
              <Text style={styles.textTitle}>
                Admission Detail:{' '}
                <Icon name="print" size={24} color={COLORS.secondary} />
              </Text>
              {/* <Text style={styles.detailsTitle}>Certificates</Text> */}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


export default Profile;
