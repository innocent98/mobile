import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../Home';
import {level} from '../../../constants/dummy';
import {SavedData} from '../students/EditStudent';

const CurriculumLevel = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo />
        <ScrollView>
          <View style={styles.container}>
            {level.map(lev => (
              <RectButton onPress={()=>navigation.navigate('CurriculumDetails', {item, lev})} style={styles.studentProfile} key={lev.id}>
                <Text style={styles.studentProfileDetails}>
                  {item.department} {lev.level}
                </Text>
              </RectButton>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CurriculumLevel;
