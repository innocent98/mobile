import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {feesList, results} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Fees = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topActions}>
            <RectButton style={styles.addButton}>
              <Text style={styles.buttonText}>+ Add New Fees</Text>
            </RectButton>
            <View style={styles.subTopAction}>
              <TextInput
                placeholder="Search fees..."
                style={styles.staffInput}
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.subContainer}>
              <ScrollView>
                <ScrollView horizontal={true}>
                  <View style={styles.table}>
                    <View style={styles.tableHead}>
                      <Text style={styles.hd}>Invoice</Text>
                      <Text style={styles.hd}>Type</Text>
                      <Text style={styles.hd}>Amount</Text>
                      <Text style={styles.hd}>Academic year</Text>
                      <Text style={styles.hd}>Category</Text>
                    </View>
                    {feesList.map(r => (
                      <View style={styles.tableBody} key={r.id}>
                        <Text style={styles.hd}>{r.invoice}</Text>
                        <Text style={styles.hd}>{r.type}</Text>
                        <Text style={styles.hd}>{r.amount}</Text>
                        <Text style={styles.hd}>{r.acY}</Text>
                        <RectButton
                          onPress={() =>
                            navigation.navigate('FeesManagement', {
                              screen: 'FeesStatus',
                              params: {r},
                            })
                          }>
                          <Text style={styles.profilebtn}>{r.cat}</Text>
                        </RectButton>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Fees;
