import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import {MotiView} from 'moti';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Easing} from 'react-native-reanimated';
import {COLORS, SIZES} from '../constants/theme';
import {makeGet} from '../redux/apiCalls';
import {baseURL} from '../redux/config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  processFailure,
  processStart,
  processSuccess,
} from '../redux/processRedux';
import {userRequest} from '../redux/requestMethod';
import {Picker} from '@react-native-picker/picker';
import {Notification} from '../components/Notification';
import {useNavigation} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

export const AbonnementDrop = ({
  setAbonne,
  data,
  setIsSuccess,
  model,
  model_id,
  type,
  setPaymentRes,
  amount,
  nbre,
}) => {
  const user = useSelector(state => state.user.currentUser);
  const {userProfile} = useSelector(state => state.user);
  const {isFetching} = useSelector(state => state.process);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const [isSelected, setIsSelected] = useState(false);
  const [mode, setMode] = useState('');
  const [optionId, setOptionId] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState(userProfile?.phone);
  const [errTxt, seterrTxt] = useState('');

  const handlePhone = value => {
    setPhone(value);
    seterrTxt('');
  };
  const handleAddress = value => {
    setAddress(value);
    seterrTxt('');
  };

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const inputs = {
    phone_number: phone,
    option_id: optionId,
    user_id: userProfile?.id,
    mode: mode,
  };
  const inputs2 = {
    phone_number: phone,
    option_id: optionId,
    user_id: userProfile?.id,
    mode: mode,
    model: model,
    model_id: model_id,
    type: type,
    nbre: nbre,
    // address: address,
    // amount: amount,
  };

  const handleSubscription = async () => {
    if (!nbre) {
      if (mode === '' || phone === '') {
        seterrTxt("S'il vous plaît remplir toutes les entrées");
      } else if (phone.length < 8) {
        seterrTxt("L'entrée téléphonique n'est pas valide");
      } else {
        dispatch(processStart());
        try {
          const res = await userRequest.post(
            '/subscriptions',
            type ? inputs2 : inputs,
            {headers},
          );
          setPaymentRes(res.data);
          setIsSelected(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
          dispatch(processSuccess());
          navigation.navigate('Success');
        } catch (error) {
          dispatch(processFailure());
          navigation.navigate('Error');
        }
      }
    } else {
      if (mode === '' || phone === '' || address === '') {
        seterrTxt("S'il vous plaît remplir toutes les entrées");
      } else if (phone.length < 8) {
        seterrTxt("L'entrée téléphonique n'est pas valide");
      } else {
        dispatch(processStart());
        try {
          const res = await userRequest.post('/subscriptions', inputs2, {
            headers,
          });
          setPaymentRes(res.data);
          setIsSelected(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
          dispatch(processSuccess());
          navigation.navigate('Success');
        } catch (error) {
          dispatch(processFailure());
          navigation.navigate('Error');
        }
      }
    }
  };

  return (
    <MotiView
      from={{top: -10, opacity: 0.5}}
      animate={{top: 30, opacity: 1}}
      transition={{
        type: 'timing',
        duration: 1000,
        easing: Easing.out(Easing.ease),
      }}
      style={styles.abonnementContainer}>
      <ScrollView>
        <View>
          <Text style={styles.abonnementDropTitle}>
            Les options {data?.modules?.name}
          </Text>
          <RenderHtml
            contentWidth={width}
            source={{
              html: `${data?.content}`,
            }}
            baseStyle={{
              fontFamily: 'IBMPlexSans-Regular',
              color: COLORS.dark.background,
              fontSize: SIZES.base,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          />
          {/* <Text style={styles.abonnementDropSub}>{data?.content}</Text> */}
          {isSelected && (
            <BorderlessButton
              style={styles.iconsBtn}
              onPress={() => setIsSelected(false)}>
              <Icon name="arrow-back" size={20} />
            </BorderlessButton>
          )}
          {!isSelected && (
            <>
              {!type ? (
                data?.options?.map((item, index) => (
                  <RectButton
                    onPress={() => {
                      setIsSelected(true);
                      setOptionId(item?.id);
                    }}
                    key={index}
                    style={{marginBottom: 10}}>
                    <View style={styles.abonnementEditOptionCon}>
                      <Text style={styles.abonnementEditOption}>
                        {`${item?.duration} ${item?.duration_type}`}
                      </Text>
                      <Text style={styles.abonnementEditOption}>
                        {`FCFA ${item?.price}`}
                      </Text>
                    </View>
                  </RectButton>
                ))
              ) : data?.options ? (
                data?.options?.slice(0, 1).map((item, index) => (
                  <RectButton
                    onPress={() => {
                      setIsSelected(true);
                      setOptionId(item?.id);
                    }}
                    key={index}
                    style={{marginBottom: 10}}>
                    <View style={styles.abonnementEditOptionCon}>
                      <Text style={styles.abonnementEditOption}>
                        {`${item?.duration} ${item?.duration_type}`}
                      </Text>
                      <Text style={styles.abonnementEditOption}>
                        {`FCFA ${item?.price}`}
                      </Text>
                    </View>
                  </RectButton>
                ))
              ) : (
                <RectButton
                  onPress={() => {
                    setIsSelected(true);
                  }}
                  style={{marginBottom: 10}}>
                  <View style={styles.abonnementEditOptionCon}>
                    <Text style={styles.abonnementEditOption}>
                      {`${nbre} Quantite`}
                    </Text>
                    <Text style={styles.abonnementEditOption}>
                      {`FCFA ${amount}`}
                    </Text>
                  </View>
                </RectButton>
              )}
            </>
          )}

          {isSelected && (
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
              <TextInput
                style={styles.abonnementEditInput}
                placeholder={userProfile?.phone}
                placeholderTextColor="#000"
                mode="outlined"
                activeOutlineColor={COLORS.secondary}
                editable={true}
                defaultValue={userProfile?.phone}
                value={phone}
                onChangeText={handlePhone}
              />
              {nbre && (
                <TextInput
                  style={styles.abonnementEditInput}
                  placeholder={"Entrer l'adresse"}
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  editable={true}
                  value={address}
                  onChangeText={handleAddress}
                />
              )}
              <View style={styles.abonnementEditInput}>
                <Picker
                  selectedValue={mode}
                  onValueChange={(itemValue, itemIndex) => {
                    setMode(itemValue);
                    seterrTxt('');
                  }}>
                  <Picker.Item
                    label="Sélectionnez l'option de réseau"
                    value=""
                  />
                  <Picker.Item label="MTN" value="mtn" />
                  <Picker.Item label="MOOV" value="moov" />
                </Picker>
              </View>
              {errTxt && (
                <Text
                  style={[
                    styles.smallText,
                    {
                      fontFamily: 'IBMPlexSans-Regular',
                      color: COLORS.light.red,
                    },
                  ]}>
                  {errTxt}
                </Text>
              )}
            </KeyboardAvoidingView>
          )}
        </View>

        <View style={styles.abonneFlexBtn}>
          {isFetching ? (
            <RectButton style={styles.indicator}>
              <ActivityIndicator size="large" color={COLORS.secondary} />
            </RectButton>
          ) : (
            <>
              {isSelected && (
                <RectButton
                  onPress={handleSubscription}
                  style={styles.abonneButtonSave}>
                  <Text style={styles.abonneButtonSaveText}>je m'abonne</Text>
                </RectButton>
              )}
            </>
          )}
          <RectButton
            onPress={() => setAbonne(false)}
            style={styles.abonneButtonExit}>
            <Text style={styles.abonneButtonExitText}>annuler</Text>
          </RectButton>
        </View>
      </ScrollView>
    </MotiView>
  );
};

const Abonnement = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);

  const [abonne, setAbonne] = useState(false);
  const [message, setMessage] = useState([]);
  const [data, setData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentRes, setPaymentRes] = useState({});

  const fetchNews = () => {
    makeGet(dispatch, '/pricings', setMessage);
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

      <View
        style={
          abonne
            ? [styles.abonnementConSha, {paddingBottom: 0}]
            : [styles.container, {paddingBottom: 0}]
        }>
        {abonne && (
          <AbonnementDrop
            setAbonne={setAbonne}
            data={data}
            setIsSuccess={setIsSuccess}
            setPaymentRes={setPaymentRes}
          />
        )}
        <ScrollView style={[styles.scrollView, {paddingHorizontal: 0}]}>
          <TopComp />
          <View style={styles.abonnement}>
            <Image
              source={require('../assets/subcription.png')}
              resizeMode="contain"
              style={styles.abbonementImg}
            />

            <Text style={styles.abonnementText}>
              Choisissez votre type d'abonnement
            </Text>

            <View style={styles.abonnementDown}>
              {message?.data?.map((item, index) => (
                <View key={index}>
                  {item?.type === 'newspapers' || item?.type === 'newscasts' ? (
                    <RectButton
                      onPress={() => {
                        setAbonne(true);
                        setData(item);
                        scrollViewRef.current?.scrollTo({
                          x: 0,
                          y: 0,
                          animated: true,
                        });
                      }}
                      enabled={!abonne}>
                      <View style={styles.abonnementDownImgCon}>
                        <Image
                          source={{uri: baseURL + item?.fichier?.path}}
                          resizeMode="contain"
                          style={styles.abonnementDownImg}
                        />
                        <Text style={styles.abonnementText}>{item?.title}</Text>
                      </View>
                    </RectButton>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Abonnement;
