import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {makeGet} from '../redux/apiCalls';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {baseURL} from '../redux/config';

const Actualite = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const detUrl = data.permalink;

  return (
    <RectButton
      onPress={() =>
        navigation.navigate('NewsDetails', {detUrl: `/newscasts/${detUrl}`})
      }
      style={[styles.extraEconomie, data.deleted !== 0 && {display: 'none'}]}>
      <FastImage
        style={styles.extraEconomieimg}
        source={{
          uri: baseURL + data?.fichier?.path,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={[styles.economieTextCon, {marginHorizontal: 10}]}>
        <View style={styles.economieTextSpanCon}>
          <Text
            style={[
              styles.economieText,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {data?.title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="visibility" color={COLORS.dark.textSoft} />
            <Text style={styles.newsListDetExtraRightView}>{data.view}</Text>
          </View>
        </View>
        <View style={styles.economieTextSpanCon}>
          <Text
            style={[
              styles.economieTextSpan,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {moment(data?.created_at).format('DD, MMMM YYYY')}
          </Text>
          <Text
            style={[
              styles.newsListDetExtraRightView,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            {data?.duration !== 0 && `${data?.duration} min de lecture`}
          </Text>
        </View>
      </View>
    </RectButton>
  );
};
memo(Actualite);

const Actualites = ({route}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const {index} = route?.params;
  const dispatch = useDispatch();
  const [message, setMessage] = useState({});
  const [message2, setMessage2] = useState([]);
  const renderItem = ({item}) => <Actualite data={item} />;

  const fetchNews = () => {
    makeGet(dispatch, '/home', setMessage);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);

  useEffect(() => {
    message?.allnewscastsByModule?.slice(index, index + 1).map(item => {
      return setMessage2(item);
    });
  }, [message]);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingVertical: 0}]}>
        <View
          style={[
            styles.actualites,
            {marginTop: 0, marginBottom: 10, paddingTop: 0},
          ]}>
          <FlatList
            data={message2?.newscasts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            refreshing={false}
            onRefresh={fetchNews}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Actualites;
