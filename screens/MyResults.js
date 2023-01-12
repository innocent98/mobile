import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, SHADOWS, SIZES, result} from '../constants';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {styles} from './../constants/styles';

const MyResults = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    {
      key: '1',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 100LEVEL FIRST SEMESTER)',
    },
    {
      key: '2',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 100LEVEL SECOND SEMESTER)',
    },
    {
      key: '3',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 200LEVEL FIRST SEMESTER)',
    },
    {
      key: '4',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 200LEVEL SECOND SEMESTER)',
    },
    {
      key: '5',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 300LEVEL FIRST SEMESTER)',
    },
    {
      key: '6',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 300LEVEL SECOND SEMESTER)',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.subContainer}>
          <ScrollView>
            <Text style={styles.title}>Score Board</Text>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              inputStyles={{color: '#000'}}
              dropdownTextStyles={{color: '#000'}}
              fontFamily="RobotoSlab-Regular"
            />
            <View>
              <View style={styles.resultHead}>
                <Text style={styles.headText}>Exam Result </Text>
                <Icon name="file-download" size={20} color={COLORS.white} />
              </View>
              {/* address */}
              <View style={styles.address}>
                <FastImage
                  style={styles.resultLogo}
                  source={{
                    uri: 'https://esgt-benin.com/images/logo.png',
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.resultTextContainer}>
                  <Text style={styles.resultText}>ESGT-BENIN UNIVERSITY</Text>
                  <Text style={styles.resultText}>
                    VEDOKO TOYOTA CARREFOUR, COTONOU BENIN
                  </Text>
                  <Text style={styles.resultText}>
                    Phone - +22961483075, 96559194 | Email - esgtbenin@gmail.com
                  </Text>
                </View>
              </View>
              {/* result details */}
              <View style={styles.resultDetailsContainer}>
                <Text style={styles.resultDetailsText}>
                  Exam:{' '}
                  <Text style={styles.resultSpan}>
                    FIRST 2021/2022 SESSION ( COMPUTER SCIENCE 300LEVEL FIRST
                    SEMESTER )
                  </Text>
                </Text>
              </View>

              <Text style={styles.resultSpan}>Student Details:</Text>
              <View style={styles.resultDetailsContainer}>
                <Text style={styles.resultDetailsText}>
                  Enrollment ID:{' '}
                  <Text style={styles.resultSpan}>ESGT/19/CSC/00047/BSC</Text>
                </Text>
                <Text style={styles.resultDetailsText}>
                  Name:{' '}
                  <Text style={styles.resultSpan}>
                    ADEBAYO VICTOR OLUWATOSIN
                  </Text>
                </Text>
              </View>

              <Text style={styles.span}>Exam Marks:</Text>
              <View style={styles.resultDetailsContainer}>
                {/* table */}
                <ScrollView horizontal={true}>
                  <View style={styles.table}>
                    <View style={styles.tableHead}>
                      <Text style={styles.hd}>Course code (unit)</Text>
                      <Text style={styles.hd}>Score</Text>
                      <Text style={styles.hd}>Grade (credit)</Text>
                      <Text style={styles.hd}>GP</Text>
                    </View>
                    {result.map(r => (
                      <View key={r.id}>
                        {!r.sub && (
                          <View style={styles.tableBody}>
                            <Text style={styles.hd}>{r.code}</Text>
                            <Text style={styles.hd}>{r.score}</Text>
                            <Text style={styles.hd}>{r.grade}</Text>
                            <Text style={styles.hd}>{r.gp}</Text>
                          </View>
                        )}
                        {r.sub && (
                          <View style={styles.tableBody}>
                            <Text style={styles.hd}>{r.sub}</Text>
                            <Text style={styles.hd}>{r.total}</Text>
                          </View>
                        )}
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {alignItems: 'center', justifyContent: 'center', height: '96%'},
//   title: {
//     fontSize: SIZES.large,
//     fontFamily: 'RobotoSlab-Medium',
//     color: '#000',
//     textAlign: 'center',
//     marginBottom: SIZES.medium,
//   },
//   scrollV: {
//     width: '90%',
//     backgroundColor: COLORS.background,
//     borderRadius: SIZES.font,
//   },
//   resultContainer: {
//     width: '100%',
//     padding: 10,
//     marginTop: 20,
//   },

//   resultHead: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.secondary,
//     marginTop: 15,
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headText: {
//     color: COLORS.white,
//     fontFamily: 'RobotoSlab-Medium',
//     fontSize: SIZES.medium,
//   },
//   address: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     marginTop: 10,
//   },
//   logo: {width: 100, height: 70, flex: 1},
//   textContainer: {flex: 2, marginLeft: 20},
//   text: {color: '#000', fontFamily: 'RobotoSlab-Medium', fontSize: SIZES.base},
//   resultDetailsContainer: {
//     borderWidth: 1,
//     borderColor: COLORS.gray,
//     borderRadius: 4,
//     padding: 7,
//     marginBottom: 10,
//     marginTop: 10,
//   },
//   resultDetailsText: {
//     color: '#000',
//     fontFamily: 'RobotoSlab-Light',
//     fontSize: SIZES.font,
//   },
//   resultSpan: {
//     color: '#000',
//     fontFamily: 'RobotoSlab-Medium',
//   },
//   table: {
//     flexDirection: 'column',
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
//     fontSize: 12,
//   },
// });

export default MyResults;
