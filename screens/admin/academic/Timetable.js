import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {days} from '../../../constants/dummy';
import {Logo} from '../../Home';
import { SavedData } from '../students/EditStudent';

const Timetable = () => {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isAdd && <SavedData />}
        <Logo />

        <View style={styles.topActions}>
          <RectButton
            onPress={() => navigation.navigate('TimetableOption')}
            style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Timetable</Text>
          </RectButton>
        </View>

        {/* table */}
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Days/Time</Text>
                    <Text style={styles.hdd}>8:00 - 10:00</Text>
                    <Text style={styles.hdd}>10:00 - 12:00</Text>
                    <Text style={styles.hdd}>12:00 - 14:00</Text>
                    <Text style={styles.hdd}>14:00 - 16:00</Text>
                    <Text style={styles.hdd}>16:00 - 18:00</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {days.map(day => (
                    <View style={styles.tableBody} key={day.id}>
                      <Text style={styles.hd}>{day.day}</Text>
                      <Text style={styles.hdd}></Text>
                      <Text style={styles.hdd}></Text>
                      <Text style={styles.hdd}></Text>
                      <Text style={styles.hdd}></Text>
                      <Text style={styles.hdd}></Text>
                      <View style={styles.hdb}>
                        <Icon
                          style={styles.enquiryIconBtn}
                          name="edit"
                          size={16}
                          color="#009EFB"
                          onPress={() => navigation.navigate('TimetableOption')}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Timetable;
