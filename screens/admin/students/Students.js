import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS, student} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SavedData } from './EditStudent';

const AddStaff = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);

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
        <TextInput
          style={styles.addInput}
          placeholder="Full Name"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Matric"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Course"
          placeholderTextColor="#000"
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Student</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const Students = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState('');
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const data = [
    {key: '1', value: '100l first'},
    {key: '2', value: '100l second'},
    {key: '3', value: '200l first'},
    {key: '4', value: '200l second'},
    {key: '5', value: '300l first'},
    {key: '6', value: '300l second'},
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddStaff setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ Add New Student</Text>
          </RectButton>
          <View style={styles.subTopAction}>
            <TextInput placeholder="Search student..." style={styles.input} />
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              placeholder="Filter"
              boxStyles={styles.input}
              dropdownStyles={styles.dropdown}
              search={false}
            />
          </View>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Student Name</Text>
                    <Text style={styles.hd}>Matric No</Text>
                    <Text style={styles.hd}>Level</Text>
                    <Text style={styles.hd}>Gender</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {student.map((r, index) => (
                    <View style={styles.tableBody} key={index}>
                      <Text style={styles.hd}>{r.name}</Text>
                      <Text style={styles.hd}>{r.code}</Text>
                      <Text style={styles.hd}>{r.level}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <RectButton
                        onPress={() =>
                          navigation.navigate('Student', {screen: 'StudentProfile', params: {r}})
                        }>
                        <Text style={styles.profilebtn}>View Profile</Text>
                      </RectButton>
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

export default Students;
