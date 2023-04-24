import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles2} from '../constants/styles2';
import {styles} from '../constants/styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/theme';

const Error = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles2.successContainer}>
        <Text style={styles2.closeBtn} onPress={() => navigation.goBack()}>
          Fermer
        </Text>
        <Icon name="error" size={84} color={COLORS.light.red} />
        <Text style={styles2.errorTxt}>
          Une erreur s'est produite, veuillez contacter l'équipe d'assistance.
        </Text>
      </View>
    </View>
  );
};

export default Error;
