import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {TextInput} from 'react-native-paper';
import {SavedData} from './EditStudent';
import {SelectList} from 'react-native-dropdown-select-list';
import {
  bloodGroupData,
  disabilityData,
  genderData,
  religionData,
} from '../../../constants/dummy';
import DatePicker from 'react-native-date-picker';

const EditBasicInfo = () => {
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
                duration: 2000,
                easing: Easing.out(Easing.ease),
              }}
              style={styles.editView}>
              {/* basic information */}
              <View>
                <Text style={styles.editLabel}>Basic Information</Text>
                <TextInput
                  style={styles.editInput}
                  label="First Name"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Middle Name"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Last Name"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Matric No"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <SelectList
                  setSelected={val => setGender(val)}
                  data={genderData}
                  save="value"
                  placeholder="Gender"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
                />
                  <TextInput
                    style={styles.editInput}
                    label="Date of Birth"
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
                  label="Place of Birth"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Nationality"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="LGA"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <SelectList
                  setSelected={val => setReligion(val)}
                  data={religionData}
                  save="value"
                  placeholder="Religion"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
                />
                <TextInput
                  style={styles.editInput}
                  label="Native Language"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <SelectList
                  setSelected={val => setBloodGroup(val)}
                  data={bloodGroupData}
                  save="value"
                  placeholder="Blood Group"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  searchPlaceholder="search blood group"
                  maxHeight={Dimensions.get('window').height * 0.5}
                  search={false}
                />
                <SelectList
                  setSelected={val => setDisability(val)}
                  data={disabilityData}
                  save="value"
                  placeholder="Disability"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
                />
                <TextInput
                  style={styles.editInput}
                  label="Password"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  secureTextEntry={true}
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

export default EditBasicInfo;
