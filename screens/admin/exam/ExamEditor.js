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
import {faculties, options, schoolCourses} from '../../../constants/dummy';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../../../constants';
import {SavedData} from '../students/EditStudent';

const AddExam = ({setAdd, setIsAdd}) => {
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const option = options.map(option => {
    return {key: option.id, value: option.option};
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
        <TextInput
          style={styles.addInput}
          placeholder="Question No"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Question"
          placeholderTextColor="#000"
          multiline
        />
        <TextInput
          style={styles.addInput}
          placeholder="Option A"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Option B"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Option C"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Option D"
          placeholderTextColor="#000"
        />
        <SelectList
          setSelected={val => setSelected(val)}
          data={option}
          save="value"
          placeholder="Enter Correct Option"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          inputStyles={styles.dropdown}
          search={false}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Question</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const ExamEditor = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddExam setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <Logo />

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Exam Question</Text>
          </RectButton>
        </View>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Question No</Text>
                    <Text style={styles.hdd}>Question</Text>
                    <Text style={styles.hd}>Option A</Text>
                    <Text style={styles.hd}>Option B</Text>
                    <Text style={styles.hd}>Option C</Text>
                    <Text style={styles.hd}>Option D</Text>
                    <Text style={styles.hd}>Correct Option</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  <View style={styles.tableBody}>
                    <Text style={styles.hd}>1</Text>
                    <Text style={styles.hdd}>
                      In the movie Fame, a young man is famed as a performer in
                      a Broadway play. He is on the cusp of stardom, but he
                      doesn't seem to have a clue how to get there. He struggles
                      to understand what it means to be a star. In the end, he
                      realizes that he has talent and ambition- but he must use
                      both gifts effectively to reach his goal.
                    </Text>
                    <Text style={styles.hd}>I don't know</Text>
                    <Text style={styles.hd}>Yes</Text>
                    <Text style={styles.hd}>No</Text>
                    <Text style={styles.hd}>Maybe</Text>
                    <Text style={styles.hd}>B</Text>
                    <View style={styles.hd}>
                      <Icon
                        style={styles.enquiryIconBtn}
                        name="delete"
                        size={16}
                        color="red"
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExamEditor;
