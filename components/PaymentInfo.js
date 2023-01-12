import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

const PaymentInfo = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Payment Infomation</Text>
          <Text style={styles.description}>
            Payments can be made in school or transferred to our designated
            accounts below
          </Text>
          <Text style={styles.type} selectable>
            CFA ACCOUNT AND PAYMENT:
          </Text>
          <Text style={styles.details}>
            BANK NAME: <Text style={styles.subDetails}>CORIS BANK</Text>
          </Text>
          <Text style={styles.details} selectable>
            BRANCH:{' '}
            <Text style={styles.subDetails}>
              {' '}
              HEDRANAWOE (School's building)
            </Text>
          </Text>
          <Text style={styles.details} selectable>
            ACCOUNT NAME: <Text style={styles.subDetails}>IAEC</Text>
          </Text>
          <Text style={styles.details} selectable>
            ACCOUNT NUMBER: <Text style={styles.subDetails}>004649324101</Text>
          </Text>

          <Text style={styles.type} selectable>
            NAIRA ACCOUNT AND PAYMENT:
          </Text>
          <Text style={styles.details}>
            BANK NAME:{' '}
            <Text style={styles.subDetails}>ZENITH BANK NIGERIA</Text>
          </Text>
          <Text style={styles.details} selectable>
            ACCOUNT NAME: <Text style={styles.subDetails}>IAEC UNIVERS</Text>
          </Text>
          <Text style={styles.details} selectable>
            ACCOUNT NUMBER: <Text style={styles.subDetails}>1218699004</Text>
          </Text>
          <View style={styles.break}></View>
          <Text style={styles.details}>
            BANK NAME:{' '}
            <Text style={styles.subDetails}>ACCESS BANK NIGERIA</Text>
          </Text>
          <Text style={styles.details} selectable>
            ACCOUNT NAME: <Text style={styles.subDetails}>IAEC UNIVERS</Text>
          </Text>
          <Text style={styles.details} selectable>
            ACCOUNT NUMBER: <Text style={styles.subDetails}>0817621889</Text>
          </Text>

          <Text style={styles.notice}>NOTICE:</Text>
          <Text style={styles.noticeText}>
            Other fees, Tuition fees in CFA, Hostel fees, Carry-over fees,
            Malpratice fees, Industrial Training fees should be paid to the
            above CFA account.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  title: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    paddingVertical: 20,
  },
  description: {
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.extraLarge,
    marginTop: 20,
  },
  type: {
    color: COLORS.gray,
    fontFamily: 'RobotoSlab-Medium',
    marginBottom: 10,
    marginTop: 30,
  },
  details: {color: '#000', fontFamily: 'RobotoSlab-Regular', marginVertical: 3},
  subDetails: {fontFamily: 'RobotoSlab-Medium'},
  notice: {color: '#000', marginTop:15, fontFamily:'RobotoSlab-Medium'},
  noticeText: {color: COLORS.gray, fontFamily:'RobotoSlab-Regular',},
  break:{marginVertical:10}
});

export default PaymentInfo;
