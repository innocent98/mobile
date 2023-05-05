import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {RectButton} from 'react-native-gesture-handler';
import moment from 'moment';
import {baseURL} from '../redux/config';
import RenderHtml from 'react-native-render-html';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';

const NewsDetailsPage = ({message, pricing, scrollViewRef, setAbonne, setData,abonne}) => {
  const user = useSelector(state => state.user.currentUser);
  const isDark = useSelector(state => state.theme.isDark);
  const fontSize = useSelector(state => state.font.fontSize);
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.newsDetailsTop}>
        <View style={styles.newsDetailsCat}>
          <Icon
            name="circle"
            color={isDark ? COLORS.light.background : COLORS.light.primary}
          />
          <Text
            style={[
              styles.newsListDetExtraTxt,
              isDark && {color: COLORS.light.background},
            ]}>
            {message?.modules?.name}
          </Text>
        </View>
        <View style={styles.newsDetailsAuthor}>
          <Text
            style={[
              styles.profileText,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            Auteur: {message?.author}
          </Text>
        </View>
      </View>

      <View style={styles.newsDetiailTitleCon}>
        <Text
          style={[
            styles.titleText,
            isDark && {color: COLORS.light.background},
          ]}>
          {message?.title}
        </Text>
        <View style={styles.titleDetails}>
          <Text
            style={[
              styles.newsListDetExtraRightView,
              {
                color: isDark
                  ? COLORS.light.backgroundSoft
                  : COLORS.dark.backgroundSoft,
              },
            ]}>
            Le {moment(message?.created_at).format('DD MMMM YYYY')} à{' '}
            {moment(message?.created_at).format('LT')}
          </Text>
          {message?.duration !== '0' && (
            <View style={styles.titleDetailTime}>
              <Icon
                name="schedule"
                color={
                  isDark ? COLORS.dark.textSoft : COLORS.dark.backgroundSoft
                }
              />
              <Text
                style={[
                  styles.newsListDetExtraRightView,
                  {
                    marginLeft: 5,
                    color: isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.backgroundSoft,
                  },
                ]}>
                {`${message?.duration} min de lecture`}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* content */}
      <RenderHtml
        contentWidth={width}
        source={{
          html: `${message?.content}`,
        }}
        baseStyle={{
          fontFamily: 'IBMPlexSans-Medium',
          color: isDark ? COLORS.light.backgroundSoft : COLORS.dark.background,
          fontSize: fontSize,
          marginVertical: 20,
          lineHeight: 24,
        }}
      />
      <FastImage
        style={styles.paragraphImg}
        source={{
          uri: baseURL + message?.fichier?.path,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      {/* paragraphs */}
      {message?.paragraphs?.map((paragraph, index) => {
        return (
          <View key={index} style={{marginBottom: 15}}>
            {message?.for_subscriber !== '1' && (
              <RenderHtml
                contentWidth={width}
                source={{
                  html: `${paragraph?.content}`,
                }}
                baseStyle={{
                  fontFamily: 'IBMPlexSans-Regular',
                  color: isDark
                    ? COLORS.light.backgroundSoft
                    : COLORS.dark.background,
                  fontSize: fontSize,
                  marginVertical: 20,
                  lineHeight: 24,
                  fontStyle: 'normal',
                }}
              />
            )}
            {paragraph?.insertion?.fichier?.path && (
              <FastImage
                style={styles.paragraphImg}
                source={{
                  uri: baseURL + paragraph?.insertion?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            )}
          </View>
        );
      })}

      {message?.for_subscriber === 1 && (
        <View style={styles.newsDetailsDown}>
          <Text
            style={[
              styles.newsDetailsDownText,
              isDark && {color: COLORS.light.background},
            ]}>
            Cet article est un article payant, payez pour le débloquer
          </Text>
          {pricing?.slice(0, 1)?.map((item, index) => (
            <RectButton
              onPress={() => {
                if (user) {
                  setAbonne(true);
                  setData(item);
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: 0,
                    animated: true,
                  });
                } else {
                  navigation.navigate('Settings', {
                    screen: 'Login',
                  });
                }
              }}
              style={styles.newsDetailsBtn}
              key={index}
              enabled={!abonne || !user}>
              <Text style={styles.newsDetailsBtnText}>Débloquer l'article</Text>
            </RectButton>
          ))}
          {!user && (
            <Text
              style={[
                styles.newsListDetExtraRightView,
                isDark && {color: COLORS.light.backgroundSoft},
              ]}
              onPress={() =>
                navigation.navigate('Settings', {screen: 'Login'})
              }>
              Déjà abonné? Connecte vous
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default NewsDetailsPage;
