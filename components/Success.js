import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles2} from '../constants/styles2';
import {styles} from '../constants/styles';
import {useNavigation} from '@react-navigation/native';

const Success = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles2.successContainer}>
        <Text style={styles2.closeBtn} onPress={()=> navigation.goBack()} >Fermer</Text>
        <Image
          source={require('../assets/payment-check.png')}
          style={styles2.successImg}
          resizeMode="contain"
        />
        <Text style={styles2.successTxt}>
          Le paiement a été initié et sera traité sous peu, veuillez patienter
        </Text>
      </View>
    </View>
  );
};

export default Success;
