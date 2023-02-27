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
import {useNavigation} from '@react-navigation/native';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import { SavedData } from '../students/EditStudent';

const AddVisitor = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState(new Date());
  const [exist, setExist] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);
  const [openExit, setOpenExit] = useState(false);

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
          duration: 1000,
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
          placeholder="Visiting Purpose"
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
          placeholder="Visitor Details"
          placeholderTextColor="#000"
          multiline
        />
        <Text style={styles.editLabel}>Date of Visit</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Date of Visit"
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
        <Text style={styles.editLabel}>Entry Time</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Entry Time"
          placeholderTextColor="#000"
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
        <Text style={styles.editLabel}>Exit Time</Text>
        <TextInput
          style={styles.addInput}
          placeholder="Exit Time"
          placeholderTextColor="#000"
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
          style={styles.addInput}
          placeholder="Whom to See/Meet"
          placeholderTextColor="#000"
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
            <Text style={styles.buttonText}>Add Visitor</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const VisitorLog = () => {
  const navigation = useNavigation();

  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddVisitor setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}

        <View style={styles.topActions}>
          <View style={styles.subTopAction}>
            <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
              <Text style={styles.buttonText}>+ New Visitor Log</Text>
            </RectButton>
            <TextInput placeholder="Search visitor..." style={styles.input} />
          </View>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Visiting Purpose</Text>
                    <Text style={styles.hdd}>Visitor Details</Text>
                    <Text style={styles.hd}>Date of Visit</Text>
                    <Text style={styles.hd}>Entry Time</Text>
                    <Text style={styles.hd}>Exit Time</Text>
                    <Text style={styles.hd}>Whom to See/Meet</Text>
                    <Text style={styles.hd}>Remark</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {student.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.name}</Text>
                      <Text style={styles.hdd}>
                        Name: Adebayo Emmanuel, Student Name: Adebayo Victor,
                        Relation with Student: Father, Contact Number: 123456789
                      </Text>
                      <Text style={styles.hd}>{r.level}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <View style={styles.hdb}>
                        <Icon
                          style={styles.enquiryIconBtn}
                          name="edit"
                          size={16}
                          color="#009EFB"
                          onPress={() => navigation.navigate('EditVisitorLog')}
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

export default VisitorLog;
