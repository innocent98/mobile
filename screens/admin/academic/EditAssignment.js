import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import DatePicker from 'react-native-date-picker';
import {SavedData} from '../students/EditStudent';

const EditAssignment = () => {
  const navigation = useNavigation();

  const [assigned, setAssigned] = useState(new Date());
  const [submission, setSubmission] = useState(new Date());
  const [openAssigned, setOpenAssigned] = useState(false);
  const [openSubmission, setOpenSubmission] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsEdit(true);
      setIsLoading(false);
      timeout = setTimeout(() => {
        setIsEdit(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isEdit && <SavedData />}

      <ScrollView style={styles.ScrollView}>
        <View style={styles.editContainer}>
          <ScrollView>
            <MotiView
              from={{right: -150, opacity: 0.5}}
              animate={{right: 0, opacity: 1}}
              transition={{
                type: 'timing',
                duration: 1000,
                easing: Easing.out(Easing.ease),
              }}
              style={styles.editView}>
              <View>
                <Text style={styles.editLabel}>Edit Assignment</Text>
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
              </View>

              <View style={styles.flexBtn}>
                {isLoading ? (
                  <RectButton style={styles.indicator}>
                    <ActivityIndicator size="large" color={COLORS.secondary} />
                  </RectButton>
                ) : (
                  <RectButton onPress={handleAdd} style={styles.editButton}>
                    <Text style={styles.buttonText}>Save</Text>
                  </RectButton>
                )}
                <RectButton
                  onPress={() => navigation.goBack()}
                  style={styles.editButtonE}>
                  <Text style={styles.buttonText}>Exit</Text>
                </RectButton>
              </View>
            </MotiView>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAssignment;
