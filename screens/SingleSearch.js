import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {Divider} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {makeGet, makeGet2} from '../redux/apiCalls';
import {useState} from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import {useNavigation} from '@react-navigation/native';

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
            uri: data?.fichier?.path,
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
              <Text style={styles.newsListDetExtraRightView}>
                <Icon name="visibility" color={COLORS.dark.textSoft} />
                {data.view}
              </Text>
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

const SingleSearch = ({route}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {id} = route.params;
  //   console.log(id)

  const [message, setMessage] = useState([]);
  const renderItem = ({item}) => <News data={item} />;

  const fetchNews = () => {
    makeGet2(dispatch, `/tags/${id}`, setMessage);
  };
  //   console.log(message?.newscasts)

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);

  return (
    <View
      style={[
        styles.tabScreen,
        {
          backgroundColor: isDark && COLORS.dark.background,
          marginTop: 0,
          paddingBottom: 0,
        },
      ]}>
      <FlatList
        data={message?.newscasts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        refreshing={false}
        onRefresh={fetchNews}
      />
    </View>
  );
};

export default SingleSearch;
