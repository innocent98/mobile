import {View, Text, SafeAreaView, ScrollView, Share} from 'react-native';
import React, {useState, useRef} from 'react';
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
import {baseURL} from '../redux/config';
import {
  processFailure,
  processStart,
  processSuccess,
} from '../redux/processRedux';
import {Notification} from '../components/Notification';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import {AbonnementDrop} from './Abonnement';
import {userRequest} from '../redux/requestMethod';

const NewsDetails = ({route}) => {
  const {width} = useWindowDimensions();
  const user = useSelector(state => state.user.currentUser);
  const {userProfile} = useSelector(state => state.user);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);
  const fontSize = useSelector(state => state.font.fontSize);
  const navigation = useNavigation();
  const {detUrl} = route?.params;

  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState({});
  const [pricing, setPricing] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [abonne, setAbonne] = useState(false);
  const [data, setData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentRes, setPaymentRes] = useState({});

  const fetchNewsDetails = () => {
    makeGet2(dispatch, detUrl, setMessage);
  };
  const fetchPricing = () => {
    makeGet(dispatch, '/pricings', setMessage2);
  };

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const handleBookmark = async () => {
    dispatch(processStart());
    try {
      await userRequest.get(`/addFavori/${message?.id}/${userProfile?.id}`, {
        headers,
      });
      setIsBookmarked(true);
      setTimeout(() => {
        setIsBookmarked(false);
      }, 2000);
      dispatch(processSuccess());
    } catch (error) {
      dispatch(processFailure());
    }
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchNewsDetails();
      fetchPricing();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage, setMessage2]);

  useEffect(() => {
    const mappedData = message2?.data?.slice(1, 2)?.map(item => {
      return item;
    });
    setPricing(mappedData);
  }, [message2]);

  // share news function
  const shareMessage = async () => {
    try {
      await Share.share({
        message:
          message.title +
          '\n\n' +
          'http://onip.hopetvbenin.org/client' +
          detUrl,
        url: 'http://onip.hopetvbenin.org/client',
      })
        .then(result => console.log(result))
        .catch(errorMsg => console.log(errorMsg));
    } catch (error) {}
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      {isSuccess && (
        <Notification
          message="Succès"
          backgroundColor={
            isDark ? COLORS.light.background : COLORS.light.primary
          }
          color={isDark ? COLORS.light.primary : COLORS.light.white}
          from={-50}
          animate={0}
        />
      )}
      {isBookmarked && (
        <Notification
          message="Favoris ajoutés"
          backgroundColor={
            isDark ? COLORS.light.background : COLORS.light.primary
          }
          color={isDark ? COLORS.light.primary : COLORS.light.white}
          from={-50}
          animate={0}
        />
      )}

      {!message ? null : (
        <View
          style={[
            styles.container,
            {
              backgroundColor: abonne ? 'rgba(0, 0, 0.20, 0.20)' : null,
              paddingVertical: 0,
            },
          ]}>
          {abonne && (
            <AbonnementDrop
              setAbonne={setAbonne}
              data={data}
              setIsSuccess={setIsSuccess}
              type={'paiement'}
              model={'App\\Models\\Newscast'}
              model_id={message?.id}
              setPaymentRes={setPaymentRes}
            />
          )}
          <ScrollView style={styles.scrollView}>
            <View style={styles.newsDetailsTop}>
              <View style={styles.newsDetailsCat}>
                <Icon
                  name="circle"
                  color={
                    isDark ? COLORS.light.background : COLORS.light.primary
                  }
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
                        isDark
                          ? COLORS.dark.textSoft
                          : COLORS.dark.backgroundSoft
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
                color: isDark
                  ? COLORS.light.backgroundSoft
                  : COLORS.dark.background,
                fontSize: fontSize,
                marginVertical: 20,
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
                        fontFamily: 'IBMPlexSans-Medium',
                        color: isDark
                          ? COLORS.light.backgroundSoft
                          : COLORS.dark.background,
                        fontSize: fontSize,
                        marginVertical: 20,
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

            {message?.for_subscriber === '1' && (
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
                    <Text style={styles.newsDetailsBtnText}>
                      Débloquer l'article
                    </Text>
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
          </ScrollView>
        </View>
      )}

      <View style={styles.newsDetailsFooterCom}>
        <BorderlessButton
          onPress={() => navigation.goBack()}
          style={styles.iconsBtn}>
          <Icon
            name="arrow-back"
            color={COLORS.dark.backgroundSoft}
            size={24}
          />
        </BorderlessButton>
        <BorderlessButton onPress={handleBookmark} style={styles.iconsBtn}>
          <Icon
            name="bookmark-border"
            color={COLORS.dark.backgroundSoft}
            size={24}
          />
        </BorderlessButton>
        <BorderlessButton onPress={shareMessage} style={styles.iconsBtn}>
          <Icon name="share" color={COLORS.dark.backgroundSoft} size={24} />
        </BorderlessButton>
        <BorderlessButton
          onPress={() =>
            navigation.navigate('Settings', {screen: 'FontResize'})
          }
          style={styles.iconsBtn}>
          <Icon name="tune" color={COLORS.dark.backgroundSoft} size={24} />
        </BorderlessButton>
      </View>
    </SafeAreaView>
  );
};

export default NewsDetails;
