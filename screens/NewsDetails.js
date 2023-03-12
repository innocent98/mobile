import {View, Text, SafeAreaView, ScrollView, Share} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {makeGet, makeGet2} from '../redux/apiCalls';
import {useEffect} from 'react';
import moment from 'moment';
import { baseURL } from '../redux/config';

const NewsDetails = ({route}) => {
  const user = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);
  const fontSize = useSelector(state => state.font.fontSize);
  const navigation = useNavigation();
  const {detUrl} = route?.params;

  const [inputValue, setInputValue] = useState('Hey! share me.');
  const [message, setMessage] = useState({});

  const fetchNewsDetails = () => {
    makeGet2(dispatch, detUrl, setMessage);
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNewsDetails();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

  // share news function
  const shareMessage = () => {
    //Here is the Share API
    Share.share({
      message: inputValue.toString(),
    })
      //after successful share return result
      .then(result => console.log(result))
      //If any thing goes wrong it comes here
      .catch(errorMsg => console.log(errorMsg));
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
                {message.type}
              </Text>
            </View>
            <View style={styles.newsDetailsAuthor}>
              {/* <FastImage
                style={[
                  styles.profileImg,
                  isDark && {
                    borderWidth: 1,
                    borderColor: COLORS.light.background,
                  },
                ]}
                source={{
                  uri: 'https://i.ibb.co/8c3xKmX/profilepic.png',
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              /> */}
              <Text
                style={[
                  styles.profileText,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {message.author}
              </Text>
            </View>
          </View>

          <View style={styles.newsDetiailTitleCon}>
            <Text
              style={[
                styles.titleText,
                isDark && {color: COLORS.light.background},
              ]}>
              {message.title}
            </Text>
            <View style={styles.titleDetails}>
              <Text style={styles.newsListDetExtraRightView}>
                Le {moment(message.created_at).format('DD MMMM YYYY')} à{' '}
                {moment(message.created_at).format('LT')}
              </Text>
              <View style={styles.titleDetailTime}>
                <Icon name="schedule" color={COLORS.dark.textSoft} />
                <Text
                  style={[styles.newsListDetExtraRightView, {marginLeft: 5}]}>
                  Lecture de 5 Mins
                </Text>
              </View>
            </View>
          </View>

          {/* content */}
          <Text
            style={[
              styles.newsDetailsParagraph,
              {
                color: isDark
                  ? COLORS.light.backgroundSoft
                  : COLORS.dark.background,
                fontSize: fontSize,
              },
            ]}>
            {message.content}
          </Text>
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
          {message?.paragraphs?.map((paragraph, index) => (
            <View key={index}>
              <Text
                style={[
                  styles.newsDetailsParagraph,
                  {
                    color: isDark
                      ? COLORS.light.backgroundSoft
                      : COLORS.dark.background,
                    fontSize: fontSize,
                  },
                ]}>
                {paragraph.content}
              </Text>
              <FastImage
                style={styles.paragraphImg}
                source={{
                  uri: paragraph?.insertion?.fichier?.path,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
          ))}

          <View style={styles.newsDetailsDown}>
            <Text
              style={[
                styles.newsDetailsDownText,
                isDark && {color: COLORS.light.background},
              ]}>
              Abonnez-vous Pour lire la suite
            </Text>
            <RectButton
              onPress={() => navigation.navigate('Abonnement')}
              style={styles.newsDetailsBtn}>
              <Text style={styles.newsDetailsBtnText}>Abonnez vous</Text>
            </RectButton>
            <Text style={styles.newsListDetExtraRightView}>
              Déjà abonné? Connecte vous
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.newsDetailsFooterCom}>
        <BorderlessButton>
          <Icon
            name="arrow-back"
            color={COLORS.dark.backgroundSoft}
            size={24}
            onPress={() => navigation.goBack()}
          />
        </BorderlessButton>
        <BorderlessButton onPress={()=>navigation.navigate('Bookmark', {message})}>
          <Icon
            name="bookmark-border"
            color={COLORS.dark.backgroundSoft}
            size={24}
          />
        </BorderlessButton>
        <BorderlessButton onPress={shareMessage}>
          <Icon name="share" color={COLORS.dark.backgroundSoft} size={24} />
        </BorderlessButton>
        <BorderlessButton
          onPress={() =>
            navigation.navigate('Settings', {screen: 'FontResize'})
          }>
          <Icon name="tune" color={COLORS.dark.backgroundSoft} size={24} />
        </BorderlessButton>
      </View>
    </SafeAreaView>
  );
};

export default NewsDetails;
