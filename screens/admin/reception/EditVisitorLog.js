import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {SavedData} from '../students/EditStudent';

const EditVisitorLog = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState(new Date());
  const [exist, setExist] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);
  const [openExit, setOpenExit] = useState(false);
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
                <Text style={styles.editLabel}>Visitor Information</Text>
                <TextInput
                  style={styles.editInput}
                  label="Visiting Purpose"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Contact Number"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.editInput}
                  label="Visitor Details"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Date of Visit"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  onPressIn={() => setOpen(true)}
                  value={date.toLocaleDateString()}
                />
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
                <TextInput
                  style={styles.editInput}
                  label="Entry Time"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  onPressIn={() => setOpenEntry(true)}
                  value={entry.toTimeString()}
                />
                <DatePicker
                  modal
                  mode="time"
                  open={openEntry}
                  date={entry}
                  onConfirm={entryTime => {
                    setOpenEntry(false);
                    setEntry(entryTime);
                  }}
                  onCancel={() => {
                    setOpenEntry(false);
                  }}
                />
                <TextInput
                  style={styles.editInput}
                  label="Exit Time"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  onPressIn={() => setOpenExit(true)}
                  value={exist.toTimeString()}
                />
                <DatePicker
                  modal
                  mode="time"
                  open={openExit}
                  date={exist}
                  onConfirm={exitTime => {
                    setOpenExit(false);
                    setExist(exitTime);
                  }}
                  onCancel={() => {
                    setOpenExit(false);
                  }}
                />
                <TextInput
                  style={styles.editInput}
                  label="Whom to See/Meet"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Remark"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
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

export default EditVisitorLog;
