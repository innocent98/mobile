import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {Divider} from 'react-native-paper';
import NewsExtra from './NewsExtra';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {makeGet} from '../redux/apiCalls';
import {useState} from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import {useNavigation} from '@react-navigation/native';
import { baseURL } from '../redux/config';

moment.locale('fr');

const News = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const detUrl = `/newscasts/${data.id}`;
  // console.log(data.fichier.path);

  return (
    <RectButton onPress={() => navigation.navigate('NewsDetails', {detUrl})}>
      <View style={styles.newsList}>
        <FastImage
          style={styles.newsListImg}
          source={{
            uri: baseURL + data?.fichier?.path,
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
            ]}>
            {data.title}
          </Text>
          <View style={styles.newsListDetExtra}>
            <View style={styles.newsListDetExtraLeft}>
              <Icon
                name="circle"
                color={isDark ? COLORS.light.background : COLORS.light.primary}
                size={8}
              />
              <Text
                style={[
                  styles.newsListDetExtraTxt,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {data.type}
              </Text>
            </View>
            <View style={styles.newsListDetExtraRight}>
              <Icon name="visibility" color={COLORS.dark.textSoft} />
              <Text style={styles.newsListDetExtraRightView}>{data.view}</Text>
              {/* <Text style={styles.newsListDetExtraRightView}>
                {moment(data.created_at).format('DD-MM-YYYY')}
              </Text> */}
            </View>
          </View>
        </View>
      </View>
      <Divider />
    </RectButton>
  );
};
memo(News);

const Alaune = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});
  const [message2, setMessage2] = useState([]);
  const renderItem = ({item}) => <News data={item} />;

  const fetchNews = () => {
    makeGet(dispatch, '/home', setMessage);
  };
  const fetchNewsCasts = () => {
    makeGet(dispatch, '/newscasts', setMessage2);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
      fetchNewsCasts();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage, setMessage2]);

  // useEffect(() => {
  //   message?.allnewscastsByModule?.slice(0, 1).map((item, index) => {
  //     return setMessage2(item);
  //   });
  // }, [message]);

  return (
    <View
      style={[
        styles.tabScreen,
        isDark && {backgroundColor: COLORS.dark.background},
      ]}>
      <FlatList
        data={message2?.data?.slice(0, 4)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        refreshing={false}
        onRefresh={fetchNews}
        ListHeaderComponent={() => (
          <RectButton
            onPress={() =>
              navigation.navigate('NewsDetails', {
                detUrl: `/newscasts/${message?.principalNewscats?.id}`,
              })
            }>
            <View style={styles.featured}>
              <FastImage
                style={styles.featuredImg}
                source={{
                  uri: baseURL + message?.principalNewscats?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={styles.featuredText}>
                <Text
                  style={styles.bigText}
                  numberOfLines={3}
                  ellipsizeMode="tail">
                  {message?.principalNewscats?.content}
                </Text>
                <Icon
                  name="bookmark-border"
                  size={22}
                  color={COLORS.light.background}
                  style={styles.featuredIcon}
                />
              </View>
            </View>
          </RectButton>
        )}
        ListFooterComponent={() => (
          <NewsExtra data={message} data2={message2} />
        )}
      />
    </View>
  );
};

export default Alaune;
