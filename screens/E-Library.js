import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS, SHADOWS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ELibrary = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:COLORS.secondary}}>
      <View style={styles.container}>
        <Logo />
        <ScrollView style={{width: '90%'}}>
          <View style={styles.libraryContainer}>
            <Text style={styles.title}>Library Assets</Text>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              inputStyles={{color: '#000'}}
              dropdownTextStyles={{color: '#000'}}
              fontFamily="RobotoSlab-Regular"
            />
            {/* asset cards */}
            <View style={styles.assetCardContainer}>
              <View style={styles.assetCard}>
                <Text style={styles.assetCardTitle}>SOFTWARE DEVELOPMENT</Text>
                <Text style={styles.assetCardAuthor}>Author: Mr Williams</Text>
                <Text style={styles.assetCardDate}>
                  09/11/2022{' '}
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </Text>
              </View>

              <View style={styles.assetCard}>
                <Text style={styles.assetCardTitle}>SOFTWARE DEVELOPMENT</Text>
                <Text style={styles.assetCardAuthor}>Author: Mr Williams</Text>
                <Text style={styles.assetCardDate}>
                  09/11/2022{' '}
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </Text>
              </View>

              <View style={styles.assetCard}>
                <Text style={styles.assetCardTitle}>SOFTWARE DEVELOPMENT</Text>
                <Text style={styles.assetCardAuthor}>Author: Mr Williams</Text>
                <Text style={styles.assetCardDate}>
                  09/11/2022{' '}
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </Text>
              </View>
              <View style={styles.assetCard}>
                <Text style={styles.assetCardTitle}>SOFTWARE DEVELOPMENT</Text>
                <Text style={styles.assetCardAuthor}>Author: Mr Williams</Text>
                <Text style={styles.assetCardDate}>
                  09/11/2022{' '}
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </Text>
              </View>

              <View style={styles.assetCard}>
                <Text style={styles.assetCardTitle}>SOFTWARE DEVELOPMENT</Text>
                <Text style={styles.assetCardAuthor}>Author: Mr Williams</Text>
                <Text style={styles.assetCardDate}>
                  09/11/2022{' '}
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </Text>
              </View>

              <View style={styles.assetCard}>
                <Text style={styles.assetCardTitle}>SOFTWARE DEVELOPMENT</Text>
                <Text style={styles.assetCardAuthor}>Author: Mr Williams</Text>
                <Text style={styles.assetCardDate}>
                  09/11/2022{' '}
                  <Icon name="file-download" size={18} color={COLORS.white} />
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', height:'100%'},
  libraryContainer: {
    width: '100%',
    backgroundColor: COLORS.background,
    borderRadius: SIZES.font,
    padding: 10,
    marginTop: 20,
    ...SHADOWS.dark,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: 'RobotoSlab-Medium',
    color: '#000',
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
  assetCardContainer: {flexDirection: 'row', flexWrap: 'wrap', marginTop: 10},
  assetCard: {
    backgroundColor: COLORS.secondary,
    width: '45%',
    padding: 10,
    alignItems: 'center',
    borderRadius: SIZES.base,
    margin:5
  },
  assetCardTitle: {color: COLORS.white, textAlign: 'center'},
  assetCardAuthor: {color: COLORS.white, textAlign: 'center'},
  assetCardDate: {color: COLORS.white, textAlign: 'center'},
});

export default ELibrary;
