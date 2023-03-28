import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {useState} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {makeGet, makeGetHeader} from '../redux/apiCalls';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {memo} from 'react';
import {Divider} from 'react-native-paper';
import {baseURL} from '../redux/config';
import moment from 'moment';

const Journal = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [message, setMessage] = useState([]);

  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      const fetchTags = () => {
        makeGetHeader(dispatch, `/auth/subcriptions`, headers, setMessage);
      };
      fetchTags();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  console.log(message[0]?.newspaper_abonment);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <TopComp />

        <ScrollView style={{height: '89%', width: '100%'}}>
          {message[0]?.newspaper_abonment?.length === 0 ? (
            <Text
              style={[
                styles.noData,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}>
              Aucune information disponible
            </Text>
          ) : (
            <View>
              {message[0]?.newspaper_abonment?.map((data, index) => (
                <View key={index}>
                  <RectButton
                    onPress={() =>
                      navigation.navigate('ReadPDF', {
                        detUrl: `/newscasts/${data.id}`,
                        data,
                      })
                    }
                    key={index}>
                    {index === 0 && (
                      <Text
                        style={[
                          styles.rapidetxt,
                          {color: COLORS.light.primary},
                        ]}>{`${message?.latestNewspapers?.length} Document(s)`}</Text>
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
                          <View
                            style={[
                              styles.newsListDetExtraRight,
                              {marginHorizontal: 5},
                            ]}>
                            <Text style={styles.newsListDetExtraRightView}>
                              {moment(data.created_at).format('DD-MM-YYYY')}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Divider />
                  </RectButton>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Journal;
