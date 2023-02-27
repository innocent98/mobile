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
import {SavedData} from './EditStudent';
import {SelectList} from 'react-native-dropdown-select-list';
import {religionData} from '../../../constants/dummy';

const EditParentInfo = () => {
  const navigation = useNavigation();

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
                duration: 2000,
                easing: Easing.out(Easing.ease),
              }}
              style={styles.editView}>
              {/* parent's information */}
              <View>
                <Text style={styles.editLabel}>Parent's Information</Text>
                <TextInput
                  style={styles.editInput}
                  label="Father's Name"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Mother's Name"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Guardian's Name"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Parent's Nationality"
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
                <TextInput
                  style={styles.editInput}
                  label="Phone Number 1"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.editInput}
                  label="Phone Number 2"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.editInput}
                  label="Residential Address"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Email 1"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.editInput}
                  label="Email 2"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="email-address"
                />
                <SelectList
                  setSelected={val => setReligion(val)}
                  data={religionData}
                  save="value"
                  placeholder="Father's Religion"
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
                  placeholder="Mother's Religion"
                  boxStyles={styles.editInput}
                  dropdownStyles={styles.dropdown}
                  dropdownTextStyles={styles.dropdown}
                  inputStyles={styles.dropdown}
                  search={false}
                />
                <TextInput
                  style={styles.editInput}
                  label="Father's Native Langauge"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                />
                <TextInput
                  style={styles.editInput}
                  label="Mother's Native Langauge"
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

export default EditParentInfo;
