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
import {RectButton} from 'react-native-gesture-handler';
import {COLORS, results} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {courseList} from '../../../constants/dummy';

const AddStaff = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  const data = courseList.map(item => {
    return {key: item.id, value: item.code};
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
          placeholder="Semester/Session"
          placeholderTextColor="#000"
        />
        {/* <MultipleSelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          placeholder="Select Exams to be registered"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          search={false}
          dropdownTextStyles={{color: '#000'}}
          inputStyles={{color: '#000'}}
        /> */}
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Record</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const Results = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddStaff setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        <Text></Text>
        {isAdd && (
          <MotiView
            from={{top: -50, opacity: 0.5}}
            animate={{top: 0, opacity: 1}}
            transition={{
              type: 'timing',
              duration: 500,
              easing: Easing.out(Easing.ease),
            }}
            style={styles.createdContainer}>
            <Text style={styles.createdText}>New Record Created!</Text>
          </MotiView>
        )}

        <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
          <Text style={styles.buttonText}>+ Create New Record</Text>
        </RectButton>

        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>S/N</Text>
                    <Text style={styles.hd}>Semester/Session</Text>
                    <Text style={styles.hd}>Students</Text>
                  </View>
                  {results.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.id}</Text>
                      <Text style={styles.hd}>{r.type}</Text>
                      <Text
                        style={styles.profilebtn}
                        onPress={() =>
                          navigation.navigate('ExamAndRecord', {screen: 'ResultDetails', params: {r}})
                        }>
                        {r.student}
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

export default Results;
