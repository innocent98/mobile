import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import {MotiView} from 'moti';
import {RectButton} from 'react-native-gesture-handler';
import {Easing} from 'react-native-reanimated';
import {COLORS} from '../constants/theme';
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

const AbonnementDrop = ({setAbonne, data, setIsSuccess}) => {
  const user = useSelector(state => state.user.currentUser);
  const {userProfile} = useSelector(state => state.user);
  const {isFetching} = useSelector(state => state.process);
  const dispatch = useDispatch();
  // console.log(isFetching);

  const [isSelected, setIsSelected] = useState(false);
  const [mode, setMode] = useState('mtn');
  const [optionId, setOptionId] = useState('');
  const [phone, setPhone] = useState(userProfile.phone);
  // console.log(phone);

  const handlePhone = value => {
    setPhone(value);
  };

  const headers = {
    Authorization: `Bearer ${user.token}`,
  };

  const inputs = {
    phone_number: phone,
    option_id: optionId,
    user_id: userProfile.id,
    mode: mode,
  };
  console.log(inputs);

  const handleSubscription = async () => {
    dispatch(processStart());
    try {
      const res = await userRequest.post('/subcriptions', inputs, {headers});
      // console.log(res.data);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      dispatch(processSuccess());
    } catch (error) {
      // console.log(error.response.data);
      dispatch(processFailure());
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
          <Text style={styles.abonnementDropTitle}>{data?.modules?.name}</Text>
          <Text style={styles.abonnementDropSub}>{data?.content}</Text>
          {isSelected && (
            <Icon
              name="arrow-back"
              size={20}
              onPress={() => setIsSelected(false)}
            />
          )}
          {!isSelected && (
            <>
              {data?.options?.map((item, index) => (
                <RectButton
                  onPress={() => {
                    setIsSelected(true);
                    setOptionId(item.id);
                  }}
                  key={index}
                  style={{marginBottom: 10}}>
                  <Text style={styles.abonnementEditOption}>
                    {`${item.duration} ${item.duration_type}`}
                  </Text>
                </RectButton>
              ))}
            </>
          )}

          {isSelected && (
            <>
              <TextInput
                style={styles.abonnementEditInput}
                placeholder={userProfile.phone}
                placeholderTextColor="#000"
                mode="outlined"
                activeOutlineColor={COLORS.secondary}
                editable={true}
                defaultValue={userProfile.phone}
                value={phone}
                onChangeText={handlePhone}
              />
              <View style={styles.abonnementEditInput}>
                <Text
                  style={[
                    styles.smallText,
                    {fontFamily: 'IBMPlexSans-Regular'},
                  ]}>
                  Sélectionnez l'option de réseau
                </Text>
                <Picker
                  selectedValue={mode}
                  onValueChange={(itemValue, itemIndex) => setMode(itemValue)}
                  style={styles.abonnementEditInput}>
                  <Picker.Item label="mtn" value="mtn" />
                  <Picker.Item label="moov" value="moov" />
                </Picker>
              </View>
            </>
          )}
        </View>

        <View style={styles.abonneFlexBtn}>
          {isFetching ? (
            <RectButton style={styles.indicator}>
              <ActivityIndicator size="large" color={COLORS.secondary} />
            </RectButton>
          ) : (
            <RectButton
              onPress={handleSubscription}
              style={styles.abonneButtonSave}>
              <Text style={styles.abonneButtonSaveText}>je m'abonne</Text>
            </RectButton>
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

  const [abonne, setAbonne] = useState(false);
  const [message, setMessage] = useState([]);
  const [data, setData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

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
  // console.log(message);

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
      <ScrollView>
        <View style={abonne ? styles.abonnementConSha : styles.container}>
          {abonne && (
            <AbonnementDrop
              setAbonne={setAbonne}
              data={data}
              setIsSuccess={setIsSuccess}
            />
          )}
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
                  <RectButton
                    onPress={() => {
                      setAbonne(true);
                      setData(item);
                    }}>
                    <View style={styles.abonnementDownImgCon}>
                      <Image
                        source={{uri: baseURL + item?.fichier?.path}}
                        resizeMode="contain"
                        style={styles.abonnementDownImg}
                      />
                      <Text style={styles.abonnementText}>{item?.title}</Text>
                    </View>
                  </RectButton>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Abonnement;
