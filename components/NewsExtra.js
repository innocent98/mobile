import {View, Text, FlatList} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {actualites} from '../constants/dummy';
import EconomieSection from './EconomieSection';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {makeGet} from '../redux/apiCalls';
import {useState} from 'react';
import {useEffect} from 'react';
import moment from 'moment';

const Actualites = ({data}) => {
  const navigation = useNavigation();
  const detUrl = `/documentations/${data.id}`
  return (
    <RectButton
      onPress={() => navigation.navigate('NewsDetails', {detUrl})}
      style={styles.actualitesImgContainer}>
      <FastImage
        style={styles.actualitesImg}
        source={{
          uri: data?.fichier?.path,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.shadowCon}>
        <View style={styles.actualitesTop}>
          <View style={styles.actualitesTxtCon}>
            <Text style={styles.actualitesTxt}>
              Le {moment(data.created_at).format('DD, MMMM YYYY')}
            </Text>
            <Text
              style={styles.actualitesSpan}
              numberOfLines={4}
              ellipsizeMode="tail">
              {data.content}
            </Text>
          </View>
          <Icon
            name="bookmark-border"
            size={26}
            color={COLORS.light.background}
          />
        </View>
        <View style={styles.actualitesAuthor}>
          <FastImage
            style={styles.profileImg}
            source={{
              uri: 'https://i.ibb.co/8c3xKmX/profilepic.png',
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.profileDet}>
            <Text style={styles.actualitesTxt}>{data.author}</Text>
            <Text style={styles.actualitesTxt}>2 Dec 5 min de lecture</Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
memo(Actualites);

const NewsExtra = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const [message, setMessage] = useState([]);

  const renderActualites = ({item}) => <Actualites data={item} />;

  const fetchNews = () => {
    makeGet(dispatch, '/documentations', setMessage);
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
  // console.log(message)

  return (
    <View style={styles.newsExtra}>
      <FastImage
        style={styles.featuredImg}
        source={{
          uri: 'https://i.ibb.co/nDC71N2/52031806704-806863a86c-c1-880x380-1.png',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.newsExtraCard}>
        <Text style={styles.newsExtraCardTxt1}>A savoir</Text>
        <Text style={styles.newsExtraCardTxt2}>Par Claude Urbain PLAGBETO</Text>
        <Text style={styles.newsExtraCardTxt3}>
          Irrégularités dans le rapatriement des recettes d’exportation: Les
          banques et entreprises mises en garde
        </Text>
        <Text style={styles.newsExtraCardtxt4}>Lecture de 5 Mins </Text>
      </View>

      <FastImage
        style={styles.publiciteImg}
        source={{
          uri: 'https://i.ibb.co/Kj1QB8B/sobebra-1.png',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text
        style={[
          styles.pubText,
          isDark && {color: COLORS.light.backgroundSoft},
        ]}>
        PUBLICITE
      </Text>

      <View style={styles.actualites}>
        <Text style={[styles.text, isDark && {color: COLORS.light.background}]}>
          ACTUALITÉS EN DIRECT
        </Text>
        <FlatList
          data={message?.data}
          renderItem={renderActualites}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
        />
      </View>
      <EconomieSection />
    </View>
  );
};

export default NewsExtra;
