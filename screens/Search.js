import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';

const Search = () => {
  const isDark = useSelector(state => state.theme.isDark);
  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />
      </View>
    </SafeAreaView>
  );
};

export default Search;
