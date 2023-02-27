import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SavedData} from '../students/EditStudent';
import { courseList, departments, faculties} from '../../../constants/dummy';

const AddCourse = ({setAdd, setIsAdd}) => {
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const faculty = faculties.map(faculty => {
    return {key: faculty.id, value: faculty.faculty};
  });

  const department = departments.map(department => {
    return {key: department.id, value: department.department};
  });

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
          data={faculty}
          save="value"
          placeholder="Select Faculty"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          inputStyles={styles.dropdown}
          search={false}
          maxHeight={Dimensions.get('window').height * 0.4}
        />
        <SelectList
          setSelected={val => setSelected(val)}
          data={department}
          save="value"
          placeholder="Select Department"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          inputStyles={styles.dropdown}
          search={false}
          maxHeight={Dimensions.get('window').height * 0.4}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Course Title"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Course Code"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Course Unit"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Lecturer In Charge"
          placeholderTextColor="#000"
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Course</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const CurriculumDetails = ({route}) => {
  const {item, lev} = route.params;
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddCourse setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Course</Text>
          </RectButton>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <Text style={styles.editLabel}>
                  {item.department} {lev.level}
                  </Text>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>COURSE CODE</Text>
                    <Text style={styles.hd}>COURSE TITLE</Text>
                    <Text style={styles.hd}>COURSE UNIT</Text>
                    <Text style={styles.hd}>LECT-IN-CHARGE</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {courseList.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.code}</Text>
                      <Text style={styles.hd}>Nil</Text>
                      <Text style={styles.hd}>3</Text>
                      <Text style={styles.hd}>Mr Jonathan</Text>
                      <Text
                        style={styles.profilebtn}
                        onPress={() =>
                          navigation.navigate('Academics', {
                            screen: 'EditCourses',
                            params: {r},
                          })
                        }>
                        Edit Course
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

export default CurriculumDetails;
