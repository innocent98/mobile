import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {COLORS, fees, SHADOWS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import {useNavigation} from '@react-navigation/native';
import {styles} from './../constants/styles';
import {RectButton} from 'react-native-gesture-handler';

export const table = ({data}) => {
  return (
    <View style={styles.tableBody}>
      <Text style={styles.hd}>{data.invoice}</Text>
      <Text style={styles.hd}>{data.type}</Text>
      <Text style={styles.hd}>{data.amount}</Text>
      <Text style={styles.hd}>{data.acY}</Text>
      <Text style={styles.hd}>{data.status}</Text>
      <Text
        style={styles.hd}
        onPress={() =>
          navigation.navigate('Fees', {screen: 'FeesDetails', params: {data}})
        }>
        <Icon name="info" size={24} />
      </Text>
    </View>
  );
};

export const MyFeesList = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.tableBody}>
      <Text style={styles.hd}>{data.invoice}</Text>
      <Text style={styles.hd}>{data.type}</Text>
      <Text style={styles.hd}>{data.amount}</Text>
      <Text style={styles.hd}>{data.acY}</Text>
      <Text style={styles.hd}>{data.status}</Text>
      <Text
        style={styles.hd}
        onPress={() =>
          navigation.navigate('Fees', {screen: 'FeesDetails', params: {data}})
        }>
        <Icon name="info" size={24} />
      </Text>
    </View>
  );
};

const MyFees = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />

        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <Text style={styles.courseTitle}>My Fees</Text>
            <View style={styles.feesButton}>
              <RectButton style={styles.feesButtonLeft}>
                <Text
                  style={styles.buttonText}
                  onPress={() =>
                    navigation.navigate('Fees', {screen: 'PaymentInfo'})
                  }>
                  PAYMENT INFO
                </Text>
              </RectButton>
              <RectButton style={styles.feesButtonRight}>
                <Text style={styles.buttonText}>MAKE PAYMENT</Text>
              </RectButton>
            </View>

            {/* table */}
            <ScrollView
              horizontal
              style={{borderWidth: 1, marginTop: 20, borderColor: '#c8e1ff'}}>
              <FlatList
                data={fees}
                renderItem={({item}) => <MyFeesList data={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                  return (
                    <View style={styles.tableHead}>
                      <Text style={styles.hd}>Invoice No</Text>
                      <Text style={styles.hd}>Type</Text>
                      <Text style={styles.hd}>Amount</Text>
                      <Text style={styles.hd}>Academic year</Text>
                      <Text style={styles.hd}>Status</Text>
                      <Text style={styles.hd}>Action</Text>
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {alignItems: 'center', justifyContent: 'center'},
//   courseContainer: {
//     backgroundColor: COLORS.background,
//     width: '90%',
//     borderRadius: SIZES.font,
//     padding: 10,
//     marginTop: 20,
//     ...SHADOWS.dark,
//   },
//   courseTitle: {
//     fontSize: 18,
//     color: '#000',
//     fontFamily: 'RobotoSlab-SemiBold',
//     marginBottom: 20,
//   },
//   feesButton: {flexDirection: 'row'},
//   feesButtonLeft: {
//     backgroundColor: COLORS.secondary,
//     padding: 10,
//     paddingHorizontal: 20,
//     marginRight: 10,
//   },
//   feesButtonRight: {
//     backgroundColor: COLORS.primary,
//     padding: 10,
//     paddingHorizontal: 20,
//   },
//   buttonText: {
//     color: COLORS.white,
//     fontFamily: 'RobotoSlab-Regular',
//   },
//   tableHead: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f8ff',
//   },
//   tableBody: {
//     flexDirection: 'row',
//     // justifyContent: 'center',
//   },
//   hd: {
//     color: '#000',
//     textAlign: 'center',
//     fontFamily: 'RobotoSlab-Regular',
//     padding: 14,
//     borderWidth: 1,
//     borderColor: '#c8e1ff',
//     width: 120,
//     fontSize: 12
//   },
// });

export default MyFees;
