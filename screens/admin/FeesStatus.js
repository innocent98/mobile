import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {student} from '../../constants';

const FeesStatus = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topActions}>
        <View style={styles.subTopAction}>
          <TextInput placeholder="Search student with matric no..." style={styles.staffInput} />
        </View>
        <Text></Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {student.map(item => (
            <RectButton style={styles.studentProfile} key={item.id}>
              <Text style={styles.studentProfileDetails}>{item.name}</Text>
              <View style={styles.row}>
                <Text style={styles.span}>{item.code}</Text>
                <Text style={styles.span}>paid: #20000 of #20000</Text>
              </View>
            </RectButton>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeesStatus;
