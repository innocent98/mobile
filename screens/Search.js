import {View, SafeAreaView, TextInput, Text, ScrollView} from 'react-native';
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
import FastImage from 'react-native-fast-image';
import {Divider} from 'react-native-paper';
import {baseURL} from '../redux/config';
import moment from 'moment';

const Search = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [query, setQuery] = useState('');
  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState([]);

  const handleSearch = value => {
    setQuery(value);
  };
  const handleQuery = () => {
    setQuery('');
    setMessage2([]);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      if (query.length > 2) {
        const fetchTags = () => {
          makeGet(dispatch, `/tags`, setMessage);
          makeGet(dispatch, `/search?q=${query}`, setMessage2);
        };
        fetchTags();
      }
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage, setMessage2, query]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />

        <View style={styles.search}>
          <TextInput
            placeholder="Recherche..."
            placeholderTextColor={
              isDark ? COLORS.light.backgroundSoft : COLORS.dark.backgroundSoft
            }
            onChangeText={handleSearch}
            value={query}
            style={[
              styles.searchText,
              {
                color: isDark
                  ? COLORS.light.backgroundSoft
                  : COLORS.light.primary,
              },
            ]}
          />
          <Icon
            name={query === '' ? 'search' : 'close'}
            color={isDark ? COLORS.dark.textSoft : COLORS.dark.backgroundSoft}
            size={18}
            style={styles.searchIcon}
            onPress={handleQuery}
          />
        </View>

        <ScrollView style={{height: '89%', width: '100%'}}>
          <View>
            <Text
              style={[
                styles.rapidetxt,
                isDark && {color: COLORS.dark.textSoft},
              ]}>
              Recherche rapide
            </Text>
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
                      isDark && {color: COLORS.dark.background},
                    ]}>
                    {item.title}
                  </Text>
                </RectButton>
              ))}
            </View>
            <Divider />
          </View>

          <View>
            {message2?.length > 0 && (
              <Text style={[styles.rapidetxt, {paddingTop: 10}]}>
                {message2?.length} Resultat avec le mot cle{' '}
                <Text
                  style={{
                    color: COLORS.dark.backgroundSoft,
                    fontFamily: 'IBMPlexSans-Medium',
                  }}>
                  {query}
                </Text>
              </Text>
            )}

            {message2?.map((data, index) => (
              <View key={index}>
                {data.type === 'Newscasts' && (
                  <RectButton
                    onPress={() =>
                      navigation.navigate('NewsDetails', {
                        detUrl: `/newscasts/${data.id}`,
                      })
                    }
                    key={index}>
                    {index === 0 && (
                      <Text
                        style={[
                          styles.rapidetxt,
                          {color: COLORS.light.primary},
                        ]}>{`${
                        data.type === 'Newscasts' && message2.length
                      } Acutalite(s)`}</Text>
                    )}
                    <View style={styles.newsList}>
                      <FastImage
                        style={styles.newsListImg}
                        source={{
                          uri: baseURL + data?.fichier,
                          headers: {Authorization: 'someAuthToken'},
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                      <View style={styles.newsListDet}>
                        <Text
                          style={[
                            styles.smallText,
                            isDark && {color: COLORS.light.backgroundSoft},
                          ]}
                          numberOfLines={2}
                          ellipsizeMode="tail">
                          {data.title}
                        </Text>
                        <View style={styles.newsListDetExtra}>
                          <View style={styles.newsListDetExtraLeft}>
                            <Icon
                              name="circle"
                              color={
                                isDark
                                  ? COLORS.light.background
                                  : COLORS.light.primary
                              }
                              size={8}
                            />
                            <Text
                              style={[
                                styles.newsListDetExtraTxt,
                                isDark && {color: COLORS.light.backgroundSoft},
                              ]}>
                              {data.categorie}
                            </Text>
                          </View>
                          {data?.view && (
                            <View style={styles.newsListDetExtraRight}>
                              <Icon
                                name="visibility"
                                color={COLORS.dark.textSoft}
                              />
                              <Text style={styles.newsListDetExtraRightView}>
                                {data.view}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    </View>
                    <Divider />
                  </RectButton>
                )}

                {data.type === 'Documents' && (
                  <RectButton
                    onPress={() =>
                      navigation.navigate('NewsDetails', {
                        detUrl: `/newscasts/${data.id}`,
                      })
                    }
                    key={index}>
                    {index === 0 && (
                      <Text
                        style={[
                          styles.rapidetxt,
                          {color: COLORS.light.primary},
                        ]}>{`${
                        data.type === 'Documents' && message2.length
                      } Document(s)`}</Text>
                    )}
                    <View style={styles.newsList2}>
                      <Icon
                        name="picture-as-pdf"
                        size={50}
                        color={COLORS.light.primary}
                        style={styles.newsListImg2}
                      />
                      <View style={styles.newsListDet2}>
                        <Text
                          style={[
                            styles.smallText,
                            isDark && {color: COLORS.light.backgroundSoft},
                          ]}
                          numberOfLines={2}
                          ellipsizeMode="tail">
                          {data.title}
                        </Text>
                        <View style={styles.newsListDetExtra}>
                          <View style={styles.newsListDetExtraLeft}>
                            <Icon
                              name="circle"
                              color={
                                isDark
                                  ? COLORS.light.background
                                  : COLORS.light.primary
                              }
                              size={8}
                            />
                            <Text
                              style={[
                                styles.newsListDetExtraTxt,
                                isDark && {color: COLORS.light.backgroundSoft},
                              ]}>
                              {data.categorie}
                            </Text>
                          </View>
                          <View style={styles.newsListDetExtraRight}>
                            <Text style={styles.newsListDetExtraRightView}>
                              {moment(data.created_at).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Divider />
                  </RectButton>
                )}

                {data.type === 'Journaux' && (
                  <RectButton
                    onPress={() =>
                      navigation.navigate('NewsDetails', {
                        detUrl: `/newscasts/${data.id}`,
                      })
                    }
                    key={index}>
                    {index === 0 && (
                      <Text
                        style={[
                          styles.rapidetxt,
                          {color: COLORS.light.primary},
                        ]}>{`${
                        data.type === 'Journaux' && message2.length
                      } Journaux(s)`}</Text>
                    )}
                    <View style={styles.newsList2}>
                      <Icon
                        name="article"
                        size={50}
                        color={COLORS.light.primary}
                        style={styles.newsListImg2}
                      />
                      <View style={styles.newsListDet2}>
                        <Text
                          style={[
                            styles.smallText,
                            isDark && {color: COLORS.light.backgroundSoft},
                          ]}
                          numberOfLines={2}
                          ellipsizeMode="tail">
                          {data.title}
                        </Text>
                        <View style={styles.newsListDetExtra}>
                          <View style={styles.newsListDetExtraLeft}>
                            <Icon
                              name="circle"
                              color={
                                isDark
                                  ? COLORS.light.background
                                  : COLORS.light.primary
                              }
                              size={8}
                            />
                            <Text
                              style={[
                                styles.newsListDetExtraTxt,
                                isDark && {color: COLORS.light.backgroundSoft},
                              ]}>
                              {data.categorie}
                            </Text>
                          </View>
                          <View style={styles.newsListDetExtraRight}>
                            <Text style={styles.newsListDetExtraRightView}>
                              {moment(data.created_at).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Divider />
                  </RectButton>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
