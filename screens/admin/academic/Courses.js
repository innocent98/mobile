import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../Home';
import {faculties, schoolCourses} from '../../../constants/dummy';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../constants';
import { SavedData } from '../students/EditStudent';

const AddCourse = ({setAdd, setIsAdd}) => {
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const faculty = faculties.map(faculty => {
    return {key: faculty.id, value: faculty.faculty};
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

const Courses = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddCourse setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <Logo />

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ Add New Course</Text>
          </RectButton>
        </View>
        <ScrollView>
          <View style={styles.container}>
            {schoolCourses.map(item => (
              <RectButton style={styles.studentProfile} key={item.id}>
                <Text style={styles.studentProfileDetails}>
                  {item.name} -{' '}
                  <Text style={styles.span}>{item.unit} units</Text>
                </Text>
              </RectButton>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Courses;
