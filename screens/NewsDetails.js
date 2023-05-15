import {View, SafeAreaView, ScrollView, Share} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {makeGet, makeGet2} from '../redux/apiCalls';
import {useEffect} from 'react';
import {
  processFailure,
  processStart,
  processSuccess,
} from '../redux/processRedux';
import {Notification} from '../components/Notification';
import {useWindowDimensions} from 'react-native';
import {AbonnementDrop} from './Abonnement';
import {userRequest} from '../redux/requestMethod';
import NewsDetailsPage from '../components/NewsDetailsPage';

const NewsDetails = ({route}) => {
  const user = useSelector(state => state.user.currentUser);
  const isDark = useSelector(state => state.theme.isDark);
  const {width} = useWindowDimensions();
  const {userProfile} = useSelector(state => state.user);
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {detUrl} = route?.params;

  const [message, setMessage] = useState([]);
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
    const messageTitle = message?.map((item) => item.title)
    try {
      await Share.share({
        message: messageTitle && messageTitle[0] + '\n\n' + 'http://lanation.bj/client' + detUrl,
        url: 'http://lanation.bj/client' + detUrl,
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
            {message?.map((message, index) => (
              <NewsDetailsPage
                message={message}
                pricing={pricing}
                scrollViewRef={scrollViewRef}
                setAbonne={setAbonne}
                setData={setData}
                abonne={abonne}
                key={index}
              />
            ))}
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
