import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AdmissionEnquiryDetails = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Staus: <Text style={styles.spanOpen}>Open</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Name: <Text style={styles.span}>Name 1</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Contact Number: <Text style={styles.span}>123456789</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Email: <Text style={styles.span}>mail@mail.com</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Date of Enquiry: <Text style={styles.span}>2/2/2022</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Enquiry Type: <Text style={styles.span}>Self Enquiry</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Enquiry Source: <Text style={styles.span}>Social media</Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfileD}>
            <Text style={styles.studentProfileDetails}>
              Enquiry Details:{' '}
              <Text style={styles.span}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </Text>
          </RectButton>
          <RectButton style={styles.studentProfile}>
            <Text style={styles.studentProfileDetails}>
              Remark: <Text style={styles.span}>Remark</Text>
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdmissionEnquiryDetails;
