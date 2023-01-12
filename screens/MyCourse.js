import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {COLORS, SHADOWS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import {courses} from '../constants';

const MyCourse = () => {
  const tableHead = ['Course title', 'Course code', 'Units'];
  const tableData = [
    // courses.map(course => (
    //   [{
    //     id: course.id,
    //     title: course.title,
    //     code: course.code,
    //     unit: course.unit,
    //   }]
    // )),

    ['SOFTWARE DEVELOPMENT', 'CSC 421', '3'],
    ['RESEARCH PROJECT', 'CSC 423', '6'],
    ['SYSTEM ADMINISTRATION & COMPUTER', 'MIS 422', '3'],
    ['COMPUTER GRAPHICS', 'CSC 424', '3'],
    ['COMPUTER HARDWARE', 'CET 427', '3'],
  ];



  const rows = courses.slice().map(user => ({
    id: user.id,
    title: user.title,
    code: user.code,
    unit: user.unit,
  }));

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.courseContainer}>
          <Text style={styles.courseTitle}>My Course List</Text>
          <View style={styles.button}>
            <TouchableHighlight style={styles.buttonLeft}>
              <Text style={styles.buttonText}>PRINT COURSE SHEET</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonRight}>
              <Text>
                <Icon name="file-download" size={24} color={COLORS.white} />
              </Text>
            </TouchableHighlight>
          </View>

          {/* table */}
          <Table
            borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}
            style={styles.table}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={{color: '#000', textAlign: 'center'}}
            />
            <Rows
              data={tableData}
              textStyle={{color: '#000', textAlign: 'center'}}
              style={styles.body}
            />
          </Table>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  courseContainer: {
    backgroundColor: COLORS.background,
    width: '90%',
    borderRadius: SIZES.font,
    padding: 10,
    marginTop: 20,
    ...SHADOWS.dark
  },
  courseTitle: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'RobotoSlab-Bold',
    marginBottom: 20,
  },
  button: {flexDirection: 'row'},
  buttonLeft: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  buttonRight: {
    backgroundColor: COLORS.primary,
    padding: 10,
    paddingHorizontal: 20,
  },
  table: {marginTop: 10},
  head: {height: 40, backgroundColor: '#f1f8ff', textAlign: 'center'},
  body: {
    height: 60,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: 'RobotoSlab-Regular',
  },
});

export default MyCourse;
