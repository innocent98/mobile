import {View, SafeAreaView, TextInput, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {useState} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {makeGet} from '../redux/apiCalls';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [query, setQuery] = useState('');
  const [message, setMessage] = useState([]);

  const handleSearch = value => {
    setQuery(value);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      const fetchTags = () => {
        makeGet(dispatch, '/tags', setMessage);
      };
      fetchTags();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />
        <View style={styles.search}>
          <TextInput
            placeholder="Recherche..."
            placeholderTextColor={
              isDark ? COLORS.light.backgroundSoft : COLORS.light.textSoft
            }
            onChangeText={handleSearch}
            value={query}
            style={[
              styles.searchText,
              {color: isDark && COLORS.light.backgroundSoft},
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

        <View style={styles.recherceTags}>
          {message?.map((item, index) => (
            <RectButton
              style={[
                styles.recherceTagsBtn,
                isDark && {backgroundColor: COLORS.light.backgroundSoft},
              ]}
              key={index}
              onPress={() =>
                navigation.navigate('SingleSearch', {id: item.id})
              }>
              <Text
                style={[
                  styles.recherceTagsBtnTxt,
                  isDark && {backgroundColor: COLORS.dark.background},
                ]}>
                {item.title}
              </Text>
            </RectButton>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
