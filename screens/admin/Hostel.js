import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './../../constants/styles';
import {student} from '../../constants';
import {RectButton, TextInput} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';

const Hostel = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: '100l first'},
    {key: '2', value: '100l second'},
    {key: '3', value: '200l first'},
    {key: '4', value: '200l second'},
    {key: '5', value: '300l first'},
    {key: '6', value: '300l second'},
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <Logo /> */}

        <View style={styles.topActions}>
          <Text style={styles.buttonText}>
            Total no of Students in the Hostel:{' '}
            {student.filter(s => s.isHostel).length}
          </Text>
          <View style={styles.subTopAction}>
            <TextInput placeholder="Search student..." style={styles.input} />
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              placeholder="Filter"
              boxStyles={styles.input}
              dropdownStyles={styles.dropdown}
              search={false}
            />
          </View>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <ScrollView>
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Student Name</Text>
                    <Text style={styles.hd}>Matric No</Text>
                    <Text style={styles.hd}>Level</Text>
                    <Text style={styles.hd}>Gender</Text>
                    <Text style={styles.hd}>Room No</Text>
                    <Text style={styles.hd}>Action</Text>
                  </View>
                  {student.map(r => (
                    <View style={styles.tableBody} key={r.id}>
                      <Text style={styles.hd}>{r.name}</Text>
                      <Text style={styles.hd}>{r.code}</Text>
                      <Text style={styles.hd}>{r.level}</Text>
                      <Text style={styles.hd}>{r.sex}</Text>
                      <Text style={styles.hd}>{r.isHostel ? 'Room002' : '-'}</Text>
                      <RectButton>
                        <Text
                          style={
                            r.isHostel
                              ? styles.profilebtn
                              : styles.profilebtnPrm
                          }>
                          {r.isHostel ? 'Remove from hostel' : 'Add to hostel'}
                        </Text>
                      </RectButton>
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

export default Hostel;
