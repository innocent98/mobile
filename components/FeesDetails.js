import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, list, SHADOWS, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Logo} from '../screens/Home';

export const DetailLists = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.tableBody}>
      <Text style={styles.hd}>
        <Icon name="print" size={24} color={COLORS.primary} />
      </Text>
      <Text style={styles.hd}>{data.amount}</Text>
    </View>
  );
};

const FeesDetails = ({route}) => {
  const {data} = route.params;
  //   console.log(data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.detailsContainer}>
          <FlatList
            data={list}
            renderItem={({item}) => <DetailLists data={item} />}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            ListHeaderComponent={() => {
              return (
                <View style={styles.tableHead}>
                  <Text style={styles.hd}>#</Text>
                  <Text style={styles.hd}>Amount</Text>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return (
                <View style={styles.footerContainer}>
                  <Text style={styles.detailText}>
                    Fee type: <Text style={styles.subDetails}>{data.type}</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    Fee amount:{' '}
                    <Text style={styles.subDetails}>{data.amount}</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    Balance to pay:{' '}
                    <Text style={styles.subDetails}>{data.amount}</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    Academic year:{' '}
                    <Text style={styles.subDetails}>{data.acY}</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    Student matric No:{' '}
                    <Text style={styles.subDetails}>0058CSC2122</Text>
                  </Text>
                  <Text style={styles.detailText}>
                    Payment status:{' '}
                    <Text
                      style={
                        data.status === 'CLEARED'
                          ? styles.cleared
                          : styles.notCleared
                      }>
                      {data.status}
                    </Text>
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    paddingBottom: 30,
  },
  detailsContainer: {
    backgroundColor: COLORS.background,
    width: '90%',
    borderRadius: SIZES.font,
    padding: 10,
    marginTop: 20,
    ...SHADOWS.dark,
    // maxHeight: '80%',
  },
  tableHead: {
    flexDirection: 'row',
    backgroundColor: '#f1f8ff',
  },
  tableBody: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  hd: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Medium',
    padding: 20,
    borderWidth: 1,
    borderColor: '#c8e1ff',
    width: 150,
  },
  footerContainer: {marginTop: 20},
  detailText: {
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 18,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 15,
  },
  subDetails: {fontFamily: 'RobotoSlab-Regular', fontSize: 14},
  cleared: {
    fontFamily: 'RobotoSlab-Regular',
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    fontSize: 14,
  },
  notCleared: {
    fontFamily: 'RobotoSlab-Regular',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    fontSize: 14,
  },
});

export default FeesDetails;
