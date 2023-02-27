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
import {COLORS, student} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import {genderData, religionData} from '../../../constants/dummy';
import { SavedData } from '../students/EditStudent';

const AddEnquiry = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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
          placeholder="Name"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Contact Number"
          placeholderTextColor="#000"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Email"
          placeholderTextColor="#000"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Date of Enquiry"
          placeholderTextColor="#000"
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
          boxStyles={styles.addInput}
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
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          inputStyles={styles.dropdown}
          search={false}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Enquiry Details"
          placeholderTextColor="#000"
          multiline
        />
        <SelectList
          setSelected={val => setGender(val)}
          data={genderData}
          save="value"
          placeholder="Status"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          inputStyles={styles.dropdown}
          search={false}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Remark"
          placeholderTextColor="#000"
        />
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Enquiry</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const AdmissionEnquiry = () => {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddEnquiry setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <View style={styles.subTopAction}>
            <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
              <Text style={styles.buttonText}>+ New Enquiry</Text>
            </RectButton>
            <TextInput placeholder="Search enquirer..." style={styles.input} />
          </View>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Enquirer</Text>
                    <Text style={styles.hd}>Enquiry Type</Text>
                    <Text style={styles.hd}>Enquiry Source</Text>
                    <Text style={styles.hd}>Date of Enquiry</Text>
                    <Text style={styles.hd}>Contact Number</Text>
                    <Text style={styles.hd}>No of Student</Text>
                    <Text style={styles.hd}>Status</Text>
                    <Text style={styles.hd}>Remark</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {student.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.name}</Text>
                      <Text style={styles.hd}>{r.code}</Text>
                      <Text style={styles.hd}>{r.level}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <View style={styles.hdb}>
                        <Icon
                          style={styles.enquiryIconBtn}
                          name="info"
                          size={16}
                          color="teal"
                          onPress={() =>
                            navigation.navigate('AdmissionEnquiryDetails')
                          }
                        />
                        <Icon
                          style={styles.enquiryIconBtn}
                          name="edit"
                          size={16}
                          color="#009EFB"
                          onPress={() =>
                            navigation.navigate('EditAdmissionEnquiry')
                          }
                        />
                        <Icon
                          style={styles.enquiryIconBtn}
                          name="delete"
                          size={16}
                          color="red"
                        />
                      </View>
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

export default AdmissionEnquiry;
