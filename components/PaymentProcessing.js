import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../constants/styles';
import {COLORS} from '../constants/theme';

const PaymentProcessing = () => {
  return (
    <View style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={COLORS.light.primary} />
        <Text>PaymentProcessing</Text>
      </View>
    </View>
  );
};

export default PaymentProcessing;
