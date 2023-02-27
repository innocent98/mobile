import {View, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {Logo} from './Home';
import {styles} from './../constants/styles';
import {RectButton} from 'react-native-gesture-handler';

const ExamRegistration = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <Text style={styles.title}>Register Your Exam</Text>
              <Text style={styles.label}>Course Title</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Course Title</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Course Title</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Course Title</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Course Title</Text>
              <TextInput style={styles.projectInput} />
              <Text style={styles.label}>Course Title</Text>
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

export default ExamRegistration;
