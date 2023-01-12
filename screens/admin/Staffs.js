import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './../../constants/styles';
import {student} from '../../constants';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StudentImage} from './students/StudentProfile';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';

const AddStaff = ({setAdd}) => {
  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: 'Admin'},
    {key: '2', value: 'Lecturer'},
    {key: '3', value: 'Bursar'},
    {key: '4', value: 'Admission Officer'},
    {key: '5', value: 'Other Staff'},
  ];

  return (
    <AnimatePresence>
      <MotiView
        from={{bottom: 0, opacity: 0.5}}
        animate={{bottom: 50, opacity: 1}}
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
          placeholder="Course"
          placeholderTextColor="#000"
        />
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          placeholder="Select Role"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          search={false}
          dropdownTextStyles={{color: '#000'}}
          inputStyles={{color: '#000'}}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Course"
          placeholderTextColor="#000"
        />
        <RectButton style={styles.addButton}>
          <Text style={styles.buttonText}>Add Staff</Text>
        </RectButton>
      </MotiView>
    </AnimatePresence>
  );
};

const Staffs = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ Add New Staff</Text>
          </RectButton>
          <View style={styles.subTopAction}>
            <TextInput
              placeholder="Search staff..."
              style={styles.staffInput}
            />
          </View>
        </View>

        {add && <AddStaff setAdd={setAdd} />}

        {/* table */}
        <ScrollView>
          <View style={styles.staffView}>
            {student.map(r => (
              <RectButton style={styles.staffs} key={r.id}>
                <StudentImage url="https://iss.lk/wp-content/uploads/2021/03/student.jpg" />
                <Text style={styles.studentProfileDetails}>{r.name}</Text>
                <Text style={styles.studentProfileDetailsRole}>{r.code}</Text>
                <RectButton
                  style={styles.staffProfilebtnContainer}
                  onPress={() => navigation.navigate('StaffProfileNavigator', {screen:'StaffProfile', params: {r}})}>
                  <Text style={styles.staffProfilebtn}>View Profile</Text>
                </RectButton>
              </RectButton>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Staffs;
