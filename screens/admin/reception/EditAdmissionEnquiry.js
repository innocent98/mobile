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
import {SelectList} from 'react-native-dropdown-select-list';
import {genderData, religionData} from '../../../constants/dummy';
import DatePicker from 'react-native-date-picker';
import {SavedData} from '../students/EditStudent';

const EditAdmissionEnquiry = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [disability, setDisability] = useState('');

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
                <Text style={styles.editLabel}>Enquiry Information</Text>
                <TextInput
                  style={styles.editInput}
                  label="Name"
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
                  label="Email"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.editInput}
                  label="Date of Enquiry"
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
                <SelectList
                  setSelected={val => setReligion(val)}
                  data={religionData}
                  save="value"
                  placeholder="Enquiry Type"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
                />
                <SelectList
                  setSelected={val => setReligion(val)}
                  data={religionData}
                  save="value"
                  placeholder="Enquiry Source"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
                />
                <TextInput
                  style={styles.editInput}
                  label="Enquiry Details"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <SelectList
                  setSelected={val => setGender(val)}
                  data={genderData}
                  save="value"
                  placeholder="Status"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
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

export default EditAdmissionEnquiry;
