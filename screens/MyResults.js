import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, SHADOWS, SIZES} from '../constants';
import {SelectList} from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';

const MyResults = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    {
      key: '1',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
    {
      key: '2',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
    {
      key: '3',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
    {
      key: '4',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
    {
      key: '5',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
    {
      key: '6',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
    {
      key: '7',
      value:
        'Summer 2021/2022 SESSION (COMPUTER SCIENCE 400LEVEL FIRST SEMESTER)',
    },
  ];

  const tableHead = ['Subject', 'Maximum Marks', 'Marks Obtained'];
  const tableData = [
    ['SOFTWARE DEVELOPMENT', '100', '95'],
    ['RESEARCH PROJECT', '100', '95'],
    ['SYSTEM ADMINISTRATION & COMPUTER', '100', '95'],
    ['COMPUTER GRAPHICS', '100', '95'],
    ['COMPUTER HARDWARE', '100', '95'],
    ['Total', '100', '650'],
    ['', 'Percentage', '98%'],
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={{width: '90%'}}>
          <View style={styles.resultContainer}>
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
                  style={styles.logo}
                  source={{
                    uri: 'https://iaec-university.tg/wp-content/uploads/2020/01/iaec-university-logo.png',
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.text}>IAEC UNIVERSITY TOGO</Text>
                  <Text style={styles.text}>
                    Bd de la Kara, Behind Senegal Embassy, Tokoin-Doumassesse
                    11, P.O. Box 8619 Lomé-Togo
                  </Text>
                  <Text style={styles.text}>
                    Phone - +22897655211, +22897738728 | Email -
                    info@iaec-university.tg
                  </Text>
                </View>
              </View>
              {/* result details */}
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>
                  Exam:{' '}
                  <Text style={styles.span}>
                    SUMMER 2021/2022 SESSION ( COMPUTER SCIENCE 400LEVEL FIRST
                    SEMESTER NV2122 )
                  </Text>
                </Text>
              </View>

              <Text style={styles.span}>Student Details:</Text>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>
                  Enrollment ID:{' '}
                  <Text style={styles.span}>IAEC/ADM/19/10589</Text>
                </Text>
                <Text style={styles.detailsText}>
                  Name:{' '}
                  <Text style={styles.span}>ADEBAYO VICTOR OLUWATOSIN</Text>
                </Text>
              </View>

              <Text style={styles.span}>Exam Marks:</Text>
              <View style={styles.detailsContainer}>
                {/* table */}
                <ScrollView horizontal={true}>
                  <Table
                    borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}
                    style={styles.table}>
                    <Row
                      data={tableHead}
                      style={styles.head}
                      textStyle={{
                        color: '#000',
                        textAlign: 'center',
                        width: 120,
                      }}
                    />
                    <Rows
                      data={tableData}
                      textStyle={{
                        color: '#000',
                        textAlign: 'center',
                        width: 120,
                      }}
                      style={styles.body}
                    />
                  </Table>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', height: '100%'},
  resultContainer: {
    width: '100%',
    backgroundColor: COLORS.background,
    borderRadius: SIZES.font,
    padding: 10,
    marginTop: 20,
    ...SHADOWS.dark,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: 'RobotoSlab-Medium',
    color: '#000',
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
  resultHead: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    color: COLORS.white,
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.medium,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  logo: {width: 100, height: 70, flex: 1},
  textContainer: {flex: 2, marginLeft: 20},
  text: {color: '#000', fontFamily: 'RobotoSlab-Medium', fontSize: SIZES.base},
  detailsContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 4,
    padding: 7,
    marginBottom: 10,
  },
  detailsText: {
    color: '#000',
    fontFamily: 'RobotoSlab-Light',
    fontSize: SIZES.font,
  },
  span: {
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
  },
  table: {marginTop: 0},
  head: {height: 40, backgroundColor: '#f1f8ff', textAlign: 'center'},
  body: {
    height: 60,
    textAlign: 'center',
  },
});

export default MyResults;
