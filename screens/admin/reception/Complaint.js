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
import {religionData} from '../../../constants/dummy';
import { SavedData } from '../students/EditStudent';

const AddComplaint = ({setAdd, setIsAdd}) => {
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
        <SelectList
          setSelected={val => setReligion(val)}
          data={religionData}
          save="value"
          placeholder="Complaint Type"
          boxStyles={styles.addInput}
          dropdownStyles={styles.dropdown}
          dropdownTextStyles={styles.dropdown}
          inputStyles={styles.dropdown}
          search={false}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Complaint"
          placeholderTextColor="#000"
          multiline
        />
        <TextInput
          style={styles.addInput}
          placeholder="Date of Complaint"
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
        <TextInput
          style={styles.addInput}
          placeholder="Complainant"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Assign To"
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

const Complaint = () => {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddComplaint setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <View style={styles.subTopAction}>
            <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
              <Text style={styles.buttonText}>+ New Complaint</Text>
            </RectButton>
            <TextInput placeholder="Search complaint..." style={styles.input} />
          </View>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Complaint Type</Text>
                    <Text style={styles.hd}>Date of Complaint</Text>
                    <Text style={styles.hdd}>Complaint</Text>
                    <Text style={styles.hd}>Complainant</Text>
                    <Text style={styles.hd}>Assign To</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {student.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.name}</Text>
                      <Text style={styles.hd}>{r.code}</Text>
                      <Text style={styles.hdd}>{r.code}</Text>
                      <Text style={styles.hd}>{r.level}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <View style={styles.hdb}>
                        <Icon
                          style={styles.enquiryIconBtn}
                          name="edit"
                          size={16}
                          color="#009EFB"
                          onPress={() => navigation.navigate('EditComplaint')}
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

export default Complaint;
