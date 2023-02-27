import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {results} from '../../constants';

const ManageResults = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topActions}>
        <Text style={styles.span}>
          tap to see/edit student's record
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {results.splice(1,5).map(result => (
            <RectButton
              style={styles.studentProfile}
              onPress={() => navigation.navigate('StudentResult', {result})} key={result.id}>
              <Text style={styles.studentProfileDetails}>{result.type}</Text>
            </RectButton>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageResults;
