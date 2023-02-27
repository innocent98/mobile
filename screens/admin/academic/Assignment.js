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
import {COLORS} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import { SavedData } from '../students/EditStudent';

const AddAssignment = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [assigned, setAssigned] = useState(new Date());
  const [submission, setSubmission] = useState(new Date());
  const [openAssigned, setOpenAssigned] = useState(false);
  const [openSubmission, setOpenSubmission] = useState(false);

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
          placeholder="Course Code"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Assignment"
          placeholderTextColor="#000"
          multiline
        />
        <Text style={styles.editLabel}>Assigned Date</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Assigned Date"
          placeholderTextColor="#000"
          onPressIn={() => setOpenAssigned(true)}
          value={assigned.toLocaleDateString()}
        />
        <DatePicker
          modal
          mode="date"
          open={openAssigned}
          date={assigned}
          onConfirm={assigned => {
            setOpenAssigned(false);
            setAssigned(assigned);
          }}
          onCancel={() => {
            setOpenAssigned(false);
          }}
        />
        <Text style={styles.editLabel}>Submission Date</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Submission Date"
          placeholderTextColor="#000"
          onPressIn={() => setOpenSubmission(true)}
          value={submission.toLocaleDateString()}
        />
        <DatePicker
          modal
          mode="date"
          open={openSubmission}
          date={submission}
          onConfirm={submission => {
            setOpenSubmission(false);
            setSubmission(submission);
          }}
          onCancel={() => {
            setOpenSubmission(false);
          }}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Lecturer"
          placeholderTextColor="#000"
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Assignment</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const Assignment = () => {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddAssignment setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Assignment</Text>
          </RectButton>
        </View>

        {/* table */}
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Course Code</Text>
                    <Text style={styles.hdd}>Assignment</Text>
                    <Text style={styles.hd}>Assigned Date</Text>
                    <Text style={styles.hd}>Submission Date</Text>
                    <Text style={styles.hd}>Lecturer</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  <View style={styles.tableBody}>
                    <Text style={styles.hd}>CET 322</Text>
                    <Text style={styles.hdd}>
                      In the movie Fame, a young man is famed as a performer in
                      a Broadway play. He is on the cusp of stardom, but he
                      doesn't seem to have a clue how to get there. He struggles
                      to understand what it means to be a star. In the end, he
                      realizes that he has talent and ambition- but he must use
                      both gifts effectively to reach his goal.
                    </Text>
                    <Text style={styles.hd}>10-01-2023</Text>
                    <Text style={styles.hd}>15-01-2023</Text>
                    <Text style={styles.hd}>Mr Jonathan</Text>
                    <View style={styles.hdb}>
                      <Icon
                        style={styles.enquiryIconBtn}
                        name="edit"
                        size={16}
                        color="#009EFB"
                        onPress={() => navigation.navigate('EditAssignment')}
                      />
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

export default Assignment;
