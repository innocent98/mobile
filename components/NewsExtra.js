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
import {useSelector} from 'react-redux';

const Actualites = ({data}) => {
  const navigation = useNavigation();
  return (
    <RectButton
      onPress={() => navigation.navigate('NewsDetails')}
      style={styles.actualitesImgContainer}>
      <FastImage
        style={styles.actualitesImg}
        source={{
          uri: data.pp,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.shadowCon}>
        <View style={styles.actualitesTop}>
          <View style={styles.actualitesTxtCon}>
            <Text style={styles.actualitesTxt}>Le 29, decembre 2022</Text>
            <Text style={styles.actualitesSpan}>
              Mort de Pelé : les ambiguïtés politiques du « roi » du football,
              loin des terrains
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
            <Text style={styles.actualitesTxt}>Radji Mouhammed</Text>
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
  const renderActualites = ({item}) => <Actualites data={item} />;

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
      <Text style={[styles.smallText, isDark && {color: COLORS.light.backgroundSoft}]}>PUBLICITE</Text>

      <View style={styles.actualites}>
        <Text style={[styles.text, isDark && {color: COLORS.light.background}]}>ACTUALITÉS EN DIRECT</Text>
        <FlatList
          data={actualites}
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
