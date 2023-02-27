import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../constants';
import { styles } from './../constants/styles';
import { RectButton } from 'react-native-gesture-handler';

const CourseRegistration = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.subContainer}>
          <Text style={styles.title}>Select Your Course and Register</Text>
          <MultipleSelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            // onSelect={() => alert(selected)}
            label="Categories"
            inputStyles={{color: '#000'}}
            dropdownTextStyles={{color: '#000'}}
            fontFamily="RobotoSlab-Regular"
          />
          <View style={styles.buttonContainer}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Proceed</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default CourseRegistration;
