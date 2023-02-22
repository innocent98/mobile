import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {economie, extraEconomie} from '../constants/dummy';
import {Divider} from 'react-native-paper';
import Videos from './Videos';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {makeGet} from '../redux/apiCalls';
import {useEffect} from 'react';
import {useState} from 'react';
import moment from 'moment';

const Economie = ({data}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();
  const detUrl = `/pages/${data.id}`;
  return (
    <RectButton
      onPress={() => navigation.navigate('NewsDetails', {detUrl})}
      style={styles.economieTextCon}>
      <Text
        style={[
          styles.economieText,
          isDark && {color: COLORS.light.backgroundSoft},
        ]}>
        {data?.title}
      </Text>
      <Text
        style={[
          styles.economieTextSpan,
          isDark && {color: COLORS.light.backgroundSoft},
        ]}>
        {moment(data?.created_at).format('DD, MMMM YYYY')}
      </Text>
      <Divider />
    </RectButton>
  );
};
memo(Economie);

const EconomieSection = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState([]);

  const renderEconomie = ({item}) => <Economie data={item} />;

  const fetchNews = () => {
    makeGet(dispatch, '/pages', setMessage);
  };
  const fetchNews2 = () => {
    makeGet(dispatch, '/newscasts', setMessage2);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNews();
      fetchNews2();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message)

  return (
    <View style={styles.actualites}>
      <RectButton
        // onPress={() => navigation.navigate('NewsDetails')}
        style={styles.economieImgCon}>
        <View style={styles.economieTxtCon}>
          <Text style={styles.bigText}>ECONOMIE</Text>
          <Icon
            name="chevron-right"
            size={26}
            color={COLORS.light.background}
          />
        </View>
        <FastImage
          style={styles.economieImg}
          source={{
            uri: 'https://i.ibb.co/pWjwvW4/Prison-880x380-1.png',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </RectButton>
      <FlatList
        data={message?.data}
        keyExtractor={item => item.id}
        renderItem={renderEconomie}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        ListFooterComponent={() => (
          <>
            {message2?.data?.map(item => (
              <RectButton
                onPress={() => navigation.navigate('NewsDetails', {detUrl: `/newscasts/${item.id}`})}
                style={styles.extraEconomie}
                key={item.id}>
                <FastImage
                  style={styles.extraEconomieimg}
                  source={{
                    uri: item?.fichier?.path,
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.economieTextCon}>
                  <Text
                    style={[
                      styles.economieText,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.economieTextSpan,
                      isDark && {color: COLORS.light.backgroundSoft},
                    ]}>
                    {moment(item.created_at).format('DD, MMMM YYYY')}
                  </Text>
                </View>
              </RectButton>
            ))}
            <Videos />
          </>
        )}
      />
    </View>
  );
};

export default EconomieSection;
