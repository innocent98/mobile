import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS, student} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SavedData} from '../students/EditStudent';
import {calendar} from '../../../constants/dummy';

const AddCalendar = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const data = [
    {key: '1', value: 'Fall Semester'},
    {key: '2', value: 'Spring Semester'},
    {key: '3', value: 'Summer Semester'},
  ];

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsAdd(true);
      setIsLoading(false);
      setAdd(false);
      timeout = setTimeout(() => {
        setIsAdd(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <AnimatePresence>
      <MotiView
        from={{bottom: -50, opacity: 0.5}}
        animate={{bottom: 0, opacity: 1}}
        exit={{bottom: 0, opacity: 0.5}}
        transition={{
          type: 'timing',
          duration: 500,
          easing: Easing.out(Easing.ease),
        }}
        style={styles.addContainer}>
        <Icon
          name="close"
          size={22}
          color="#000"
          style={styles.closeIcon}
          onPress={() => setAdd(false)}
        />
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          placeholder="Semester"
          inputStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          search={false}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Date"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Event"
          placeholderTextColor="#000"
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Calendar</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const Calendar = () => {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddCalendar setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Calendar</Text>
          </RectButton>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                <Text style={styles.editLabel}>2022-2023 Academic Calendar</Text>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>DATE</Text>
                    <Text style={styles.hd}>Fall Semester</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {calendar.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.date}</Text>
                      <Text style={styles.hd}>{r.title}</Text>
                      <Text
                        style={styles.profilebtn}
                        onPress={() =>
                          navigation.navigate('Academics', {
                            screen: 'EditCalendar',
                            params: {r},
                          })
                        }>
                        Edit Calendar
                      </Text>
                    </View>
                  ))}

                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>DATE</Text>
                    <Text style={styles.hd}>Spring Semester</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {calendar.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.date}</Text>
                      <Text style={styles.hd}>{r.title}</Text>
                      <Text
                        style={styles.profilebtn}
                        onPress={() =>
                          navigation.navigate('Student', {
                            screen: 'StudentProfile',
                            params: {r},
                          })
                        }>
                        Edit Calendar
                      </Text>
                    </View>
                  ))}

                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>DATE</Text>
                    <Text style={styles.hd}>Summer Semester</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {calendar.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.date}</Text>
                      <Text style={styles.hd}>{r.title}</Text>
                      <Text
                        style={styles.profilebtn}
                        onPress={() =>
                          navigation.navigate('Student', {
                            screen: 'StudentProfile',
                            params: {r},
                          })
                        }>
                        Edit Calendar
                      </Text>
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

export default Calendar;
