import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {feesList, results} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const ManageFees = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topActions}>
            <View style={styles.subTopAction}>
              <TextInput placeholder="Search..." style={styles.staffInput} />
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
                      <Text style={styles.hd}>Action</Text>
                    </View>
                    {feesList.map(r => (
                      <View style={styles.tableBody} key={r.id}>
                        <Text style={styles.hd}>{r.invoice}</Text>
                        <Text style={styles.hd}>{r.type}</Text>
                        <Text style={styles.hd}>{r.amount}</Text>
                        <Text style={styles.hd}>{r.acY}</Text>
                        <RectButton>
                          <Text style={styles.profilebtn}>Issue receipt</Text>
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

export default ManageFees;
