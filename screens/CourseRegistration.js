import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {COLORS, SHADOWS, SIZES} from '../constants';

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
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.containerBody}>
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
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBody: {
    backgroundColor: COLORS.background,
    width: '90%',
    borderRadius: SIZES.font,
    marginTop: 20,
    padding: 10,
    ...SHADOWS.dark
  },
  title: {
    color: '#000',
    marginBottom: 10,
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.medium,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop:5
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.medium,
  },
});

export default CourseRegistration;
