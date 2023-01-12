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
import {styles} from './../constants/styles';
import {RectButton} from 'react-native-gesture-handler';

const Project = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <Text style={styles.title}>
                Enter your final year project topic
              </Text>
              <Text style={styles.label}>Project Topic 1</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Project Topic 2</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Project Topic 3</Text>
              <TextInput style={styles.projectInput} />
              <View style={styles.projectButonContainer}>
                <RectButton style={styles.button}>
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </RectButton>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Project;
