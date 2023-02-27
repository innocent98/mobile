import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {courses} from '../constants';
import {RectButton} from 'react-native-gesture-handler';
import {styles} from './../constants/styles';

const MyCourse = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <Text style={styles.courseTitle}>My Course List</Text>
            <View style={styles.courseButton}>
              <RectButton style={styles.courseButtonLeft}>
                <Text style={styles.courseButtonText}>PRINT COURSE SHEET</Text>
              </RectButton>
              <RectButton style={styles.courseButtonRight}>
                <Text>
                  <Icon name="file-download" size={24} color={COLORS.white} />
                </Text>
              </RectButton>
            </View>

            {/* table */}
            <View style={styles.subContainer}>
              <ScrollView>
                <ScrollView horizontal={true}>
                  <View style={styles.table}>
                    <View style={styles.tableHead}>
                      <Text style={styles.hdd}>Course Title</Text>
                      <Text style={styles.hd}>Course Code</Text>
                      <Text style={styles.hd}>Units</Text>
                      <Text style={styles.hd}>Action</Text>
                    </View>
                    {courses.map(course => (
                      <View style={styles.tableBody} key={course.id}>
                        <Text style={styles.hdd}>{course.title}</Text>
                        <Text style={styles.hd}>{course.code}</Text>
                        <Text style={styles.hd}>{course.unit}</Text>
                        <Text style={styles.hd}>Action</Text>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyCourse;
