import {View, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {useState} from 'react';

const Search = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const [query, setQuery] = useState('');

  const handleSearch = value => {
    setQuery(value);
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />
        <View style={styles.search}>
          <TextInput
            placeholder="Recherche..."
            onChangeText={handleSearch}
            value={query}
            style={[
              styles.searchText,
              {color: isDark && COLORS.light.background},
            ]}
          />
          <Icon
            name={query === '' ? 'search' : 'close'}
            color={COLORS.dark.textSoft}
            size={18}
            style={styles.searchIcon}
            onPress={() => setQuery('')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
