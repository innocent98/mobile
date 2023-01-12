import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {COLORS, SHADOWS, SIZES} from '../constants';

const Project = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={styles.projectContainer}>
          <View>
            <Text style={styles.title}>
              Enter your final year project topic
            </Text>
            <Text style={styles.label}>Project Topic 1</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Project Topic 2</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Project Topic 3</Text>
            <TextInput style={styles.input} />
            <View style={styles.butonContainer}>
              <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  projectContainer: {
    width: '90%',
    backgroundColor: COLORS.background,
    borderRadius: SIZES.font,
    padding: 10,
    marginTop: 20,
    ...SHADOWS.dark,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: 'RobotoSlab-Medium',
    color: '#000',
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
  label: {
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.medium,
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: SIZES.base,
    height: 40,
  },
  butonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: 'RobotoSlab-Regular',
  },
});

export default Project;
