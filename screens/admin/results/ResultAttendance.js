import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {student} from '../../../constants';

const ResultAttendance = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topActions}>
        <View style={styles.subTopAction}>
          <TextInput placeholder="Search Student..." style={styles.staffInput} />
        </View>
        <Text></Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {student.map(item => (
            <RectButton
              style={styles.studentProfile}
              onPress={() => navigation.navigate('ResultAttendance')}
              key={item.id}>
              <Text style={styles.studentProfileDetails}>{item.name}</Text>
              <Text style={styles.span}>{item.code}</Text>
            </RectButton>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultAttendance;
